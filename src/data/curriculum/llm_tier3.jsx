// ==========================================
// LLM 트랙 Tier 3: AI Agent 실전
// ==========================================

export const llm_tier3 = [
  {
    id: 505,
    title: "UNIT 5\nAI 에이전트와 Tool Calling",
    nodes: [
      {
        id: "node_llm_5_1",
        title: "스스로 생각하는 AI, 에이전트(Agent)",
        description: "단순히 묻는 말에 답만 하는 LLM을 넘어, 스스로 목표를 세우고 행동을 결정하는 Agent의 개념을 배웁니다.",
        guidebook: [
          "에이전트는 LLM을 '두뇌'로 사용하여, 주어진 문제를 해결하기 위해 어떤 도구(Tool)를 쓸지 스스로 판단합니다.",
          "프롬프트에 '너는 계산기가 있으니 수학 문제는 계산기를 써라'라고 알려주는 것이 시작입니다."
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "단순히 텍스트를 생성하는 것을 넘어, LLM을 '두뇌'로 사용하여 스스로 계획을 세우고 도구를 사용해 문제를 해결하는 주체를 무엇이라고 부르나요?",
            options: [
              "에이전트 (Agent)",
              "데이터베이스 (Database)",
              "프롬프트 (Prompt)",
              "파서 (Parser)"
            ],
            correctIndex: 0,
            hint: "마치 스스로 임무를 수행하는 요원(Agent)과 같습니다."
          }
        ]
      },
      {
        id: "node_llm_5_2",
        title: "도구 사용 (Tool Calling)",
        description: "에이전트에게 웹 검색, 계산기, 날씨 API 등의 도구(Tool)를 쥐어주는 방법을 학습합니다.",
        guidebook: [
          "최신 LLM(GPT-4 등)은 함수의 이름과 매개변수를 알려주면, '아, 지금은 이 함수를 실행해야겠군!' 하고 함수 호출에 필요한 인자(Arguments)를 JSON 형태로 반환하는 기능(Function Calling)을 갖추고 있습니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[개념 확인] 도구를 선택하는 에이전트의 사고방식",
            initialCode: "def get_weather(city):\n    return f\"{city}의 날씨는 맑음입니다.\"\n\ndef calculate(expression):\n    return eval(expression)\n\n# LLM이 도구를 선택했다고 가정하는 함수\ndef agent_brain(user_input):\n    if \"날씨\" in user_input:\n        return get_weather(\"서울\")\n    elif \"계산\" in user_input or \"+\" in user_input:\n        return calculate(\"3+5\")\n    return \"그건 제가 할 수 없는 일입니다.\"\n\n# 1) \"오늘 서울 날씨 어때?\" 라고 물어보세요.\nres1 = \n\n# 2) \"3 + 5 계산해줘\" 라고 물어보세요.\nres2 = \n\nprint(res1)\nprint(res2)",
            expectedOutputs: [
              "서울의 날씨는 맑음입니다.\n8"
            ],
            hint: "res1 = agent_brain('오늘 서울 날씨 어때?')\nres2 = agent_brain('3 + 5 계산해줘')"
          }
        ]
      },
      {
        id: "node_llm_5_3",
        title: "LangGraph 기초",
        description: "LangChain 생태계에서 복잡한 에이전트의 작업 흐름을 노드(Node)와 엣지(Edge)로 구성된 그래프 형태로 제어하는 LangGraph를 배웁니다.",
        guidebook: [
          "에이전트가 무한 루프에 빠지지 않도록, 상태(State)를 추적하고 조건에 따라 분기(Conditional Edge)를 만드는 프레임워크입니다.",
          "현재 가장 실무에서 많이 쓰이는 에이전트 구축 표준 도구입니다."
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "에이전트의 작업 흐름을 노드(Node)와 간선(Edge)으로 이루어진 상태 머신(State Machine) 그래프 형태로 제어하여, 복잡한 에이전트 로직을 쉽게 구현하게 해주는 LangChain 생태계의 도구는?",
            options: [
              "LangGraph",
              "LangSmith",
              "Streamlit",
              "HuggingFace"
            ],
            correctIndex: 0,
            hint: "이름에 '그래프(Graph)'가 들어갑니다."
          }
        ]
      }
    ]
  },
  {
    id: 506,
    title: "UNIT 6\n최종 보스: 나만의 AI 비서",
    nodes: [
      {
        id: "node_llm_6_1",
        title: "기억력(Memory) 장착하기",
        description: "에이전트가 사용자와의 이전 대화 내용을 기억(Memory)하여 맥락이 끊기지 않고 자연스럽게 대화하도록 만듭니다.",
        guidebook: [
          "LLM은 기본적으로 '상태가 없는(Stateless)' 모델입니다. 방금 한 말을 기억하지 못합니다.",
          "따라서 대화 기록(Chat History)을 배열에 차곡차곡 저장했다가, 새로운 질문을 할 때 프롬프트에 함께 넣어주어야 합니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[실습] 대화 기록(Memory) 관리하기",
            initialCode: "class Memory:\n    def __init__(self):\n        self.history = []\n    def add_user_message(self, text):\n        self.history.append({'role': 'user', 'content': text})\n    def add_ai_message(self, text):\n        self.history.append({'role': 'assistant', 'content': text})\n\nmemory = Memory()\n\n# 1) 유저가 \"안녕! 내 이름은 에그야\" 라고 말했습니다. 기록에 추가하세요.\n\n\n# 2) AI가 \"반가워요 에그님!\" 이라고 대답했습니다. 기록에 추가하세요.\n\n\nprint(memory.history)",
            expectedOutputs: [
              "[{'role': 'user', 'content': '안녕! 내 이름은 에그야'}, {'role': 'assistant', 'content': '반가워요 에그님!'}]"
            ],
            hint: "memory.add_user_message('안녕! 내 이름은 에그야')\nmemory.add_ai_message('반가워요 에그님!')"
          }
        ]
      },
      {
        id: "node_llm_6_2",
        title: "🔥 AI 에이전트 최종 보스전",
        description: "Memory, Tool Calling, LLM 등 지금까지 배운 모든 지식을 총동원하여, 검색과 계산을 스스로 수행하며 기억력까지 갖춘 완벽한 AI 비서를 완성합니다.",
        guidebook: [
          "자연어처리 트랙의 대단원입니다.",
          "이 구조를 마스터하면, 사내 데이터를 뒤지는 비서봇, 메일을 자동 요약해주는 봇 등 원하는 것은 무엇이든 만들 수 있습니다!"
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "사용자의 질문을 받아 (1)이전 대화를 기억하고, (2)스스로 생각하여 웹 검색 도구를 사용할지 결정한 뒤, (3)검색 결과를 읽고 최종 답변을 생성하는 이 똑똑한 프로그램을 통틀어 무엇이라고 부르나요?",
            options: [
              "AI 에이전트 (AI Agent)",
              "데이터 수집기 (Crawler)",
              "임베딩 벡터 (Embedding Vector)",
              "트랜스포머 (Transformer)"
            ],
            correctIndex: 0,
            hint: "우리가 최종적으로 도달한 목표입니다!"
          }
        ]
      }
    ]
  }
];
