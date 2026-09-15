// Client-side energy VAD and turn segmentation (port of the desktop app's vad.py).
// Feed PCM16 mono chunks of any size to process(); it returns events:
//   {type:"start", pre: Uint8Array}  a turn began (pre-roll audio to send first)
//   {type:"audio", frame: Uint8Array}
//   {type:"cut", reason}  |  {type:"drop"}
export const FRAME_MS = 20;

export const DEFAULT_SEG = { pause_ms: 600, soft_max_ms: 5000, soft_pause_ms: 220, hard_max_ms: 10000,
  preroll_ms: 300, min_speech_ms: 300, onset_frames: 3, threshold_db: 8, min_threshold_dbfs: -52, floor_cap_dbfs: -45 };

export function rmsDbfs(frame) {
  const n = frame.byteLength >> 1;
  if (!n) return -100;
  const view = new Int16Array(frame.buffer, frame.byteOffset, n);
  let acc = 0;
  for (let i = 0; i < n; i++) acc += view[i] * view[i];
  const rms = Math.sqrt(acc / n) / 32768;
  return rms > 1e-6 ? 20 * Math.log10(rms) : -120;
}

export class Segmenter {
  constructor(rate = 24000, cfg = {}) {
    this.cfg = { ...DEFAULT_SEG, ...cfg };
    this.rate = rate;
    this.frameBytes = (rate * FRAME_MS / 1000) * 2;
    this.pending = new Uint8Array(0);
    this.ring = [];
    this.floorDb = -60;
    this.levelDb = -100;
    this.inSpeech = false;
    this.onset = 0;
    this.segMs = 0; this.speechMs = 0; this.silenceMs = 0;
  }
  process(chunk) {
    const merged = new Uint8Array(this.pending.length + chunk.length);
    merged.set(this.pending); merged.set(chunk, this.pending.length);
    const events = [];
    let off = 0;
    while (merged.length - off >= this.frameBytes) {
      events.push(...this.frame(merged.subarray(off, off + this.frameBytes)));
      off += this.frameBytes;
    }
    this.pending = merged.slice(off);
    return events;
  }
  flush() {
    if (!this.inSpeech) return [];
    this.inSpeech = false; this.onset = 0;
    return [this.speechMs >= this.cfg.min_speech_ms ? { type: "cut", reason: "flush" } : { type: "drop" }];
  }
  isSpeech(db) {
    if (db < this.floorDb) this.floorDb = 0.8 * this.floorDb + 0.2 * db;
    else this.floorDb = Math.min(this.floorDb + 0.1, this.cfg.floor_cap_dbfs);
    const thr = Math.max(this.floorDb + this.cfg.threshold_db, this.cfg.min_threshold_dbfs);
    return db > thr;
  }
  frame(frame) {
    const cfg = this.cfg;
    const db = rmsDbfs(frame);
    this.levelDb = db;
    const speech = this.isSpeech(db);
    const out = [];
    if (!this.inSpeech) {
      this.ring.push(frame.slice());
      const maxRing = Math.max(1, Math.floor(cfg.preroll_ms / FRAME_MS));
      while (this.ring.length > maxRing) this.ring.shift();
      this.onset = speech ? this.onset + 1 : 0;
      if (this.onset >= cfg.onset_frames) {
        this.inSpeech = true;
        const total = this.ring.reduce((a, f) => a + f.length, 0);
        const pre = new Uint8Array(total); let o = 0;
        for (const f of this.ring) { pre.set(f, o); o += f.length; }
        this.ring = [];
        this.segMs = (pre.length / this.frameBytes) * FRAME_MS;
        this.speechMs = cfg.onset_frames * FRAME_MS;
        this.silenceMs = 0;
        out.push({ type: "start", pre });
      }
      return out;
    }
    out.push({ type: "audio", frame: frame.slice() });
    this.segMs += FRAME_MS;
    if (speech) { this.speechMs += FRAME_MS; this.silenceMs = 0; } else this.silenceMs += FRAME_MS;
    let reason = null;
    if (this.silenceMs >= cfg.pause_ms) reason = "pause";
    else if (this.segMs >= cfg.soft_max_ms && this.silenceMs >= cfg.soft_pause_ms) reason = "dip";
    else if (this.segMs >= cfg.hard_max_ms) reason = "max";
    if (reason) {
      this.inSpeech = false; this.onset = 0;
      out.push(this.speechMs < cfg.min_speech_ms ? { type: "drop" } : { type: "cut", reason });
    }
    return out;
  }
}
