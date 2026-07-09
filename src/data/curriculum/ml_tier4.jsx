// ==========================================
// 머신러닝 트랙 Tier 3
// ==========================================

export const ml_tier4 = [
  {
    id: 107,
    title: "UNIT 7\n다양한 머신러닝 알고리즘",
    nodes: [
      {
        id: "node_ml_7_1",
        title: "K-최근접 이웃(KNN)과 SVM",
        description: "가장 직관적인 방법으로 데이터를 분류하는 KNN과, 마진(Margin)을 최대화하여 강력한 분류를 수행하는 SVM을 배웁니다.",
        guidebook: [
          "KNN (K-Nearest Neighbors): 새로운 데이터가 들어오면, 가장 가까운 K개의 이웃의 데이터를 확인하여 다수결로 정답을 예측합니다.",
          "SVM (Support Vector Machine): 데이터를 분류하는 가장 넓은 '도로(Margin)'를 찾아 선(결정 경계)을 긋는 강력한 알고리즘입니다.",
          "두 알고리즘 모두 데이터의 '거리'를 기반으로 계산하므로, 학습 전 반드시 스케일링(StandardScaler 등)이 필수입니다!"
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 새로운 데이터의 클래스를 예측할 때, 주변에 가장 가까이 있는 K개의 이웃들의 데이터를 다수결로 투표하여 결정하는 알고리즘은 무엇인가요?",
              options: [
                "의사결정 나무 (Decision Tree)",
                "K-최근접 이웃 (KNN)",
                "선형 회귀 (Linear Regression)",
                "랜덤 포레스트 (Random Forest)"
              ],
              answer: 1,
              hint: "가장 가까운(Nearest) 이웃(Neighbors)들을 찾아본다는 의미입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] SVM 알고리즘에서 데이터를 분류하는 두 클래스 사이의 여백(거리)을 무엇이라고 부르나요?",
              sentenceParts: [
                "SVM은 데이터를 양분하는 경계선과 데이터 사이의 ",
                " 을/를 최대화하는 선을 찾는 알고리즘입니다."
              ],
              wordBank: [
                "마진(Margin)",
                "오차(Error)",
                "가중치(Weight)"
              ],
              answer: [
                "마진(Margin)"
              ],
              hint: "노트나 책의 '여백'을 뜻하는 영어 단어입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] KNN 분류기 학습하기",
              initialCode: "from sklearn.neighbors import KNeighborsClassifier\nimport numpy as np\n\n# 2차원 공간의 좌표 데이터\nX_train = np.array([[1, 2], [1.5, 1.8], [8, 8], [9, 9.5]])\ny_train = np.array([0, 0, 1, 1]) # 0그룹과 1그룹\n\n# 1) 이웃의 수(n_neighbors)를 3으로 설정하여 KNN 모델 생성\nknn = \n\n# 2) 학습 진행\n\n\n# 예측할 새로운 데이터 [2, 2.5] 1개\nX_test = np.array([[2, 2.5]])\n\n# 예측 결과를 출력하세요\n",
              expectedOutputs: [
                "[0]"
              ],
              hint: "knn = KNeighborsClassifier(n_neighbors=3) 생성 후 fit을 하고 predict로 결과를 봅니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_7_2",
        title: "결정 트리 (Decision Tree)",
        description: "스무고개처럼 질문을 던져가며 데이터를 분류하는 직관적이고 설명하기 좋은 모델을 배웁니다.",
        guidebook: [
          "결정 트리는 데이터의 불순도(Impurity)가 낮아지는(깨끗해지는) 방향으로 가지(Branch)를 뻗어나갑니다.",
          "불순도 지표: 지니 지수(Gini index), 엔트로피(Entropy)",
          "장점: 모델이 왜 그런 결정을 내렸는지 룰(Rule)을 시각화하여 사람에게 설명하기(White-box) 가장 좋습니다.",
          "단점: 훈련 데이터에 너무 깊게 파고들어 과적합(Overfitting)되기 쉽습니다. (max_depth 설정 필수)"
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 결정 트리는 노드(Node) 안의 데이터가 얼마나 섞여있는지를 수치로 계산하여 트리를 분할합니다. 이 섞여있는 정도를 뜻하는 용어는?",
              sentenceParts: [
                "결정 트리는 데이터의 ",
                " 가 낮아지는 방향(즉, 같은 클래스끼리 모이는 방향)으로 학습합니다."
              ],
              wordBank: [
                "불순도 (Impurity)",
                "순도 (Purity)",
                "정확도 (Accuracy)"
              ],
              answer: [
                "불순도 (Impurity)"
              ],
              hint: "물순물이 섞여서 탁한 정도를 뜻합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 결정 트리의 가장 큰 단점은 훈련 데이터의 아주 작은 특징까지 모두 질문으로 만들어 분할하다 보니 '과적합'이 발생한다는 것입니다. 이를 막기 위해 제어하는 주요 파라미터는?",
              options: [
                "n_estimators (나무의 개수)",
                "learning_rate (학습률)",
                "max_depth (트리의 최대 깊이)",
                "kernel (커널 종류)"
              ],
              answer: 2,
              hint: "나무가 뿌리를 너무 '깊게' 내리지 못하도록 막는 파라미터입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 깊이가 제한된 결정 트리",
              initialCode: "from sklearn.datasets import load_breast_cancer\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import train_test_split\n\ncancer = load_breast_cancer()\nX_train, X_test, y_train, y_test = train_test_split(cancer.data, cancer.target, test_size=0.2, random_state=42)\n\n# 과적합을 막기 위해 max_depth를 3으로 제한하여 모델을 생성하세요\ndt = \n\n# 학습 및 정확도 확인\ndt.fit(X_train, y_train)\nprint(round(dt.score(X_test, y_test), 2))",
              expectedOutputs: [
                "0.95"
              ],
              hint: "DecisionTreeClassifier(max_depth=3, random_state=42) 처럼 설정합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_7_3",
        title: "앙상블: 랜덤 포레스트와 부스팅",
        description: "여러 개의 약한 나무(Tree)들을 모아 하나의 거대한 숲(Forest)을 만들어 예측력을 극대화합니다.",
        guidebook: [
          "앙상블(Ensemble): 여러 개의 모델을 조합하여 하나의 강력한 모델을 만드는 기법입니다.",
          "랜덤 포레스트(Random Forest): 여러 개의 결정 트리를 '독립적'으로 만들어 투표로 결과를 정하는 배깅(Bagging) 방식입니다.",
          "그라디언트 부스팅(Gradient Boosting): 앞선 트리가 틀린 오차를 다음 트리가 '보완'해 나가는 순차적 학습 방식입니다.",
          "부스팅 계열 알고리즘(XGBoost, LightGBM 등)은 캐글(Kaggle) 같은 데이터 대회에서 가장 많이 우승하는 알고리즘입니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 약한 결정 트리를 수십~수백 개 만들어 각자의 예측 결과를 투표(Voting)로 결정하여 성능을 올리는 앙상블 알고리즘의 이름은?",
              options: [
                "K-최근접 이웃",
                "랜덤 포레스트 (Random Forest)",
                "선형 회귀",
                "로지스틱 회귀"
              ],
              answer: 1,
              hint: "여러 개의 나무(Tree)가 모여 숲(Forest)을 이룬다는 의미입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 이전 모델이 맞추지 못한 오답(오차)에 가중치를 부여하여, 다음 모델이 순차적으로 약점을 보완해나가는 앙상블 기법은?",
              sentenceParts: [
                "순차적으로 오차를 줄여나가는 앙상블 기법을 ",
                " 방식이라고 합니다."
              ],
              wordBank: [
                "부스팅(Boosting)",
                "배깅(Bagging)",
                "스태킹(Stacking)"
              ],
              answer: [
                "부스팅(Boosting)"
              ],
              hint: "성능을 위로 확 밀어 올린다(Boost)는 뜻입니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 1] 랜덤 포레스트 학습하기",
              initialCode: "from sklearn.datasets import load_wine\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\n\nwine = load_wine()\nX_train, X_test, y_train, y_test = train_test_split(wine.data, wine.target, random_state=42)\n\n# n_estimators(나무의 개수)를 100개로 지정하여 랜덤 포레스트 생성\nrf = \n\n# 학습 및 결과 출력\nrf.fit(X_train, y_train)\nprint(round(rf.score(X_test, y_test), 2))",
              expectedOutputs: [
                "1.0"
              ],
              hint: "rf = RandomForestClassifier(n_estimators=100, random_state=42) 로 만듭니다. (100은 디폴트 값입니다)"
            }
          ]
        ]
      },
      {
        id: "node_ml_7_4",
        title: "선형 회귀와 로지스틱 회귀",
        description: "데이터를 가장 잘 관통하는 직선을 그려 예측하는 선형 회귀와, 확률을 기반으로 분류하는 로지스틱 회귀를 배웁니다.",
        guidebook: [
          "선형 회귀(Linear Regression): 데이터 점들을 가장 잘 대표하는 직선(y = wx + b)을 찾아 연속된 값을 예측합니다. (집값, 주식 예측)",
          "최적의 직선: 실제값과 예측값의 차이(오차, MSE)가 최소가 되는 선을 찾는 것이 목표입니다.",
          "로지스틱 회귀(Logistic Regression): 이름은 '회귀'지만 사실은 **분류(Classification)** 알고리즘입니다! 0~1 사이의 확률을 반환하여 암 발생 여부 등을 분류합니다."
        ],
        lessons: [
          [
             {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 다음 중 이름에는 '회귀(Regression)'가 들어가지만 실제로는 두 가지 이상의 클래스를 나누는 '분류(Classification)' 알고리즘인 것은 무엇인가요?",
              options: [
                "Linear Regression (선형 회귀)",
                "Logistic Regression (로지스틱 회귀)",
                "Ridge Regression (릿지 회귀)",
                "Lasso Regression (라쏘 회귀)"
              ],
              answer: 1,
              hint: "시그모이드(Sigmoid) 함수를 이용해 0과 1 사이의 확률을 뱉어내는 이 분류기의 이름은 Logistic입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 로지스틱 회귀로 암 환자 분류하기",
              initialCode: "from sklearn.datasets import load_breast_cancer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\n\ncancer = load_breast_cancer()\nX_train, X_test, y_train, y_test = train_test_split(cancer.data, cancer.target, test_size=0.2, random_state=1)\n\n# max_iter(최대 반복 횟수)를 10000으로 충분히 주어 모델 생성\nmodel = \n\n# 학습시키고 test 데이터에 대한 정확도를 출력하세요 (소수점 2자리)\n\n",
              expectedOutputs: [
                "0.95"
              ],
              hint: "model = LogisticRegression(max_iter=10000)\nmodel.fit(X_train, y_train)\nprint(round(model.score(X_test, y_test), 2))"
            }
          ]
        ]
      },
      {
        id: "node_ml_7_5",
        title: "알고리즘 마스터 보스전",
        description: "다양한 알고리즘의 특징을 완벽하게 이해하고 상황에 맞게 적용하는 능력을 검증합니다.",
        guidebook: [
          "지금까지 배운 KNN, SVM, Decision Tree, Random Forest, Logistic Regression의 특징을 잘 생각해보세요.",
          "보스전에서는 어떤 알고리즘이 어떤 상황에 적합한지 묻는 종합적인 판단 능력이 필요합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[보스전 1] 다음 중 거리 기반으로 동작하기 때문에 반드시 사전에 '데이터 스케일링(StandardScaler 등)'을 진행해야만 모델 성능이 떨어지지 않는 알고리즘끼리 바르게 묶인 것은?",
              options: [
                "Decision Tree, Random Forest",
                "KNN, SVM",
                "Logistic Regression, Decision Tree",
                "Random Forest, 부스팅"
              ],
              answer: 1,
              hint: "트리(Tree) 기반 알고리즘들은 질문으로 데이터를 쪼개므로 스케일링이 필요 없습니다. 반면 공간 상의 거리를 재는 모델들은 스케일링이 필수입니다."
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[보스전 2] 캐글(Kaggle) 대회 같은 곳에서 가장 높은 예측 성능을 내어 우승을 독차지하는, 순차적으로 오차를 줄여나가는 '부스팅(Boosting)' 계열의 대표적인 알고리즘 이름은 무엇일까요?",
              options: [
                "K-Means",
                "랜덤 포레스트 (Random Forest)",
                "XGBoost (또는 LightGBM)",
                "SVC (Support Vector Classifier)"
              ],
              answer: 2,
              hint: "Extreme Gradient Boosting의 약자인 아주 강력한 모델입니다."
            }
          ]
        ]
      }
    ]
  },
  {
    id: 108,
    title: "UNIT 8\n최적화와 비지도 학습",
    nodes: [
      {
        id: "node_ml_8_1",
        title: "최적화와 경사하강법",
        description: "머신러닝과 딥러닝이 스스로 학습하며 똑똑해지는 핵심 원리인 '경사하강법'을 배웁니다.",
        guidebook: [
          "비용 함수(Cost Function, 오차 함수): 모델의 예측값과 실제값의 차이(오차)를 나타내는 식입니다.",
          "경사하강법(Gradient Descent): 산 꼭대기에서 눈을 가리고 가장 가파른 경사를 따라 한 걸음씩 내려와, 오차가 가장 작은 골짜기(최소값)를 찾는 최적화 기법입니다.",
          "학습률(Learning Rate): 한 번에 내려가는 발걸음의 보폭 크기입니다. 너무 크면 최적점을 지나치고, 너무 작으면 학습이 오래 걸립니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 모델의 오차를 나타내는 함수의 기울기(미분값)를 구해서, 오차가 최소가 되는 방향으로 가중치를 업데이트하는 기법은?",
              sentenceParts: [
                "오차 함수의 경사를 따라 내려가면서 최적의 파라미터를 찾는 방법을 ",
                " 이라고 부릅니다."
              ],
              wordBank: [
                "경사하강법",
                "그리드서치",
                "오차역전파"
              ],
              answer: [
                "경사하강법"
              ],
              hint: "가파른 경사(Gradient)를 따라 하강(Descent)한다는 뜻입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 경사하강법에서 '한 번에 얼마나 이동할지 보폭'을 결정하는 중요한 하이퍼파라미터는 무엇인가요?",
              options: [
                "n_estimators (반복 횟수)",
                "learning_rate (학습률)",
                "max_depth (최대 깊이)",
                "test_size (테스트 크기)"
              ],
              answer: 1,
              hint: "모델이 '학습하는 속도'를 조절합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_8_2",
        title: "비지도학습: 군집화 (K-Means)",
        description: "정답(레이블)이 없는 데이터들을 특징이 비슷한 것들끼리 묶어주는 비지도학습 알고리즘을 다룹니다.",
        guidebook: [
          "지도학습은 정답(y)이 있지만, 비지도학습은 정답 없이 데이터(X)만 존재합니다.",
          "군집화(Clustering): 주어진 데이터를 K개의 그룹(클러스터)으로 묶는 대표적인 비지도학습 기법입니다.",
          "K-Means (K-평균 군집화): 임의의 중심점(Centroid) K개를 찍고, 각 데이터가 가장 가까운 중심점 그룹에 속하게 한 뒤 중심점을 계속 이동시켜 최적의 그룹을 찾습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 정답(레이블) 없이 특성 데이터만 가지고 고객을 몇 가지 성향으로 분류하는 마케팅 분석 등에 사용하는 학습 방식은?",
              options: [
                "지도 학습 (Supervised Learning)",
                "비지도 학습 (Unsupervised Learning)",
                "강화 학습 (Reinforcement Learning)",
                "전이 학습 (Transfer Learning)"
              ],
              answer: 1,
              hint: "가르쳐주는(지도하는) 정답이 없는 상태에서 학습합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 다음 빈칸을 채워보세요.",
              sentenceParts: [
                "미리 정해진 K개의 중심점을 기준으로 데이터를 비슷한 것끼리 묶어주는 가장 대표적인 비지도학습 알고리즘은 ",
                " 입니다."
              ],
              wordBank: [
                "K-Means",
                "K-NN",
                "SVM"
              ],
              answer: [
                "K-Means"
              ],
              hint: "K개의 평균(Means) 중심점을 기준으로 묶습니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] K-Means를 이용한 데이터 군집화",
              initialCode: "from sklearn.cluster import KMeans\nimport numpy as np\n\n# 임의의 2차원 데이터 포인트 (정답 y가 없습니다)\nX = np.array([[1, 2], [1.5, 1.8], [8, 8], [9, 9.5], [8.5, 9]])\n\n# 1) 데이터를 2개의 그룹으로 나누기 위해 n_clusters=2 로 KMeans 객체 생성\nkmeans = \n\n# 2) 데이터 X를 학습시키세요\n\n\n# 3) 각 데이터가 할당된 그룹(0 또는 1)인 labels_ 를 출력하세요\nprint(kmeans.labels_)",
              expectedOutputs: [
                "[0 0 1 1 1]"
              ],
              hint: "kmeans = KMeans(n_clusters=2, n_init='auto') 로 생성한 후 kmeans.fit(X) 를 실행합니다. (값은 초기화에 따라 앞뒤가 바뀔 수 있지만 그룹핑은 제대로 묶입니다!)"
            }
          ]
        ]
      },
      {
        id: "node_ml_8_3",
        title: "머신러닝 총괄 마스터 보스전",
        description: "머신러닝 트랙의 모든 과정을 성공적으로 수료하기 위한 마지막 관문입니다. 이론과 실습이 총망라됩니다.",
        guidebook: [
          "Numpy, 전처리, 지도학습, 비지도학습, 평가지표의 모든 지식을 동원하세요.",
          "이 보스전을 통과하면 코딩에그 머신러닝 트랙의 마스터 빌더가 됩니다!"
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[최종 보스 1] 다음 중 모델 성능 평가에 대한 설명으로 올바르지 않은 것은?",
              options: [
                "분류 모델의 평가지표에는 정확도, 정밀도, 재현율이 있다.",
                "회귀 모델은 MSE, R2 Score 등으로 평가한다.",
                "오차행렬(Confusion Matrix)은 회귀 모델의 예측값과 실제값의 차이를 보여주는 표이다.",
                "학습 데이터로만 평가하면 모델의 과적합을 제대로 알 수 없다."
              ],
              answer: 2,
              hint: "오차행렬은 '회귀'가 아니라 '분류' 모델에서 정답/오답(양성/음성)을 어떻게 맞췄는지 보여주는 표입니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[최종 보스 2] K-Means 클러스터 중심점 확인",
              initialCode: "from sklearn.cluster import KMeans\nimport numpy as np\n\nX = np.array([[1, 1], [2, 1], [8, 8], [9, 8]])\n\n# 2개의 그룹으로 나누는 KMeans 학습 (n_init='auto', random_state=42 고정)\nmodel = KMeans(n_clusters=2, n_init='auto', random_state=42)\nmodel.fit(X)\n\n# 학습된 두 그룹의 최종 중심점(Centroid) 좌표를 출력하세요\n",
              expectedOutputs: [
                "[[1.5 1. ]\n [8.5 8. ]]"
              ],
              hint: "print(model.cluster_centers_) 속성을 사용하면 학습된 중심점 좌표를 볼 수 있습니다."
            }
          ]
        ]
      }
    ]
  }
];
