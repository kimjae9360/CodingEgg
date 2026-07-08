import React, { useState, useRef, useCallback } from 'react';
import { CheckCircle2, Lock, Play } from 'lucide-react';
import MatrixRain from './MatrixRain';

const EMOJI_MAP = [
  '🖨️', '📦', '🔢', '📝', '🔀', '🔁', '🧮', '🐍', '🚀', '🔮', '🐉', '👾'
];

function getCardContent(title) {
  const contentMap = {
    // UNIT 1
    '파이썬 첫 인사 (print)': { name: "출력 (print)", desc: "화면에 원하는 데이터나 문자를 출력하는 파이썬의 기본 함수를 배웁니다." },
    '데이터의 상자 (변수)': { name: "변수 (Variable)", desc: "데이터를 담아두고 언제든 꺼내 쓸 수 있는 가상의 상자를 만드는 법을 배웁니다." },
    '숫자 다루기 (연산)': { name: "산술 연산자", desc: "파이썬을 계산기처럼 사용하여 더하기, 빼기, 곱하기, 나누기를 수행합니다." },
    '문자열의 세계': { name: "문자열 (String)", desc: "텍스트 데이터를 다루고 문자를 묶거나 형태를 변환하는 방법을 알아봅니다." },
    '글자 뽑아내기 (인덱싱)': { name: "인덱싱/슬라이싱", desc: "문자열 안에서 위치를 찾아 원하는 글자만 쏙쏙 뽑아내는 기술을 마스터합니다." },
    
    // UNIT 2
    '참과 거짓 (Boolean)': { name: "불리언 (Boolean)", desc: "컴퓨터가 생각하는 방식인 참(True)과 거짓(False) 논리 데이터 타입을 배웁니다." },
    '만약에... (if문)': { name: "조건문 (if)", desc: "만약 특정 조건이 맞다면 코드를 실행하게 만드는 제어문의 기초를 다룹니다." },
    '그렇지 않으면 (else)': { name: "예외 분기 (else)", desc: "앞선 조건이 모두 틀렸을 때 실행될 기본 동작을 설정하는 방법을 알아봅니다." },
    '여러 개의 조건 (elif)': { name: "다중 조건 (elif)", desc: "여러 개의 조건을 순차적으로 검사하여 더욱 복잡한 논리 흐름을 구성합니다." },
    '조건문 마스터 보스전': { name: "조건문 마스터", desc: "if, elif, else를 혼합한 복잡한 논리 문제를 풀어 실력을 증명하세요." },
    
    // UNIT 3
    '조건부 반복 (while)': { name: "조건부 루프 (while)", desc: "특정 조건이 참인 동안 코드를 무한히 반복 실행하는 방법을 배웁니다." },
    '탈출구와 건너뛰기 (break / continue)': { name: "제어 흐름", desc: "반복을 강제로 종료하거나(break) 이번 차례만 건너뛰는(continue) 법을 배웁니다." },
    '정해진 만큼 반복 (for)': { name: "순회 루프 (for)", desc: "정해진 횟수나 데이터의 길이만큼 코드를 안전하게 반복하는 for문을 배웁니다." },
    '숫자 공장 (range)': { name: "연속된 숫자 (range)", desc: "for문과 찰떡궁합인 연속된 숫자를 자동으로 만들어내는 range 함수를 다룹니다." },
    '반복문 마스터 보스전': { name: "반복문 마스터", desc: "while과 for, 그리고 흐름 제어를 활용해 반복 패턴 문제를 해결하세요." },

    // UNIT 4
    '리스트(List) 기초': { name: "리스트 기초", desc: "여러 개의 데이터를 하나의 변수에 순서대로 묶어서 관리하는 리스트를 배웁니다." },
    '리스트 안의 보물 찾기': { name: "리스트 인덱싱", desc: "리스트 안의 수많은 데이터 중 내가 원하는 위치의 데이터를 정확히 찾아냅니다." },
    '리스트 메서드 (추가와 삭제)': { name: "리스트 조작", desc: "append, pop 등을 이용해 가방에 물건을 넣고 빼듯 리스트의 데이터를 수정합니다." },
    '리스트와 반복문의 콜라보': { name: "리스트 순회", desc: "for문을 사용해 리스트 안의 모든 데이터를 한 번에 효율적으로 처리합니다." },
    '변경 불가능한 가방 (Tuple)': { name: "튜플 (Tuple)", desc: "리스트와 비슷하지만 한 번 만들어지면 절대 바꿀 수 없는 안전한 튜플을 배웁니다." },

    // UNIT 5
    '비기너 종합 테스트 1': { name: "종합 테스트 1", desc: "변수, 자료형, 출력 등 기초적인 개념들을 다시 한번 점검하는 테스트입니다." },
    '비기너 종합 테스트 2': { name: "종합 테스트 2", desc: "조건문과 논리 연산자를 활용한 심화 문제를 해결해야 합니다." },
    '비기너 종합 테스트 3': { name: "종합 테스트 3", desc: "복잡한 반복문과 리스트를 결합하여 데이터를 처리하는 능력을 평가합니다." },
    '비기너 종합 테스트 4': { name: "종합 테스트 4", desc: "지금까지 배운 모든 파이썬 문법을 총동원하여 마지막 관문을 통과하세요." },
    '🏆 티어 1 클리어 🏆': { name: "수료증 발급", desc: "축하합니다! 파이썬 비기너 과정을 완벽하게 마스터했습니다." }
  };

  const cleanTitle = title.split('\n').pop().trim();
  return contentMap[cleanTitle] || { name: "핵심 개념 학습", desc: "이 레슨에서 파이썬 프로그래밍의 핵심적인 기초 개념을 학습하게 됩니다." };
}

