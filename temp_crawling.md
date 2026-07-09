--- C:\Document\SKN31\SKN31-inst\03_web_crawling\01_데이터수집 개요_BeautifulSoup.ipynb ---
## 데이터 수집에 도움이 되는 사이트

- **국가 통계포털**
    - https://kosis.kr
    - 통계청에서 관리하는 공공데이터 포털로 다양한 카테고리의 국가 통계데이터를 제공한다.
- **공공데이터 포털**
    - https://www.data.go.kr
    - 행정 안전부에서 제공하는 정부 데이터 포털
- **Kaggle**
    - https://kaggle.com
    - 데이터과학 관련 경진대회 플랫폼
    - 다양한 데이터들을 제공한다.
- **구글 데이터셋 서치**
    - https://datasetsearch.research.google.com
    - 구글에서 제공하는 데이터셋 검색 사이트
    - 키워드를 이용해 다양한 데이터셋을 검색하고 다운로드 받을 수 있다.
- **AI Hub**
    - https://aihub.or.kr
    - 국내외 기관/기업에서 추진한 지능정보산업 인프라 조성사업에서 공개한 AI 학습용 데이터셋들을 제공한다.

- 기타
    - **지자체**: 서울시 열린 데이터광장, 경기 데이터 드림
    - **금융관련**: 한국거래소, 금융통계정보시스템등
    - **영화관련**: 영화진흥위원회
    - **대중교통**: 국가교통데이터베이스, 교통카드 빅데이터 통합정보시스템등    
    - **관광관련**: 한국 관광 데이터랩등
    - **날씨정보**: 기상청 기상자료 개방포털, 네이버 날씨
## [크롬개발자 도구](https://developers.google.com/web/tools/chrome-devtools/)

- 크롬 개발자 도구는 웹 개발 및 디버깅을 위한 강력한 도구로 크롬 웹브라우저에 내장되어 있다.
    - `F12` 나 팝업 메뉴에서 `검사`를 선택한다.
    - 엣지 브라우저도 같은 개발자 도구를 제공한다.
- 웹 페이지의 HTML, CSS, JavaScript 코드를 검사하고 수정할 수 있으며, 네트워크 요청 응답 내용 분석, 성능 분석, 콘솔 로그 등 다양한 기능을 제공한다.
- 주요 기능
    - **요소 검사:** 웹 페이지의 특정 요소를 선택하여 HTML 구조, CSS 스타일, selector 등을 확인한다.
    - **콘솔:** JavaScript 코드를 실행할 수 있고 Javascript 실행시 발생한 오류 메시지 등을 확인할 수 있다.
    - **소스:** 웹 페이지의 JavaScript 코드를 확인할 수 있고 디버깅을 위한 중단점(break point)를 설정하고 디버깅할 수 있다.
    - **네트워크:** 웹 페이지를 요청할 때 발생하는 요청 및 응답 데이터를 분석하고 성능을 측정할 수 있다.
    - **성능:** 웹 페이지의 로딩 시간, 렌더링 성능에 걸린 시간등을 분석할 수 있다.
    - **애플리케이션:** 쿠키, 로컬 스토리지, 세션 스토리지 등 클라이언트 저장 데이터를 확인할 수 있다.
- 개발자 도구는 크롤링 시 필수적인 도구이며, 수집할 페이지를 분석하는데 사용된다.

### 크롤링에서 크롬 개발자 도구가 필요한 이유

크롤링은 웹 페이지에서 원하는 데이터를 코드로 자동 수집하는 작업이다. 이를 위해서는 수집 대상 데이터가 HTML 문서의 어느 위치에, 어떤 태그와 속성으로 존재하는지 먼저 파악해야 한다. 크롬 개발자 도구는 이 분석 과정에서 다음과 같은 이유로 필수적이다.

1. **수집할 데이터의 위치(HTML 구조) 파악**
    - 웹 페이지는 수백~수천 줄의 HTML로 구성되어 있어 원하는 데이터를 눈으로 직접 찾기 어렵다.
    - `요소(Elements)` 탭에서 특정 화면 요소에 마우스를 올리거나 클릭하면 해당 요소의 HTML 태그, 클래스(class), 아이디(id) 등을 즉시 확인할 수 있다.
    - 이를 통해 BeautifulSoup의 `find()`, `select()` 등에 사용할 **태그명, CSS 선택자**를 정확히 파악할 수 있다.

2. **동적으로 생성되는 데이터 확인**
    - 최근 웹 페이지 대부분은 JavaScript로 데이터를 동적으로 불러온다. 따라서 단순히 HTML 소스코드(`Ctrl+U`)를 보는 것만으로는 실제 화면에 표시되는 데이터를 찾을 수 없는 경우가 많다.
    - 개발자 도구의 `요소` 탭은 JavaScript 실행 후 최종적으로 렌더링된 HTML을 보여주기 때문에, 실제 수집 가능한 데이터의 위치를 정확히 확인할 수 있다.

