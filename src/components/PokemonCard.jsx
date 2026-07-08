import React, { useState, useRef, useCallback } from 'react';
import { CheckCircle2, Lock, Play } from 'lucide-react';

const EMOJI_MAP = [
  '🖨️', '📦', '🔢', '📝', '🔀', '🔁', '🧮', '🐍', '🚀', '🔮', '🐉', '👾'
];

export default function PokemonCard({ 
  node, 
  index,
  isLocked, 
  isCompleted, 
  isActive, 
  isFocus,
  isDark, 
  xpReward, 
  progress = 0,
  totalLessons = 1,
  onStart,
  onHover,
  onLeave
}) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-15 to 15 degrees)
    const rotateY = ((mouseX / width) - 0.5) * 30; // Left/Right
    const rotateX = ((mouseY / height) - 0.5) * -30; // Up/Down

    setRotation({ x: rotateX, y: rotateY });

    // Calculate glare position based on mouse (0% to 100%)
    setGlarePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) onHover();
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
    if (onLeave) onLeave();
  };

  // Gamification styling based on state
  const monsterEmoji = EMOJI_MAP[index % EMOJI_MAP.length];
  
  // Card Types based on index for variety
  const types = [
    { name: 'Water', bg: 'bg-blue-500', from: 'from-blue-400', to: 'to-blue-600', border: 'border-blue-300' },
    { name: 'Fire', bg: 'bg-red-500', from: 'from-red-400', to: 'to-red-600', border: 'border-red-300' },
    { name: 'Grass', bg: 'bg-green-500', from: 'from-green-400', to: 'to-green-600', border: 'border-green-300' },
    { name: 'Electric', bg: 'bg-yellow-400', from: 'from-yellow-300', to: 'to-yellow-500', border: 'border-yellow-200' },
    { name: 'Psychic', bg: 'bg-purple-500', from: 'from-purple-400', to: 'to-purple-600', border: 'border-purple-300' }
  ];
  const type = types[index % types.length];

  let cardStyle = `${type.from} ${type.to} ${type.border}`;
  if (isLocked) {
    cardStyle = 'from-gray-700 to-gray-800 border-gray-600'; // Removed grayscale brightness-50 so text stays readable
  } else if (isCompleted) {
    // Golden Holo style for completed
    cardStyle = 'from-yellow-300 via-yellow-500 to-yellow-600 border-yellow-200';
  }

  // Sizing based on focus state
  const widthClass = isFocus ? 'w-56 md:w-64' : 'w-36 md:w-40';
  const heightClass = isFocus ? 'h-[320px] md:h-[360px]' : 'h-[200px] md:h-[240px]';

  return (
    <div
      className={`relative group flex-none shrink-0 transition-all duration-500 ease-out ${widthClass} ${heightClass}`}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={`w-full h-full rounded-2xl shadow-2xl transition-transform duration-200 ease-out border-8 relative overflow-hidden bg-gradient-to-br ${cardStyle}
          ${isActive && !isHovered ? 'animate-pulse shadow-[0_0_20px_rgba(0,196,181,0.5)]' : ''}
        `}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)` 
            : 'rotateX(0) rotateY(0) scale3d(1, 1, 1)',
        }}
      >
        {/* Holographic Glare Overlay */}
        {isHovered && !isLocked && (
          <div 
            className="absolute inset-0 pointer-events-none z-50 mix-blend-color-dodge opacity-60 transition-opacity duration-300"
            style={{
              background: `radial-gradient(
                circle at ${glarePosition.x}% ${glarePosition.y}%, 
                rgba(255,255,255,0.8) 0%, 
                rgba(255,255,255,0) 60%
              ), 
              linear-gradient(
                125deg, 
                #ff008450 15%, 
                #fca04850 30%, 
                #ffff0050 40%, 
                #00ff8a50 60%, 
                #00cfff50 70%, 
                #cc4cfa50 85%
              )`,
              backgroundSize: '200% 200%',
              backgroundPosition: `${glarePosition.x}% ${glarePosition.y}%`,
            }}
          />
        )}

        {/* Card Content Shell */}
        <div className={`absolute inset-1 rounded-xl flex flex-col pointer-events-none z-10 backdrop-blur-sm transition-all duration-500 ${isFocus ? 'p-4' : 'p-3'} ${isDark ? 'bg-[#181A20]/95' : 'bg-white/90'}`}>
          
          {/* Header */}
          <div className={`flex justify-between items-center border-b-2 transition-all ${isFocus ? 'mb-3 pb-2' : 'mb-2 pb-1'} ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`font-black truncate ${isFocus ? 'text-sm max-w-[150px]' : 'text-xs max-w-[100px]'} ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {node.title.split('(')[0].trim() || node.title}
            </h3>
            {isFocus && (
              <div className="flex items-center gap-1">
                <span className="font-black text-red-500 text-sm">{xpReward} HP</span>
                <div className={`w-5 h-5 rounded-full ${type.bg} shadow-inner border border-black/20`} />
              </div>
            )}
          </div>

          {/* Illustration Container */}
          <div className={`w-full rounded-lg shadow-inner flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${isLocked ? 'from-gray-400 to-gray-600' : type.from + ' ' + type.to} transition-all duration-500 ${isFocus ? 'h-40 mb-4' : 'flex-1 mb-2'}`}>
             <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')" }} />
             
             <div className={`filter drop-shadow-xl transform transition-all duration-500 ${isFocus ? 'text-6xl' : 'text-4xl'} ${isLocked ? 'grayscale opacity-50' : 'hover:scale-110'}`}>
               {monsterEmoji}
             </div>
             
             {isLocked && (
               <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                 <Lock size={isFocus ? 36 : 24} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
               </div>
             )}

             {isCompleted && isFocus && (
               <div className="absolute top-2 right-2 text-yellow-300 drop-shadow-md animate-pulse">
                 ✨
               </div>
             )}
          </div>

          {/* Node Info & Attack */}
          <div className="flex flex-col justify-between pointer-events-auto shrink-0">
            {isFocus && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {isCompleted ? '완료됨' : `레슨 ${progress + 1}/${totalLessons}`}
                  </span>
                  {isCompleted && <CheckCircle2 size={16} className="text-[#00C4B5]" />}
                </div>
                <p className={`text-xs font-semibold leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {node.title}
                  <br/>
                  <span className="opacity-70 font-normal">코딩 에너지를 획득하세요!</span>
                </p>
              </div>
            )}

            {/* Action Button */}
            <button
              onClick={(e) => { e.stopPropagation(); onStart(); }}
              disabled={isLocked}
              className={`w-full rounded-xl font-black transition-all shadow-md active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1
                ${isFocus ? 'py-2.5 text-sm' : 'py-1.5 text-xs'}
                ${isLocked 
                  ? (isDark ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
                  : isCompleted
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:from-yellow-500 hover:to-yellow-600 border border-yellow-300'
                    : 'bg-[#00C4B5] text-white hover:bg-[#15d8c9] border border-[#00A396]'
                }`}
            >
              {isCompleted ? '복습' : isLocked ? '잠김' : <><Play size={14} fill="currentColor"/> 시작 {totalLessons > 1 && `(${progress+1}/${totalLessons})`}</>}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
