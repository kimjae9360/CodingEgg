const fs = require('fs');
const path = require('path');

const TOPICS = {
  type_hinting: {
    mcq: [
      { q: "파이썬에서 변수나 함수의 반환값에 자료형을 명시하는 문법을 무엇이라 하나요?", opts: ["Type Hinting (타입 힌팅)", "Type Forcing", "Strict Typing"], a: 0, hint: "가독성과 버그 방지를 위해 도입된 Type Hinting입니다." },
      { q: "함수 반환값의 타입을 지정할 때 올바른 문법은?", opts: ["def add() -> int:", "def add() : int", "def add() returns int:"], a: 0, hint: "화살표(->) 기호를 사용해 반환 타입을 명시합니다." },
      { q: "타입 힌트를 사용하면 파이썬이 실행될 때 타입이 틀리면 에러를 발생시킬까요?", opts: ["발생시키지 않는다 (단지 힌트일 뿐)", "무조건 발생시킨다", "파이썬 버전에 따라 다르다"], a: 0, hint: "타입 힌팅은 런타임 에러를 발생시키지 않으며, 개발자나 IDE(VSCode)를 위한 '가이드' 역할을 합니다." },
      { q: "리스트 안에 정수만 들어감을 명시하고 싶을 때 올바른 타입 힌트는? (최신 파이썬 기준)", opts: ["list[int]", "List(int)", "list<int>"], a: 0, hint: "파이썬 3.9+ 부터는 소문자 list[int] 형태로 바로 명시할 수 있습니다." },
      { q: "타입 힌팅의 주된 목적이 아닌 것은?", opts: ["실행 속도(성능) 향상", "IDE 자동완성 지원", "코드 가독성 향상"], a: 0, hint: "타입 힌팅은 실행 속도와는 무관하며, 유지보수와 가독성을 위한 것입니다." }
    ],
    wb: [
      { parts: ["함수의 인자 타입을 명시할 때는 인자 뒤에 ", " 을 붙여 적습니다."], bank: ["콜론(:)", "화살표(->)", "이퀄(=)"], ans: [0], hint: "name: str 처럼 콜론을 씁니다." },
      { parts: ["함수의 반환 타입을 명시할 때는 인자 괄호 뒤에 ", " 기호를 씁니다."], bank: ["->", ":", "=>"], ans: [0], hint: "화살표(->)입니다." },
      { parts: ["문자열 타입을 힌팅하려면 ", " 을 적어줍니다."], bank: ["str", "String", "char"], ans: [0], hint: "파이썬의 문자열은 str입니다." },
      { parts: ["타입 힌트를 쓰면 ", " 같은 에디터에서 자동완성이 매우 잘 됩니다."], bank: ["VSCode", "그림판", "메모장"], ans: [0], hint: "개발자들의 영혼의 단짝 VSCode입니다." },
      { parts: ["타입 힌트는 강제성이 없어서 틀려도 에러가 ", "."], bank: ["나지 않는다", "난다", "종료된다"], ans: [0], hint: "파이썬은 여전히 동적 타입 언어이므로 에러는 나지 않습니다." }
    ],
    code: [
      { c: "이름(str)과 나이(int)를 받아 인사말을 반환(str)하는 함수에 타입 힌트를 추가하세요.", i: "def greet(name:   , age:   )    str:\n    return f\"안녕 {name}! 넌 {age}살이구나.\"\nprint(greet('코딩에그', 5))", e: "안녕 코딩에그! 넌 5살이구나.", h: "name: str, age: int, 그리고 -> str" },
      { c: "정수(int) 리스트를 받아 총합(int)을 반환하는 함수를 작성하세요.", i: "def calc_sum(nums: list[  ]) ->   :\n    return sum(nums)\nprint(calc_sum([1, 2, 3]))", e: "6", h: "nums: list[int] -> int" },
      { c: "변수에도 타입 힌트를 달 수 있습니다. 정수형 변수 score를 선언하세요.", i: "score:    = 100\nprint(score)", e: "100", h: "score: int" },
      { c: "딕셔너리 값에 대한 타입 힌팅도 해보세요. (키는 str, 값은 int)", i: "scores: dict[   ,    ] = {'수학': 100, '영어': 90}\nprint(scores['수학'])", e: "100", h: "dict[str, int]" },
      { c: "타입 힌트가 틀려도 실행은 됨을 확인해보세요.", i: "def add(a: int) -> int:\n    # 타입 힌트는 int지만 문자열을 넣어봅니다.\n    return a + '입니다'\nprint(add('파이썬'))", e: "파이썬입니다", h: "그대로 실행하면 문자열 덧셈이 정상 동작합니다." },
      { c: "백지에서 두 실수를 곱해 반환하는 함수를 타입 힌팅을 사용해 작성해보세요. (실수는 float)", i: "# 함수 이름: multiply, 인자 2개, 반환값 타입 힌팅 포함", e: "자유 출력", h: "def multiply(x: float, y: float) -> float:\n    return x * y\nprint(multiply(3.0, 2.5))" }
    ]
  },
  args_kwargs: {
    mcq: [
      { q: "인자의 개수를 미리 알 수 없을 때 사용하는 파이썬 문법은?", opts: ["*args", "**kwargs", "*vars"], a: 0, hint: "Arguments의 약자인 *args를 주로 씁니다." },
      { q: "*args로 전달된 인자들은 함수 내부에서 어떤 자료형으로 취급되나요?", opts: ["튜플(Tuple)", "리스트(List)", "딕셔너리(Dict)"], a: 0, hint: "수정할 수 없는 튜플로 묶여서 들어옵니다." },
      { q: "키워드 인자를 무한정 받을 수 있게 해주는 문법은?", opts: ["**kwargs", "*args", "&&kwargs"], a: 0, hint: "Keyword Arguments의 약자인 **kwargs입니다." },
      { q: "**kwargs로 전달된 인자들은 함수 내부에서 어떤 자료형으로 취급되나요?", opts: ["딕셔너리(Dict)", "리스트(List)", "튜플(Tuple)"], a: 0, hint: "키-값 쌍의 형태이므로 딕셔너리로 다뤄집니다." },
      { q: "일반 인자, *args, **kwargs를 섞어 쓸 때 올바른 순서는?", opts: ["일반 인자, *args, **kwargs", "*args, **kwargs, 일반 인자", "상관없음"], a: 0, hint: "반드시 지정된 인자, 가변 인자(*), 키워드 가변 인자(**) 순이어야 합니다." }
    ],
    wb: [
      { parts: ["개수를 알 수 없는 일반 인자들을 받을 땐 ", "를 사용합니다."], bank: ["*args", "**kwargs", "self"], ans: [0], hint: "별 하나짜리 *args입니다." },
      { parts: ["*args는 함수 안에서 괄호로 묶인 ", " 형태로 사용됩니다."], bank: ["튜플", "리스트", "문자열"], ans: [0], hint: "수정 불가능한 튜플입니다." },
      { parts: ["이름표가 붙은 여러 인자를 받을 땐 ", "를 사용합니다."], bank: ["**kwargs", "*args", "dict"], ans: [0], hint: "별 두개짜리 **kwargs입니다." },
      { parts: ["**kwargs는 함수 안에서 키와 값을 가진 ", " 형태로 사용됩니다."], bank: ["딕셔너리", "리스트", "튜플"], ans: [0], hint: "딕셔너리(dict)입니다." },
      { parts: ["별표(*) 기호는 남은 인자들을 모두 모아준다는 의미로 ", " 연산자라고도 부릅니다."], bank: ["패킹(Packing)", "언패킹", "복사"], ans: [0], hint: "하나로 묶어주는 패킹입니다." }
    ],
    code: [
      { c: "입력된 모든 숫자를 더해주는 함수를 만들어보세요.", i: "def add_all(   ):\n    return sum(args)\nprint(add_all(1, 2, 3, 4, 5))", e: "15", h: "*args를 넣으세요." },
      { c: "이름표(키워드)가 붙은 모든 인자를 출력하는 함수를 만들어보세요.", i: "def print_info(    ):\n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\nprint_info(name='에그', age=5)", e: "name: 에그\nage: 5", h: "**kwargs를 넣으세요." },
      { c: "일반 인자와 *args를 같이 써보세요.", i: "def make_pizza(size,    ):\n    print(f\"{size}인치 피자 토핑: {args}\")\nmake_pizza(12, '치즈', '페퍼로니', '올리브')", e: "12인치 피자 토핑: ('치즈', '페퍼로니', '올리브')", h: "*args를 넣으세요." },
      { c: "*args와 **kwargs를 모두 받는 만능 함수를 만들어보세요.", i: "def super_func(*args, **kwargs):\n    print('args:', args)\n    print('kwargs:', kwargs)\n# 그대로 실행해보세요\nsuper_func(1, 2, a=3, b=4)", e: "args: (1, 2)\nkwargs: {'a': 3, 'b': 4}", h: "그대로 실행합니다." },
      { c: "리스트의 요소들을 풀어서(Unpacking) *args 함수에 전달해보세요.", i: "def add_three(a, b, c):\n    return a + b + c\nnums = [10, 20, 30]\n# nums 앞에 *를 붙이면 리스트가 풀려서 들어갑니다.\nprint(add_three(  nums))", e: "60", h: "함수 호출 시 *nums를 씁니다." },
      { c: "백지에서 *args를 이용해 전달받은 모든 문자열을 이어붙여 반환하는 함수를 만들어보세요.", i: "# 힌트: ''.join(args)를 사용해보세요.", e: "자유 출력", h: "def concat(*args):\n    return ''.join(args)\nprint(concat('안녕', '하세요'))" }
    ]
  },
  decorators: {
    mcq: [
      { q: "기존 코드를 건드리지 않고 함수의 앞뒤에 기능을 추가하고 싶을 때 사용하는 문법은?", opts: ["Decorator (데코레이터)", "Generator", "Class"], a: 0, hint: "함수를 '장식'해주는 Decorator입니다." },
      { q: "데코레이터를 사용할 때 함수 위에 붙이는 기호는?", opts: ["@", "#", "$"], a: 0, hint: "이메일 등에 쓰이는 골뱅이(@) 기호를 사용합니다." },
      { q: "데코레이터는 결국 무엇의 또 다른 형태인가요?", opts: ["함수를 인자로 받는 함수", "새로운 데이터 타입", "반복문의 일종"], a: 0, hint: "데코레이터는 함수를 통째로 넘겨받아 감싸는 고차 함수입니다." },
      { q: "데코레이터 내부에서 기존 함수를 감싸는 내부 함수의 이름으로 관례적으로 자주 쓰이는 것은?", opts: ["wrapper", "inner", "main"], a: 0, hint: "감싼다는 의미의 wrapper를 자주 사용합니다." },
      { q: "Flask나 Django 같은 웹 프레임워크에서 특정 페이지 접속 권한을 체크할 때 자주 쓰이는 것은?", opts: ["데코레이터", "map 함수", "while 문"], a: 0, hint: "권한 체크나 로그아웃 처리 등 공통 작업에 데코레이터가 애용됩니다." }
    ],
    wb: [
      { parts: ["함수의 실행 앞뒤로 덧붙일 기능이 있을 때 ", "를 사용합니다."], bank: ["데코레이터", "컴프리헨션", "제너레이터"], ans: [0], hint: "Decorator입니다." },
      { parts: ["함수 바로 위 줄에 ", " 기호를 적고 데코레이터 이름을 씁니다."], bank: ["@", "#", "!"], ans: [0], hint: "골뱅이(@) 기호입니다." },
      { parts: ["데코레이터를 만들려면 내부에 ", " 함수를 하나 더 정의해야 합니다."], bank: ["감싸는(wrapper)", "반복하는(loop)", "삭제하는(delete)"], ans: [0], hint: "기존 함수를 감싸는 래퍼 함수입니다." },
      { parts: ["데코레이터는 기존 함수의 ", "를 수정하지 않고 확장하는 멋진 기술입니다."], bank: ["원본 코드", "이름", "확장자"], ans: [0], hint: "원본 코드를 보존합니다." },
      { parts: ["함수의 실행 시간을 측정할 때도 ", " 형태로 만들면 모든 함수에 재사용이 가능합니다."], bank: ["데코레이터", "전역 변수", "클래스"], ans: [0], hint: "공통 기능은 데코레이터로 만듭니다." }
    ],
    code: [
      { c: "함수 앞뒤로 메시지를 출력하는 초간단 데코레이터를 확인하세요.", i: "def my_deco(func):\n    def wrapper():\n        print('--- 시작 ---')\n        func()\n        print('--- 끝 ---')\n    return wrapper\n\n@my_deco\ndef hello():\n    print('안녕하세요!')\n\nhello()", e: "--- 시작 ---\n안녕하세요!\n--- 끝 ---", h: "그대로 실행해서 @my_deco의 마법을 확인하세요." },
      { c: "이번엔 빈칸을 채워 데코레이터를 완성해보세요.", i: "def bold_deco(func):\n    def wrapper():\n        return \"<b>\" + func() + \"</b>\"\n    return   \n\n@bold_deco\ndef get_text():\n    return \"코딩에그\"\n\nprint(get_text())", e: "<b>코딩에그</b>", h: "내부 함수인 wrapper를 리턴해야 합니다." },
      { c: "인자를 받는 함수를 위한 데코레이터에는 *args, **kwargs가 필수입니다.", i: "def trace(func):\n    def wrapper(  args,   kwargs):\n        print(func.__name__, '함수 호출됨')\n        return func(*args, **kwargs)\n    return wrapper\n\n@trace\ndef add(a, b):\n    return a + b\n\nprint(add(10, 20))", e: "add 함수 호출됨\n30", h: "*args와 **kwargs를 넣으세요." },
      { c: "실행 시간을 재는 실무형 데코레이터를 실행해보세요.", i: "import time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        res = func(*args, **kwargs)\n        print(f\"{func.__name__} 소요시간: {time.time() - start:.4f}초\")\n        return res\n    return wrapper\n\n@timer\ndef slow_func():\n    time.sleep(0.5)\n    return '완료'\n\nprint(slow_func())", e: "slow_func 소요시간: 0.5000초\n완료", h: "그대로 실행해보세요 (시간은 조금 다를 수 있습니다)." },
      { c: "백지에서 여러분만의 데코레이터를 만들어보세요. (호출 전후로 별표(*)를 10개씩 출력)", i: "# 함수 이름: star_deco", e: "자유 출력", h: "def star_deco(func):\n    def wrapper(*args, **kwargs):\n        print('*'*10)\n        func(*args, **kwargs)\n        print('*'*10)\n    return wrapper" }
    ]
  },
  generators: {
    mcq: [
      { q: "값을 한꺼번에 메모리에 올리지 않고, 필요할 때마다 하나씩 만들어내는 함수를 무엇이라 하나요?", opts: ["Generator (제너레이터)", "List (리스트)", "Tuple (튜플)"], a: 0, hint: "데이터를 '생성'해내는 Generator입니다." },
      { q: "제너레이터를 만들 때 return 대신 사용하는 핵심 키워드는?", opts: ["yield", "give", "next"], a: 0, hint: "양보하다, 산출하다 라는 뜻의 yield를 사용합니다." },
      { q: "제너레이터의 가장 큰 장점은 무엇인가요?", opts: ["메모리를 극도로 적게 차지한다", "코드가 짧아진다", "수학 계산이 빠르다"], a: 0, hint: "1억 개의 데이터를 다뤄도 메모리가 터지지 않습니다." },
      { q: "제너레이터에서 다음 값을 뽑아내기 위해 사용하는 내장 함수는?", opts: ["next()", "step()", "pop()"], a: 0, hint: "다음(next) 값을 달라고 요청합니다." },
      { q: "리스트 컴프리헨션의 괄호를 대괄호([]) 대신 소괄호(())로 묶으면 무엇이 되나요?", opts: ["제너레이터 표현식", "튜플 컴프리헨션", "에러 발생"], a: 0, hint: "소괄호를 쓰면 메모리를 절약하는 제너레이터가 됩니다." }
    ],
    wb: [
      { parts: ["제너레이터 함수는 값을 반환할 때 return 대신 ", " 키워드를 사용합니다."], bank: ["yield", "give", "pass"], ans: [0], hint: "yield(일드) 입니다." },
      { parts: ["일반 함수는 return을 만나면 종료되지만, 제너레이터는 yield를 만나면 일시 ", " 상태가 됩니다."], bank: ["정지(pause)", "종료", "삭제"], ans: [0], hint: "상태를 기억한 채 정지합니다." },
      { parts: ["대용량의 데이터를 다룰 때 제너레이터를 쓰면 ", " 사용량을 획기적으로 줄일 수 있습니다."], bank: ["메모리", "CPU", "하드디스크"], ans: [0], hint: "리스트처럼 모두 들고있지 않아 메모리가 절약됩니다." },
      { parts: ["제너레이터 객체에서 값을 하나씩 꺼내려면 ", "() 함수를 씁니다."], bank: ["next", "pop", "get"], ans: [0], hint: "next()입니다." },
      { parts: ["무한 반복문(while True) 안에 yield를 넣으면 끊임없이 값을 만들어내는 ", " 수열을 만들 수 있습니다."], bank: ["무한", "유한", "에러"], ans: [0], hint: "무한 루프에 빠지지 않고 필요할 때만 값을 만듭니다." }
    ],
    code: [
      { c: "return 대신 yield를 사용해 값을 하나씩 뱉어내는 제너레이터를 확인하세요.", i: "def count_up():\n    yield 1\n    yield 2\n    yield 3\n\n# 제너레이터 객체 생성\ngen = count_up()\nprint(next(gen))\nprint(next(gen))", e: "1\n2", h: "그대로 실행합니다. next()를 호출할 때마다 다음 yield까지 실행됩니다." },
      { c: "for문을 사용하면 next() 없이도 끝까지 알아서 뽑아줍니다.", i: "def abc():\n    yield 'A'\n    yield 'B'\n    yield 'C'\n\nfor letter in   ():\n    print(letter)", e: "A\nB\nC", h: "abc() 를 호출하세요." },
      { c: "무한히 1씩 증가하는 번호표 발행기(제너레이터)를 만들어보세요.", i: "def ticket_machine():\n    num = 1\n    while True:\n           num\n        num += 1\n\nmachine = ticket_machine()\nprint(next(machine))\nprint(next(machine))\nprint(next(machine))", e: "1\n2\n3", h: "yield num 을 적으세요." },
      { c: "제너레이터 표현식을 사용해 메모리를 절약해보세요.", i: "# 리스트: 메모리를 한 번에 할당함\nlist_comp = [x*x for x in range(3)]\n# 제너레이터: 괄호를 소괄호로 변경\ngen_comp = (  *  for x in range(3))\n\nprint(list_comp)\nprint(gen_comp) # 객체 자체가 출력됨\nprint(next(gen_comp))", e: "[0, 1, 4]\n<generator object ...>\n0", h: "x*x 를 적으세요." },
      { c: "백지에서 짝수만 무한히 만들어내는 제너레이터를 작성하고 3개만 뽑아보세요.", i: "# 힌트: yield x", e: "자유 출력", h: "def evens():\n    n = 0\n    while True:\n        yield n\n        n += 2\ng = evens()\nprint(next(g))\nprint(next(g))\nprint(next(g))" }
    ]
  },
  env_packages: {
    mcq: [
      { q: "내 컴퓨터(VSCode 등)에서 남이 만든 유용한 파이썬 패키지를 설치할 때 쓰는 명령어는?", opts: ["pip install", "python download", "get package"], a: 0, hint: "파이썬의 공식 패키지 매니저는 pip입니다." },
      { q: "프로젝트마다 서로 다른 패키지 버전을 충돌 없이 관리하기 위해 만드는 독립된 방은?", opts: ["가상 환경 (Virtual Environment)", "샌드박스 (Sandbox)", "클라우드 (Cloud)"], a: 0, hint: "venv 등을 이용해 가상 환경을 구축합니다." },
      { q: "파이썬 내장 모듈 venv를 사용해 'myenv'라는 이름의 가상 환경을 만드는 터미널 명령어는?", opts: ["python -m venv myenv", "pip create myenv", "make venv myenv"], a: 0, hint: "-m 플래그를 써서 venv 모듈을 실행합니다." },
      { q: "현재 프로젝트에 설치된 패키지들의 목록과 버전을 requirements.txt 파일에 저장하는 명령어는?", opts: ["pip freeze > requirements.txt", "pip save requirements.txt", "pip list export"], a: 0, hint: "현재 상태를 '얼려서(freeze)' 텍스트 파일로 저장합니다." },
      { q: "브라우저(코딩에그)가 아닌 실제 컴퓨터에서 파이썬 코드를 실행하는 명령어는?", opts: ["python 파일명.py", "run 파일명.py", "start 파일명"], a: 0, hint: "터미널에서 python 명령어 뒤에 파일명을 적어 실행합니다." }
    ],
    wb: [
      { parts: ["파이썬 패키지 관리자의 이름은 ", " 입니다."], bank: ["pip", "npm", "git"], ans: [0], hint: "Pip Installs Packages의 약자입니다." },
      { parts: ["프로젝트별로 패키지 충돌을 막기 위해 ", " 환경을 만듭니다."], bank: ["가상(Virtual)", "실제", "네트워크"], ans: [0], hint: "가상 환경입니다." },
      { parts: ["가상 환경을 활성화하면 터미널 프롬프트 맨 앞에 ", " 괄호가 생깁니다."], bank: ["(가상환경 이름)", "[버전]", "<경고>"], ans: [0], hint: "(myenv) 처럼 이름이 표시됩니다." },
      { parts: ["남의 프로젝트를 다운받은 후, ", " install -r requirements.txt 를 치면 필요 패키지가 싹 설치됩니다."], bank: ["pip", "python", "run"], ans: [0], hint: "설치 명령어는 pip입니다." },
      { parts: ["VSCode에서 파이썬을 잘 쓰려면 Microsoft가 제공하는 Python ", "(플러그인)을 꼭 설치해야 합니다."], bank: ["확장(Extension)", "테마", "폰트"], ans: [0], hint: "VSCode Extension 탭에서 받습니다." }
    ],
    code: [
      { c: "[실무 시뮬레이션] 당신은 지금 VSCode 터미널에 있습니다. requests 패키지를 설치하는 명령어를 문자열로 출력해보세요.", i: "cmd = \"   install requests\"\nprint(\"실행할 명령어:\", cmd)", e: "실행할 명령어: pip install requests", h: "pip" },
      { c: "[실무 시뮬레이션] venv를 이용해 'my_project_env'라는 가상환경을 생성하는 터미널 명령어를 출력해보세요.", i: "cmd = \"python -m    my_project_env\"\nprint(\"실행할 명령어:\", cmd)", e: "실행할 명령어: python -m venv my_project_env", h: "venv 모듈을 사용합니다." },
      { c: "[실무 시뮬레이션] 다른 개발자가 넘겨준 requirements.txt 안의 패키지를 일괄 설치하는 명령어를 출력하세요.", i: "cmd = \"pip install -r    \"\nprint(\"실행할 명령어:\", cmd)", e: "실행할 명령어: pip install -r requirements.txt", h: "requirements.txt 파일명을 적습니다." },
      { c: "파이썬 기본 내장 모듈 중, 현재 파이썬 버전을 알아내는 코드를 실행해보세요.", i: "import sys\n# 코딩에그 서버(Pyodide)의 파이썬 버전을 확인합니다.\nprint(sys.version.split(' ')[0])", e: "3.11.3 (버전은 다를 수 있음)", h: "그대로 실행합니다. 실제 환경에서도 유용합니다." },
      { c: "여기까지 오신 것을 환영합니다! 파이썬의 모든 핵심 기초와 실무 지식을 습득했습니다. 축하 메시지를 자유롭게 print 해보세요!", i: "print(\"파이썬 마스터 완료!\")", e: "파이썬 마스터 완료!", h: "자유롭게 작성하세요!" }
    ]
  }
};

