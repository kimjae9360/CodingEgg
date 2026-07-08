import React from 'react';
import { Lock, Check, Zap, HelpCircle } from 'lucide-react';

export default function SkillTreeNode({ node, onClick, theme = 'light', sectionIndex = 0, isCheckpoint = false }) {
  const isDark = theme === 'dark';
  const isActive = node.status === 'active';
  const isLocked = node.status === 'locked';
  const isCompleted = node.status === 'completed';

  const displayElement = isLocked ? (
    <HelpCircle size={48} className={isDark ? 'text-gray-500' : 'text-gray-400'} strokeWidth={3} />
  ) : isCheckpoint ? (
    <span>🏆</span>
  ) : (
    <span className="relative flex items-center justify-center">
      🥚
      {/* SVG Cracks Overlay */}
      <svg className="absolute inset-0 w-full h-full text-yellow-950/40 pointer-events-none" viewBox="0 0 100 100" style={{ transform: 'scale(1.1)' }}>
        {sectionIndex >= 0 && <path d="M 45 15 Q 55 30 45 45 T 55 75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
        {sectionIndex >= 1 && <path d="M 65 25 Q 55 40 70 55 T 60 85" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
        {sectionIndex >= 2 && <path d="M 25 40 Q 35 55 25 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
        {sectionIndex >= 3 && <path d="M 45 80 Q 55 90 40 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
        {sectionIndex >= 4 && <path d="M 75 45 Q 85 60 70 75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </span>
  );

  // Bright Nature Theme Configuration
  const lightConfig = {
    locked: { 
      glass: 'bg-gray-200 border-gray-300', 
      glow: 'shadow-none', 
      hover: 'hover:bg-gray-300' 
    },
    active: { 
      glass: 'bg-amber-100/90 backdrop-blur-xl border-amber-300', 
      glow: 'shadow-[0_0_40px_rgba(251,191,36,0.5)]', 
      hover: 'hover:bg-amber-200/90 hover:shadow-[0_0_50px_rgba(251,191,36,0.7)] hover:scale-105' 
    },
    completed: { 
      glass: 'bg-emerald-100/80 backdrop-blur-xl border-emerald-300', 
      glow: 'shadow-[0_10px_20px_rgba(52,211,153,0.3)]', 
      hover: 'hover:bg-emerald-200/80 hover:scale-105' 
    }
  };

  // Cyberpunk Dark Theme Configuration
  const darkConfig = {
    locked: { 
      glass: 'bg-[#334155] border-[#1f292e]', 
      glow: 'shadow-inner', 
      hover: 'hover:bg-[#475569]' 
    },
    active: { 
      glass: 'bg-[#FFB300]/20 backdrop-blur-xl border-[#FFB300]', 
      glow: 'shadow-[0_0_40px_rgba(0,196,181,0.6)]', 
      hover: 'hover:bg-[#FFB300]/30 hover:shadow-[0_0_60px_rgba(0,196,181,0.8)] hover:scale-105' 
    },
    completed: { 
      glass: 'bg-[#FFB300]/20 backdrop-blur-xl border-[#FFB300]', 
      glow: 'shadow-[0_0_20px_rgba(255,179,0,0.4)]', 
      hover: 'hover:bg-[#FFB300]/30 hover:scale-105' 
    }
  };

  const config = isDark ? darkConfig[node.status] : lightConfig[node.status];

  return (
    <div className={`relative flex flex-col items-center ${isActive ? 'z-20' : 'z-10'}`}>

      {/* Sleek Tooltip for Active Node */}
      {isActive && (
        <div className={`absolute -top-14 font-black px-5 py-2 rounded-full text-sm md:text-base uppercase tracking-widest animate-pulse border whitespace-nowrap
          ${isDark 
            ? 'bg-[#FFB300] text-gray-900 shadow-[0_0_20px_rgba(0,196,181,0.8)] border-white/20' 
            : 'bg-amber-400 text-white shadow-[0_10px_20px_rgba(251,191,36,0.4)] border-amber-300'
          }`}
        >
          시작
          <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b 
            ${isDark ? 'bg-[#FFB300] border-white/20' : 'bg-amber-400 border-amber-300'}`}></div>
        </div>
      )}

      <div className="relative flex justify-center items-center group">

        {/* Futuristic Incubator Pod (Button) */}
        <button 
          onClick={onClick}
          disabled={isLocked}
          className={`
            relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl md:text-6xl
            transition-all duration-300 z-10 border-2 md:border-4
            ${config.glass} ${config.glow} ${config.hover}
            ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          {/* Inner Glowing Ring for active */}
          {isActive && (
            <div className={`absolute inset-2 border-2 rounded-full opacity-50 animate-ping ${isDark ? 'border-[#FFB300]' : 'border-amber-400'}`}></div>
          )}

          <span className={`relative z-10 flex items-center justify-center w-full h-full ${isActive ? 'animate-float' : ''}`}>
            {displayElement}
          </span>

          {/* Status Badge */}
          {isLocked && (
            <div className={`absolute -bottom-2 right-0 rounded-full p-2 border shadow-sm
              ${isDark ? 'bg-[#0B1120] border-[#475569] text-gray-500 shadow-lg' : 'bg-white border-gray-200 text-gray-400'}`}>
              <Lock size={16} />
            </div>
          )}
          {isActive && (
            <div className={`absolute -bottom-2 right-0 rounded-full p-2 border 
              ${isDark ? 'bg-[#FFB300] border-white/20 text-gray-900 shadow-[0_0_15px_rgba(0,196,181,1)]' : 'bg-amber-400 border-white text-white shadow-[0_5px_15px_rgba(251,191,36,0.6)]'}`}>
              <Zap size={16} fill="currentColor" />
            </div>
          )}
          {isCompleted && (
            <div className={`absolute -bottom-2 right-0 rounded-full p-2 border 
              ${isDark ? 'bg-[#FFB300] border-white/20 text-gray-900 shadow-[0_0_15px_rgba(255,179,0,0.8)]' : 'bg-emerald-400 border-white text-white shadow-[0_5px_15px_rgba(52,211,153,0.6)]'}`}>
              <Check size={16} strokeWidth={4} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
