// ==========================================
// 딥러닝 트랙 Tier 3
// ==========================================

export const dl_tier3 = [
  {
    id: 205,
    title: "UNIT 5\n모델 저장 및 평가",
    nodes: [
      {
        id: "node_dl_5_1",
        title: "모델 저장과 불러오기",
        description: "열심히 학습시킨 모델이 컴퓨터를 끄면 사라지지 않도록 파일(.pth)로 저장하고 다시 불러오는 방법을 배웁니다.",
        guidebook: [
          "딥러닝 모델의 학습 결과는 결국 '가중치(Weight)'와 '편향(Bias)' 숫자들의 모음입니다.",
          "model.state_dict()는 모델이 가진 모든 가중치 정보를 딕셔너리 형태로 반환합니다.",
          "저장: torch.save(model.state_dict(), '파일이름.pth')",
          "불러오기: model.load_state_dict(torch.load('파일이름.pth'))"
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 파이토치 모델이 학습한 '가중치와 편향' 정보만을 깔끔하게 딕셔너리 형태로 뽑아낼 때 사용하는 메서드는 무엇인가요?",
              options: [
                "model.get_weights()",
                "model.parameters()",
                "model.state_dict()",
                "model.save_all()"
              ],
              answer: 2,
              hint: "상태(State)를 딕셔너리(Dict) 형태로 반환합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 모델 가중치 저장하기",
              initialCode: "import torch\nimport torch.nn as nn\nimport os\n\n# 임의의 모델 생성\nmodel = nn.Linear(10, 2)\n\n# 1) model의 state_dict()를 'my_model.pth'라는 이름의 파일로 저장하세요\n\n\n# 파일이 잘 저장되었는지 확인합니다\nif os.path.exists('my_model.pth'):\n    print(\"모델 저장 성공!\")",
              expectedOutputs: [
                "모델 저장 성공!"
              ],
              hint: "torch.save(model.state_dict(), 'my_model.pth') 를 호출합니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_5_2",
        title: "평가 모드 (eval & no_grad)",
        description: "모델 학습이 끝난 후, 실전 테스트(추론)를 할 때 반드시 켜야 하는 필수 옵션 두 가지를 알아봅니다.",
        guidebook: [
          "model.eval(): 모델을 '평가(실전) 모드'로 전환합니다. (학습할 때만 쓰이는 Dropout 등이 비활성화됨)",
          "with torch.no_grad():: 그래디언트(기울기) 계산을 멈춰 메모리 사용량을 확 줄이고 속도를 높입니다.",
          "이 두 가지는 실무에서 테스트 데이터를 모델에 넣기 직전에 항상 세트로 사용됩니다!"
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 모델을 실전 평가(Test) 모드로 전환하여, 학습 시에만 사용하는 기능(예: Dropout)을 끄게 만드는 파이토치 함수는?",
              sentenceParts: [
                "테스트 데이터를 넣기 전에는 반드시 model.",
                "() 함수를 호출해야 합니다."
              ],
              wordBank: [
                "eval",
                "train",
                "test"
              ],
              answer: [
                "eval"
              ],
              hint: "Evaluate(평가하다)의 앞글자입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 기울기 계산을 멈춰 메모리 낭비를 막고 속도를 올려주는 파이토치의 파이썬 컨텍스트 매니저(with문)는?",
              options: [
                "with torch.no_memory():",
                "with torch.no_grad():",
                "with torch.eval():",
                "with torch.stop():"
              ],
              answer: 1,
              hint: "그래디언트(Gradient) 계산이 없다(no)는 뜻입니다."
            }
          ]
        ]
      }
    ]
  },
  {
    id: 206,
    title: "UNIT 6\n학습 최적화와 성능 개선",
    nodes: [
      {
        id: "node_dl_6_1",
        title: "오차 역전파 학습 루프",
        description: "옵티마이저를 사용하여 오차를 거꾸로 되돌려(역전파) 가중치를 실제로 수정(학습)하는 3단계를 배웁니다.",
        guidebook: [
          "1. optimizer.zero_grad(): 이전 미니배치의 기울기(Gradient) 쓰레기가 남아있지 않게 0으로 싹 청소합니다.",
          "2. loss.backward(): 손실(Loss)을 바탕으로 각 가중치들이 얼마나 틀렸는지(기울기) 역방향으로 계산합니다.",
          "3. optimizer.step(): 계산된 기울기를 바탕으로 가중치를 살짝 이동(업데이트)시킵니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 다음 중 모델을 학습시키는 파이토치 공식 3단계(순서)로 올바른 것은?",
              options: [
                "step() -> backward() -> zero_grad()",
                "zero_grad() -> backward() -> step()",
                "backward() -> step() -> zero_grad()",
                "zero_grad() -> step() -> backward()"
              ],
              answer: 1,
              hint: "청소(zero)부터 하고 -> 오차를 거꾸로 전파(backward)하고 -> 한 발짝 이동(step)합니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 1] 학습 루프 3단계 작성하기",
              initialCode: "import torch\nimport torch.nn as nn\nimport torch.optim as optim\n\nmodel = nn.Linear(1, 1)\noptimizer = optim.SGD(model.parameters(), lr=0.1)\nloss_fn = nn.MSELoss()\n\n# 임의의 데이터와 타겟\npred = model(torch.tensor([2.0]))\ntarget = torch.tensor([4.0])\nloss = loss_fn(pred, target)\n\n# 아래 3단계를 순서대로 호출하여 모델을 한 번 업데이트하세요\n# 1) 기울기 초기화\n\n# 2) 역전파 계산\n\n# 3) 가중치 업데이트\n\nprint(\"1 Step 업데이트 완료!\")",
              expectedOutputs: [
                "1 Step 업데이트 완료!"
              ],
              hint: "optimizer.zero_grad()\nloss.backward()\noptimizer.step() 을 순서대로 적어줍니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_6_2",
        title: "과적합 방지 (Dropout과 BatchNorm)",
        description: "모델이 학습 데이터에만 너무 빠져서(과적합) 실전에서 바보가 되는 것을 막아주는 마법의 테크닉을 배웁니다.",
        guidebook: [
          "Dropout (드롭아웃): 학습을 할 때 뉴런들을 무작위로 몇 퍼센트씩 껐다 켰다 하면서(기절시키면서), 소수의 특정 뉴런에만 의존하지 못하게 하여 모델을 튼튼하게 만듭니다.",
          "Batch Normalization (배치 정규화): 층마다 입력되는 데이터의 스케일(평균/분산)이 뒤죽박죽이 되지 않도록 가지런하게 정렬해주어 학습 속도와 안정성을 극적으로 높입니다.",
          "이 두 가지는 nn.Dropout(), nn.BatchNorm1d() 로 간단히 층 사이에 추가할 수 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 학습 중 의도적으로 일부 뉴런들의 연결을 무작위로 끊어(0으로 만들어) 과적합을 강력하게 방지하는 기법은?",
              sentenceParts: [
                "신경망의 가지를 치듯 일부 뉴런을 끄는 기법을 ",
                " (이)라고 합니다."
              ],
              wordBank: [
                "Dropout",
                "Normalize",
                "Zeroing"
              ],
              answer: [
                "Dropout"
              ],
              hint: "중도 탈락, 떨어뜨린다는 뜻의 영어 단어입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 드롭아웃이 포함된 모델 만들기",
              initialCode: "import torch\nimport torch.nn as nn\n\n# Dropout이 포함된 간단한 Sequential 모델을 만드세요\n# 1층: Linear(10, 20)\n# 2층: ReLU()\n# 3층: 확률 0.5(50%)의 Dropout\n# 4층: Linear(20, 2)\n\nmodel = nn.Sequential(\n    \n)\n\nprint(len(model)) # 층의 개수가 4개인지 확인합니다",
              expectedOutputs: [
                "4"
              ],
              hint: "nn.Linear(10,20), nn.ReLU(), nn.Dropout(0.5), nn.Linear(20,2) 를 콤마로 연결하여 넣습니다."
            }
          ]
        ]
      },
      {
        id: "node_dl_6_3",
        title: "🌟 영광의 딥러닝 마스터 🌟",
        description: "모델 설계, 손실 함수, 옵티마이저, 학습 루프 3단계까지 딥러닝의 모든 흐름을 통합하는 최종 보스전입니다.",
        guidebook: [
          "딥러닝 코드는 언제나 똑같은 흐름을 가집니다.",
          "1. 모델 정의  ->  2. Loss와 Optimizer 정의  ->  3. 반복문 안에서 데이터 통과(순전파)  -> Loss 계산 ->  기울기 초기화, 역전파, 가중치 업데이트(학습 3단계)",
          "모든 지식을 동원하여 빈칸을 채워보세요!"
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[최종 보스] 완벽한 딥러닝 학습 루프 완성하기",
              initialCode: "import torch\nimport torch.nn as nn\nimport torch.optim as optim\n\n# 1. 모델 정의 (입력 5 -> 출력 1)\nmodel = nn.Linear(5, 1)\n\n# 2. 손실 함수(MSE)와 옵티마이저(SGD, lr=0.1) 정의\nloss_fn = \noptimizer = \n\n# 가상 데이터 (1개의 데이터, 특징 5개)\nx = torch.randn(1, 5)\ny_true = torch.tensor([[1.0]])\n\n# 3. 학습 루프 1번 실행\n# a) 순전파 (예측값 계산)\ny_pred = \n# b) 오차 계산\nloss = loss_fn(y_pred, y_true)\n# c) 기울기 초기화\n\n# d) 역전파\n\n# e) 옵티마이저 업데이트\n\n\nprint(\"성공적으로 학습 파이프라인을 구축했습니다!\")",
              expectedOutputs: [
                "성공적으로 학습 파이프라인을 구축했습니다!"
              ],
              hint: "loss_fn = nn.MSELoss()\noptimizer = optim.SGD(model.parameters(), lr=0.1)\ny_pred = model(x)\noptimizer.zero_grad()\nloss.backward()\noptimizer.step()"
            }
          ]
        ]
      }
    ]
  }
];
