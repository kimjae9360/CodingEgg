import React, { useState, useEffect } from 'react';

const CODE_LINES = [
  { tokens: [ { text: "def ", color: "#c678dd" }, { text: "master_coding", color: "#61afef" }, { text: "():", color: "#d4d4d4" } ] },
  { tokens: [ { text: "    print", color: "#e5c07b" }, { text: "(", color: "#d4d4d4" }, { text: "\"Hello, Coding Egg!\"", color: "#98c379" }, { text: ")", color: "#d4d4d4" } ] },
  { tokens: [ { text: "    experience ", color: "#d4d4d4" }, { text: "+=", color: "#56b6c2" }, { text: " 100", color: "#d19a66" } ] },
  { tokens: [ { text: "    return ", color: "#c678dd" }, { text: "True", color: "#d19a66" } ] },
  { tokens: [] },
  { tokens: [ { text: "master_coding", color: "#e5c07b" }, { text: "()", color: "#d4d4d4" } ] },
  { tokens: [ { text: "> Hello, Coding Egg!", color: "#98c379", opacity: 0.8 } ], isOutput: true }
];

// Audio context for keyboard clicks
let audioCtx = null;
const playClickSound = (isMuted) => {
  if (isMuted) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Create a snappy mechanical "click" sound
    osc.type = 'square';
    osc.frequency.setValueAtTime(100, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(20, audioCtx.currentTime + 0.015);
    
    gain.gain.setValueAtTime(0.015, audioCtx.currentTime); // Keep volume low to not annoy
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.02);
  } catch(e) {
    // Ignore autoplay blocking
  }
};

export default function AnimatedCodeBox() {
  const [charIndex, setCharIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false); // Play sound by default if browser allows
  
  const totalChars = CODE_LINES.reduce((sum, line) => {
    return sum + line.tokens.reduce((tsum, token) => tsum + token.text.length, 0);
  }, 0);

  useEffect(() => {
    if (charIndex < totalChars) {
      // Typing phase
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1);
        playClickSound(isMuted);
      }, Math.random() * 50 + 30); // Random typing speed (30-80ms)
      return () => clearTimeout(timeout);
    } else {
      // Completed, wait then restart
      const resetTimeout = setTimeout(() => {
        setCharIndex(0);
      }, 5000); // Wait 5 seconds before restarting
      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, totalChars, isMuted]);

  let cumulativeChars = 0;
  let cursorRendered = false;

  return (
    <div className="relative bg-[#1E293B] border border-gray-800 rounded-3xl p-6 shadow-2xl w-full font-mono text-lg text-left overflow-hidden h-72 flex flex-col group">
      
      {/* Sound Toggle Button (appears on hover) */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 z-50"
      >
        {isMuted ? '🔇 소리 켜기' : '🔊 소리 끄기'}
      </button>

      <div className="flex gap-2 mb-4 pb-4 border-b border-gray-800 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-1 text-gray-300 flex-1 overflow-hidden">
        {CODE_LINES.map((line, lineIdx) => {
          const lineStartChar = cumulativeChars;
          const lineTokenChars = line.tokens.reduce((acc, t) => acc + t.text.length, 0);
          cumulativeChars += lineTokenChars;

          // We haven't reached this line yet at all
          if (charIndex < lineStartChar) return null;

          let lineContent = [];
          let localCharsRendered = 0;

          for (let i = 0; i < line.tokens.length; i++) {
            const token = line.tokens[i];
            const tokenLen = token.text.length;
            const globalCharRenderedForToken = lineStartChar + localCharsRendered;

            if (globalCharRenderedForToken + tokenLen <= charIndex) {
              // Full token is visible
              lineContent.push(
                <span key={i} style={{ color: token.color, opacity: token.opacity || 1 }}>
                  {token.text}
                </span>
              );
              localCharsRendered += tokenLen;
            } else if (globalCharRenderedForToken < charIndex) {
              // Partial token is visible
              const visibleLen = charIndex - globalCharRenderedForToken;
              lineContent.push(
                <span key={i} style={{ color: token.color, opacity: token.opacity || 1 }}>
                  {token.text.substring(0, visibleLen)}
                </span>
              );
              localCharsRendered += visibleLen;
            }
          }

          // Decide if cursor belongs on this line
          const isCurrentLine = charIndex >= lineStartChar && charIndex <= cumulativeChars && !cursorRendered;
          
          if (isCurrentLine) {
            lineContent.push(<span key="cursor" className="inline-block w-2 h-5 bg-white animate-pulse align-middle ml-1"></span>);
            cursorRendered = true;
          }

          return (
            <div key={lineIdx} className={`${line.isOutput ? "mt-4 pt-4 border-t border-gray-800/50" : ""} min-h-[1.5rem] leading-relaxed whitespace-pre`}>
              {lineContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
