// Scratch file: capstone "Unit 3" project nodes for the 웹 크롤링 (Web Crawling) course.
// Exports an array of 3 node objects to be merged into src/data/curriculum/crawling_tier1.jsx
// (or a sibling file) as the final SECTION "실전 프로젝트 (A to Z)".
//
// All quiz_code exercises are 100% self-contained, deterministic, network-free Pyodide Python:
// every "fetch" is simulated with an embedded HTML string, parsed with real BeautifulSoup,
// and every "save" uses the real csv module + io.StringIO instead of a real file.

module.exports = [
  {
    id: "crawling_3_1",
    title: "프로젝트 1: 뉴스 헤드라인 크롤러",
    description: "여러 기사를 파싱해서 CSV로 저장하는 크롤러 만들기",
    lessons: [
      [
        {
          type: "theory",
          content: "[프로젝트 1] 뉴스 헤드라인 크롤러 시작하기",
          paragraphs: [
            "지금까지 배운 BeautifulSoup와 requests 지식을 모두 모아서, 진짜로 쓸모 있는 크롤러 하나를 처음부터 끝까지 만들어봅니다.",
            "목표는 뉴스 홈페이지에서 여러 개의 기사 제목·링크·카테고리를 한 번에 긁어와서 CSV 파일로 저장하는 것입니다.",
            "실제 서비스라면 requests.get(url).text로 HTML을 받아오지만, 브라우저 환경에서는 실제 네트워크 요청이 불가능하기 때문에 동일한 구조의 HTML을 문자열로 미리 준비해뒀습니다. 이후 파싱·추출·저장 코드는 실제 사이트를 크롤링할 때와 완전히 똑같습니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 1] 기사 목록 개수 세기\n\n아래는 뉴스 홈페이지를 흉내 낸 HTML입니다. class가 'article'인 기사 블록이 총 몇 개인지 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\n# 실제로는 requests.get(url).text로 받아오지만, 여기서는 같은 구조의 HTML을 문자열로 준비했습니다.\nhtml = '<div class=\"news-list\"><div class=\"article\"><h2 class=\"title\">코스피 3000 돌파</h2><a class=\"link\" href=\"/news/101\">기사 링크</a><span class=\"category\">경제</span></div><div class=\"article\"><h2 class=\"title\">국가대표팀 4강 진출</h2><a class=\"link\" href=\"/news/102\">기사 링크</a><span class=\"category\">스포츠</span></div><div class=\"article\"><h2 class=\"title\">신형 인공지능 모델 공개</h2><a class=\"link\" href=\"/news/103\">기사 링크</a><span class=\"category\">IT</span></div><div class=\"article\"><h2 class=\"title\">국제 영화제 개막식 열려</h2><a class=\"link\" href=\"/news/104\">기사 링크</a><span class=\"category\">문화</span></div><div class=\"article\"><h2 class=\"title\">국회 본회의 예산안 통과</h2><a class=\"link\" href=\"/news/105\">기사 링크</a><span class=\"category\">정치</span></div></div>'\n\nsoup = BeautifulSoup(html, 'html.parser')\n\n# class가 'article'인 div 태그를 모두 찾아 개수를 출력하세요\n",
          expectedOutputs: ["5"],
          hint: "articles = soup.find_all('div', class_='article')\nprint(len(articles))"
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] soup.find_all('div', class_='article')의 반환값에 대한 설명으로 옳은 것은?",
          options: [
            "조건에 맞는 Tag들을 담은 리스트 형태의 객체가 반환된다",
            "조건에 맞는 첫 번째 Tag 하나만 반환된다",
            "조건에 맞는 태그의 개수(정수)가 반환된다",
            "아무것도 반환되지 않는다"
          ],
          answer: 0,
          hint: "find_all은 조건에 맞는 모든 태그를 찾아 리스트(ResultSet) 형태로 돌려줍니다."
        }
      ],
      [
        {
          type: "theory",
          content: "[이론] 태그 안에서 다시 검색하기",
          paragraphs: [
            "기사 하나(article)를 찾았다면, 그 안에서 다시 select_one()이나 find()를 사용해 제목, 링크, 카테고리를 각각 뽑아낼 수 있습니다.",
            "태그의 텍스트는 .text로, 속성값(href 등)은 태그['속성이름']처럼 대괄호로 꺼냅니다.",
            "이렇게 뽑아낸 값들을 딕셔너리 하나에 담고, 그 딕셔너리를 리스트에 차곡차곡 쌓으면 '기사 5개짜리 데이터 목록'이 완성됩니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 2] 기사 정보 추출하기\n\n모든 기사에서 제목(title), 링크(link), 카테고리(category)를 뽑아 딕셔너리 리스트로 만드세요. 전체 개수와, 세 번째 기사(인덱스 2)의 제목을 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\nhtml = '<div class=\"news-list\"><div class=\"article\"><h2 class=\"title\">코스피 3000 돌파</h2><a class=\"link\" href=\"/news/101\">기사 링크</a><span class=\"category\">경제</span></div><div class=\"article\"><h2 class=\"title\">국가대표팀 4강 진출</h2><a class=\"link\" href=\"/news/102\">기사 링크</a><span class=\"category\">스포츠</span></div><div class=\"article\"><h2 class=\"title\">신형 인공지능 모델 공개</h2><a class=\"link\" href=\"/news/103\">기사 링크</a><span class=\"category\">IT</span></div><div class=\"article\"><h2 class=\"title\">국제 영화제 개막식 열려</h2><a class=\"link\" href=\"/news/104\">기사 링크</a><span class=\"category\">문화</span></div><div class=\"article\"><h2 class=\"title\">국회 본회의 예산안 통과</h2><a class=\"link\" href=\"/news/105\">기사 링크</a><span class=\"category\">정치</span></div></div>'\n\nsoup = BeautifulSoup(html, 'html.parser')\narticles = soup.find_all('div', class_='article')\n\narticles_data = []\n\n# 각 article에서 제목(.title), 링크(.link의 href), 카테고리(.category)를 뽑아\n# 딕셔너리로 만들어 articles_data 리스트에 추가하세요\nfor article in articles:\n    pass\n\nprint(len(articles_data))\nprint(articles_data[2]['title'])\n",
          expectedOutputs: ["5\n신형 인공지능 모델 공개"],
          hint: "for article in articles:\n    title = article.select_one('.title').text\n    link = article.select_one('.link')['href']\n    category = article.select_one('.category').text\n    articles_data.append({'title': title, 'link': link, 'category': category})"
        },
        {
          type: "quiz_word_bank",
          content: "[개념 확인] 태그에서 값을 꺼내는 방법",
          sentenceParts: ["태그 안의 글자(텍스트)는 ", " 으로 꺼내고, href 같은 속성값은 태그[", "]처럼 대괄호로 꺼냅니다."],
          wordBank: [".text", "'href'", ".attr", ".value"],
          answer: [".text", "'href'"],
          hint: "텍스트는 .text로, 속성은 태그['속성이름'] 형태로 꺼냅니다."
        }
      ],
      [
        {
          type: "theory",
          content: "[이론] CSV로 저장하기 (StringIO 활용)",
          paragraphs: [
            "크롤링한 데이터는 대부분 CSV(Comma-Separated Values) 파일로 저장해서 엑셀 등에서 바로 열어봅니다.",
            "파이썬의 csv.DictWriter는 딕셔너리 리스트를 손쉽게 CSV 형태로 바꿔줍니다. writeheader()로 헤더를, writerows()로 여러 행을 한 번에 씁니다.",
            "브라우저 환경에서는 실제 파일 대신 io.StringIO()로 메모리 상의 가짜 파일을 만들어 사용합니다. 실제 파이썬(VSCode 등)이라면 open('articles.csv', 'w', newline='', encoding='utf-8-sig')처럼 진짜 파일을 열어 완전히 동일한 코드로 저장하면 됩니다.",
            "한 가지 팁: csv 모듈은 기본적으로 줄바꿈에 \\r\\n을 사용합니다. StringIO를 쓸 때는 lineterminator='\\n' 옵션을 줘서 깔끔하게 \\n 줄바꿈으로 통일하는 것이 좋습니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 3] CSV로 저장하기\n\n추출한 기사 데이터를 csv.DictWriter로 CSV 형태로 만들어 출력하세요. (fieldnames는 title, link, category 순서, lineterminator='\\n' 사용)",
          initialCode: "from bs4 import BeautifulSoup\nimport csv\nimport io\n\nhtml = '<div class=\"news-list\"><div class=\"article\"><h2 class=\"title\">코스피 3000 돌파</h2><a class=\"link\" href=\"/news/101\">기사 링크</a><span class=\"category\">경제</span></div><div class=\"article\"><h2 class=\"title\">국가대표팀 4강 진출</h2><a class=\"link\" href=\"/news/102\">기사 링크</a><span class=\"category\">스포츠</span></div><div class=\"article\"><h2 class=\"title\">신형 인공지능 모델 공개</h2><a class=\"link\" href=\"/news/103\">기사 링크</a><span class=\"category\">IT</span></div><div class=\"article\"><h2 class=\"title\">국제 영화제 개막식 열려</h2><a class=\"link\" href=\"/news/104\">기사 링크</a><span class=\"category\">문화</span></div><div class=\"article\"><h2 class=\"title\">국회 본회의 예산안 통과</h2><a class=\"link\" href=\"/news/105\">기사 링크</a><span class=\"category\">정치</span></div></div>'\n\nsoup = BeautifulSoup(html, 'html.parser')\narticles = soup.find_all('div', class_='article')\n\narticles_data = []\nfor article in articles:\n    title = article.select_one('.title').text\n    link = article.select_one('.link')['href']\n    category = article.select_one('.category').text\n    articles_data.append({'title': title, 'link': link, 'category': category})\n\n# articles_data를 csv.DictWriter로 CSV 문자열로 만들어 출력하세요\n# fieldnames는 ['title', 'link', 'category'] 순서, lineterminator='\\n' 사용\n",
          expectedOutputs: ["title,link,category\n코스피 3000 돌파,/news/101,경제\n국가대표팀 4강 진출,/news/102,스포츠\n신형 인공지능 모델 공개,/news/103,IT\n국제 영화제 개막식 열려,/news/104,문화\n국회 본회의 예산안 통과,/news/105,정치"],
          hint: "output = io.StringIO()\nwriter = csv.DictWriter(output, fieldnames=['title', 'link', 'category'], lineterminator='\\n')\nwriter.writeheader()\nwriter.writerows(articles_data)\nprint(output.getvalue().strip())"
        }
      ]
    ]
  },
  {
    id: "crawling_3_2",
    title: "프로젝트 2: 온라인 서점 가격 크롤러",
    description: "여러 페이지를 순회하며 데이터를 모으고 가공하기",
    lessons: [
      [
        {
          type: "theory",
          content: "[프로젝트 2] 온라인 서점 가격 크롤러 시작하기",
          paragraphs: [
            "온라인 쇼핑몰이나 서점 사이트는 상품이 너무 많아서 한 페이지에 다 보여주지 못하고, 1페이지, 2페이지, 3페이지... 처럼 여러 페이지로 나눠 보여줍니다. 이를 페이지네이션(pagination)이라고 합니다.",
            "실제로 크롤링할 때는 for page in range(1, 마지막페이지+1): requests.get(f'{url}?page={page}') 처럼 페이지 번호를 바꿔가며 반복 요청을 보냅니다.",
            "여기서는 3개 페이지의 HTML을 각각 문자열로 준비했습니다. 페이지별로 파싱한 결과를 하나의 리스트에 계속 쌓아나가는 것이 이번 프로젝트의 핵심입니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 1] 전체 페이지 순회하며 개수 세기\n\n3개 페이지의 HTML이 담긴 리스트를 순서대로 순회하면서, 전체 도서(class='book') 개수를 누적해서 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\npage1 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">파이썬 무작정 따라하기</span><span class=\"author\">김코딩</span><span class=\"price\">15000</span></li><li class=\"book\"><span class=\"title\">데이터 분석 첫걸음</span><span class=\"author\">이데이터</span><span class=\"price\">22000</span></li><li class=\"book\"><span class=\"title\">알고리즘 트레이닝</span><span class=\"author\">박알고</span><span class=\"price\">18000</span></li></ul>'\npage2 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">웹 크롤링 마스터</span><span class=\"author\">최크롤</span><span class=\"price\">25000</span></li><li class=\"book\"><span class=\"title\">머신러닝 입문</span><span class=\"author\">정머신</span><span class=\"price\">30000</span></li><li class=\"book\"><span class=\"title\">자료구조와 함께</span><span class=\"author\">한구조</span><span class=\"price\">12000</span></li></ul>'\npage3 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">클린 코드 작성법</span><span class=\"author\">오클린</span><span class=\"price\">28000</span></li><li class=\"book\"><span class=\"title\">리눅스 실전 가이드</span><span class=\"author\">장리눅</span><span class=\"price\">9000</span></li><li class=\"book\"><span class=\"title\">혼자 공부하는 SQL</span><span class=\"author\">윤에스</span><span class=\"price\">16000</span></li></ul>'\n\npages = [page1, page2, page3]\n\ntotal_books = 0\n# pages를 순회하며 각 페이지의 'book' 태그 개수를 total_books에 누적하세요\n\nprint(total_books)\n",
          expectedOutputs: ["9"],
          hint: "for page_html in pages:\n    soup = BeautifulSoup(page_html, 'html.parser')\n    books = soup.find_all('li', class_='book')\n    total_books += len(books)"
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 여러 페이지로 나뉜 목록 데이터를 모두 수집하려면 어떻게 해야 할까요?",
          options: [
            "첫 페이지만 크롤링하면 나머지는 자동으로 포함된다",
            "페이지 번호(혹은 URL)를 바꿔가며 각 페이지를 반복 요청하고 결과를 계속 누적한다",
            "마지막 페이지 하나만 크롤링하면 충분하다",
            "페이지가 나뉘어 있으면 크롤링이 불가능하다"
          ],
          answer: 1,
          hint: "페이지네이션이 있는 사이트는 반복문으로 각 페이지를 순회해야 전체 데이터를 모을 수 있습니다."
        }
      ],
      [
        {
          type: "theory",
          content: "[이론] 문자열 가격을 숫자로 바꾸기",
          paragraphs: [
            "HTML에서 뽑아낸 텍스트는 항상 문자열(str)입니다. '15000'이라는 글자와 15000이라는 숫자는 다릅니다.",
            "가격을 비교하거나 정렬하려면 int()로 반드시 형변환을 해줘야 합니다. 형변환을 깜빡하면 '9000' < '15000' 같은 비교가 숫자가 아니라 문자 순서로 계산되어 엉뚱한 결과가 나올 수 있습니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 2] 도서 정보 추출하기\n\n모든 페이지의 도서에서 제목(title), 저자(author), 가격(price, 정수)을 추출해 딕셔너리 리스트로 만드세요. 전체 개수와 6번째 도서(인덱스 5)의 제목을 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\npage1 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">파이썬 무작정 따라하기</span><span class=\"author\">김코딩</span><span class=\"price\">15000</span></li><li class=\"book\"><span class=\"title\">데이터 분석 첫걸음</span><span class=\"author\">이데이터</span><span class=\"price\">22000</span></li><li class=\"book\"><span class=\"title\">알고리즘 트레이닝</span><span class=\"author\">박알고</span><span class=\"price\">18000</span></li></ul>'\npage2 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">웹 크롤링 마스터</span><span class=\"author\">최크롤</span><span class=\"price\">25000</span></li><li class=\"book\"><span class=\"title\">머신러닝 입문</span><span class=\"author\">정머신</span><span class=\"price\">30000</span></li><li class=\"book\"><span class=\"title\">자료구조와 함께</span><span class=\"author\">한구조</span><span class=\"price\">12000</span></li></ul>'\npage3 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">클린 코드 작성법</span><span class=\"author\">오클린</span><span class=\"price\">28000</span></li><li class=\"book\"><span class=\"title\">리눅스 실전 가이드</span><span class=\"author\">장리눅</span><span class=\"price\">9000</span></li><li class=\"book\"><span class=\"title\">혼자 공부하는 SQL</span><span class=\"author\">윤에스</span><span class=\"price\">16000</span></li></ul>'\n\npages = [page1, page2, page3]\n\nall_books = []\n# 모든 페이지를 순회하며 title, author, price(정수)를 딕셔너리로 만들어 all_books에 추가하세요\n\nprint(len(all_books))\nprint(all_books[5]['title'])\n",
          expectedOutputs: ["9\n자료구조와 함께"],
          hint: "for page_html in pages:\n    soup = BeautifulSoup(page_html, 'html.parser')\n    books = soup.find_all('li', class_='book')\n    for book in books:\n        title = book.select_one('.title').text\n        author = book.select_one('.author').text\n        price = int(book.select_one('.price').text)\n        all_books.append({'title': title, 'author': author, 'price': price})"
        }
      ],
      [
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 딕셔너리 리스트를 특정 값 기준으로 정렬하고 싶을 때 sorted() 함수에 넘겨줘야 하는 매개변수는?",
          options: ["key", "reverse만 사용하면 자동 정렬된다", "cmp", "compare"],
          answer: 0,
          hint: "sorted(리스트, key=람다함수) 형태로 정렬 기준을 지정합니다."
        },
        {
          type: "quiz_code",
          content: "[실습 3] 조건에 맞는 도서만 골라 가격순 정렬하기\n\n가격이 20000원 미만인 도서만 골라내고(filter), 가격이 낮은 순으로 정렬한(sort) 뒤, 제목을 한 줄에 하나씩 출력하세요.",
          initialCode: "from bs4 import BeautifulSoup\n\npage1 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">파이썬 무작정 따라하기</span><span class=\"author\">김코딩</span><span class=\"price\">15000</span></li><li class=\"book\"><span class=\"title\">데이터 분석 첫걸음</span><span class=\"author\">이데이터</span><span class=\"price\">22000</span></li><li class=\"book\"><span class=\"title\">알고리즘 트레이닝</span><span class=\"author\">박알고</span><span class=\"price\">18000</span></li></ul>'\npage2 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">웹 크롤링 마스터</span><span class=\"author\">최크롤</span><span class=\"price\">25000</span></li><li class=\"book\"><span class=\"title\">머신러닝 입문</span><span class=\"author\">정머신</span><span class=\"price\">30000</span></li><li class=\"book\"><span class=\"title\">자료구조와 함께</span><span class=\"author\">한구조</span><span class=\"price\">12000</span></li></ul>'\npage3 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">클린 코드 작성법</span><span class=\"author\">오클린</span><span class=\"price\">28000</span></li><li class=\"book\"><span class=\"title\">리눅스 실전 가이드</span><span class=\"author\">장리눅</span><span class=\"price\">9000</span></li><li class=\"book\"><span class=\"title\">혼자 공부하는 SQL</span><span class=\"author\">윤에스</span><span class=\"price\">16000</span></li></ul>'\n\npages = [page1, page2, page3]\n\nall_books = []\nfor page_html in pages:\n    soup = BeautifulSoup(page_html, 'html.parser')\n    books = soup.find_all('li', class_='book')\n    for book in books:\n        title = book.select_one('.title').text\n        author = book.select_one('.author').text\n        price = int(book.select_one('.price').text)\n        all_books.append({'title': title, 'author': author, 'price': price})\n\n# 1. all_books에서 가격이 20000원 미만인 도서만 골라 cheap_books에 담으세요\n# 2. cheap_books를 가격이 낮은 순으로 정렬해 sorted_books에 담으세요\n# 3. sorted_books를 순회하며 제목을 한 줄씩 출력하세요\n",
          expectedOutputs: ["리눅스 실전 가이드\n자료구조와 함께\n파이썬 무작정 따라하기\n혼자 공부하는 SQL\n알고리즘 트레이닝"],
          hint: "cheap_books = [b for b in all_books if b['price'] < 20000]\nsorted_books = sorted(cheap_books, key=lambda b: b['price'])\nfor b in sorted_books:\n    print(b['title'])"
        }
      ],
      [
        {
          type: "theory",
          content: "[이론] 마지막 단계, 파일로 저장하기",
          paragraphs: [
            "필터링하고 정렬까지 마친 데이터를 이번엔 CSV로 저장해봅니다. 이 과정까지 마치면 '여러 페이지 수집 → 정제 → 저장'까지 이어지는 완전한 크롤링 파이프라인이 완성됩니다.",
            "실전에서는 여기에 requests.get()으로 실제 페이지를 가져오는 코드만 앞에 붙이면, 오늘 만든 코드가 그대로 실제 서비스에서도 동작합니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 4] 필터링/정렬 결과를 CSV로 저장하기\n\n20000원 미만 도서를 가격순으로 정렬한 결과를 csv.DictWriter로 저장해 출력하세요. (fieldnames는 title, author, price 순서, lineterminator='\\n' 사용)",
          initialCode: "from bs4 import BeautifulSoup\nimport csv\nimport io\n\npage1 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">파이썬 무작정 따라하기</span><span class=\"author\">김코딩</span><span class=\"price\">15000</span></li><li class=\"book\"><span class=\"title\">데이터 분석 첫걸음</span><span class=\"author\">이데이터</span><span class=\"price\">22000</span></li><li class=\"book\"><span class=\"title\">알고리즘 트레이닝</span><span class=\"author\">박알고</span><span class=\"price\">18000</span></li></ul>'\npage2 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">웹 크롤링 마스터</span><span class=\"author\">최크롤</span><span class=\"price\">25000</span></li><li class=\"book\"><span class=\"title\">머신러닝 입문</span><span class=\"author\">정머신</span><span class=\"price\">30000</span></li><li class=\"book\"><span class=\"title\">자료구조와 함께</span><span class=\"author\">한구조</span><span class=\"price\">12000</span></li></ul>'\npage3 = '<ul class=\"book-list\"><li class=\"book\"><span class=\"title\">클린 코드 작성법</span><span class=\"author\">오클린</span><span class=\"price\">28000</span></li><li class=\"book\"><span class=\"title\">리눅스 실전 가이드</span><span class=\"author\">장리눅</span><span class=\"price\">9000</span></li><li class=\"book\"><span class=\"title\">혼자 공부하는 SQL</span><span class=\"author\">윤에스</span><span class=\"price\">16000</span></li></ul>'\n\npages = [page1, page2, page3]\n\nall_books = []\nfor page_html in pages:\n    soup = BeautifulSoup(page_html, 'html.parser')\n    books = soup.find_all('li', class_='book')\n    for book in books:\n        title = book.select_one('.title').text\n        author = book.select_one('.author').text\n        price = int(book.select_one('.price').text)\n        all_books.append({'title': title, 'author': author, 'price': price})\n\ncheap_books = [b for b in all_books if b['price'] < 20000]\nsorted_books = sorted(cheap_books, key=lambda b: b['price'])\n\n# sorted_books를 csv.DictWriter로 CSV 문자열로 만들어 출력하세요\n# fieldnames는 ['title', 'author', 'price'] 순서, lineterminator='\\n' 사용\n",
          expectedOutputs: ["title,author,price\n리눅스 실전 가이드,장리눅,9000\n자료구조와 함께,한구조,12000\n파이썬 무작정 따라하기,김코딩,15000\n혼자 공부하는 SQL,윤에스,16000\n알고리즘 트레이닝,박알고,18000"],
          hint: "output = io.StringIO()\nwriter = csv.DictWriter(output, fieldnames=['title', 'author', 'price'], lineterminator='\\n')\nwriter.writeheader()\nwriter.writerows(sorted_books)\nprint(output.getvalue().strip())"
        }
      ]
    ]
  },
  {
    id: "crawling_3_3",
    title: "프로젝트 3: 크롤러 자동화하기",
    description: "재사용 가능한 함수로 묶고, 실전에서 자동으로 돌리는 법",
    lessons: [
      [
        {
          type: "theory",
          content: "[프로젝트 3] 반복되는 코드를 함수 하나로",
          paragraphs: [
            "프로젝트 1과 2에서 만든 코드를 잘 보면 둘 다 '파싱 → 항목별 추출 → 리스트에 저장' 이라는 똑같은 패턴을 반복하고 있습니다.",
            "사이트가 바뀔 때마다 이 뼈대 코드를 복사해서 붙여넣는 건 비효율적입니다. 대신 '어떤 항목을 고를지(item_selector)'와 '어떤 필드를 뽑을지(field_selectors)'만 바꿔 끼울 수 있는 함수 하나로 만들어봅시다.",
            "이렇게 만든 함수는 뉴스 사이트든 서점이든, 심지어 완전히 다른 종류의 사이트든 구조만 다르게 알려주면 그대로 재사용할 수 있습니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 1] 추출 로직을 함수로 만들기\n\ncrawl_to_list(html, item_selector, field_selectors) 함수를 완성하세요. field_selectors는 {'필드이름': 'CSS선택자'} 형태의 딕셔너리입니다.",
          initialCode: "from bs4 import BeautifulSoup\n\ndef crawl_to_list(html, item_selector, field_selectors):\n    soup = BeautifulSoup(html, 'html.parser')\n    items = soup.select(item_selector)\n    data = []\n    # items를 순회하며 field_selectors에 정의된 각 필드를 뽑아 data에 딕셔너리로 추가하세요\n\n    return data\n\nquotes_html = '<div class=\"quote-list\"><div class=\"quote\"><span class=\"text\">천 리 길도 한 걸음부터</span><span class=\"by\">속담</span></div><div class=\"quote\"><span class=\"text\">아는 것이 힘이다</span><span class=\"by\">베이컨</span></div><div class=\"quote\"><span class=\"text\">시작이 반이다</span><span class=\"by\">아리스토텔레스</span></div><div class=\"quote\"><span class=\"text\">피할 수 없다면 즐겨라</span><span class=\"by\">로버트 엘리엇</span></div></div>'\n\nquotes_data = crawl_to_list(quotes_html, '.quote', {'text': '.text', 'author': '.by'})\n\nprint(len(quotes_data))\nprint(quotes_data[1]['author'])\n",
          expectedOutputs: ["4\n베이컨"],
          hint: "for item in items:\n    record = {}\n    for field_name, selector in field_selectors.items():\n        record[field_name] = item.select_one(selector).text\n    data.append(record)"
        },
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] 같은 코드를 여러 번 반복해서 작성하지 않고 함수로 묶어 재사용하는 프로그래밍 원칙을 무엇이라 부르나요?",
          options: ["DRY (Don't Repeat Yourself)", "KISS (Keep It Simple, Stupid)", "YAGNI (You Aren't Gonna Need It)", "SOLID"],
          answer: 0,
          hint: "'반복하지 말라'는 뜻을 가진 원칙입니다."
        }
      ],
      [
        {
          type: "theory",
          content: "[이론] 추출과 저장까지 한 함수 안에",
          paragraphs: [
            "1단계에서 만든 함수는 파싱과 추출까지만 담당했습니다. 이번엔 CSV 저장까지 함수 안에 포함시켜서, '이 함수 하나만 호출하면 크롤링부터 저장까지 전부 끝난다'는 완결된 파이프라인 함수로 완성해봅시다.",
            "함수 이름도 이제 역할에 맞게 crawl_and_save로 바꿉니다. 저장할 파일 이름(filename)까지 매개변수로 받아서, 몇 건이 저장됐는지 안내 메시지도 함께 출력하도록 만듭니다."
          ]
        },
        {
          type: "quiz_code",
          content: "[실습 2] 저장까지 포함한 crawl_and_save 함수 완성하기\n\nio.StringIO와 csv.DictWriter로 CSV를 만들고, 안내 메시지를 출력한 뒤, 완성된 CSV 문자열을 반환하도록 함수를 완성하세요.",
          initialCode: "from bs4 import BeautifulSoup\nimport csv\nimport io\n\ndef crawl_and_save(html, item_selector, field_selectors, filename):\n    soup = BeautifulSoup(html, 'html.parser')\n    items = soup.select(item_selector)\n    data = []\n    for item in items:\n        record = {}\n        for field_name, selector in field_selectors.items():\n            record[field_name] = item.select_one(selector).text\n        data.append(record)\n\n    # 1. io.StringIO()로 output을 만들고 csv.DictWriter로 data를 저장하세요\n    #    (fieldnames는 field_selectors의 key 목록, lineterminator='\\n' 사용)\n    # 2. 파일명과 저장 건수를 안내하는 메시지를 출력하세요 (f-string 사용)\n    # 3. 완성된 CSV 문자열(양 끝 공백 제거)을 반환하세요\n\n\nquotes_html = '<div class=\"quote-list\"><div class=\"quote\"><span class=\"text\">천 리 길도 한 걸음부터</span><span class=\"by\">속담</span></div><div class=\"quote\"><span class=\"text\">아는 것이 힘이다</span><span class=\"by\">베이컨</span></div><div class=\"quote\"><span class=\"text\">시작이 반이다</span><span class=\"by\">아리스토텔레스</span></div><div class=\"quote\"><span class=\"text\">피할 수 없다면 즐겨라</span><span class=\"by\">로버트 엘리엇</span></div></div>'\n\nresult = crawl_and_save(quotes_html, '.quote', {'text': '.text', 'author': '.by'}, 'quotes.csv')\nprint(result)\n",
          expectedOutputs: ["quotes.csv 저장 완료! (4건)\ntext,author\n천 리 길도 한 걸음부터,속담\n아는 것이 힘이다,베이컨\n시작이 반이다,아리스토텔레스\n피할 수 없다면 즐겨라,로버트 엘리엇"],
          hint: "output = io.StringIO()\nwriter = csv.DictWriter(output, fieldnames=list(field_selectors.keys()), lineterminator='\\n')\nwriter.writeheader()\nwriter.writerows(data)\nprint(f'{filename} 저장 완료! ({len(data)}건)')\nreturn output.getvalue().strip()"
        }
      ],
      [
        {
          type: "quiz_multiple_choice",
          content: "[개념 확인] crawl_and_save 함수를 완전히 다른 사이트에 재사용할 때, 새로운 사이트마다 반드시 바꿔서 넘겨줘야 하는 인자로 가장 적절한 것은?",
          options: [
            "item_selector와 field_selectors (사이트 구조에 맞는 CSS 선택자)",
            "함수 이름 자체",
            "import 하는 구문의 순서",
            "함수의 반환값 타입"
          ],
          answer: 0,
          hint: "사이트마다 HTML 구조(어떤 태그를 항목으로 볼지, 필드를 어떤 선택자로 찾을지)만 다르고 나머지 로직은 동일합니다."
        },
        {
          type: "quiz_code",
          content: "[실습 3] 완전히 다른 두 사이트에 재사용하기\n\n구조가 전혀 다른 두 사이트(명언 모음 quotes_html, 쇼핑몰 상품 목록 products_html)에 대해 crawl_and_save를 각각 한 번씩 호출해 저장하세요.",
          initialCode: "from bs4 import BeautifulSoup\nimport csv\nimport io\n\ndef crawl_and_save(html, item_selector, field_selectors, filename):\n    soup = BeautifulSoup(html, 'html.parser')\n    items = soup.select(item_selector)\n    data = []\n    for item in items:\n        record = {}\n        for field_name, selector in field_selectors.items():\n            record[field_name] = item.select_one(selector).text\n        data.append(record)\n\n    output = io.StringIO()\n    writer = csv.DictWriter(output, fieldnames=list(field_selectors.keys()), lineterminator='\\n')\n    writer.writeheader()\n    writer.writerows(data)\n\n    print(f'{filename} 저장 완료! ({len(data)}건)')\n    return output.getvalue().strip()\n\nquotes_html = '<div class=\"quote-list\"><div class=\"quote\"><span class=\"text\">천 리 길도 한 걸음부터</span><span class=\"by\">속담</span></div><div class=\"quote\"><span class=\"text\">아는 것이 힘이다</span><span class=\"by\">베이컨</span></div><div class=\"quote\"><span class=\"text\">시작이 반이다</span><span class=\"by\">아리스토텔레스</span></div><div class=\"quote\"><span class=\"text\">피할 수 없다면 즐겨라</span><span class=\"by\">로버트 엘리엇</span></div></div>'\n\nproducts_html = '<div class=\"product-list\"><div class=\"product\"><span class=\"name\">무선 이어폰</span><span class=\"cost\">89000</span></div><div class=\"product\"><span class=\"name\">보조 배터리</span><span class=\"cost\">32000</span></div><div class=\"product\"><span class=\"name\">노트북 파우치</span><span class=\"cost\">15000</span></div></div>'\n\n# quotes_html은 item_selector='.quote', field_selectors={'text': '.text', 'author': '.by'}\n# products_html은 item_selector='.product', field_selectors={'name': '.name', 'price': '.cost'}\n# 로 각각 crawl_and_save를 호출하세요 (filename은 'quotes.csv', 'products.csv')\n",
          expectedOutputs: ["quotes.csv 저장 완료! (4건)\nproducts.csv 저장 완료! (3건)"],
          hint: "crawl_and_save(quotes_html, '.quote', {'text': '.text', 'author': '.by'}, 'quotes.csv')\ncrawl_and_save(products_html, '.product', {'name': '.name', 'price': '.cost'}, 'products.csv')"
        }
      ],
      [
        {
          type: "theory",
          content: "[이론] 크롤러를 진짜로 자동화하기",
          paragraphs: [
            "지금까지 만든 crawl_and_save 함수는 데모용 HTML 문자열이 아니라 진짜 웹사이트를 대상으로 해도 코드가 단 한 줄도 바뀌지 않습니다.",
            "실제 환경에서는 html = quotes_html 대신 html = requests.get(real_url).text 한 줄만 바꾸면 끝입니다. BeautifulSoup로 파싱하고, 딕셔너리 리스트로 추출하고, CSV로 저장하는 나머지 코드는 완전히 동일하게 동작합니다.",
            "이 코드를 VSCode 같은 로컬 파이썬 환경에 그대로 옮겨서 저장하면, 브라우저 없이도 실행되는 완전한 크롤러 스크립트가 됩니다."
          ]
        },
        {
          type: "theory",
          content: "[이론] 사람 손 없이 반복 실행하기",
          paragraphs: [
            "크롤러를 '자동화'한다는 것은 사람이 매번 실행 버튼을 누르지 않아도 정해진 시간마다 알아서 돌아가게 만드는 것입니다.",
            "가장 간단한 방법은 스크립트 안에 while True: crawl_and_save(...); time.sleep(3600) 같은 반복문을 넣어, 1시간(3600초)마다 한 번씩 크롤링을 반복하도록 만드는 것입니다.",
            "좀 더 안정적인 방법은 운영체제의 스케줄러를 이용하는 것입니다. Windows에서는 '작업 스케줄러(Task Scheduler)'에 파이썬 스크립트 실행을 등록하고, Mac/Linux에서는 cron으로 '매일 새벽 3시에 이 스크립트를 실행해줘' 같은 규칙을 등록할 수 있습니다.",
            "실전에서 크롤러를 운영할 때는 상대 서버에 부담을 주지 않도록 요청 사이에 적절한 대기 시간을 두고, robots.txt로 크롤링이 허용된 범위인지 꼭 확인하는 예의도 잊지 마세요.",
            "축하합니다! 여러분은 데이터 수집 개념부터 BeautifulSoup 파싱, requests 요청, 실전 프로젝트, 자동화까지 웹 크롤링의 전 과정을 A to Z로 완주했습니다."
          ]
        }
      ]
    ]
  }
];
