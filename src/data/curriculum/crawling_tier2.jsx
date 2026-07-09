// ==========================================
// 웹 크롤링 트랙 Tier 2
// ==========================================

export const crawling_tier2 = [
  {
    id: 403,
    title: "UNIT 3\nA to Z 실전 프로젝트",
    nodes: [
      {
        id: "node_cr_3_1",
        title: "프로젝트 1: 뉴스 헤드라인 수집기",
        description: "가상의 뉴스 포털 사이트 HTML을 파싱하여, 최신 기사 3개의 제목과 링크를 깔끔하게 추출해 봅니다.",
        guidebook: [
          "1. 웹사이트의 HTML 소스를 받아옵니다 (실습에서는 문자열로 제공).",
          "2. BeautifulSoup으로 HTML을 파싱합니다.",
          "3. find_all()을 이용해 기사를 감싸고 있는 특정 클래스(예: 'news-item')를 모두 찾습니다.",
          "4. for 반복문을 돌며 제목(text)과 링크(href 속성)를 추출합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[실전 1] 뉴스 기사 제목과 링크 추출하기",
              initialCode: "from bs4 import BeautifulSoup\n\n# 가상의 뉴스 웹사이트 HTML 소스\nhtml_doc = \"\"\"\n<div class=\"news-list\">\n    <div class=\"news-item\">\n        <a href=\"/news/1\" class=\"title\">코딩에그, 파이썬 트랙 누적 수강생 1만 명 돌파!</a>\n    </div>\n    <div class=\"news-item\">\n        <a href=\"/news/2\" class=\"title\">AI 시대, 크롤링 기술의 중요성 대두</a>\n    </div>\n    <div class=\"news-item\">\n        <a href=\"/news/3\" class=\"title\">주말 날씨, 전국적으로 맑음... 나들이하기 좋아</a>\n    </div>\n</div>\n\"\"\"\n\nsoup = BeautifulSoup(html_doc, 'html.parser')\n\n# 1) 클래스가 'news-item'인 모든 div 태그를 찾으세요\nitems = \n\n# 2) for문을 돌면서 제목과 링크를 출력하세요\nfor item in items:\n    # item 안에서 a 태그를 찾으세요\n    a_tag = \n    \n    # a_tag의 글자(text)와 href 속성을 가져옵니다 (딕셔너리처럼 ['href'] 사용)\n    title = a_tag.text\n    link = a_tag['href']\n    \n    print(f\"제목: {title}, 링크: {link}\")",
              expectedOutputs: [
                "제목: 코딩에그, 파이썬 트랙 누적 수강생 1만 명 돌파!, 링크: /news/1\n제목: AI 시대, 크롤링 기술의 중요성 대두, 링크: /news/2\n제목: 주말 날씨, 전국적으로 맑음... 나들이하기 좋아, 링크: /news/3"
              ],
              hint: "items = soup.find_all('div', class_='news-item')\na_tag = item.find('a') 를 작성합니다."
            }
          ]
        ]
      },
      {
        id: "node_cr_3_2",
        title: "프로젝트 2: 온라인 서점 가격 비교기",
        description: "책 제목, 저자, 가격 등 하나의 항목 안에 들어있는 여러 가지 정보를 딕셔너리 형태로 묶어 추출하는 고급 기술을 배웁니다.",
        guidebook: [
          "웹사이트의 상품 목록은 보통 하나의 큰 묶음(div 덩어리) 안에 제목, 가격, 평점 등이 각각 흩어져 있습니다.",
          "큰 묶음을 먼저 찾고 (find_all), 그 묶음 안에서 다시 세부 항목들을 찾는 (find) 2단계 구조를 사용합니다."
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[실전 2] 서점 데이터 다중 추출",
              initialCode: "from bs4 import BeautifulSoup\n\nhtml_doc = \"\"\"\n<ul class=\"book-container\">\n    <li class=\"book-card\">\n        <h3 class=\"title\">혼자 공부하는 파이썬</h3>\n        <p class=\"author\">윤인성</p>\n        <span class=\"price\">21,600원</span>\n    </li>\n    <li class=\"book-card\">\n        <h3 class=\"title\">데이터 분석 실무</h3>\n        <p class=\"author\">김데이터</p>\n        <span class=\"price\">25,000원</span>\n    </li>\n</ul>\n\"\"\"\nsoup = BeautifulSoup(html_doc, 'html.parser')\n\n# 빈 리스트 준비 (수집한 데이터를 담을 곳)\nresult = []\n\n# 1) 클래스가 'book-card'인 모든 li 찾기\ncards = \n\n# 2) 반복문을 돌면서 세부 정보 추출\nfor card in cards:\n    title = card.find('h3', class_='title').text\n    # author와 price도 알맞게 추출해보세요\n    author = \n    price = \n    \n    # 딕셔너리로 묶어 리스트에 추가\n    result.append({'제목': title, '저자': author, '가격': price})\n\nprint(result)",
              expectedOutputs: [
                "[{'제목': '혼자 공부하는 파이썬', '저자': '윤인성', '가격': '21,600원'}, {'제목': '데이터 분석 실무', '저자': '김데이터', '가격': '25,000원'}]"
              ],
              hint: "cards = soup.find_all('li', class_='book-card')\nauthor = card.find('p', class_='author').text\nprice = card.find('span', class_='price').text"
            }
          ]
        ]
      },
      {
        id: "node_cr_3_3",
        title: "🔥 크롤링 캡스톤 최종 보스전",
        description: "수집부터 데이터 구조화, 그리고 최종 저장까지 완벽한 흐름을 하나의 파이썬 함수로 통합하는 최종 관문입니다.",
        guidebook: [
          "지금까지 배운 모든 것(BeautifulSoup 객체 생성 -> find_all로 목록 찾기 -> for문으로 세부 정보 추출 -> 2차원 리스트 저장 -> Pandas DataFrame 변환)을 결합합니다.",
          "실제 실무에서도 이와 똑같은 흐름으로 크롤링 코드를 작성합니다!"
        ],
        lessons: [
          [
            {
              type: "quiz_code",
              content: "[최종 보스] 크롤링 자동화 봇 완성하기",
              initialCode: "import pandas as pd\nfrom bs4 import BeautifulSoup\n\nhtml_doc = \"\"\"\n<div class=\"movie-ranking\">\n    <div class=\"movie\">\n        <div class=\"title\">인사이드 아웃 2</div>\n        <div class=\"score\">9.5</div>\n    </div>\n    <div class=\"movie\">\n        <div class=\"title\">파묘</div>\n        <div class=\"score\">8.8</div>\n    </div>\n</div>\n\"\"\"\n\ndef crawl_movies(html_string):\n    # 1) BeautifulSoup 객체 생성\n    soup = \n    \n    # 2) 'movie' 클래스를 가진 태그 모두 찾기\n    movies = \n    \n    # 3) 데이터를 담을 2차원 리스트\n    data = []\n    for m in movies:\n        # 4) 제목과 평점 텍스트 추출\n        title = m.find('div', class_='title').text\n        score = \n        data.append([title, score])\n        \n    # 5) Pandas DataFrame으로 변환\n    df = pd.DataFrame(data, columns=['영화제목', '평점'])\n    return df\n\n# 함수 실행\nresult_df = crawl_movies(html_doc)\nprint(result_df)",
              expectedOutputs: [
                "       영화제목   평점\n0  인사이드 아웃 2  9.5\n1         파묘  8.8"
              ],
              hint: "soup = BeautifulSoup(html_string, 'html.parser')\nmovies = soup.find_all('div', class_='movie')\nscore = m.find('div', class_='score').text"
            }
          ]
        ]
      }
    ]
  }
];
