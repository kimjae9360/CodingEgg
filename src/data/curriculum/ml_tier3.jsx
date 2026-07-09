// ==========================================
// 머신러닝 트랙 Tier 2
// ==========================================

export const ml_tier3 = [
  {
    id: 105,
    title: "UNIT 5\n데이터 전처리와 평가지표",
    nodes: [
      {
        id: "node_ml_5_1",
        title: "데이터 전처리 (결측치와 인코딩)",
        description: "머신러닝 모델이 데이터를 잘 이해할 수 있도록 결측치를 처리하고 문자를 숫자로 변환합니다.",
        guidebook: [
          "현실의 데이터는 비어있는 값(결측치, NaN)이 존재하며, 모델은 이를 처리하지 못합니다.",
          "결측치는 삭제하거나 다른 값(평균, 중앙값, 0 등)으로 채워야 합니다.",
          "머신러닝 알고리즘은 수학적 계산을 하므로 문자(String) 데이터를 숫자로 변환(인코딩)해야 합니다.",
          "대표적인 인코딩: 라벨 인코딩(Label Encoding), 원-핫 인코딩(One-Hot Encoding)"
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 성별 데이터가 ['남', '여', '여', '남'] 처럼 문자열로 되어 있을 때, 이를 0과 1로 변환하는 과정을 무엇이라고 하나요?",
              options: [
                "디코딩 (Decoding)",
                "인코딩 (Encoding)",
                "스케일링 (Scaling)",
                "필터링 (Filtering)"
              ],
              answer: 1,
              hint: "문자를 기계가 이해할 수 있는 코드(숫자)로 변환하는 작업입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] Pandas에서 결측치를 특정한 값으로 채워넣을 때 사용하는 함수는 무엇인가요?",
              sentenceParts: [
                "데이터프레임의 결측치를 0이나 평균값으로 채울 때는 df.",
                "() 함수를 사용합니다."
              ],
              wordBank: [
                "fillna",
                "dropna",
                "isnull"
              ],
              answer: [
                "fillna"
              ],
              hint: "결측치(NA)를 채운다(fill)는 뜻입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 결측치 처리하기",
              initialCode: "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({'점수': [80, 90, np.nan, 85, np.nan]})\n\n# '점수' 열의 결측치를 0으로 채워서 출력하세요 (힌트: fillna)\n",
              expectedOutputs: [
                "0    80.0\n1    90.0\n2     0.0\n3    85.0\n4     0.0\nName: 점수, dtype: float64"
              ],
              hint: "print(df['점수'].fillna(0)) 을 사용하세요."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 2] 라벨 인코딩 (Label Encoding)",
              initialCode: "from sklearn.preprocessing import LabelEncoder\nimport numpy as np\n\nitems = np.array(['TV', '냉장고', '전자레인지', 'TV'])\n\n# 1) LabelEncoder 객체를 생성하세요\nencoder = \n\n# 2) encoder에 데이터를 맞춰(fit) 학습시키고 변환(transform)하세요\nlabels = \nprint(labels)",
              expectedOutputs: [
                "[0 1 2 0]"
              ],
              hint: "encoder = LabelEncoder() 로 생성 후, labels = encoder.fit_transform(items) 를 실행합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_5_2",
        title: "데이터 스케일링",
        description: "데이터의 단위와 크기가 다르면 모델이 착각할 수 있습니다. 스케일링을 통해 모든 데이터의 단위를 맞춥니다.",
        guidebook: [
          "몸무게(kg)와 키(cm)처럼 단위가 다르면, 숫자가 큰 특성이 예측 결과에 더 큰 영향을 미칩니다.",
          "표준화(StandardScaler): 평균이 0, 분산이 1인 정규분포 형태로 변환합니다.",
          "정규화(MinMaxScaler): 데이터의 최소값을 0, 최대값을 1로 맞추어 변환합니다.",
          "주의: 학습 데이터(Train)에는 fit_transform을 사용하지만, 평가 데이터(Test)에는 transform만 사용해야 합니다!"
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 특성 데이터들의 단위를 동일한 수준으로 맞춰주는 작업을 무엇이라고 하나요?",
              sentenceParts: [
                "데이터의 크기(단위)를 통일시키는 작업을 특성 ",
                " 이라고 합니다."
              ],
              wordBank: [
                "스케일링",
                "인코딩",
                "모델링"
              ],
              answer: [
                "스케일링"
              ],
              hint: "저울(Scale)이나 크기(Scale)를 맞춘다는 의미입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 모델 검증을 위해 나누어 둔 평가용 데이터(Test set)에 스케일링을 적용할 때 사용하는 메서드는?",
              options: [
                "fit()",
                "fit_transform()",
                "transform()",
                "score()"
              ],
              answer: 2,
              hint: "Test set으로 모델 기준(fit)을 갱신하면 안 됩니다. 이미 학습된 기준으로 '변환'만 해야 합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] StandardScaler를 이용한 표준화",
              initialCode: "import numpy as np\nfrom sklearn.preprocessing import StandardScaler\n\n# 키와 몸무게 데이터 (큰 차이가 납니다)\nX = np.array([[180.0, 75.0], [160.0, 50.0], [170.0, 60.0]])\n\n# 1. StandardScaler 객체 생성\nscaler = \n\n# 2. X 데이터를 표준화하여 변환(fit_transform)하세요\nX_scaled = \nprint(np.round(X_scaled.mean(), 1))",
              expectedOutputs: [
                "0.0"
              ],
              hint: "scaler = StandardScaler() 생성 후 X_scaled = scaler.fit_transform(X) 로 변환하면 평균이 0이 됩니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_5_3",
        title: "분류 모델 평가지표",
        description: "단순한 '정확도' 외에, 모델이 얼마나 똑똑하게 분류하는지 다양한 지표로 다각도로 평가합니다.",
        guidebook: [
          "정확도(Accuracy)의 함정: 100명 중 99명이 정상이고 1명이 암 환자일 때, 무조건 '정상'이라고 찍어도 99%의 정확도가 나옵니다.",
          "오차행렬(Confusion Matrix): 모델이 정답과 오답을 어떻게 맞췄는지 표 형태로 보여줍니다 (TP, FP, FN, TN).",
          "정밀도(Precision): 모델이 양성(True)이라고 예측한 것 중 진짜 양성의 비율.",
          "재현율(Recall): 실제 양성(True)인 데이터 중 모델이 양성이라고 맞춘 비율 (암 진단에 매우 중요)."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] '실제로 암에 걸린 환자' 중에서 '모델이 암이라고 맞게 예측한 환자'의 비율을 나타내는 지표는?",
              options: [
                "정확도 (Accuracy)",
                "정밀도 (Precision)",
                "재현율 (Recall)",
                "F1 Score"
              ],
              answer: 2,
              hint: "실제 양성(Positive) 데이터 중 모델이 진짜 양성으로 찾아낸 비율입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 다음 빈칸을 채워보세요.",
              sentenceParts: [
                "분류 모델의 예측 결과가 실제 정답과 얼마나 일치하는지 표(Matrix) 형태로 나타낸 것을 ",
                " 이라고 부릅니다."
              ],
              wordBank: [
                "오차행렬",
                "분산행렬",
                "상관행렬"
              ],
              answer: [
                "오차행렬"
              ],
              hint: "영어로는 Confusion Matrix 입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 오차행렬과 평가지표 계산하기",
              initialCode: "from sklearn.metrics import accuracy_score, precision_score, recall_score\nimport numpy as np\n\n# 1은 양성(암환자), 0은 음성(정상)을 뜻합니다.\ny_true = np.array([1, 0, 1, 1, 0]) # 실제 정답\ny_pred = np.array([1, 0, 0, 1, 0]) # 모델의 예측\n\n# 정확도와 재현율(Recall)을 계산하여 소수점 1자리까지 출력하세요\nacc = \nrecall = \nprint(f\"정확도:{round(acc, 1)}, 재현율:{round(recall, 1)}\")",
              expectedOutputs: [
                "정확도:0.8, 재현율:0.7"
              ],
              hint: "acc = accuracy_score(y_true, y_pred)\nrecall = recall_score(y_true, y_pred) 를 사용합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_5_4",
        title: "회귀 평가지표 & 보스전",
        description: "숫자를 예측하는 회귀 모델을 평가하는 방법을 배우고, 앞선 모든 지표를 바탕으로 데이터 평가 보스전을 치릅니다.",
        guidebook: [
          "분류는 '카테고리'를 맞추지만, 회귀는 '연속된 숫자'를 예측하므로 정확도(%) 개념이 통하지 않습니다.",
          "MSE (Mean Squared Error): 실제값과 예측값 차이(오차)의 제곱의 평균입니다. (작을수록 좋음)",
          "RMSE (Root Mean Squared Error): MSE에 루트를 씌워 실제 데이터 단위와 맞춘 지표입니다.",
          "R2 Score (결정 계수): 모델의 설명력을 나타내며 1에 가까울수록 좋습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[보스전 1] 집값, 몸무게 등 수치를 예측하는 회귀 모델에서 오차가 작을수록 모델이 똑똑한 것입니다. 오차의 제곱의 평균을 뜻하는 지표는?",
              options: [
                "정확도 (Accuracy)",
                "R2 Score",
                "MSE (Mean Squared Error)",
                "재현율 (Recall)"
              ],
              answer: 2,
              hint: "평균(Mean) 제곱(Squared) 오차(Error) 입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[보스전 2] 회귀 모델 성능 평가",
              initialCode: "from sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\n\ny_true = np.array([10, 20, 30, 40]) # 실제 정답\ny_pred = np.array([12, 18, 30, 42]) # 모델 예측\n\n# MSE(평균제곱오차)와 R2 스코어를 계산하여 출력하세요\nmse = \nr2 = \n\nprint(f\"MSE: {mse}, R2: {r2}\")",
              expectedOutputs: [
                "MSE: 3.0, R2: 0.976"
              ],
              hint: "mse = mean_squared_error(y_true, y_pred)\nr2 = r2_score(y_true, y_pred)"
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[최종 관문] 데이터 전처리부터 평가까지 파이프라인 완성",
              initialCode: "from sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\n# Train과 Test 데이터가 주어집니다 (키와 몸무게)\nX_train = np.array([[170, 65], [160, 50], [180, 80]])\ny_train = np.array([1, 0, 1])\n\nX_test = np.array([[175, 70], [155, 45]])\ny_test = np.array([1, 0])\n\n# 1) StandardScaler 객체 생성\nscaler = \n\n# 2) X_train은 fit_transform 적용, X_test는 transform 적용\n\n\n# 가상의 모델 예측 결과 (이 평가는 모두 정답을 맞춘다고 가정)\ny_pred = np.array([1, 0])\n\nprint(\"전처리 완료, 정확도:\", accuracy_score(y_test, y_pred))",
              expectedOutputs: [
                "전처리 완료, 정확도: 1.0"
              ],
              hint: "scaler.fit_transform(X_train) 과 scaler.transform(X_test) 의 차이를 정확히 구분하여 코딩합니다."
            }
          ]
        ]
      }
    ]
  },
  {
    id: 106,
    title: "UNIT 6\n파라미터 튜닝과 파이프라인",
    nodes: [
      {
        id: "node_ml_6_1",
        title: "과적합과 일반화",
        description: "모델이 기출문제에만 너무 집착해서 새로운 문제를 틀리는 '과적합' 현상에 대해 알아봅니다.",
        guidebook: [
          "과적합(Overfitting): 학습 데이터에만 너무 과도하게 맞춰져 있어서, 평가용(Test) 데이터나 실제 데이터에서 성능이 떨어지는 현상입니다.",
          "과소적합(Underfitting): 학습 데이터조차 제대로 학습하지 못한 상태입니다.",
          "일반화(Generalization): 과적합을 피하고, 훈련용 데이터와 테스트용 데이터 모두에서 고르게 좋은 성능을 내는 가장 이상적인 상태입니다.",
          "이를 방지하기 위해 데이터를 교차 검증하거나 규제(Regularization)를 적용합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 모델이 학습용 기출문제는 100점을 맞지만, 새로운 시험문제는 다 틀려버리는 현상을 무엇이라고 하나요?",
              sentenceParts: [
                "모델이 학습 데이터의 노이즈까지 지나치게 암기해버린 상태를 ",
                " 현상이라고 부릅니다."
              ],
              wordBank: [
                "과적합(Overfitting)",
                "일반화(Generalization)",
                "과소적합(Underfitting)"
              ],
              answer: [
                "과적합(Overfitting)"
              ],
              hint: "과하게 적합되었다는 뜻입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 훈련 데이터와 평가 데이터 모두에서 적절하고 안정적인 성능을 내는 가장 이상적인 모델의 상태는?",
              options: [
                "과적합",
                "과소적합",
                "일반화",
                "최적화"
              ],
              answer: 2,
              hint: "일반적으로(어떤 데이터가 들어와도) 잘 작동한다는 의미입니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_6_2",
        title: "교차 검증과 하이퍼파라미터 튜닝",
        description: "데이터를 여러 조각으로 나누어 돌려가며 평가하고, 최적의 모델 설정을 찾습니다.",
        guidebook: [
          "K-Fold 교차 검증: 데이터를 K개의 폴드(조각)로 나누어, 한 조각을 검증용으로 쓰고 나머지를 학습용으로 쓰면서 K번 반복 평가합니다.",
          "하이퍼파라미터: 모델 학습 전에 사람이 직접 설정해줘야 하는 옵션값입니다. (예: 트리의 최대 깊이, 이웃의 개수 등)",
          "그리드 서치(GridSearchCV): 사람이 입력한 여러 하이퍼파라미터 후보군을 모두 조합하여 교차 검증을 통해 최적의 값을 자동으로 찾아줍니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 데이터를 여러 조각으로 쪼개고, 각 조각을 한 번씩 평가 세트로 사용하여 모델을 여러 번 평가하는 기법은?",
              options: [
                "하이퍼파라미터 튜닝",
                "교차 검증 (Cross Validation)",
                "그리드 서치",
                "원-핫 인코딩"
              ],
              answer: 1,
              hint: "데이터를 교차로 번갈아가며 검증한다는 뜻입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 다음 빈칸을 채워보세요.",
              sentenceParts: [
                "사용자가 지정한 하이퍼파라미터 조합을 모두 테스트하여 최적의 파라미터를 자동으로 찾아주는 사이킷런의 클래스는 ",
                " 입니다."
              ],
              wordBank: [
                "GridSearchCV",
                "RandomForest",
                "KFold"
              ],
              answer: [
                "GridSearchCV"
              ],
              hint: "격자(Grid)처럼 모든 경우의 수를 검색(Search)합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_6_3",
        title: "파이프라인 (Pipeline)",
        description: "데이터 전처리와 모델 학습 과정을 하나의 흐름으로 묶어 코드를 깔끔하고 안전하게 만듭니다.",
        guidebook: [
          "스케일링, 인코딩 등의 전처리와 모델 학습을 각각 따로 하면 코드가 복잡해지고 실수(Data Leakage)가 발생하기 쉽습니다.",
          "Pipeline을 사용하면 전처리기와 예측 모델을 마치 하나의 객체처럼 묶을 수 있습니다.",
          "묶인 파이프라인 객체 하나에 fit()과 predict()를 호출하면, 내부에 설정된 순서대로 데이터가 자동으로 흘러갑니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 전처리(예: 스케일러)와 예측 모델(예: 분류기)을 연속된 하나의 흐름으로 묶어주는 기능은?",
              options: [
                "Pipeline (파이프라인)",
                "GridSearch (그리드 서치)",
                "Ensemble (앙상블)",
                "Validation (검증)"
              ],
              answer: 0,
              hint: "물 파이프처럼 데이터가 한쪽으로 들어가 쭉 흘러나오는 흐름입니다."
            },
            {
              type: "quiz_code",
              content: "[실습 1] Pipeline 기초 문법 이해하기",
              initialCode: "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.tree import DecisionTreeClassifier\n\n# 1) 스케일러와 분류기를 순서대로 묶은 Pipeline을 만드세요\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('model', DecisionTreeClassifier())\n])\n\n# 파이프라인의 총 단계 개수를 출력하세요\nprint(len(pipe.steps))",
              expectedOutputs: [
                "2"
              ],
              hint: "파이프라인 안에는 scaler와 model 2단계가 리스트 형태로 들어있습니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_6_4",
        title: "튜닝과 파이프라인 보스전",
        description: "전처리 파이프라인과 그리드 서치를 결합하여, 가장 완벽하게 최적화된 머신러닝 파이프라인을 구축하세요.",
        guidebook: [
          "이전 단계에서 배운 파이프라인(Pipeline)과 그리드 서치(GridSearchCV)를 함께 사용합니다.",
          "파이프라인 안의 모델의 파라미터를 튜닝할 때는, 파이프라인에 지정한 이름(예: 'model') 뒤에 '__'(언더바 두개)를 붙이고 파라미터 이름을 적어야 합니다.",
          "예: 'model__max_depth'"
        ],
        lessons: [
          [
             {
              type: "quiz_multiple_choice",
              content: "[보스전 1] Pipeline과 GridSearchCV를 함께 사용할 때, Pipeline 안의 'dt'라는 이름의 결정 트리 모델의 'max_depth' 파라터를 설정하는 딕셔너리 키(key) 이름은?",
              options: [
                "dt_max_depth",
                "dt.max_depth",
                "dt__max_depth",
                "max_depth"
              ],
              answer: 2,
              hint: "파이프라인 요소 이름 뒤에 언더바 두 개(__)를 연결해야 접근 가능합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[최종 관문] 최적의 파라미터 찾기",
              initialCode: "from sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import GridSearchCV\n\niris = load_iris()\nX, y = iris.data, iris.target\n\n# 1) 모델 생성\ndt = DecisionTreeClassifier(random_state=42)\n\n# 2) 찾고자 하는 파라미터 후보군 작성 (max_depth 1~3)\nparams = {'max_depth': [1, 2, 3]}\n\n# 3) GridSearchCV 생성 및 학습 (cv=3)\ngrid = GridSearchCV(dt, param_grid=params, cv=3)\ngrid.fit(X, y)\n\n# 4) 찾은 가장 최적의 파라미터를 출력하세요\nprint(grid.best_params_)",
              expectedOutputs: [
                "{'max_depth': 2}"
              ],
              hint: "그리드 서치 객체 안의 best_params_ 속성에 가장 결과가 좋았던 파라미터가 딕셔너리로 저장됩니다."
            }
          ]
        ]
      }
    ]
  }
];
