export const tier3 = [
  // ================= UNIT 11 =================
  {
    id: 11,
    title: "UNIT 11\n객체지향 마스터",
    nodes: [
      {
        id: "node_11_1",
        title: "유산 물려받기 (상속)",
        lessons: [
          { type: 'theory', content: '클래스를 만들 때 기존 클래스의 모든 기능을 그대로 물려받을 수 있습니다. 이를 **상속(Inheritance)**이라고 합니다. `class 자식(부모):` 형태로 작성합니다.' },
          { type: 'quiz_multiple_choice', content: '`class Animal:`을 상속받는 `Dog` 클래스의 올바른 선언은?', options: ['class Dog = Animal:', 'class Dog(Animal):', 'class Dog inherits Animal:'], answer: 1, explanation: '클래스 이름 뒤의 소괄호 () 안에 상속받을 부모 클래스의 이름을 적습니다.' , hint: '클래스 이름 뒤 소괄호 안에 상속받을 부모 클래스 이름을 적습니다.' },
          { type: 'quiz_code', content: '`Animal` 클래스를 상속받는 `Bird` 클래스를 만들고, 부모의 `move()` 메서드를 호출해보세요.', initialCode: 'class Animal:\n    def move(self):\n        print("움직인다")\n\nclass Bird(Animal):\n    pass\n\nb = Bird()\nb.move()', expectedOutputs: ['움직인다'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_11_2",
        title: "기능 덮어쓰기 (오버라이딩)",
        lessons: [
          { type: 'theory', content: '부모가 물려준 기능이 마음에 들지 않으면, 자식 클래스에서 똑같은 이름의 메서드를 다시 만들어서 덮어쓸 수 있습니다. 이를 **오버라이딩(Overriding)**이라고 합니다.' },
          { type: 'quiz_code', content: '`Animal`의 `speak`는 "소리를 냅니다"인데, `Dog`에서는 "멍멍!"으로 오버라이딩 해보세요.', initialCode: 'class Animal:\n    def speak(self):\n        print("소리를 냅니다")\n\nclass Dog(Animal):\n    def speak(self):\n        print("멍멍!")\n\nd = Dog()\nd.speak()', expectedOutputs: ['멍멍!'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_11_3",
        title: "부모님 소환하기 (super)",
        lessons: [
          { type: 'theory', content: '오버라이딩을 하긴 했지만, 부모의 원래 기능도 같이 쓰고 싶다면 `super()`를 사용하여 부모의 메서드를 소환할 수 있습니다.' },
          { type: 'quiz_code', content: '`super().speak()`를 사용하여 부모의 소리도 함께 출력하게 완성하세요.', initialCode: 'class Animal:\n    def speak(self):\n        print("소리를 냅니다")\n\nclass Dog(Animal):\n    def speak(self):\n        super().speak()\n        print("멍멍!")\n\nd = Dog()\nd.speak()', expectedOutputs: ['소리를 냅니다\n멍멍!'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_11_4",
        title: "마법의 메서드 (Magic Methods)",
        lessons: [
          { type: 'theory', content: '파이썬 클래스에는 앞뒤로 언더바 2개가 붙은 특별한 메서드들이 있습니다. `__init__`이 생성자라면, `__str__`은 객체를 `print()`할 때 예쁘게 보여주는 마법을 부립니다.' },
          { type: 'quiz_multiple_choice', content: '`print(객체)`를 실행했을 때 호출되는 매직 메서드는?', options: ['__print__', '__show__', '__str__'], answer: 2, explanation: '__str__ 메서드는 객체가 문자열로 변환(str() 또는 print())될 때 무엇을 반환할지 정의합니다.' , hint: 'print(객체)를 실행하면 파이썬은 자동으로 __str__ 메서드를 호출합니다.' },
          { type: 'quiz_code', content: '`__str__` 메서드가 "나는 책입니다"를 반환하게 하여, 객체를 print 했을 때 그 문구가 나오게 하세요.', initialCode: 'class Book:\n    def __str__(self):\n        return "나는 책입니다"\n\nb = Book()\nprint(b)', expectedOutputs: ['나는 책입니다'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_11_5",
        title: "클래스 변수와 인스턴스 변수",
        lessons: [
          { type: 'theory', content: '`self.변수`는 객체(붕어빵)마다 다르게 가지는 개인 소유물입니다. 반면, 메서드 바깥(클래스 바로 아래)에 만든 변수는 모든 붕어빵이 공유하는 **클래스 변수**가 됩니다.' },
          { type: 'quiz_code', content: '모든 자동차가 공유하는 바퀴 수(`wheels`)를 4로 만들고 출력해보세요.', initialCode: 'class Car:\n    wheels = 4\n\nprint(Car.wheels)', expectedOutputs: ['4'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      }
    ]
  },
  // ================= UNIT 12 =================
  {
    id: 12,
    title: "UNIT 12\n파일과의 대화 (I/O)",
    nodes: [
      {
        id: "node_12_1",
        title: "파일 읽기 (open)",
        lessons: [
          { type: 'theory', content: '컴퓨터에 있는 파일을 파이썬으로 열 때는 `open("파일명", "모드")`를 씁니다. "r"은 읽기(Read), "w"는 쓰기(Write) 모드입니다.' },
          { type: 'quiz_multiple_choice', content: '존재하지 않는 파일을 "r" (읽기) 모드로 열려고 하면 어떻게 될까요?', options: ['빈 파일이 새로 생긴다', '에러(FileNotFoundError)가 발생한다', '아무 일도 안 일어난다'], answer: 1, explanation: '읽기 모드("r")는 반드시 파일이 존재해야 합니다. 파일이 없으면 에러가 터집니다.' , hint: '읽기("r") 모드는 파일이 반드시 존재해야 하며, 없으면 에러가 발생합니다.' },
          { type: 'theory', content: '`open()`으로 열었다면 반드시 `.close()`로 문을 닫아주어야 합니다! 닫지 않으면 메모리 누수가 발생합니다.' }
        ]
      },
      {
        id: "node_12_2",
        title: "안전하게 열고 닫기 (with문)",
        lessons: [
          { type: 'theory', content: '파이썬의 마법 `with`문을 쓰면 블록이 끝날 때 알아서 파일을 안전하게 닫아줍니다! `with open("파일", "r") as f:` 형태로 씁니다.' },
          { type: 'quiz_code', content: 'with문을 사용하여 임의의 텍스트가 있다고 가정하고 출력하는 뼈대입니다. 문법을 완성하세요.', initialCode: 'with open("test.txt", "w") as f:\n    f.write("Hello")\n    print("파일 닫힘 자동 처리!")', expectedOutputs: ['파일 닫힘 자동 처리!'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_12_3",
        title: "파일 쓰기와 추가하기",
        lessons: [
          { type: 'theory', content: '파일을 쓸 때는 "w" 모드를 씁니다. 주의할 점은 기존 내용이 싹 날아가고 새로 써진다는 것입니다! 기존 내용 밑에 추가하려면 "a" (Append) 모드를 써야 합니다.' },
          { type: 'quiz_multiple_choice', content: '기존 파일의 내용을 보존하면서 맨 밑에 새로운 줄을 추가하려면 어떤 모드로 열어야 할까요?', options: ['"r"', '"w"', '"a"'], answer: 2, explanation: '"a" (Append) 모드는 파일의 끝에 데이터를 이어 씁니다.' , hint: '기존 내용을 유지한 채 끝에 이어 쓰려면 추가(Append) 모드를 사용합니다.' },
          { type: 'quiz_code', content: '`"a"` 모드로 열어 "World"를 파일에 추가하는 시늉을 하는 코드를 작성하세요.', initialCode: 'with open("test.txt", "a") as f:\n    f.write("World")\nprint("추가 완료")', expectedOutputs: ['추가 완료'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_12_4",
        title: "한 줄씩 읽어오기",
        lessons: [
          { type: 'theory', content: '엄청나게 거대한 파일을 한 번에 다 읽으면 컴퓨터가 다운될 수 있습니다! 그래서 `for line in f:` 처럼 파일 객체를 for문에 넣으면 한 줄씩 안전하게 읽어옵니다.' },
          { type: 'theory', content: '읽어온 텍스트 끝에는 눈에 보이지 않는 엔터(줄바꿈 기호 `\\n`)가 포함되어 있습니다. 이를 제거하려면 `.strip()` 메서드를 씁니다.' }
        ]
      },
      {
        id: "node_12_5",
        title: "CSV 다루기 꿀팁",
        lessons: [
          { type: 'theory', content: '엑셀 데이터처럼 콤마(,)로 구분된 파일을 CSV라고 합니다. 텍스트를 읽어온 후 `.split(",")`을 사용하면 콤마를 기준으로 리스트로 쪼개줍니다!' },
          { type: 'quiz_code', content: '`"사과,1000원"`을 콤마로 쪼개어 리스트로 만들어 출력해보세요.', initialCode: 'line = "사과,1000원"\nresult = line.split(",")\nprint(result)', expectedOutputs: ["['사과', '1000원']"] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      }
    ]
  },
  // ================= UNIT 13 =================
  {
    id: 13,
    title: "UNIT 13\n도구 상자 (모듈과 패키지)",
    nodes: [
      {
        id: "node_13_1",
        title: "남의 코드 빌려오기 (import)",
        lessons: [
          { type: 'theory', content: '파이썬에는 수많은 천재들이 미리 만들어둔 도구 상자(모듈)들이 있습니다. 이를 가져오려면 `import 모듈이름`을 씁니다.' },
          { type: 'quiz_code', content: '`math` 모듈을 import 하고, 원주율 `math.pi`를 출력해보세요. (소수점 2자리까지만 반올림해서 3.14로 검사합니다)', initialCode: 'import math\nprint(round(math.pi, 2))', expectedOutputs: ['3.14'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_13_2",
        title: "원하는 것만 쏙 빼오기 (from)",
        lessons: [
          { type: 'theory', content: '도구 상자가 너무 커서 내가 쓸 도구 하나만 쏙 빼오고 싶다면 `from 모듈 import 함수`를 씁니다. 그러면 앞에 `모듈.`을 안 붙이고도 쓸 수 있죠!' },
          { type: 'quiz_code', content: '`from math import sqrt`를 사용하여 16의 제곱근(`sqrt`)을 구해 출력하세요.', initialCode: 'from math import sqrt\nprint(sqrt(16))', expectedOutputs: ['4.0'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' },
          { type: 'theory', content: '`import 모듈 as 별명`을 쓰면 이름이 긴 모듈에 짧은 별명을 붙일 수 있습니다! 예: `import pandas as pd`' }
        ]
      },
      {
        id: "node_13_3",
        title: "난수 발생기 (random)",
        lessons: [
          { type: 'theory', content: '파이썬의 가장 재미있는 기본 모듈, `random`입니다! 주사위를 던지거나 로또 번호를 뽑을 때 필수적이죠.' },
          { type: 'theory', content: '`random.randint(1, 10)`은 1부터 10 사이의 임의의 정수를 하나 뽑아줍니다.' },
          { type: 'quiz_multiple_choice', content: '리스트 안에서 항목을 무작위로 하나 골라주는 함수는?', options: ['random.pick()', 'random.choice()', 'random.select()'], answer: 1, explanation: 'random.choice(리스트) 를 사용하면 리스트 원소 중 하나를 랜덤으로 뽑아줍니다.' , hint: '리스트에서 무작위로 하나를 뽑을 때는 random.choice()를 사용합니다.' },
          { type: 'quiz_code', content: '`random.choice`를 이용해 리스트에서 아무거나 하나 뽑는 로직을 완성하세요.', initialCode: 'import random\nitems = ["사과", "바나나", "딸기"]\n# 선택된 값이 뭐든 출력되므로 에러 없이 실행만 되면 통과!\nprint(random.choice(items))', expectedOutputs: [] , hint: '이미 완성된 코드예요. 실행 결과는 매번 달라져도 정상입니다!' }
        ]
      },
      {
        id: "node_13_4",
        title: "시간을 다루는 마법사 (datetime)",
        lessons: [
          { type: 'theory', content: '현재 시간을 알고 싶거나, 100일 뒤의 날짜를 계산하고 싶다면 `datetime` 모듈을 사용합니다.' },
          { type: 'quiz_code', content: '`datetime.date.today()`를 사용해 오늘 날짜를 출력해보세요. (실행 시 에러가 없으면 패스)', initialCode: 'import datetime\nprint(datetime.date.today())', expectedOutputs: [] , hint: '이미 완성된 코드예요. 에러 없이 실행되면 통과입니다!' }
        ]
      },
      {
        id: "node_13_5",
        title: "컴퓨터 속 탐험 (os 모듈)",
        lessons: [
          { type: 'theory', content: '내 컴퓨터의 폴더를 만들고, 파일 이름을 바꾸고, 폴더 안의 파일 목록을 보는 등 윈도우 탐색기 역할을 파이썬 코드로 할 수 있게 해주는 것이 `os` 모듈입니다.' },
          { type: 'theory', content: '`os.getcwd()`를 치면 현재 파이썬이 실행되고 있는 폴더 경로를 반환해줍니다!' }
        ]
      }
    ]
  },
  // ================= UNIT 14 =================
  {
    id: 14,
    title: "UNIT 14\n텍스트 수색대와 웹",
    nodes: [
      {
        id: "node_14_1",
        title: "정규표현식의 세계 (re)",
        lessons: [
          { type: 'theory', content: '수만 줄의 텍스트에서 전화번호부나 이메일 주소만 쏙쏙 뽑아내려면? 바로 정규표현식(Regular Expression, regex)이라는 마법을 써야 합니다. 파이썬에서는 `import re`로 씁니다.' },
          { type: 'theory', content: '`\\d`는 숫자 하나를 의미하고, `+`는 1개 이상을 의미합니다. 즉 `\\d+`는 "연속된 숫자 무리"를 뜻하죠!' },
          { type: 'quiz_code', content: '`re.findall`을 써서 문자열 안의 모든 숫자(나이)만 리스트로 뽑아내 출력해보세요.', initialCode: 'import re\ntext = "나이: 20, 점수: 95, 키: 175"\nnums = re.findall(r"\\d+", text)\nprint(nums)', expectedOutputs: ["['20', '95', '175']"] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_14_2",
        title: "정규표현식 심화",
        lessons: [
          { type: 'theory', content: '`^` 기호는 문자열의 맨 처음을, `$` 기호는 맨 끝을 의미합니다. `[a-z]`는 소문자 알파벳 1개를 뜻하죠. 정규표현식은 외계어처럼 보이지만 엄청난 파워를 가집니다.' }
        ]
      },
      {
        id: "node_14_3",
        title: "세상과 소통하기 (requests)",
        lessons: [
          { type: 'theory', content: '파이썬이 브라우저처럼 인터넷 웹페이지나 API 서버에 접속해서 데이터를 가져오게 해주는 최고의 도구가 바로 `requests` 라이브러리입니다!' },
          { type: 'quiz_multiple_choice', content: '웹사이트에 접속하여 데이터를 요청하는 requests의 핵심 함수는?', options: ['requests.open()', 'requests.get()', 'requests.read()'], answer: 1, explanation: 'requests.get("URL") 을 통해 웹사이트의 HTML이나 API의 JSON 데이터를 가져올 수 있습니다.' , hint: '웹 데이터를 요청할 때는 requests.get("URL")을 사용합니다.' }
        ]
      },
      {
        id: "node_14_4",
        title: "데이터 교환의 표준 (JSON)",
        lessons: [
          { type: 'theory', content: 'API 서버가 여러분의 requests 요청에 응답할 때, 데이터를 파이썬의 딕셔너리(Dict)와 똑같이 생긴 **JSON**이라는 형식으로 줍니다!' },
          { type: 'theory', content: '`import json`을 사용하여 JSON 문자열을 파이썬 딕셔너리로 바꿀 수 있습니다. 이 마법의 함수가 `json.loads()` 입니다.' },
          { type: 'quiz_code', content: '문자열 형태의 json을 딕셔너리로 변환한 후 "name" 키의 값을 출력하세요.', initialCode: 'import json\ndata_str = \'{"name": "Python", "age": 30}\'\ndata = json.loads(data_str)\nprint(data["name"])', expectedOutputs: ['Python'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_14_5",
        title: "HTTP 상태 코드",
        lessons: [
          { type: 'theory', content: '서버에 요청을 보냈을 때 `response.status_code`를 확인하면 성공 여부를 알 수 있습니다. 200번대는 성공, 400번대는 내(클라이언트) 잘못, 500번대는 서버 잘못을 뜻합니다. 404 Not Found 들어보셨죠?' }
        ]
      }
    ]
  },
  // ================= UNIT 15 =================
  {
    id: 15,
    title: "UNIT 15\n그랜드 마스터 보스전",
    nodes: [
      {
        id: "node_15_1",
        title: "데이터 수집가 (가짜 API 연동)",
        lessons: [
          { type: 'theory', content: '이제 모든 지식을 모아 파이썬의 최종 보스 퀘스트를 수행합니다! 먼저 가짜 날씨 데이터를 분석하는 함수를 작성해봅시다.' },
          { type: 'quiz_code', content: '온도가 30 이상이면 "폭염", 아니면 "정상"을 반환하는 함수를 작성하세요.', initialCode: 'def check_weather(temp):\n    if temp >= 30:\n        return "폭염"\n    return "정상"\n\nprint(check_weather(32))', expectedOutputs: ['폭염'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_15_2",
        title: "데이터 정제소",
        lessons: [
          { type: 'theory', content: '가져온 데이터에는 불필요한 공백이 많습니다. 문자열의 좌우 공백을 싹 날려주는 `.strip()`을 사용해 정제해야 합니다.' },
          { type: 'quiz_code', content: '`"  Hello World  "` 의 좌우 공백을 제거하고 출력하세요.', initialCode: 'text = "  Hello World  "\nprint(text.strip())', expectedOutputs: ['Hello World'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_15_3",
        title: "딕셔너리 안전 설계",
        lessons: [
          { type: 'theory', content: '웹에서 가져온 JSON(딕셔너리) 데이터는 가끔 값이 빠져있을 수 있습니다! 에러를 방지하기 위해 딕셔너리의 `.get(키, 기본값)`을 써서 기본값을 설정해주는 것이 실무의 핵심입니다.' },
          { type: 'quiz_code', content: '`user` 딕셔너리에 "job" 키가 없으면 "백수"를 기본값으로 출력하도록 `.get()`을 완성하세요.', initialCode: 'user = {"name": "짱구"}\nprint(user.get("job", "백수"))', expectedOutputs: ['백수'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_15_4",
        title: "종합 실무 미션",
        lessons: [
          { type: 'theory', content: '정규표현식, 딕셔너리, 반복문, 예외처리가 모두 포함된 거대한 코드를 짜는 것이 실무 개발자들의 일상입니다. 여러분도 할 수 있습니다!' },
          { type: 'quiz_multiple_choice', content: '프로그램에서 알 수 없는 에러가 발생해서 꺼지는 것을 막는 최후의 보루는 무엇인가요?', options: ['def 함수', 'import 모듈', 'try-except 블록'], answer: 2, explanation: 'try-except 블록을 사용하면, 최악의 경우에도 프로그램이 멈추지 않고 안전하게 에러를 기록하며 다음 작업을 계속할 수 있습니다. 실무 서버 프로그래밍의 핵심입니다!' , hint: 'try-except 블록은 에러가 나도 프로그램이 멈추지 않게 지켜줍니다.' }
        ]
      },
      {
        id: "node_15_5",
        title: "🌟 영광의 파이썬 마스터 🌟",
        lessons: [
          { type: 'theory', content: '축하합니다! 코딩에그의 파이썬 그랜드 마스터 과정을 훌륭히 수료하셨습니다. 변수부터 클래스, 예외처리, 웹 데이터 파싱까지 당신은 이제 파이썬의 핵심을 꿰뚫고 있습니다.' },
          { type: 'theory', content: '이제 스스로 프로젝트를 기획하고, 구글링을 통해 모르는 모듈을 찾아 적용하며 세상을 바꾸는 프로그램을 만들 수 있는 "빌더(Builder)"로 성장하셨습니다. 여러분의 여정을 응원합니다!' },
          { type: 'quiz_code', content: '마지막으로 세상에 한 마디를 출력하세요!', initialCode: 'print("나는 파이썬 마스터다!")', expectedOutputs: ['나는 파이썬 마스터다!'] , hint: '이미 완성된 코드예요. 실행해서 마무리해보세요!' }
        ]
      }
    ]
  }
];
