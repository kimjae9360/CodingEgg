import { tier1 } from './tier1';
import { tier2 } from './tier2';
import { tier3 } from './tier3';

import { ml_tier1 } from './ml_tier1';

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

export const ML_TRACK = {
  id: "ml_master",
  title: "Machine Learning Track",
  description: "데이터 분석부터 예측 모델(Scikit-learn)까지",
  sections: [
    ...ml_tier1
  ]
};
