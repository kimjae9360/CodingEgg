export const tier2 = [
  // ================= UNIT 6 =================
  {
    id: 6,
    title: "UNIT 6\n데이터의 집합 (딕셔너리)",
    nodes: [
      {
        id: "node_6_1",
        title: "이름표가 달린 가방 (Dict)",
        lessons: [
          { type: 'theory', content: '데이터에 이름표(Key)를 달아서 보관하는 가방을 **딕셔너리(Dictionary)**라고 합니다. 중괄호 `{}`를 사용하며, `키: 값` 형태로 저장합니다.' },
          { type: 'quiz_multiple_choice', content: '올바른 딕셔너리 생성 방법은?', options: ['d = [name="홍길동"]', 'd = {"name": "홍길동"}', 'd = (name: "홍길동")'], answer: 1, explanation: '딕셔너리는 중괄호 {} 를 사용하며, 콜론(:)으로 키와 값을 연결합니다.' , hint: '딕셔너리는 중괄호 {}를 사용하고 콜론(:)으로 키와 값을 연결합니다.' },
          { type: 'quiz_code', content: '`"age"` 키에 `20`을 가진 딕셔너리를 변수 `user`에 만들고 출력하세요.', initialCode: 'user = \nprint(user)', expectedOutputs: ["{'age': 20}"] , hint: '중괄호 안에 "age": 20 형태로 키와 값을 넣어 딕셔너리를 만들어보세요.' }
        ]
      },
      {
        id: "node_6_2",
        title: "딕셔너리에서 값 꺼내기",
        lessons: [
          { type: 'theory', content: '딕셔너리에서 값을 꺼낼 때는 인덱스(0, 1..) 대신 키(Key)를 대괄호에 넣습니다. 예: `user["name"]`' },
          { type: 'quiz_code', content: '`user` 딕셔너리에서 "age" 키의 값을 꺼내어 출력하세요.', initialCode: 'user = {"name": "앨리스", "age": 25}\nprint(user[   ])', expectedOutputs: ['25'] , hint: '대괄호 안에 꺼내고 싶은 키 이름을 따옴표와 함께 넣어보세요. 예: user["age"]' },
          { type: 'theory', content: '만약 없는 키를 대괄호로 꺼내려고 하면 에러(KeyError)가 발생합니다! 안전하게 꺼내려면 `.get()` 메서드를 씁니다.' },
          { type: 'quiz_multiple_choice', content: '`user.get("phone")`을 실행했는데 "phone" 키가 없다면 어떤 일이 발생할까요?', options: ['에러 발생', 'None 반환', '프로그램 종료'], answer: 1, explanation: '.get() 메서드는 키가 없으면 에러를 발생시키지 않고 안전하게 None(없음)을 반환합니다.' , hint: '.get() 메서드는 없는 키를 조회해도 에러 없이 안전하게 처리합니다.' }
        ]
      },
      {
        id: "node_6_3",
        title: "딕셔너리 추가/수정/삭제",
        lessons: [
          { type: 'theory', content: '새로운 쌍을 추가하거나 값을 바꿀 때는 그냥 키를 지정해서 값을 넣으면 됩니다. `user["job"] = "학생"`' },
          { type: 'quiz_code', content: '`user`에 "score"라는 키로 100을 추가하고 전체를 출력하세요.', initialCode: 'user = {"name": "밥"}\n\nprint(user)', expectedOutputs: ["{'name': '밥', 'score': 100}"] , hint: '딕셔너리에 새 키를 추가하려면 user["score"] = 100 처럼 대괄호로 키를 지정해 값을 넣으면 됩니다.' },
          { type: 'theory', content: '삭제할 때는 `del user["name"]` 처럼 `del` 키워드를 사용합니다.' }
        ]
      },
      {
        id: "node_6_4",
        title: "딕셔너리의 열쇠 꾸러미",
        lessons: [
          { type: 'theory', content: '딕셔너리 안의 키들만 모아서 보고 싶다면 `.keys()`, 값들만 보고 싶다면 `.values()`, 둘 다는 `.items()`를 씁니다.' },
          { type: 'quiz_code', content: '`.keys()`를 사용하여 `info` 딕셔너리의 키들만 출력하세요.', initialCode: 'info = {"a": 1, "b": 2}\nprint(info.keys())', expectedOutputs: ["dict_keys(['a', 'b'])"] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' },
          { type: 'theory', content: '`.items()`를 for문과 함께 쓰면 키와 값을 한꺼번에 반복할 수 있어 매우 유용합니다!' },
          { type: 'quiz_code', content: '`for k, v in info.items():` 구조를 사용하여 빈칸을 채워 완성하세요.', initialCode: 'info = {"A": 10, "B": 20}\nfor k, v in info.items():\n    print(k, v)', expectedOutputs: ['A 10\nB 20'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_6_5",
        title: "중복을 허락하지 않는 Set",
        lessons: [
          { type: 'theory', content: '집합(Set)은 중복을 허용하지 않고 순서가 없는 데이터 가방입니다. 딕셔너리처럼 중괄호 `{}`를 쓰지만 키 없이 값만 넣습니다. `s = {1, 2, 2, 3}`을 만들면 `{1, 2, 3}`이 됩니다.' },
          { type: 'quiz_multiple_choice', content: '리스트 `[1, 1, 2, 2, 3]`을 집합(set)으로 변환하면 원소는 총 몇 개가 될까요?', options: ['5개', '3개', '2개'], answer: 1, explanation: '집합은 중복을 자동으로 제거하므로 1, 2, 3 이렇게 3개만 남습니다.' , hint: '집합(set)은 중복된 값을 자동으로 하나로 합칩니다.' },
          { type: 'quiz_code', content: '`nums = [1, 2, 2, 3, 3, 3]` 리스트를 `set()`을 사용해 중복을 제거하고 출력하세요.', initialCode: 'nums = [1, 2, 2, 3, 3, 3]\nunique_nums = \nprint(unique_nums)', expectedOutputs: ['{1, 2, 3}'] , hint: 'set() 함수 안에 nums 리스트를 넣어 중복을 제거해보세요.' }
        ]
      }
    ]
  },
  // ================= UNIT 7 =================
  {
    id: 7,
    title: "UNIT 7\n마법 주문서 (함수 기초)",
    nodes: [
      {
        id: "node_7_1",
        title: "나만의 마법 주문 만들기 (def)",
        lessons: [
          { type: 'theory', content: '반복되는 코드를 하나의 덩어리로 묶어서 이름을 붙인 것을 **함수(Function)**라고 합니다. 파이썬에서는 `def` 키워드로 만듭니다.' },
          { type: 'quiz_multiple_choice', content: '올바른 함수 정의 방법은?', options: ['function hello():', 'def hello():', 'make hello():'], answer: 1, explanation: '파이썬에서 함수를 정의할 때는 define의 약자인 def 키워드를 사용합니다.' , hint: '파이썬에서 함수를 만들 때는 def 키워드로 시작합니다.' },
          { type: 'quiz_code', content: '"안녕하세요!"를 3번 출력하는 `say_hi` 함수를 만들고, 1번 호출(실행)해보세요.', initialCode: 'def say_hi():\n    print("안녕하세요!")\n    print("안녕하세요!")\n    print("안녕하세요!")\n\n# 함수 호출하기\nsay_hi()', expectedOutputs: ['안녕하세요!\n안녕하세요!\n안녕하세요!'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_7_2",
        title: "재료 넣기 (매개변수)",
        lessons: [
          { type: 'theory', content: '함수가 작업을 할 때 재료가 필요할 수 있습니다. 괄호 안에 변수를 적어주면 이를 매개변수(Parameter)라고 부릅니다.' },
          { type: 'quiz_code', content: '이름(name)을 받아서 "Hello 이름"을 출력하는 `greet` 함수를 완성하세요.', initialCode: 'def greet(name):\n    print("Hello " + name)\n\ngreet("Python")', expectedOutputs: ['Hello Python'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_7_3",
        title: "결과물 돌려주기 (return)",
        lessons: [
          { type: 'theory', content: '함수가 작업을 끝내고 결과물을 밖으로 던져줄 때는 `return` 키워드를 사용합니다. `print()`는 그저 화면에 보여줄 뿐이고, `return`은 값을 실제로 전달합니다!' },
          { type: 'quiz_multiple_choice', content: 'return과 print의 차이점으로 맞는 것은?', options: ['둘 다 똑같다', 'print는 화면에 보여주기만 하고, return은 결과값을 변수에 저장할 수 있게 해준다', 'return은 화면에 강제로 출력한다'], answer: 1, explanation: 'print()는 단순히 모니터에 출력하는 기능이고, return은 함수가 실행된 후 그 결과값을 호출한 쪽으로 뱉어내는 핵심 기능입니다.' , hint: 'print는 화면에 보여주기만 하고, return은 결과값을 다른 곳에서 사용할 수 있게 돌려줍니다.' },
          { type: 'quiz_code', content: '두 숫자를 받아 더한 값을 `return`하는 `add` 함수를 작성하세요.', initialCode: 'def add(a, b):\n    # 여기에 return 작성\n\nresult = add(5, 3)\nprint(result)', expectedOutputs: ['8'] , hint: 'return a + b 처럼 두 매개변수를 더한 값을 return 해보세요.' }
        ]
      },
      {
        id: "node_7_4",
        title: "return의 숨겨진 비밀",
        lessons: [
          { type: 'theory', content: '함수는 `return`을 만나는 즉시 그 자리에서 종료됩니다! 그 아래에 있는 코드는 절대 실행되지 않습니다.' },
          { type: 'quiz_multiple_choice', content: '다음 코드의 출력 결과는?\n`def test():\n    return 1\n    print("출력됨?")\nprint(test())`', options: ['1 출력됨?', '출력됨? 1', '1'], answer: 2, explanation: 'return 1을 만나는 순간 함수가 종료되므로, 그 아래의 print 구문은 무시됩니다.' , hint: 'return을 만나면 함수가 즉시 종료되어 그 아래 코드는 실행되지 않습니다.' },
          { type: 'quiz_code', content: '숫자가 0보다 크면 "양수", 아니면 "음수"를 return하는 함수입니다. 빈칸을 채워 완성하세요.', initialCode: 'def check(n):\n    if n > 0:\n        return "양수"\n    return "음수"\n\nprint(check(-5))', expectedOutputs: ['음수'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_7_5",
        title: "내 땅과 남의 땅 (지역/전역 변수)",
        lessons: [
          { type: 'theory', content: '함수 안에서 만든 변수는 함수 밖에서는 접근할 수 없습니다. 이를 **지역 변수(Local Variable)**라고 합니다.' },
          { type: 'quiz_multiple_choice', content: '함수 내의 지역변수 x를 함수 밖에서 print(x) 하려고 하면 어떻게 될까요?', options: ['에러 발생 (NameError)', '0 출력', '정상 출력'], answer: 0, explanation: '함수 내부의 지역변수는 함수가 끝나는 순간 메모리에서 사라지므로 밖에서 부르면 NameError가 발생합니다.' , hint: '함수 안에서 만든 지역변수는 함수가 끝나면 사라져서 밖에서는 접근할 수 없습니다.' },
          { type: 'theory', content: '함수 밖에서 만든 변수는 **전역 변수(Global Variable)**이며, 함수 안에서도 읽을 수는 있습니다!' }
        ]
      }
    ]
  },
  // ================= UNIT 8 =================
  {
    id: 8,
    title: "UNIT 8\n고급 마법 (함수 심화)",
    nodes: [
      {
        id: "node_8_1",
        title: "기본값 (Default Args)",
        lessons: [
          { type: 'theory', content: '함수에 재료를 안 넣었을 때 사용할 기본값을 지정할 수 있습니다. `def greet(name="무명"):`' },
          { type: 'quiz_code', content: 'msg의 기본값을 "안녕"으로 설정하고, 아무것도 넘기지 않고 함수를 호출해보세요.', initialCode: 'def speak(msg="안녕"):\n    print(msg)\n\nspeak()', expectedOutputs: ['안녕'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_8_2",
        title: "무제한 재료 받기 (*args)",
        lessons: [
          { type: 'theory', content: '몇 개의 재료가 들어올지 모를 때는 앞에 `*`를 붙입니다. 이를 `*args`라고 하며, 튜플 형태로 모든 값을 싹쓸이해서 받습니다.' },
          { type: 'quiz_multiple_choice', content: '`def add(*args):`에 `add(1, 2, 3)`을 넣으면 args 안에는 어떻게 담길까요?', options: ['[1, 2, 3]', '(1, 2, 3)', '1'], answer: 1, explanation: '*args는 입력된 파라미터들을 변경 불가능한 튜플 ( ) 형태로 묶어줍니다.' , hint: '*args로 받은 값들은 튜플(소괄호) 형태로 묶입니다.' },
          { type: 'quiz_code', content: '들어오는 모든 숫자를 더하는 함수입니다. 빈칸을 채우세요.', initialCode: 'def add_all(*args):\n    total = 0\n    for n in args:\n        total += n\n    return total\n\nprint(add_all(1, 2, 3, 4))', expectedOutputs: ['10'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_8_3",
        title: "키워드 무제한 받기 (**kwargs)",
        lessons: [
          { type: 'theory', content: '`이름=값` 형태로 무한정 받고 싶을 때는 `**` 두 개를 붙인 `**kwargs`를 씁니다. 이러면 딕셔너리로 받아집니다.' },
          { type: 'quiz_code', content: '`kwargs`를 출력해보면 딕셔너리로 묶인 것을 알 수 있습니다. 코드를 완성하세요.', initialCode: 'def show_info(**kwargs):\n    print(kwargs)\n\nshow_info(name="홍길동", age=20)', expectedOutputs: ["{'name': '홍길동', 'age': 20}"] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_8_4",
        title: "이름 없는 마법사 (Lambda)",
        lessons: [
          { type: 'theory', content: '너무 간단한 함수라서 굳이 `def`로 이름을 붙이기도 아까울 때, 한 줄짜리 이름 없는 함수인 **람다(Lambda)**를 씁니다.' },
          { type: 'quiz_multiple_choice', content: '`x`를 받아 10을 더하는 람다 함수는?', options: ['lambda x: x + 10', 'lambda: x + 10', 'def x: x+10'], answer: 0, explanation: '람다식은 `lambda 매개변수: 리턴값` 구조를 가집니다.' , hint: '람다식은 lambda 매개변수: 리턴값 구조로 한 줄에 씁니다.' },
          { type: 'quiz_code', content: '숫자 5를 넣었을 때 2배로 만들어 반환하는 람다 함수를 만들고, 실행하여 출력해보세요.', initialCode: 'double = lambda x: x * 2\nprint(double(5))', expectedOutputs: ['10'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_8_5",
        title: "지도 그리기 (map)",
        lessons: [
          { type: 'theory', content: '리스트의 모든 원소에 똑같은 마법(함수)을 걸어주고 싶을 때 `map(함수, 리스트)`를 사용합니다! 람다와 찰떡궁합이죠.' },
          { type: 'quiz_code', content: '`map`과 `lambda`를 사용해서 `[1, 2, 3]` 리스트의 모든 숫자를 2배로 만들어보세요.', initialCode: 'nums = [1, 2, 3]\nresult = list(map(lambda x: x * 2, nums))\nprint(result)', expectedOutputs: ['[2, 4, 6]'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      }
    ]
  },
  // ================= UNIT 9 =================
  {
    id: 9,
    title: "UNIT 9\n에러를 두려워하지 마",
    nodes: [
      {
        id: "node_9_1",
        title: "치명적 오류와 방패 (try-except)",
        lessons: [
          { type: 'theory', content: '프로그램은 에러가 나면 즉시 멈춰버립니다. 하지만 `try` 블록 안에서 에러가 나면, 프로그램이 죽는 대신 `except` 블록으로 대피합니다!' },
          { type: 'quiz_multiple_choice', content: '숫자를 0으로 나누면 어떤 에러가 발생하나요?', options: ['ZeroDivisionError', 'ValueError', 'TypeError'], answer: 0, explanation: '수학적으로 0으로 나누는 것은 불가능하므로 ZeroDivisionError가 발생합니다.' , hint: '숫자를 0으로 나누는 것은 수학적으로 불가능해서 특별한 에러가 발생합니다.' },
          { type: 'quiz_code', content: '0으로 나누는 에러를 `try-except`로 막고 "에러 발생!"을 출력하게 완성하세요.', initialCode: 'try:\n    print(10 / 0)\nexcept:\n    print("에러 발생!")', expectedOutputs: ['에러 발생!'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_9_2",
        title: "특정 에러만 골라 잡기",
        lessons: [
          { type: 'theory', content: '`except 에러이름:` 을 쓰면 특정 에러만 골라서 처리할 수 있습니다. 여러 개의 `except`를 달 수도 있죠!' },
          { type: 'quiz_code', content: '리스트의 범위를 벗어나는 `IndexError`만 잡아내도록 빈칸을 채우세요.', initialCode: 'nums = [1, 2]\ntry:\n    print(nums[5])\nexcept IndexError:\n    print("인덱스 초과!")', expectedOutputs: ['인덱스 초과!'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_9_3",
        title: "에러 메시지 훔쳐보기 (as e)",
        lessons: [
          { type: 'theory', content: '`except Exception as e:` 라고 쓰면, 파이썬이 던진 진짜 에러 메시지를 `e` 변수에 담아서 볼 수 있습니다.' },
          { type: 'quiz_code', content: '에러를 변수 e로 받아서 그대로 문자열로 출력해보세요.', initialCode: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError as e:\n    print(e)', expectedOutputs: ['division by zero'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_9_4",
        title: "무조건 실행되는 (finally)",
        lessons: [
          { type: 'theory', content: '에러가 나든 안 나든, 마지막에 **무조건 반드시** 실행되어야 하는 정리 코드가 있다면 `finally` 블록에 넣습니다.' },
          { type: 'quiz_multiple_choice', content: 'finally 블록은 언제 실행되나요?', options: ['에러가 났을 때만', '에러가 없을 때만', '에러 유무와 상관없이 항상'], answer: 2, explanation: 'finally는 try 구문이 종료될 때 무조건 실행됩니다. 주로 파일을 닫거나 연결을 끊을 때 사용합니다.' , hint: 'finally 블록은 에러가 나든 안 나든 항상 실행됩니다.' },
          { type: 'quiz_code', content: 'try 구문에 finally 블록을 추가하여 "종료"가 출력되게 하세요.', initialCode: 'try:\n    print("정상")\nfinally:\n    print("종료")', expectedOutputs: ['정상\n종료'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_9_5",
        title: "에러 강제 소환 (raise)",
        lessons: [
          { type: 'theory', content: '가끔은 우리가 일부러 에러를 발생시켜야 할 때도 있습니다. 이때 `raise` 키워드를 던지면 에러가 터집니다!' },
          { type: 'quiz_code', content: '`raise ValueError("잘못된 값입니다")`를 사용하여 강제로 에러를 발생시키는 코드를 실행해보세요. (출력에 에러가 뜨는게 정상입니다)', initialCode: 'raise ValueError("잘못된 값입니다")', expectedOutputs: [] , expectException: true, hint: '이 문제는 일부러 에러를 발생시키는 것이 정답이에요! 코드를 그대로 실행해보세요.' }
        ]
      }
    ]
  },
  // ================= UNIT 10 =================
  {
    id: 10,
    title: "UNIT 10\n붕어빵의 철학 (OOP 기초)",
    nodes: [
      {
        id: "node_10_1",
        title: "붕어빵 틀과 붕어빵 (클래스와 객체)",
        lessons: [
          { type: 'theory', content: '객체지향 프로그래밍(OOP)은 코드의 재사용성을 극대화합니다. **클래스(Class)**는 똑같은 무언가를 계속 만들어낼 수 있는 "붕어빵 틀"이고, **객체(Object)**는 그 틀로 찍어낸 "붕어빵"입니다.' },
          { type: 'quiz_multiple_choice', content: '다음 중 "설계도" 역할을 하는 것은?', options: ['객체(Object)', '클래스(Class)', '인스턴스(Instance)'], answer: 1, explanation: '클래스는 붕어빵 틀, 즉 설계도입니다. 객체와 인스턴스는 설계도로 만든 실제 결과물입니다.' , hint: '클래스는 객체를 찍어내는 설계도(붕어빵 틀) 역할을 합니다.' },
          { type: 'theory', content: '파이썬에서 클래스는 `class` 키워드로 만들고, 이름은 보통 첫 글자를 대문자로 씁니다.' }
        ]
      },
      {
        id: "node_10_2",
        title: "나만의 클래스 만들기",
        lessons: [
          { type: 'theory', content: '`class Dog:` 로 개를 만드는 설계도를 짤 수 있습니다. 설계도를 이용해 객체를 만들 때는 함수처럼 괄호를 칩니다. `my_dog = Dog()`' },
          { type: 'quiz_code', content: '`Cat` 이라는 빈 클래스(내부에 `pass` 작성)를 만들고, 객체를 하나 생성해서 출력해보세요.', initialCode: 'class Cat:\n    pass\n\nmy_cat = Cat()\nprint(type(my_cat).__name__)', expectedOutputs: ['Cat'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_10_3",
        title: "클래스 안의 변수 (속성)",
        lessons: [
          { type: 'theory', content: '객체들은 저마다의 데이터(속성)를 가질 수 있습니다. 객체 이름 뒤에 점(`.`)을 찍고 변수처럼 추가하면 됩니다.' },
          { type: 'quiz_code', content: '`dog` 객체를 만들고, `dog.name = "맥스"` 속성을 추가한 뒤 이름을 출력하세요.', initialCode: 'class Dog:\n    pass\n\ndog = Dog()\ndog.name = "맥스"\nprint(dog.name)', expectedOutputs: ['맥스'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_10_4",
        title: "클래스 안의 함수 (메서드)",
        lessons: [
          { type: 'theory', content: '클래스 안에 만든 함수를 **메서드(Method)**라고 부릅니다. 중요한 점! 메서드의 첫 번째 매개변수는 무조건 **자기 자신을 의미하는 `self`**여야 합니다!' },
          { type: 'quiz_multiple_choice', content: '메서드에서 자기 자신을 가리키는 필수 첫 번째 매개변수 이름은?', options: ['this', 'me', 'self'], answer: 2, explanation: '파이썬의 관례이자 필수 문법으로 클래스 내부 메서드의 첫 번째 파라미터는 무조건 self를 사용합니다.' , hint: '클래스 안 메서드의 첫 번째 매개변수는 관례상 반드시 self로 씁니다.' },
          { type: 'quiz_code', content: '`bark(self)` 메서드 안에서 "멍멍!"을 출력하도록 완성하세요.', initialCode: 'class Dog:\n    def bark(self):\n        print("멍멍!")\n\ndog = Dog()\ndog.bark()', expectedOutputs: ['멍멍!'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_10_5",
        title: "붕어빵의 첫 탄생 (초기화 __init__)",
        lessons: [
          { type: 'theory', content: '객체가 방금 딱! 태어났을 때 자동으로 한 번 쨘! 하고 실행되는 특별한 메서드가 있습니다. 바로 초기화 생성자인 `__init__` 입니다. (앞뒤로 언더바 2개씩!)' },
          { type: 'theory', content: '생성자에서 `self.name = name` 처럼 값을 받아 속성을 세팅해두면 객체를 찍어내자마자 속성을 가지게 됩니다.' },
          { type: 'quiz_code', content: '`__init__` 메서드에서 받은 `name`을 `self.name`에 저장하는 코드를 완성하세요.', initialCode: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\ndog = Dog("맥스")\nprint(dog.name)', expectedOutputs: ['맥스'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      }
    ]
  }
];
