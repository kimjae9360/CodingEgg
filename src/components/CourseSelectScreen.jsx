import React from 'react';
import { COURSES } from '../data/courses';
import { Lock, Check } from 'lucide-react';

// Premium dark grid layout inspired by smithery.ai
export default function CourseSelectScreen({ selectedCourseId, onSelect }) {
  // Force dark premium theme for this specific screen
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 md:px-6 py-8 md:py-16 bg-[#0B1120] text-white overflow-hidden relative">
      <div className="text-6xl mb-4">🥚</div>
      <h1 className="text-3xl md:text-4xl font-black mb-2 text-center tracking-tight text-gray-100">어떤 과목을 배워볼까요?</h1>
      <p className="font-bold mb-12 text-center text-gray-400">
        마음에 드는 트랙을 골라주세요. 언제든지 나중에 바꿀 수 있어요!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl w-full">
        {COURSES.map((course) => {
          const isSelected = course.id === selectedCourseId;
          return (
            <button
              key={course.id}
              disabled={!course.available}
              onClick={() => onSelect(course.id)}
              className={`relative flex flex-col items-start text-left gap-3 rounded-2xl p-6 border transition-all duration-300
                ${course.available ? 'cursor-pointer hover:-translate-y-1 hover:border-gray-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'cursor-not-allowed opacity-50'}
                ${isSelected
                  ? 'border-[#FFB300] bg-[#1a1a1a] shadow-[0_0_15px_rgba(0,196,181,0.2)]'
                  : 'border-gray-800 bg-[#1E293B]'}
              `}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 bg-[#FFB300] text-white rounded-full p-1">
                  <Check size={14} strokeWidth={4} />
                </div>
              )}
              {!course.available && (
                <div className="absolute top-4 right-4 rounded-full p-1.5 bg-[#1E293B] text-gray-500">
                  <Lock size={14} />
                </div>
              )}
              
              <div className="flex items-center gap-3 w-full">
                {course.logoUrl ? (
                  <div className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-lg p-2 border border-gray-800">
                    <img src={course.logoUrl} alt={course.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center bg-black/30 rounded-lg border border-gray-800 text-2xl">
                    {course.emoji}
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-black text-lg text-gray-100">{course.name}</div>
                </div>
              </div>

              <div className="text-sm font-bold text-gray-400 mt-2 line-clamp-2">
                {course.available ? course.subtitle : '준비 중이에요. 조금만 기다려주세요!'}
              </div>

              {course.available && (
                <div className="mt-auto pt-4 flex items-center gap-4 w-full">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    진행 가능
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-600 whitespace-nowrap">
                    12+ 레슨
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Floating Sunglasses Character — hidden on small screens since the
          fixed position would otherwise sit on top of the course cards */}
      <div className="hidden md:flex fixed bottom-6 right-6 md:bottom-10 md:right-10 items-end gap-3 z-50 pointer-events-none">
        <div className="bg-[#1E293B] text-gray-300 font-bold text-sm px-4 py-2 rounded-2xl rounded-br-none border border-gray-800 shadow-2xl animate-fade-in">
          어떤 코딩을 마스터해볼까?
        </div>
        <div className="text-6xl md:text-7xl animate-bounce" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }}>
          😎🔥
        </div>
      </div>
    </div>
  );
}
