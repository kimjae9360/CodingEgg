import { PYTHON_TRACK, ML_TRACK } from './curriculum';

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
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    color: '#FFB300',
    available: true,
    track: PYTHON_TRACK,
  },
  {
    id: 'crawling',
    name: '웹 크롤링',
    subtitle: 'BeautifulSoup · Selenium',
    emoji: '🕷️',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    color: '#7C5CFC',
    available: false,
  },
  {
    id: 'sql',
    name: 'SQL',
    subtitle: '데이터베이스 · 쿼리',
    emoji: '🗄️',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    color: '#1CB0F6',
    available: false,
  },
  {
    id: 'ml',
    name: '머신러닝',
    subtitle: 'scikit-learn · 회귀/분류',
    emoji: '🤖',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
    color: '#FF9600',
    available: true,
    track: ML_TRACK,
  },
  {
    id: 'dl',
    name: '딥러닝',
    subtitle: 'PyTorch · 신경망',
    emoji: '🧠',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
    color: '#FF4B8D',
    available: false,
  },
  {
    id: 'llm',
    name: 'LLM',
    subtitle: '프롬프트 · RAG · 에이전트',
    emoji: '💬',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg',
    color: '#58CC02',
    available: false,
  },
];

export function getCourse(id) {
  return COURSES.find(c => c.id === id) || COURSES[0];
}