export default function PokemonCard({ 
  node, 
  index,
  totalNodes = 5,
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
  onLeave,
  tooltip
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) onHover();
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onLeave) onLeave();
  };

  const monsterEmoji = EMOJI_MAP[index % EMOJI_MAP.length];
  const content = getCardContent(node.title);
  
  const pastelTypes = [
    { name: 'Water', bg: 'bg-[#93c5fd]', from: 'from-[#bfdbfe]', to: 'to-[#93c5fd]', border: 'border-[#dbeafe]', shadow: 'shadow-blue-300/50' },
    { name: 'Fire', bg: 'bg-[#fca5a5]', from: 'from-[#fecaca]', to: 'to-[#fca5a5]', border: 'border-[#fee2e2]', shadow: 'shadow-red-300/50' },
    { name: 'Grass', bg: 'bg-[#86efac]', from: 'from-[#bbf7d0]', to: 'to-[#86efac]', border: 'border-[#dcfce7]', shadow: 'shadow-green-300/50' },
    { name: 'Psychic', bg: 'bg-[#d8b4fe]', from: 'from-[#e9d5ff]', to: 'to-[#d8b4fe]', border: 'border-[#f3e8ff]', shadow: 'shadow-purple-300/50' }
  ];
  const legendaryGold = { name: 'Gold', bg: 'bg-[#FFD700]', from: 'from-[#FFF8E1]', to: 'to-[#FFC107]', border: 'border-[#FFE082]', shadow: 'shadow-yellow-500/80' };

  const isBoss = index === totalNodes - 1;
  const type = isBoss ? legendaryGold : pastelTypes[index % pastelTypes.length];

  // U-Shape Cover Flow Math
  const centerIndex = Math.floor((totalNodes - 1) / 2);
  const offset = index - centerIndex; // e.g. -2, -1, 0, 1, 2
  
  const isPopOut = isHovered || isFocus;
  const translateY = isPopOut ? -40 : Math.abs(offset) * -15; // Pop out goes up
  const rotateZ = isPopOut ? 0 : offset * 3; // Pop out straightens
  const scale = isPopOut ? 1.1 : 1.0;
  const zIndex = isHovered ? 50 : (isFocus ? 40 : 10 - Math.abs(offset));

  const widthClass = 'w-48 md:w-56';
  const heightClass = 'h-[300px] md:h-[340px]';

  const cardStyle = isLocked ? 'from-gray-700 to-gray-900 border-gray-600 shadow-none' : `${type.from} ${type.to} ${type.border} ${type.shadow}`;
  const textStyle = isDark || isLocked ? 'text-gray-900' : 'text-gray-900'; // Pastel cards need dark text usually, but let's keep text dark for readability on bright cards

  return (
    <div 
      className={`relative flex-none shrink-0 flex flex-col items-center ${widthClass} ${heightClass} transition-all duration-500 ease-out mx-[-15px] md:mx-[-20px]`}
      style={{ zIndex }}
    >
      {tooltip && (
        <div className="absolute -top-12 md:-top-16 z-50 animate-bounce cursor-pointer hover:scale-105 transition-transform">
          {tooltip}
        </div>
      )}

      <div
        className={`relative group flex-none shrink-0 transition-all duration-500 ease-out w-full h-full`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (!isLocked && onStart) onStart();
        }}
        style={{
          transform: `translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
        }}
      >
        <div
          className={`w-full h-full rounded-2xl cursor-pointer
            ${isPopOut ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'shadow-xl'}
            transition-all duration-500 transform-gpu
          `}
        >
          {/* Card Outer Border & Background */}
          <div className={`absolute inset-0 rounded-2xl border-[6px] md:border-[8px] bg-gradient-to-br ${cardStyle} overflow-hidden flex flex-col p-2 md:p-3`}>
            
            {/* TCG Header */}
            <div className="flex justify-between items-center mb-2 px-1">
              <h3 className={`font-black text-sm md:text-base tracking-tight truncate flex-1 drop-shadow-sm ${textStyle}`}>
                {node.title.split('(')[0].trim() || node.title}
              </h3>
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <span className={`font-black text-xs md:text-sm drop-shadow-sm ${isLocked ? 'text-gray-400' : 'text-[#d97706]'}`}>
                  {xpReward} XP
                </span>
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full shadow-inner border-[1.5px] border-white/40 flex items-center justify-center ${isLocked ? 'bg-gray-500' : type.bg}`}>
                </div>
              </div>
            </div>

            {/* TCG Illustration Box */}
            <div className="w-full relative rounded-lg border-2 border-white/40 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] overflow-hidden bg-white/50 flex-1 flex items-center justify-center mb-3">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Cpath d=\\'M0 40L40 0H20L0 20M40 40V20L20 40\\'/ %3E%3C/g%3E%3C/svg%3E')" }} />
              
              {isLocked && <MatrixRain opacity="opacity-60" color="text-gray-800" />}

              <div className={`z-10 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)] transform transition-transform duration-700 ${isPopOut ? 'text-6xl md:text-7xl scale-110' : 'text-5xl md:text-6xl'} ${isLocked ? 'grayscale opacity-50' : 'animate-bounce-slow'}`}>
                {monsterEmoji}
              </div>

              {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] z-20">
                  <Lock size={isPopOut ? 40 : 28} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
              )}
            </div>

            {/* Info Ribbon */}
            <div className={`w-full py-0.5 px-2 mb-2 bg-black/10 rounded flex justify-between items-center text-[10px] md:text-[11px] font-bold ${textStyle}`}>
              <span>NO. {(index + 1).toString().padStart(3, '0')}</span>
              <span>LESSON {progress}/{totalLessons}</span>
            </div>

            {/* TCG Content Section */}
            <div className={`w-full bg-white/90 rounded-lg p-2 md:p-3 flex flex-col flex-none min-h-[70px] md:min-h-[85px] border border-white/40 shadow-inner relative`}>
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-gray-300 shadow-inner"></div>
                   <span className={`font-black text-xs md:text-sm text-gray-900`}>{content.name}</span>
                </div>
              </div>
              <p className={`text-[9px] md:text-[10px] leading-tight font-medium text-gray-600`}>
                {content.desc}
              </p>
              
              {!isLocked && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-lg overflow-hidden mt-2">
                  <div 
                    className={`h-full ${type.bg} transition-all duration-1000`} 
                    style={{ width: `${(progress / totalLessons) * 100}%` }}
                  />
                </div>
              )}
            </div>

            {/* Permanent Holographic Foil Effect for completed or active cards */}
            {(!isLocked) && (
              <div 
                className="absolute inset-0 pointer-events-none rounded-xl mix-blend-color-dodge opacity-60 animate-holo-foil"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      105deg, 
                      transparent 20%, 
                      rgba(255, 213, 79, 0.4) 25%, 
                      rgba(255, 255, 255, 0.6) 45%, 
                      rgba(239, 68, 68, 0.4) 50%, 
                      transparent 55%
                    )
                  `,
                  backgroundSize: '200% 200%',
                }}
              />
            )}
            
            {isCompleted && !isFocus && (
              <div className="absolute top-2 right-2 z-40 bg-white/80 rounded-full p-1 border border-yellow-400 shadow-[0_0_10px_rgba(255,179,0,0.5)]">
                <CheckCircle2 size={16} className="text-yellow-500" />
              </div>
            )}
            
            {isFocus && !isLocked && !isCompleted && (
              <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                 <div className="bg-[#FFB300] text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(255,179,0,0.6)] animate-pulse border-4 border-white/40">
                   <Play size={24} fill="currentColor" className="ml-1" />
                 </div>
              </div>
            )}

            <style dangerouslySetInnerHTML={{__html: `
              @keyframes holo-foil {
                0% { background-position: 200% 0%; }
                100% { background-position: -200% 0%; }
              }
              .animate-holo-foil {
                animation: holo-foil 4s linear infinite;
              }
            `}} />
          </div>
        </div>
      </div>
    </div>
  );
}
