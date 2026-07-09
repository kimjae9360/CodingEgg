const fs = require('fs');
const path = require('path');

const TOPICS = {
  data_cleaning: {
    wb: [
      { parts: ['데이터를 조작하기 위해 가장 많이 쓰이는 라이브러리는 ', ' 입니다.'], bank: ['pandas', 'numpy', 'matplotlib'], ans: ['pandas'], hint: '판다스입니다.' }
    ],
    mcq: [
      { q: 'Pandas에서 엑셀의 표처럼 2차원 데이터를 다루는 핵심 구조의 이름은 무엇인가요?', opts: ['DataFrame', 'Series', 'List'], a: 0, hint: '데이터프레임(DataFrame)입니다.' },
      { q: 'Pandas 라이브러리를 불러올 때 주로 사용하는 관례적인 약어(별칭)는 무엇인가요?', opts: ['import pandas as pd', 'import pandas as np', 'import pandas as df'], a: 0, hint: 'pd를 주로 사용합니다.' }
    ],
    code: [
      { c: 'Pandas 라이브러리를 불러오고, 파이썬 딕셔너리를 이용해 간단한 DataFrame을 만들어 출력해보세요.', i: 'import pandas as pd\ndata = {"이름": ["에그", "치킨"], "나이": [1, 2]}\n# data를 DataFrame으로 변환하여 df 변수에 저장하세요\n\nprint(df)', e: '   이름  나이\n0  에그   1\n1  치킨   2', h: 'df = pd.DataFrame(data)' },
      { c: 'DataFrame에서 특정 열(column)만 선택하여 출력해보세요. (이름 열 선택)', i: 'import pandas as pd\ndata = {"이름": ["에그", "치킨"], "나이": [1, 2]}\ndf = pd.DataFrame(data)\n# df에서 "이름" 열만 추출하여 출력하세요\n', e: '0    에그\n1    치킨\nName: 이름, dtype: object', h: 'print(df["이름"])' },
      { c: 'DataFrame에 새로운 열 "점수"를 추가하고 각각 100, 90을 넣어보세요.', i: 'import pandas as pd\ndata = {"이름": ["에그", "치킨"], "나이": [1, 2]}\ndf = pd.DataFrame(data)\n# "점수" 열을 추가하세요\n\nprint(df)', e: '   이름  나이   점수\n0  에그   1  100\n1  치킨   2   90', h: 'df["점수"] = [100, 90]' }
    ]
  },
  missing_data: {
    wb: [
      { parts: ['비어있는 데이터(결측치)를 다른 값으로 채우는 메서드는 ', ' 입니다.'], bank: ['fillna', 'dropna', 'replace'], ans: ['fillna'], hint: '채운다(fill) + na 입니다.' }
    ],
    mcq: [
      { q: '데이터프레임에서 결측치(NaN)가 포함된 행을 통째로 삭제하는 메서드는 무엇인가요?', opts: ['dropna()', 'delete_na()', 'remove_null()'], a: 0, hint: '결측치를 버린다(drop)는 의미입니다.' }
    ],
    code: [
      { c: '결측치가 있는 데이터를 확인하고 채우기', i: 'import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"값": [1.0, np.nan, 3.0]})\n# 결측치를 0으로 채워 출력하세요\n', e: '     값\n0  1.0\n1  0.0\n2  3.0', h: 'print(df.fillna(0))' }
    ]
  }
};

const nodesData = [
  { id: 'node_ml_1_1', title: '데이터 분석의 시작 (Pandas)', key: 'data_cleaning' },
  { id: 'node_ml_1_2', title: '구멍난 데이터 메우기 (결측치 처리)', key: 'missing_data' }
];

function generateUnit() {
  const resultNodes = [];
  nodesData.forEach((nodeInfo, index) => {
    const topicData = TOPICS[nodeInfo.key];
    const lessons = [];

    // Lesson 1: Theory
    const lesson1 = [];
    topicData.wb.forEach((q, i) => {
      lesson1.push({
        type: 'quiz_word_bank', content: `[개념 확인 ${i+1}] 다음 빈칸을 채워보세요.`, sentenceParts: q.parts, wordBank: q.bank, answer: q.ans, hint: q.hint
      });
    });
    topicData.mcq.forEach((q, i) => {
      lesson1.push({
        type: 'quiz_multiple_choice', content: `[이론 점검 ${i+1}] ${q.q}`, options: q.opts, answer: q.a, hint: q.hint
      });
    });

    // Lesson 2: Practice
    const lesson2 = [];
    topicData.code.forEach((q, i) => {
      lesson2.push({
        type: 'quiz_code', content: `[실습 ${i+1}] ${q.c}`, initialCode: q.i, expectedOutputs: [q.e], hint: q.h
      });
    });

    resultNodes.push({
      id: nodeInfo.id,
      title: nodeInfo.title,
      description: "머신러닝의 필수 도구인 데이터를 가공하는 능력을 키웁니다.",
      lessons: [lesson1, lesson2]
    });
  });

  return resultNodes;
}

const unitML1 = {
  id: 101,
  title: 'UNIT 1\nPandas와 데이터 분석',
  nodes: generateUnit()
};

const fileContent = `// ==========================================
// 머신러닝 트랙 Tier 1
// ==========================================

export const ml_tier1 = [
  ${JSON.stringify(unitML1, null, 2).replace(/"([^"]+)":/g, (match, p1) => {
    if (/^[a-zA-Z_]\w*$/.test(p1)) return p1 + ':';
    return match;
  })}
];
`;

const outPath = path.join(__dirname, '../src/data/curriculum/ml_tier1.jsx');
fs.writeFileSync(outPath, fileContent, 'utf8');
console.log("Successfully generated ml_tier1.jsx!");
