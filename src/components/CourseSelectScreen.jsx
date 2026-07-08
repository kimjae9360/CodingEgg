import React from 'react';
import { COURSES } from '../data/courses';
import { Lock, Check } from 'lucide-react';

// Duolingo-style "pick your language" grid, adapted to coding subjects.
export default function CourseSelectScreen({ theme = 'light', selectedCourseId, onSelect }) {
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen w-full flex flex-col items-center px-6 py-16 ${isDark ? 'bg-[#181A20] text-white' : 'bg-[#F8FAFC] text-gray-900'}`}>
      <div className="text-6xl mb-4">🥚</div>
      <h1 className="text-3xl md:text-4xl font-black mb-2 text-center">어떤 과목을 배워볼까요?</h1>
      <p className={`font-bold mb-12 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        마음에 드는 트랙을 골라주세요. 언제든지 나중에 바꿀 수 있어요!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl w-full">
        {COURSES.map((course) => {
          const isSelected = course.id === selectedCourseId;
          return (
            <button
              key={course.id}
              disabled={!course.available}
              onClick={() => onSelect(course.id)}
              className={`relative flex flex-col items-center justify-center gap-2 rounded-3xl p-6 border-2 transition-all duration-200
                ${course.available ? 'cursor-pointer hover:-translate-y-1 hover:shadow-xl' : 'cursor-not-allowed opacity-60'}
                ${isSelected
                  ? 'border-[#00C4B5] shadow-[0_0_0_4px_rgba(0,196,181,0.2)]'
                  : isDark ? 'border-[#2b3a42] bg-[#2b3a42]' : 'border-gray-200 bg-white shadow-md'}
              `}
              style={isSelected ? { backgroundColor: isDark ? '#2b3a42' : '#fff' } : undefined}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 bg-[#00C4B5] text-white rounded-full p-1">
                  <Check size={14} strokeWidth={4} />
                </div>
              )}
              {!course.available && (
                <div className={`absolute top-3 right-3 rounded-full p-1.5 ${isDark ? 'bg-[#181A20] text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
                  <Lock size={14} />
                </div>
              )}
              <div className="text-5xl mb-1">{course.emoji}</div>
              <div className="font-black text-lg">{course.name}</div>
              <div className={`text-xs font-bold text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {course.available ? course.subtitle : '준비 중이에요'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