const nodesData = [
  { id: 'node_17_1', title: '타입 힌팅 (Type Hinting)', key: 'type_hinting' },
  { id: 'node_17_2', title: '가변 인자의 마법 (*args & **kwargs)', key: 'args_kwargs' },
  { id: 'node_17_3', title: '함수를 감싸는 마법사 (데코레이터)', key: 'decorators' },
  { id: 'node_17_4', title: '메모리 다이어트 (제너레이터와 yield)', key: 'generators' },
  { id: 'node_17_5', title: 'VSCode와 실무 환경 세팅 (pip & venv)', key: 'env_packages' },
];

function generateUnit() {
  const resultNodes = [];

  nodesData.forEach((nodeInfo, index) => {
    const topicData = TOPICS[nodeInfo.key];
    const lessons = [];

    // Lesson 1: Theory + Word Bank (개념 학습)
    const lesson1 = [];
    topicData.wb.forEach((q, i) => {
      lesson1.push({
        type: 'quiz_word_bank',
        content: `[개념 확인 ${i+1}] 다음 빈칸을 알맞은 단어로 채워보세요.`,
        sentenceParts: q.parts,
        wordBank: q.bank,
        answer: q.ans,
        hint: q.hint
      });
    });

    // Lesson 2: Multiple Choice (핵심 퀴즈)
    const lesson2 = [];
    topicData.mcq.forEach((q, i) => {
      lesson2.push({
        type: 'quiz_multiple_choice',
        content: `[이론 점검 ${i+1}] ${q.q}`,
        options: q.opts,
        answer: q.a,
        hint: q.hint
      });
    });

    // Lesson 3: Code (실전 코딩)
    const lesson3 = [];
    topicData.code.forEach((q, i) => {
      lesson3.push({
        type: 'quiz_code',
        content: `[실습 ${i+1}] ${q.c}`,
        initialCode: q.i,
        expectedOutputs: [q.e],
        hint: q.h
      });
    });

    resultNodes.push({
      id: nodeInfo.id,
      title: nodeInfo.title,
      description: "VSCode 실무 환경에서 꼭 필요한 파이썬의 고급 스킬을 마스터합니다.",
      lessons: [lesson1, lesson2, lesson3]
    });
  });

  return resultNodes;
}