3. **네트워크 요청 분석 (Ajax/API 크롤링)**
    - 검색 결과, 무한 스크롤, 탭 전환 등으로 불러오는 데이터는 별도의 HTTP 요청(Ajax)을 통해 서버에서 받아온다.
    - `네트워크(Network)` 탭을 이용하면 브라우저가 서버에 보내는 요청 URL, 요청 방식(GET/POST), 파라미터, 응답 데이터(주로 JSON) 등을 모두 확인할 수 있다.
    - 이 정보를 활용하면 HTML 파싱 없이 API에 직접 요청하여 데이터를 더 효율적으로 수집할 수 있다.

4. **CSS 선택자 및 XPath 직접 복사**
    - `요소` 탭에서 원하는 태그를 우클릭하면 `Copy > Copy selector` 또는 `Copy XPath` 기능으로 해당 요소의 CSS 선택자나 XPath를 바로 복사할 수 있다.
    - 이를 BeautifulSoup의 `select()` 등에 바로 활용하면 크롤링 코드 작성 시간을 크게 단축할 수 있다.

5. **쿠키 및 인증 정보 확인**
    - 로그인이 필요한 페이지를 크롤링하거나, 특정 요청에 쿠키/헤더 정보가 필요한 경우 `애플리케이션(Application)` 탭과 `네트워크` 탭에서 필요한 인증 정보를 확인하고 요청에 포함시킬 수 있다.
# BeautifulSoup
- BeautifulSoup는 파이썬에서 HTML/XML 문서를 파싱(parsing)하고 원하는 데이터를 쉽게 추출하기 위한 라이브러리이다.
    - 웹 크롤링(Web Scraping)에서 자주 사용되며, 복잡한 HTML 구조를 트리 형태로 변환해 다루기 쉽게 만들어준다.
    - 쉽게 말하면 HTML이나 XML 문서 내에서 원하는 정보를 가져오기 위한 파이썬 라이브러리이다.
    - 단독으로는 웹 요청 기능이 없기 때문에 보통 requests와 같은 HTTP 요청을 지원하는 라이브러리와 함께 사용한다.
  - [홈페이지](https://www.crummy.com/software/BeautifulSoup/)
  - [Document 사이트](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- 설치
    - beautifulsoup4 설치
        - pip install beautifulsoup4
    - lxml 설치(html/xml parser)
        - pip install lxml 

> - 파싱(Parsing) 이란
>     - 문자열 형태의 데이터를 분석해서 구조화된 형태로 변환하는 과정을 의미한다.
>     - 예)   
>            `<h1>Hello</h1>`    
>            는 단순 문자열이다. 이것을  
> 
>         ```
>         태그: <h1>       
>         내용: Hello
>         ```   
>          
>        처럼 의미있는 구조로 변환하는 것을 말한다.
`python
%pip install  beautifulsoup4  lxml
`
## 코딩 패턴
1. 조회할 HTML내용을 전달하여 BeautifulSoup 객체 생성 
1. BeautifulSoup객체의 메소드들을 이용해 문서내에서 필요한 정보 조회
    - 태그이름과 태그 속성으로 조회
    - css selector나 XPath를 이용해 조회
    - . 표기법을 이용한 탐색(Tree 구조 순서대로 탐색)
## BeautifulSoup 객체 생성
- BeautifulSoup(html str [, 파서])
    - 매개변수
        1. 정보를 조회할 html을 string으로 전달
        2. 파서
            - html.parser(기본파서)
            - lxml : 매우 빠르다. html, xml 파싱 가능(xml 파싱은 lxml만 가능)
                - 사용시 install 필요: `pip install lxml`
                - install 후 커널 restart 시킨다.
`python
from bs4 import BeautifulSoup

with open("example.html", "rt", encoding='utf-8') as fr:
    html_doc = fr.read()
    
print(html_doc[:50])
`
`python
# 정보를 추출할 웹문서의 내용을 str으로 전달.
soup = BeautifulSoup(html_doc, "lxml")
`
## 문서내에서 원하는 정보 검색

### Tag 객체
- 하나의 태그(element)에 대한 정보를 다루는 객체.
    - BeautifulSoup 조회 메소드들의 **조회결과의 반환타입.**
    - 조회 함수들이 찾은 Element가 하나일 경우 **Tag 객체를, 여러개일 경우 Tag 객체들을 담은 List(ResultSet)**를 반환한다.
    - Tag 객체는 찾은 정보를 제공하는 메소드와 Attribute를 가지고 있다. 또 찾은 Tag가 하위 element를 가질 경우 찾을 수 있는 조회 메소드를 제공한다.
- 주요 속성/메소드
    - **태그의 속성값 조회**
        - `Tag객체.get('속성명')`
        - `Tag객체['속성명']`
        - ex) `tag.get('href')` 또는 `tag['href']`
    - **태그내 text값 조회**
        - `Tag객체.get_text()`
        - `Tag객체.text`
        - ex) tag.get_text() 또는 tag.text
    - **contents 속성**
        - 조회한 태그의 모든 자식 요소들을 리스트로 반환
        - ex) `child_list = tag.contents`
