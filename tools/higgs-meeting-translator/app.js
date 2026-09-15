import { Engine, LABELS, mintEphemeralKey } from "./engine.js";
import { keyStore, sessionStore, prefs, toMarkdown, toJSONL, download } from "./store.js";

(() => {
  const $ = (id) => document.getElementById(id);
  const feed = $("feed");
  let inner = null;
  const segs = new Map();    // seg id -> {orig, tr, card, data}
  const cards = new Map();   // card id -> {el, grid, state, refinedEl, data, pending}
  let state = null;
  let ws = null;
  let reconnectDelay = 500;
  let following = true;
  let missed = 0;
  let connected = false;
  let simDisconnected = false;
  const q0 = new URLSearchParams(location.search);
  const demo = !!q0.get("demo");
  const viewer = q0.get("view") === "1";
  if (viewer) document.body.classList.add("viewer");
  const DEFAULT_TURNS = { pause_ms: 600, soft_max_ms: 5000, hard_max_ms: 10000, group_gap_s: 0.6 };

  // ---------------------------------------------------------------- theme
  const root = document.documentElement;
  root.dataset.theme = "light";
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
  const syncThemeBtn = () => $("theme-btn").setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme");
  $("theme-btn").onclick = () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncThemeBtn();
    pushPrefs();
  };
  let readingMode = "both";
  function pushPrefs() {
    if (viewer) return;
    send({ type: "config", view_prefs: { theme: root.dataset.theme || "system",
                                        text_size: parseInt(getComputedStyle(root).getPropertyValue("--line-size")) || 16,
                                        layout: readingMode } });
  }
  try { const sz = localStorage.getItem("textSize"); if (sz) setTextSize(sz, false); } catch (e) {}
  function setTextSize(px, persist = true) {
    root.style.setProperty("--line-size", px + "px");
    root.style.setProperty("--line-lh", Math.round(px * 1.5) + "px");
    for (const b of $("text-size").querySelectorAll(".opt")) b.setAttribute("aria-checked", String(b.dataset.size === String(px)));
    if (persist) { try { localStorage.setItem("textSize", String(px)); } catch (e) {} pushPrefs(); }
  }
  for (const b of $("text-size").querySelectorAll(".opt")) b.onclick = () => setTextSize(b.dataset.size);
  function setReadingMode(mode, persist = true) {
    readingMode = mode;
    document.body.classList.toggle("translation-only", mode === "translation");
    for (const b of $("reading-mode").querySelectorAll(".opt")) b.setAttribute("aria-checked", String(b.dataset.mode === mode));
    if (persist) { try { localStorage.setItem("readingMode", mode); } catch (e) {} pushPrefs(); }
  }
  try { const m = localStorage.getItem("readingMode"); if (m) setReadingMode(m, false); } catch (e) {}
  for (const b of $("reading-mode").querySelectorAll(".opt")) b.onclick = () => setReadingMode(b.dataset.mode);
  for (const g of document.querySelectorAll('.switch[role="radiogroup"]')) g.addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const opts = [...g.querySelectorAll(".opt")];
    const i = opts.indexOf(document.activeElement);
    if (i < 0) return;
    e.preventDefault();
    const n = opts[(i + (e.key === "ArrowRight" ? 1 : -1) + opts.length) % opts.length];
    n.focus(); n.click();
  });

  // ------------------------------------------------------------ settings drawer
  const isOpen = () => $("sidebar").classList.contains("open");
  const setSidebar = (open) => {
    if (viewer) return;
    if (!open && isOpen()) applyConfig();
    $("sidebar").classList.toggle("open", open);
    $("sidebar").setAttribute("aria-hidden", String(!open));
    document.querySelector(".app").classList.toggle("settings-open", open);
    $("scrim").hidden = !(open && matchMedia("(max-width: 900px)").matches);
    $("settings-btn").setAttribute("aria-expanded", String(open));
    const url = new URL(location.href);
    if (open) url.searchParams.set("settings", "1"); else url.searchParams.delete("settings");
    history.replaceState(null, "", url);
    if (open) setTimeout(() => $("target").focus({ preventScroll: true }), 220);
  };
  $("settings-btn").onclick = () => setSidebar(!isOpen());
  if (viewer) document.title = "Higgs Meeting Translator · Live view";
  $("close-settings").onclick = () => { setSidebar(false); $("settings-btn").focus(); };
  $("scrim").onclick = () => setSidebar(false);

  // ------------------------------------------------------------------ engine
  let engine = null;
  function setConnected(on) { connected = on; renderConn(); if (state) applyState(state); }
  function renderConn() {
    const el = $("conn");
    if (!el) return;
    el.className = "help conn";
    let text = demo ? "Demo data" : "In this browser";
    if (state && (connected || demo)) {
      const active = Object.values(state.sources || {});
      let st = "Idle";
      if (state.running) {
        if (!state.enabled.mic && !state.enabled.system) { st = "No source on"; el.classList.add("warn"); }
        else if (active.some((x) => x.error)) { st = "Capture error"; el.classList.add("err"); }
        else if (active.length && active.every((x) => x.capturing && x.connected)) { st = "Live"; el.classList.add("live"); }
        else if (active.some((x) => x.capturing && x.silent_s >= 5)) { st = "No signal"; el.classList.add("warn"); }
        else st = "Starting…";
      }
      text += " · " + st;
    }
    void text;
  }
  function connect() {
    engine = new Engine({ onMessage: handle, onSession: (session) => { sessionStore.save(session); renderSessions(); } });
    engine.apiKey = keyStore.read();
    const p = prefs.get();
    engine.send({ type: "config", target_language: p.target_language, source_hint: p.source_hint || "", hq: p.hq !== false,
                  speaker_notes: p.speaker_notes || "", group_gap_s: p.group_gap_s, segmenter: p.segmenter,
                  enabled: p.enabled && (p.enabled.mic || p.enabled.system) ? p.enabled : { mic: false, system: true } });
    setConnected(true);
    handle(engine.snapshot());
    renderSessions();
  }
  const send = (obj) => { if (engine) engine.send(obj); };
  // slice, not subarray: the PCM must start at an even byte offset for Int16 views
  const sendBinary = (buf) => { if (engine) engine.feedAudio(buf[0] === 0 ? "mic" : "system", buf.slice(1)); };

  // ------------------------------------------------------- browser capture
  const cap = window.RTCapture;
  let micDeviceId = "";
  let systemArmed = false;      // user picked a screen in the picker this session
  if (cap) {
    cap.setSender(sendBinary);
    cap.setOnEnded((source) => {
      send({ type: "audio_stop", source });
      if (source === "system") { systemArmed = false; if (state && state.running) setNote("share", "warning", "Screen share ended", "Computer audio comes through screen sharing. Share again to keep hearing it.", { label: "Share again", run: shareScreen }); }
      syncCapture();
    });
  }
  async function syncCapture() {
    if (!state || viewer || demo || !cap) return;
    const wantMic = state.running && state.enabled.mic;
    const wantSys = state.running && state.enabled.system;
    if (wantMic && !cap.isActive("mic")) {
      try {
        const label = await cap.startMic(micDeviceId);
        send({ type: "audio_start", source: "mic" });
        const mp = $("mic-perm"); if (mp) mp.textContent = "Using " + label + ".";
        clearNote("micperm");
      } catch (e) {
        setNote("micperm", "error", "Microphone blocked", "Allow the microphone for this site in your browser (usually the icon next to the address), then turn the microphone on again.");
        send({ type: "config", enabled: { mic: false } });
      }
    } else if (!wantMic && cap.isActive("mic")) { await cap.stop("mic"); send({ type: "audio_stop", source: "mic" }); }
    if (!wantSys && cap.isActive("system")) { await cap.stop("system"); send({ type: "audio_stop", source: "system" }); systemArmed = false; }
    if (wantSys && !cap.isActive("system") && !systemArmed) {
      setNote("share", "warning", "Share your screen audio", "Computer audio comes through screen sharing. Turn Computer audio on to see screen sharing options.", { label: "Share screen", run: shareScreen });
    }
  }
  function openKeySettings() { setSidebar(true); $("api-key").focus(); }
  // From a note's button: open the share picker, turn Computer audio on, and start if idle.
  async function shareScreen() {
    if (!(await armSystemShare())) return;
    clearNote("share");
    setToggle("en-system", true); if ($("rest-system")) setToggle("rest-system", true);
    send({ type: "config", enabled: { system: true } });
    if (state && !state.running) startStop();
  }
  // getDisplayMedia needs a user gesture: called from the click that turns call audio on / starts.
  let lastShareFailure = "";
  async function armSystemShare() {
    if (!cap || !cap.isActive("system")) {
      try {
        const ok = await cap.startSystem();
        if (!ok) { lastShareFailure = "noaudio"; setNote("share", "warning", "No audio detected in screen sharing", "Share again and make sure audio is included in your browser's sharing options.", { label: "Try again", run: shareScreen }); return false; }
        send({ type: "audio_start", source: "system" });
        clearNote("share");
      } catch (e) { lastShareFailure = "cancelled"; setNote("share", "warning", "Screen share cancelled", "Computer audio comes through screen sharing. Share a window or screen and include its audio.", { label: "Share screen", run: shareScreen }); return false; }
    }
    systemArmed = true;
    return true;
  }

  function handle(msg) {
    switch (msg.type) {
      case "state": applyState(msg); break;
      case "snapshot":
        clearFeed();
        (msg.cards || []).forEach(renderCard);
        msg.segments.forEach(upsert);
        (msg.cards || []).forEach(renderCard);
        $("log").innerHTML = "";
        (msg.logs || []).forEach(appendLog);
        break;
      case "segment": upsert(msg.segment); break;
      case "delta": {
        const s = segs.get(msg.id);
        if (s) { s.data.translation += msg.delta; s.tr.textContent = s.data.translation; s.tr.classList.add("cursor"); scrollIfFollowing(); }
        break;
      }
      case "remove": removeSeg(msg.id); break;
      case "card": {
        const card = cards.get(msg.card.id);
        if (card && msg.card.refine_status !== "refining") {
          card.pending = "";
          if (card.refinedEl && msg.card.refined) { card.refinedEl.classList.remove("cursor", "flash"); void card.refinedEl.offsetWidth; card.refinedEl.classList.add("flash"); }
          if (msg.card.refined && msg.card.refined !== (card.data.refined || "")) announce(`${msg.card.speaker || srcLabel(msg.card.source)}: ${msg.card.refined}`);
        }
        renderCard(msg.card);
        scrollIfFollowing();
        break;
      }
      case "card_remove": removeCard(msg.id); break;
      case "card_delta": break;   // refined output is JSON; shown when complete
      case "levels":
        for (const [name, lvl] of Object.entries(msg.levels)) {
          const w = Math.round(lvl * 100) + "%";
          for (const id of ["lvl-" + name, "lvl-" + name + "-side"]) { const el = $(id); if (el) el.style.width = w; }
        }
        break;
      case "log": appendLog(msg); break;
    }
  }

  // ------------------------------------------------------------------ notes
  const notes = new Map();
  let notesSig = "";
  // Only the most useful alert is shown; the rest wait their turn (a cause before its consequence).
  const NOTE_PRIORITY = ["conn", "key", "err-mic", "err-system", "micperm", "share", "sig-mic", "nosrc"];
  const noteRank = (key) => { const i = NOTE_PRIORITY.indexOf(key); return i < 0 ? NOTE_PRIORITY.length : i; };
  let notesSwap = 0;
  function renderNotes() {
    const sig = [...notes].map(([k, n]) => k + n.kind + n.title + n.body).join("|");
    if (sig === notesSig) return;
    notesSig = sig;
    const box = $("notes");
    const top = [...notes].sort((a, b) => noteRank(a[0]) - noteRank(b[0])).slice(0, 1);
    const nextSig = top.map(([k, n]) => k + n.kind + n.title + n.body).join("|");
    const motion = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cur = box.firstElementChild;
    if (cur && cur.dataset.sig === nextSig && !cur.classList.contains("leaving")) return;   // same alert still on top
    if (cur && !cur.classList.contains("leaving") && motion) {
      // the old alert fades out first; the new one (if any) appears once it is gone
      cur.classList.add("leaving");
      const token = ++notesSwap;
      cur.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 140, easing: "ease-out" }).onfinish = () => { cur.remove(); if (token === notesSwap) { notesSig = null; renderNotes(); } };
      return;
    }
    box.innerHTML = "";
    for (const [key, n] of top) {
      const el = document.createElement("div");
      el.className = "note note-" + n.kind;
      el.dataset.sig = nextSig;
      el.setAttribute("role", "status");
      const icon = document.createElement("span"); icon.className = "note-icon"; icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = n.kind === "error"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4.5M12 16h.01"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5 2.8 19.5h18.4z"/><path d="M12 9.5v4.5M12 17h.01"/></svg>';
      const strong = document.createElement("strong"); strong.textContent = n.title + " ";
      const span = document.createElement("span"); span.textContent = n.body;
      el.append(icon, strong, span);
      if (n.action) { const b = document.createElement("button"); b.className = "btn btn-sm"; b.textContent = n.action.label; b.onclick = n.action.run; el.appendChild(b); }
      if (motion) el.animate([{ opacity: 0, transform: "translateY(-4px)" }, { opacity: 1, transform: "none" }], { duration: 180, easing: "ease-out" });
      if (!["key", "conn", "nosrc"].includes(key)) {
        const x = document.createElement("button"); x.className = "btn btn-tertiary btn-sq btn-sm dismiss"; x.setAttribute("aria-label", "Dismiss"); x.textContent = "×";
        x.onclick = () => { notes.delete(key); dismissed.add(key + "|" + n.body); renderNotes(); };
        el.appendChild(x);
      }
      box.appendChild(el);
    }
  }
  const dismissed = new Set();
  function setNote(key, kind, title, body, action) {
    if (dismissed.has(key + "|" + body)) return;
    const cur = notes.get(key);
    if (cur && cur.kind === kind && cur.title === title && cur.body === body) return;
    notes.set(key, { kind, title, body, action });
    renderNotes();
  }
  function clearNote(key) {
    for (const d of [...dismissed]) if (d.startsWith(key + "|")) dismissed.delete(d);
    if (notes.delete(key)) renderNotes();
  }
  function announce(text) { const r = $("sr-live"); r.textContent = ""; setTimeout(() => { r.textContent = text; }, 30); }

  // -------------------------------------------------------------------- state
  function setToggle(id, on) { $(id).setAttribute("aria-checked", String(!!on)); }
  const isOn = (id) => $(id).getAttribute("aria-checked") === "true";
  const srcLabel = (source) => (state && state.labels && state.labels[source]) || source;
  const guidance = (name, err) => {
    const e = (err || "").toLowerCase();
    if (name === "system" && (e.includes("tcc") || e.includes("declined") || e.includes("permission")))
      return "Allow Screen & System Audio Recording for Higgs Meeting Translator in System Settings → Privacy & Security, then press Start again.";
    if (name === "mic" && (e.includes("permission") || e.includes("denied")))
      return "Allow Microphone access for Higgs Meeting Translator in System Settings → Privacy & Security, then press Start again.";
    if (e.includes("helper not built")) return "Build the audio helper first: cd helper && swift build -c release.";
    return err || "See the log for details.";
  };

  // True once the user picked "Custom…" for the target language; the field stays until they pick a listed one.
  let customLang = false;
  const knownLanguages = () => [...$("target").options].map((o) => o.value || o.text).filter((v) => v !== "__custom");
  let wasRunning = false;
  // The floating New Session button belongs to an ended session only: never while running or starting.
  function renderCbNew() { $("cb-new").hidden = !state || !!state.running || isStarting(); }
  function applyState(s) {
    state = s;
    if (viewer && s.view_prefs) {
      const vp = s.view_prefs;
      root.dataset.theme = vp.theme === "dark" ? "dark" : "light";
      if (vp.text_size) setTextSize(vp.text_size, false);
      if (vp.layout) setReadingMode(vp.layout, false);
    }
    if (s.running) starting = 0;
    // Ending a session brings Computer audio back on, so the resting state always starts from the default.
    if (wasRunning && !s.running && !s.enabled.system && !s.enabled.mic) send({ type: "config", enabled: { system: true } });
    if (wasRunning && !s.running) clearNote("share");
    wasRunning = !!s.running;
    const btn = $("start-btn");
    renderCbNew();
    btn.disabled = !s.running && !s.enabled.mic && !s.enabled.system;
    btn.classList.toggle("running", s.running);
    $("start-label").textContent = s.running ? "Stop" : "Start";
    btn.title = s.running ? "Stop (⌘⇧S)" : "Start (Space)";
    if (!s.has_api_key && onboarded() && !needsOnboarding()) setNote("key", "warning", "Add your Boson API key", "Open Settings → API Key and paste your key. It stays in this browser.", { label: "Open Settings", run: openKeySettings });
    else clearNote("key");

    const sel = $("target");
    const known = knownLanguages();
    if (!known.includes(s.target_language)) customLang = true;
    if (customLang) {
      sel.value = "__custom"; $("target-custom").hidden = false;
      if (!known.includes(s.target_language) && document.activeElement !== $("target-custom")) $("target-custom").value = s.target_language;
    } else { sel.value = s.target_language; $("target-custom").hidden = true; }
    if (document.activeElement !== $("source-hint")) $("source-hint").value = s.source_hint || "";
    if (!demo) prefs.set({ target_language: s.target_language, source_hint: s.source_hint, hq: s.hq, speaker_notes: s.speaker_notes, group_gap_s: s.group_gap_s, segmenter: s.segmenter, enabled: s.enabled });

    const nums = { "pause-ms": s.segmenter && s.segmenter.pause_ms, "soft-max": s.segmenter && s.segmenter.soft_max_ms / 1000,
                   "hard-max": s.segmenter && s.segmenter.hard_max_ms / 1000, "group-gap": s.group_gap_s };
    for (const [id, v] of Object.entries(nums)) if (v != null && document.activeElement !== $(id)) $(id).value = v;
    $("api-key").placeholder = s.has_api_key ? `••••••••${s.key_hint}` : "bai-…";
    $("api-key").classList.toggle("saved", !!s.has_api_key);
    renderSaveBtn($("save-key"), !!s.has_api_key && !$("api-key").value, "Save Key", "btn-secondary", !!$("api-key").value);
    $("reset-key").hidden = !s.has_api_key;
    for (const b of $("translate-mode").querySelectorAll(".opt")) b.setAttribute("aria-checked", String((b.dataset.hq === "1") === !!s.hq));
    $("hq-off-text").hidden = !!s.hq;
    syncCapture();
    $("people-group").classList.toggle("is-off", !s.hq);
    $("speaker-notes").disabled = !s.hq;
    if (document.activeElement !== $("speaker-notes")) $("speaker-notes").value = s.speaker_notes || "";

    const activeSrc = Object.values(s.sources || {});
    if (s.running && !s.enabled.mic && !s.enabled.system) setNote("nosrc", "warning", "Nothing to capture", "Turn on the mic or computer audio to continue translating.", { label: "Turn on computer audio", run: () => toggleSource("system") });
    else clearNote("nosrc");
    void activeSrc;
    renderConn();

    // sources: control-bar switches, dots, and the status lines in the drawer
    for (const name of ["mic", "system"]) {
      const on = !!s.enabled[name];
      setToggle("en-" + name, on);
      const st = $("st-" + name) || document.createElement("span");
      const dot = $("dot-" + name);
      const sw = $("en-" + name);
      const label = name === "mic" ? "Mic audio" : "Computer audio";
      st.className = "help"; dot.className = "cb-dot";
      let stext = "Idle";
      const src = s.sources[name];
      if (!on) stext = "Off";
      else if (!s.running) stext = "Idle";
      else if (!src) stext = "Starting…";
      else if (src.error) { stext = "Error"; dot.classList.add("err"); setNote("err-" + name, "error", label + " capture failed", guidance(name, src.error)); }
      else if (src.capturing && src.silent_s >= 5) { stext = `No signal for ${Math.round(src.silent_s)} s`; dot.classList.add("warn");
        if (name === "mic") setNote("sig-mic", "warning", "No microphone signal", "Check the selected device, and allow Microphone access for Higgs Meeting Translator in System Settings → Privacy & Security."); }
      else if (src.capturing && src.connected) stext = "Live";
      else stext = src.capturing ? "Connecting…" : "Waiting for audio…";
      if (!(src && src.error)) clearNote("err-" + name);
      if (!(src && src.capturing && src.silent_s >= 5)) clearNote("sig-mic");
      st.textContent = stext; srcStatus[name] = stext;
      sw.setAttribute("aria-label", `${label} · ${stext}`);
      sw.title = `${label} · ${stext}` + (on ? "" : " · click to turn on") + (name === "mic" ? " · ▴ choose device" : "");
    }
    if (!s.running) for (const id of ["lvl-mic", "lvl-system"]) { const el = $(id); if (el) el.style.width = "0"; }
    for (const card of cards.values()) layoutCard(card);
    updateEmpty();
  }

  let micDevices = [];
  let micCurrent = "";
  function fillMicSelect(devices, current) {
    micDevices = devices.filter((d) => d.inputs > 0);
    micCurrent = current;
    if (!$("mic-menu").hidden) buildMicMenu();
  }
  let browserDevices = [];
  async function buildMicMenu() {
    const menu = $("mic-menu");
    menu.innerHTML = "";
    const title = document.createElement("div"); title.className = "menu-title"; title.textContent = "Microphone";
    menu.appendChild(title);
    const browserMode = !!cap && !demo;
    let items;
    if (browserMode) {
      browserDevices = await cap.devices();
      items = [{ value: "", name: "System default", sub: "" }, ...browserDevices.map((d) => ({ value: d.deviceId, name: d.label || "Microphone", sub: "" }))];
      if (!browserDevices.some((d) => d.label)) items.push({ value: "", name: "Allow the microphone to see device names", sub: "", dim: true });
    } else {
      const def = micDevices.find((d) => d.default_input);
      items = [{ value: "", name: "System default", sub: def ? def.name : "" }, ...micDevices.map((d) => ({ value: d.name, name: d.name, sub: "" }))];
      if (micCurrent && !micDevices.some((d) => d.name === micCurrent)) items.push({ value: micCurrent, name: micCurrent, sub: "not found" });
    }
    const current = browserMode ? micDeviceId : micCurrent;
    for (const it of items) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "menu-item"; b.setAttribute("role", "menuitemradio");
      b.setAttribute("aria-checked", String(it.value === current && !it.dim));
      b.innerHTML = '<svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5l3 3 7-7"/></svg><span class="txt"><span></span></span>';
      b.querySelector(".txt span").textContent = it.name;
      if (it.sub) { const sub = document.createElement("span"); sub.className = "sub"; sub.textContent = it.sub; b.querySelector(".txt").appendChild(sub); }
      b.onclick = async () => {
        if (browserMode) { micDeviceId = it.value; if (cap.isActive("mic")) { await cap.stop("mic"); send({ type: "audio_stop", source: "mic" }); syncCapture(); } }
        else { micCurrent = it.value; send({ type: "config", mic_device: it.value }); }
        openMicMenu(false);
      };
      menu.appendChild(b);
    }
  }
  let menuTrigger = null;
  async function openMicMenu(open, trigger) {
    const menu = $("mic-menu");
    const prev = menuTrigger;
    if (open) { menuTrigger = trigger || $("mic-arrow"); if (menu.parentElement !== menuTrigger.parentElement) menuTrigger.parentElement.appendChild(menu); send({ type: "refresh_devices" }); await buildMicMenu(); }
    const was = !menu.hidden;
    menu.hidden = !open;
    for (const id of ["mic-arrow", "rest-mic-arrow"]) { const t = $(id); if (t) t.setAttribute("aria-expanded", String(open && t === menuTrigger)); }
    if (open) {
      menu.classList.remove("below");
      if (menuTrigger === $("rest-mic-arrow") && menu.getBoundingClientRect().right > feed.getBoundingClientRect().right - 8) menu.classList.add("below");
      const first = menu.querySelector('[aria-checked="true"]') || menu.querySelector(".menu-item"); if (first) first.focus();
    }
    else if (was && prev && document.contains(prev)) prev.focus();
    if (!open) menuTrigger = null;
  }
  $("mic-arrow").onclick = (e) => { e.stopPropagation(); openMicMenu($("mic-menu").hidden || menuTrigger !== $("mic-arrow"), $("mic-arrow")); };
  $("mic-menu").addEventListener("keydown", (e) => {
    const items = [...$("mic-menu").querySelectorAll(".menu-item")];
    const i = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    else if (e.key === "Home") { e.preventDefault(); items[0].focus(); }
    else if (e.key === "End") { e.preventDefault(); items[items.length - 1].focus(); }
  });
  document.addEventListener("click", (e) => { if (!$("mic-menu").hidden && !e.target.closest("#src-mic, #tile-mic")) openMicMenu(false); });
  $("mic-menu").addEventListener("focusout", (e) => { if (!$("mic-menu").hidden && !$("mic-menu").contains(e.relatedTarget) && e.relatedTarget !== $("mic-arrow")) { $("mic-menu").hidden = true; $("mic-arrow").setAttribute("aria-expanded", "false"); } });

  // --------------------------------------------------------------------- feed
  const fmtTime = (t) => new Date(t * 1000).toLocaleTimeString([], { hour12: false });

  function clearFeed() {
    segs.clear(); cards.clear();
    following = true; missed = 0;
    $("jump").hidden = true; $("jump").querySelector("span").textContent = "Jump to live";
    feed.innerHTML = "";
    inner = document.createElement("div");
    inner.className = "feed-inner";
    feed.appendChild(inner);
    if (typeof refollow !== "undefined") refollow.observe(inner);
    updateEmpty();
  }
  const onboarded = () => { try { return localStorage.getItem("rt.onboarded") === "1"; } catch (e) { return false; } };
  const forceOnboarding = new URLSearchParams(location.search).get("onboarding") === "1";
  const needsOnboarding = () => !viewer && state && !state.running && (forceOnboarding || (!demo && (!state.has_api_key || !onboarded())));
  const PLAY_SVG = '<svg class="icon-play" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2.5v11l9-5.5z"/></svg>';
  const STOP_SVG = '<svg class="icon-stop" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="1.5"/></svg>';
  const TILE_SVG = '<div class="tile"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18M7 8v8M17 8v8M3 11v2M21 11v2"/></svg></div>';
  function renderOnboarding() {
    let box = $("empty");
    if (box && !box.classList.contains("onboarding")) { box.remove(); box = null; }
    if (!box) {
      box = document.createElement("div");
      box.id = "empty"; box.className = "empty onboarding";
      box.innerHTML = TILE_SVG + `
          <h2>Welcome to Higgs Meeting Translator</h2>
          <p>Meetings and conversations, translated into the language you choose in real time.</p>
          <div class="ob-cards">
            <section class="ob-card" aria-labelledby="ob-t1">
              <div class="ob-num" aria-hidden="true">1</div>
              <h3 class="ob-title" id="ob-t1">Add your API key</h3>
              <p class="ob-body">Get one at <a href="https://www.boson.ai/workspace" target="_blank" rel="noopener">boson.ai/workspace</a>. It's stored on your device.</p>
              <div class="ob-action">
                <p class="help error" id="ob-err" role="alert" hidden></p>
                <input id="ob-key" class="input" type="password" placeholder="bai-…" aria-label="Boson API key" autocomplete="off" spellcheck="false">
                <button class="btn" id="ob-save" disabled>Save</button>
              </div>
            </section>
            <section class="ob-card" aria-labelledby="ob-t2">
              <div class="ob-num" aria-hidden="true">2</div>
              <h3 class="ob-title" id="ob-t2">Choose a language</h3>
              <p class="ob-body">Choose the target language for translation. You can change it later in Settings.</p>
              <div class="ob-action">
                <select id="ob-target" class="select" aria-label="Translate to"></select>
                <input id="ob-target-custom" class="input ghost" placeholder="Enter the language you want" aria-label="Custom language" autocomplete="off" spellcheck="false">
              </div>
            </section>
            <section class="ob-card" aria-labelledby="ob-t3">
              <div class="ob-num" aria-hidden="true">3</div>
              <h3 class="ob-title" id="ob-t3">Start translating</h3>
              <p class="ob-body" id="ob-share-text"></p>
              <div class="ob-action">
                <button class="btn btn-primary btn-start" id="ob-start" disabled>${PLAY_SVG}<span>Start</span></button>
              </div>
            </section>
          </div>`;
      feed.appendChild(box);
      const sel = $("ob-target");
      for (const o of $("target").options) { const c = document.createElement("option"); c.textContent = o.text; if (o.value === "__custom") c.value = "__custom"; sel.appendChild(c); }
      const ci = $("ob-target-custom");
      const sendCustom = () => { $("target-custom").value = ci.value; send({ type: "config", target_language: ci.value.trim() || "English" }); };
      sel.onchange = () => {
        customLang = sel.value === "__custom"; ci.classList.toggle("ghost", !customLang);
        if (customLang) { sendCustom(); ci.focus(); } else send({ type: "config", target_language: sel.value });
      };
      ci.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); ci.blur(); } });
      ci.addEventListener("blur", sendCustom);
      ci.addEventListener("change", sendCustom);
      $("ob-key").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); $("ob-save").click(); } });
      $("ob-key").addEventListener("input", () => { obError(""); renderSaveBtn($("ob-save"), !!state.has_api_key && !$("ob-key").value, "Save", "", !!$("ob-key").value); });
      $("ob-save").onclick = () => { const k = $("ob-key").value.trim(); if (!k) return; obError(""); $("ob-key").value = ""; saveKey(k); };
      $("ob-start").onclick = () => finishOnboarding(true);
      feed.scrollTop = 0;
    }
    const saved = !!state.has_api_key;
    const share = !!(state.capture && state.capture.system === "browser");
    $("ob-share-text").innerHTML = share
      ? "Audio from your meeting is picked up through browser screen sharing. Only the audio is used, for transcription and translation."
      : "Audio from your meeting is picked up through macOS screen recording. Only the audio is used, for transcription and translation.";
    renderSaveBtn($("ob-save"), saved && !$("ob-key").value, "Save", "", !!$("ob-key").value);
    $("ob-key").classList.toggle("saved", saved);
    $("ob-key").placeholder = saved ? `••••••••${state.key_hint}` : "bai-…";
    if (document.activeElement !== $("ob-target")) $("ob-target").value = customLang ? "__custom" : state.target_language;
    $("ob-target-custom").classList.toggle("ghost", !customLang);
    if (customLang && !knownLanguages().includes(state.target_language) && document.activeElement !== $("ob-target-custom")) $("ob-target-custom").value = state.target_language;
    $("ob-start").disabled = !saved;
    if (saved && !obWasSaved) { announce("API key saved"); if (document.activeElement === $("ob-key")) $("ob-start").focus(); }
    obWasSaved = saved;
  }
  let obWasSaved = false;
  function obError(text) { const el = $("ob-err"); if (!el) return; el.textContent = text; el.hidden = !text; }
  const CHECK_SVG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5l3 3 7-7"/></svg>';
  function renderSaveBtn(btn, saved, label, baseClass, hasValue) {
    btn.classList.toggle("saved", saved);
    btn.disabled = !saved && !hasValue;
    if (baseClass) btn.classList.toggle(baseClass, !saved);
    btn.innerHTML = saved ? CHECK_SVG + "Saved" : label;
  }
  // Leaves onboarding for good: from Continue, or from Start once a key exists.
  function finishOnboarding(focusStart) {
    try { localStorage.setItem("rt.onboarded", "1"); } catch (e) {}
    const box = $("empty"); if (box && box.classList.contains("onboarding")) box.remove();
    updateEmpty();
    if (focusStart) ($("rest-start") || $("start-btn")).focus();
  }
  function updateEmpty() {
    let empty = $("empty");
    const appEl = document.querySelector(".app");
    if (segs.size === 0 && needsOnboarding()) { renderOnboarding(); const dl0 = $("download-btn"); if (dl0) dl0.disabled = true; appEl.classList.toggle("resting", !viewer); return; }
    if (empty && empty.classList.contains("onboarding")) { empty.remove(); empty = null; }
    if (segs.size === 0) {
      if (!empty) {
        empty = document.createElement("div");
        empty.id = "empty"; empty.className = "empty";
        empty.innerHTML = TILE_SVG + `
          <h2 id="rest-title">Ready to Translate</h2><p id="rest-text">Choose how your conversation is picked up, then press Start.</p>` + (viewer ? "" : `
          <div class="rest-controls" id="rest-controls">
          <div class="rest-sources">
            <div class="rest-tile" id="tile-mic">
              <button class="rt-main" id="rest-mic" role="switch" aria-checked="false">
                <span class="rt-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></span>
                <span class="rt-text"><span class="rt-label">Mic audio</span><span class="rt-sub" id="rest-sub-mic"></span></span>
                <span class="rt-switch" aria-hidden="true"></span>
              </button>
              <button class="rt-more" id="rest-mic-arrow" aria-label="Choose microphone" aria-haspopup="menu" aria-expanded="false" aria-controls="mic-menu">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>
              </button>
            </div>
            <div class="rest-tile" id="tile-system">
              <button class="rt-main" id="rest-system" role="switch" aria-checked="false">
                <span class="rt-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15.5zM8 21h8M12 17v4"/></svg></span>
                <span class="rt-text"><span class="rt-label">Computer audio</span><span class="rt-sub" id="rest-sub-system"></span></span>
                <span class="rt-switch" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <button class="btn btn-primary btn-start rest-start" id="rest-start">${PLAY_SVG}${STOP_SVG}<span id="rest-start-label">Start</span></button>
          <p class="help rest-hint" id="rest-hint" role="status"></p>
          </div>`);
        feed.appendChild(empty);
        if (!viewer && state && !state.running && !state.enabled.system && !state.enabled.mic) send({ type: "config", enabled: { system: true } });
        if (!viewer) {
          $("rest-mic").onclick = () => toggleSource("mic");
          $("rest-system").onclick = () => toggleSource("system");
          $("rest-mic-arrow").onclick = (e) => { e.stopPropagation(); openMicMenu($("mic-menu").hidden || menuTrigger !== $("rest-mic-arrow"), $("rest-mic-arrow")); };
          $("rest-start").onclick = (e) => { startStop(); if (e.detail) $("rest-start").blur(); };
        }
      }
      renderRest();
    } else if (empty) empty.remove();
    appEl.classList.toggle("resting", !!$("empty") && !viewer && !(state && state.running) && !isStarting());
    const dl = $("download-btn"); if (dl) dl.disabled = segs.size === 0;
    document.title = segs.size ? `Higgs Meeting Translator · ${cards.size} card${cards.size === 1 ? "" : "s"}` : "Higgs Meeting Translator";
  }
  // Set when Start is pressed so the controls move to the floating bar at once, before the server confirms.
  let starting = 0;
  const isStarting = () => starting > 0 && Date.now() - starting < 5000;
  // What each source is doing, as last rendered by applyState ("Off", "Idle", "Live", …).
  const srcStatus = { mic: "", system: "" };
  function micDeviceName() {
    const browserMode = !!cap && !demo;
    if (browserMode) { const dev = browserDevices.find((x) => x.deviceId === micDeviceId); return micDeviceId && dev && dev.label ? dev.label : "System default"; }
    return micCurrent || "System default";
  }
  function renderRestHint(nosrc) {
    const h = $("rest-hint"); if (!h || !state) return;
    const share = !!(state.capture && state.capture.system === "browser");
    if (nosrc) { h.className = "help rest-hint error show"; h.setAttribute("role", "alert"); h.textContent = "Turn on the mic or computer audio to start."; }
    else if (state.enabled.system && share) { h.className = "help rest-hint show"; h.setAttribute("role", "status"); h.innerHTML = "When sharing your screen, please include audio.<br>Only the audio is used; your screen is never recorded."; }
    else { h.className = "help rest-hint"; h.textContent = ""; }
  }
  function renderRest() {
    if (!state || viewer || !$("rest-start")) return;
    const running = !!state.running || isStarting();
    const nosrc = !state.enabled.mic && !state.enabled.system;
    $("rest-title").textContent = state.running ? "Listening…" : running ? "Starting…" : "Ready to Translate";
    $("rest-text").textContent = running ? "Start speaking, or play something on your computer. Translation begins as soon as audio comes in." : "Choose how your conversation is picked up, then press Start.";
    $("rest-controls").hidden = running;
    renderRestHint(nosrc);
    for (const name of ["mic", "system"]) {
      const on = !!state.enabled[name];
      setToggle("rest-" + name, on);
      const base = name === "mic" ? "What you say, through your microphone" : "What other apps on this computer play, like your meeting";
      const st = srcStatus[name];
      const sub = $("rest-sub-" + name); sub.textContent = on && running && st && st !== "Idle" ? `${st} · ${base}` : base; sub.title = base;
    }
    const b = $("rest-start");
    b.disabled = !state.running && nosrc;
    b.classList.toggle("running", running);
    $("rest-start-label").textContent = running ? "Stop" : "Start";
    b.title = running ? "Stop (⌘⇧S)" : "Start (Space)";
    if ($("start-btn").getAttribute("aria-disabled") === "true") b.setAttribute("aria-disabled", "true"); else b.removeAttribute("aria-disabled");
  }

  function ensureCard(c) {
    let card = cards.get(c.id);
    if (!card) {
      const el = document.createElement("article");
      el.className = "card";
      el.dataset.source = c.source;
      el.dataset.t = c.started_at;
      el.innerHTML = `
        <div class="card-head"><span class="card-who"></span><span class="badge badge-outline badge-sm card-src"></span><span class="card-time"></span><button type="button" class="card-state"></button></div>
        <div class="card-grid"></div>`;
      el.querySelector(".card-src").textContent = srcLabel(c.source);
      el.querySelector(".card-time").textContent = fmtTime(c.started_at);
      const after = [...inner.children].reverse().find((x) => +x.dataset.t <= c.started_at);
      if (after) after.after(el); else inner.appendChild(el);
      card = { el, grid: el.querySelector(".card-grid"), state: el.querySelector(".card-state"), refinedEl: null, data: c, pending: "" };
      cards.set(c.id, card);
    }
    card.data = c;
    return card;
  }

  function renderCard(c) {
    const card = ensureCard(c);
    if (c.refined) {
      if (!card.refinedEl) { card.refinedEl = document.createElement("div"); card.refinedEl.className = "refined"; card.grid.appendChild(card.refinedEl); }
      card.refinedEl.textContent = c.refined;
    } else if (card.refinedEl) { card.refinedEl.remove(); card.refinedEl = null; }
    card.state.className = "card-state";
    card.state.onclick = null;
    card.state.tabIndex = (c.refined && c.covers > 0 && c.refine_status !== "refining") ? 0 : -1;
    if (c.refine_status === "refining") { card.state.classList.add("on"); card.state.textContent = "Refining…"; }
    else if (c.refine_status === "failed") { card.state.classList.add("failed"); card.state.textContent = "Couldn't refine · drafts kept"; }
    else if (c.refined && c.covers > 0) {
      card.state.classList.add("drafts-toggle");
      const shown = card.el.classList.contains("show-drafts");
      card.state.textContent = shown ? "Hide drafts" : "Show drafts";
      card.state.setAttribute("aria-pressed", String(shown));
      card.state.onclick = () => { card.el.classList.toggle("show-drafts"); renderCard(card.data); };
    }
    else card.state.textContent = "";
    layoutCard(card);
    updateEmpty();
  }

  function layoutCard(card) {
    const covers = card.data.refined ? card.data.covers : 0;
    const ids = card.data.line_ids || [];
    const who = card.el.querySelector(".card-who");
    who.textContent = card.data.speaker || "Speaker";
    card.el.querySelector(".card-src").hidden = false;
    const draft = !!card.data.hq && card.data.refine_status !== "failed";
    ids.forEach((id, i) => {
      const s = segs.get(id);
      if (!s) return;
      if (s.card !== card) { card.grid.append(s.orig, s.tr); s.card = card; }
      s.orig.style.gridRow = String(i + 1);
      s.tr.style.gridRow = String(i + 1);
      s.orig.classList.toggle("sep", i > 0);
      s.tr.classList.toggle("sep", i > 0 && i >= covers);
      s.tr.classList.toggle("covered", i < covers);
      s.tr.classList.toggle("draft", draft);
    });
    if (card.refinedEl) card.refinedEl.style.gridRow = `1 / span ${Math.max(1, covers)}`;
    const rows = ids.map((id) => segs.get(id)).filter(Boolean);
    card.el.classList.toggle("live", rows.some((r) => r.data.status === "speaking" || r.data.status === "translating"));
    if (card.refinedEl) card.grid.append(...rows.map((s) => s.orig), card.refinedEl, ...rows.map((s) => s.tr));
    else card.grid.append(...rows.flatMap((s) => [s.orig, s.tr]));
  }

  function upsert(d) {
    if (!inner) clearFeed();
    let s = segs.get(d.id);
    const wasDone = s && s.data.status === "done";
    if (!s) {
      let card = cards.get(d.card_id);
      if (!card) card = ensureCard({ id: d.card_id || "loose-" + d.id, source: d.source, started_at: d.started_at, line_ids: [d.id] });
      const orig = document.createElement("div"); orig.className = "line orig";
      const tr = document.createElement("div"); tr.className = "line tr";
      card.grid.append(orig, tr);
      s = { orig, tr, card, data: d };
      segs.set(d.id, s);
      if (!card.data.line_ids.includes(d.id)) card.data.line_ids.push(d.id);
      if (!following) { missed++; $("jump").querySelector("span").textContent = `${missed} new line${missed === 1 ? "" : "s"}`; }
      updateEmpty();
    }
    s.data = d;
    s.orig.textContent = d.transcript;
    s.tr.textContent = d.translation;
    s.tr.classList.toggle("translating", d.status !== "done" && d.status !== "speaking" && !!d.transcript);
    s.tr.classList.toggle("cursor", d.status === "translating" && !!d.translation);
    s.orig.title = s.tr.title = fmtTime(d.started_at) + (d.ended_at ? ` · ${Math.max(0.1, d.ended_at - d.started_at).toFixed(1)} s` : "");
    if (d.status === "done" && !wasDone && d.translation && !(s.card.data.hq)) announce(d.translation);
    layoutCard(s.card);
    scrollIfFollowing();
  }
  function removeSeg(id) {
    const s = segs.get(id);
    if (!s) return;
    s.orig.remove(); s.tr.remove();
    segs.delete(id);
    const ids = s.card.data.line_ids;
    const i = ids.indexOf(id); if (i >= 0) ids.splice(i, 1);
    if (!ids.length) removeCard(s.card.data.id); else layoutCard(s.card);
    updateEmpty();
  }
  function removeCard(id) {
    const card = cards.get(id);
    if (!card) return;
    card.el.remove();
    cards.delete(id);
    updateEmpty();
  }

  // ------------------------------------------------------------- follow live
  function scrollIfFollowing() { if (following && !$("empty")) feed.scrollTop = feed.scrollHeight; }
  feed.addEventListener("scroll", () => {
    if ($("empty")) { $("jump").hidden = true; return; }
    const atBottom = feed.scrollHeight - feed.scrollTop - feed.clientHeight < 48;
    following = atBottom;
    if (atBottom) { missed = 0; $("jump").querySelector("span").textContent = "Jump to live"; }
    $("jump").hidden = atBottom;
  });
  $("jump").onclick = () => { following = true; missed = 0; feed.scrollTop = feed.scrollHeight; $("jump").hidden = true; };
  const refollow = new ResizeObserver(() => { if (following && !$("empty")) feed.scrollTop = feed.scrollHeight; });
  refollow.observe(feed);
  refollow.observe(document.body);

  // ---------------------------------------------------------------------- log
  function appendLog(e) {
    const line = document.createElement("div");
    const time = document.createElement("span"); time.textContent = fmtTime(e.at) + " ";
    line.appendChild(time);
    if (e.source) { const src = document.createElement("span"); src.className = "src"; src.textContent = `[${e.source}] `; line.appendChild(src); }
    const msg = document.createElement("span"); msg.className = e.level === "error" ? "err" : ""; msg.textContent = e.message;
    line.appendChild(msg);
    const log = $("log");
    log.appendChild(line);
    while (log.children.length > 200) log.firstChild.remove();
    log.scrollTop = log.scrollHeight;
  }

  // ---------------------------------------------------------------- controls
  async function startStop() {
    if (!state) return;
    if (!state.has_api_key) {
      if ($("ob-key")) { obError("Save your API key first."); $("ob-key").focus(); return; }
      setNote("key", "error", "Can't start", "Add your Boson API key under Settings → API Key.", { label: "Open Settings", run: openKeySettings }); setSidebar(true); $("api-key").focus(); return;
    }
    if (!connected && !demo) return;
    if (!state.running && !state.enabled.mic && !state.enabled.system) { renderRestHint(true); return; }
    if (!state.running && $("ob-key")) finishOnboarding(false);
    if (state.running) { send({ type: "stop" }); return; }
    starting = Date.now(); updateEmpty(); renderCbNew();
    setTimeout(() => { if (state && !state.running && starting) { starting = 0; updateEmpty(); renderCbNew(); } }, 5000);
    if (state.enabled.system && cap) {
      if (!(await armSystemShare())) {
        // A share without audio keeps Computer audio on (the note offers Try again) and does not start.
        if (lastShareFailure === "noaudio") { starting = 0; updateEmpty(); renderCbNew(); return; }
        send({ type: "config", enabled: { system: false } });
        if (!state.enabled.mic) { starting = 0; updateEmpty(); renderCbNew(); renderRestHint(true); return; }
      }
    }
    send({ type: "start" });
  }
  $("start-btn").onclick = (e) => { startStop(); if (e.detail) $("start-btn").blur(); };
  $("log-btn").onclick = () => { const l = $("log"); l.hidden = !l.hidden; $("log-btn").setAttribute("aria-expanded", String(!l.hidden)); $("log-btn").textContent = l.hidden ? "Show Log" : "Hide Log"; };
  $("cb-new").onclick = () => $("new-session-btn").click();
  $("new-session-btn").onclick = () => {
    if (!cards.size) return send({ type: "new_session" });
    $("confirm-folder").textContent = "this browser";
    $("confirm-new").returnValue = "";
    $("confirm-new").showModal();
  };
  $("confirm-new").addEventListener("close", () => { if ($("confirm-new").returnValue === "ok") send({ type: "new_session" }); });
  $("target").onchange = () => {
    customLang = $("target").value === "__custom";
    $("target-custom").hidden = !customLang;
    applyConfig();
    if (customLang) $("target-custom").focus();
  };
  $("speaker-notes").addEventListener("blur", applyConfig);
  $("speaker-notes").addEventListener("keydown", (e) => { if ((e.metaKey || e.ctrlKey) && e.key === "Enter") { e.preventDefault(); applyConfig(); } });
  let savedTimer = null;
  function flashSaved() { const t = $("notes-saved"); t.hidden = false; clearTimeout(savedTimer); savedTimer = setTimeout(() => { t.hidden = true; }, 2000); }
  $("target-custom").addEventListener("keydown", (e) => { if (e.key === "Enter") applyConfig(); });
  $("target-custom").addEventListener("blur", applyConfig);
  $("target-custom").addEventListener("change", applyConfig);
  $("source-hint").onchange = applyConfig;
  for (const id of ["pause-ms", "soft-max", "hard-max", "group-gap"]) $(id).addEventListener("change", applyConfig);
  $("reset-turns").onclick = () => {
    $("pause-ms").value = DEFAULT_TURNS.pause_ms; $("soft-max").value = DEFAULT_TURNS.soft_max_ms / 1000;
    $("hard-max").value = DEFAULT_TURNS.hard_max_ms / 1000; $("group-gap").value = DEFAULT_TURNS.group_gap_s;
    applyConfig();
  };
  for (const b of $("translate-mode").querySelectorAll(".opt")) b.onclick = () => send({ type: "config", hq: b.dataset.hq === "1" });
  async function toggleSource(name) {
    const v = !isOn("en-" + name);
    if (v && name === "system" && cap && state && state.running) { if (!(await armSystemShare())) return; }
    setToggle("en-" + name, v); if ($("rest-" + name)) setToggle("rest-" + name, v);
    send({ type: "config", enabled: { [name]: v } });
  }
  for (const name of ["mic", "system"]) $("en-" + name).onclick = () => toggleSource(name);
  async function saveKey(k) {
    pendingKey = k;
    try { await mintEphemeralKey(k, 60); }
    catch (e) {
      const msg = /\(40[13]\)/.test(String(e.message)) ? "Boson rejected this key. Check it and try again."
                : /\(\d{3}\)/.test(String(e.message)) ? "Boson answered with an error. Try again in a moment."
                : "Couldn't reach Boson to check the key. Check your connection and try again.";
      keyRejected(msg); return;
    }
    pendingKey = ""; keyStore.write(k); send({ type: "set_key", key: k });
  }
  $("save-key").onclick = () => { const k = $("api-key").value.trim(); if (!k) { $("api-key").focus(); return; } keyStatus(""); $("api-key").value = ""; saveKey(k); };
  $("api-key").addEventListener("input", () => keyStatus(""));
  // Rejected keys are not kept: put the text back where it was typed and say why.
  function keyStatus(text) { const el = $("key-status"); el.textContent = text; el.className = "help" + (text ? " error" : ""); el.hidden = !text; }
  function keyRejected(message) {
    const ob = $("ob-key");
    if (ob) { ob.value = pendingKey; ob.dispatchEvent(new Event("input")); obError(message); ob.focus(); }
    else { $("api-key").value = pendingKey; renderSaveBtn($("save-key"), false, "Save Key", "btn-secondary", !!pendingKey); keyStatus(message); $("api-key").focus(); }
    pendingKey = "";
  }
  let pendingKey = "";
  $("reset-key").onclick = () => { keyStore.clear(); send({ type: "reset_key" }); };
  $("api-key").addEventListener("keydown", (e) => { if (e.key === "Enter") $("save-key").click(); });
  $("api-key").addEventListener("input", () => { if (state) renderSaveBtn($("save-key"), !!state.has_api_key && !$("api-key").value, "Save Key", "btn-secondary", !!$("api-key").value); });
  function currentSession() { return engine ? engine.session : null; }
  function renderSessions() {
    const box = $("session-list"); if (!box) return;
    box.innerHTML = "";
    const cur = currentSession();
    for (const s of sessionStore.list()) {
      const row = document.createElement("div"); row.className = "session-row" + (cur && s.id === cur.id ? " current" : "");
      const when = document.createElement("span"); when.className = "when"; when.textContent = new Date(s.started_at * 1000).toLocaleString([], { hour12: false });
      const meta = document.createElement("span"); meta.className = "meta"; meta.textContent = `${s.lines} lines · ${s.target_language}`;
      const md = document.createElement("button"); md.className = "btn btn-tertiary"; md.textContent = "MD"; md.title = "Download Markdown";
      md.onclick = () => { const full = sessionStore.load(s.id); if (full) download(`transcript-${s.id}.md`, toMarkdown(full, LABELS), "text/markdown"); };
      const del = document.createElement("button"); del.className = "btn btn-tertiary"; del.textContent = "×"; del.setAttribute("aria-label", "Delete session");
      del.onclick = () => { sessionStore.remove(s.id); renderSessions(); };
      row.append(when, meta, md, del); box.appendChild(row);
    }
    if (!box.children.length) { const p = document.createElement("p"); p.className = "help"; p.textContent = "No saved sessions yet."; box.appendChild(p); }
  }
  $("download-btn").onclick = () => { if (engine) { engine.persist(true); download(`transcript-${engine.session.id}.md`, toMarkdown(engine.session, LABELS), "text/markdown"); } };

  function applyConfig() {
    if (!state) return;
    if ((connected || demo) && $("speaker-notes").value !== (state.speaker_notes || "")) flashSaved();
    const sel = $("target");
    const target = sel.value === "__custom" ? ($("target-custom").value.trim() || "English") : sel.value;
    send({ type: "config",
           target_language: target || state.target_language || "English",
           source_hint: $("source-hint").value,
           speaker_notes: $("speaker-notes").value,
           group_gap_s: +$("group-gap").value,
           segmenter: { pause_ms: +$("pause-ms").value || 600,
                        soft_max_ms: Math.round((+$("soft-max").value || 5) * 1000),
                        hard_max_ms: Math.round((+$("hard-max").value || 10) * 1000) } });
  }
  for (const t of document.querySelectorAll(".tip")) {
    t.addEventListener("focus", () => t.classList.add("open"));
    t.addEventListener("blur", () => t.classList.remove("open"));
    t.addEventListener("keydown", (e) => { if (e.key === "Escape") { e.stopPropagation(); t.blur(); } });
  }
  document.addEventListener("keydown", (e) => {
    if (viewer) return;
    if ($("confirm-new").open) return;
    const typing = ["INPUT", "SELECT", "TEXTAREA", "BUTTON", "SUMMARY"].includes(document.activeElement.tagName);
    // N-5: a mouse click leaves focus on the Start/Stop button, where Space would natively re-activate it
    if (e.key === " " && document.activeElement === $("start-btn") && state && state.running) { e.preventDefault(); return; }
    if (e.key === "Escape") { if (!$("mic-menu").hidden) openMicMenu(false); else if (isOpen()) { setSidebar(false); $("settings-btn").focus(); } }
    if (e.key === " " && !typing && state && !state.running) { e.preventDefault(); startStop(); }
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === "s" && state && state.running) { e.preventDefault(); startStop(); }
  });

  // URL switches used for design review: ?theme=dark|light  ?settings=1  ?demo=1 (fixture, no server)  ?menu=mic
  const q = q0;
  if (q.get("theme")) root.dataset.theme = q.get("theme");
  if (q.get("onboarding")) { try { localStorage.removeItem("rt.onboarded"); } catch (e) {} }
  syncThemeBtn();
  clearFeed();
  if (demo) {
    connected = true;
    fetch("demo.json").then((r) => r.json()).then((d) => {
      if (q.get("nokey")) { d.state.has_api_key = false; d.state.key_hint = ""; d.state.key_source = "none"; }
      if (q.get("onboarding")) { d.cards = []; d.segments = []; d.state.running = false; }
      if (q.get("stopped")) d.state.running = false;
      if (q.get("custom")) d.state.target_language = q.get("custom") === "1" ? "Cantonese" : q.get("custom");
      if (q.get("rest")) { d.cards = []; d.segments = []; d.state.running = q.get("rest") === "running"; if (q.get("rest") === "off") d.state.enabled = { mic: false, system: false }; }
      applyState(d.state);
      handle({ type: "snapshot", cards: d.cards, segments: d.segments, logs: d.logs || [] });
      renderConn();
      if (q.get("settings")) setSidebar(true);
      if (q.get("menu") === "mic") openMicMenu(true);
      if (q.get("menu") === "rest") openMicMenu(true, $("rest-mic-arrow"));
      if (q.get("tip")) { const t = $("tip-" + q.get("tip")); if (t) t.parentElement.classList.add("open"); }
      if (q.get("modal") === "new") $("new-session-btn").click();
      if (q.get("mode")) setReadingMode(q.get("mode"), false);
      if (q.get("turns")) { $("advanced").scrollIntoView(); }
      if (q.get("note") === "share") setNote("share", "warning", "Screen share cancelled", "Computer audio comes through screen sharing. Share a window or screen and include its audio.", { label: "Share screen", run: shareScreen });
      else if (q.get("note")) setNote("sig-mic", "warning", "No microphone signal", "Check the selected device, and allow Microphone access for Higgs Meeting Translator in System Settings → Privacy & Security.");
      if (q.get("drafts")) for (const c of cards.values()) if (c.data.refined) { c.el.classList.add("show-drafts"); renderCard(c.data); }
      if (q.get("disconnected")) { simDisconnected = true; setConnected(false); }
    });
  } else {
    connect();
    if (q.get("settings")) setSidebar(true);
  }
})();
