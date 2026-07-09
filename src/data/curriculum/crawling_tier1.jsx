// ==========================================
// 웹 크롤링 트랙 Tier 1
// ==========================================

export const crawling_tier1 = [
  {
    id: 401,
    title: "UNIT 1\n웹 크롤링 필수 도구 마스터",
    nodes: [
      {
        id: "node_cr_1_1",
        title: "개발자 도구와 HTML 구조 파악",
        description: "크롤링의 첫걸음은 웹 브라우저의 구조를 뜯어보는 것입니다. F12 개발자 도구를 활용해 HTML 태그의 비밀을 파헤쳐 봅시다.",
        guidebook: [
          "HTML은 웹 페이지의 뼈대입니다. <h1>은 제목, <a>는 링크, <div>는 구역을 나눕니다.",
          "크롬 등 브라우저에서 [F12] 키를 누르면 나오는 개발자 도구(Elements 탭)를 통해 원하는 글씨가 어떤 태그(Tag)와 클래스(Class)에 싸여 있는지 확인할 수 있습니다.",
          "원하는 정보를 가져오려면 '클래스 이름(class name)'이나 '아이디(id)' 같은 고유한 주소를 알아내는 것이 가장 중요합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 웹 페이지에서 내가 가져오고 싶은 글자(예: 뉴스 제목)가 어떤 HTML 코드로 작성되어 있는지 확인하려면 크롬에서 어떤 단축키를 눌러야 하나요?",
              options: [
                "F5 (새로고침)",
                "F12 (개발자 도구)",
                "Ctrl + C (복사)",
                "Alt + F4 (종료)"
              ],
              answer: 1,
              hint: "개발자들을 위한 만능 도구를 여는 마법의 키입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 다음 HTML 태그 중 다른 웹사이트나 페이지로 이동할 수 있는 '하이퍼링크'를 담고 있는 태그는 무엇인가요?",
              options: [
                "<img>",
                "<div>",
                "<a>",
                "<h1>"
              ],
              answer: 2,
              hint: "Anchor(닻)의 약자입니다."
            }
          ]
        ]
      },
      {
        id: "node_cr_1_2",
        title: "Requests 라이브러리로 데이터 가져오기",
        description: "파이썬 코드를 통해 웹 서버에 접속하고, 화면에 보이는 전체 HTML 소스 코드를 통째로 다운로드해 봅니다.",
        guidebook: [
          "requests.get('URL 주소'): 해당 웹사이트에 접속하여 데이터를 달라고 요청합니다.",
          "응답 상태 코드(Status Code)가 200이면 정상적으로 데이터를 받아온 것입니다. (404는 페이지 없음, 500은 서버 에러)",
          "받아온 데이터의 내용은 response.text 에 HTML 문자열 형태로 담겨 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 특정 웹사이트의 주소(URL)로 접속하여 데이터를 가져올 때 사용하는 requests 모듈의 함수는 무엇인가요?",
              sentenceParts: [
                "웹 페이지의 정보를 가져오려면 requests.",
                "() 함수를 사용합니다."
              ],
              wordBank: [
                "get",
                "post",
                "fetch"
              ],
              answer: [
                "get"
              ],
              hint: "데이터를 '가져오다'라는 뜻의 영어 단어입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 2] 웹 서버에 요청을 보냈을 때 '요청이 성공적으로 처리되었음'을 의미하는 상태 코드는 무엇인가요?",
              options: [
                "404",
                "500",
                "200",
                "403"
              ],
              answer: 2,
              hint: "오케이(OK)를 뜻하는 가장 기분 좋은 숫자입니다."
            }
          ]
        ]
      },
      {
        id: "node_cr_1_3",
        title: "BeautifulSoup으로 예쁘게 파싱하기",
        description: "컴퓨터는 HTML을 단순한 문자열 덩어리로 봅니다. BeautifulSoup을 이용해 이 문자열을 의미 있는 데이터로 정밀하게 잘라냅니다.",
        guidebook: [
          "파싱(Parsing): 단순한 텍스트 덩어리를 분석하기 쉬운 구조(태그 단위)로 해체하는 작업입니다.",
          "soup = BeautifulSoup(html_text, 'html.parser'): 문자열을 요리하기 쉬운 객체로 만듭니다.",
          "soup.find('태그명', class_='클래스명'): 조건에 맞는 첫 번째 요소를 찾습니다.",
          "요소.text 를 통해 양옆의 껍데기(태그)를 모두 벗기고 순수한 글자만 추출할 수 있습니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[실습 1] HTML 문자열 파싱해서 제목 뽑기",
              initialCode: "from bs4 import BeautifulSoup\n\n# 1. 서버에서 받아온 가상의 HTML 문자열\nhtml_doc = \"\"\"\n<html>\n  <body>\n    <h1 class='news-title'>오늘의 코딩에그 날씨는 맑음!</h1>\n    <div class='content'>코딩하기 참 좋은 날씨입니다.</div>\n  </body>\n</html>\n\"\"\"\n\n# 2. BeautifulSoup 객체로 변환 (html.parser 사용)\nsoup = BeautifulSoup(html_doc, 'html.parser')\n\n# 3. h1 태그이면서 클래스가 'news-title'인 요소를 찾으세요\ntitle_element = \n\n# 4. 태그 껍데기를 벗기고 안쪽의 순수 글자(text)만 출력하세요\nprint(title_element.text)",
              expectedOutputs: [
                "오늘의 코딩에그 날씨는 맑음!"
              ],
              hint: "title_element = soup.find('h1', class_='news-title') 을 작성합니다."
            }
          ]
        ]
      },
      {
        id: "node_cr_1_4",
        title: "동적 웹사이트와 Selenium 개념",
        description: "클릭을 하거나 스크롤을 내려야만 나타나는 데이터(동적 데이터)를 수집하기 위한 셀레니움(Selenium)의 개념을 알아봅니다.",
        guidebook: [
          "requests와 BeautifulSoup은 화면에 처음에 그려진 내용만 수집할 수 있습니다.",
          "요즘 웹사이트들은 자바스크립트를 이용해 버튼을 누르거나 스크롤을 내릴 때 데이터를 비로소 보여줍니다.",
          "이럴 때는 진짜 크롬 브라우저를 띄워 파이썬으로 봇(Bot)처럼 조종하는 Selenium을 사용해야 합니다.",
          "주의: 브라우저 내부(Pyodide) 환경에서는 진짜 브라우저 창을 띄우는 Selenium 실습이 불가능하므로, 실제 PC의 VSCode 환경에서 실무용으로 많이 씁니다."
        ],
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 자바스크립트로 렌더링되거나 로그인이 필요한 복잡한 웹사이트에서, 실제 브라우저를 띄워 사람처럼 클릭하고 스크롤하며 데이터를 수집할 때 사용하는 라이브러리는?",
              options: [
                "Selenium",
                "BeautifulSoup",
                "Requests",
                "Pandas"
              ],
              answer: 0,
              hint: "원소 기호 Se로 시작하는 강력한 브라우저 자동화 도구입니다."
            }
          ]
        ]
      }
    ]
  },
  {
    id: 402,
    title: "UNIT 2\n실전 크롤링의 핵심 기술",
    nodes: [
      {
        id: "node_cr_2_1",
        title: "리스트 크롤링 (다중 요소 추출)",
        description: "웹 페이지에는 수십 개의 기사 제목이나 상품들이 나열되어 있습니다. 이 모든 것들을 한 번에 리스트(배열)로 뽑아내 봅니다.",
        guidebook: [
          "soup.find()는 조건에 맞는 가장 첫 번째 요소 1개만 찾아줍니다.",
          "soup.find_all()은 조건에 맞는 모든 요소를 찾아 리스트 형태로 반환합니다.",
          "리스트로 반환된 요소들은 for 반복문을 사용하여 하나씩 꺼내어 .text를 추출해야 합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[실습 1] 베스트셀러 도서 목록 한 번에 가져오기",
              initialCode: "from bs4 import BeautifulSoup\n\nhtml_doc = \"\"\"\n<ul class='book-list'>\n  <li class='item'>파이썬 기초</li>\n  <li class='item'>머신러닝 정석</li>\n  <li class='item'>웹 크롤링 바이블</li>\n</ul>\n\"\"\"\nsoup = BeautifulSoup(html_doc, 'html.parser')\n\n# 1) li 태그이면서 클래스가 'item'인 모든 요소를 찾으세요 (find_all 사용)\nitems = \n\n# 2) for문을 돌면서 각 요소의 글자(text)만 출력하세요\nfor item in items:\n    print(item.text)",
              expectedOutputs: [
                "파이썬 기초\n머신러닝 정석\n웹 크롤링 바이블"
              ],
              hint: "items = soup.find_all('li', class_='item') 을 작성합니다."
            }
          ]
        ]
      },
      {
        id: "node_cr_2_2",
        title: "여러 페이지 긁어오기 (Pagination)",
        description: "1페이지뿐만 아니라 2페이지, 3페이지... 끝까지 자동으로 URL을 바꾸어가며 크롤링하는 반복 기법을 배웁니다.",
        guidebook: [
          "게시판이나 쇼핑몰 리스트는 보통 URL 뒤에 '?page=1', '?page=2' 형식으로 페이지 번호가 붙습니다.",
          "파이썬의 문자열 포매팅(f-string)과 for 반복문을 결합하면 자동으로 수십 페이지의 URL을 생성할 수 있습니다."
        ],
        lessons: [
          [
             {
              type: "quiz_code",
              content: "[실습 1] 동적 URL 생성기",
              initialCode: "# 웹사이트의 기본 주소입니다\nbase_url = \"https://codingegg.com/news?page=\"\n\n# 1페이지부터 3페이지까지 URL을 자동으로 만들어 출력하세요\n# range 함수를 사용해 보세요\nfor page in range(1, 4):\n    # base_url과 page 번호를 합쳐 url을 만드세요 (힌트: f-string 또는 str())\n    url = \n    print(url)",
              expectedOutputs: [
                "https://codingegg.com/news?page=1\nhttps://codingegg.com/news?page=2\nhttps://codingegg.com/news?page=3"
              ],
              hint: "url = f\"{base_url}{page}\" 또는 url = base_url + str(page) 를 작성합니다."
            }
          ]
        ]
      },
      {
        id: "node_cr_2_3",
        title: "수집한 데이터 예쁘게 저장하기 (CSV)",
        description: "메모리에만 있던 데이터를 엑셀로 열어볼 수 있도록 CSV 파일로 영구 저장하는 방법을 배웁니다.",
        guidebook: [
          "csv 패키지를 사용하거나, Pandas의 DataFrame을 사용하면 매우 쉽게 데이터를 파일로 저장할 수 있습니다.",
          "크롤링한 데이터를 [ [제목1, 가격1], [제목2, 가격2] ... ] 형태의 2차원 리스트로 모아두는 것이 좋습니다."
        ],
        lessons: [
          [
             {
              type: "quiz_code",
              content: "[실습 1] Pandas로 CSV 저장 맛보기",
              initialCode: "import pandas as pd\n\n# 크롤링으로 수집한 2차원 데이터라고 가정합니다.\nscraped_data = [\n    ['아이폰 15', 1200000],\n    ['갤럭시 S24', 1100000]\n]\n\n# 1) 수집한 데이터를 '제품명', '가격' 컬럼(columns)을 가진 데이터프레임으로 만드세요\ndf = pd.DataFrame(scraped_data, columns=['제품명', '가격'])\n\n# 데이터프레임의 내용을 출력해봅니다.\nprint(df)\n\n# (실제 환경에서는 df.to_csv('result.csv', index=False) 로 저장합니다!)",
              expectedOutputs: [
                "       제품명       가격\n0   아이폰 15  1200000\n1  갤럭시 S24  1100000"
              ],
              hint: "df = pd.DataFrame(...) 코드는 이미 완성되어 있습니다. 코드를 확인하고 실행해 보세요!"
            }
          ]
        ]
      },
      {
        id: "node_cr_2_4",
        title: "서버가 아프지 않게 매너 지키기 (time.sleep)",
        description: "파이썬의 속도는 엄청나게 빠릅니다. 0.01초 만에 수십 번의 요청을 보내면 상대방 서버가 다운되거나 내 IP가 차단당합니다.",
        guidebook: [
          "time.sleep(초): 파이썬 프로그램을 지정한 초만큼 잠깐 멈추게(재우게) 합니다.",
          "크롤링을 할 때는 반복문 안에 무조건 time.sleep(1) 정도를 넣어서 서버에 휴식 시간을 주는 것이 불문율이자 '매너'입니다.",
          "예기치 못한 태그 변경이나 네트워크 에러로 프로그램이 죽지 않도록 try-except (예외 처리)를 적용하는 것도 매우 중요합니다."
        ],
        lessons: [
          [
             {
              type: "quiz_multiple_choice",
              content: "[개념 확인 1] 크롤링 봇이 너무 빠른 속도로 서버에 접속하여 디도스(DDoS) 공격처럼 인식되거나 IP가 차단되는 것을 막기 위해, 반복문 사이에 강제로 휴식 시간을 부여하는 함수는?",
              options: [
                "time.stop(1)",
                "time.wait(1)",
                "time.sleep(1)",
                "time.pause(1)"
              ],
              answer: 2,
              hint: "잠을 자게 만든다는 뜻입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 만약 50페이지를 크롤링하다가 23페이지에서 HTML 태그가 잘못되어 에러가 났을 때, 프로그램 전체가 종료되지 않고 '에러 무시하고 다음 페이지로 넘어가'라고 지시하는 파이썬 문법은?",
              sentenceParts: [
                "에러가 발생할 가능성이 있는 코드를 ",
                " - ",
                " 블록으로 감싸서 안전하게 처리합니다."
              ],
              wordBank: [
                "try",
                "except",
                "if"
              ],
              answer: [
                "try",
                "except"
              ],
              hint: "일단 '시도'해보고, 에러가 나면 '예외' 처리합니다."
            }
          ]
        ]
      }
    ]
  }
];