## 조회 함수
- **태그의 이름으로 조회**
    - `find_all()`
    - `find()`
- **css selector를 이용해 조회**
    - `select(), select_one()`
### 태그의 이름으로 조회
- **find_all**(name=태그명, attrs={속성명:속성값, ..})
   - 이름의 모든 태그 element들을 리스트에 담아 반환.
   - 여러 이름의 태그를 조회할 경우 ResultSet(List와 동일하게 사용)에 태그명들을 묶어서 전달한다.
   - 태그의 attribute 조건으로만 조회할 경우 name을 생략할 수 있다. 
- **find**(name=태그명, attrs={속성명:속성값})
    - 이름의 태그중 첫번째 태그 element를 반환.
`python
from bs4 import BeautifulSoup

with open("example.html", "rt", encoding="utf-8") as fr:
    html_doc = fr.read()

soup = BeautifulSoup(html_doc, "lxml")
`
`python
# <div class="aninal_info">
result = soup.find_all("div", attrs={"class": "animal_info"}) # 문서안에 있는 모든 div 요소(element)를 ResultSet으로 반환.
`
`python
print(len(result))  # 조회 결과 개수
result
`
`python
tag1 = result[0]
print("content:")
print(tag1.text)
print("----------------------")
print(tag1.get_text())
print('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
print("class속성값:", tag1.get("class"), tag1['class'])

`
`python
tag1.contents
`
`python
result = soup.find("div")  # 조회결과 1개만(첫번째 것) 반환.
print(type(result))
print("-"*50)
print(result)
`
`python
# 태그의 content와 attribute 조회

print("content text:", result.text)
print("content text:", result.get_text())
print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
print("attribue의 value:", result.get("class"))
print("attribue의 value:", result["class"])
`
`python
# 태그의 모든 자식 요소들 조회
from bs4.element import NavigableString
result.contents

for tag in result.contents:
    print(type(tag))
    if isinstance(tag, NavigableString):
        continue
    print(tag.content)
`
### CSS Selector를 이용해 조회
- **select(selector='css셀렉터')**
    - css 셀렉터와 일치하는 tag들을 반환한다.
- **select_one(selector='css셀렉터')**
    - css 셀렉터와 일치하는 tag를 반환한다.
    - 일치하는 것이 여러개일 경우 첫번째 것 하나만 반환한다.
