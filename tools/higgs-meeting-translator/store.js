// Local persistence: the API key in a cookie, sessions (segments + cards) in localStorage, downloads.
const KEY_COOKIE = "rt_key";
const INDEX = "rt.sessions";
const MAX_SESSIONS = 30;

export const keyStore = {
  read() {
    const m = document.cookie.match(new RegExp("(?:^|; )" + KEY_COOKIE + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  },
  write(value) {
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${KEY_COOKIE}=${encodeURIComponent(value)}; Max-Age=${60 * 60 * 24 * 365}; Path=/; SameSite=Strict${secure}`;
  },
  clear() {
    document.cookie = `${KEY_COOKIE}=; Max-Age=0; Path=/; SameSite=Strict`;
  },
};

function readJSON(k, fallback) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } }
function writeJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }

export const sessionStore = {
  list() { return readJSON(INDEX, []); },
  load(id) { return readJSON("rt.session." + id, null); },
  save(session) {
    const ok = writeJSON("rt.session." + session.id, session);
    const idx = this.list().filter((s) => s.id !== session.id);
    idx.unshift({ id: session.id, started_at: session.started_at, target_language: session.target_language,
                  cards: session.cards.length, lines: session.segments.length, updated_at: Date.now() / 1000 });
    while (idx.length > MAX_SESSIONS) { const old = idx.pop(); localStorage.removeItem("rt.session." + old.id); }
    writeJSON(INDEX, idx);
    return ok;
  },
  remove(id) {
    localStorage.removeItem("rt.session." + id);
    writeJSON(INDEX, this.list().filter((s) => s.id !== id));
  },
  clearAll() { for (const s of this.list()) localStorage.removeItem("rt.session." + s.id); localStorage.removeItem(INDEX); },
};

export const prefs = {
  get() { return readJSON("rt.prefs.v2", {}); },
  set(patch) { writeJSON("rt.prefs.v2", { ...this.get(), ...patch }); },
};

// ---------- exports
const fmtTime = (t) => new Date(t * 1000).toLocaleTimeString([], { hour12: false });
const fmtDate = (t) => new Date(t * 1000).toLocaleString([], { hour12: false });

export function toMarkdown(session, labels) {
  const lines = [`# Transcript — ${fmtDate(session.started_at)}`, "", `Target language: ${session.target_language}`, ""];
  const segsById = Object.fromEntries(session.segments.map((s) => [s.id, s]));
  for (const card of session.cards) {
    const segs = card.line_ids.map((id) => segsById[id]).filter((s) => s && (s.transcript || s.translation));
    if (!segs.length) continue;
    const who = card.speaker || labels[card.source] || card.source;
    lines.push(`**[${fmtTime(segs[0].started_at)}] ${who}**  `);
    for (const s of segs) if (s.transcript) lines.push(`${s.transcript}  `);
    if (card.refined) { lines.push(`> ${card.refined}  `); for (const s of segs.slice(card.covers)) if (s.translation) lines.push(`> ${s.translation}  `); }
    else for (const s of segs) if (s.translation) lines.push(`> ${s.translation}  `);
    lines.push("");
  }
  return lines.join("\n");
}

export function toJSONL(session) {
  return session.segments.map((s) => JSON.stringify(s)).join("\n") + "\n";
}

export function download(name, text, type = "text/plain") {
  const blob = new Blob([text], { type: type + ";charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
