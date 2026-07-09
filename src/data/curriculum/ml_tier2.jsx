// ==========================================
// 머신러닝 트랙 Tier 1
// ==========================================

export const ml_tier2 = [
  {
    id: 103,
    title: "UNIT 3\nNumpy와 데이터 분석 기초",
    nodes: [
      {
        id: "node_ml_3_1",
        title: "배열 생성과 속성 (Numpy)",
        description: "머신러닝의 필수 도구인 데이터 연산을 위해 Numpy 배열을 만들고 구조를 살펴봅니다.",
        guidebook: [
          "Numpy는 파이썬 데이터 분석과 머신러닝의 뼈대가 되는 라이브러리입니다.",
          "리스트(List)보다 훨씬 빠르고 효율적인 배열(ndarray) 객체를 제공합니다.",
          "np.array() 함수를 사용해 파이썬 리스트를 Numpy 배열로 변환할 수 있습니다.",
          "배열.shape를 통해 데이터의 구조(행과 열의 크기)를 확인할 수 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] Numpy에서 리스트를 배열로 변환할 때 사용하는 기본 함수는 무엇인가요?",
              options: [
                "np.array()",
                "np.list()",
                "np.vector()",
                "np.ndarray()"
              ],
              answer: 0,
              hint: "파이썬 내장 리스트를 '배열(array)'로 감싸는 함수를 생각해보세요."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 생성된 배열의 차원 형태(크기)를 확인할 때 사용하는 속성은 무엇인가요?",
              options: [
                "배열.size",
                "배열.shape",
                "배열.len",
                "배열.dim"
              ],
              answer: 1,
              hint: "행렬의 모양(형태)을 뜻하는 영어 단어를 떠올려보세요."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] Numpy 배열 생성하기",
              initialCode: "import numpy as np\n\n# 아래 파이썬 리스트를 Numpy 배열로 변환하세요\ndata = [1, 2, 3, 4, 5]\narr = \nprint(arr)",
              expectedOutputs: [
                "[1 2 3 4 5]"
              ],
              hint: "arr = np.array(data)를 사용하여 변환합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 2] 2차원 배열과 형상(Shape) 확인",
              initialCode: "import numpy as np\n\n# 2x3 형태의 2차원 배열을 만듭니다.\nmatrix = np.array([[1, 2, 3], [4, 5, 6]])\n\n# matrix의 행과 열의 크기(shape)를 출력하세요\n",
              expectedOutputs: [
                "(2, 3)"
              ],
              hint: "print(matrix.shape)를 사용하면 튜플 형태로 행과 열의 크기를 출력합니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 3] 특수한 형태의 배열 생성",
              initialCode: "import numpy as np\n\n# 0으로 가득 찬 3x3 배열을 만드세요 (힌트: np.zeros)\nzeros_arr = \nprint(zeros_arr)",
              expectedOutputs: [
                "[[0. 0. 0.]\n [0. 0. 0.]\n [0. 0. 0.]]"
              ],
              hint: "np.zeros((3, 3))를 사용하세요. 괄호가 두 개 겹쳐야 튜플로 전달됩니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_3_2",
        title: "배열 원소 조회 (인덱싱/슬라이싱)",
        description: "대량의 데이터 중 원하는 위치나 조건을 만족하는 데이터만 정확하게 쏙쏙 뽑아냅니다.",
        guidebook: [
          "1차원 배열은 파이썬 리스트와 인덱싱 방식이 완전히 동일합니다 (arr[0]).",
          "2차원 배열은 arr[행, 열] 형식으로 콤마(,)를 사용해 원하는 원소에 접근합니다.",
          "슬라이싱(arr[시작:끝])을 통해 배열의 일부분을 잘라낼 수 있습니다.",
          "불리언 인덱싱(Boolean Indexing): arr[arr > 5]처럼 조건을 만족하는 데이터만 필터링합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 배열 안에서 특정 범위의 데이터를 자르는 기법은 무엇일까요?",
              sentenceParts: [
                "배열의 일부분을 콜론(:)을 이용해 잘라내는 것을 ",
                " 이라고 합니다."
              ],
              wordBank: [
                "슬라이싱",
                "인덱싱",
                "포매팅"
              ],
              answer: [
                "슬라이싱"
              ],
              hint: "데이터를 얇게 자른다(Slice)는 뜻입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 2차원 배열(arr)에서 2번째 행, 3번째 열의 데이터에 접근하는 올바른 문법은?",
              options: [
                "arr[2, 3]",
                "arr[1, 2]",
                "arr[3, 4]",
                "arr(1, 2)"
              ],
              answer: 1,
              hint: "파이썬 인덱스는 0부터 시작합니다! 따라서 2번째 행은 1, 3번째 열은 2입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 1차원 배열 슬라이싱",
              initialCode: "import numpy as np\narr = np.array([10, 20, 30, 40, 50])\n\n# arr에서 20, 30, 40만 뽑아내어 출력하세요 (슬라이싱 사용)\nprint()",
              expectedOutputs: [
                "[20 30 40]"
              ],
              hint: "인덱스 1번부터 4번 직전(3번)까지 가져와야 하므로 arr[1:4]를 사용합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 2] 2차원 배열 인덱싱",
              initialCode: "import numpy as np\nmatrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\n\n# 2행 3열에 위치한 숫자 '6'을 추출하여 출력하세요\n",
              expectedOutputs: [
                "6"
              ],
              hint: "인덱스는 0부터 시작하므로 두 번째 행은 1, 세 번째 열은 2입니다. print(matrix[1, 2])"
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 3] 불리언 인덱싱 (Boolean Indexing)",
              initialCode: "import numpy as np\narr = np.array([15, 8, 22, 5, 30])\n\n# arr의 원소 중 10보다 큰 데이터들만 추출하여 출력하세요\n",
              expectedOutputs: [
                "[15 22 30]"
              ],
              hint: "print(arr[arr > 10])을 사용하면 조건에 맞는 원소들만 배열로 반환됩니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_3_3",
        title: "형태 변경 및 연산",
        description: "모델 학습에 맞게 데이터의 모양을 변형하고, 대량의 배열을 한 번에 연산하는 방법을 배웁니다.",
        guidebook: [
          "reshape(): 원소의 수는 유지하면서 배열의 차원과 모양을 변경합니다 (예: 1차원을 2차원으로).",
          "산술 연산(+, -, *, /): 배열 간의 연산은 같은 위치의 원소끼리(Element-wise) 연산됩니다.",
          "브로드캐스팅(Broadcasting): 형태가 다른 두 배열 간에도 연산을 가능하게 하는 강력한 기능입니다.",
          "sum(), mean(), max(): 배열 내 전체 데이터의 합, 평균, 최대값 등을 빠르게 계산합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 기존 데이터 원소들을 그대로 둔 채 배열의 구조(행렬 크기)만 바꿀 때 사용하는 함수는?",
              options: [
                "resize()",
                "remake()",
                "reshape()",
                "rebuild()"
              ],
              answer: 2,
              hint: "모양(shape)을 다시(re) 만든다는 뜻을 가진 함수입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 크기가 다른 배열끼리도 자동으로 크기를 맞춰 연산이 되도록 지원하는 기능의 이름은?",
              sentenceParts: [
                "Numpy에서는 모양이 달라도 규칙이 맞으면 배열 크기를 자동 확장하여 연산해주는 ",
                " 기능을 지원합니다."
              ],
              wordBank: [
                "캐스팅",
                "브로드캐스팅",
                "스캐터링"
              ],
              answer: [
                "브로드캐스팅"
              ],
              hint: "방송을 송출(Broadcast)하여 범위를 넓히는 것처럼 데이터의 차원을 퍼뜨립니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] reshape를 이용한 배열 모양 변경",
              initialCode: "import numpy as np\n# 1차원 배열(1~6) 생성\narr = np.array([1, 2, 3, 4, 5, 6])\n\n# arr을 2행 3열의 2차원 배열로 변경하여 출력하세요\n",
              expectedOutputs: [
                "[[1 2 3]\n [4 5 6]]"
              ],
              hint: "arr.reshape(2, 3) 또는 arr.reshape(-1, 3)을 사용해 변환할 수 있습니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 2] 배열의 기초 산술 연산 (Element-wise)",
              initialCode: "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\n\n# a와 b를 서로 더한 결과를 출력하세요\n",
              expectedOutputs: [
                "[11 22 33]"
              ],
              hint: "파이썬 리스트와 달리 더하기(+) 기호를 사용하면 같은 위치의 원소끼리 더해집니다. print(a + b)"
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 3] 통계 메서드 활용 (평균 구하기)",
              initialCode: "import numpy as np\nscores = np.array([85, 90, 75, 100, 95])\n\n# scores 배열의 전체 '평균값'을 구하여 출력하세요\n",
              expectedOutputs: [
                "89.0"
              ],
              hint: "print(scores.mean()) 또는 print(np.mean(scores))를 사용하세요."
            }
          ]
        ]
      },
      {
        id: "node_ml_3_4",
        title: "Numpy 마스터 보스전",
        description: "배열 생성, 인덱싱, 연산까지 Numpy의 모든 기능을 동원하여 복합 문제를 해결합니다.",
        guidebook: [
          "보스전은 이전 단계에서 배운 모든 개념을 혼합하여 출제됩니다.",
          "주어진 문제의 요구사항을 꼼꼼히 읽고 코드를 작성해야 합니다.",
          "막힌다면 이전 레슨으로 돌아가 개념을 다시 확인해 보세요!"
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[보스전 1] 다음 코드의 실행 결과는 무엇일까요?\n\narr = np.array([1, 2, 3, 4, 5, 6])\nprint(arr[arr % 2 == 0])",
              options: [
                "[1 3 5]",
                "[2 4 6]",
                "[2 3 4 5 6]",
                "[True False True]"
              ],
              answer: 1,
              hint: "arr % 2 == 0 은 2로 나누어 떨어지는 수(짝수)를 의미하는 조건식(불리언 인덱싱)입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[보스전 2] 3x4 형태의 배열 arr에 대해 행(row) 방향으로만 합계를 구하고 싶다면 어떤 코드를 써야 할까요?",
              options: [
                "arr.sum(axis=0)",
                "arr.sum(axis=1)",
                "arr.sum(axis=-1)",
                "arr.sum()"
              ],
              answer: 0,
              hint: "Numpy에서 axis=0은 세로(행) 방향을 따라 압축하여 계산하라는 뜻입니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[보스전 3] Numpy 배열의 차원 조작 및 덧셈",
              initialCode: "import numpy as np\n\narr = np.array([1, 2, 3, 4])\n# arr을 (2, 2) 모양으로 바꾸세요 (a로 저장)\n\n\n# 브로드캐스팅을 위해 크기가 2인 1차원 배열 b를 생성\nb = np.array([10, 20])\n\n# a와 b를 더한 최종 결과를 출력하세요\n",
              expectedOutputs: [
                "[[11 22]\n [13 24]]"
              ],
              hint: "a = arr.reshape(2, 2) 이후 print(a + b)를 실행하면, 브로드캐스팅을 통해 각 행마다 더해집니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[최종 관문] 데이터 조건 필터링 및 평균 계산",
              initialCode: "import numpy as np\n\ndata = np.array([12, 45, 7, 88, 30, 25, 91, 10])\n\n# 1) data 안에서 30 이상인 숫자들만 추출하세요 (필터링)\n\n# 2) 추출한 숫자들의 평균값을 구해서 소수점 1자리까지 출력하세요\n",
              expectedOutputs: [
                "63.5"
              ],
              hint: "filtered = data[data >= 30]\nprint(round(filtered.mean(), 1)) 형식으로 작성합니다."
            }
          ]
        ]
      }
    ]
  },
  {
    id: 104,
    title: "UNIT 4\n머신러닝 기초와 데이터 분할",
    nodes: [
      {
        id: "node_ml_4_1",
        title: "머신러닝 개요",
        description: "머신러닝이 무엇인지, 어떠한 학습 방법(지도학습, 비지도학습)이 있는지 핵심 이론을 배웁니다.",
        guidebook: [
          "머신러닝(기계학습)은 인간이 명시적으로 규칙을 코딩하지 않아도 데이터로부터 기계가 패턴을 학습하는 분야입니다.",
          "지도학습(Supervised): 문제(X)와 정답(y)을 함께 주고 학습시킵니다. (분류, 회귀)",
          "비지도학습(Unsupervised): 문제(X)만 주고 기계가 스스로 그룹핑하거나 특징을 찾습니다. (군집화)",
          "Scikit-learn(사이킷런)은 파이썬에서 가장 대중적으로 사용되는 머신러닝 라이브러리입니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 다음 빈칸을 채워보세요.",
              sentenceParts: [
                "기계에게 데이터(문제)와 레이블(",
                ")을 함께 제공하여 패턴을 학습시키는 방식을 ",
                " 학습이라고 합니다."
              ],
              wordBank: [
                "정답",
                "오답",
                "지도",
                "비지도"
              ],
              answer: [
                "정답",
                "지도"
              ],
              hint: "선생님이 정답을 가르쳐주며(지도) 학습시키는 방식입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 다음 중 데이터를 통해 집의 '가격(연속된 숫자)'을 예측하는 모델을 만들고자 할 때 적합한 알고리즘은 무엇인가요?",
              options: [
                "분류 (Classification)",
                "회귀 (Regression)",
                "군집화 (Clustering)",
                "차원축소 (PCA)"
              ],
              answer: 1,
              hint: "연속된 수치를 예측하는 것은 '회귀' 알고리즘의 몫입니다. '분류'는 카테고리(개/고양이)를 맞추는 것입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 3] 파이썬에서 가장 널리 사용되는 전통적인 머신러닝 라이브러리의 이름은 무엇인가요?",
              options: [
                "PyTorch",
                "TensorFlow",
                "Scikit-learn",
                "OpenCV"
              ],
              answer: 2,
              hint: "사이킷런(sklearn)이라고 불리는 라이브러리입니다. (PyTorch와 TensorFlow는 주로 딥러닝에 사용됨)"
            }
          ]
        ]
      },
      {
        id: "node_ml_4_2",
        title: "첫 머신러닝: Iris 분류",
        description: "유명한 붓꽃(Iris) 데이터셋을 이용해 실제로 데이터부터 학습, 예측까지 사이킷런의 기본 흐름을 경험합니다.",
        guidebook: [
          "사이킷런 머신러닝 기본 프로세스: 데이터 준비 -> 모델 생성 -> 모델 학습(fit) -> 모델 예측(predict)",
          "데이터 준비: X(특성 데이터, 대문자), y(정답 레이블, 소문자)로 분리합니다.",
          "학습: model.fit(X, y) 함수를 호출하여 모델이 데이터 패턴을 공부하게 만듭니다.",
          "예측: model.predict(X_new)를 통해 새로운 데이터에 대한 예측값을 얻습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 머신러닝 모델을 훈련(학습)시킬 때 사이킷런에서 공통적으로 사용하는 메서드의 이름은 무엇인가요?",
              sentenceParts: [
                "데이터를 모델에 맞춰 학습시킬 때는 모델.",
                "() 함수를 사용합니다."
              ],
              wordBank: [
                "fit",
                "predict",
                "score"
              ],
              answer: [
                "fit"
              ],
              hint: "모델에 데이터를 '맞춘다(fit)'라는 의미입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 학습이 완료된 모델이 새로운 데이터에 대해 어떤 정답일지 추론하게 만드는 함수는 무엇인가요?",
              options: [
                "fit()",
                "transform()",
                "predict()",
                "evaluate()"
              ],
              answer: 2,
              hint: "앞날을 '예측하다'라는 뜻의 영어 단어를 골라보세요."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 1] Iris 데이터셋 불러오기",
              initialCode: "from sklearn.datasets import load_iris\n\n# iris 데이터를 불러와 객체를 생성합니다\niris = \n\n# iris의 정답(타겟) 데이터 클래스 이름들을 출력하세요\n",
              expectedOutputs: [
                "['setosa' 'versicolor' 'virginica']"
              ],
              hint: "iris = load_iris() 로 불러온 뒤, print(iris.target_names) 를 사용합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 2] 결정 트리(Decision Tree) 모델 생성과 학습",
              initialCode: "from sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\n\niris = load_iris()\nX, y = iris.data, iris.target\n\n# 결정 트리 모델 생성 (random_state=0 지정)\nmodel = \n\n# 모델에 X와 y 데이터를 주입하여 학습시키세요\n\nprint(\"학습 완료!\")",
              expectedOutputs: [
                "학습 완료!"
              ],
              hint: "model = DecisionTreeClassifier(random_state=0) 를 생성하고, model.fit(X, y) 를 호출합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 3] 모델을 이용해 새로운 붓꽃 데이터 예측하기",
              initialCode: "from sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\n\n# 준비 및 학습 과정\niris = load_iris()\nmodel = DecisionTreeClassifier(random_state=0)\nmodel.fit(iris.data, iris.target)\n\n# 새로운 꽃의 측정값 [꽃받침 길이, 꽃받침 너비, 꽃잎 길이, 꽃잎 너비]\nnew_flower = [[5.1, 3.5, 1.4, 0.2]]\n\n# 이 꽃이 무슨 종류인지 예측하여 결과를 출력하세요\n",
              expectedOutputs: [
                "[0]"
              ],
              hint: "pred = model.predict(new_flower) 를 통해 결과를 도출하고 print(pred) 합니다. 0번은 Setosa 종입니다!"
            }
          ]
        ]
      },
      {
        id: "node_ml_4_3",
        title: "데이터셋 나누기 (train_test_split)",
        description: "모델이 정답을 외웠는지(과적합), 진짜로 똑똑해졌는지 검증하기 위해 데이터를 학습용과 평가용으로 쪼개는 방법을 배웁니다.",
        guidebook: [
          "시험을 볼 때, 기출문제(학습 데이터)로만 공부하고 똑같은 기출문제로 수능(평가)을 보면 본 실력을 알 수 없습니다.",
          "전체 데이터를 Train(학습용) 7~80%, Test(평가용) 2~30%로 나누는 것이 일반적입니다.",
          "사이킷런의 train_test_split() 함수가 이 과정을 랜덤하고 완벽하게 대신해줍니다.",
          "반환값 순서는 반드시 X_train, X_test, y_train, y_test 순서로 튜플 언패킹을 해야 합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 데이터를 학습용(Train)과 평가용(Test)으로 나누는 가장 큰 이유는 무엇인가요?",
              options: [
                "메모리 사용량을 절약하기 위해서",
                "학습되지 않은 새로운 데이터(미지의 데이터)에 대한 모델의 성능을 제대로 평가하기 위해서",
                "데이터 전처리를 편하게 하기 위해서",
                "학습 속도를 높이기 위해서"
              ],
              answer: 1,
              hint: "기출문제로만 공부한 뒤, 똑같은 기출문제로 평가하면 암기한 것인지 진짜 실력인지 알 수 없습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 다음 빈칸을 채워보세요.",
              sentenceParts: [
                "데이터를 쪼갤 때 사용하는 함수는 ",
                " 이며, 이 함수의 반환값은 특징 데이터인 ",
                "가 먼저 나온 후 레이블 y가 나옵니다."
              ],
              wordBank: [
                "X_train, X_test",
                "train_test_split",
                "y_train, y_test",
                "random_split"
              ],
              answer: [
                "train_test_split",
                "X_train, X_test"
              ],
              hint: "train과 test를 쪼갠다(split)는 뜻의 함수 이름과 특징 행렬 대문자 X의 순서를 맞춰주세요."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] train_test_split 사용해보기",
              initialCode: "import numpy as np\nfrom sklearn.model_selection import train_test_split\n\n# 0~9까지의 특성 X와 정답 y 생성\nX = np.arange(10).reshape(-1, 1)\ny = np.array([0,0,0,0,0, 1,1,1,1,1])\n\n# 전체 데이터를 학습용 80%, 평가용 20%로 나누세요 (random_state=42 고정)\nX_train, X_test, y_train, y_test = \n\n# X_test의 길이를 출력하세요\n",
              expectedOutputs: [
                "2"
              ],
              hint: "train_test_split(X, y, test_size=0.2, random_state=42) 를 호출하여 쪼갭니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 2] 분할된 데이터로 모델 학습 및 평가",
              initialCode: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\n\niris = load_iris()\nX, y = iris.data, iris.target\n\n# 1) 데이터 분할 (test_size=0.3, random_state=42)\n\n\n# 2) 모델 생성 및 학습 (학습용 데이터 X_train, y_train 사용)\nmodel = DecisionTreeClassifier(random_state=42)\n\n\n# 3) 평가용 데이터(X_test, y_test)로 모델의 정확도 평가\nacc = model.score(X_test, y_test)\nprint(f\"정확도: {round(acc, 2)}\")",
              expectedOutputs: [
                "정확도: 1.0"
              ],
              hint: "분할 후 model.fit(X_train, y_train)을 진행해야 합니다. 붓꽃 데이터의 구조가 좋아서 1.0 (100%) 정확도가 나옵니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_4_4",
        title: "머신러닝 기초 보스전",
        description: "데이터를 로드하고, 훈련/테스트 셋으로 쪼갠 후, 모델을 학습시키고 평가하는 전체 파이프라인을 스스로 완성하세요.",
        guidebook: [
          "보스전은 전체 흐름(파이프라인)을 코딩하는 훈련입니다.",
          "순서: 데이터 로드 -> train_test_split 분할 -> 모델 객체화 -> fit -> score (또는 predict)",
          "사소한 변수 이름(X_train 등)의 순서가 바뀌지 않도록 주의하세요!"
        ],
        lessons: [
          [
             {
              type: "quiz_multiple_choice",
              content: "[보스전 1] 사이킷런에서 분류 모델의 최종 정확도를 확인하는 가장 간단한 내장 메서드는 무엇인가요?",
              options: [
                "model.acc()",
                "model.accuracy()",
                "model.eval()",
                "model.score(X_test, y_test)"
              ],
              answer: 3,
              hint: "모델에게 시험지(X_test)와 정답지(y_test)를 주고 직접 '채점(score)'하라고 지시하는 함수입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[보스전 2] Breast Cancer(유방암) 데이터 분석 전체 파이프라인 만들기",
              initialCode: "from sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\n\n# 1. 데이터 로드\ncancer = load_breast_cancer()\nX, y = cancer.data, cancer.target\n\n# 2. 데이터 분할 (test_size=0.2, random_state=2023)\n\n\n# 3. 모델 생성 (DecisionTreeClassifier, random_state=2023)\n\n\n# 4. 모델 학습 (Train 데이터)\n\n\n# 5. 모델 평가 (Test 데이터 정확도 출력)\n",
              expectedOutputs: [
                "0.9210526315789473"
              ],
              hint: "분할, 생성, 학습(fit), 평가(score) 4단계를 순서대로 작성합니다. print(model.score(X_test, y_test))를 통해 출력하세요."
            }
          ]
        ]
      }
    ]
  }
];
