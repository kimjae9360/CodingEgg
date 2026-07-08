import React, { useEffect, useState } from 'react';

const WORDS = ['print()', 'def', 'if', 'else', 'return', 'class', 'self', 'True', 'False', 'yield', 'import'];

export default function MatrixRain({ color = 'text-[#FFB300]', opacity = 'opacity-30' }) {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Generate 6 columns for the small card illustration box
    const numCols = 6;
    const newCols = Array.from({ length: numCols }).map((_, i) => {
      const delay = Math.random() * 3; // 0 to 3s delay
      const duration = 2.5 + Math.random() * 2; // 2.5 to 4.5s duration
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      return { id: i, delay, duration, word };
    });
    setColumns(newCols);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none flex justify-around px-1 ${opacity} mix-blend-overlay z-0`}>
      {columns.map((col) => (
        <div 
          key={col.id} 
          className={`flex flex-col animate-matrix-fall font-mono font-black text-xs ${color}`}
          style={{ 
            animationDuration: `${col.duration}s`, 
            animationDelay: `${col.delay}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            textShadow: '0 0 5px currentColor'
          }}
        >
          {col.word.split('').map((char, idx) => (
            <span key={idx} className="block leading-[0.85] text-center">{char}</span>
          ))}
        </div>
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(250px); opacity: 0; }
        }
        .animate-matrix-fall {
          animation-name: matrix-fall;
          animation-fill-mode: both;
        }
      `}} />
    </div>
  );
}