`python
from bs4 import BeautifulSoup

with open("example.html", "rt", encoding="utf-8") as fr:
    html_doc = fr.read()

soup = BeautifulSoup(html_doc, "lxml")

`
`python
# css selector를 이용한 조회
from pprint import pprint

result = soup.select("a")         #  태그이름(a)  
result = soup.select("a, span, img") # 태그이름(여러개)
result = soup.select("ul a")    # ul의 자손인 a태그 찾는다.
result = soup.select("ul > a")  # ul의 자식인 a태그 찾기.

result = soup.select_one("#animal1")           # *#animal1   # 모든 태그중 id=animal1
result = soup.select_one("div#animal1")      # a#animal1   # div태그 중에서 id=animal1

result = soup.select("ul + div")                 # ul의 바로 붙어있는 형제 태그중 div
result = soup.select("div:nth-child(3)")  # body의 3번째 자식 div

result = soup.select("a[href]")                        # href 속성이 있는 a 태그들
result = soup.select("a[href='http://www.google.com']") # href='http://www.naver.com' 속성을 가진 a 태그
result = soup.select('a[href$=".do"]')                 # $=  href 속성값이 .do로 끝나는 a태그들
result = soup.select('a[href^="https"]')               # ^=  href 속성값이 https로 시작하는 a태그


pprint(result)
`
`python
for tag in result:
    # print(tag.name)
    if tag.name == "a":
        print(tag.text, tag['href'], tag.name)  # tag객체.name : 태그 이름.
        print("-----------------------------")
`
--- C:\Document\SKN31\SKN31-inst\03_web_crawling\02_requests.ipynb ---
# requests 모듈을 이용한 웹 요청
- [Requests 홈페이지](https://requests.kennethreitz.org/en/master/)
- **HTTP 요청과 응답을 처리하는 파이썬 패키지**
- get/post 요청 방식을 모두 지원하며 요청시 설정해야 하는 헤더정보, 쿠키정보 설정등 HTTP요청을 위한 모든 기능을 지원한다.
- 설치
    - `pip install requests`

> HTTP 요청 방식(HTTP Method) 
> - HTTP 프로토콜은 클라이언트가 서버에 요청하는 목적에 따라 다음과 같은 방식을 정의한다.
>     - GET, POST, PUT, PATCH, DELETE, HEADER, OPTIONS, TRACE, CONECT
>         - 전통적인 Web은 GET과 POST 방식 지원하는데 Restful 기반 API에서는 GET, POST, PUT, PATCH, DELETE를 이용한다.
>     - GET: 기본 요청방식으로 서버가 가진 데이터를 요청한다. (RETRIEVE)
>     - POST: 클라이언트의 데이터를 서버에 전송(저장)한다. (CREATE)
>     - PUT: 서버가 가진 데이터를 클라이언트가 전송한 데이터로 변경한다. (UPDATE - 전체 변경)
>     - PATCH: 서버가 가진 데이터의 일부를 클라이언트가 전송한 데이터로 변경한다. (UPDATE - 부분 변경)
>     - DELETE: 서버의 데이터를 삭제한다. (DELETE)
## Crawling을 위한 requests 코딩 패턴
1. requests의 get()/post() 함수를 이용해 url을 넣어 서버 요청한다.
2. 응답받은 내용(일반적으로 HTML 페이지)을 처리.
    - text(HTML)은 BeautifulSoup를 이용해 원하는 내용을 추출한다.
    - binary 파일(text를 제외한 모든 파일-이미지, 동영상등)의 경우 파일출력을 이용해 local에 저장
## 요청 함수
- HTTP 요청 방식에 따라 두개 함수를 사용.
- get(): GET방식 요청
    - GET 방식(기본방식): 목적 - client가 자원을 요청하는 것 목적(달라는 것.)
- post(): POST방식 요청
    - POST 방식: 목적 - client가 자기의 자원을 server로 전송하는 것이 목적.
### requests.get(URL)
- **GET 방식 요청**
- **주요 매개변수**
    - params: 요청파라미터를 dictionary로 전달
    - headers: HTTP 요청 header를 dictionary로 전달
        - 'User-Agent', 'Referer' 등 헤더 설정
        - 크롤링을 하기 위해 필요한 header 정보는 웹브라우저의 개발자 도구를 이용해 확인한다. (Network 탭에서 확인)
    - cookies: 쿠키정보를 전달
- **반환값(Return Value)**
    - [Response](#Response객체): 응답결과
### requests.post(URL)
- **POST 방식 요청**
- **주요 매개변수**
    - datas : 요청파라미터를 dictionary로 전달
    - files : 업로드할 파일을 dictionary로 전달
        - key: 이름, value: 파일과 연결된 InputStream(TextIOWrapper)
    - headers: HTTP 요청 header를 dictionary로 전달
        - 'User-Agent', 'Referer' 등 헤더 설정
    - cookies: 쿠키정보를 전달
- **반환값(Return Value)**
    - [Response](#Response객체): 응답결과
> ### 요청파라미터(Request Parameter)
> - 요청파라미터란
>     - 서버가 일하기 위해 클라이언트로 부터 받아야 하는 값들
>     - `name=value` 형식으로 클라이언트가 전달한다. 여러개일 경우 `&`로 연결해서 전송됨 (ex: page=1&keyword=test)
> - Get 요청시 queryString 으로 전달
>     - querystring: URL 뒤에 붙여서 전송하는 요청파라미터를 말한다.
>     - URL 뒤에 ?를 붙이고 그 뒤에 요청파라미터를 붙여 구성한다. (`?`가 url과 요청파라미터를 구분하는 구분자로 사용된다.)
>     - ex) https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=python
>     - requests.get() 요청시 요청파라미터 전달하는 두가지 방법
>         1. url 뒤에 querystring으로 붙여서 전송
>         2. dictionary 에 name=value 형태로 만들어 매개변수 params에 전달
>     - Post 요청시 요청정보의 body에 넣어 전달
>         - requests.post() 요청시에는 dictionary로 구성한 뒤 매개변수 datas에 전달한다. 
> ### HTTP 요청 헤더(Request Header)
> HTTP 요청시 웹브라우저가 client의 여러 부가적인 정보들을 Key-Value 쌍 형식으로 전달한다.
> - accept: 클라이언트가 처리가능한 content 타입 (Mime-type 형식으로 전달)
> - accept-language: 클라이언트가 지원하는 언어(ex: ko, en-US)
> - host: 요청한 host 
> - user-agent: 웹브라우저 종류
## Response객체 -  응답데이터
- get()/post() 의 요청에 대한 서버의 응답 결과를 Response 클래스의 객체에 담아 반환한다.
    - Response객체의 속성(attribute)들을 이용해 서버가 응답결과를 조회할 수있다.
- **주요 속성(Attribut)**
    - **url**
        - 응답한 서버의 url
    - **status_code**
        - HTTP 응답 상태코드
    - **headers**
        - 응답 header 정보로 dictionary로 반환한다.
    - **응답 결과 데이터 조회**
        - **text**
            - 응답내용(html을 str로 반환)
        - **content**
            - 응답내용(응답결과가 binary-image, 동영상등-일 경우 사용하며 bytes 타입으로 반환한다.)
        - **json()**
            - 응답 결과가 JSON 인 경우 dictionary로 변환해서 반환한다.
> ### JSON(JavaScript Object Notation)
> key-value 형태 또는 배열 형태의 text이며 이 기종간 데이터 교환에 많이 사용된다. 자바스크립트 언어에서 Object와 array를 생성하는 문법을 이용해 만듬. 
> - [JSON 공식사이트](http://json.org)
>
> ### Python json 모듈
>
> JSON 형식 문자열을 다루는 파이썬 표준 모듈
> - json.loads(json문자열)
>    - JSON 형식 문자열을 dictionary로 변환
> - json.dumps(dictionary)
>    - dictionary를 JSON 형식 문자열로 변환
> ### HTTP 응답 상태코드
> - 서버의 응답 결과를 나타내는 세 자리 숫자 코드이다. 이 코드를 통해 요청이 성공적으로 처리되었는지, 오류가 발생했는지, 아니면 다른 조치가 필요한지 등을 클라이언트에게 알려준다.
> - https://ko.wikipedia.org/wiki/HTTP_상태_코드
>     - 2XX(200번대): 성공
>         - 200: OK
>     - 3XX: 다른 주소로 이동 (이사)
>         - 300번대이면 자동으로 이동해 준다. 크롤링시는 사용할 일이이 별로 없다.
>     - 4XX: 클라이언트 오류 (사용자가 잘못한 것)
>       - 403: 권한 없음. (권한이 없는 사용자가 요청한 경우)
>       - 404: 존재하지 않는 주소
>       - 405: 잘못된 요청방식으로 요청한 경우.(예를들어 POST 요청을 받는 페이지를 GET방식으로 요청 하면 발생.)
>     - 5XX: 서버 오류 (서버에서 문제생긴 것)
>       - 500: 서버가 처리방법을 모르는 오류
>       - 503: 서버가 다운 등의 문제로 서비스 불가 상태
### Get 방식 요청 예제

#### 네이버 검색 결과 가져오기
- naver 검색 요청 url을 이용해 검색을 요청하고 그 결과를 가져온다.
`python
import requests

url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query={}"
print("------------------")
keyword = input("keyword:")
url = url.format(keyword)
print(f"요청 URL: {url}")

res = requests.get(url)


# 구글에서 my user agent로 검색
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/123.0.0.0 Safari/537.36",
    "Referer":"www.naver.com"
}
res = requests.get(url, headers=headers)

print(res.status_code)
if res.status_code == 200:  # 요청한 문서를 받았다.
    print(type(res))
    print(type(res.text), len(res.text)) # 응답받은 html 내용을 조회
    print(res.text[:1000])
else:
    print("응답을 받지 못함.", res.status_code)

`
### War and Peace
`python
from bs4 import BeautifulSoup
import requests

url = 'http://www.pythonscraping.com/pages/warandpeace.html'

user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"

res = requests.get(url, headers={"user-agent":user_agent})

if res.status_code == 200:

    soup = BeautifulSoup(res.text, "lxml")
    green_list = soup.select("span.green")
    search_names = [] # <span class='green'>이름</span> 이름들만 추출해서 저장.
    for tag in green_list:
        search_names.append(tag.text.replace("\n", ' '))
        
else:
    print("실패:", res.status_code)
`
`python
len(search_names)
`
## binary date 를 다운로드
`python
url = "https://species.nibr.go.kr/UPLOAD/digital/species/12000021/120000212946/20180831092453153548.jpg"

res = requests.get(url, headers={"user-agent":user_agent})

if res.status_code == 200:
    file = res.content  # binary 데이터를 bytes 타입으로 반환.  res.text: 문서내용을 str
    print(type(file))
    with open("tiger.jpg", "wb") as fo:
        fo.write(file)
`
## Daum New 목록 조회
- https://news.daum.net 의 뉴스기사 목록에서 제목, 상세뉴스 url을 수집해서 csv 파일에 저장
- 크롤링시 확인할 내용
    - 요청 url을 파악한다.
    - 페이지에서 수집할 내용을 찾는 방법을 웹브라우저 **개발자 도구를 이용해 찾는다.**
    - 요청시 전달할 **요청정보들(header, cookie 등 정보) 를 개발자 도구를 이용해 찾는다.**
> ### CSV 형식 파일
> - Comma Separate Value
> - 정형(표형태) 데이터를 text 파일에 저장하는 방식(형식)
> - 한행에 한개의 데이터를 저장
> - 데이터를 구성하는 속성들은 "," 를 구분자로 나눠서 작성한다.
> - 예
>     ```csv
>       이름,나이,주소
>       홍길동,20,인천
>       이순신,15,서울
>       강감찬,30,부산
>     ```
`python
from datetime import datetime
datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
`
`python
import requests
from bs4 import BeautifulSoup

url = "https://news.daum.net"
# 뉴스제목: <a>의 content, 링크주소: <a>의 href 속성값
a_selector = r"#\35 8d84141-b8dd-413c-9500-447b39ec29b9 > ul > li > a"

# user-agent: 1.개발자도구>콘솔: navigator.userAgent, 2. google검색: my user agent 로 검색
user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'

def get_daum_news_list():
    """
    다음 뉴스 기사 목록을 크롤링하는 함수.
    news.daum.net의 기사 목록에서 "제목", "링크" 들을 수집.

    aguments
    return
        DataFrame: 조회결과들을 담은 DataFrame(표)
    raise
        Exception: 처리 실패시 발생
    """
    # 1. 요청
    res = requests.get(url, headers={"user-agent":user_agent})
    # 한글 처리
    res.encoding = "utf-8"
    
    # 2. 응답 페이지에서 필요한 정보 추출
    if res.status_code == 200:
        soup = BeautifulSoup(res.text, "lxml")
        a_list = soup.select(a_selector)
        result_list = []
        for a_tag in a_list:
            # title = a_tag.get_text()
            strong_tag = a_tag.select_one("strong.tit_txt") # Tag.select() -> Tag 하위 태그에서 찾는다.
            title = strong_tag.text
            link = a_tag.get("href")
            result_list.append([title.strip(), link])
        
        return result_list
    else:
        raise Exception(f"요청 실패. 응답코드: {res.status_code}")      


if __name__ == "__main__":
    result = get_daum_news_list()
    
    # 저장할 디렉토리를 생성
    import os
    from datetime import datetime
    
    import pandas as pd
    save_dir = "daum_news_list"
    os.makedirs(save_dir, exist_ok=True)
    
    # 저장할 파일명 - 특정 기간마다 크롤링 수행할 경우 실행 날짜/시간을 이용해서 만들어 준다.
    d = datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
    file_path = f"{save_dir}/{d}.csv"

    # DataFrame 생성
    result_df = pd.DataFrame(result, columns=['제목', "링크주소"])
    
    # csv 파일로 저장.
    result_df.to_csv(file_path, index=False)
`
# Open API 를 이용

Open API는 말 그대로 공개된 프로그래밍 인터페이스로, 외부 개발자나 사용자가 특정 서비스나 애플리케이션에 접근하여 서비스를 받을 수 있도록 공개된 API이다.

## 정의

Open API는 애플리케이션 개발자가 공개된 API를 사용해 다른 서비스와 애플리케이션을 연동할 수 있도록 만든 인터페이스이다. 
일반적으로 RESTful API 형식으로 서비스 한다.

## 특징

- 공개성: 누구나 접근할 수 있으며, 문서화가 잘 되어 있어 사용자가 쉽게 활용할 수 있음.
- 표준화: 대부분 표준화된 HTTP 프로토콜과 JSON, XML 형식을 사용.
- 보안성: API 키나 OAuth 같은 인증 방식으로 보안을 유지.

## 사용 사례
다양한 기업, 공공기관에서 다양한 서비스를 오픈 api로 제공한다. 
- 공공데이터 포털: 행정안전부에서 서비스하는 정부, 공공기관, 지자체 등이 보유한 데이터를 개방하고 제공하는 플랫폼.
- 구글 맵 API: 외부 애플리케이션에서 구글 맵을 활용할 수 있게 해주는 대표적인 Open API.
- 트위터 API: 트위터(X) 데이터를 외부에서 가져오거나 포스팅할 수 있도록 제공.
- 네이버 개발자 오픈 API: 네이버의 다양한 서비스를 제공. (검색, 검색어 트랜드 조회, 캘린더 등)
## 공공데이터 포털 데이터 조회
- 서비스를 받기위한 API 키를 신청한다.
- 가이드에 따라 요청방식, 요청 URL, 전달 값을 맞춰 요청한다.
> ### JSON 형식 파일
> - 데이터를 text파일에 저장하는 형식으로 Javascript 객체 표기법을 이용한다.
> - 파이썬의 dictionary 표기법과 동일다.
> - 파이썬은 json 표준 모듈을 이용해 처리한다.
>     - json.dump(): dictionary를 json 형식 문자열로 변환
>     - json.load(): json 파일을 읽어 dictionary로 반환
- 공공 데이터 포털에서 제공하는 Open API를 이용해 데이터 수집
  -  https://www.data.go.kr/ 
  -  회원가입 후 로그인 한다.
  -  원하는 데이터를 검색한다.
  -  데이터 "활용신청"을 한다.
- 활용신청 현황은 로그인 후에 `마이페이지 > 데이터 활용(왼쪽 메뉴) > Open API > 활용신청 현황` 에서 확인할 수있다.
  - "데이터 상세 설명" 페이지의 `Open API 명세 확인 가이드` 에 맞춰 요청한다.
  - 코드 작성전에 `API 목록` 에서 미리 테스트 해볼 수있다.
`python
import requests
url = "http://apis.data.go.kr/B551182/MadmDtlInfoService2.7/getSpclDiagInfo2.7"
params = {
    "serviceKey":"laglZqyWw2mLMtqjyw9zoItPpOt3ChysDk/RvZnvfD+ejQHlbetkWSrYTKrpBcgrYjRdW+MP5b6d7ArwHxVj4g=="
    , "_type":"json"
}

res = requests.get(url, params=params)

if res.status_code == 200:
    print(res.text)
else:
    print(res.status_code)
`
`python
import json

data = json.loads(res.text)  # json 문자열 -> Dict

`
`python
print(data)
`
`python
data['response']
`
--- C:\Document\SKN31\SKN31-inst\03_web_crawling\03_Selenium.ipynb ---
# [Selenium](https://www.selenium.dev/)

-   **웹 브라우저 제어 도구**
    -   원래는 웹 어플리케이션 자동 테스트를 위한 목적으로 만들어진 프레임워크.
    -   웹브라우저를 프로그램을 이용해 제어할 수 있다.
-   **requests 모듈의 한계**
    -   Javascript를 이용한 AJAX 기법의 비동기적 요청 처리 페이지 크롤링이 힘들다.
    -   로그인 후 요청이 가능한 페이지들에 대한 크롤링이 번거롭다.
    -   Selenium을 활용하면 이 두가지 모두 쉽게 처리할 수 있다.
-   **Selenium 단점**
    -   속도가 느림
-   **설치**
    -   `pip install selenium`
-   [튜토리얼](https://selenium-python.readthedocs.io/)


# Driver

-   Driver
    -   웹브라우저를 제어하는 프로그램으로 웹 브라우저별로 제공된다.
    -   Selenium 패키지의 Driver객체를 이용해 제어하게 된다.

## 설치

1. **DriverManager 이용**
    - `pip install webdriver-manager`

### DriverManager를 이용해 WebDriver 생성

`python
from webdriver_manager.chrome import ChromeDriverManager

# driver를 다운 받고 그 경로(path)를 반환.
driver_path = ChromeDriverManager().install()
`
`python
driver_path
`
### 다운 받은 Driver이용해 WebDriver생성
- WebDriver를 생성하면 웹브라우저가 실행 되며 생성된 웹브라우저를 WebDriver를 사용해서 컨트롤한다.
- 페이지 이동
    - `WebDriver.get("이동할 URL 주소")`
- Web browser 끄기
    - `WebDriver.close()`
`python
from selenium.webdriver.chrome.service import Service
from selenium import webdriver

service = Service(executable_path=driver_path)
browser = webdriver.Chrome(service=service)   # 웹브라우저 제어 할 수있는 Driver 객체 반환.
`
`python
browser.get("https://www.naver.com")
`
`python
browser.get("https://www.daum.net")
`
`python
browser.close()
`
## WebDriver 주요 속성/메소드

-   **page_source** : 현재 페이지의 html 소스를 반환
    -   page_source로 html을 받아서 BeautifulSoup으로 크롤링할 원소를 찾을 수 있다.
-   **get_screenshot_as_file(파일경로)**
    -   현재 웹브라우저 화면을 지정한 캡처해서 지정한 파일 경로에 저장한다.
-   **set_window_size(width, height)**
    -   웹브라우저 윈도우 크기 조정
-   **maximize_window()**
    -   웹브라우저 화면 최대 크기로 만들기.
-   **get_window_size()**
    -   웹브라우저 윈도우 크기 조회. (width, height)
-   **execute_script("자바스크립트코드")**
    -   문자열로 전달한 **javascript 코드**를 실행시킨다.
-   **quit()**, **close()**
    -   웹브라우저를 종료한다.

## Page의 Element 조회 메소드

-   BeautifulSoup을 이용하지 않고 셀레늄 자체 parser를 이용할 수 있다.
-   **find_element()**: 조건을 만족하는 첫번째 요소를 반환한다.
    -   매개변수
        -   **by**: 검색방식
            -   **By.ID**
            -   **By.CLASS_NAME**
            -   **By.TAG_NAME**
            -   **By.CSS_SELECTOR**
            -   **By.XPATH**
            -   **By.LINK_TEXT**
            -   **By.PARTIAL_LINK_TEXT**
        -   **value**: str - 검색조건
    -   반환타입: **WebElement**
-   **find_elements()**: 조건을 만족하는 모든 요소를 찾는다.
    -   매개변수: find_element()와 동일
    -   반환타입
        -   **list of WebElement**

### WebElement (조회결과) 메소드 / 속성

-   메소드
    -   **get_attribute('속성명')**: 태그의 속성값 조회
    -   **send_keys("문자열")**: 입력폼에 문자열 값을 입력.
    -   **click()**: element를 클릭
    -   **submit()**: element가 Form인 경우 폼 전송
    -   **clear()**: element가 입력폼인 경우 텍스트를 지운다.
    -   위 조회 메소드들 : 하위의 elements들 조회
-   속성
    -   **text**: 태그내의 텍스트
    -   **tag_name**: 태그이름

`python
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
`
`python
service = Service(executable_path=ChromeDriverManager().install())
browser = webdriver.Chrome(service=service)

# 주소의 페이지로 이동.
browser.get("https://www.naver.com")    
`
`python
 # html 문서를 str로 반환. - BeautifulSoup을 사용해 element를 조회하는 경우 page_source의 내용을 넣어서 BeautifulSoup 객체를 생성.
html = browser.page_source
print(html[:500]) #str 반환
`
`python
# 스크린 샷을 찍어서 저장.
browser.get_screenshot_as_file("naver_main.png")
`
`python
# 창 최대화
browser.maximize_window() 
`
`python
# 창 크기 조회
size = browser.get_window_size()  
print(size)
`
`python
# 자바스크립트 코드 실행.
browser.execute_script("alert('안녕하세요');") 
`
`python
alert_window = browser.switch_to.alert
alert_window.accept()
`
`python
# 페이지 안에서 특정 element를 조회(beautifulsoup의 select(), find() 역할)
# find_element(찾는패턴기준, "찾는 패턴")
query_textfield = browser.find_element(By.ID, "query")
print(type(query_textfield))

print(query_textfield.tag_name)
print(query_textfield.get_attribute("id"))
print(query_textfield.get_attribute("name"))
`
`python
query_textfield.send_keys("날씨 예보")
# query_textfield.send_keys(Keys.ENTER)
`
`python
query_textfield.send_keys(Keys.ENTER)
`
`python
query_textfield2 = browser.find_element(By.ID, "nx_query")

query_textfield2.clear()
query_textfield2.send_keys("미세먼지")
query_textfield2.send_keys(Keys.ENTER)
`
`python
search_btn = browser.find_element(By.CLASS_NAME, "bt_search")
search_btn.click()
`
`python
browser.close()
`
## 브라우저의 headless 모드를 이용.

-   Headless 브라우저
    -   브라우저의 창을 띄우지 않고 실제 브라우저와 동일하게 동작하도록 하는 방식
    -   CLI(command line interface) 기반의 OS (리눅스 서버)를 지원하기 위한 브라우저
    -   크롬은 버전 60부터 headless 모드 지원
-   selenium에서 headless 모드
    -   webdriver options에 headless 설정

> -   **Brower Option**: https://www.selenium.dev/documentation/webdriver/drivers/options/

`python
from selenium import webdriver
import time 

option = webdriver.ChromeOptions()
option.add_argument("--headless")

service = Service(executable_path=ChromeDriverManager().install())

browser = webdriver.Chrome(service=service,options=option)
browser.maximize_window()
browser.get("https://www.daum.net")

time.sleep(1) # 지정한 초만큼 일시멈춤
browser.get_screenshot_as_file("daum_main2.png")
browser.close()
print("완료")
`
# 대기 하기

## Implicit Wait

-   현재 페이지에 없는 element나 elememt들이 loading 되기를 설정한 시간만큼 기다린다.
-   설정한 시간 이내에 elements가 loading되면 대기가 종료된다.
-   `implicit_wait(초)` 구문 사용
-   한번 설정하면 설정된 WebDriver가 close될때 까지 그 설정이 유지된다.
-   https://selenium-python.readthedocs.io/waits.html

## Explicit Wait

-   특정 조건/상황을 만족할 때 까지 대기
-   `WebDriverWait(browser, 초).until(expected_contition)` 구문 사용
-   expected_condition 함수
    -   selenium.webdriver.support.expected_conditions 모듈에 정의된 함수 사용.
        -   https://selenium-python.readthedocs.io/api.html#module-selenium.webdriver.support.expected_conditions



### 예)
- Implicit Wait
    ```python
    browser.implicit_wait(5)
    # 페이지 로딩(dom tree완성)될 때까지 최대 5초간 기다린다. (로딩이 되면 5초가 되지 않아도 대기를 끝낸다.)
    ```

- Explicit Wait
    ```python
    from selenium.webdriver.support import expected_conditions as EC

    ...

    try:
        # element가 반환될 때 까지 최대 10초 기다린다.
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "myDynamicElement"))
        )
    finally:
        driver.quit()
    ```

# 무한 스크롤

-   javascript 에서 현재 페이지의 높이(scroll pane(scroll bar가 움직이는 공간)의 길이)
    -   `document.documentElement.scrollHeight`
-   scroll bar를 이동
    -   `window.scrollTo(가로 스크롤바를 이동시킬 위치:정수,
        세로 스코롤바를 이동시킬 위치:정수)

`python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
import time
import random

service = Service(executable_path=ChromeDriverManager().install())
browser = webdriver.Chrome(service=service)

browser.implicitly_wait(5)
browser.maximize_window()

browser.get('https://pokemonkorea.co.kr/pokedex')
time.sleep(2)

scroll_pane_height = browser.execute_script(
    "return document.documentElement.scrollHeight"  # 문서의 height를 반환.
)
# scroll_pane_height: 이동 전 높이, new_scroll_pane_height: 이동 후 높이
while True:
    # 스크롤을 맨 아래로 내린다.
    browser.execute_script("window.scrollTo(0, document.documentElement.scrollHeight)")

    time.sleep(random.uniform(1.5, 2.5)) # 1.5 ~ 2.5의 random한 값 생성. 아래 붙을 시간을 준다.
    # 높이를 계산
    new_scroll_pane_height = browser.execute_script(
        "return document.documentElement.scrollHeight"
    )
    # 이동 전, 이동 후 높이가 같다면 종료
    if scroll_pane_height == new_scroll_pane_height:
        break
    scroll_pane_height = new_scroll_pane_height

html = browser.page_source

browser.close()
`
`python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, "lxml")
h3 = soup.select("a > div.bx-txt > h3")
print(len (h3))
`
