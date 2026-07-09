// Tiny Web Audio API beep generator — no external mp3 assets or network
// requests needed. Used for correct/incorrect/finish feedback.

let ctx = null;
function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    ctx = new AudioContextClass();
  }
  return ctx;
}

function beep({ freq = 440, duration = 0.12, type = 'sine', gain = 0.08, delay = 0 }) {
  const audioCtx = getCtx();
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gainNode.gain.value = gain;
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  const startAt = audioCtx.currentTime + delay;
  gainNode.gain.setValueAtTime(gain, startAt);
  gainNode.gain.exponentialRampToValueAtTime(0.001, startAt + duration);
  osc.start(startAt);
  osc.stop(startAt + duration);
}

export function playCorrectSound() {
  beep({ freq: 587.33, duration: 0.1, type: 'triangle' });
  beep({ freq: 880, duration: 0.15, type: 'triangle', delay: 0.09 });
}

export function playWrongSound() {
  beep({ freq: 220, duration: 0.18, type: 'sawtooth', gain: 0.06 });
}

export function playFinishSound() {
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
    beep({ freq, duration: 0.18, type: 'triangle', delay: i * 0.1 });
  });
}

export function playHoverSound() {
  beep({ freq: 523.25, duration: 0.15, type: 'sine', gain: 0.03 });
}
