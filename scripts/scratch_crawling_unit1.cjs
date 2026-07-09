// SCRATCH FILE — not part of the app bundle.
// Rewritten/expanded draft content for the 웹 크롤링 (Web Crawling) unit's 4 nodes.
// Node ids/titles/descriptions match src/data/curriculum/crawling_tier1.jsx exactly.
// This file is standalone: it does NOT import from or modify crawling_tier1.jsx.

module.exports = [
  {
    id: "crawling_1_1",
    title: "데이터 수집 기초",
    description: "웹 크롤링과 데이터 수집 사이트",
    lessons: [
      // Lesson 1 (easiest)
      [
        {
          type: "theory",
          content: "[이론] 데이터 수집 개요",
          paragraphs: [
            "웹 크롤링(Web Crawling)은 웹 페이지에서 우리가 원하는 데이터를 자동으로 수집하는 기술입니다.",
            "데이터 분석이나 AI 모델 학습을 위해서는 양질의 데이터가 필수적이며, 웹에는 무궁무진한 데이터가 존재합니다.",
            "대표적인 공공데이터 포털(data.go.kr), KOSIS 국가통계포털, Kaggle 등에서 잘 정제된 데이터를 얻을 수도 있지만, 최신 정보나 특정 서비스의 데이터는 직접 크롤링해야 합니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 다음 중 정부에서 제공하는 공공데이터 포털의 목적과 거리가 먼 것은?",
          options: [
            "공공데이터의 제공 및 활용",
            "국가 통계 데이터 제공",
            "개인 프라이버시 정보 검색",
            "다양한 분야의 무료 데이터셋 제공"
          ],
          answer: 2,
          hint: "공공데이터 포털은 개인의 사생활 정보를 제공하지 않습니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 국가의 다양한 통계 데이터를 제공하는 국가통계포털의 영문 줄임말은 무엇일까요?",
          sentenceParts: ["국가통계포털은 영어로 ", " 라고 부릅니다."],
          wordBank: ["KOSIS", "Kaggle", "GitHub", "AWS"],
          answer: ["KOSIS"],
          hint: "Korean Statistical Information Service의 줄임말입니다."
        },
        {
          type: "quiz_code",
          content: "[실습 1] 문자열에서 키워드 찾기\n\n개발자 도구로 페이지를 열어보면 결국 원본은 하나의 긴 문자열(HTML)입니다. `in` 연산자를 사용해 html 변수 안에 '크롤링'이라는 단어가 포함되어 있는지 확인해 출력하세요.",
          initialCode: "html = '<html><body><h1>Python 크롤링 배우기</h1></body></html>'\n\n# '크롤링'이 html 안에 포함되어 있는지 확인해서 출력하세요\n",
          expectedOutputs: ["True"],
          hint: "print('크롤링' in html)"
        }
      ],
      // Lesson 2
      [
        {
          type: "theory",
          content: "[이론] 크롤링 시 지켜야 할 것들",
          paragraphs: [
            "크롤링은 아무 데이터나 마구잡이로 가져와도 되는 기술이 아닙니다. 사이트마다 정해둔 규칙과 예의를 지켜야 합니다.",
            "많은 사이트는 루트 경로에 'robots.txt'라는 파일을 두어, 크롤러(로봇)가 어떤 페이지를 수집해도 되고 안 되는지를 알려줍니다. 예: https://example.com/robots.txt",
            "또한 짧은 시간에 너무 많은 요청을 보내면 서버에 과부하를 주거나 내 IP가 차단될 수 있으므로, 요청 사이에 적절한 텀을 두고 이용약관과 저작권을 반드시 확인해야 합니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 웹사이트가 크롤러(로봇)에게 수집을 허용/금지하는 범위를 알려주기 위해 사이트 루트에 두는 파일은?",
          options: ["robots.txt", "index.html", "sitemap.exe", "readme.md"],
          answer: 0,
          hint: "로봇들을 위한 규칙이 담긴 텍스트 파일입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 크롤링 매너 문장을 완성하세요.",
          sentenceParts: ["사이트가 정해둔 ", " 파일의 규칙을 지키고, 서버에 부담을 주지 않도록 ", "을 두고 요청해야 합니다."],
          wordBank: ["robots.txt", "요청 간격(텀)", "cookies.txt", "즉시"],
          answer: ["robots.txt", "요청 간격(텀)"],
          hint: "규칙 파일 이름과, 서버 부담을 줄이는 방법을 떠올려보세요."
        },
        {
          type: "quiz_code",
          content: "[실습 2] 문자열에서 위치 찾기\n\nhtml 변수에서 'Crawling'이라는 단어가 몇 번째 인덱스(위치)에서 시작하는지 find()로 찾아 출력하세요.",
          initialCode: "html = '<html><body><h1>Hello Crawling</h1></body></html>'\n\n# 'Crawling'의 시작 인덱스를 찾아 출력하세요\n",
          expectedOutputs: ["22"],
          hint: "print(html.find('Crawling'))"
        }
      ],
      // Lesson 3
      [
        {
          type: "theory",
          content: "[이론] 크롬 개발자 도구로 구조 살펴보기",
          paragraphs: [
            "크롤링을 하려면 데이터를 추출할 웹페이지의 구조(HTML)를 분석해야 합니다. 이때 가장 유용한 도구가 브라우저에 내장된 '개발자 도구(F12)'입니다.",
            "요소(Elements) 탭에서는 HTML 구조와 CSS 선택자를 확인할 수 있고, 네트워크(Network) 탭에서는 페이지가 서버와 주고받는 데이터 통신 과정을 훔쳐볼 수 있습니다.",
            "원하는 데이터가 있는 태그 위에서 우클릭 후 'Copy > Copy selector'를 선택하면 해당 요소의 CSS 선택자를 그대로 복사할 수 있어, 크롤링 코드를 짤 때 매우 유용합니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 웹 페이지의 HTML 태그나 클래스 속성을 확인하기 위해 주로 사용하는 개발자 도구의 탭은?",
          options: ["요소 (Elements)", "콘솔 (Console)", "네트워크 (Network)", "애플리케이션 (Application)"],
          answer: 0,
          hint: "화면을 구성하는 '요소'들을 확인하는 곳입니다."
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 페이지가 서버와 주고받는 요청/응답(예: API 통신)을 확인하려면 개발자 도구의 어떤 탭을 살펴봐야 할까요?",
          options: ["요소 (Elements)", "네트워크 (Network)", "소스 (Sources)", "메모리 (Memory)"],
          answer: 1,
          hint: "데이터가 오가는 통신(네트워크) 과정을 보여주는 탭입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 크롬 개발자 도구를 여는 단축키는 무엇일까요?",
          sentenceParts: ["보통 키보드의 ", " 키를 누르면 열립니다."],
          wordBank: ["F5", "F12", "Ctrl+C", "Alt+F4"],
          answer: ["F12"],
          hint: "기능 키 중 하나입니다."
        },
        {
          type: "quiz_code",
          content: "[실습 3] 특정 문자열이 몇 번 등장하는지 세기\n\nhtml 변수 안에 '<li>' 태그가 몇 개 있는지 count()로 세어 출력하세요.",
          initialCode: "html = '<ul><li>사과</li><li>바나나</li><li>포도</li></ul>'\n\n# '<li>' 가 등장하는 횟수를 세어 출력하세요\n",
          expectedOutputs: ["3"],
          hint: "print(html.count('<li>'))"
        }
      ],
      // Lesson 4 (hardest, combined)
      [
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 다음 중 '정적(static) 웹페이지'에 대한 설명으로 가장 알맞은 것은?",
          options: [
            "서버가 완성된 HTML을 그대로 내려주고, 이후 자바스크립트로 내용이 크게 바뀌지 않는 페이지",
            "페이지 접속 후 자바스크립트가 실행되며 화면의 데이터가 동적으로 계속 그려지는 페이지",
            "사용자의 클릭에 따라 서버 없이 화면만 계속 새로고침되는 페이지",
            "이미지만으로 이루어져 텍스트가 전혀 없는 페이지"
          ],
          answer: 0,
          hint: "'정적'이라는 단어처럼, 처음 받아온 HTML이 그대로 유지되는 페이지를 말합니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 정적 페이지와 동적 페이지 문장을 완성하세요.",
          sentenceParts: ["`requests`만으로 충분한 페이지는 ", "(static) 페이지이고, 자바스크립트 실행 후 데이터가 그려지는 페이지는 ", "(dynamic) 페이지라고 합니다."],
          wordBank: ["정적", "동적", "고정", "가변"],
          answer: ["정적", "동적"],
          hint: "static은 정적, dynamic은 동적으로 번역됩니다."
        },
        {
          type: "quiz_code",
          content: "[실습 4] find와 슬라이싱으로 태그 사이의 텍스트 추출하기\n\nhtml 변수에서 <title> 태그와 </title> 태그 사이의 텍스트만 잘라내어 출력하세요. (다음 챕터에서 배울 BeautifulSoup을 쓰면 이 작업이 훨씬 쉬워집니다!)",
          initialCode: "html = '<html><head><title>파이썬 크롤링 강좌</title></head></html>'\n\nstart = html.find('<title>') + len('<title>')\nend = html.find('</title>')\n\n# start와 end를 이용해 슬라이싱으로 제목만 잘라 출력하세요\n",
          expectedOutputs: ["파이썬 크롤링 강좌"],
          hint: "title = html[start:end]\nprint(title)"
        }
      ]
    ]
  },
  {
    id: "crawling_1_2",
    title: "BeautifulSoup",
    description: "HTML을 파싱하여 정보 추출하기",
    lessons: [
      // Lesson 1 (easiest)
      [
        {
          type: "theory",
          content: "[이론] BeautifulSoup 소개",
          paragraphs: [
            "BeautifulSoup는 파이썬에서 HTML/XML 문서를 다루기 쉽게 트리 구조로 파싱해주는 라이브러리입니다. (설치: pip install beautifulsoup4)",
            "단순한 텍스트 덩어리인 HTML을 파이썬 객체(Tag)로 변환하여 원하는 태그를 이름이나 CSS 선택자로 쉽게 검색할 수 있게 도와줍니다."
          ]
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] HTML 텍스트를 구조화된 형태로 변환하는 과정을 무엇이라 하나요?",
          sentenceParts: ["이 과정을 ", "(이)라고 합니다."],
          wordBank: ["크롤링", "파싱 (Parsing)", "네트워킹", "렌더링"],
          answer: ["파싱 (Parsing)"],
          hint: "구문 분석이라는 뜻을 가졌습니다."
        },
        {
          type: "quiz_code",
          content: "[실습 1] BeautifulSoup 임포트하기\n\n모듈 bs4에서 BeautifulSoup 클래스를 불러오세요.",
          initialCode: "# 모듈을 임포트하세요.\n\n\nprint('BeautifulSoup Ready!')",
          expectedOutputs: ["BeautifulSoup Ready!"],
          hint: "from bs4 import BeautifulSoup"
        }
      ],
      // Lesson 2
      [
        {
          type: "theory",
          content: "[이론] 태그 검색하기 (find, find_all, select)",
          paragraphs: [
            "BeautifulSoup 객체에서 특정 태그를 찾을 때 `find()`와 `find_all()` 메서드를 사용합니다.",
            "`soup.find('div')`: 문서에서 첫 번째 <div> 태그 하나만 반환합니다. 못 찾으면 None을 반환합니다.",
            "`soup.find_all('div')`: 모든 <div> 태그를 리스트 형태로 반환합니다.",
            "더 정교하게 찾고 싶다면 CSS 선택자를 그대로 쓸 수 있는 `select()`(리스트 반환)와 `select_one()`(하나만 반환)을 사용합니다. 예: `soup.select('div.animal')`, `soup.select_one('#main')`"
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 문서 내에 있는 모든 <a> 태그를 찾아 리스트로 반환하는 메서드는?",
          options: ["soup.find('a')", "soup.select_one('a')", "soup.find_all('a')", "soup.get('a')"],
          answer: 2,
          hint: "all(모두) 찾는 기능입니다."
        },
        {
          type: "quiz_code",
          content: "[실습 2] 태그 찾기\n\n아래 HTML에서 첫 번째 <h1> 태그의 내용을 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\nhtml = '<html><body><h1>Hello</h1><h1>World</h1></body></html>'\nsoup = BeautifulSoup(html, 'html.parser')\n\n# soup.find()를 이용해 첫번째 h1 태그를 찾아 텍스트를 출력하세요\n",
          expectedOutputs: ["Hello"],
          hint: "h1 = soup.find('h1')\nprint(h1.text)"
        },
        {
          type: "quiz_code",
          content: "[실습 3] select 활용하기\n\n클래스가 'target'인 p 태그의 텍스트를 찾아 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\nhtml = '<p class=\"other\">틀림</p><p class=\"target\">정답!</p>'\nsoup = BeautifulSoup(html, 'html.parser')\n\n# 클래스 선택자(.)를 이용해 target 클래스를 가진 요소를 찾으세요\n",
          expectedOutputs: ["정답!"],
          hint: "element = soup.select_one('.target')\nprint(element.text)"
        }
      ],
      // Lesson 3
      [
        {
          type: "theory",
          content: "[이론] 속성 추출과 트리 탐색",
          paragraphs: [
            "태그의 텍스트뿐 아니라 속성값도 자주 필요합니다. 예를 들어 <a> 태그의 링크 주소는 `href` 속성에 들어 있습니다.",
            "속성값은 딕셔너리처럼 대괄호로 `tag['href']`라고 접근하거나, 더 안전하게 `tag.get('href')`로 접근할 수 있습니다. `get()`은 속성이 없을 때 에러 대신 None을 돌려줍니다.",
            "태그 자체의 이름(예: 'a', 'div')은 `.name`으로, 부모 태그는 `.parent`로 확인할 수 있어 문서의 트리 구조를 따라 이동할 수도 있습니다.",
            "`find()`는 찾는 태그가 없으면 None을 반환하므로, 이후 코드에서 바로 `.text`를 쓰면 에러가 납니다. `if tag:` 처럼 None인지 먼저 확인하는 습관을 들이는 것이 안전합니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 태그에 특정 속성이 없을 수도 있는 상황에서, 에러 없이 안전하게 속성값을 가져오고 싶을 때 사용하는 메서드는?",
          options: ["tag['속성명']", "tag.get('속성명')", "tag.속성명", "tag.text"],
          answer: 1,
          hint: "get()은 값이 없으면 에러 대신 None을 반환합니다."
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 태그에 href 속성이 없는데 tag['href']를 실행하면 어떤 일이 벌어질까요?",
          options: [
            "KeyError 예외가 발생한다",
            "빈 문자열을 반환한다",
            "None을 반환한다",
            "자동으로 무시되고 다음 코드가 실행된다"
          ],
          answer: 0,
          hint: "딕셔너리처럼 대괄호로 접근하면 키가 없을 때 에러가 납니다. get()을 쓰면 에러 없이 None을 반환하죠."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] a_tag가 가리키는 <a> 태그의 href 속성값을 대괄호 문법으로 추출하는 코드를 완성하세요.",
          sentenceParts: ["href_value = a_tag[", "]"],
          wordBank: ["'href'", "href", ".href", "get"],
          answer: ["'href'"],
          hint: "딕셔너리처럼 문자열 키 'href'를 대괄호 안에 넣습니다."
        },
        {
          type: "quiz_code",
          content: "[실습 4] 속성값 추출하기 (href)\n\na_tag에서 href 속성값을 대괄호(`['href']`)와 `.get('href')` 두 가지 방법으로 각각 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\nhtml = '<a href=\"https://example.com\">링크</a>'\nsoup = BeautifulSoup(html, 'html.parser')\na_tag = soup.find('a')\n\n# 1) 대괄호 문법으로 href를 출력하세요\n\n# 2) get() 메서드로 href를 출력하세요\n",
          expectedOutputs: ["https://example.com\nhttps://example.com"],
          hint: "print(a_tag['href'])\nprint(a_tag.get('href'))"
        }
      ],
      // Lesson 4 (hardest, combined)
      [
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] `soup.find('span')`를 실행했을 때 문서 안에 <span> 태그가 하나도 없다면 반환되는 값은?",
          options: ["None", "빈 문자열 ''", "에러(Exception) 발생", "빈 리스트 []"],
          answer: 0,
          hint: "find()는 못 찾으면 아무것도 없다는 뜻으로 None을 반환합니다. (find_all()은 대신 빈 리스트를 반환합니다!)"
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 어떤 태그를 감싸고 있는 바로 위 태그(부모 태그)를 확인할 때 사용하는 것은?",
          options: [".parent", ".child", ".next_sibling", ".name"],
          answer: 0,
          hint: "부모(parent)라는 단어 그대로입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 태그 객체가 가진 태그 이름(예: 'div', 'a')을 확인하는 속성을 완성하세요.",
          sentenceParts: ["tag.", " 을 출력하면 해당 태그의 이름(문자열)이 나옵니다."],
          wordBank: ["name", "text", "value", "tag"],
          answer: ["name"],
          hint: "이름을 뜻하는 영어 단어입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] find()의 결과가 None일 수도 있을 때, 안전하게 처리하는 코드를 완성하세요.",
          sentenceParts: ["tag = soup.find('span')\n", " tag:\n    print(tag.text)"],
          wordBank: ["if", "for", "while", "def"],
          answer: ["if"],
          hint: "조건문으로 None이 아닌지 먼저 확인합니다."
        },
        {
          type: "quiz_code",
          content: "[실습 5] 반복문으로 여러 태그의 텍스트 모으기\n\nfind_all()로 찾은 모든 <li> 태그를 순회하며, 각 태그의 텍스트를 fruits 리스트에 담아 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\nhtml = '<ul><li>사과</li><li>바나나</li><li>포도</li></ul>'\nsoup = BeautifulSoup(html, 'html.parser')\nli_tags = soup.find_all('li')\n\nfruits = []\n# li_tags를 반복하면서 각 텍스트를 fruits에 추가(append)하세요\n\n\nprint(fruits)",
          expectedOutputs: ["['사과', '바나나', '포도']"],
          hint: "for li in li_tags:\n    fruits.append(li.text)"
        },
        {
          type: "quiz_code",
          content: "[실습 6] href가 없는 태그까지 안전하게 처리하기\n\n아래 div 안에는 href가 있는 <a> 태그와 없는 <a> 태그가 섞여 있습니다. get()과 None 체크를 이용해 href가 '있는' 링크만 links 리스트에 모아 출력하고, 첫 번째 <a> 태그의 부모 태그 이름도 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\nhtml = '<div class=\"box\"><a href=\"https://a.com\">A링크</a><a>B링크</a></div>'\nsoup = BeautifulSoup(html, 'html.parser')\na_tags = soup.find_all('a')\n\nlinks = []\nfor a in a_tags:\n    href = a.get('href')\n    # href가 None이 아닐 때만 links에 추가하세요\n\n\nprint(links)\n# a_tags의 첫 번째 태그의 부모 태그 이름을 출력하세요\n",
          expectedOutputs: ["['https://a.com']\ndiv"],
          hint: "if href:\n    links.append(href)\n\nprint(links)\nprint(a_tags[0].parent.name)"
        }
      ]
    ]
  },
  {
    id: "crawling_1_3",
    title: "Requests 모듈",
    description: "웹 서버에 HTTP 요청 보내기",
    lessons: [
      // Lesson 1 (easiest)
      [
        {
          type: "theory",
          content: "[이론] HTTP 요청과 Requests",
          paragraphs: [
            "파이썬에서 웹 페이지의 소스코드를 가져오기 위해서는 브라우저처럼 서버에 HTTP 요청을 보내야 합니다.",
            "`requests` 모듈은 이런 요청을 매우 쉽게 할 수 있도록 돕는 라이브러리입니다.",
            "가장 기본적으로 `requests.get('URL')`을 사용하여 해당 주소의 데이터를 요청합니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 웹 서버에서 데이터를 조회(가져오기)할 때 주로 사용하는 HTTP 요청 방식은?",
          options: ["GET", "POST", "PUT", "DELETE"],
          answer: 0,
          hint: "브라우저 주소창에 입력해서 접근하는 기본 방식과 동일합니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] requests 응답 객체 확인하기",
          sentenceParts: ["서버로부터 받은 순수 텍스트(HTML) 내용은 response.", " 에 저장되고, 응답 상태코드(200 등)는 response.", " 에서 확인할 수 있습니다."],
          wordBank: ["text", "status_code", "html", "code"],
          answer: ["text", "status_code"],
          hint: "텍스트는 text, 상태 코드는 status_code 입니다."
        },
        {
          type: "quiz_code",
          content: "[실습 1] 요청 URL 조립하기\n\nbase_url과 endpoint 변수를 f-string으로 합쳐서 'https://api.example.com/users' 형태의 전체 URL을 출력하세요.",
          initialCode: "base_url = 'https://api.example.com'\nendpoint = 'users'\n\n# f-string을 이용해 두 변수를 '/'로 합쳐 출력하세요\n",
          expectedOutputs: ["https://api.example.com/users"],
          hint: "print(f'{base_url}/{endpoint}')"
        }
      ],
      // Lesson 2
      [
        {
          type: "theory",
          content: "[이론] 요청 파라미터 (Query String)",
          paragraphs: [
            "검색 결과 페이지 등은 URL 끝에 물음표(?)를 붙이고 `변수=값` 형태의 질의 문자열(Query String)을 포함합니다.",
            "예: `https://search.naver.com/search.naver?query=파이썬`",
            "`requests.get()` 호출 시 `params` 딕셔너리를 넘겨주면 자동으로 URL 뒤에 파라미터를 붙여줍니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 2] Requests 모방하기\n\n*브라우저 환경 제약상 실제 requests 대신 더미 함수로 실습합니다.*\nURL과 파라미터를 합쳐서 전체 요청 URL이 어떻게 만들어지는지 출력해 봅시다.",
          initialCode: "base_url = 'https://search.com/api'\nparams = {'q': 'python', 'page': 1}\n\n# base_url 뒤에 ?q=python&page=1 과 같이 조립해서 출력해 보세요\n# (힌트: f-string 사용)\n",
          expectedOutputs: ["https://search.com/api?q=python&page=1"],
          hint: "print(f\"{base_url}?q={params['q']}&page={params['page']}\")"
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 대표적인 HTTP 상태 코드를 문장으로 완성하세요.",
          sentenceParts: ["요청이 성공적으로 처리되면 상태 코드 ", " 를 응답받고, 요청한 페이지를 서버에서 찾을 수 없으면 ", " 를 응답받습니다."],
          wordBank: ["200", "404", "500", "301"],
          answer: ["200", "404"],
          hint: "성공은 2XX, 페이지 없음은 4XX 대역입니다."
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 다음 중 HTTP 상태 코드와 의미가 잘못 짝지어진 것은?",
          options: [
            "200 - 요청 성공",
            "404 - 요청한 페이지를 찾을 수 없음",
            "500 - 서버 내부 오류",
            "200 - 서버 내부 오류"
          ],
          answer: 3,
          hint: "200은 '성공'을 의미하는 코드입니다."
        }
      ],
      // Lesson 3
      [
        {
          type: "theory",
          content: "[이론] 상태 코드와 User-Agent",
          paragraphs: [
            "`response.status_code`로 확인할 수 있는 HTTP 상태 코드는 요청 결과를 숫자로 알려줍니다. 200은 성공, 404는 페이지 없음(Not Found), 500은 서버 내부 오류를 의미합니다.",
            "일부 사이트는 요청을 보낸 프로그램이 사람이 쓰는 '브라우저'인지 확인하기 위해 `User-Agent`라는 헤더 값을 검사합니다. 파이썬 requests의 기본 User-Agent는 브라우저와 다르기 때문에, 이를 확인하고 접근을 차단하는 사이트도 있습니다.",
            "이런 경우 `requests.get(url, headers={'User-Agent': '...'})` 처럼 headers에 브라우저와 비슷한 User-Agent 값을 담아 보내, 정상적인 브라우저 요청처럼 보이게 할 수 있습니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 일부 웹사이트가 요청 헤더의 User-Agent 값을 확인하는 주된 이유는?",
          options: [
            "요청을 보낸 것이 실제 브라우저(사람)인지, 프로그램(봇)인지 구분하기 위해",
            "이미지 파일의 용량을 줄이기 위해",
            "웹페이지의 글자 색을 바꾸기 위해",
            "데이터베이스 비밀번호를 확인하기 위해"
          ],
          answer: 0,
          hint: "봇으로 의심되는 요청을 걸러내기 위한 용도로 많이 쓰입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] requests에서 브라우저처럼 보이도록 요청을 보내는 코드를 완성하세요.",
          sentenceParts: ["requests.get(url, ", "={'User-Agent': '...'})"],
          wordBank: ["headers", "params", "cookies", "data"],
          answer: ["headers"],
          hint: "요청 헤더 정보를 담는 파라미터 이름입니다."
        },
        {
          type: "quiz_code",
          content: "[실습 3] User-Agent 헤더 다루기\n\n*이 역시 더미로 실습합니다.* 아래처럼 headers 딕셔너리가 이미 만들어져 있습니다. 'User-Agent' 키를 이용해 그 값을 꺼내 출력하세요.",
          initialCode: "headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}\n\n# headers 딕셔너리에서 'User-Agent' 값을 꺼내 출력하세요\n",
          expectedOutputs: ["Mozilla/5.0 (Windows NT 10.0; Win64; x64)"],
          hint: "print(headers['User-Agent'])"
        }
      ],
      // Lesson 4 (hardest, combined)
      [
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] requests의 `response.json()`을 호출하면 파이썬의 어떤 자료형으로 결과가 반환될까요? (JSON 객체 기준)",
          options: ["dict (딕셔너리)", "str (문자열)", "tuple (튜플)", "bytes (바이트)"],
          answer: 0,
          hint: "JSON의 { key: value } 구조는 파이썬 딕셔너리와 매우 닮았습니다."
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 다음 중 requests.get()으로 API 데이터를 가져와 파싱하는 순서로 올바른 것은?",
          options: [
            "requests.get() 요청 → response.json()으로 딕셔너리 변환 → 원하는 key로 접근",
            "response.json() 먼저 호출 → requests.get() 요청",
            "딕셔너리 접근 → requests.get() 요청 → response.json()",
            "순서는 상관없이 아무 때나 호출해도 된다"
          ],
          answer: 0,
          hint: "요청을 보내고, 응답을 받아 변환한 뒤에야 그 안의 데이터에 접근할 수 있습니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] JSON 형태의 API 응답을 파이썬 딕셔너리로 바꾸는 메서드를 완성하세요.",
          sentenceParts: ["response.", "() 를 호출하면 JSON 응답이 파이썬 딕셔너리(dict)로 변환됩니다."],
          wordBank: ["json", "text", "dict", "parse"],
          answer: ["json"],
          hint: "JSON을 그대로 딴 이름의 메서드입니다."
        },
        {
          type: "quiz_code",
          content: "[실습 4] 상태 코드에 따라 다른 메시지 출력하기\n\nstatus_code 값에 따라 200이면 '성공', 404면 '페이지를 찾을 수 없음', 500이면 '서버 오류'를 출력하는 조건문을 완성하세요.",
          initialCode: "status_code = 404\n\nif status_code == 200:\n    print('성공')\nelif status_code == 404:\n    print('페이지를 찾을 수 없음')\n# status_code가 500일 때 '서버 오류'를 출력하는 조건을 추가하세요\n",
          expectedOutputs: ["페이지를 찾을 수 없음"],
          hint: "elif status_code == 500:\n    print('서버 오류')"
        },
        {
          type: "quiz_code",
          content: "[실습 5] 시뮬레이션 JSON 응답에서 중첩된 값 꺼내기\n\n아래 fake_response_json은 response.json()이 반환했다고 가정하는 딕셔너리입니다. 중첩된 딕셔너리를 따라가 사용자 이름(name)을 출력하세요.",
          initialCode: "# 실제로는 response.json()이 반환하지만, 여기서는 딕셔너리로 흉내냅니다\nfake_response_json = {\n    'status': 'ok',\n    'data': {\n        'user': {\n            'name': '김코딩',\n            'age': 25\n        }\n    }\n}\n\n# data -> user -> name 순서로 접근해서 출력하세요\n",
          expectedOutputs: ["김코딩"],
          hint: "print(fake_response_json['data']['user']['name'])"
        }
      ]
    ]
  },
  {
    id: "crawling_1_4",
    title: "Selenium 브라우저 제어",
    description: "동적 웹페이지 크롤링 기술",
    lessons: [
      // Lesson 1 (easiest) — theory + mcq + wb only, no quiz_code (Selenium cannot run in-browser)
      [
        {
          type: "theory",
          content: "[이론] Selenium이 필요한 이유",
          paragraphs: [
            "요즘 웹페이지들은 페이지를 열면 텅 빈 HTML만 오고, 이후 자바스크립트가 실행되면서 데이터를 화면에 그리는 동적 페이지(SPA 등)가 많습니다.",
            "`requests` 모듈은 자바스크립트를 실행하지 못하기 때문에, 이런 경우 원하는 데이터가 수집되지 않습니다.",
            "`Selenium`은 실제 크롬 브라우저를 파이썬 코드로 직접 띄우고 조종(클릭, 스크롤 등)하여 렌더링이 완료된 후의 데이터를 수집할 수 있게 해줍니다.",
            "이미 배운 BeautifulSoup와 requests 조합은 정적인 페이지에는 빠르고 가볍지만, 자바스크립트가 그려주는 동적 데이터는 가져오지 못합니다. Selenium은 이런 한계를 보완하는 도구입니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 다음 중 Selenium을 사용해야 하는 가장 적절한 상황은?",
          options: [
            "단순하고 정적인 블로그 글의 텍스트만 긁어올 때",
            "버튼을 클릭하거나 스크롤을 내려야 추가 데이터가 로딩되는 페이지일 때",
            "용량이 큰 이미지 파일을 빠르게 다운로드할 때",
            "REST API에서 JSON 데이터를 바로 받아올 때"
          ],
          answer: 1,
          hint: "자바스크립트에 의한 동적 동작이나 사용자 상호작용이 필요할 때 씁니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] Selenium의 주요 객체",
          sentenceParts: ["Selenium에서 브라우저를 제어하는 핵심 객체를 ", "(이)라고 부릅니다. 이 객체의 ", " 메서드를 사용해 특정 URL로 이동할 수 있습니다."],
          wordBank: ["WebDriver", "BeautifulSoup", "get", "request"],
          answer: ["WebDriver", "get"],
          hint: "웹을 운전하는 기사라는 의미와, 페이지를 가져온다는 의미의 메서드입니다."
        }
      ],
      // Lesson 2
      [
        {
          type: "theory",
          content: "[이론] Selenium 환경 준비 (실습은 VSCode에서!)",
          paragraphs: [
            "Selenium을 쓰려면 터미널에서 `pip install selenium`으로 라이브러리를 설치하고, 실제 브라우저를 제어할 '드라이버'(예: ChromeDriver)가 필요합니다. 최근에는 `webdriver-manager` 같은 패키지가 드라이버 설치를 자동으로 해줍니다.",
            "⚠️ 중요: Selenium은 실제 운영체제(OS) 위에서 크롬 같은 브라우저 프로세스를 통째로 띄워서 조작하는 방식이라, 이 학습 사이트처럼 브라우저 안에서 파이썬을 실행하는 환경(Pyodide)에서는 절대 동작할 수 없습니다.",
            "그래서 이번 챕터는 실습 문제로 채점하지 않고 이론으로만 다룹니다. 꼭 로컬 컴퓨터의 VSCode 등에서 `pip install selenium`을 실행한 뒤 직접 코드를 실행해보며 익혀보세요."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] id가 'login-btn'인 요소를 Selenium으로 찾는 코드로 올바른 것은?",
          options: [
            "driver.find_element(By.ID, 'login-btn')",
            "driver.find('login-btn')",
            "driver.select('#login-btn')",
            "driver.get_element('login-btn')"
          ],
          answer: 0,
          hint: "By.ID와 함께 find_element()를 사용합니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] CSS 선택자로 요소를 찾는 코드를 완성하세요.",
          sentenceParts: ["find_element(By.", ", '#login-btn') 처럼 By 뒤에 어떤 방식으로 찾을지 지정합니다."],
          wordBank: ["CSS_SELECTOR", "ID_SELECTOR", "TEXT", "CLASSNAME_SELECTOR"],
          answer: ["CSS_SELECTOR"],
          hint: "CSS 선택자를 사용한다는 뜻의 상수입니다."
        }
      ],
      // Lesson 3
      [
        {
          type: "theory",
          content: "[이론] 요소를 찾는 다양한 방법 (By 전략)",
          paragraphs: [
            "Selenium은 `find_element(By.전략, '값')` 형태로 원하는 요소 하나를 찾습니다. 대표적인 전략은 세 가지입니다.",
            "`By.ID`: HTML의 id 속성 값으로 찾습니다. 예: `find_element(By.ID, 'search-box')`",
            "`By.CSS_SELECTOR`: BeautifulSoup의 select()처럼 CSS 선택자 문법으로 찾습니다. 예: `find_element(By.CSS_SELECTOR, 'div.result > a')`",
            "`By.XPATH`: HTML 문서의 경로를 표현하는 XPath 문법으로 찾습니다. 복잡한 구조에서도 위치를 정확히 지정할 수 있습니다. 예: `find_element(By.XPATH, '//div[@class=\"result\"]/a')`"
          ]
        },
        {
          type: "theory",
          content: "[이론] 요소와 상호작용하기 (click, send_keys)",
          paragraphs: [
            "요소를 찾은 뒤에는 사람처럼 클릭하거나 값을 입력할 수 있습니다.",
            "`.click()`: 버튼이나 링크 등의 요소를 클릭합니다. 예: `element.click()`",
            "`.send_keys('텍스트')`: 입력창(input) 요소에 텍스트를 입력합니다. 예: `search_box.send_keys('파이썬')`",
            "이 두 메서드 덕분에 로그인, 검색어 입력, 페이지 이동 버튼 클릭 등 실제 사용자의 행동을 코드로 그대로 재현할 수 있습니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 검색창(input 요소)에 '파이썬'이라는 검색어를 입력하고 싶을 때 사용하는 메서드는?",
          options: [".send_keys('파이썬')", ".click('파이썬')", ".text('파이썬')", ".input('파이썬')"],
          answer: 0,
          hint: "키보드로 값을 '보낸다(send keys)'는 의미의 메서드입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 요소와 상호작용하는 문장을 완성하세요.",
          sentenceParts: ["버튼 요소는 .", "() 로 클릭하고, 입력창 요소는 .", "() 로 텍스트를 입력합니다."],
          wordBank: ["click", "send_keys", "submit", "type"],
          answer: ["click", "send_keys"],
          hint: "클릭은 click, 키보드 입력은 send_keys 입니다."
        }
      ],
      // Lesson 4 (hardest, combined)
      [
        {
          type: "theory",
          content: "[이론] 기다리기(Wait)와 headless 모드",
          paragraphs: [
            "동적 페이지는 자바스크립트가 데이터를 그리는 데 시간이 걸리므로, 요소가 나타나기 전에 찾으려 하면 에러가 납니다. 그래서 '기다리는' 전략이 필요합니다.",
            "암묵적 대기(implicit wait)는 `driver.implicitly_wait(10)`처럼 한 번 설정하면, 이후 모든 요소 검색에서 최대 지정한 시간(초)만큼 요소가 나타나길 기다립니다.",
            "명시적 대기(explicit wait)는 `WebDriverWait(driver, 10).until(...)`처럼, 특정 조건(예: 요소가 클릭 가능해질 때까지)을 만족할 때까지만 기다렸다가 조건이 충족되면 즉시 다음 코드를 실행합니다. 무작정 `time.sleep()`으로 고정된 시간을 낭비하는 것보다 훨씬 효율적입니다.",
            "브라우저 창을 화면에 띄우지 않고 백그라운드에서 실행하는 옵션을 headless 모드라고 하며, 서버에서 자동화 작업을 돌릴 때 자주 사용합니다."
          ]
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 특정 요소가 나타날 때까지 최대 10초 기다리되, 조건이 충족되면 즉시 다음 코드로 넘어가고 싶을 때 사용하는 것은?",
          options: [
            "WebDriverWait(driver, 10).until(...) (명시적 대기)",
            "time.sleep(10) (무조건 10초 정지)",
            "driver.refresh() (새로고침)",
            "print('기다려주세요')"
          ],
          answer: 0,
          hint: "조건이 충족되는 즉시 진행하는 것은 '명시적' 대기입니다."
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 브라우저 창을 화면에 띄우지 않고 백그라운드에서 실행하는 모드를 무엇이라 부르나요?",
          options: ["headless 모드", "silent 모드", "background 모드", "ghost 모드"],
          answer: 0,
          hint: "'머리(화면 창)가 없다'는 뜻의 영어 단어입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 대기 전략 문장을 완성하세요.",
          sentenceParts: ["조건을 만족할 때까지만 기다리는 대기 방식을 명시적 대기라 하며, 파이썬에서는 ", " 클래스를 사용합니다."],
          wordBank: ["WebDriverWait", "TimeWait", "Delay", "Pause"],
          answer: ["WebDriverWait"],
          hint: "'웹 드라이버를 기다리게 한다'는 뜻의 클래스 이름입니다."
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 화면 출력 없이 브라우저를 실행하는 옵션을 완성하세요.",
          sentenceParts: ["서버 등에서 화면 없이 브라우저를 실행할 때는 ", " 모드를 사용합니다."],
          wordBank: ["headless", "fullscreen", "incognito", "kiosk"],
          answer: ["headless"],
          hint: "'머리 없는'이라는 뜻입니다."
        }
      ]
    ]
  }
];
