// Browser-side audio capture: microphone via getUserMedia, call audio via getDisplayMedia
// (Chrome 141+ on macOS 14.2+ can include system audio when sharing the entire screen).
// Audio is resampled to 24 kHz PCM16 in an AudioWorklet and sent to the server as binary
// WebSocket frames: 1 byte source id (0 = mic, 1 = system) + PCM.
window.RTCapture = (() => {
  const RATE = 24000;
  const WORKLET = `
    class PcmSender extends AudioWorkletProcessor {
      constructor() { super(); this.buf = []; this.count = 0; this.acc = 0; this.pos = 0; }
      process(inputs) {
        const ch = inputs[0] && inputs[0][0];
        if (!ch) return true;
        const ratio = sampleRate / ${RATE};
        const out = [];
        // linear resample to 24 kHz
        while (this.pos < ch.length) {
          const i = Math.floor(this.pos), f = this.pos - i;
          const a = ch[i], b = i + 1 < ch.length ? ch[i + 1] : a;
          out.push(a + (b - a) * f);
          this.pos += ratio;
        }
        this.pos -= ch.length;
        for (const v of out) this.buf.push(v);
        if (this.buf.length >= ${RATE / 10}) {          // 100 ms
          const n = this.buf.length;
          const pcm = new Int16Array(n);
          for (let i = 0; i < n; i++) { const s = Math.max(-1, Math.min(1, this.buf[i])); pcm[i] = s < 0 ? s * 32768 : s * 32767; }
          this.buf = [];
          this.port.postMessage(pcm.buffer, [pcm.buffer]);
        }
        return true;
      }
    }
    registerProcessor("pcm-sender", PcmSender);`;
  const workletURL = URL.createObjectURL(new Blob([WORKLET], { type: "application/javascript" }));

  const active = {};   // source -> {ctx, stream, node}
  let sendFrame = null;
  let onEnded = null;

  async function open(source, stream, id) {
    await close(source);
    const ctx = new AudioContext({ latencyHint: "interactive" });
    await ctx.audioWorklet.addModule(workletURL);
    const src = ctx.createMediaStreamSource(stream);
    const node = new AudioWorkletNode(ctx, "pcm-sender", { numberOfInputs: 1, numberOfOutputs: 0 });
    node.port.onmessage = (e) => {
      if (!sendFrame) return;
      const pcm = new Uint8Array(e.data);
      const frame = new Uint8Array(pcm.length + 1);
      frame[0] = id; frame.set(pcm, 1);
      sendFrame(frame);
    };
    src.connect(node);
    for (const t of stream.getAudioTracks()) t.onended = () => { close(source); if (onEnded) onEnded(source); };
    active[source] = { ctx, stream, node };
  }

  async function close(source) {
    const a = active[source];
    if (!a) return;
    delete active[source];
    try { a.node.disconnect(); } catch (e) {}
    for (const t of a.stream.getTracks()) t.stop();
    try { await a.ctx.close(); } catch (e) {}
  }

  return {
    setSender(fn) { sendFrame = fn; },
    setOnEnded(fn) { onEnded = fn; },
    isActive: (source) => !!active[source],
    async startMic(deviceId) {
      const constraints = { audio: { deviceId: deviceId ? { exact: deviceId } : undefined, channelCount: 1,
                                     echoCancellation: true, noiseSuppression: false, autoGainControl: true } };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      await open("mic", stream, 0);
      return stream.getAudioTracks()[0].label;
    },
    // Must be called from a user gesture. Resolves false if the picker gave no audio track.
    async startSystem() {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: "monitor", frameRate: 1 }, audio: true, systemAudio: "include",
        selfBrowserSurface: "include", surfaceSwitching: "exclude", monitorTypeSurfaces: "include" });
      for (const t of stream.getVideoTracks()) t.stop();       // audio only
      if (!stream.getAudioTracks().length) { for (const t of stream.getTracks()) t.stop(); return false; }
      await open("system", stream, 1);
      return true;
    },
    stop: close,
    async stopAll() { for (const s of Object.keys(active)) await close(s); },
    async devices() {
      try { const list = await navigator.mediaDevices.enumerateDevices(); return list.filter((d) => d.kind === "audioinput"); }
      catch (e) { return []; }
    },
    systemAudioSupported() {
      const m = navigator.userAgent.match(/Chrome\/(\d+)/);
      return !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && !!m && parseInt(m[1], 10) >= 141
        && /Mac OS X/.test(navigator.userAgent);
    },
  };
})();
