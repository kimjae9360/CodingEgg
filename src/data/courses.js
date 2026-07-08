import { PYTHON_TRACK } from './curriculum';

// Course/subject registry — mirrors Duolingo's language picker, but for
// coding subjects. Only Python has real curriculum content right now;
// the rest are shown as "coming soon" so the picker UI is ready to grow
// into as more tracks are authored.
export const COURSES = [
  {
    id: 'python',
    name: '파이썬',
    subtitle: '기초부터 객체지향까지',
    emoji: '🐍',
    color: '#00C4B5',
    available: true,
    track: PYTHON_TRACK,
  },
  {
    id: 'crawling',
    name: '웹 크롤링',
    subtitle: 'BeautifulSoup · Selenium',
    emoji: '🕷️',
    color: '#7C5CFC',
    available: false,
  },
  {
    id: 'sql',
    name: 'SQL',
    subtitle: '데이터베이스 · 쿼리',
    emoji: '🗄️',
    color: '#1CB0F6',
    available: false,
  },
  {
    id: 'ml',
    name: '머신러닝',
    subtitle: 'scikit-learn · 회귀/분류',
    emoji: '🤖',
    color: '#FF9600',
    available: false,
  },
  {
    id: 'dl',
    name: '딥러닝',
    subtitle: 'PyTorch · 신경망',
    emoji: '🧠',
    color: '#FF4B8D',
    available: false,
  },
  {
    id: 'llm',
    name: 'LLM',
    subtitle: '프롬프트 · RAG · 에이전트',
    emoji: '💬',
    color: '#58CC02',
    available: false,
  },
];

export function getCourse(id) {
  return COURSES.find(c => c.id === id) || COURSES[0];
}
