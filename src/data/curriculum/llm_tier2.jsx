// ==========================================
// LLM 트랙 Tier 2: LangChain과 RAG 구축
// ==========================================

export const llm_tier2 = [
  {
    id: 503,
    title: "UNIT 3\nLangChain 코어 마스터",
    nodes: [
      {
        id: "node_llm_3_1",
        title: "LLM 모델과 프롬프트(Prompt)",
        description: "LangChain을 이용해 LLM 모델(OpenAI 등)을 불러오고, 시스템 프롬프트를 체계적으로 관리하는 법을 배웁니다.",
        guidebook: [
          "LangChain은 여러 LLM과 도구들을 레고 블록처럼 쉽게 조립할 수 있게 해주는 파이썬 프레임워크입니다.",
          "PromptTemplate을 사용하면 사용자의 입력에 맞춰 동적으로 프롬프트를 생성할 수 있습니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[실습] 동적 프롬프트 템플릿 생성하기",
            initialCode: "class PromptTemplate:\n    def __init__(self, template):\n        self.template = template\n    def format(self, **kwargs):\n        return self.template.format(**kwargs)\n\n# 1) {topic}에 대해 설명해줘 라는 템플릿 문장을 만드세요.\ntemplate_string = \n\n# 2) PromptTemplate 객체를 만드세요.\nprompt = PromptTemplate(template_string)\n\n# 3) topic에 'LangChain'을 넣어서 포맷팅하세요.\nresult = \n\nprint(result)",
            expectedOutputs: ["LangChain에 대해 설명해줘"],
            hint: "template_string = '{topic}에 대해 설명해줘'\nresult = prompt.format(topic='LangChain')"
          }
        ]
      },
      {
        id: "node_llm_3_2",
        title: "Output Parser로 형태 맞추기",
        description: "LLM의 텍스트 답변을 우리가 원하는 형태(리스트, 딕셔너리, JSON 등)로 변환해주는 파서(Parser)를 학습합니다.",
        guidebook: [
          "LLM은 기본적으로 긴 '문자열'을 반환합니다. 이를 파이썬 리스트나 딕셔너리로 바로 쓰려면 구조화가 필요합니다.",
          "CommaSeparatedListOutputParser 등을 사용하면 '사과, 바나나, 포도'라는 답변을 ['사과', '바나나', '포도'] 리스트로 변환해줍니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[실습] 콤마로 구분된 응답을 파이썬 리스트로 변환하기",
            initialCode: "class CommaParser:\n    def parse(self, text):\n        # 쉼표(,)를 기준으로 문자를 쪼개고 양쪽 공백을 제거하여 리스트로 반환하세요.\n        return [item.strip() for item in text.split(',')]\n\n# LLM이 반환한 텍스트\nllm_response = \"사과, 바나나, 오렌지\"\n\n# 1) 파서 객체를 만드세요\nparser = \n\n# 2) 파싱을 수행하세요\np_list = \n\nprint(p_list)",
            expectedOutputs: ["['사과', '바나나', '오렌지']"],
            hint: "parser = CommaParser()\np_list = parser.parse(llm_response)"
          }
        ]
      },
      {
        id: "node_llm_3_3",
        title: "LCEL (LangChain Expression Language)",
        description: "프롬프트, 모델, 파서를 하나의 파이프라인(|)으로 엮어 데이터 흐름을 직관적으로 만드는 LCEL 문법을 마스터합니다.",
        guidebook: [
          "파이썬의 비트 연산자 '|'(파이프)를 오버로딩하여, 데이터가 물 흐르듯 전달되는 체인을 만듭니다.",
          "chain = prompt | model | output_parser"
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[개념 확인] LCEL 체인 조립하기",
            initialCode: "class MockComponent:\n    def __init__(self, name):\n        self.name = name\n    def __or__(self, other):\n        return MockComponent(f\"{self.name} -> {other.name}\")\n\nprompt = MockComponent(\"Prompt\")\nmodel = MockComponent(\"LLM\")\nparser = MockComponent(\"Parser\")\n\n# 1) 프롬프트 -> 모델 -> 파서 순서로 파이프(|)를 이용해 체인을 만드세요.\nchain = \n\nprint(chain.name)",
            expectedOutputs: ["Prompt -> LLM -> Parser"],
            hint: "chain = prompt | model | parser"
          }
        ]
      }
    ]
  },
  {
    id: 504,
    title: "UNIT 4\n검색 증강 생성 (RAG) 시스템",
    nodes: [
      {
        id: "node_llm_4_1",
        title: "문서 분할(Split)과 벡터 저장소(VectorDB)",
        description: "회사의 PDF나 문서를 가져와 작게 쪼갠 뒤, 임베딩하여 Vector DB에 저장하는 RAG의 첫 단계를 실습합니다.",
        guidebook: [
          "LLM은 한번에 읽을 수 있는 글자 수(Context Window)가 제한되어 있어, 큰 문서를 의미 단위(Chunk)로 쪼개야 합니다.",
          "쪼개진 문서 조각들은 임베딩 모델을 거쳐 Qdrant, Chroma 같은 Vector DB에 저장됩니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[실습] 문서를 청크(Chunk) 크기로 쪼개기",
            initialCode: "def split_text(text, chunk_size):\n    # 텍스트를 chunk_size 만큼 잘라서 리스트로 반환\n    result = []\n    for i in range(0, len(text), chunk_size):\n        result.append(text[i : i+chunk_size])\n    return result\n\ndocument = \"코딩에그는 누구나 쉽게 코딩을 배울 수 있는 게이미피케이션 플랫폼입니다.\"\n\n# 1) 문서를 10글자씩 쪼개보세요\nchunks = \n\nfor i, chunk in enumerate(chunks):\n    print(f\"청크 {i}: {chunk}\")",
            expectedOutputs: [
              "청크 0: 코딩에그는 누구나 \n청크 1: 쉽게 코딩을 배울 수\n청크 2:  있는 게이미피케이션\n청크 3:  플랫폼입니다."
            ],
            hint: "chunks = split_text(document, 10)"
          }
        ]
      },
      {
        id: "node_llm_4_2",
        title: "Retriever: 관련 정보 검색하기",
        description: "사용자가 질문을 던졌을 때, Vector DB에서 질문과 가장 의미가 유사한 문서 조각을 찾아오는 검색(Retrieval) 과정을 배웁니다.",
        guidebook: [
          "질문 또한 벡터로 임베딩하여, DB에 저장된 조각들과 '코사인 유사도'를 계산해 가장 비슷한 것을 꺼냅니다.",
          "이 과정을 담당하는 객체를 'Retriever'라고 부릅니다."
        ],
        lessons: [
          {
            type: "quiz_choice",
            content: "사용자의 질문과 가장 의미적으로 유사한 문서 조각을 Vector DB에서 찾아 가져오는(검색하는) 역할을 수행하는 모듈의 이름은?",
            options: [
              "Retriever",
              "Generator",
              "Output Parser",
              "Tokenizer"
            ],
            correctIndex: 0,
            hint: "사냥감을 물어오는 개구쟁이 리트리버 강아지를 떠올려보세요!"
          }
        ]
      },
      {
        id: "node_llm_4_3",
        title: "RAG 체인 완성 및 평가",
        description: "검색된 문서를 프롬프트에 끼워 넣어 LLM이 환각(Hallucination) 없이 답변하도록 만드는 RAG 전체 파이프라인을 완성합니다.",
        guidebook: [
          "1. 질문 입력 -> 2. Retriever로 관련 문서 검색 -> 3. 문서와 질문을 프롬프트에 합성 -> 4. LLM이 답변 생성",
          "이를 통해 LLM이 모르는 최신 정보나 회사 내부 문서에 대해서도 정확하게 답변할 수 있게 됩니다."
        ],
        lessons: [
          {
            type: "quiz_code",
            content: "[최종] 미니 RAG 파이프라인 시뮬레이션",
            initialCode: "# RAG 시뮬레이션\ncontext_db = \"코딩에그는 브라우저에서 직접 코딩하며 배우는 플랫폼이다.\"\nuser_question = \"코딩에그가 뭐야?\"\n\n# 1) 프롬프트 템플릿 구성\nprompt = f\"\"\"다음 [참고 자료]를 바탕으로 질문에 답해.\n[참고 자료]: {context_db}\n질문: {user_question}\"\"\"\n\ndef mock_llm(prompt_text):\n    if '코딩에그' in prompt_text and '참고 자료' in prompt_text:\n        return \"참고 자료에 따르면, 코딩에그는 브라우저에서 직접 코딩하며 배우는 플랫폼입니다!\"\n    return \"모르겠습니다.\"\n\n# 2) LLM에 프롬프트를 넣어 답변을 받아오세요\nanswer = \n\nprint(answer)",
            expectedOutputs: ["참고 자료에 따르면, 코딩에그는 브라우저에서 직접 코딩하며 배우는 플랫폼입니다!"],
            hint: "answer = mock_llm(prompt)"
          }
        ]
      }
    ]
  }
];
