import { tier1 } from './tier1';
import { tier2 } from './tier2';
import { tier3 } from './tier3';

export const PYTHON_TRACK = {
  id: "python_master",
  title: "Python Grand Master Track",
  description: "파이썬 기초부터 객체지향, 실무까지 완벽 마스터",
  sections: [
    ...tier1,
    ...tier2,
    ...tier3
  ]
};
