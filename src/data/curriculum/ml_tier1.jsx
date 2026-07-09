// ==========================================
// 머신러닝 트랙 Tier 1 (Pandas & 시각화)
// ==========================================

export const ml_tier1 = [
  {
    id: 101,
    title: "UNIT 1\nPandas 정형 데이터 분석",
    nodes: [
      {
        id: "node_ml_1_1",
        title: "Pandas Series (시리즈)",
        description: "1차원 데이터를 다루는 엑셀의 한 '열(Column)'과 같은 Pandas의 핵심 데이터 구조를 배웁니다.",
        guidebook: [
          "Pandas는 파이썬에서 표(Table) 형태의 데이터를 다루는 가장 빠르고 강력한 라이브러리입니다.",
          "Series(시리즈)는 1차원 데이터와 그 데이터의 이름표(Index)로 구성된 자료구조입니다.",
          "파이썬 리스트나 딕셔너리를 활용하여 쉽게 Series를 만들 수 있습니다.",
          "인덱스(Index)를 지정하면 숫자가 아닌 문자열로도 데이터를 직관적으로 조회할 수 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] Pandas에서 1차원 형태의 배열 자료구조를 뜻하는 용어는 무엇인가요?",
              options: [
                "DataFrame (데이터프레임)",
                "Series (시리즈)",
                "Array (어레이)",
                "Dictionary (딕셔너리)"
              ],
              answer: 1,
              hint: "연속된 데이터의 나열을 의미하는 영어 단어입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] Pandas를 임포트할 때 관례적으로 사용하는 줄임말은 무엇인가요?",
              sentenceParts: [
                "파이썬 데이터 분석가들은 관례적으로 import pandas as ",
                " 라고 줄여서 사용합니다."
              ],
              wordBank: [
                "pd",
                "pan",
                "np"
              ],
              answer: [
                "pd"
              ],
              hint: "Pandas의 앞글자를 딴 두 글자입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 기본 Series 생성하기",
              initialCode: "import pandas as pd\n\n# 파이썬 리스트를 사용하여 Series 객체를 생성하세요\ndata = [10, 20, 30, 40]\ns = \n\n# s의 값을 출력하세요\nprint(s.values)",
              expectedOutputs: [
                "[10 20 30 40]"
              ],
              hint: "s = pd.Series(data) 를 사용합니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 2] 사용자 지정 인덱스가 있는 Series 생성",
              initialCode: "import pandas as pd\n\n# 각 과일의 가격 데이터를 Series로 만듭니다. (인덱스는 과일 이름)\nprices = [1000, 2500, 3000]\nfruits = ['사과', '바나나', '수박']\n\n# data는 prices, index는 fruits로 지정하여 Series를 생성하세요\ns = \n\n# '바나나'의 가격만 조회하여 출력하세요\n",
              expectedOutputs: [
                "2500"
              ],
              hint: "s = pd.Series(data=prices, index=fruits) 로 생성 후 print(s['바나나']) 로 조회합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_1_2",
        title: "Pandas DataFrame (데이터프레임)",
        description: "엑셀 시트와 완벽히 동일한 2차원 표 형태의 자료구조인 DataFrame을 자유자재로 다룹니다.",
        guidebook: [
          "DataFrame은 행(Row)과 열(Column)로 이루어진 2차원 자료구조입니다.",
          "수많은 Series(열)들이 모여 하나의 DataFrame을 이룹니다.",
          "csv, excel 파일을 읽어오거나 딕셔너리를 활용해 DataFrame을 생성할 수 있습니다.",
          "df.head()로 앞부분을, df.info()로 데이터의 요약 정보를 빠르게 확인할 수 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 행(Row)과 열(Column)로 구성된 2차원 테이블 형태의 자료구조를 무엇이라고 부르나요?",
              options: [
                "Pandas Series",
                "Pandas DataFrame",
                "Numpy Array",
                "Python Dictionary"
              ],
              answer: 1,
              hint: "데이터(Data)를 담는 틀(Frame)이라는 뜻입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 아주 큰 데이터프레임을 불러왔을 때, 전체 데이터를 다 출력하면 너무 깁니다. 상위 5개의 행만 간략히 확인하는 함수는 무엇인가요?",
              options: [
                "df.tail()",
                "df.top()",
                "df.head()",
                "df.info()"
              ],
              answer: 2,
              hint: "데이터의 '머리(윗부분)'를 본다는 의미의 함수입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 딕셔너리로 DataFrame 만들기",
              initialCode: "import pandas as pd\n\n# 학생들의 국어, 영어 점수를 딕셔너리로 구성합니다\ndata = {\n    '이름': ['김철수', '이영희', '박지민'],\n    '국어': [90, 85, 100],\n    '영어': [88, 95, 92]\n}\n\n# 위 data를 활용하여 DataFrame을 생성하세요\ndf = \n\n# 데이터프레임의 열(Column) 이름들을 출력하세요\n",
              expectedOutputs: [
                "Index(['이름', '국어', '영어'], dtype='object')"
              ],
              hint: "df = pd.DataFrame(data) 생성 후 print(df.columns) 를 호출합니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 2] 특정 열(Column) 및 행(Row) 데이터 선택하기",
              initialCode: "import pandas as pd\n\ndata = {'이름': ['A', 'B', 'C'], '나이': [20, 25, 30], '키': [170, 180, 165]}\ndf = pd.DataFrame(data)\n\n# 1) '나이' 열만 선택해서 출력하세요 (Series 형태로 출력됩니다)\nprint()\n\n# 2) '나이'가 25 이상인 사람들의 데이터만 필터링해서 출력하세요\nprint()",
              expectedOutputs: [
                "0    20\n1    25\n2    30\nName: 나이, dtype: int64\n  이름  나이    키\n1  B  25  180\n2  C  30  165"
              ],
              hint: "1) df['나이']  2) df[df['나이'] >= 25] 를 사용합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_1_3",
        title: "데이터 정렬 및 집계 (Groupby)",
        description: "복잡한 데이터를 조건에 맞게 정렬하고, 그룹별로 묶어 평균이나 합계를 구하는 강력한 분석 기능을 배웁니다.",
        guidebook: [
          "sort_values(): 데이터를 특정 열 기준으로 오름차순 또는 내림차순 정렬합니다.",
          "groupby(): 성별, 부서별, 지역별 등 데이터를 그룹으로 묶어 분석할 때 사용합니다.",
          "집계 함수: groupby() 뒤에 .mean()(평균), .sum()(합계), .count()(개수) 등을 붙여 그룹별 결과를 얻어냅니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 특정 열을 기준으로 표의 순서를 가지런히 정렬할 때 사용하는 Pandas 함수는 무엇인가요?",
              sentenceParts: [
                "데이터를 값 기준으로 정렬할 때는 df.",
                "() 함수를 사용합니다."
              ],
              wordBank: [
                "sort_values",
                "order_by",
                "align_data"
              ],
              answer: [
                "sort_values"
              ],
              hint: "값(values)을 기준으로 정렬(sort)한다는 뜻입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] '남녀별 평균 연봉', '부서별 총 지출' 처럼 특정 그룹을 묶어서 계산할 때 사용하는 핵심 함수는?",
              options: [
                "df.aggregate()",
                "df.group()",
                "df.groupby()",
                "df.summary()"
              ],
              answer: 2,
              hint: "~를 기준으로 그룹(group)을 묶는다(by)는 의미의 함수입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 데이터 내림차순 정렬",
              initialCode: "import pandas as pd\n\ndf = pd.DataFrame({'이름': ['A', 'B', 'C'], '점수': [80, 95, 88]})\n\n# '점수'를 기준으로 내림차순(가장 높은 점수가 위로) 정렬하여 출력하세요\n",
              expectedOutputs: [
                "  이름  점수\n1  B  95\n2  C  88\n0  A  80"
              ],
              hint: "print(df.sort_values(by='점수', ascending=False)) 를 사용합니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 2] 그룹별 집계 (Groupby)",
              initialCode: "import pandas as pd\n\n# 부서별 직원들의 월급 데이터입니다\ndf = pd.DataFrame({\n    '부서': ['개발', '개발', '영업', '영업', '기획'],\n    '월급': [500, 600, 400, 450, 400]\n})\n\n# '부서'별로 묶어서 '월급'의 평균(mean)을 구하여 출력하세요\n",
              expectedOutputs: [
                "부서\n기획    400.0\n개발    550.0\n영업    425.0\nName: 월급, dtype: float64"
              ],
              hint: "print(df.groupby('부서')['월급'].mean()) 을 사용하면 됩니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_1_4",
        title: "DataFrame 합치기",
        description: "여러 개의 조각난 데이터프레임 파일들을 병합(Merge)하고 이어 붙여(Concat) 하나의 거대한 데이터로 만듭니다.",
        guidebook: [
          "concat(): 엑셀 시트 두 개를 위아래(수직) 또는 양옆(수평)으로 단순하게 이어 붙일 때 사용합니다.",
          "merge(): 두 데이터프레임 간의 '공통된 열(Key)'을 기준으로 데이터를 연결(조인)할 때 사용합니다. (SQL의 JOIN과 동일)",
          "실무에서는 회원 정보 파일과 구매 내역 파일을 '회원ID'를 기준으로 병합(Merge)하는 경우가 아주 많습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 단순하게 두 개의 표를 복사해서 위아래로 길게 이어 붙이려고 합니다. 가장 적합한 함수는 무엇인가요?",
              options: [
                "pd.merge()",
                "pd.concat()",
                "pd.join()",
                "pd.append()"
              ],
              answer: 1,
              hint: "연결(Concatenate)하다의 앞글자를 딴 함수입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 다음 빈칸을 채워보세요.",
              sentenceParts: [
                "두 데이터프레임에 공통으로 존재하는 열(예: 회원번호)을 기준으로 데이터를 합칠 때는 ",
                "() 함수를 사용합니다."
              ],
              wordBank: [
                "merge",
                "concat",
                "groupby"
              ],
              answer: [
                "merge"
              ],
              hint: "병합하다, 융합하다라는 뜻의 영어 단어입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] 공통 키를 이용한 데이터 병합(Merge)",
              initialCode: "import pandas as pd\n\n# 학생 기본 정보\ndf_info = pd.DataFrame({'학생ID': [1, 2, 3], '이름': ['김철수', '이영희', '홍길동']})\n# 학생 시험 점수\ndf_score = pd.DataFrame({'학생ID': [1, 2, 4], '점수': [90, 85, 100]})\n\n# 두 데이터프레임을 '학생ID' 기준으로 병합(merge)하여 출력하세요 (기본값인 inner join으로 자동 수행됩니다)\n",
              expectedOutputs: [
                "   학생ID   이름  점수\n0     1  김철수  90\n1     2  이영희  85"
              ],
              hint: "print(pd.merge(df_info, df_score, on='학생ID'))"
            }
          ]
        ]
      },
      {
        id: "node_ml_1_5",
        title: "Pandas 마스터 보스전",
        description: "Pandas의 생성, 필터링, 정렬, 집계, 병합 모든 기술을 활용하여 복합적인 데이터 분석 미션을 완수하세요.",
        guidebook: [
          "지금까지 배운 Pandas 기술들은 실무 데이터 분석가의 가장 중요한 무기입니다.",
          "문제를 순차적으로 읽고 하나씩 차근차근 변수에 담아가며 해결해 보세요."
        ],
        lessons: [
          [
             {
              type: "quiz_code",
              content: "[보스전] 종합 데이터 분석 파이프라인",
              initialCode: "import pandas as pd\n\n# 1. 구매 내역 데이터\nsales = pd.DataFrame({\n    '유저ID': [101, 102, 101, 103, 102],\n    '구매액': [5000, 10000, 15000, 3000, 20000]\n})\n\n# 2. 유저 정보 데이터\nusers = pd.DataFrame({\n    '유저ID': [101, 102, 103],\n    '등급': ['VIP', 'GOLD', 'SILVER']\n})\n\n# 미션 1: sales와 users를 '유저ID' 기준으로 병합(merge)하세요 (merged_df 변수)\n\n\n# 미션 2: merged_df에서 '등급'별로 '구매액'의 총합(sum)을 계산하세요\n\n\n# 결과를 출력하세요",
              expectedOutputs: [
                "등급\nGOLD      30000\nSILVER     3000\nVIP       20000\nName: 구매액, dtype: int64"
              ],
              hint: "merged_df = pd.merge(sales, users, on='유저ID')\nprint(merged_df.groupby('등급')['구매액'].sum())"
            }
          ]
        ]
      }
    ]
  },
  {
    id: 102,
    title: "UNIT 2\n데이터 시각화 (Matplotlib)",
    nodes: [
      {
        id: "node_ml_2_1",
        title: "시각화 기초 및 matplotlib 개요",
        description: "숫자로만 된 복잡한 데이터를 한눈에 파악하기 위해 그래프로 그리는 도구인 Matplotlib을 시작합니다.",
        guidebook: [
          "Matplotlib은 파이썬 데이터 시각화의 가장 표준이 되는 라이브러리입니다.",
          "pyplot 모듈을 주로 사용하며, 관례적으로 import matplotlib.pyplot as plt 로 줄여 씁니다.",
          "plt.plot()으로 그리고, 반드시 plt.show()를 호출해야 화면에 출력됩니다.",
          "그래프에 제목(title), X/Y축 라벨(xlabel, ylabel)을 달아 정보를 명확히 할 수 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] Matplotlib에서 그래프를 그리는 가장 핵심 모듈(pyplot)을 가져올 때 사용하는 표준 줄임말은?",
              options: [
                "mpl",
                "plt",
                "mat",
                "plot"
              ],
              answer: 1,
              hint: "pyplot의 앞뒤 글자를 따서 만든 세 글자입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 코드로 그린 그래프를 최종적으로 팝업창이나 화면에 렌더링(출력)하기 위해 마지막에 호출하는 함수는?",
              sentenceParts: [
                "그래프 작성이 끝나면 항상 plt.",
                "() 함수를 호출하여 그림을 화면에 띄웁니다."
              ],
              wordBank: [
                "draw",
                "show",
                "display"
              ],
              answer: [
                "show"
              ],
              hint: "화면에 '보여준다'는 뜻의 영어 단어입니다."
            }
          ],
          [
            {
              type: "quiz_code",
              content: "[실습 1] Matplotlib 기본 선 그래프 그리기",
              initialCode: "import matplotlib.pyplot as plt\n\n# 요일별 온도 데이터입니다.\ndays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']\ntemps = [22, 24, 23, 26, 25]\n\n# 1) days를 X축으로, temps를 Y축으로 하는 선 그래프를 그리세요\n\n\n# 2) 그래프를 화면에 출력하세요\n",
              expectedOutputs: [
                ""
              ],
              hint: "plt.plot(days, temps) 작성 후 plt.show()를 호출합니다. (실제 화면에는 데이터 렌더링 환경상 그래프가 보이지 않을 수 있지만 코드는 정상 실행됩니다!)"
            }
          ]
        ]
      },
      {
        id: "node_ml_2_2",
        title: "주요 그래프 (선, 막대, 산점도)",
        description: "데이터의 성격에 따라 선 그래프, 막대 그래프, 산점도 등 가장 적합한 형태의 차트를 선택해 그리는 방법을 배웁니다.",
        guidebook: [
          "선 그래프(Line Plot, plt.plot): 시간에 따른 변화(주가, 기온 등)의 추세를 볼 때 유용합니다.",
          "막대 그래프(Bar Chart, plt.bar): 그룹별 데이터의 크기를 비교할 때 사용합니다. (성별 인구수 등)",
          "산점도(Scatter Plot, plt.scatter): 두 변수 간의 관계나 분포(상관관계)를 점으로 찍어 파악할 때 유용합니다. (키와 몸무게의 관계 등)",
          "히스토그램(Histogram, plt.hist): 데이터가 어떤 구간에 많이 몰려있는지 분포를 볼 때 사용합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] '학생들의 수학 점수와 영어 점수 사이에 연관성이 있을까?'를 확인하기 위해 두 점수를 X, Y축으로 두고 점으로 흩뿌려 그리는 가장 적합한 그래프는?",
              options: [
                "선 그래프 (Line plot)",
                "막대 그래프 (Bar chart)",
                "산점도 (Scatter plot)",
                "원형 차트 (Pie chart)"
              ],
              answer: 2,
              hint: "데이터가 퍼져있는(Scatter) 형태를 보는 그래프입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] '월별 아이스크림 판매량' 처럼 시간이 흐름에 따라 수치가 오르고 내리는 '추세'를 가장 직관적으로 보여주는 그래프는?",
              options: [
                "선 그래프 (Line plot)",
                "산점도 (Scatter plot)",
                "히스토그램 (Histogram)",
                "박스 플롯 (Box plot)"
              ],
              answer: 0,
              hint: "점들을 선(Line)으로 이어서 그립니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[실습 1] 막대 그래프와 산점도 이해하기",
              initialCode: "import matplotlib.pyplot as plt\n\nx = [1, 2, 3]\ny = [10, 20, 15]\n\n# 1) x와 y 데이터를 사용하여 막대 그래프(bar)를 그리세요\n\n\n# 2) 이번에는 동일한 데이터로 산점도(scatter)를 그리세요\n\n\n# 그래프 출력 (이 환경에서는 텍스트 결과가 없지만 문법을 확인합니다)\nplt.show()",
              expectedOutputs: [
                ""
              ],
              hint: "plt.bar(x, y) 와 plt.scatter(x, y) 를 순서대로 작성합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_2_3",
        title: "Pandas 시각화 (내장 그래프)",
        description: "복잡한 matplotlib 코드를 짤 필요 없이, Pandas 데이터프레임에서 곧바로 그래프를 뽑아내는 꿀팁을 배웁니다.",
        guidebook: [
          "Pandas는 내부적으로 matplotlib을 품고 있어서, 데이터프레임 객체에서 바로 그래프 함수를 부를 수 있습니다.",
          "df.plot() 은 기본적으로 선 그래프를 그립니다.",
          "df.plot(kind='bar') 또는 df.plot.bar() 를 쓰면 막대 그래프가 즉시 완성됩니다.",
          "데이터 집계(groupby) 후 바로 plot()을 호출하면 완벽한 분석+시각화 파이프라인이 완성됩니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] Pandas DataFrame에서 내부적으로 그래프를 생성하기 위해 직접 호출할 수 있는 공통 메서드는?",
              sentenceParts: [
                "Pandas 데이터프레임 df에 대해 df.",
                "() 함수를 호출하면 즉각적으로 선 그래프가 그려집니다."
              ],
              wordBank: [
                "plot",
                "draw",
                "graph"
              ],
              answer: [
                "plot"
              ],
              hint: "matplotlib의 기본 함수 이름과 동일합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] df.plot() 함수를 사용하여 막대 그래프(Bar Chart)를 그리고 싶다면 어떤 파라미터를 넘겨주어야 하나요?",
              options: [
                "type='bar'",
                "kind='bar'",
                "style='bar'",
                "shape='bar'"
              ],
              answer: 1,
              hint: "어떤 '종류(kind)'의 그래프를 그릴지 지정합니다."
            }
          ]
        ]
      },
      {
        id: "node_ml_2_4",
        title: "시각화 마스터 보스전",
        description: "데이터를 분석하고 적절한 차트로 렌더링하는 전 과정을 머릿속에 정리하며 관문을 통과하세요.",
        guidebook: [
          "훌륭한 데이터 분석가는 데이터의 특성을 파악하고, 그에 가장 잘 맞는 그래프 종류를 선택할 줄 알아야 합니다.",
          "선(추세), 막대(크기 비교), 산점도(상관관계), 히스토그램(분포)의 역할을 명확히 기억하세요."
        ],
        lessons: [
          [
             {
              type: "quiz_multiple_choice",
              content: "[최종 보스] 회사의 부서별 연간 예산 지출 규모를 경영진에게 보고하려고 합니다. 어떤 부서가 돈을 가장 많이 썼는지 한눈에 크기를 비교할 수 있도록 그리기 가장 적절한 차트와, Pandas에서의 호출 코드로 올바른 것은?",
              options: [
                "선 그래프 / df.plot(kind='line')",
                "막대 그래프 / df.plot(kind='bar')",
                "히스토그램 / df.plot(kind='hist')",
                "산점도 / df.plot(kind='scatter')"
              ],
              answer: 1,
              hint: "값의 크고 작음을 한눈에 기둥의 높이로 비교하는 그래프입니다."
            }
          ],
          [
             {
              type: "quiz_code",
              content: "[최종 보스 2] Pandas 내장 시각화로 한번에 그리기",
              initialCode: "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# 간단한 데이터프레임을 생성합니다\ndf = pd.DataFrame({\n    'A': [1, 2, 3],\n    'B': [4, 5, 6]\n})\n\n# df의 데이터로 막대 그래프를 생성하세요 (Pandas 내장 시각화 사용)\n\n\nplt.show()",
              expectedOutputs: [
                ""
              ],
              hint: "df.plot(kind='bar') 또는 df.plot.bar() 를 호출하면 됩니다."
            }
          ]
        ]
      }
    ]
  }
];
