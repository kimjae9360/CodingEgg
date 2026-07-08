export const tier1 = [
  // ================= UNIT 1 =================
  {
    id: 1,
    title: "UNIT 1\n파이썬 비기너",
    nodes: [
      {
        id: "node_1_1",
        title: "파이썬 첫 인사 (print)",
        lessons: [
          { type: 'theory', content: '파이썬의 세계에 오신 것을 환영합니다! 파이썬에게 말을 걸려면 `print()` 함수를 사용합니다. 괄호 안에 출력하고 싶은 것을 넣으면 화면에 보여준답니다!' },
          { type: 'quiz_code', content: '화면에 "Hello World"를 출력해보세요.', initialCode: 'print()', expectedOutputs: ['Hello World'] , hint: '괄호 안에 큰따옴표로 감싼 "Hello World"를 넣어보세요.' },
          { type: 'theory', content: '문자를 출력할 때는 반드시 큰따옴표(" ")나 작은따옴표(\' \')로 감싸주어야 합니다. 그렇지 않으면 컴퓨터가 문자인지 명령어인지 헷갈려해요!' },
          { type: 'quiz_multiple_choice', content: '다음 중 올바르게 "안녕"을 출력하는 코드는 무엇일까요?', options: ['print(안녕)', 'print("안녕")', 'print 안녕'], answer: 1, explanation: '문자를 출력할 때는 항상 따옴표가 필요합니다.' , hint: '문자를 출력하려면 반드시 따옴표로 감싸야 합니다.' },
          { type: 'quiz_code', content: '여러분의 이름을 출력해보세요. 예: "홍길동"', initialCode: '# 여기에 코드를 작성하세요\nprint("코딩에그")', expectedOutputs: ['코딩에그'] , hint: '이미 정답과 비슷한 코드가 적혀있어요! 그대로 실행 버튼을 눌러보세요.' }
        ]
      },
      {
        id: "node_1_2",
        title: "데이터의 상자 (변수)",
        lessons: [
          { type: 'theory', content: '데이터를 담아두는 상자를 **변수(Variable)**라고 합니다. `이름 = 값` 형태로 만들죠. `=` 기호는 같다는 뜻이 아니라, 오른쪽의 값을 왼쪽 상자에 "넣는다"는 뜻입니다.' },
          { type: 'quiz_multiple_choice', content: '변수 `age`에 숫자 20을 저장하는 올바른 코드는?', options: ['20 = age', 'age == 20', 'age = 20'], answer: 2, explanation: '변수 이름이 반드시 왼쪽에, 저장할 값이 오른쪽에 와야 합니다. `==`는 같다는 뜻의 기호입니다.' , hint: '변수 이름은 왼쪽에, 저장할 값은 오른쪽에 옵니다. 이중 등호(==)는 비교연산자예요.' },
          { type: 'quiz_code', content: '변수 `apple`을 만들고 숫자 5를 저장한 뒤, `apple` 변수를 print()로 출력해보세요.', initialCode: 'apple = 5\nprint(apple)', expectedOutputs: ['5'] , hint: '이미 완성된 코드예요. 그대로 실행해보세요!' },
          { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없고, 띄어쓰기 대신 언더바(`_`)를 사용해야 합니다. (예: `my_name`)' },
          { type: 'quiz_multiple_choice', content: '다음 중 잘못된 변수 이름은?', options: ['user_age', '1st_place', 'my_score'], answer: 1, explanation: '변수 이름은 숫자로 시작할 수 없습니다.' , hint: '변수 이름이 숫자로 시작할 수 있는지 생각해보세요.' }
        ]
      },
      {
        id: "node_1_3",
        title: "숫자 다루기 (연산)",
        lessons: [
          { type: 'theory', content: '파이썬은 훌륭한 계산기입니다. 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)을 할 수 있습니다.' },
          { type: 'quiz_code', content: '10 더하기 5의 결과를 출력하는 코드를 작성하세요.', initialCode: 'print(10 + 5)', expectedOutputs: ['15'] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러 확인해보세요!' },
          { type: 'theory', content: '파이썬에는 특별한 나눗셈이 있습니다. `//`는 몫만 구하고, `%`는 나머지만 구합니다.' },
          { type: 'quiz_multiple_choice', content: '`10 % 3` 의 결과는 무엇일까요?', options: ['3', '1', '0.33'], answer: 1, explanation: '`%` 연산자는 10을 3으로 나눈 "나머지"를 반환합니다. 10 = 3*3 + 1 이므로 나머지는 1입니다.' , hint: '%는 나눗셈의 나머지를 구합니다. 10을 3으로 나누면 몫은 3, 나머지는 얼마일까요?' },
          { type: 'quiz_code', content: '변수 `a`에 20, `b`에 3을 넣고, `a`를 `b`로 나눈 나머지(`%`)를 출력해보세요.', initialCode: 'a = 20\nb = 3\nprint(a % b)', expectedOutputs: ['2'] , hint: '이미 완성된 코드예요. 실행해서 결과를 확인해보세요!' }
        ]
      },
      {
        id: "node_1_4",
        title: "문자열의 세계",
        lessons: [
          { type: 'theory', content: '문자열(String)끼리 `+` 기호를 사용하면 두 문자가 딱 붙게 됩니다. 이것을 "문자열 연결"이라고 해요.' },
          { type: 'quiz_code', content: '"안녕"과 "파이썬"을 더해서 출력해보세요.', initialCode: 'print("안녕" + "파이썬")', expectedOutputs: ['안녕파이썬'] , hint: '이미 완성된 코드입니다. 실행 버튼을 눌러보세요!' },
          { type: 'theory', content: '문자열과 숫자는 서로 더할 수 없습니다! 숫자를 문자로 바꾸려면 `str()` 함수를 써야 해요.' },
          { type: 'quiz_multiple_choice', content: '다음 중 에러가 발생하는 코드는?', options: ['print("나이: " + str(20))', 'print("나이: " + 20)', 'print("나이: 20")'], answer: 1, explanation: '문자열("나이: ")과 숫자(20)는 `+` 기호로 연결할 수 없습니다. 숫자를 `str(20)`으로 변환해야 합니다.' , hint: '문자열과 숫자를 플러스로 바로 더할 수 있는지 생각해보세요. 숫자를 str()로 바꿔야 할 수도 있어요.' },
          { type: 'quiz_code', content: '변수 `year`에 2024를 넣고, "올해는 " + str(year) 를 출력해보세요.', initialCode: 'year = 2024\nprint("올해는 " + str(year))', expectedOutputs: ['올해는 2024'] , hint: '이미 완성된 코드예요. 그대로 실행해보세요!' }
        ]
      },
      {
        id: "node_1_5",
        title: "글자 뽑아내기 (인덱싱)",
        lessons: [
          { type: 'theory', content: '문자열에서 특정 글자만 뽑아내는 것을 **인덱싱(Indexing)**이라고 합니다. 컴퓨터는 숫자를 0부터 셉니다!' },
          { type: 'quiz_multiple_choice', content: '`word = "Python"` 일 때, `word[0]`의 값은 무엇일까요?', options: ['y', 'P', 't'], answer: 1, explanation: '컴퓨터는 무조건 0번부터 시작합니다! 따라서 0번째 글자는 맨 첫 글자인 P입니다.' , hint: '컴퓨터는 0번부터 세기 시작합니다. word의 0번째 글자는 무엇일까요?' },
          { type: 'theory', content: '파이썬의 마법! 음수 인덱스를 사용하면 뒤에서부터 셉니다. `-1`은 맨 마지막 글자입니다.' },
          { type: 'quiz_code', content: '`text = "CodingEgg"`에서 맨 마지막 글자를 인덱싱하여 출력해보세요.', initialCode: 'text = "CodingEgg"\nprint(text[-1])', expectedOutputs: ['g'] , hint: '이미 완성된 코드예요. 실행해서 결과를 확인해보세요!' },
          { type: 'quiz_code', content: '여러 글자를 자르는 **슬라이싱**은 `[시작:끝]`입니다. "Python"에서 "Pyt"만 자르려면 `[0:3]`을 씁니다. "Coding"에서 "Cod"를 잘라보세요.', initialCode: 'text = "Coding"\nprint(text[0:3])', expectedOutputs: ['Cod'] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러보세요!' }
        ]
      }
    ]
  },
  // ================= UNIT 2 =================
  {
    id: 2,
    title: "UNIT 2\n조건의 마법",
    nodes: [
      {
        id: "node_2_1",
        title: "참과 거짓 (Boolean)",
        lessons: [
          { type: 'theory', content: '세상에는 참(True)과 거짓(False)이라는 특별한 데이터 타입이 있습니다. 이를 불리언(Boolean)이라고 부릅니다. 파이썬에서는 반드시 첫 글자를 대문자로 써야 합니다.' },
          { type: 'quiz_multiple_choice', content: '올바른 불리언 값 표기법은?', options: ['true', 'TRUE', 'True'], answer: 2, explanation: '파이썬에서는 첫 글자만 대문자인 True, False를 사용합니다.' , hint: '파이썬은 대소문자를 구분합니다. True/False는 첫 글자만 대문자예요.' },
          { type: 'quiz_code', content: '변수 `is_raining`에 True를 할당하고 출력해보세요.', initialCode: 'is_raining = True\nprint(is_raining)', expectedOutputs: ['True'] , hint: '이미 완성된 코드예요. 실행해보세요!' },
          { type: 'theory', content: '비교 연산자(`>`, `<`, `==`, `!=`)를 사용하면 결과가 True나 False로 나옵니다.' },
          { type: 'quiz_code', content: '10이 5보다 크다(`10 > 5`)는 식의 결과를 출력해보세요.', initialCode: 'print(10 > 5)', expectedOutputs: ['True'] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러보세요!' }
        ]
      },
      {
        id: "node_2_2",
        title: "만약에... (if문)",
        lessons: [
          { type: 'theory', content: '`if`문은 특정 조건이 참일 때만 코드를 실행합니다. 조건 뒤에는 반드시 콜론(`:`)을 붙이고, 실행할 코드는 스페이스바 4칸을 **들여쓰기(Indentation)** 해야 합니다.' },
          { type: 'quiz_multiple_choice', content: '다음 중 if문의 문법이 올바른 것은?', options: ['if age > 18\nprint("성인")', 'if age > 18:\n    print("성인")', 'if age > 18:\nprint("성인")'], answer: 1, explanation: 'if 조건 뒤에는 콜론(:)이 필수이며, 실행할 블록은 반드시 들여쓰기(스페이스 4칸)를 해야 합니다.' , hint: 'if 조건 뒤에는 콜론이 필요하고, 실행할 코드는 들여쓰기 해야 해요.' },
          { type: 'quiz_code', content: '변수 `money`가 5000보다 크면 "택시 타기"를 출력하는 코드를 완성하세요.', initialCode: 'money = 6000\nif money > 5000:\n    print("택시 타기")', expectedOutputs: ['택시 타기'] , hint: '이미 완성된 코드예요. 실행해보세요!' },
          { type: 'theory', content: '들여쓰기는 파이썬에서 블록을 구분하는 아주 중요한 문법입니다! 잊지 마세요.' }
        ]
      },
      {
        id: "node_2_3",
        title: "그렇지 않으면 (else)",
        lessons: [
          { type: 'theory', content: '`if`의 조건이 거짓(False)일 때 실행할 코드는 `else:` 아래에 적습니다. `else`에는 조건을 적지 않습니다!' },
          { type: 'quiz_multiple_choice', content: 'else문의 올바른 사용법은?', options: ['else x < 10:', 'else:', 'else if:'], answer: 1, explanation: 'else는 "그 외의 모든 경우"를 뜻하므로 조건을 적지 않고 콜론(:)만 씁니다.' , hint: 'else는 조건을 따로 적지 않고 콜론만 붙입니다.' },
          { type: 'quiz_code', content: '`money = 3000`입니다. 5000보다 크면 "택시", 아니면 "걷기"를 출력하게 완성하세요.', initialCode: 'money = 3000\nif money > 5000:\n    print("택시")\nelse:\n    print("걷기")', expectedOutputs: ['걷기'] , hint: '이미 완성된 코드예요. 실행해서 결과를 확인해보세요!' }
        ]
      },
      {
        id: "node_2_4",
        title: "여러 개의 조건 (elif)",
        lessons: [
          { type: 'theory', content: '조건이 여러 개일 때는 `elif`를 사용합니다. "else if"의 줄임말로, 앞의 조건이 거짓일 때 새로운 조건을 검사합니다.' },
          { type: 'quiz_code', content: '점수(score)가 85입니다. 90이상이면 "A", 80이상이면 "B", 그 외엔 "C"를 출력합니다. 코드를 완성하세요.', initialCode: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")', expectedOutputs: ['B'] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러보세요!' },
          { type: 'quiz_multiple_choice', content: '조건 검사의 순서에 대한 설명 중 맞는 것은?', options: ['아무 조건이나 참이면 다 실행된다.', '위에서부터 차례대로 검사하며, 참인 조건 하나만 실행된다.', '맨 마지막 조건부터 검사한다.'], answer: 1, explanation: 'if-elif-else 구조는 위에서 아래로 검사하며, 참인 조건의 블록 하나를 실행하면 전체 조건문을 빠져나옵니다.' , hint: 'if-elif-else는 위에서부터 순서대로 검사하다가 처음 참인 조건 하나만 실행합니다.' },
          { type: 'theory', content: '조건은 `and`(그리고)와 `or`(또는)로 묶을 수도 있습니다! `if a > 10 and b < 5:` 처럼요.' }
        ]
      },
      {
        id: "node_2_5",
        title: "조건문 마스터 보스전",
        lessons: [
          { type: 'theory', content: '지금까지 배운 변수, 비교 연산, if-elif-else를 총동원하여 미션을 해결해봅시다!' },
          { type: 'quiz_code', content: '나이(age)가 8 미만이면 "무료", 8 이상 20 미만이면 "학생", 20 이상이면 "성인"을 출력하는 판별기를 작성하세요. 현재 age는 15입니다.', initialCode: 'age = 15\nif age < 8:\n    print("무료")\nelif age < 20:\n    print("학생")\nelse:\n    print("성인")', expectedOutputs: ['학생'] , hint: '이미 완성된 코드예요. 실행해서 결과를 확인해보세요!' }
        ]
      }
    ]
  },
  // ================= UNIT 3 =================
  {
    id: 3,
    title: "UNIT 3\n무한 반복의 굴레",
    nodes: [
      {
        id: "node_3_1",
        title: "조건부 반복 (while)",
        lessons: [
          { type: 'theory', content: '`while`문은 조건이 참(True)인 동안 블록 안의 코드를 계~속 반복합니다.' },
          { type: 'quiz_multiple_choice', content: 'while문의 치명적인 실수는 무엇일까요?', options: ['들여쓰기 안 하기', '무한 루프에 빠지기', '둘 다 맞음'], answer: 2, explanation: '조건이 영원히 True라면 프로그램이 끝나지 않는 무한 루프에 빠집니다! 블록 안에서 조건을 False로 만들 장치가 필요해요.' , hint: '무한 루프에 빠지지 않으려면 반복문 안에서 조건을 언젠가 거짓으로 만들어야 해요.' },
          { type: 'quiz_code', content: '숫자 `i`를 1부터 3까지 출력하는 while문입니다. 빈칸을 채워보세요.', initialCode: 'i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1', expectedOutputs: ['1\n2\n3'] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러보세요!' },
          { type: 'theory', content: '`i = i + 1`은 변수 i의 값을 1 증가시킵니다. 짧게 `i += 1`로 쓸 수도 있어요!' }
        ]
      },
      {
        id: "node_3_2",
        title: "탈출구와 건너뛰기 (break / continue)",
        lessons: [
          { type: 'theory', content: '반복문 안에서 `break`를 만나면 무조건 반복문을 부수고 탈출합니다!' },
          { type: 'quiz_code', content: '1부터 반복하다가 `i`가 3이 되면 탈출(`break`)하도록 완성하세요.', initialCode: 'i = 1\nwhile True:\n    if i == 3:\n        break\n    print(i)\n    i += 1', expectedOutputs: ['1\n2'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' },
          { type: 'theory', content: '`continue`는 이번 바퀴의 남은 코드를 무시하고, 바로 다음 바퀴(조건 검사)로 건너뜁니다.' },
          { type: 'quiz_multiple_choice', content: '`i = 0\nwhile i < 3:\n    i += 1\n    if i == 2:\n        continue\n    print(i)` 의 출력 결과는?', options: ['1, 2, 3', '1, 3', '2'], answer: 1, explanation: 'i가 2일 때는 continue를 만나 아래의 print(i)를 건너뛰고 다음 바퀴로 넘어갑니다.' , hint: 'i가 2일 때 continue를 만나면 그 아래 print(i)를 건너뛰고 다음 반복으로 넘어갑니다.' }
        ]
      },
      {
        id: "node_3_3",
        title: "정해진 만큼 반복 (for)",
        lessons: [
          { type: 'theory', content: '파이썬의 꽃이라 불리는 `for`문입니다. 문자열이나 리스트 안에 있는 요소들을 하나씩 순서대로 꺼내어 반복합니다.' },
          { type: 'quiz_multiple_choice', content: '`for char in "Hi":` 에서 `char` 변수에는 어떤 값들이 들어갈까요?', options: ['"H", "i"', '"Hi"', '0, 1'], answer: 0, explanation: '문자열을 for문에 넣으면 글자를 하나씩 떼어서 앞의 변수(char)에 넣어줍니다.' , hint: '문자열을 for문에 넣으면 한 글자씩 순서대로 변수에 담깁니다.' },
          { type: 'quiz_code', content: '"Egg"라는 문자열의 각 글자를 for문으로 하나씩 출력해보세요.', initialCode: 'for x in "Egg":\n    print(x)', expectedOutputs: ['E\ng\ng'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_3_4",
        title: "숫자 공장 (range)",
        lessons: [
          { type: 'theory', content: '`range()`는 지정한 횟수만큼 숫자를 만들어내는 공장입니다. `for`문과 환상의 짝꿍이죠! `range(5)`는 0부터 4까지 5개의 숫자를 만듭니다.' },
          { type: 'quiz_multiple_choice', content: '`range(3)`이 만들어내는 숫자는?', options: ['1, 2, 3', '0, 1, 2', '3'], answer: 1, explanation: '파이썬은 0부터 시작합니다! 지정한 숫자의 바로 앞(n-1)까지만 만들어냅니다.' , hint: 'range(n)은 0부터 n-1까지의 숫자를 만듭니다.' },
          { type: 'quiz_code', content: 'for문과 range()를 사용하여 "Hello"를 3번 반복 출력해보세요.', initialCode: 'for i in range(3):\n    print("Hello")', expectedOutputs: ['Hello\nHello\nHello'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' },
          { type: 'theory', content: '`range(시작, 끝)` 처럼 시작 숫자를 지정할 수도 있습니다. `range(1, 4)`는 1, 2, 3을 만듭니다.' },
          { type: 'quiz_code', content: '1부터 3까지 숫자를 출력해보세요.', initialCode: 'for i in range(1, 4):\n    print(i)', expectedOutputs: ['1\n2\n3'] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러보세요!' }
        ]
      },
      {
        id: "node_3_5",
        title: "반복문 마스터 보스전",
        lessons: [
          { type: 'theory', content: '반복문(for, while)과 조건문(if)을 결합하면 아주 강력한 프로그램을 만들 수 있습니다!' },
          { type: 'quiz_code', content: 'for문과 range(1, 6)을 사용하여 1부터 5까지 숫자 중 짝수(나머지가 0)만 출력하는 코드를 완성하세요.', initialCode: 'for i in range(1, 6):\n    if i % 2 == 0:\n        print(i)', expectedOutputs: ['2\n4'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      }
    ]
  },
  // ================= UNIT 4 =================
  {
    id: 4,
    title: "UNIT 4\n데이터 담는 가방",
    nodes: [
      {
        id: "node_4_1",
        title: "리스트(List) 기초",
        lessons: [
          { type: 'theory', content: '여러 개의 데이터를 하나의 가방에 담고 싶을 땐 리스트(List)를 씁니다. 대괄호 `[ ]`로 만들고 쉼표 `,`로 구분합니다.' },
          { type: 'quiz_multiple_choice', content: '빈 리스트를 만드는 올바른 방법은?', options: ['bag = ()', 'bag = []', 'bag = {}'], answer: 1, explanation: '리스트는 항상 대괄호 [] 를 사용합니다.' , hint: '리스트는 대괄호 []를 사용해서 만듭니다.' },
          { type: 'quiz_code', content: '변수 `fruits`에 "apple", "banana", "cherry" 세 개의 문자열을 담은 리스트를 만들고 출력해보세요.', initialCode: 'fruits = ["apple", "banana", "cherry"]\nprint(fruits)', expectedOutputs: ["['apple', 'banana', 'cherry']"] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_4_2",
        title: "리스트 안의 보물 찾기",
        lessons: [
          { type: 'theory', content: '리스트도 문자열처럼 0번부터 시작하는 인덱스 번호를 가집니다. `리스트이름[번호]` 로 안의 물건을 꺼냅니다.' },
          { type: 'quiz_code', content: '`colors = ["red", "blue", "green"]` 에서 "blue"를 인덱싱으로 꺼내 출력하세요.', initialCode: 'colors = ["red", "blue", "green"]\nprint(colors[1])', expectedOutputs: ['blue'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' },
          { type: 'theory', content: '리스트 안의 값을 바꾸고 싶다면, 변수에 값을 넣듯이 인덱싱에 할당하면 됩니다. `colors[0] = "pink"`' },
          { type: 'quiz_code', content: '`colors` 리스트의 0번째 값을 "black"으로 바꾼 후 리스트 전체를 출력해보세요.', initialCode: 'colors = ["red", "blue", "green"]\ncolors[0] = "black"\nprint(colors)', expectedOutputs: ["['black', 'blue', 'green']"] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러보세요!' }
        ]
      },
      {
        id: "node_4_3",
        title: "리스트 메서드 (추가와 삭제)",
        lessons: [
          { type: 'theory', content: '가방에 물건을 넣고 뺄 수 있는 기능(메서드)들이 있습니다. `.append(값)`는 맨 뒤에 값을 추가합니다.' },
          { type: 'quiz_code', content: '`nums = [1, 2]` 리스트에 `.append()`를 사용하여 숫자 3을 추가하고 출력하세요.', initialCode: 'nums = [1, 2]\nnums.append(3)\nprint(nums)', expectedOutputs: ['[1, 2, 3]'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' },
          { type: 'theory', content: '`.pop()`은 리스트의 맨 마지막 값을 꺼내고(삭제하고) 반환합니다. 괄호 안에 인덱스를 넣으면 그 위치의 값을 삭제합니다.' },
          { type: 'quiz_multiple_choice', content: '`[10, 20, 30].pop()` 을 실행한 후 리스트에 남는 값은?', options: ['10, 20', '20, 30', '10, 30'], answer: 0, explanation: '.pop()은 아무것도 안 적으면 항상 맨 마지막(30)을 삭제합니다.' , hint: '.pop()은 괄호가 비어있으면 리스트의 맨 마지막 값을 삭제합니다.' }
        ]
      },
      {
        id: "node_4_4",
        title: "리스트와 반복문의 콜라보",
        lessons: [
          { type: 'theory', content: '`for`문에 리스트를 넣으면, 리스트 안의 원소들을 하나씩 순서대로 꺼내어 처리합니다.' },
          { type: 'quiz_code', content: '`for`문을 사용하여 `["A", "B", "C"]` 리스트의 원소를 차례대로 출력해보세요.', initialCode: 'items = ["A", "B", "C"]\nfor item in items:\n    print(item)', expectedOutputs: ['A\nB\nC'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' },
          { type: 'theory', content: '`len()` 함수를 사용하면 리스트 안에 물건이 몇 개 들어있는지(길이)를 알려줍니다.' },
          { type: 'quiz_code', content: '`len()`을 사용하여 `items = [10, 20, 30, 40]` 의 길이를 출력하세요.', initialCode: 'items = [10, 20, 30, 40]\nprint(len(items))', expectedOutputs: ['4'] , hint: '이미 완성된 코드예요. 실행 버튼을 눌러보세요!' }
        ]
      },
      {
        id: "node_4_5",
        title: "변경 불가능한 가방 (Tuple)",
        lessons: [
          { type: 'theory', content: '리스트와 똑같이 생겼지만, 절대 안의 값을 바꿀 수 없는 가방이 있습니다. 바로 **튜플(Tuple)**입니다. 대괄호 대신 소괄호 `( )`로 만듭니다.' },
          { type: 'quiz_multiple_choice', content: '`t = (1, 2, 3)` 일 때 허용되는 동작은?', options: ['t[0] = 5', 't.append(4)', 'print(t[1])'], answer: 2, explanation: '튜플은 값을 변경(할당)하거나 추가/삭제할 수 없습니다. 읽기(인덱싱)만 가능합니다!' , hint: '튜플은 값을 바꾸거나 추가 삭제할 수 없고, 읽기(인덱싱)만 가능합니다.' },
          { type: 'quiz_code', content: '`(10, 20)` 튜플을 변수 `pos`에 만들고 길이를 출력해보세요.', initialCode: 'pos = (10, 20)\nprint(len(pos))', expectedOutputs: ['2'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      }
    ]
  },
  // ================= UNIT 5 =================
  {
    id: 5,
    title: "UNIT 5\n티어 1 최종 보스전",
    nodes: [
      {
        id: "node_5_1",
        title: "비기너 종합 테스트 1",
        lessons: [
          { type: 'theory', content: '지금까지 배운 변수, 연산자, 리스트, 조건문, 반복문을 모두 동원하여 미니 퀘스트들을 돌파해봅시다!' },
          { type: 'quiz_code', content: '1부터 10까지의 숫자 중 "3의 배수"만 리스트에 모아서 출력하세요. 빈 리스트에 `.append()`를 사용하세요.', initialCode: 'result = []\nfor i in range(1, 11):\n    if i % 3 == 0:\n        result.append(i)\nprint(result)', expectedOutputs: ['[3, 6, 9]'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_5_2",
        title: "비기너 종합 테스트 2",
        lessons: [
          { type: 'theory', content: '리스트 안의 값들을 전부 더하려면 어떻게 할까요? `total`이라는 합계 변수를 0으로 만들고, for문으로 하나씩 더해주면 됩니다!' },
          { type: 'quiz_code', content: '`prices = [1000, 2000, 3000]` 리스트의 모든 값을 더해서 총합을 출력하세요.', initialCode: 'prices = [1000, 2000, 3000]\ntotal = 0\nfor p in prices:\n    total += p\nprint(total)', expectedOutputs: ['6000'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_5_3",
        title: "비기너 종합 테스트 3",
        lessons: [
          { type: 'theory', content: '문자열도 리스트와 똑같이 for문에 넣을 수 있고, 길이를 `len()`으로 잴 수 있다는 점을 기억하시죠?' },
          { type: 'quiz_code', content: '"CodingEgg" 문자열에서 소문자 "g"가 몇 번 나오는지 세어서 출력하세요.', initialCode: 'text = "CodingEgg"\ncount = 0\nfor char in text:\n    if char == "g":\n        count += 1\nprint(count)', expectedOutputs: ['3'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_5_4",
        title: "비기너 종합 테스트 4",
        lessons: [
          { type: 'theory', content: '조건문을 한 줄로 짧게 쓰는 방법은 없을까요? 파이썬은 논리를 직관적으로 표현할 수 있습니다.' },
          { type: 'quiz_multiple_choice', content: '리스트 안에 특정 값이 있는지 확인하는 파이썬의 마법같은 키워드는?', options: ['has', 'in', 'exist'], answer: 1, explanation: '`if "apple" in fruits:` 처럼 `in` 키워드를 사용하면 리스트나 문자열 안에 값이 포함되어 있는지(True/False) 쉽게 알 수 있습니다!' , hint: '리스트나 문자열 안에 값이 있는지 확인할 때 in 키워드를 사용합니다.' },
          { type: 'quiz_code', content: '`"apple"`이 `["banana", "apple"]` 리스트에 있다면 "있음"을 출력하게 코드를 완성하세요.', initialCode: 'fruits = ["banana", "apple"]\nif "apple" in fruits:\n    print("있음")', expectedOutputs: ['있음'] , hint: '이미 완성된 코드예요. 실행해서 확인해보세요!' }
        ]
      },
      {
        id: "node_5_5",
        title: "🏆 티어 1 클리어 🏆",
        lessons: [
          { type: 'theory', content: '정말 대단합니다! 파이썬의 가장 중요하고 기초적인 뼈대인 [변수, 조건, 반복, 컬렉션]을 완벽하게 마스터하셨습니다.' },
          { type: 'theory', content: '이제 코딩의 기본 원리를 깨우쳤으니, 티어 2 "파이썬 디벨로퍼"에서 함수와 객체지향이라는 강력한 마법을 배울 준비가 되셨습니다!' },
          { type: 'quiz_multiple_choice', content: '티어 1을 수료한 소감이 어떠신가요? (정답 없음)', options: ['파이썬, 별거 아니네!', '빨리 다음 티어로 가고 싶어!', '코딩에그 최고야!'], answer: 2, explanation: '모두 정답입니다! 축하드립니다!' , hint: '정답이 없는 질문이에요! 마음에 드는 답을 골라보세요.' }
        ]
      }
    ]
  }
];
