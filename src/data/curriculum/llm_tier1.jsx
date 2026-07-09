// ==========================================
// LLM 트랙 Tier 1: NLP & Transformer 기초
// ==========================================

export const llm_tier1 = [
  {
    id: 501,
    title: "UNIT 1\n텍스트 전처리와 언어 모델",
    nodes: [
      {
        id: "node_llm_1_1",
        title: "컴퓨터가 언어를 이해하는 방법",
        description: "자연어 처리(NLP)의 기본 개념과, 문장을 토큰 단위로 쪼개는 토큰화(Tokenization)를 배웁니다.",
        guidebook: [
          "컴퓨터는 텍스트를 있는 그대로 이해할 수 없으므로, 의미를 가진 가장 작은 단위인 '토큰(Token)'으로 쪼개야 합니다.",
          "단어 단위, 형태소 단위, Subword 단위 등 다양한 토큰화 기법이 있으며, 최근 LLM은 주로 Subword 방식(BPE 등)을 사용합니다."
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "문장을 의미 있는 작은 단위로 쪼개는 과정을 무엇이라고 할까요?",
            options: [
              "토큰화 (Tokenization)",
              "임베딩 (Embedding)",
              "정규화 (Normalization)",
              "전파 (Propagation)"
            ],
            correctIndex: 0,
            hint: "텍스트를 쪼개어 만든 조각을 '토큰'이라고 부릅니다."
          }
        ]
      },
      {
        id: "node_llm_1_2",
        title: "단어를 숫자로: 임베딩(Embedding)",
        description: "토큰화된 텍스트를 컴퓨터가 계산할 수 있는 숫자 벡터(Vector)로 변환하는 방법을 이해합니다.",
        guidebook: [
          "Count 기반 방식: 특정 단어가 몇 번 등장했는지 단순 횟수만 세는 방식 (TF-IDF 등)",
          "임베딩(Word Embedding): 단어의 의미적 유사성을 다차원 공간에 좌표(벡터)로 매핑하는 방식 (Word2Vec 등)",
          "'왕' - '남자' + '여자' = '여왕' 이 성립하게 되는 마법이 바로 임베딩 덕분입니다."
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "단어의 의미적 유사성을 벡터 공간에 투영하여, 단어 간의 연산(왕-남자+여자=여왕)을 가능하게 하는 기술은?",
            options: [
              "워드 임베딩 (Word Embedding)",
              "Bag of Words",
              "원-핫 인코딩 (One-hot Encoding)",
              "TF-IDF"
            ],
            correctIndex: 0,
            hint: "단어를 빽빽한(Dense) 벡터로 '임베딩'한다고 표현합니다."
          }
        ]
      },
      {
        id: "node_llm_1_3",
        title: "RNN과 감성 분석",
        description: "순차적인 텍스트 데이터를 처리하는 RNN(순환 신경망)의 기본 원리를 알아봅니다.",
        guidebook: [
          "RNN(Recurrent Neural Network)은 '기억력'을 가진 신경망으로, 이전에 입력된 단어의 정보를 다음 단어를 해석할 때 사용합니다.",
          "문장의 긍정/부정을 판단하는 '감성 분석(Sentiment Analysis)'에 널리 사용됩니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[개념 확인] 순서가 있는 데이터를 다루는 신경망",
            initialCode: "class SimpleNetwork:\n    # 1. 이미지가 들어오면 특징을 잡아내는 데 특화된 모델\n    model_A = 'CNN'\n    \n    # 2. 시간에 따라 들어오는 단어(순서)를 기억하는 모델\n    model_B = '???'\n\nprint(SimpleNetwork.model_B)",
            expectedOutputs: ["RNN"],
            hint: "Recurrent Neural Network의 약자를 입력하세요."
          }
        ]
      }
    ]
  },
  {
    id: 502,
    title: "UNIT 2\n트랜스포머와 허깅페이스",
    nodes: [
      {
        id: "node_llm_2_1",
        title: "어텐션(Attention) 매커니즘",
        description: "긴 문장에서 '어떤 단어에 집중(Attention)해야 하는지'를 신경망이 스스로 학습하는 원리를 배웁니다.",
        guidebook: [
          "RNN의 한계(긴 문장을 만나면 앞부분을 까먹음)를 극복하기 위해 등장한 혁명적인 기술입니다.",
          "문맥을 파악할 때 중요한 단어에 더 높은 가중치를 주어 해석의 정확도를 비약적으로 높입니다."
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "긴 문장을 번역할 때, 문장의 앞부분 정보가 소실되는 문제를 해결하기 위해 '중요한 단어에 집중'하도록 만든 기술은?",
            options: [
              "어텐션 (Attention)",
              "드롭아웃 (Dropout)",
              "활성화 함수 (Activation Function)",
              "역전파 (Backpropagation)"
            ],
            correctIndex: 0,
            hint: "영어 단어 뜻 그대로 '집중(주목)'이라는 뜻을 가집니다."
          }
        ]
      },
      {
        id: "node_llm_2_2",
        title: "Transformer의 등장",
        description: "RNN을 완전히 대체하고 ChatGPT 등 모든 현대 LLM의 근간이 된 트랜스포머 아키텍처를 소개합니다.",
        guidebook: [
          "2017년 구글의 논문 'Attention Is All You Need'에서 발표되었습니다.",
          "순차적으로 처리하던 방식을 버리고, 문장 전체를 한 번에(병렬로) 처리하며 오직 Self-Attention 매커니즘만 사용합니다."
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "현대 대형 언어 모델(LLM)의 핵심 근간 아키텍처이자, 'Attention Is All You Need' 논문에서 발표된 모델은?",
            options: [
              "트랜스포머 (Transformer)",
              "퍼셉트론 (Perceptron)",
              "합성곱 신경망 (CNN)",
              "순환 신경망 (RNN)"
            ],
            correctIndex: 0,
            hint: "로봇이 변신하는 유명한 영화 제목과 같습니다."
          }
        ]
      },
      {
        id: "node_llm_2_3",
        title: "허깅페이스(HuggingFace) 파이프라인",
        description: "전 세계 최대의 AI 모델 저장소인 허깅페이스를 활용해 단 세 줄의 코드로 모델을 불러오는 법을 실습합니다.",
        guidebook: [
          "HuggingFace는 AI계의 깃허브(GitHub)로 불립니다.",
          "pipeline() 함수를 사용하면 복잡한 모델 로딩 없이 감성분석, 텍스트 요약 등을 바로 실행할 수 있습니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[실습] HuggingFace 감성 분석 파이프라인 만들기",
            initialCode: "class MockPipeline:\n    def __init__(self, task):\n        self.task = task\n    def __call__(self, text):\n        if 'love' in text.lower():\n            return [{'label': 'POSITIVE', 'score': 0.99}]\n        return [{'label': 'NEGATIVE', 'score': 0.95}]\n\ndef pipeline(task):\n    return MockPipeline(task)\n\n# 1) 'sentiment-analysis' 파이프라인을 생성하세요.\nclassifier = \n\n# 2) 'I love this movie!' 라는 문장을 분석해보세요.\nresult = \n\nprint(result)",
            expectedOutputs: ["[{'label': 'POSITIVE', 'score': 0.99}]"],
            hint: "classifier = pipeline('sentiment-analysis')\nresult = classifier('I love this movie!')"
          }
        ]
      }
    ]
  }
];
