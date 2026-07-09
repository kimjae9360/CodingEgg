// ==========================================
// 딥러닝 트랙 Tier 2
// ==========================================

export const dl_tier2 = [
  {
    id: 203,
    title: "UNIT 3\n신경망의 원리와 구조",
    nodes: [
      {
        id: "node_dl_3_1",
        title: "활성화 함수 (Activation Function)",
        description: "신경망이 단순한 선형 계산을 넘어 복잡한 패턴을 학습할 수 있게 해주는 마법의 함수를 배웁니다.",
        guidebook: [
          "선형 회귀(Linear)만 겹겹이 쌓으면 결국 하나의 선형 회귀와 똑같아집니다.",
          "비선형성을 추가하기 위해 층과 층 사이에 활성화 함수를 넣습니다.",
          "ReLU(Rectified Linear Unit): 음수는 0, 양수는 그대로 통과시키는 가장 대표적인 활성화 함수입니다.",
          "Sigmoid: 출력값을 0과 1 사이로 압축하여 이진 분류(맞다/아니다)에 주로 쓰입니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 신경망에 '비선형성(Non-linearity)'을 부여하여 복잡한 곡선을 학습할 수 있도록 도와주는 함수의 총칭은 무엇인가요?",
              options: [
                "손실 함수 (Loss Function)",
                "활성화 함수 (Activation Function)",
                "옵티마이저 (Optimizer)",
                "비용 함수 (Cost Function)"
              ],
              answer: 1,
              hint: "뉴런이 '활성화'될지 말지를 결정하는 함수입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 입력값이 음수이면 무조건 0으로 만들고, 양수이면 그대로 통과시켜 계산 속도가 매우 빠른 현대 딥러닝의 표준 활성화 함수는?",
              options: [
                "Sigmoid",
                "Tanh",
                "ReLU",
                "Softmax"
              ],
              answer: 2,
              hint: "R로 시작하는 세 글자 함수입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] ReLU 활성화 함수 통과시키기",
              initialCode: "import torch\nimport torch.nn as nn\n\n# ReLU 활성화 함수 객체 생성\nrelu = nn.ReLU()\n\n# 테스트용 데이터 텐서\nx = torch.tensor([-2.0, -0.5, 0.0, 1.5, 3.0])\n\n# 1) x를 relu 함수에 통과시킨 결과를 out 변수에 저장하세요\nout = \n\n# 2) 출력\nprint(out)",
              expectedOutputs: [
                "tensor([0.0000, 0.0000, 0.0000, 1.5000, 3.0000])"
              ],
              hint: "out = relu(x) 를 사용하면 음수들이 모두 0이 됩니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_3_2",
        title: "순전파 (Forward Propagation)",
        description: "입력 데이터가 신경망의 여러 층을 차례대로 통과하며 최종 예측값을 만들어내는 과정을 익힙니다.",
        guidebook: [
          "딥러닝은 보통 [Linear -> ReLU -> Linear -> ReLU ...] 와 같이 여러 개의 층(Layer)을 샌드위치처럼 쌓아서 구성합니다.",
          "데이터(x)가 첫 번째 층으로 들어가서 마지막 층에서 예측값(y)으로 나오는 방향을 '순전파'라고 부릅니다.",
          "은닉층(Hidden Layer)이 많을수록 딥러닝(Deep Learning)이라고 부릅니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 입력 데이터가 모델의 여러 층을 거쳐 정방향으로 이동하며 최종 예측값을 도출하는 과정을 무엇이라고 하나요?",
              sentenceParts: [
                "입력에서 출력 방향으로 계산이 진행되는 과정을 ",
                " (Forward Propagation)라고 합니다."
              ],
              wordBank: [
                "순전파",
                "역전파",
                "경사하강법"
              ],
              answer: [
                "순전파"
              ],
              hint: "정방향(순방향)으로 파동이 전해진다는 뜻입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 2층 신경망 수동 연결하기",
              initialCode: "import torch\nimport torch.nn as nn\n\n# 입력(2) -> 은닉층(4) -> 출력(1) 구조\nlayer1 = nn.Linear(2, 4)\nrelu = nn.ReLU()\nlayer2 = nn.Linear(4, 1)\n\nx = torch.tensor([[1.0, 2.0]]) # 입력 데이터\n\n# 1) x를 layer1에 통과시킵니다.\nout1 = layer1(x)\n\n# 2) out1을 relu에 통과시킵니다.\nout2 = \n\n# 3) out2를 layer2에 통과시켜 최종 예측값(pred)을 구합니다.\npred = \n\nprint(pred.shape)",
              expectedOutputs: [
                "torch.Size([1, 1])"
              ],
              hint: "out2 = relu(out1) 후, pred = layer2(out2)를 작성하세요."
            }
          ]
        ]
      },
      {
        id: "node_dl_3_3",
        title: "만능 근사 정리 (UAT)",
        description: "딥러닝이 왜 세상의 모든 복잡한 문제를 풀 수 있는지에 대한 수학적 증명을 가볍게 알아봅니다.",
        guidebook: [
          "Universal Approximation Theorem(만능 근사 정리)이란?",
          "비선형 활성화 함수(예: ReLU)를 포함하고, 충분히 넓거나 깊은 은닉층을 가진 신경망은 '세상에 존재하는 어떠한 복잡한 함수(패턴)라도 원하는 만큼 가깝게 흉내(근사) 낼 수 있다'는 정리입니다.",
          "즉, 뉴런의 개수(파라미터)만 충분하다면 딥러닝은 모든 것을 분류하고 예측할 수 있다는 수학적 근거가 됩니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 충분히 깊고 넓은 신경망은 어떠한 복잡한 함수도 완벽에 가깝게 모방(근사)할 수 있다는 딥러닝의 강력함을 증명하는 수학적 이론은?",
              options: [
                "만능 근사 정리 (Universal Approximation Theorem)",
                "피타고라스의 정리 (Pythagorean theorem)",
                "큰 수의 법칙 (Law of large numbers)",
                "차원의 저주 (Curse of Dimensionality)"
              ],
              answer: 0,
              hint: "만능(Universal)으로 흉내낸다(Approximation)는 의미입니다."
            }
          ]
        ]
      }
    ]
  },
  {
    id: 204,
    title: "UNIT 4\n다층 퍼셉트론 (MLP) 구현",
    nodes: [
      {
        id: "node_dl_4_1",
        title: "nn.Module로 커스텀 모델 만들기",
        description: "레고 블록처럼 층을 쌓기 위해, 파이토치의 모델 기본 뼈대인 nn.Module을 상속받아 나만의 모델 클래스를 만듭니다.",
        guidebook: [
          "class MyModel(nn.Module): 형태로 클래스를 선언합니다.",
          "__init__ 함수: 모델에서 사용할 층(Layer)들을 미리 정의(준비)합니다.",
          "forward(x) 함수: __init__에서 준비한 층들을 사용하여 데이터 x가 통과하는 길(순전파)을 정의합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[실습 1] 나만의 딥러닝 모델 클래스 작성",
              initialCode: "import torch\nimport torch.nn as nn\n\n# nn.Module을 상속받는 MyModel 클래스 정의\nclass MyModel(nn.Module):\n    def __init__(self):\n        super(MyModel, self).__init__()\n        # 층 준비하기 (입력 10 -> 은닉 5)\n        self.fc1 = nn.Linear(10, 5)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(5, 2) # 은닉 5 -> 출력 2\n\n    def forward(self, x):\n        # 1) x를 fc1에 통과시킨다\n        \n        # 2) 결과를 relu에 통과시킨다\n        \n        # 3) 결과를 fc2에 통과시켜 반환(return)한다\n        \n\n# 모델 인스턴스 생성 및 테스트\nmodel = MyModel()\nx = torch.randn(1, 10)\nprint(model(x).shape)",
              expectedOutputs: [
                "torch.Size([1, 2])"
              ],
              hint: "x = self.fc1(x)\nx = self.relu(x)\nreturn self.fc2(x) 를 작성합니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_4_2",
        title: "다중 분류 모델과 Loss",
        description: "강아지, 고양이, 새 중에서 하나를 고르는 다중 분류(Multi-class) 모델의 끝단 구조를 배웁니다.",
        guidebook: [
          "다중 분류를 할 때는 마지막 층의 출력 개수(출력 노드 수)를 클래스의 개수와 똑같이 맞춰야 합니다. (예: 클래스가 3개면 nn.Linear(?, 3))",
          "손실 함수로는 nn.CrossEntropyLoss() 를 사용합니다.",
          "주의: 파이토치의 CrossEntropyLoss는 내부에 Softmax 계산을 이미 포함하고 있으므로, 모델 마지막 층에 Softmax를 추가하지 않아도 됩니다!"
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 강아지, 고양이, 새, 토끼 총 4개의 동물 중 하나를 맞추는 딥러닝 모델을 설계할 때, 가장 마지막 Linear 층의 출력 크기(아웃풋 개수)는 몇 개여야 할까요?",
              options: [
                "1개",
                "2개",
                "4개",
                "10개"
              ],
              answer: 2,
              hint: "정답의 카테고리 개수와 동일하게 설정합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 파이토치에서 위와 같은 다중 분류 문제를 학습할 때 주로 사용하는 손실 함수는 무엇인가요?",
              options: [
                "nn.MSELoss()",
                "nn.CrossEntropyLoss()",
                "nn.BCELoss()",
                "nn.L1Loss()"
              ],
              answer: 1,
              hint: "교차 엔트로피(Cross Entropy) 오차입니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_4_3",
        title: "다층 퍼셉트론 (MLP) 마스터 보스전",
        description: "지금까지 배운 모든 지식을 총동원하여 3개의 층(은닉층 2개)을 가진 딥러닝 모델 클래스를 직접 완성하세요.",
        guidebook: [
          "입력 데이터의 특징이 30개이고, 최종적으로 3개의 클래스를 분류하는 다층 퍼셉트론(MLP)입니다.",
          "층의 크기는 30 -> 64 -> 32 -> 3 으로 점점 줄어듭니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[보스전] MLP 모델 설계",
              initialCode: "import torch\nimport torch.nn as nn\n\nclass MLP(nn.Module):\n    def __init__(self):\n        super(MLP, self).__init__()\n        # 1) 30개를 입력받아 64개로 출력하는 layer1 선언\n        \n        # 2) 64개를 입력받아 32개로 출력하는 layer2 선언\n        \n        # 3) 32개를 입력받아 3개로 출력하는 layer3 선언\n        \n        self.relu = nn.ReLU()\n\n    def forward(self, x):\n        # x -> layer1 -> relu -> layer2 -> relu -> layer3 순으로 통과시켜 결과를 반환하세요\n        \n\nmodel = MLP()\nprint(model(torch.randn(5, 30)).shape) # 데이터 5개, 특징 30개 테스트",
              expectedOutputs: [
                "torch.Size([5, 3])"
              ],
              hint: "self.layer1 = nn.Linear(30, 64) 처럼 선언하고, forward에서는 x = self.relu(self.layer1(x)) 식으로 감싸며 내려갑니다."
            }
          ]
        ]
      }
    ]
  }
];
