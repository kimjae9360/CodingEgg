// ==========================================
// 딥러닝 트랙 Tier 1
// ==========================================

export const dl_tier1 = [
  {
    id: 201,
    title: "UNIT 1\n딥러닝 개요와 Tensor",
    nodes: [
      {
        id: "node_dl_1_1",
        title: "딥러닝 개요",
        description: "인공지능, 머신러닝, 그리고 딥러닝의 관계를 이해하고 파이토치(PyTorch)의 기본 개념을 배웁니다.",
        guidebook: [
          "인공지능(AI) > 머신러닝(ML) > 딥러닝(DL) 순으로 범위가 좁아집니다.",
          "딥러닝은 인간의 뇌 신경망 구조를 모방한 인공신경망(Artificial Neural Network)을 기반으로 합니다.",
          "파이토치(PyTorch)는 페이스북(Meta)에서 개발한 강력하고 직관적인 딥러닝 프레임워크입니다.",
          "텐서(Tensor)는 파이토치에서 데이터를 다루는 다차원 배열을 뜻하며, Numpy의 ndarray와 매우 유사합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 다음 중 인간의 뇌신경 세포(뉴런) 구조를 수학적으로 모방하여 학습하는 머신러닝의 한 분야를 무엇이라고 부르나요?",
              options: [
                "강화학습 (Reinforcement Learning)",
                "딥러닝 (Deep Learning)",
                "데이터 전처리 (Data Preprocessing)",
                "선형 회귀 (Linear Regression)"
              ],
              answer: 1,
              hint: "깊게(Deep) 층을 쌓아 학습한다는 뜻입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 파이토치(PyTorch)에서 스칼라, 벡터, 행렬 등 모든 다차원 데이터를 담는 핵심 자료구조의 이름은 무엇인가요?",
              sentenceParts: [
                "파이토치의 다차원 배열이자 핵심 자료형을 ",
                " (이)라고 부릅니다."
              ],
              wordBank: [
                "Tensor",
                "DataFrame",
                "Series"
              ],
              answer: [
                "Tensor"
              ],
              hint: "Numpy에는 ndarray가 있다면 PyTorch에는 이것이 있습니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_1_2",
        title: "Tensor 생성하기",
        description: "파이토치의 핵심인 텐서(Tensor)를 다양한 방법으로 생성하고 초기화하는 방법을 익힙니다.",
        guidebook: [
          "import torch 를 사용하여 파이토치를 불러옵니다.",
          "torch.tensor(): 파이썬 리스트나 Numpy 배열을 텐서로 변환합니다.",
          "torch.zeros(), torch.ones(): 0 또는 1로 가득 찬 텐서를 만듭니다.",
          "torch.arange(): 특정 범위의 연속된 숫자로 이루어진 텐서를 만듭니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[실습 1] 기본 텐서 생성하기",
              initialCode: "import torch\n\n# 파이썬 리스트 [1.5, 2.0, 3.5]를 텐서로 변환하세요\ndata = [1.5, 2.0, 3.5]\nt = \n\n# 텐서 t를 출력하세요\nprint(t)",
              expectedOutputs: [
                "tensor([1.5000, 2.0000, 3.5000])"
              ],
              hint: "t = torch.tensor(data) 를 사용합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 2] 연속된 숫자 텐서",
              initialCode: "import torch\n\n# 0부터 4까지(5 미만)의 정수를 갖는 텐서를 생성하세요\n# Numpy의 np.arange()와 문법이 동일합니다!\nt = \nprint(t)",
              expectedOutputs: [
                "tensor([0, 1, 2, 3, 4])"
              ],
              hint: "t = torch.arange(5) 를 사용합니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_1_3",
        title: "Tensor 형태 변환 (view, reshape)",
        description: "데이터를 모델에 알맞게 집어넣기 위해 텐서의 차원(Shape)을 자유자재로 바꾸는 스킬을 배웁니다.",
        guidebook: [
          "딥러닝 모델에 이미지를 넣으려면 2차원 표 형태를 1차원으로 쭉 펴거나 변형해야 할 때가 많습니다.",
          "view(): 텐서의 요소를 유지한 채 모양(Shape)만 바꿉니다. (원본과 메모리를 공유함)",
          "reshape(): view()와 비슷하지만, 필요할 경우 메모리에 새로운 복사본을 만들어 변형합니다.",
          "-1을 사용하면 '나머지 차원을 컴퓨터가 알아서 계산'해 줍니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 요소가 12개인 1차원 텐서를 3행 4열(3x4)의 2차원 텐서로 모양만 바꾸고 싶을 때 사용하는 파이토치 함수는?",
              options: [
                "t.split(3, 4)",
                "t.resize(3, 4)",
                "t.view(3, 4) 또는 t.reshape(3, 4)",
                "t.convert(3, 4)"
              ],
              answer: 2,
              hint: "보이는 형태(view)를 바꾸거나 다시 형태를 잡는다(reshape)는 의미입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] view를 이용한 형태 변환",
              initialCode: "import torch\n\n# 1차원 텐서 [0, 1, 2, 3, 4, 5]\nt = torch.arange(6)\n\n# t를 2행 3열(2x3)의 2차원 텐서로 변환하세요\nt_2d = \nprint(t_2d.shape)",
              expectedOutputs: [
                "torch.Size([2, 3])"
              ],
              hint: "t.view(2, 3) 을 호출합니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 2] 마법의 -1 사용하기",
              initialCode: "import torch\n\nt = torch.arange(12)  # 길이가 12\n\n# 열(Column)은 무조건 4열로 맞추고, 행(Row)은 파이토치가 알아서 계산하도록 -1을 넘겨주세요.\nnew_t = \n\n# 자동으로 3행 4열이 완성됩니다.\nprint(new_t.shape)",
              expectedOutputs: [
                "torch.Size([3, 4])"
              ],
              hint: "t.view(-1, 4) 처럼 행 자리에 -1을 넣으면 12 / 4 = 3행으로 자동 계산됩니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_1_4",
        title: "Tensor 차원 조작 (unsqueeze, squeeze)",
        description: "의미 없는 1차원을 추가하거나 제거하여 데이터의 차원을 조절합니다.",
        guidebook: [
          "unsqueeze(dim): 지정한 위치(dim)에 크기가 1인 차원을 추가합니다. (예: 1차원 -> 2차원)",
          "squeeze(): 크기가 1인 차원을 모두 삭제하여 차원을 축소합니다. (예: [[1,2,3]] -> [1,2,3])",
          "딥러닝은 여러 개의 데이터를 한꺼번에 묶어서(배치, Batch) 처리하므로 차원 맨 앞에 배치 차원을 추가할 때 자주 쓰입니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 크기가 (3,) 인 1차원 벡터를 크기가 (1, 3) 인 2차원 행렬로 만들기 위해 강제로 1차원을 끼워넣는(추가하는) 함수는?",
              options: [
                "unsqueeze()",
                "squeeze()",
                "expand()",
                "append()"
              ],
              answer: 0,
              hint: "쥐어짜서(squeeze) 차원을 없애는 것의 반대 행동(un-)입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] unsqueeze로 차원 늘리기",
              initialCode: "import torch\n\nt = torch.tensor([1, 2, 3])\nprint(\"원본 모양:\", t.shape) # torch.Size([3])\n\n# 첫 번째 위치(dim=0)에 차원을 추가하세요\nt_un = \nprint(\"변환 모양:\", t_un.shape)",
              expectedOutputs: [
                "원본 모양: torch.Size([3])\n변환 모양: torch.Size([1, 3])"
              ],
              hint: "t.unsqueeze(dim=0) 또는 t.unsqueeze(0) 을 사용합니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_1_5",
        title: "Tensor 마스터 보스전",
        description: "지금까지 배운 파이토치 텐서 생성과 조작을 총동원하여 미션을 해결하세요.",
        guidebook: [
          "차원(Shape)을 확인하고 다루는 것은 딥러닝 엔지니어의 핵심 덕목입니다.",
          "텐서가 모델을 통과할 때 모양이 안 맞아서 나는 에러(Shape Mismatch)가 실무에서 제일 많습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[보스전] 복합 텐서 조작",
              initialCode: "import torch\n\n# 1) 1부터 8까지의 정수를 갖는 1차원 텐서를 만드세요 (힌트: arange)\nt1 = \n\n# 2) t1을 2행 4열(2x4)로 형태를 변환하세요\nt2 = \n\n# 3) t2의 가장 첫 번째 차원(dim=0)에 껍데기 차원을 하나 추가하여 (1, 2, 4) 모양으로 만드세요\nt3 = \n\nprint(t3.shape)",
              expectedOutputs: [
                "torch.Size([1, 2, 4])"
              ],
              hint: "t1 = torch.arange(1, 9)\nt2 = t1.view(2, 4)\nt3 = t2.unsqueeze(0)"
            }
          ]
        ]
      }
    ]
  },
  {
    id: 202,
    title: "UNIT 2\n파이토치 첫걸음과 데이터",
    nodes: [
      {
        id: "node_dl_2_1",
        title: "선형 회귀 (Linear Regression)",
        description: "파이토치의 nn 모듈을 사용하여 데이터를 가장 잘 나타내는 최적의 직선을 그려봅니다.",
        guidebook: [
          "nn.Linear(입력크기, 출력크기): 파이토치에서 가중치(w)와 편향(b)을 가지고 선형 변환(y = wx + b)을 수행하는 기본 계층입니다.",
          "PyTorch의 모든 인공신경망은 `nn.Module`을 상속받아서 만들어집니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 입력 데이터(x)에 가중치(w)를 곱하고 편향(b)을 더하는 선형 연산(Linear Transform) 계층을 선언할 때 사용하는 클래스는?",
              sentenceParts: [
                "선형 회귀 계층을 선언할 때는 파이토치의 nn.",
                "() 클래스를 사용합니다."
              ],
              wordBank: [
                "Linear",
                "Sigmoid",
                "ReLU"
              ],
              answer: [
                "Linear"
              ],
              hint: "직선(Linear)을 긋는다는 의미입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 선형 계층 선언하기",
              initialCode: "import torch\nimport torch.nn as nn\n\n# 1개의 특징(feature)을 입력받아 1개의 결과를 출력하는 선형 계층을 만드세요\n# 예: 입력 크기 1, 출력 크기 1\nlinear = \n\n# 가상의 데이터 x (배치 크기 3, 특징 1)\nx = torch.tensor([[1.0], [2.0], [3.0]])\n\n# 선형 계층을 통과시켜 결과를 확인합니다\nout = linear(x)\nprint(out.shape)",
              expectedOutputs: [
                "torch.Size([3, 1])"
              ],
              hint: "linear = nn.Linear(1, 1) 로 선언합니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_2_2",
        title: "손실 함수와 옵티마이저",
        description: "모델이 얼마나 틀렸는지(오차)를 계산하고, 그 오차를 바탕으로 가중치를 업데이트(학습)하는 방법을 배웁니다.",
        guidebook: [
          "Loss Function (손실 함수): 정답과 예측값의 차이를 계산합니다. 회귀에서는 보통 MSE(평균제곱오차)를 사용합니다. (nn.MSELoss)",
          "Optimizer (옵티마이저): 계산된 손실을 바탕으로 경사하강법을 적용하여 모델의 가중치를 업데이트합니다.",
          "대표적인 옵티마이저는 SGD(확률적 경사하강법), Adam 등이 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 모델이 예측한 값과 실제 정답 사이의 오차를 계산하기 위해 회귀 분석에서 주로 사용하는 파이토치의 손실 함수는?",
              options: [
                "nn.MSELoss()",
                "nn.CrossEntropyLoss()",
                "nn.BCELoss()",
                "nn.Linear()"
              ],
              answer: 0,
              hint: "Mean Squared Error의 약자입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 손실(오차)을 최소화하기 위해 모델의 가중치를 업데이트해주는 역할을 하는 클래스는 무엇인가요?",
              options: [
                "Loss Function",
                "Optimizer (옵티마이저)",
                "Dataset",
                "Tensor"
              ],
              answer: 1,
              hint: "최적화(Optimize)를 수행하는 도구입니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_2_3",
        title: "Dataset과 DataLoader",
        description: "수만 장의 이미지나 데이터를 한꺼번에 올리면 메모리가 터집니다. 데이터를 효율적으로 묶어서 공급하는 방법을 배웁니다.",
        guidebook: [
          "Dataset: 데이터 전체의 길이(len)와 특정 인덱스의 데이터 1개를 가져오는 방법(getitem)을 정의한 클래스입니다.",
          "DataLoader: Dataset에서 데이터를 미니 배치(Mini-batch) 단위로 묶어서(예: 32개씩) 모델에 공급해주는 데이터 셔틀버스 역할을 합니다.",
          "Epoch(에폭): 전체 데이터셋을 한 번 다 학습하는 것을 1에폭이라고 합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 다음 중 모델에게 데이터를 일정한 묶음(배치 크기) 단위로 쪼개어 전달하고 섞어주는(Shuffle) 역할을 하는 클래스는?",
              sentenceParts: [
                "미니 배치를 생성하여 효율적으로 데이터를 로딩하는 파이토치의 핵심 클래스는 ",
                " 입니다."
              ],
              wordBank: [
                "DataLoader",
                "TensorDataset",
                "Optimizer"
              ],
              answer: [
                "DataLoader"
              ],
              hint: "데이터를 모델에 싣고(Load) 나르는 역할을 합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 수많은 데이터를 쪼개서 학습할 때, 전체 데이터셋을 한 바퀴 모두 학습하는 것을 세는 단위는?",
              options: [
                "Batch (배치)",
                "Iteration (이터레이션)",
                "Epoch (에폭)",
                "Step (스텝)"
              ],
              answer: 2,
              hint: "하나의 거대한 주기(시대)를 뜻하는 단어입니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_2_4",
        title: "파이토치 딥러닝 보스전",
        description: "TensorDataset과 DataLoader를 사용하여 학습용 데이터 공급 파이프라인을 완성하세요.",
        guidebook: [
          "torch.utils.data.TensorDataset을 사용하면 텐서들을 간단하게 Dataset으로 묶을 수 있습니다.",
          "이후 DataLoader를 거치면 배치(Batch) 크기만큼씩 잘라낼 수 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[보스전] 미니 배치 만들기",
              initialCode: "import torch\nfrom torch.utils.data import TensorDataset, DataLoader\n\n# 총 10개의 가상 데이터\nX = torch.arange(10).view(-1, 1).float()\ny = torch.arange(10).float()\n\n# 1) X와 y를 묶어서 TensorDataset을 만드세요\ndataset = \n\n# 2) DataLoader를 만들어, 한 번에 4개씩(batch_size=4) 데이터를 가져오게 설정하세요\nloader = \n\n# loader에서 첫 번째 배치 1개만 뽑아서 길이를 확인합니다\nfor batch_x, batch_y in loader:\n    print(len(batch_x))\n    break",
              expectedOutputs: [
                "4"
              ],
              hint: "dataset = TensorDataset(X, y)\nloader = DataLoader(dataset, batch_size=4)"
            }
          ]
        ]
      }
    ]
  }
];
