import { tier1 } from './tier1';
import { tier2 } from './tier2';
import { tier3 } from './tier3';
import { ml_tier1 } from './ml_tier1';
import { ml_tier2 } from './ml_tier2';
import { ml_tier3 } from './ml_tier3';
import { ml_tier4 } from './ml_tier4';
import { sql_tier1 } from './sql_tier1';
import { crawling_tier1 } from './crawling_tier1';
import { crawling_tier2 } from './crawling_tier2';
import { dl_tier1 } from './dl_tier1';
import { dl_tier2 } from './dl_tier2';
import { dl_tier3 } from './dl_tier3';
import { llm_tier1 } from './llm_tier1';
import { llm_tier2 } from './llm_tier2';
import { llm_tier3 } from './llm_tier3';

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
    ...ml_tier1,
    ...ml_tier2,
    ...ml_tier3,
    ...ml_tier4
  ]
};

export const SQL_TRACK = {
  id: "sql_master",
  title: "SQL Track",
  description: "데이터베이스와 SQL 쿼리 마스터",
  sections: [
    ...sql_tier1
  ]
};

export const CRAWLING_TRACK = {
  id: "crawling",
  title: "웹 크롤링 마스터",
  description: "웹 데이터 수집과 자동화",
  sections: [
    ...crawling_tier1,
    ...crawling_tier2
  ]
};

export const DL_TRACK = {
  id: "dl_master",
  title: "딥러닝(PyTorch)",
  description: "파이토치를 활용한 신경망 기초부터 인공지능 실무까지 완벽 마스터",
  sections: [
    ...dl_tier1,
    ...dl_tier2,
    ...dl_tier3
  ]
};

export const LLM_TRACK = {
  id: "llm_agent",
  title: "LLM & AI 에이전트 마스터",
  description: "자연어처리(NLP) 기초부터 LangChain, RAG, 스스로 동작하는 AI 비서까지 구축",
  sections: [
    ...llm_tier1,
    ...llm_tier2,
    ...llm_tier3
  ]
};