const unit17Data = {
  id: 17,
  title: 'UNIT 17\n파이썬 실무 스킬업',
  nodes: generateUnit()
};

const tier3Path = path.join(__dirname, '../src/data/curriculum/tier3.jsx');
let content = fs.readFileSync(tier3Path, 'utf8');

// Clean up previous bad run if exists
const badAppendIndex = content.indexOf('export const unit17 =');
if (badAppendIndex !== -1) {
  content = content.substring(0, badAppendIndex);
}

const insertIndex = content.lastIndexOf('];');
if (insertIndex === -1) {
  console.error("Could not find the end of the tier3 array.");
  process.exit(1);
}

// Check if already inserted
if (content.includes('UNIT 17\n파이썬 실무 스킬업')) {
  console.log("UNIT 17 already exists in tier3 array");
} else {
  let injectedObj = JSON.stringify(unit17Data, null, 2);
  injectedObj = injectedObj.replace(/"([^"]+)":/g, (match, p1) => {
    if (/^[a-zA-Z_]\w*$/.test(p1)) return p1 + ':';
    return match;
  });

  const newContent = content.substring(0, insertIndex) + ',\n  ' + injectedObj + '\n' + content.substring(insertIndex);
  fs.writeFileSync(tier3Path, newContent, 'utf8');
  console.log("Successfully generated and appended UNIT 17 to tier3 array!");
}
