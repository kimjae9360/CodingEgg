export const tier1 = [
  {
    id: 1,
    title: 'UNIT 1\n파이썬 비기너',
    nodes: [
      {
        id: 'node_1_1',
        title: '파이썬 첫 인사 (print)',
        guidebook: ["파이썬에서 화면에 무언가를 출력하려면 print() 함수를 사용합니다.","문자열은 반드시 따옴표(' ' 또는 \" \")로 감싸야 하며, 숫자는 그냥 쓸 수 있습니다.","💡 자주 틀리는 유형: print(안녕) -> 에러 발생! 따옴표가 빠졌습니다.","🚀 해결 팁: 에러가 나면 괄호의 짝이 맞는지, 문자열 양끝에 따옴표가 있는지 확인하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '화면에 문자를 출력하기 위해 사용하는 함수는?',
    options: ["print()","show()","display()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬의 가장 기본적인 출력 함수입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['화면에 인사하려면 ', ' 을 씁니다.'],
    wordBank: ["print(\"안녕\")","print(안녕)","show(\"안녕\")"],
    answer: ["print(\"안녕\")"],
    hint: '문자열은 따옴표가 필요해요.'
  },
            {
    type: 'quiz_code',
    content: '파이썬 세계에 온 것을 환영합니다! \'Hello\'를 출력하세요.',
    initialCode: 'prnt(\'Hello\')  # 오타를 수정하세요!',
    expectedOutputs: ['Hello'],
    hint: 'print 스펠링이 틀렸어요.'
  },
            {
    type: 'quiz_code',
    content: '올해의 연도인 2024를 숫자로 출력하세요.',
    initialCode: 'print(    )  # 괄호 안에 숫자를 넣으세요.',
    expectedOutputs: ['2024'],
    hint: '2024를 괄호 안에 넣으세요.'
  },
            {
    type: 'quiz_code',
    content: '자신의 닉네임을 상상하며 \'코딩고수\'라고 출력하세요.',
    initialCode: '# \'코딩고수\' 문자열을 출력하는 함수를 완성하세요.',
    expectedOutputs: ['코딩고수'],
    hint: '문자열은 따옴표가 필요합니다.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'print() 함수 안에 문자를 넣을 때 지켜야 할 규칙은?',
    options: ["따옴표로 감싼다","괄호를 두 번 쓴다","무조건 대문자로 쓴다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열은 따옴표가 필수입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['숫자를 출력할 땐 ', ' 을 씁니다.'],
    wordBank: ["print(100)","print\"100\"","print(\"100\")"],
    answer: ["print(100)"],
    hint: '숫자는 따옴표 없이 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '1년의 일수를 출력하세요 (숫자 365).',
    initialCode: '# 365를 화면에 보여주세요.',
    expectedOutputs: ['365'],
    hint: 'print(365)를 타이핑해보세요.'
  },
            {
    type: 'quiz_code',
    content: '에러 메시지를 고쳐보세요: 문자열은 따옴표가 필수입니다.',
    initialCode: 'print(안녕하세요)  # 따옴표가 빠졌어요!',
    expectedOutputs: ['안녕하세요'],
    hint: '안녕하세요 양옆에 큰따옴표를 붙이세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '다음 중 숫자를 출력하는 올바른 코드는?',
    options: ["print(100)","print\"100\"","print 100"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '함수는 항상 소괄호()를 사용합니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '여러 개의 값을 공백으로 띄워 출력하려면 어떤 기호를 쓸까요?',
    options: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '값들을 나열할 때 쓰는 기호입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['두 값을 띄어 쓸 땐 ', ' 를 사용합니다.'],
    wordBank: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: [", (쉼표)"],
    hint: '콤마를 사용해보세요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['빈 줄을 만들 땐 ', ' 만 씁니다.'],
    wordBank: ["print()","print(\" \")","print(0)"],
    answer: ["print()"],
    hint: '아무것도 넣지 마세요.'
  },
            {
    type: 'quiz_code',
    content: '두 가지 단어를 쉼표로 연결해 \'Python, Easy\'를 출력하세요.',
    initialCode: 'print(\'Python\'   \'Easy\')  # 쉼표를 넣어주세요.',
    expectedOutputs: ['Python Easy'],
    hint: '문자열 사이에 쉼표를 넣으면 띄어쓰기가 됩니다.'
  },
            {
    type: 'quiz_code',
    content: '덧셈 결과를 바로 출력해보세요. 10 + 5의 결과를 출력하세요.',
    initialCode: '# 10 + 5를 직접 계산하지 말고 식 그대로 넣으세요.',
    expectedOutputs: ['15'],
    hint: 'print(10 + 5)를 해보세요.'
  },
            {
    type: 'quiz_code',
    content: '아무것도 없는 빈 줄(엔터 효과)을 출력하세요.',
    initialCode: '# 비어있는 print 함수를 작성하세요.',
    expectedOutputs: [''],
    hint: 'print() 만 쓰면 빈 줄이 나옵니다.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'print() 안을 아무것도 없이 비워두면 어떻게 될까요?',
    options: ["빈 줄(엔터)이 출력된다","에러가 난다","0이 출력된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '줄바꿈 역할을 하게 됩니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['문자와 숫자를 함께 출력하려면 ', ' 로 연결합니다.'],
    wordBank: [", (쉼표)","& (앤드)","- (빼기)"],
    answer: [", (쉼표)"],
    hint: '여러 인자를 넣을 땐 쉼표를 써요.'
  },
            {
    type: 'quiz_code',
    content: '별표 3개를 나란히 출력하세요 (\'***\').',
    initialCode: '# 정답: ***',
    expectedOutputs: ['***'],
    hint: '문자열 \'***\'을 출력하세요.'
  },
            {
    type: 'quiz_code',
    content: '스스로 \'성공!\'이라는 글자를 띄워보세요.',
    initialCode: '# 백지 상태입니다. 스스로 코드를 작성하세요.',
    expectedOutputs: ['성공!'],
    hint: '자신 있게 print(\'성공!\')을 타이핑하세요.'
  }
          ]
        ]
      },
      {
        id: 'node_1_2',
        title: '데이터의 상자 (변수)',
        guidebook: ["변수는 데이터를 담아두는 이름 붙은 상자입니다. (예: age = 20)","변수 이름은 항상 왼쪽에, 저장할 값은 오른쪽에 적습니다.","💡 자주 틀리는 유형: 20 = age -> 에러 발생! 순서가 바뀌었습니다.","🚀 해결 팁: 변수명은 숫자로 시작할 수 없으며, 띄어쓰기 대신 언더바(_)를 사용하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '변수에 데이터를 넣을 때 사용하는 기호는?',
    options: ["= (등호)","== (같다)",": (콜론)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '오른쪽의 값을 왼쪽 상자에 넣는다는 의미입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['상자에 값을 넣으려면 ', ' 를 씁니다.'],
    wordBank: ["a = 10","10 = a","a == 10"],
    answer: ["a = 10"],
    hint: '이름이 항상 왼쪽에 와야 해요.'
  },
            {
    type: 'quiz_code',
    content: '나이를 담는 변수 age에 20을 넣고 출력하세요.',
    initialCode: 'age = 20\nprnt(age)  # 오타를 수정하세요!',
    expectedOutputs: ['20'],
    hint: 'print 함수를 고치세요.'
  },
            {
    type: 'quiz_code',
    content: '이름을 담는 name 변수에 \'에그\'를 넣고 출력하세요.',
    initialCode: 'name = \'에그\'\nprint(    )  # 빈칸에 변수 이름을 넣으세요.',
    expectedOutputs: ['에그'],
    hint: 'name을 넣어주세요.'
  },
            {
    type: 'quiz_code',
    content: '골드(gold) 변수에 500을 저장하고 화면에 보여주세요.',
    initialCode: 'gold = 500\n# 출력 함수를 써서 gold 변수를 확인하세요.',
    expectedOutputs: ['500'],
    hint: 'print(gold)를 입력하세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '다음 중 올바른 변수 이름은?',
    options: ["my_name","1st_name","my name"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '변수명은 숫자로 시작할 수 없고 띄어쓰기가 안 됩니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['변수 이름에 띄어쓰기 대신 ', ' 를 씁니다.'],
    wordBank: ["_ (언더바)","- (빼기)","* (별)"],
    answer: ["_ (언더바)"],
    hint: '언더스코어를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '레벨(level) 변수를 직접 만들고 99를 넣은 뒤 출력하세요.',
    initialCode: '# 변수 이름: level, 값: 99\n',
    expectedOutputs: ['99'],
    hint: 'level = 99 이후에 print(level)을 쓰세요.'
  },
            {
    type: 'quiz_code',
    content: '두 변수를 한 번에 출력하세요 (x=10, y=20).',
    initialCode: 'x = 10\ny = 20\nprint(x  y)  # 쉼표가 빠졌어요!',
    expectedOutputs: ['10 20'],
    hint: 'x, y 처럼 쉼표로 연결하세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '변수 x에 숫자 5를 저장하는 코드는?',
    options: ["x = 5","5 = x","x == 5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '왼쪽에 변수 이름, 오른쪽에 값을 적습니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '변수 a와 A는 파이썬에서 어떻게 취급될까요?',
    options: ["서로 다른 변수이다","같은 변수이다","대문자 변수는 쓸 수 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 대소문자를 엄격하게 구분합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['변수의 값을 출력하려면 ', ' 를 합니다.'],
    wordBank: ["print(a)","print(\"a\")","show(a)"],
    answer: ["print(a)"],
    hint: '따옴표를 쓰면 문자 a가 출력돼요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['파이썬은 대소문자를 ', ' 합니다.'],
    wordBank: ["구분","무시","통일"],
    answer: ["구분"],
    hint: 'A와 a는 다릅니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 안의 값을 바꿔보세요. a=5 였다가 a=10으로 바꾼 뒤 출력하세요.',
    initialCode: 'a = 5\na = 10\n# a를 출력하세요.',
    expectedOutputs: ['10'],
    hint: '마지막에 저장된 값이 출력됩니다.'
  },
            {
    type: 'quiz_code',
    content: '점수(score) 변수에 100을 넣고 출력하는 코드를 짜보세요.',
    initialCode: '# 백지 상태입니다. 스스로 해보세요.',
    expectedOutputs: ['100'],
    hint: 'score = 100\nprint(score) 입니다.'
  },
            {
    type: 'quiz_code',
    content: '문자열 변수 msg에 \'Hello\'를 넣고 2번 출력되게 하세요.',
    initialCode: 'msg = \'Hello\'\nprint(msg, msg)  # 그대로 확인해보세요!',
    expectedOutputs: ['Hello Hello'],
    hint: '이미 정답에 가깝습니다. 그대로 입력하세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '저장된 변수의 값을 확인하려면 어떻게 할까요?',
    options: ["print(변수명)","show(변수명)","value(변수명)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '출력 함수를 사용하세요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['변수 이름은 ', ' 로 시작할 수 없습니다.'],
    wordBank: ["숫자","영문자","언더바"],
    answer: ["숫자"],
    hint: '숫자가 맨 앞에 오면 안 돼요.'
  },
            {
    type: 'quiz_code',
    content: '체력(hp) 변수에 1000을 담고 출력하세요.',
    initialCode: '# hp 변수를 사용하세요.',
    expectedOutputs: ['1000'],
    hint: 'hp = 1000\nprint(hp)'
  },
            {
    type: 'quiz_code',
    content: '스스로 마나(mp) 변수를 만들고 50을 넣어 출력하세요.',
    initialCode: '# 스스로 변수 선언과 출력을 모두 해보세요.',
    expectedOutputs: ['50'],
    hint: 'mp = 50\nprint(mp)'
  }
          ]
        ]
      },
      {
        id: 'node_1_3',
        title: '숫자 다루기 (연산)',
        guidebook: ["파이썬은 강력한 계산기입니다. 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)을 기본으로 제공합니다.","몫만 구할 때는 //, 나머지를 구할 때는 % 기호를 사용합니다.","💡 자주 틀리는 유형: '5' + 3 -> 에러 발생! 문자열과 숫자는 더할 수 없습니다.","🚀 해결 팁: 사칙연산을 할 때는 값의 타입(문자열인지 숫자인지)이 일치하는지 꼭 확인하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '3 + 2 * 4 의 결과는?',
    options: ["11","20","9"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '곱셈이 덧셈보다 먼저 계산돼요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['몫만 구하려면 ', ' 를 사용합니다.'],
    wordBank: ["// (슬래시 두 번)","/ (슬래시 한 번)","% (퍼센트)"],
    answer: ["// (슬래시 두 번)"],
    hint: '나머지가 아니라 몫이에요.'
  },
            {
    type: 'quiz_code',
    content: '10과 5를 더한 값을 출력하세요.',
    initialCode: 'pint(10 + 5)  # 함수 이름 오타를 고치세요!',
    expectedOutputs: ['15'],
    hint: 'print로 고치세요.'
  },
            {
    type: 'quiz_code',
    content: '20에서 8을 뺀 값을 출력하세요.',
    initialCode: 'print(20 - )  # 8을 넣어주세요.',
    expectedOutputs: ['12'],
    hint: 'print(20 - 8)'
  },
            {
    type: 'quiz_code',
    content: '6과 7을 곱한 값을 출력하세요.',
    initialCode: 'print(6 * 7)',
    expectedOutputs: ['42'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '7 // 2 의 결과는?',
    options: ["3","3.5","1"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '//는 몫만 구하는 연산자예요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['나머지를 구하려면 ', ' 를 사용합니다.'],
    wordBank: ["% (퍼센트)","// (슬래시 두 번)","* (별표)"],
    answer: ["% (퍼센트)"],
    hint: '몫이 아니라 나머지예요.'
  },
            {
    type: 'quiz_code',
    content: '17을 5로 나눈 몫을 출력하세요.',
    initialCode: 'print(17 / 5)  # 나눗셈 기호를 몫 연산자로 바꾸세요!',
    expectedOutputs: ['3'],
    hint: '//를 사용하면 몫만 나옵니다.'
  },
            {
    type: 'quiz_code',
    content: '17을 5로 나눈 나머지를 출력하세요.',
    initialCode: 'print(17 // 5)  # 나머지를 구하는 기호로 바꾸세요!',
    expectedOutputs: ['2'],
    hint: '%를 사용하세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '7 % 2 의 결과는?',
    options: ["1","3","0"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '%는 나머지를 구하는 연산자예요.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '2 ** 3 의 결과는?',
    options: ["8","6","9"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '**는 거듭제곱(지수) 연산자예요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['거듭제곱을 구하려면 ', ' 를 사용합니다.'],
    wordBank: ["** (별표 두 번)","^ (캐럿)","* (별표)"],
    answer: ["** (별표 두 번)"],
    hint: '별표 두 개를 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['파이썬은 ', ' 순서로 연산을 계산합니다.'],
    wordBank: ["곱셈/나눗셈을 먼저, 그다음 덧셈/뺄셈","왼쪽부터 무조건 순서대로","괄호를 항상 무시하고"],
    answer: ["곱셈/나눗셈을 먼저, 그다음 덧셈/뺄셈"],
    hint: '수학 시간에 배운 순서와 같아요.'
  },
            {
    type: 'quiz_code',
    content: '2의 10제곱을 출력하세요.',
    initialCode: 'print(2 * 10)  # 곱셈이 아니라 거듭제곱이에요!',
    expectedOutputs: ['1024'],
    hint: 'print(2 ** 10)'
  },
            {
    type: 'quiz_code',
    content: '변수 없이 (10 + 20) * 3의 결과를 출력하세요.',
    initialCode: '# 괄호를 활용해 직접 계산해보세요.',
    expectedOutputs: ['90'],
    hint: 'print((10 + 20) * 3)'
  },
            {
    type: 'quiz_code',
    content: '\'점수: \' 라는 문자열과 숫자 100을 문자열로 바꿔 붙여 출력하세요.',
    initialCode: 'print(\'점수: \' + 100)  # 에러가 나요! 숫자를 문자열로 바꿔보세요.',
    expectedOutputs: ['점수: 100'],
    hint: 'str(100)으로 감싸주세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'5\' + 3 을 실행하면 어떻게 될까요?',
    options: ["에러가 난다","8이 된다","'53'이 된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열과 숫자는 그냥 더할 수 없어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['문자열과 숫자를 더하려면 먼저 ', ' 로 형변환해야 합니다.'],
    wordBank: ["str() 또는 int()","print()","len()"],
    answer: ["str() 또는 int()"],
    hint: '타입을 맞춰줘야 해요.'
  },
            {
    type: 'quiz_code',
    content: '가로 4, 세로 5인 직사각형의 넓이를 출력하세요.',
    initialCode: 'width = 4\nheight = 5\n# 넓이를 계산해서 출력하세요.',
    expectedOutputs: ['20'],
    hint: 'print(width * height)'
  },
            {
    type: 'quiz_code',
    content: '스스로 100을 3으로 나눈 나머지를 계산해 출력해보세요.',
    initialCode: '# 백지 상태입니다. 스스로 작성해보세요.',
    expectedOutputs: ['1'],
    hint: 'print(100 % 3)'
  }
          ]
        ]
      },
      {
        id: 'node_1_4',
        title: '문자열의 세계',
        guidebook: ["문자열끼리 더하기(+) 기호를 사용하면 두 문자가 하나로 합쳐집니다.","문자열에 숫자만큼 곱하기(*)를 하면 해당 문자열이 그 횟수만큼 반복됩니다.","💡 자주 틀리는 유형: 문자열 안에서 따옴표 종류 섞어 쓰기","🚀 해결 팁: 여는 따옴표와 닫는 따옴표의 종류를 무조건 똑같이 맞춰주세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '다음 중 올바른 문자열은?',
    options: ["'안녕'","안녕","prnt(안녕)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열은 따옴표로 감싸야 해요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['문자열끼리 이어 붙이려면 ', ' 기호를 사용합니다.'],
    wordBank: ["+ (더하기)","- (빼기)","/ (나누기)"],
    answer: ["+ (더하기)"],
    hint: '더하기 기호를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '\'Hello\'와 \'World\'를 이어붙여 \'HelloWorld\'를 출력하세요.',
    initialCode: 'print(\'Hello\' - \'World\')  # 기호가 틀렸어요!',
    expectedOutputs: ['HelloWorld'],
    hint: '+ 기호를 사용하세요.'
  },
            {
    type: 'quiz_code',
    content: '\'egg\'를 3번 반복해 \'eggeggegg\'를 출력하세요.',
    initialCode: 'print(\'egg\' + 3)  # 곱하기로 바꿔보세요!',
    expectedOutputs: ['eggeggegg'],
    hint: '\'egg\' * 3'
  },
            {
    type: 'quiz_code',
    content: '\'Python\'의 길이(6)를 출력하세요.',
    initialCode: 'print(len(\'Python\'))',
    expectedOutputs: ['6'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'Hi\' + \'There\'의 결과는?',
    options: ["'HiThere'","'Hi There'","에러 발생"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열끼리 더하면 그대로 이어붙습니다(공백 없음).'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['문자열을 반복하려면 ', ' 기호를 사용합니다.'],
    wordBank: ["* (곱하기)","+ (더하기)","% (나머지)"],
    answer: ["* (곱하기)"],
    hint: '곱하기 기호를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '인사말 \'hello\'와 이름 \'egg\'를 공백을 넣어 \'hello egg\'로 출력하세요.',
    initialCode: 'print(\'hello\' + \'egg\')  # 공백이 빠졌어요!',
    expectedOutputs: ['hello egg'],
    hint: '\'hello\' + \' \' + \'egg\''
  },
            {
    type: 'quiz_code',
    content: '빈 문자열의 길이를 출력하세요.',
    initialCode: 'print(len(  ))  # 빈 문자열을 넣어주세요.',
    expectedOutputs: ['0'],
    hint: 'len(\'\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'Na\' * 3 의 결과는?',
    options: ["'NaNaNa'","'Na3'","에러 발생"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열 곱하기는 반복을 의미해요.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '문자열의 길이를 구하는 함수는?',
    options: ["len()","length()","size()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'len()을 사용하세요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['문자열의 길이를 알아내려면 ', ' 함수를 씁니다.'],
    wordBank: ["len()","size()","count()"],
    answer: ["len()"],
    hint: 'len()입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['문자열은 ', ' 로 감싸야 합니다.'],
    wordBank: ["따옴표","괄호","대괄호"],
    answer: ["따옴표"],
    hint: '작은따옴표나 큰따옴표를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '\'-\'를 5번 반복해 구분선을 출력하세요.',
    initialCode: '# \'-----\' 를 만들어보세요.',
    expectedOutputs: ['-----'],
    hint: 'print(\'-\' * 5)'
  },
            {
    type: 'quiz_code',
    content: '단어 \'Python\'과 \'Easy\'를 공백으로 이어붙여 출력하세요.',
    initialCode: 'a = \'Python\'\nb = \'Easy\'\n# 두 문자열을 공백을 넣어 이어붙이세요.',
    expectedOutputs: ['Python Easy'],
    hint: 'print(a + \' \' + b)'
  },
            {
    type: 'quiz_code',
    content: '문자열 \'ha\'를 4번 반복하세요 (\'hahahaha\').',
    initialCode: '# 곱하기를 사용해보세요.',
    expectedOutputs: ['hahahaha'],
    hint: 'print(\'ha\' * 4)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '큰따옴표와 작은따옴표를 섞어 쓰면?',
    options: ["문법 에러가 날 수 있다","항상 잘 동작한다","자동으로 통일된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '여는 따옴표와 닫는 따옴표 종류를 맞춰야 해요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['\'Hi\'와 \'Bye\'를 합치면 ', ' 가 됩니다.'],
    wordBank: ["'HiBye'","'Hi Bye'","'Hi+Bye'"],
    answer: ["'HiBye'"],
    hint: '공백 없이 그대로 이어붙습니다.'
  },
            {
    type: 'quiz_code',
    content: '자신의 이름을 담은 변수 name을 만들고, len(name)을 출력하세요 (예: \'코딩\' → 2).',
    initialCode: 'name = \'코딩\'\n# 길이를 출력하세요.',
    expectedOutputs: ['2'],
    hint: 'print(len(name))'
  },
            {
    type: 'quiz_code',
    content: '스스로 \'축하해요! \'와 \'레벨업!\'을 이어붙여 출력해보세요.',
    initialCode: '# 백지 상태입니다. 스스로 작성해보세요.',
    expectedOutputs: ['축하해요! 레벨업!'],
    hint: 'print(\'축하해요! \' + \'레벨업!\')'
  }
          ]
        ]
      },
      {
        id: 'node_1_5',
        title: '글자 뽑아내기 (인덱싱)',
        guidebook: ["문자열이나 리스트 안의 특정 위치(인덱스)의 값을 뽑아내는 것을 인덱싱이라고 합니다.","파이썬은 첫 번째 요소를 1이 아니라 0번부터 셉니다.","💡 자주 틀리는 유형: 길이를 벗어난 번호 호출 (예: 5글자 단어에서 [10] 찾기)","🚀 해결 팁: 뒤에서부터 찾을 때는 음수 인덱스(-1이 맨 끝)를 활용하면 편합니다."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'Python\'[0]의 결과는?',
    options: ["'P'","'n'","'y'"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 0번부터 셉니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['파이썬은 첫 글자를 ', ' 번으로 셉니다.'],
    wordBank: ["0","1","-1"],
    answer: ["0"],
    hint: '0부터 시작합니다.'
  },
            {
    type: 'quiz_code',
    content: '\'Coding\'의 첫 글자를 출력하세요.',
    initialCode: 'word = \'Coding\'\nprint(word[1])  # 인덱스를 고치세요!',
    expectedOutputs: ['C'],
    hint: 'word[0]'
  },
            {
    type: 'quiz_code',
    content: '\'Coding\'의 마지막 글자를 출력하세요.',
    initialCode: 'word = \'Coding\'\nprint(word[0])  # 마지막 글자가 아니에요!',
    expectedOutputs: ['g'],
    hint: 'word[-1]'
  },
            {
    type: 'quiz_code',
    content: '\'Coding\'에서 \'din\' 부분만 슬라이싱해 출력하세요.',
    initialCode: 'word = \'Coding\'\nprint(word[2:5])',
    expectedOutputs: ['din'],
    hint: '이미 정답에 가깝습니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'Python\'[-1]의 결과는?',
    options: ["'n'","'P'","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '음수 인덱스는 뒤에서부터 셉니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['맨 뒤 글자를 가져오려면 인덱스 ', ' 를 씁니다.'],
    wordBank: ["-1","0","last"],
    answer: ["-1"],
    hint: '음수 인덱스를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '\'Egg\'의 두 번째 글자(인덱스 1)를 출력하세요.',
    initialCode: 'word = \'Egg\'\nprint(word[  ])  # 알맞은 인덱스를 넣으세요.',
    expectedOutputs: ['g'],
    hint: 'word[1]'
  },
            {
    type: 'quiz_code',
    content: '\'Python\'에서 뒤에서 두 번째 글자를 출력하세요.',
    initialCode: 'word = \'Python\'\n# 음수 인덱스를 사용해보세요.',
    expectedOutputs: ['o'],
    hint: 'word[-2]'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'Python\'[1:4]의 결과는?',
    options: ["'yth'","'ytho'","'Pyth'"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '슬라이싱은 끝 번호를 포함하지 않아요.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '\'Hello\'의 인덱스 4번 글자는?',
    options: ["'o'","'l'","'H'"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'H-e-l-l-o, 인덱스는 0부터.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['슬라이싱 [1:3]은 인덱스 ', ' 를 포함합니다.'],
    wordBank: ["1과 2","1,2,3","0,1,2"],
    answer: ["1과 2"],
    hint: '끝 번호는 포함되지 않아요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['범위를 벗어난 인덱스를 부르면 ', ' 가 발생합니다.'],
    wordBank: ["IndexError","0 출력","무시하고 진행"],
    answer: ["IndexError"],
    hint: '에러가 납니다.'
  },
            {
    type: 'quiz_code',
    content: '\'HelloWorld\'에서 앞 5글자만 잘라 출력하세요.',
    initialCode: 'word = \'HelloWorld\'\n# 슬라이싱으로 앞 5글자만 가져오세요.',
    expectedOutputs: ['Hello'],
    hint: 'word[:5] 또는 word[0:5]'
  },
            {
    type: 'quiz_code',
    content: '\'HelloWorld\'에서 뒤 5글자만 잘라 출력하세요.',
    initialCode: 'word = \'HelloWorld\'\n# 슬라이싱으로 뒤 5글자만 가져오세요.',
    expectedOutputs: ['World'],
    hint: 'word[5:]'
  },
            {
    type: 'quiz_code',
    content: '\'banana\'에서 처음 등장하는 \'a\'의 인덱스(1)를 출력하세요.',
    initialCode: 'word = \'banana\'\nprint(word.index(\'a\'))',
    expectedOutputs: ['1'],
    hint: 'index() 메서드가 위치를 찾아줍니다.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '존재하지 않는 인덱스를 부르면?',
    options: ["IndexError 발생","0이 출력된다","빈 문자열이 출력된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '범위를 벗어나면 에러가 납니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['인덱싱은 대괄호 ', ' 를 사용합니다.'],
    wordBank: ["[]","()","{}"],
    answer: ["[]"],
    hint: '대괄호를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 word=\'egg\'를 만들고 첫 글자를 출력해보세요.',
    initialCode: 'word = \'egg\'\n# 첫 글자를 출력하세요.',
    expectedOutputs: ['e'],
    hint: 'print(word[0])'
  },
            {
    type: 'quiz_code',
    content: '스스로 \'Duolingo\'에서 \'lin\' 부분만 슬라이싱해 출력해보세요.',
    initialCode: '# 백지 상태입니다. 슬라이싱을 활용하세요.',
    expectedOutputs: ['lin'],
    hint: 'word = \'Duolingo\'\nprint(word[3:6])'
  }
          ]
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'UNIT 2\n조건의 마법',
    nodes: [
      {
        id: 'node_2_1',
        title: '참과 거짓 (Boolean)',
        guidebook: ["참과 거짓을 나타내는 자료형으로 True와 False가 있습니다.","반드시 첫 글자를 대문자로 써야 파이썬이 인식합니다.","💡 자주 틀리는 유형: true (소문자) 또는 'True' (문자열로 착각)","🚀 해결 팁: 비교 연산자(==, !=, >, <)의 결과는 항상 불리언 값임을 기억하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '3 > 5 의 결과는?',
    options: ["False","True","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '3은 5보다 크지 않아요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['참을 나타내는 값은 ', ' 입니다.'],
    wordBank: ["True","true","1"],
    answer: ["True"],
    hint: '첫 글자가 대문자입니다.'
  },
            {
    type: 'quiz_code',
    content: '10이 5보다 큰지(True) 출력하세요.',
    initialCode: 'print(10 > 5 )  # 괄호를 정확히 닫아주세요',
    expectedOutputs: ['True'],
    hint: 'print(10 > 5)'
  },
            {
    type: 'quiz_code',
    content: '3과 3이 같은지(True) 출력하세요.',
    initialCode: 'print(3 = 3)  # 비교 기호를 고치세요!',
    expectedOutputs: ['True'],
    hint: '3 == 3'
  },
            {
    type: 'quiz_code',
    content: '7이 10과 다른지(True) 출력하세요.',
    initialCode: 'print(7  10)  # 기호가 빠졌어요!',
    expectedOutputs: ['True'],
    hint: '7 != 10'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '5 == 5 의 결과는?',
    options: ["True","False","5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '==는 값이 같은지 비교합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['두 값이 같은지 비교할 땐 ', ' 를 씁니다.'],
    wordBank: ["== (등호 두 번)","= (등호 한 번)","!= (다르다)"],
    answer: ["== (등호 두 번)"],
    hint: '등호를 두 번 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '나이 20이 성인 기준 19 이상인지(True) 출력하세요.',
    initialCode: 'age = 20\nprint(age   19)  # 비교 기호를 넣으세요.',
    expectedOutputs: ['True'],
    hint: 'age >= 19'
  },
            {
    type: 'quiz_code',
    content: '점수 40이 합격 기준 60 이상인지(False) 출력하세요.',
    initialCode: 'score = 40\n# 비교식을 작성하세요.',
    expectedOutputs: ['False'],
    hint: 'print(score >= 60)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '5 != 3 의 결과는?',
    options: ["True","False","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '!=는 다르다는 뜻입니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '파이썬에서 참을 나타내는 값은?',
    options: ["True","true","TRUE"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '첫 글자만 대문자입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['두 값이 다른지 비교할 땐 ', ' 를 씁니다.'],
    wordBank: ["!=","==","<>"],
    answer: ["!="],
    hint: '느낌표와 등호를 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['비교 연산의 결과는 항상 ', ' 값입니다.'],
    wordBank: ["True 또는 False","숫자","문자열"],
    answer: ["True 또는 False"],
    hint: '불리언 값이 나옵니다.'
  },
            {
    type: 'quiz_code',
    content: '5가 10보다 작은지(True) 출력하세요.',
    initialCode: '# < 기호를 사용해보세요.',
    expectedOutputs: ['True'],
    hint: 'print(5 < 10)'
  },
            {
    type: 'quiz_code',
    content: '변수 hp=0이 0과 같은지(True) 출력하세요.',
    initialCode: 'hp = 0\n# hp가 0인지 비교하세요.',
    expectedOutputs: ['True'],
    hint: 'print(hp == 0)'
  },
            {
    type: 'quiz_code',
    content: '문자열 \'a\'와 \'b\'가 같은지(False) 출력하세요.',
    initialCode: 'print(\'a\'  \'b\')  # 비교 기호가 빠졌어요.',
    expectedOutputs: ['False'],
    hint: '\'a\' == \'b\''
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '10 >= 10 의 결과는?',
    options: ["True","False","10"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '>=는 크거나 같다는 뜻입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['크거나 같다는 ', ' 로 표현합니다.'],
    wordBank: [">=","=>","> ="],
    answer: [">="],
    hint: '부등호 뒤에 등호를 붙입니다.'
  },
            {
    type: 'quiz_code',
    content: '레벨 5가 10보다 크거나 같은지(False) 출력하세요.',
    initialCode: 'level = 5\n# 비교식을 작성하세요.',
    expectedOutputs: ['False'],
    hint: 'print(level >= 10)'
  },
            {
    type: 'quiz_code',
    content: '스스로 100이 50보다 큰지 비교해서 출력해보세요.',
    initialCode: '# 백지 상태입니다. 스스로 작성해보세요.',
    expectedOutputs: ['True'],
    hint: 'print(100 > 50)'
  }
          ]
        ]
      },
      {
        id: 'node_2_2',
        title: '만약에... (if문)',
        guidebook: ["if문은 조건이 참일 때만 그 아래의 코드를 실행합니다.","조건식 맨 끝에는 반드시 콜론(:)을 붙여야 합니다.","💡 자주 틀리는 유형: 조건문 아래에 들여쓰기(Space 4번)를 하지 않음","🚀 해결 팁: 파이썬은 들여쓰기로 블록을 구분하므로 IndentationError가 나면 줄맞춤을 확인하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '만약(if) 조건문 끝에 반드시 붙여야 하는 기호는?',
    options: [": (콜론)","; (세미콜론)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '블록을 시작할 때 콜론을 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['조건이 참일 때 실행하려면 ', ' 를 씁니다.'],
    wordBank: ["if","when","for"],
    answer: ["if"],
    hint: '만약~ 이라는 뜻입니다.'
  },
            {
    type: 'quiz_code',
    content: '체력이 0이 되면 \'게임오버\'를 출력합니다.',
    initialCode: 'hp = 0\nif hp == 0\n    print(\'게임오버\')  # 콜론이 빠졌어요!',
    expectedOutputs: ['게임오버'],
    hint: '조건문 끝에 콜론(:)을 붙이세요.'
  },
            {
    type: 'quiz_code',
    content: '점수가 80보다 크면 \'합격\'을 출력합니다.',
    initialCode: 'score = 90\nif score > 80:\nprint(\'합격\')  # 들여쓰기를 수정하세요!',
    expectedOutputs: ['합격'],
    hint: 'print 앞에 스페이스 4칸을 띄우세요.'
  },
            {
    type: 'quiz_code',
    content: '비밀번호가 1234이면 \'문열림\'을 출력하세요.',
    initialCode: 'pw = 1234\nif pw == 1234:\n    # 여기에 코드를 작성하세요.',
    expectedOutputs: ['문열림'],
    hint: '들여쓰기 후 print(\'문열림\')을 작성하세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'if문 아래의 코드가 실행되려면 어떤 규칙을 지켜야 할까요?',
    options: ["반드시 들여쓰기를 해야 한다","반드시 중괄호{}를 써야 한다","반드시 빈 줄을 넣어야 한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 들여쓰기로 묶음을 구분합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['조건문 끝에는 반드시 ', ' 기호가 들어갑니다.'],
    wordBank: [":",";","="],
    answer: [":"],
    hint: '콜론을 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '동전이 10개 이상이면 \'부자\'를 출력하세요 (현재 동전: 15).',
    initialCode: 'coin = 15\n# 조건문과 출력문을 모두 직접 짜보세요.',
    expectedOutputs: ['부자'],
    hint: 'if coin >= 10:\n    print(\'부자\')'
  },
            {
    type: 'quiz_code',
    content: '문자열 비교: 아이템이 \'검\'이면 \'공격\'을 출력하세요.',
    initialCode: 'item = \'검\'\n# 조건문을 직접 완성하세요.',
    expectedOutputs: ['공격'],
    hint: 'if item == \'검\':\n    print(\'공격\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '파이썬에서 기본적으로 권장하는 들여쓰기 간격은?',
    options: ["스페이스 4칸","스페이스 2칸","탭 2번"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '가장 널리 쓰이는 표준 띄어쓰기 횟수입니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'if 조건이 거짓(False)이면 아래 들여쓰기된 코드는 어떻게 되나요?',
    options: ["실행되지 않고 무시된다","무조건 1번은 실행된다","에러가 발생한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '참일 때만 실행되는 것이 if문의 특징입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['조건문 아래 실행할 코드는 ', ' 를 해야 합니다.'],
    wordBank: ["들여쓰기","볼드처리","밑줄"],
    answer: ["들여쓰기"],
    hint: '스페이스바 4칸 띄우기입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['if 조건이 ', ' 일 때만 코드가 작동합니다.'],
    wordBank: ["True","False","None"],
    answer: ["True"],
    hint: '참이어야 작동해요.'
  },
            {
    type: 'quiz_code',
    content: 'a가 5일 때, a가 3보다 크면 \'크다\'를 출력하세요.',
    initialCode: 'a = 5\n# if문을 작성하세요.',
    expectedOutputs: ['크다'],
    hint: 'if a > 3:\n    print(\'크다\')'
  },
            {
    type: 'quiz_code',
    content: '날씨가 \'비\'이면 \'우산\'을 출력하는 코드를 짜보세요.',
    initialCode: 'weather = \'비\'\n# 비가 올 때의 로직을 작성하세요.',
    expectedOutputs: ['우산'],
    hint: 'if weather == \'비\':\n    print(\'우산\')'
  },
            {
    type: 'quiz_code',
    content: '나이가 20 이상이면 \'성인\'을 출력하세요.',
    initialCode: 'age = 25\n# if문을 스스로 짜보세요.',
    expectedOutputs: ['성인'],
    hint: 'if age >= 20:\n    print(\'성인\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '다음 중 조건문의 구조로 올바른 것은?',
    options: ["if 조건:","if 조건","조건 if:"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '키워드, 조건, 콜론 순서입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['들여쓰기를 어기면 ', ' 가 발생합니다.'],
    wordBank: ["에러","경고문","그대로실행"],
    answer: ["에러"],
    hint: '문법 오류가 납니다.'
  },
            {
    type: 'quiz_code',
    content: '레벨이 99가 되면 \'만렙\'을 출력하세요.',
    initialCode: 'level = 99\n# 조건문을 써보세요.',
    expectedOutputs: ['만렙'],
    hint: 'if level == 99:\n    print(\'만렙\')'
  },
            {
    type: 'quiz_code',
    content: '비밀번호가 \'tiger\'이면 \'로그인\'을 출력하세요. 스스로 모든 코드를 완성하세요.',
    initialCode: '# 비번은 \'tiger\'로 변수에 넣고 검사하세요.',
    expectedOutputs: ['로그인'],
    hint: 'pw = \'tiger\'\nif pw == \'tiger\':\n    print(\'로그인\')'
  }
          ]
        ]
      },
      {
        id: 'node_2_3',
        title: '그렇지 않으면 (else)',
        guidebook: ["else는 if 조건이 거짓일 때 실행되는 대안 블록입니다.","else 뒤에는 조건을 쓰지 않고, 끝에 콜론(:)만 붙입니다.","💡 자주 틀리는 유형: else 뒤에 조건을 적거나, if 없이 else만 사용","🚀 해결 팁: else는 반드시 if(또는 elif)와 짝을 이루어야 합니다."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'else 뒤에는 무엇을 적나요?',
    options: ["아무것도 적지 않는다","조건을 적는다","숫자를 적는다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'else는 조건 없이 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['else는 ', ' 일 때 실행됩니다.'],
    wordBank: ["if 조건이 거짓","if 조건이 참","항상"],
    answer: ["if 조건이 거짓"],
    hint: '거짓일 때의 대안입니다.'
  },
            {
    type: 'quiz_code',
    content: '점수가 60 미만이면 \'재시험\', 아니면 \'합격\'을 출력하세요 (점수:50).',
    initialCode: 'score = 50\nif score >= 60:\n    print(\'합격\')\nelse\n    print(\'재시험\')  # 콜론이 빠졌어요!',
    expectedOutputs: ['재시험'],
    hint: 'else: 로 고치세요.'
  },
            {
    type: 'quiz_code',
    content: '비밀번호가 맞으면 \'입장\', 틀리면 \'거부\'를 출력하세요 (pw=\'1234\', 실제=\'0000\').',
    initialCode: 'pw = \'1234\'\nif pw == \'0000\':\n    print(\'입장\')\nelse:\n print(\'거부\')  # 들여쓰기를 4칸으로 맞추세요.',
    expectedOutputs: ['거부'],
    hint: 'print 앞에 스페이스 4칸.'
  },
            {
    type: 'quiz_code',
    content: '체력이 0보다 크면 \'생존\', 아니면 \'사망\'을 출력하세요 (hp=0).',
    initialCode: 'hp = 0\nif hp > 0:\n    print(\'생존\')\nelse:\n    print(\'사망\')',
    expectedOutputs: ['사망'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'if 조건이 거짓일 때 실행되는 블록은?',
    options: ["else","elif","then"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '거짓일 때의 대안입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['else 뒤에는 ', ' 을 적지 않습니다.'],
    wordBank: ["조건","콜론","코드"],
    answer: ["조건"],
    hint: '조건 없이 바로 콜론을 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '나이가 20 이상이면 \'성인\', 아니면 \'미성년자\'를 출력하세요 (age=15).',
    initialCode: 'age = 15\nif age >= 20:\n    print(\'성인\')\n# else 블록을 완성하세요.',
    expectedOutputs: ['미성년자'],
    hint: 'else:\n    print(\'미성년자\')'
  },
            {
    type: 'quiz_code',
    content: '동전이 100개 이상이면 \'부자\', 아니면 \'평범\'을 출력하세요 (coin=30).',
    initialCode: 'coin = 30\n# if-else 블록을 스스로 작성하세요.',
    expectedOutputs: ['평범'],
    hint: 'if coin >= 100:\n    print(\'부자\')\nelse:\n    print(\'평범\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'else만 단독으로 쓸 수 있나요?',
    options: ["아니요, if가 있어야 한다","네, 단독으로 가능하다","조건에 따라 다르다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'else는 반드시 if와 짝을 이룹니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'else 블록의 들여쓰기는 어떻게 맞춰야 하나요?',
    options: ["if와 동일하게","if보다 한 칸 더","필요 없음"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '같은 레벨로 맞춰야 합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['else는 반드시 ', ' 와 함께 사용합니다.'],
    wordBank: ["if","elif","while"],
    answer: ["if"],
    hint: 'if의 짝꿍입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['else 블록도 끝에 ', ' 이 필요합니다.'],
    wordBank: [": (콜론)","; (세미콜론)",". (마침표)"],
    answer: [": (콜론)"],
    hint: '콜론을 잊지 마세요.'
  },
            {
    type: 'quiz_code',
    content: '짝수면 \'짝수\', 홀수면 \'홀수\'를 출력하세요 (n=7).',
    initialCode: 'n = 7\nif n % 2 == 0:\n    print(\'짝수\')\nelse:\n    print(\'홀수\')',
    expectedOutputs: ['홀수'],
    hint: 'n % 2 == 0 이 아니면 홀수입니다.'
  },
            {
    type: 'quiz_code',
    content: '아이템이 \'물약\'이면 \'회복\', 아니면 \'변화 없음\'을 출력하세요 (item=\'검\').',
    initialCode: 'item = \'검\'\nif item == \'물약\':\n    print(\'회복\')\nelse:\n    print(\'변화 없음\')',
    expectedOutputs: ['변화 없음'],
    hint: '이미 정답에 가깝습니다.'
  },
            {
    type: 'quiz_code',
    content: '날씨가 \'맑음\'이면 \'외출\', 아니면 \'집콕\'을 출력하세요 (weather=\'비\').',
    initialCode: 'weather = \'비\'\n# 조건문을 완성하세요.',
    expectedOutputs: ['집콕'],
    hint: 'if weather == \'맑음\':\n    print(\'외출\')\nelse:\n    print(\'집콕\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'else 끝에 필요한 기호는?',
    options: [": (콜론)","; (세미콜론)","없음"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '콜론이 꼭 필요합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['else 안의 코드는 ', ' 을 해야 합니다.'],
    wordBank: ["들여쓰기","대문자화","한 줄로 작성"],
    answer: ["들여쓰기"],
    hint: 'if와 같은 규칙입니다.'
  },
            {
    type: 'quiz_code',
    content: '온도가 0 이하이면 \'결빙\', 아니면 \'정상\'을 출력하세요 (temp=-3).',
    initialCode: 'temp = -3\n# if-else를 작성하세요.',
    expectedOutputs: ['결빙'],
    hint: 'if temp <= 0:\n    print(\'결빙\')\nelse:\n    print(\'정상\')'
  },
            {
    type: 'quiz_code',
    content: '스스로 재고(stock=0)가 0이면 \'품절\', 아니면 \'재고있음\'을 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['품절'],
    hint: 'stock = 0\nif stock == 0:\n    print(\'품절\')\nelse:\n    print(\'재고있음\')'
  }
          ]
        ]
      },
      {
        id: 'node_2_4',
        title: '여러 개의 조건 (elif)',
        guidebook: ["elif는 else if의 줄임말로, 여러 조건을 순서대로 검사합니다.","if와 else 사이에 원하는 만큼 여러 번 쓸 수 있습니다.","💡 자주 틀리는 유형: elif 앞뒤 순서를 안 지키거나 콜론을 빼먹음","🚀 해결 팁: 위에서부터 조건을 검사하다 처음 참인 곳에서 멈춘다는 걸 기억하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'elif는 어디에 위치하나요?',
    options: ["if와 else 사이","else 다음","if 이전"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건이 여러 개일 때 중간에 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['elif는 ', ' 를 줄인 표현입니다.'],
    wordBank: ["else if","end if","extra if"],
    answer: ["else if"],
    hint: 'else와 if를 합쳤어요.'
  },
            {
    type: 'quiz_code',
    content: '점수(85)에 따라 90이상 \'A\', 80이상 \'B\', 그 외 \'C\'를 출력하세요.',
    initialCode: 'score = 85\nif score >= 90:\n    print(\'A\')\nelif score >= 80\n    print(\'B\')\nelse:\n    print(\'C\')  # 콜론이 빠졌어요!',
    expectedOutputs: ['B'],
    hint: 'elif score >= 80: 로 고치세요.'
  },
            {
    type: 'quiz_code',
    content: '신호등 색이 \'빨강\'이면 \'정지\', \'노랑\'이면 \'주의\', 그 외 \'주행\'을 출력하세요 (color=\'노랑\').',
    initialCode: 'color = \'노랑\'\nif color == \'빨강\':\n    print(\'정지\')\nelf color == \'노랑\':\n    print(\'주의\')\nelse:\n    print(\'주행\')  # elif 오타를 고치세요!',
    expectedOutputs: ['주의'],
    hint: 'elf -> elif'
  },
            {
    type: 'quiz_code',
    content: '온도(temp=25)가 30이상 \'더움\', 10이상 \'적당\', 그 외 \'추움\'을 출력하세요.',
    initialCode: 'temp = 25\nif temp >= 30:\n    print(\'더움\')\nelif temp >= 10:\n    print(\'적당\')\nelse:\n    print(\'추움\')',
    expectedOutputs: ['적당'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'elif를 여러 번 쓸 수 있나요?',
    options: ["네, 여러 번 가능","아니요, 한 번만","최대 2번까지"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건이 많으면 여러 번 써도 됩니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['조건이 여러 개일 땐 ', ' 를 여러 번 쓸 수 있습니다.'],
    wordBank: ["elif","else","if"],
    answer: ["elif"],
    hint: 'elif는 반복해서 쓸 수 있어요.'
  },
            {
    type: 'quiz_code',
    content: '학점(grade=\'B\')이 A,B,C 중 하나면 각각 4,3,2를 출력하세요 (B인 경우).',
    initialCode: 'grade = \'B\'\nif grade == \'A\':\n    print(4)\n# elif와 else를 완성하세요.',
    expectedOutputs: ['3'],
    hint: 'elif grade == \'B\':\n    print(3)\nelse:\n    print(2)'
  },
            {
    type: 'quiz_code',
    content: '요일 번호(day=6)가 1~5면 \'평일\', 6이면 \'토요일\', 7이면 \'일요일\'을 출력하세요.',
    initialCode: 'day = 6\n# if-elif-elif-else 구조를 작성하세요.',
    expectedOutputs: ['토요일'],
    hint: 'if day <= 5:\n    print(\'평일\')\nelif day == 6:\n    print(\'토요일\')\nelse:\n    print(\'일요일\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'if-elif-else 중 실행되는 블록은?',
    options: ["처음으로 참인 조건 하나","모든 참인 조건 전부","마지막 조건만"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '위에서부터 순서대로 검사하다 처음 참인 곳에서 멈춥니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'elif 끝에 필요한 기호는?',
    options: [": (콜론)","; (세미콜론)","없음"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'if, elif, else 모두 콜론이 필요합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['if-elif-else는 위에서부터 ', ' 조건을 찾습니다.'],
    wordBank: ["처음으로 참인","마지막으로 참인","모든 거짓"],
    answer: ["처음으로 참인"],
    hint: '순서대로 검사합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['elif 끝에도 ', ' 이 필요합니다.'],
    wordBank: [": (콜론)","; (세미콜론)","없음"],
    answer: [": (콜론)"],
    hint: '콜론을 잊지 마세요.'
  },
            {
    type: 'quiz_code',
    content: '나이(age=8)가 13이상 \'청소년\', 7이상 \'어린이\', 그 외 \'유아\'를 출력하세요.',
    initialCode: 'age = 8\nif age >= 13:\n    print(\'청소년\')\nelif age >= 7:\n    print(\'어린이\')\nelse:\n    print(\'유아\')',
    expectedOutputs: ['어린이'],
    hint: '이미 정답에 가깝습니다.'
  },
            {
    type: 'quiz_code',
    content: '체력(hp=50)이 80이상 \'건강\', 30이상 \'주의\', 그 외 \'위험\'을 출력하세요.',
    initialCode: 'hp = 50\n# 조건문을 완성하세요.',
    expectedOutputs: ['주의'],
    hint: 'if hp >= 80:\n    print(\'건강\')\nelif hp >= 30:\n    print(\'주의\')\nelse:\n    print(\'위험\')'
  },
            {
    type: 'quiz_code',
    content: '메뉴 번호(menu=2)가 1이면 \'피자\', 2면 \'치킨\', 그 외 \'메뉴없음\'을 출력하세요.',
    initialCode: 'menu = 2\n# if-elif-else를 스스로 작성하세요.',
    expectedOutputs: ['치킨'],
    hint: 'if menu == 1:\n    print(\'피자\')\nelif menu == 2:\n    print(\'치킨\')\nelse:\n    print(\'메뉴없음\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'elif는 무슨 단어의 줄임말인가요?',
    options: ["else if","element if","extra if"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'else와 if를 합친 표현입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['elif는 반드시 ', ' 사이에 위치합니다.'],
    wordBank: ["if와 else","else와 if","for와 while"],
    answer: ["if와 else"],
    hint: 'if 다음, else 이전입니다.'
  },
            {
    type: 'quiz_code',
    content: 'BMI(bmi=17)가 18.5미만 \'저체중\', 25미만 \'정상\', 그 외 \'과체중\'을 출력하세요.',
    initialCode: 'bmi = 17\n# 조건문을 작성하세요.',
    expectedOutputs: ['저체중'],
    hint: 'if bmi < 18.5:\n    print(\'저체중\')\nelif bmi < 25:\n    print(\'정상\')\nelse:\n    print(\'과체중\')'
  },
            {
    type: 'quiz_code',
    content: '스스로 시험 점수(75)에 따라 90이상 \'A\', 70이상 \'B\', 그 외 \'C\'를 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['B'],
    hint: 'score = 75\nif score >= 90:\n    print(\'A\')\nelif score >= 70:\n    print(\'B\')\nelse:\n    print(\'C\')'
  }
          ]
        ]
      },
      {
        id: 'node_2_5',
        title: '조건문 마스터 보스전',
        guidebook: ["and, or, not을 조합하면 복잡한 조건도 표현할 수 있습니다.","if 안에 또 다른 if를 넣는 중첩 조건문도 가능합니다.","💡 자주 틀리는 유형: and와 or을 헷갈려 잘못된 조건을 만듦","🚀 해결 팁: '모두 만족'이면 and, '하나라도 만족'이면 or을 사용하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'and 연산자는 두 조건이 어떨 때 참인가요?',
    options: ["둘 다 참일 때","하나만 참이어도","항상 참"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '모두 만족해야 참입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['두 조건이 모두 참이어야 할 땐 ', ' 를 씁니다.'],
    wordBank: ["and","or","not"],
    answer: ["and"],
    hint: '모두 만족해야 참입니다.'
  },
            {
    type: 'quiz_code',
    content: '나이가 18 이상 \'이면서\' 티켓이 있어야 입장 가능합니다. (나이:15, 티켓 있음) 조건에 맞게 고쳐 \'입장불가\'를 출력하세요.',
    initialCode: 'age = 15\nhas_ticket = True\nif age >= 18 or has_ticket:\n    print(\'입장가능\')\nelse:\n    print(\'입장불가\')  # or을 and로 바꿔야 정확한 조건이 됩니다!',
    expectedOutputs: ['입장불가'],
    hint: 'or을 and로 바꾸면, 나이 조건이 거짓이라 else가 실행됩니다.'
  },
            {
    type: 'quiz_code',
    content: '체력(30)이 50 미만\'이거나\' 마나(25)가 20 미만이면 \'위험\'을 출력하세요.',
    initialCode: 'hp = 30\nmp = 25\nif hp < 50 and mp < 20:\n    print(\'위험\')  # and를 or로 고쳐야 \'이거나\' 조건이 정확해집니다!',
    expectedOutputs: ['위험'],
    hint: 'and를 or로 바꾸세요.'
  },
            {
    type: 'quiz_code',
    content: '3 > 1의 결과를 not으로 뒤집어 출력하세요 (False가 나와야 함).',
    initialCode: 'print(3 > 1)  # not을 붙여 뒤집어보세요!',
    expectedOutputs: ['False'],
    hint: 'print(not (3 > 1))'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'or 연산자는 두 조건 중 어떨 때 참인가요?',
    options: ["하나라도 참이면","둘 다 참이어야만","항상 거짓"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '하나만 참이어도 충분합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['둘 중 하나만 참이어도 될 땐 ', ' 를 씁니다.'],
    wordBank: ["or","and","xor"],
    answer: ["or"],
    hint: '하나만 참이어도 충분해요.'
  },
            {
    type: 'quiz_code',
    content: '점수(150)가 80~100 사이인지 (범위 밖이므로 False) 출력하세요.',
    initialCode: 'score = 150\nprint(score >= 80 or score <= 100)  # or을 and로 고쳐야 정확한 \'사이\' 조건이 됩니다!',
    expectedOutputs: ['False'],
    hint: 'and로 바꾸면 두 조건 모두 만족해야 True가 됩니다.'
  },
            {
    type: 'quiz_code',
    content: '체력(0)이 0 이하이면서 게임오버 상태(True)이면 \'리스폰\'을 출력하는 중첩 조건문을 작성하세요.',
    initialCode: 'hp = 0\nis_gameover = True\nif hp <= 0:\n    if is_gameover:\n        print(\'리스폰\')',
    expectedOutputs: ['리스폰'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'not True 의 결과는?',
    options: ["False","True","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'not은 참/거짓을 뒤집습니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'if 안에 if를 넣는 것을 무엇이라 하나요?',
    options: ["중첩 조건문","반복 조건문","이중 반복문"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건문 안의 조건문입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['조건을 뒤집을 땐 ', ' 를 씁니다.'],
    wordBank: ["not","reverse","flip"],
    answer: ["not"],
    hint: 'not이 참/거짓을 뒤집습니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['if 안에 또 if를 쓰는 것을 ', ' 이라 합니다.'],
    wordBank: ["중첩 조건문","반복문","함수"],
    answer: ["중첩 조건문"],
    hint: '조건문 안의 조건문입니다.'
  },
            {
    type: 'quiz_code',
    content: '레벨(10)이 10 이상이면서 클래스가 \'전사\'이면 \'필살기 해금\'을 출력하세요.',
    initialCode: 'level = 10\njob = \'전사\'\n# and를 사용한 조건문을 작성하세요.',
    expectedOutputs: ['필살기 해금'],
    hint: 'if level >= 10 and job == \'전사\':\n    print(\'필살기 해금\')'
  },
            {
    type: 'quiz_code',
    content: '동전(gold=5)이 10 미만이거나 아이템이 없으면(has_item=False) \'경고\'를 출력하세요.',
    initialCode: 'gold = 5\nhas_item = False\n# or을 사용한 조건문을 작성하세요.',
    expectedOutputs: ['경고'],
    hint: 'if gold < 10 or not has_item:\n    print(\'경고\')'
  },
            {
    type: 'quiz_code',
    content: 'is_raining=True 일 때, not을 이용해 비가 안 올 때만 외출하는 조건문을 작성하세요.',
    initialCode: 'is_raining = True\nif not is_raining:\n    print(\'외출\')\nelse:\n    print(\'우산 필요\')',
    expectedOutputs: ['우산 필요'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '5 > 3 and 2 > 4 의 결과는?',
    options: ["False","True","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'and는 둘 다 참이어야 True입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['조건문은 프로그램의 ', ' 을 결정합니다.'],
    wordBank: ["흐름","속도","이름"],
    answer: ["흐름"],
    hint: '어떤 코드가 실행될지 정합니다.'
  },
            {
    type: 'quiz_code',
    content: '문이 잠금 해제(True)되고 열쇠(True)가 있어야 \'보물 발견\'이 뜨는 중첩 조건문을 작성하세요.',
    initialCode: 'door_unlocked = True\nhas_key = True\n# 중첩 if문을 작성하세요.',
    expectedOutputs: ['보물 발견'],
    hint: 'if door_unlocked:\n    if has_key:\n        print(\'보물 발견\')'
  },
            {
    type: 'quiz_code',
    content: '스스로 나이(25)가 20 이상이면서 회원(True)이면 \'할인적용\'을 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['할인적용'],
    hint: 'age = 25\nis_member = True\nif age >= 20 and is_member:\n    print(\'할인적용\')'
  }
          ]
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'UNIT 3\n무한 반복의 굴레',
    nodes: [
      {
        id: 'node_3_1',
        title: '조건부 반복 (while)',
        guidebook: ["while문은 조건이 참인 동안 코드를 무한히 반복합니다.","반복문 안에서 언젠가는 조건이 거짓이 되도록 값을 변경해줘야 합니다.","💡 자주 틀리는 유형: 반복 종료 조건을 안 써서 무한 루프에 빠짐","🚀 해결 팁: i = i + 1 처럼 변수 값을 업데이트하는 코드가 들어있는지 꼭 확인하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'while문은 조건이 어떨 때 반복하나요?',
    options: ["참인 동안","거짓인 동안","항상 1번만"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건이 참인 동안 계속 돕니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['while문은 조건이 ', ' 동안 반복합니다.'],
    wordBank: ["참인","거짓인","항상"],
    answer: ["참인"],
    hint: '참인 동안 계속 돕니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 3까지 출력하는 while문을 완성하세요.',
    initialCode: 'i = 1\nwhile i <= 3\n    print(i)\n    i += 1  # 콜론이 빠졌어요!',
    expectedOutputs: ['1\n2\n3'],
    hint: 'while i <= 3: 으로 고치세요.'
  },
            {
    type: 'quiz_code',
    content: 'i가 0이 될 때까지 카운트다운하세요 (3,2,1).',
    initialCode: 'i = 3\nwhile i > 0:\n    print(i)\n    # i를 줄이는 코드가 빠졌어요!',
    expectedOutputs: ['3\n2\n1'],
    hint: 'i -= 1을 추가하세요.'
  },
            {
    type: 'quiz_code',
    content: '1부터 5까지 출력하세요.',
    initialCode: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1',
    expectedOutputs: ['1\n2\n3\n4\n5'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '무한 루프를 만드는 대표적인 실수는?',
    options: ["종료 조건을 안 만드는 것","콜론을 빼먹는 것","print를 안 쓰는 것"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건이 절대 거짓이 안 되면 영원히 돕니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['조건이 영원히 참이면 ', ' 에 빠집니다.'],
    wordBank: ["무한 루프","에러","블록"],
    answer: ["무한 루프"],
    hint: '끝나지 않는 반복입니다.'
  },
            {
    type: 'quiz_code',
    content: '체력(hp=3)이 0이 될 때까지 \'공격!\'을 출력하며 1씩 깎으세요.',
    initialCode: 'hp = 3\nwhile hp > 0:\n    print(\'공격!\')\n    hp = hp   1  # 연산자가 빠졌어요!',
    expectedOutputs: ['공격!\n공격!\n공격!'],
    hint: 'hp = hp - 1'
  },
            {
    type: 'quiz_code',
    content: '2부터 10까지 2씩 증가하며 출력하세요.',
    initialCode: 'i = 2\nwhile i <= 10:\n    print(i)\n    i += 2',
    expectedOutputs: ['2\n4\n6\n8\n10'],
    hint: '이미 정답에 가깝습니다.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'while True: 는 어떻게 되나요?',
    options: ["무한 반복된다","한 번만 실행된다","에러가 난다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'True는 항상 참이라 계속 돕니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'while문 안에서 반드시 필요한 것은?',
    options: ["조건을 바꾸는 코드","print문","else문"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '언젠가 조건이 거짓이 되도록 값을 바꿔야 해요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['반복을 멈추려면 내부에서 ', ' 을 바꿔야 합니다.'],
    wordBank: ["조건과 관련된 변수","print문","함수 이름"],
    answer: ["조건과 관련된 변수"],
    hint: '조건이 거짓이 되도록 값을 바꿔야 해요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['while 조건 뒤에는 ', ' 이 필요합니다.'],
    wordBank: [": (콜론)","; (세미콜론)","없음"],
    answer: [": (콜론)"],
    hint: '콜론이 필요합니다.'
  },
            {
    type: 'quiz_code',
    content: '숫자 5부터 1까지 거꾸로 출력하는 while문을 작성하세요.',
    initialCode: '# i=5부터 시작해 1이 될 때까지 반복하세요.',
    expectedOutputs: ['5\n4\n3\n2\n1'],
    hint: 'i = 5\nwhile i >= 1:\n    print(i)\n    i -= 1'
  },
            {
    type: 'quiz_code',
    content: '1부터 3까지 더한 값을 while문으로 계산해 출력하세요 (결과:6).',
    initialCode: 'i = 1\ntotal = 0\n# while문으로 1,2,3을 total에 더하세요.',
    expectedOutputs: ['6'],
    hint: 'while i <= 3:\n    total += i\n    i += 1\nprint(total)'
  },
            {
    type: 'quiz_code',
    content: '레벨(level=1)이 3이 될 때까지 \'레벨업!\'을 출력하세요.',
    initialCode: 'level = 1\n# while문을 작성하세요.',
    expectedOutputs: ['레벨업!\n레벨업!\n레벨업!'],
    hint: 'while level <= 3:\n    print(\'레벨업!\')\n    level += 1'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'while 조건: 뒤에는 무엇이 필요한가요?',
    options: [": (콜론)","; (세미콜론)","{}"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '콜론이 필요합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['while문 안의 코드는 ', ' 을 해야 합니다.'],
    wordBank: ["들여쓰기","한 줄로 작성","대문자화"],
    answer: ["들여쓰기"],
    hint: 'if문과 같은 규칙입니다.'
  },
            {
    type: 'quiz_code',
    content: '동전(coin=0)이 5개가 될 때까지 1개씩 모으며 \'동전 획득\'을 출력하세요.',
    initialCode: 'coin = 0\n# while문을 작성하세요.',
    expectedOutputs: ['동전 획득\n동전 획득\n동전 획득\n동전 획득\n동전 획득'],
    hint: 'while coin < 5:\n    print(\'동전 획득\')\n    coin += 1'
  },
            {
    type: 'quiz_code',
    content: '스스로 1부터 4까지 곱한 값(24)을 while문으로 계산해 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['24'],
    hint: 'i = 1\nresult = 1\nwhile i <= 4:\n    result *= i\n    i += 1\nprint(result)'
  }
          ]
        ]
      },
      {
        id: 'node_3_2',
        title: '탈출구와 건너뛰기 (break / continue)',
        guidebook: ["break는 반복문을 즉시 탈출시키는 마법의 명령어입니다.","continue는 이번 반복만 건너뛰고 다음 반복으로 넘어갑니다.","💡 자주 틀리는 유형: break와 continue의 역할을 서로 반대로 착각함","🚀 해결 팁: '완전히 멈춤=break', '한 번만 건너뜀=continue' 로 기억하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'break는 반복문을 어떻게 하나요?',
    options: ["즉시 탈출한다","한 번 건너뛴다","다시 시작한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'break는 완전히 멈춥니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['반복문을 즉시 탈출하려면 ', ' 를 씁니다.'],
    wordBank: ["break","continue","stop"],
    answer: ["break"],
    hint: '완전히 멈추는 명령어입니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 10까지 반복하다 5를 만나면 멈추세요 (1,2,3,4).',
    initialCode: 'for i in range(1, 11):\n    if i == 5:\n        stop  # break로 고치세요!\n    print(i)',
    expectedOutputs: ['1\n2\n3\n4'],
    hint: 'stop -> break'
  },
            {
    type: 'quiz_code',
    content: '1부터 5까지 중 3만 건너뛰고 출력하세요 (1,2,4,5).',
    initialCode: 'for i in range(1, 6):\n    if i == 3:\n        pass  # continue로 고치세요!\n    print(i)',
    expectedOutputs: ['1\n2\n4\n5'],
    hint: 'pass -> continue'
  },
            {
    type: 'quiz_code',
    content: '1부터 5까지 중 짝수만 건너뛰고 출력하세요 (1,3,5).',
    initialCode: 'for i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    print(i)',
    expectedOutputs: ['1\n3\n5'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'continue는 어떤 역할을 하나요?',
    options: ["이번 반복만 건너뛰고 다음으로 간다","반복문을 완전히 멈춘다","아무 역할도 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'continue는 건너뛰기입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['이번 반복만 건너뛰려면 ', ' 를 씁니다.'],
    wordBank: ["continue","break","skip"],
    answer: ["continue"],
    hint: '다음 반복으로 넘어갑니다.'
  },
            {
    type: 'quiz_code',
    content: '98부터 1씩 늘려가다 100이 되면 멈추세요.',
    initialCode: 'i = 98\nwhile True:\n    i += 1\n    print(i)\n    if i == 100:\n        break',
    expectedOutputs: ['99\n100'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4,5]에서 3을 찾으면 \'발견!\'을 출력하고 멈추세요.',
    initialCode: 'nums = [1, 2, 3, 4, 5]\nfor n in nums:\n    if n == 3:\n        print(\'발견!\')\n        # 반복문을 멈추는 코드를 추가하세요.',
    expectedOutputs: ['발견!'],
    hint: 'break를 추가하세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'break와 continue는 어디서 쓰이나요?',
    options: ["반복문 안에서만","함수 안에서만","어디서나"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'for/while 반복문 안에서만 의미가 있습니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'continue 아래의 코드는 어떻게 되나요?',
    options: ["이번 반복에서 무시된다","항상 실행된다","에러가 난다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'continue를 만나면 그 아래는 건너뛰고 다음 반복으로 갑니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['break와 continue는 ', ' 안에서만 사용합니다.'],
    wordBank: ["반복문","함수","조건문"],
    answer: ["반복문"],
    hint: 'for/while 안에서만 의미가 있어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['break를 만나면 반복문을 ', ' 벗어납니다.'],
    wordBank: ["완전히","한 번만","조건부로"],
    answer: ["완전히"],
    hint: '즉시 탈출합니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 20까지 중 5의 배수만 출력하세요.',
    initialCode: '# continue를 사용해 5의 배수가 아니면 건너뛰세요.',
    expectedOutputs: ['5\n10\n15\n20'],
    hint: 'for i in range(1, 21):\n    if i % 5 != 0:\n        continue\n    print(i)'
  },
            {
    type: 'quiz_code',
    content: '1부터 시작해 합이 10을 넘는 순간의 숫자를 출력하세요.',
    initialCode: 'total = 0\ni = 0\nwhile True:\n    i += 1\n    total += i\n    if total > 10:\n        print(i)\n        break',
    expectedOutputs: ['5'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '\'a\',\'b\',\'c\',\'stop\',\'d\' 리스트를 돌다가 \'stop\'을 만나면 멈추세요.',
    initialCode: 'words = [\'a\', \'b\', \'c\', \'stop\', \'d\']\nfor w in words:\n    if w == \'stop\':\n        break\n    print(w)',
    expectedOutputs: ['a\nb\nc'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '주로 break와 함께 쓰이는 문법은?',
    options: ["if문","else문","def문"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '특정 조건에서 멈추려면 if와 짝을 이룹니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['continue 아래의 코드는 이번 반복에서 ', '됩니다.'],
    wordBank: ["무시","실행","저장"],
    answer: ["무시"],
    hint: '건너뛰어집니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 5까지 중 3의 배수는 건너뛰고 나머지를 출력하세요.',
    initialCode: '# 스스로 continue를 사용해보세요.',
    expectedOutputs: ['1\n2\n4\n5'],
    hint: 'for i in range(1, 6):\n    if i % 3 == 0:\n        continue\n    print(i)'
  },
            {
    type: 'quiz_code',
    content: '1부터 반복하며 짝수를 만나면 멈추도록 작성해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['1'],
    hint: 'for i in range(1, 10):\n    if i % 2 == 0:\n        break\n    print(i)'
  }
          ]
        ]
      },
      {
        id: 'node_3_3',
        title: '정해진 만큼 반복 (for)',
        guidebook: ["for문은 리스트나 범위(range) 안의 값들을 하나씩 순서대로 꺼내며 반복합니다.","while문보다 안전하며, 횟수가 정해져 있을 때 주로 사용합니다.","💡 자주 틀리는 유형: for i in 5: 처럼 반복할 수 없는 숫자를 넣음","🚀 해결 팁: 숫자를 반복 횟수로 쓰고 싶다면 반드시 range(5) 처럼 감싸주세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'for문의 기본 형태는?',
    options: ["for 변수 in 데이터:","for(변수; 조건; 증가)","for 변수 do"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'for 변수 in 시퀀스: 형태입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['for문은 ', ' in 데이터: 형태로 씁니다.'],
    wordBank: ["변수","function","loop"],
    answer: ["변수"],
    hint: '변수 이름이 먼저 옵니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]의 각 값을 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nfor n in nums\n    print(n)  # 콜론이 빠졌어요!',
    expectedOutputs: ['1\n2\n3'],
    hint: 'for n in nums: 로 고치세요.'
  },
            {
    type: 'quiz_code',
    content: '\'egg\'의 각 글자를 한 줄씩 출력하세요.',
    initialCode: 'for c in \'egg\':\nprint(c)  # 들여쓰기가 빠졌어요!',
    expectedOutputs: ['e\ng\ng'],
    hint: 'print 앞에 스페이스 4칸을 넣으세요.'
  },
            {
    type: 'quiz_code',
    content: '[\'사과\',\'바나나\',\'포도\']를 순서대로 출력하세요.',
    initialCode: 'fruits = [\'사과\', \'바나나\', \'포도\']\nfor f in fruits:\n    print(f)',
    expectedOutputs: ['사과\n바나나\n포도'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'for i in [1,2,3]: 은 몇 번 반복하나요?',
    options: ["3번","1번","무한"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '리스트 안의 원소 개수만큼 돕니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['for는 리스트나 문자열을 ', ' 순회합니다.'],
    wordBank: ["처음부터 끝까지","거꾸로만","한 번만"],
    answer: ["처음부터 끝까지"],
    hint: '전체를 차례로 훑습니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 3까지 숫자를 for문으로 출력하세요.',
    initialCode: 'for i in [1, 2,  ]:  # 3을 채워주세요.\n    print(i)',
    expectedOutputs: ['1\n2\n3'],
    hint: '[1, 2, 3]'
  },
            {
    type: 'quiz_code',
    content: '이름 리스트 [\'에그\',\'치킨\']에서 각 이름에 \'님\'을 붙여 출력하세요.',
    initialCode: 'names = [\'에그\', \'치킨\']\n# for문으로 각 이름 뒤에 \'님\'을 붙여 출력하세요.',
    expectedOutputs: ['에그님\n치킨님'],
    hint: 'for n in names:\n    print(n + \'님\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'for문은 while문과 비교해 어떤 특징이 있나요?',
    options: ["반복 횟수가 정해져 있을 때 편하다","항상 무한 반복한다","조건을 쓸 수 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '정해진 데이터를 순회할 때 좋습니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'for c in \'안녕\': 은 무엇을 반복하나요?',
    options: ["문자열의 각 글자","숫자","줄 전체"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열도 한 글자씩 순회할 수 있어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['for c in \'안녕\': 은 ', ' 씩 반복합니다.'],
    wordBank: ["한 글자","한 단어","한 줄"],
    answer: ["한 글자"],
    hint: '문자열도 한 글자씩 순회됩니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['for문 끝에는 ', ' 이 필요합니다.'],
    wordBank: [": (콜론)","; (세미콜론)","없음"],
    answer: [": (콜론)"],
    hint: '콜론이 필요합니다.'
  },
            {
    type: 'quiz_code',
    content: '숫자 리스트 [1,2,3]의 합을 for문으로 구해 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\ntotal = 0\n# for문으로 total에 각 숫자를 더하세요.',
    expectedOutputs: ['6'],
    hint: 'for n in nums:\n    total += n\nprint(total)'
  },
            {
    type: 'quiz_code',
    content: '\'Python\'의 글자 수를 for문으로 세어 출력하세요.',
    initialCode: 'word = \'Python\'\ncount = 0\n# for문으로 글자마다 count를 1씩 늘리세요.',
    expectedOutputs: ['6'],
    hint: 'for c in word:\n    count += 1\nprint(count)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [10,20,30]에서 20보다 큰 값만 출력하세요.',
    initialCode: 'nums = [10, 20, 30]\n# for문과 if문을 함께 사용하세요.',
    expectedOutputs: ['30'],
    hint: 'for n in nums:\n    if n > 20:\n        print(n)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'for문 끝에 필요한 기호는?',
    options: [": (콜론)","; (세미콜론)","{}"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '콜론이 필요합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['횟수가 정해진 반복은 ', ' 문이 유리합니다.'],
    wordBank: ["for","while","if"],
    answer: ["for"],
    hint: 'for문이 더 깔끔합니다.'
  },
            {
    type: 'quiz_code',
    content: 'range(len(리스트))를 활용해 인덱스와 함께 [\'a\',\'b\']를 출력하세요.',
    initialCode: 'letters = [\'a\', \'b\']\n# range(len(letters))를 사용해보세요.',
    expectedOutputs: ['0 a\n1 b'],
    hint: 'for i in range(len(letters)):\n    print(i, letters[i])'
  },
            {
    type: 'quiz_code',
    content: '스스로 [1,2,3,4,5] 중 짝수만 for문으로 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['2\n4'],
    hint: 'for n in [1,2,3,4,5]:\n    if n % 2 == 0:\n        print(n)'
  }
          ]
        ]
      },
      {
        id: 'node_3_4',
        title: '숫자 공장 (range)',
        guidebook: ["range(n)은 0부터 n-1까지의 숫자를 자동으로 만들어줍니다.","range(시작, 끝, 간격)으로 원하는 규칙의 숫자열을 만들 수 있습니다.","💡 자주 틀리는 유형: range(5)가 1~5까지라고 착각함 (실제론 0~4)","🚀 해결 팁: range의 끝 숫자는 항상 포함되지 않는다는 걸 기억하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'range(5)는 어떤 숫자들을 만드나요?',
    options: ["0,1,2,3,4","1,2,3,4,5","0,1,2,3,4,5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '0부터 시작해서 5는 포함하지 않아요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['range(5)는 0부터 ', ' 까지의 숫자를 만듭니다.'],
    wordBank: ["4","5","3"],
    answer: ["4"],
    hint: '끝 숫자는 포함되지 않아요.'
  },
            {
    type: 'quiz_code',
    content: 'range(5)를 이용해 0부터 4까지 출력하세요.',
    initialCode: 'for i in range(4):  # 5로 고쳐보세요!\n    print(i)',
    expectedOutputs: ['0\n1\n2\n3\n4'],
    hint: 'range(5)'
  },
            {
    type: 'quiz_code',
    content: 'range(1,6)를 이용해 1부터 5까지 출력하세요.',
    initialCode: 'for i in range(1, 5):  # 끝 숫자를 고쳐보세요!\n    print(i)',
    expectedOutputs: ['1\n2\n3\n4\n5'],
    hint: 'range(1, 6)'
  },
            {
    type: 'quiz_code',
    content: 'range(0,10,2)를 이용해 0,2,4,6,8을 출력하세요.',
    initialCode: 'for i in range(0, 10, 2):\n    print(i)',
    expectedOutputs: ['0\n2\n4\n6\n8'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'range(1, 5)는 어떤 숫자들을 만드나요?',
    options: ["1,2,3,4","1,2,3,4,5","0,1,2,3,4"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '시작은 포함, 끝은 포함하지 않습니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['range(시작, 끝)에서 끝 숫자는 ', ' 됩니다.'],
    wordBank: ["포함되지 않게","포함되게","무시"],
    answer: ["포함되지 않게"],
    hint: '끝은 항상 제외됩니다.'
  },
            {
    type: 'quiz_code',
    content: 'range(10,0,-1)를 이용해 10부터 1까지 거꾸로 출력하세요.',
    initialCode: 'for i in range(10, 0,  ):  # step을 채우세요.\n    print(i)',
    expectedOutputs: ['10\n9\n8\n7\n6\n5\n4\n3\n2\n1'],
    hint: '-1'
  },
            {
    type: 'quiz_code',
    content: 'range(3)을 이용해 \'반복 0\',\'반복 1\',\'반복 2\'를 출력하세요.',
    initialCode: '# for문과 range(3)을 사용하세요.',
    expectedOutputs: ['반복 0\n반복 1\n반복 2'],
    hint: 'for i in range(3):\n    print(\'반복 \' + str(i))'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'range(0, 10, 2)의 세 번째 숫자(2)는 무슨 뜻인가요?',
    options: ["건너뛰는 간격(step)","시작 숫자","반복 횟수"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'step은 몇씩 건너뛸지를 정합니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'range()는 주로 어떤 문법과 함께 쓰이나요?',
    options: ["for문","if문","while문"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'for i in range(...): 형태로 자주 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['range의 세 번째 숫자는 ', ' 을 의미합니다.'],
    wordBank: ["건너뛰는 간격(step)","시작값","반복 횟수"],
    answer: ["건너뛰는 간격(step)"],
    hint: 'step을 정합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['range()는 보통 ', ' 문과 짝을 이룹니다.'],
    wordBank: ["for","while","if"],
    answer: ["for"],
    hint: 'for문과 자주 쓰입니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 100까지의 합을 range()와 for문으로 구해 출력하세요.',
    initialCode: 'total = 0\n# range(1, 101)을 사용하세요.',
    expectedOutputs: ['5050'],
    hint: 'for i in range(1, 101):\n    total += i\nprint(total)'
  },
            {
    type: 'quiz_code',
    content: 'range(5)의 길이(5)를 len()으로 출력하세요.',
    initialCode: 'print(len(range(5)))',
    expectedOutputs: ['5'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '2부터 20까지 3씩 건너뛰며 출력하세요.',
    initialCode: '# range(2, 21, 3)을 사용하세요.',
    expectedOutputs: ['2\n5\n8\n11\n14\n17\n20'],
    hint: 'for i in range(2, 21, 3):\n    print(i)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'range(5, 0, -1)은 어떤 숫자들을 만드나요?',
    options: ["5,4,3,2,1","0,1,2,3,4,5","1,2,3,4,5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '음수 step은 거꾸로 셉니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['거꾸로 세려면 step에 ', ' 를 넣습니다.'],
    wordBank: ["음수","0","큰 수"],
    answer: ["음수"],
    hint: '음수 step을 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '별표(*)를 range(3)을 이용해 3줄 출력하세요.',
    initialCode: 'for i in range(3):\n    print(  )  # 별표를 넣으세요.',
    expectedOutputs: ['*\n*\n*'],
    hint: 'print(\'*\')'
  },
            {
    type: 'quiz_code',
    content: '스스로 range()를 이용해 10부터 1까지 짝수만 거꾸로 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['10\n8\n6\n4\n2'],
    hint: 'for i in range(10, 0, -2):\n    print(i)'
  }
          ]
        ]
      },
      {
        id: 'node_3_5',
        title: '반복문 마스터 보스전',
        guidebook: ["반복문 안에 반복문을 넣으면(이중 반복문) 표 형태의 데이터를 다룰 수 있습니다.","for와 while 중 상황에 맞는 도구를 선택하는 게 중요합니다.","💡 자주 틀리는 유형: 무한 루프에 빠지거나 들여쓰기 단계를 헷갈림","🚀 해결 팁: 안쪽/바깥쪽 반복문의 들여쓰기 단계를 하나씩 맞춰가며 확인하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '이중 반복문(루프 안의 루프)은 언제 사용하나요?',
    options: ["표나 격자 형태를 다룰 때","한 번만 반복할 때","조건이 없을 때"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '행과 열처럼 두 단계로 반복할 때 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['표(격자) 형태를 다룰 땐 ', ' 을 사용합니다.'],
    wordBank: ["이중 반복문","단일 조건문","함수 하나"],
    answer: ["이중 반복문"],
    hint: '루프 안의 루프입니다.'
  },
            {
    type: 'quiz_code',
    content: '구구단 2단을 출력하세요.',
    initialCode: 'for i in range(1, 10):\n    print(\'2 x \' + str(i) + \' = \' + str(2*i))',
    expectedOutputs: ['2 x 9 = 18'],
    hint: '이미 정답입니다. 마지막 줄만 맞으면 통과해요.'
  },
            {
    type: 'quiz_code',
    content: '3x3 별 사각형을 출력하세요 (매 줄 \'***\').',
    initialCode: 'for i in range(3):\n    line = \'\'\n    for j in range(3):\n        line = line   \'*\'  # 연산자가 빠졌어요!\n    print(line)',
    expectedOutputs: ['***\n***\n***'],
    hint: 'line = line + \'*\''
  },
            {
    type: 'quiz_code',
    content: '1~3, 1~3 두 숫자의 곱을 모두 출력하는 이중 for문을 작성하세요.',
    initialCode: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j)',
    expectedOutputs: ['9'],
    hint: '이미 정답입니다. 마지막 줄만 확인해요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '반복 횟수가 정해져 있을 때 유리한 것은?',
    options: ["for","while","둘 다 똑같다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '정해진 데이터를 순회할 때 for가 편합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['break는 ', ' 반복문만 탈출시킵니다.'],
    wordBank: ["가장 안쪽","모든","가장 바깥쪽"],
    answer: ["가장 안쪽"],
    hint: '자신이 속한 반복문만 벗어납니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4,5]에서 첫 번째 3의 배수를 찾으면 멈추세요.',
    initialCode: 'nums = [1, 2, 3, 4, 5]\nfor n in nums:\n    if n % 3 == 0:\n        print(n)\n        break',
    expectedOutputs: ['3'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '별 삼각형을 만드세요 (1줄:\'*\', 2줄:\'**\', 3줄:\'***\').',
    initialCode: 'for i in range(1, 4):\n    print(\'*\' * i)',
    expectedOutputs: ['*\n**\n***'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '무한 루프를 피하려면 무엇이 중요한가요?',
    options: ["종료 조건이 반드시 참이 되도록 만드는 것","print를 많이 쓰는 것","변수를 안 쓰는 것"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건이 언젠가 거짓이 되어야 멈춥니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '반복문 안에서 break를 만나면?',
    options: ["가장 안쪽 반복문만 탈출한다","모든 반복문이 한번에 끝난다","에러가 난다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'break는 자신이 속한 가장 안쪽 반복문만 벗어납니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['반복 횟수가 정해졌다면 ', ' 문이 편리합니다.'],
    wordBank: ["for","while","if"],
    answer: ["for"],
    hint: 'for가 편합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['무한 루프를 막으려면 ', ' 이 중요합니다.'],
    wordBank: ["종료 조건 갱신","print문 추가","변수 삭제"],
    answer: ["종료 조건 갱신"],
    hint: '조건이 언젠가 거짓이 되어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '이중 for문으로 1~2, 1~2 조합을 \'i,j\' 형태로 모두 출력하세요.',
    initialCode: '# 이중 for문을 작성하세요.',
    expectedOutputs: ['2,2'],
    hint: 'for i in range(1,3):\n    for j in range(1,3):\n        print(str(i)+\',\'+str(j))'
  },
            {
    type: 'quiz_code',
    content: '1부터 30까지 중 첫 번째 7의 배수를 출력하고 멈추세요.',
    initialCode: 'for i in range(1, 31):\n    if i % 7 == 0:\n        print(i)\n        # 반복을 멈추는 코드를 추가하세요.',
    expectedOutputs: ['7'],
    hint: 'break를 추가하세요.'
  },
            {
    type: 'quiz_code',
    content: '바깥 루프 2번, 안쪽 루프 3번 도는 이중 for문에서 총 반복 횟수를 세어 출력하세요.',
    initialCode: 'count = 0\n# 이중 for문으로 count를 늘리세요.',
    expectedOutputs: ['6'],
    hint: 'for i in range(2):\n    for j in range(3):\n        count += 1\nprint(count)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '구구단표처럼 행과 열이 있는 표를 만들 때 필요한 구조는?',
    options: ["이중 for문","단일 if문","단일 while문"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '바깥쪽 단, 안쪽 곱하는 수 두 단계가 필요합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['구구단표는 ', ' 반복문으로 만듭니다.'],
    wordBank: ["이중","단일","조건"],
    answer: ["이중"],
    hint: '두 단계 반복이 필요합니다.'
  },
            {
    type: 'quiz_code',
    content: '1~9 중 3의 배수만 골라 for+continue로 출력하세요.',
    initialCode: 'for i in range(1, 10):\n    if i % 3 != 0:\n        continue\n    print(i)',
    expectedOutputs: ['3\n6\n9'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '스스로 5x5 별 사각형을 출력해보세요 (각 줄 \'*****\').',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['*****\n*****\n*****\n*****\n*****'],
    hint: 'for i in range(5):\n    print(\'*\' * 5)'
  }
          ]
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'UNIT 4\n데이터 담는 가방',
    nodes: [
      {
        id: 'node_4_1',
        title: '리스트(List) 기초',
        guidebook: ["리스트는 여러 개의 데이터를 대괄호 [] 안에 쉼표로 구분해 담는 가방입니다.","숫자, 문자열 심지어 다른 리스트까지 모두 섞어 담을 수 있습니다.","💡 자주 틀리는 유형: 대괄호 대신 소괄호나 중괄호 사용","🚀 해결 팁: 리스트의 원소를 바꿀 때는 list_name[0] = '새값' 처럼 인덱스를 활용하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트를 만들 때 사용하는 기호는?',
    options: ["[] (대괄호)","() (소괄호)","{} (중괄호)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '대괄호를 사용합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['리스트는 ', ' 를 사용해 만듭니다.'],
    wordBank: ["[] 대괄호","() 소괄호","{} 중괄호"],
    answer: ["[] 대괄호"],
    hint: '대괄호를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '1,2,3을 담은 리스트 nums를 만들고 출력하세요.',
    initialCode: 'nums = (1, 2, 3)  # 소괄호를 대괄호로 고치세요!\nprint(nums)',
    expectedOutputs: ['[1, 2, 3]'],
    hint: 'nums = [1, 2, 3]'
  },
            {
    type: 'quiz_code',
    content: '\'사과\',\'바나나\'를 담은 리스트를 만들고 출력하세요.',
    initialCode: 'fruits = [\'사과\' \'바나나\']  # 쉼표가 빠졌어요!\nprint(fruits)',
    expectedOutputs: ['[\'사과\', \'바나나\']'],
    hint: '[\'사과\', \'바나나\']'
  },
            {
    type: 'quiz_code',
    content: '빈 리스트를 만들고 출력하세요.',
    initialCode: 'my_list = []\nprint(my_list)',
    expectedOutputs: ['[]'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 안에 서로 다른 자료형을 섞을 수 있나요?',
    options: ["네, 가능합니다","아니요, 불가능합니다","숫자만 가능합니다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬 리스트는 어떤 타입이든 담을 수 있어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['리스트 원소는 ', ' 로 구분합니다.'],
    wordBank: [", (쉼표)","; (세미콜론)",". (마침표)"],
    answer: [", (쉼표)"],
    hint: '쉼표로 구분합니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]의 길이를 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nprint(len(  ))  # 리스트 이름을 넣으세요.',
    expectedOutputs: ['3'],
    hint: 'len(nums)'
  },
            {
    type: 'quiz_code',
    content: '숫자와 문자를 섞은 리스트 [1, \'두\', 3]을 만들고 출력하세요.',
    initialCode: '# 서로 다른 타입을 섞은 리스트를 만드세요.',
    expectedOutputs: ['[1, \'두\', 3]'],
    hint: 'mixed = [1, \'두\', 3]\nprint(mixed)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '빈 리스트를 만드는 방법은?',
    options: ["[]","{}","()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '빈 대괄호를 씁니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '리스트의 길이를 구하는 함수는?',
    options: ["len()","length()","size()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'len()을 사용하세요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['빈 리스트는 ', ' 로 만듭니다.'],
    wordBank: ["[]","{}","None"],
    answer: ["[]"],
    hint: '빈 대괄호입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['리스트의 길이는 ', ' 로 확인합니다.'],
    wordBank: ["len()","count()","size()"],
    answer: ["len()"],
    hint: 'len()을 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '좋아하는 색 3가지를 담은 리스트를 만들고 길이를 출력하세요.',
    initialCode: 'colors = [\'빨강\', \'파랑\', \'노랑\']\n# 길이를 출력하세요.',
    expectedOutputs: ['3'],
    hint: 'print(len(colors))'
  },
            {
    type: 'quiz_code',
    content: '게임 아이템 리스트 [\'검\',\'방패\']를 만들고 그대로 출력하세요.',
    initialCode: 'items = [\'검\', \'방패\']\nprint(items)',
    expectedOutputs: ['[\'검\', \'방패\']'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '숫자 리스트 [10,20,30]을 만들고 출력하세요.',
    initialCode: 'nums = [10 20 30]  # 쉼표들이 빠졌어요!\nprint(nums)',
    expectedOutputs: ['[10, 20, 30]'],
    hint: '[10, 20, 30]'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 원소 사이는 무엇으로 구분하나요?',
    options: [", (쉼표)","; (세미콜론)","공백만"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '쉼표로 구분합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['리스트 안에는 ', ' 담을 수 있습니다.'],
    wordBank: ["여러 타입을 섞어서","숫자만","문자만"],
    answer: ["여러 타입을 섞어서"],
    hint: '어떤 타입이든 담을 수 있어요.'
  },
            {
    type: 'quiz_code',
    content: '빈 리스트 cart를 만들고, 길이(0)를 출력하세요.',
    initialCode: 'cart = []\n# 길이를 출력하세요.',
    expectedOutputs: ['0'],
    hint: 'print(len(cart))'
  },
            {
    type: 'quiz_code',
    content: '스스로 자신의 반 친구 이름 2명을 담은 리스트를 만들어 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['[\'철수\', \'영희\']'],
    hint: 'friends = [\'철수\', \'영희\']\nprint(friends)'
  }
          ]
        ]
      },
      {
        id: 'node_4_2',
        title: '리스트 안의 보물 찾기',
        guidebook: ["리스트도 문자열처럼 인덱스(0번부터)와 슬라이싱을 사용할 수 있습니다.","리스트는 문자열과 달리 인덱스로 값을 직접 바꿀 수 있습니다.","💡 자주 틀리는 유형: 존재하지 않는 인덱스를 불러 IndexError 발생","🚀 해결 팁: len()으로 리스트 길이를 먼저 확인하는 습관을 들이세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 [10,20,30]에서 [0]은?',
    options: ["10","20","30"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '인덱스 0은 첫 번째 값입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['리스트도 문자열처럼 ', ' 번부터 셉니다.'],
    wordBank: ["0","1","-1"],
    answer: ["0"],
    hint: '0부터 시작합니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]의 첫 번째 값을 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nprint(nums[1])  # 인덱스를 고치세요!',
    expectedOutputs: ['1'],
    hint: 'nums[0]'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'a\',\'b\',\'c\']의 마지막 값을 출력하세요.',
    initialCode: 'letters = [\'a\', \'b\', \'c\']\nprint(letters[0])  # 마지막 값이 아니에요!',
    expectedOutputs: ['c'],
    hint: 'letters[-1]'
  },
            {
    type: 'quiz_code',
    content: '리스트 [10,20,30,40,50]에서 [1:4]를 슬라이싱해 출력하세요.',
    initialCode: 'nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])',
    expectedOutputs: ['[20, 30, 40]'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 [10,20,30]에서 [-1]은?',
    options: ["30","10","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '음수 인덱스는 뒤에서부터입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['맨 뒤 원소는 인덱스 ', ' 로 가져옵니다.'],
    wordBank: ["-1","0","last"],
    answer: ["-1"],
    hint: '음수 인덱스를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]의 0번째 값을 100으로 바꾸고 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nnums[0] == 100  # 대입 연산자로 고치세요!\nprint(nums)',
    expectedOutputs: ['[100, 2, 3]'],
    hint: 'nums[0] = 100'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'월\',\'화\',\'수\']의 두 번째 값을 출력하세요.',
    initialCode: 'days = [\'월\', \'화\', \'수\']\nprint(days[  ])  # 알맞은 인덱스를 넣으세요.',
    expectedOutputs: ['화'],
    hint: 'days[1]'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 [10,20,30,40][1:3]은?',
    options: ["[20, 30]","[20, 30, 40]","[10, 20]"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '슬라이싱은 끝 번호를 포함하지 않습니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '리스트 원소 값을 바꾸는 방법은?',
    options: ["리스트명[인덱스] = 새값","리스트명.change()","불가능하다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '인덱스로 직접 값을 대입할 수 있습니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['리스트 원소를 바꾸려면 ', ' 형태로 대입합니다.'],
    wordBank: ["리스트명[인덱스] = 값","리스트명.set(값)","값 = 리스트명"],
    answer: ["리스트명[인덱스] = 값"],
    hint: '인덱스로 직접 대입합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['슬라이싱 [1:3]은 인덱스 ', ' 를 가져옵니다.'],
    wordBank: ["1과 2","1,2,3","0,1,2"],
    answer: ["1과 2"],
    hint: '끝 번호는 제외됩니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [5,10,15,20]에서 뒤에서 두 번째 값을 출력하세요.',
    initialCode: 'nums = [5, 10, 15, 20]\n# 음수 인덱스를 사용하세요.',
    expectedOutputs: ['15'],
    hint: 'print(nums[-2])'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4,5]에서 앞의 3개만 슬라이싱해 출력하세요.',
    initialCode: 'nums = [1, 2, 3, 4, 5]\n# 슬라이싱으로 앞 3개를 가져오세요.',
    expectedOutputs: ['[1, 2, 3]'],
    hint: 'nums[:3]'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'egg\',\'milk\']에서 \'egg\'를 \'bread\'로 바꾸고 출력하세요.',
    initialCode: 'cart = [\'egg\', \'milk\']\n# 0번째 값을 \'bread\'로 바꾸세요.',
    expectedOutputs: ['[\'bread\', \'milk\']'],
    hint: 'cart[0] = \'bread\''
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '존재하지 않는 인덱스를 부르면?',
    options: ["IndexError 발생","None이 나온다","0이 나온다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '범위를 벗어나면 에러가 납니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['범위를 벗어난 인덱스는 ', ' 를 발생시킵니다.'],
    wordBank: ["IndexError","아무 일도 없음","경고문"],
    answer: ["IndexError"],
    hint: '에러가 납니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [100,200,300]의 합을 인덱싱으로 직접 더해 출력하세요.',
    initialCode: 'nums = [100, 200, 300]\nprint(nums[0] + nums[1] + nums[2])',
    expectedOutputs: ['600'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '스스로 리스트 [1,2,3,4,5]에서 중간 값(인덱스 2)을 999로 바꿔 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['[1, 2, 999, 4, 5]'],
    hint: 'nums = [1,2,3,4,5]\nnums[2] = 999\nprint(nums)'
  }
          ]
        ]
      },
      {
        id: 'node_4_3',
        title: '리스트 메서드 (추가와 삭제)',
        guidebook: ["append, insert, remove, pop, sort 등 리스트 전용 메서드가 있습니다.","append()는 뒤에 추가, insert()는 원하는 위치에 추가합니다.","💡 자주 틀리는 유형: remove(값)와 pop(인덱스)를 헷갈려 사용","🚀 해결 팁: remove는 값을 찾아 지우고, pop은 위치의 값을 꺼내 지웁니다."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 맨 뒤에 값을 추가하는 메서드는?',
    options: ["append()","add()","insert()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'append는 뒤에 붙입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['맨 뒤에 값을 추가하려면 ', ' 를 씁니다.'],
    wordBank: ["append()","insert()","remove()"],
    answer: ["append()"],
    hint: '뒤에 붙입니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2]에 3을 추가해 [1,2,3]을 만드세요.',
    initialCode: 'nums = [1, 2]\nnums.add(3)  # 메서드 이름을 고치세요!\nprint(nums)',
    expectedOutputs: ['[1, 2, 3]'],
    hint: 'append(3)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'a\',\'c\']의 인덱스 1에 \'b\'를 넣어 [\'a\',\'b\',\'c\']를 만드세요.',
    initialCode: 'letters = [\'a\', \'c\']\nletters.insert(2, \'b\')  # 위치를 고치세요!\nprint(letters)',
    expectedOutputs: ['[\'a\', \'b\', \'c\']'],
    hint: 'insert(1, \'b\')'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,2]에서 2를 하나 제거하세요.',
    initialCode: 'nums = [1, 2, 3, 2]\nnums.remove(2)\nprint(nums)',
    expectedOutputs: ['[1, 3, 2]'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '원하는 위치에 값을 넣는 메서드는?',
    options: ["insert()","append()","push()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'insert(위치, 값) 형태입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['원하는 위치에 값을 넣으려면 ', ' 를 씁니다.'],
    wordBank: ["insert()","append()","pop()"],
    answer: ["insert()"],
    hint: '위치, 값 순서입니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]에서 마지막 값을 꺼내 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nprint(nums.pop())',
    expectedOutputs: ['3'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [3,1,2]를 정렬해 출력하세요.',
    initialCode: 'nums = [3, 1, 2]\n# 정렬 메서드를 사용하세요.',
    expectedOutputs: ['[1, 2, 3]'],
    hint: 'nums.sort()\nprint(nums)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '값을 찾아서 지우는 메서드는?',
    options: ["remove()","delete()","pop()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'remove(값)으로 값을 찾아 지웁니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '맨 뒤 값을 꺼내면서 지우는 메서드는?',
    options: ["pop()","remove()","append()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'pop()은 값을 반환하면서 삭제합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['값을 찾아서 지우려면 ', ' 를 씁니다.'],
    wordBank: ["remove()","pop()","del()"],
    answer: ["remove()"],
    hint: '값으로 찾습니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['맨 뒤 값을 꺼내며 지우려면 ', ' 를 씁니다.'],
    wordBank: ["pop()","remove()","append()"],
    answer: ["pop()"],
    hint: '값을 반환하며 삭제합니다.'
  },
            {
    type: 'quiz_code',
    content: '장바구니 리스트 [\'우유\']에 \'빵\'을 추가해 출력하세요.',
    initialCode: 'cart = [\'우유\']\n# append를 사용하세요.',
    expectedOutputs: ['[\'우유\', \'빵\']'],
    hint: 'cart.append(\'빵\')\nprint(cart)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'b\',\'c\']의 맨 앞에 \'a\'를 삽입해 출력하세요.',
    initialCode: 'letters = [\'b\', \'c\']\n# insert를 사용하세요.',
    expectedOutputs: ['[\'a\', \'b\', \'c\']'],
    hint: 'letters.insert(0, \'a\')\nprint(letters)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4]에서 짝수 하나(2)를 remove로 지우고 출력하세요.',
    initialCode: 'nums = [1, 2, 3, 4]\n# remove(2)를 사용하세요.',
    expectedOutputs: ['[1, 3, 4]'],
    hint: 'nums.remove(2)\nprint(nums)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트를 오름차순 정렬하는 메서드는?',
    options: ["sort()","order()","arrange()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'sort()가 오름차순 정렬을 합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['오름차순으로 정렬하려면 ', ' 를 씁니다.'],
    wordBank: ["sort()","order()","list()"],
    answer: ["sort()"],
    hint: 'sort()를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [5,3,4,1,2]를 정렬해 출력하세요.',
    initialCode: 'nums = [5, 3, 4, 1, 2]\nnums.sort()\nprint(nums)',
    expectedOutputs: ['[1, 2, 3, 4, 5]'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '스스로 빈 리스트에 1,2,3을 순서대로 append한 뒤 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['[1, 2, 3]'],
    hint: 'nums = []\nnums.append(1)\nnums.append(2)\nnums.append(3)\nprint(nums)'
  }
          ]
        ]
      },
      {
        id: 'node_4_4',
        title: '리스트와 반복문의 콜라보',
        guidebook: ["for문으로 리스트의 값을 하나씩 꺼내 반복 작업을 할 수 있습니다.","합계, 최댓값 찾기 등은 누적 변수를 먼저 만들어야 합니다.","💡 자주 틀리는 유형: 누적 변수를 초기화하지 않거나 += 대신 =을 사용함","🚀 해결 팁: total = 0 처럼 반복 전에 변수를 미리 만들어두세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트의 값을 하나씩 꺼내려면?',
    options: ["for item in my_list:","my_list.each()","while my_list:"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'for item in 리스트: 형태입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['리스트 값을 하나씩 꺼내려면 ', ' 을 씁니다.'],
    wordBank: ["for item in 리스트","리스트.each()","while 리스트"],
    answer: ["for item in 리스트"],
    hint: 'for문을 사용합니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]의 각 값을 2배로 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nfor n in nums:\n    print(n + 2)  # 연산을 곱하기로 고치세요!',
    expectedOutputs: ['2\n4\n6'],
    hint: 'print(n * 2)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'a\',\'b\',\'c\']를 인덱스와 함께 출력하세요.',
    initialCode: 'letters = [\'a\', \'b\', \'c\']\nfor i in range(len(letters)):\n    print(i, letters[i])',
    expectedOutputs: ['2 c'],
    hint: '이미 정답입니다. 마지막 줄만 확인해요.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [10,20,30]의 합을 for문으로 구해 출력하세요.',
    initialCode: 'nums = [10, 20, 30]\ntotal = 0\nfor n in nums:\n    total = n  # 누적이 안 되고 있어요!\nprint(total)',
    expectedOutputs: ['60'],
    hint: 'total += n'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '인덱스가 필요할 때 함께 쓰는 조합은?',
    options: ["range(len(리스트))","len(리스트)","index(리스트)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'range와 len을 조합합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['인덱스가 필요하면 ', ' 를 함께 씁니다.'],
    wordBank: ["range(len(리스트))","len()만","print()만"],
    answer: ["range(len(리스트))"],
    hint: 'range와 len 조합입니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4]에서 가장 큰 값을 for문으로 찾아 출력하세요.',
    initialCode: 'nums = [1, 2, 3, 4]\nbiggest = nums[0]\nfor n in nums:\n    if n > biggest:\n        biggest = n\nprint(biggest)',
    expectedOutputs: ['4'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'사과\',\'바나나\',\'포도\']의 글자 수를 각각 출력하세요.',
    initialCode: 'fruits = [\'사과\', \'바나나\', \'포도\']\n# for문으로 len(f)를 출력하세요.',
    expectedOutputs: ['2\n3\n2'],
    hint: 'for f in fruits:\n    print(len(f))'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'for문으로 리스트의 합을 구할 때 먼저 필요한 것은?',
    options: ["누적할 변수(total=0)","print문만","리스트 삭제"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '합을 저장할 변수가 먼저 필요합니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'for문 안에서 리스트를 수정할 때 주의할 점은?',
    options: ["의도치 않은 값 변경에 주의해야 한다","항상 안전하다","불가능하다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '반복 중 리스트를 바꾸면 예상과 다른 결과가 나올 수 있어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['합계를 구하려면 먼저 ', ' 변수를 만듭니다.'],
    wordBank: ["0으로 초기화한 누적","리스트를 지우는","이름 없는"],
    answer: ["0으로 초기화한 누적"],
    hint: 'total = 0 처럼 만듭니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['리스트와 for문은 ', ' 짝꿍입니다.'],
    wordBank: ["환상의","위험한","불가능한"],
    answer: ["환상의"],
    hint: '아주 잘 어울립니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4,5]에서 짝수의 개수를 세어 출력하세요.',
    initialCode: 'nums = [1, 2, 3, 4, 5]\ncount = 0\n# 짝수일 때 count를 늘리세요.',
    expectedOutputs: ['2'],
    hint: 'for n in nums:\n    if n % 2 == 0:\n        count += 1\nprint(count)'
  },
            {
    type: 'quiz_code',
    content: '이름 리스트 [\'철수\',\'영희\']에 인사말을 붙여 출력하세요.',
    initialCode: 'names = [\'철수\', \'영희\']\n# for문으로 \'안녕 \'을 붙여 출력하세요.',
    expectedOutputs: ['안녕 철수\n안녕 영희'],
    hint: 'for n in names:\n    print(\'안녕 \' + n)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [3,7,2,9,4]에서 5보다 큰 값의 개수를 출력하세요.',
    initialCode: 'nums = [3, 7, 2, 9, 4]\n# 5보다 큰 값을 세어보세요.',
    expectedOutputs: ['2'],
    hint: 'count = 0\nfor n in nums:\n    if n > 5:\n        count += 1\nprint(count)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'for x in [\'a\',\'b\']: 은 몇 번 반복하나요?',
    options: ["2번","1번","무한"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '리스트 원소 개수만큼 반복합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['for item in my_list: 는 리스트를 ', ' 순회합니다.'],
    wordBank: ["처음부터 끝까지","한 번만","거꾸로만"],
    answer: ["처음부터 끝까지"],
    hint: '전체를 차례로 훑습니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]의 모든 값을 곱한 결과를 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nresult = 1\n# for문으로 곱하세요.',
    expectedOutputs: ['6'],
    hint: 'for n in nums:\n    result *= n\nprint(result)'
  },
            {
    type: 'quiz_code',
    content: '스스로 리스트 [1,2,3,4,5]의 평균을 구해 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['3.0'],
    hint: 'nums = [1,2,3,4,5]\ntotal = 0\nfor n in nums:\n    total += n\nprint(total / len(nums))'
  }
          ]
        ]
      },
      {
        id: 'node_4_5',
        title: '변경 불가능한 가방 (Tuple)',
        guidebook: ["튜플은 리스트와 비슷하지만 소괄호()를 쓰고 값을 바꿀 수 없습니다.","좌표, 고정된 정보 등 변하지 않아야 할 데이터에 주로 사용합니다.","💡 자주 틀리는 유형: 튜플의 값을 리스트처럼 바꾸려다 에러가 남","🚀 해결 팁: 값을 바꿔야 한다면 애초에 리스트를 사용하는 게 좋습니다."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '튜플을 만들 때 사용하는 기호는?',
    options: ["() (소괄호)","[] (대괄호)","{} (중괄호)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '소괄호를 사용합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['튜플은 ', ' 를 사용해 만듭니다.'],
    wordBank: ["() 소괄호","[] 대괄호","{} 중괄호"],
    answer: ["() 소괄호"],
    hint: '소괄호를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '1,2,3을 담은 튜플을 만들고 출력하세요.',
    initialCode: 'nums = [1, 2, 3]  # 대괄호를 소괄호로 고치세요!\nprint(nums)',
    expectedOutputs: ['(1, 2, 3)'],
    hint: 'nums = (1, 2, 3)'
  },
            {
    type: 'quiz_code',
    content: '튜플 (1,2,3)의 0번째 값을 출력하세요.',
    initialCode: 'nums = (1, 2, 3)\nprint(nums[1])  # 인덱스를 고치세요!',
    expectedOutputs: ['1'],
    hint: 'nums[0]'
  },
            {
    type: 'quiz_code',
    content: '튜플 (10,20,30)을 리스트로 변환해 출력하세요.',
    initialCode: 'nums = (10, 20, 30)\nprint(list(nums))',
    expectedOutputs: ['[10, 20, 30]'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '튜플과 리스트의 가장 큰 차이는?',
    options: ["튜플은 값을 바꿀 수 없다","튜플은 숫자만 담는다","차이가 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '튜플은 한 번 만들면 수정이 불가능합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['튜플은 한 번 만들면 값을 ', ' 없습니다.'],
    wordBank: ["바꿀 수","조회할 수","출력할 수"],
    answer: ["바꿀 수"],
    hint: '수정이 불가능합니다.'
  },
            {
    type: 'quiz_code',
    content: '이름과 나이를 담은 튜플 (\'에그\', 5)를 만들고 출력하세요.',
    initialCode: '# 튜플을 만들어 출력하세요.',
    expectedOutputs: ['(\'에그\', 5)'],
    hint: 'person = (\'에그\', 5)\nprint(person)'
  },
            {
    type: 'quiz_code',
    content: '튜플 (1,2,3)의 길이를 출력하세요.',
    initialCode: 'nums = (1, 2, 3)\nprint(len(nums))',
    expectedOutputs: ['3'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '튜플의 값을 바꾸려고 하면?',
    options: ["TypeError 발생","자동으로 바뀐다","경고만 뜬다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '튜플은 읽기 전용이라 수정 시 에러가 납니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '튜플과 리스트 중 속도가 더 빠른 것은?',
    options: ["튜플","리스트","동일하다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '변경 불가능한 만큼 튜플이 조금 더 빠릅니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['튜플의 값을 바꾸려 하면 ', ' 가 발생합니다.'],
    wordBank: ["TypeError","IndexError","아무 일도 없음"],
    answer: ["TypeError"],
    hint: '타입 에러가 납니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['튜플은 리스트보다 속도가 ', ' 편입니다.'],
    wordBank: ["빠른","느린","동일한"],
    answer: ["빠른"],
    hint: '변경 불가능해서 더 빠릅니다.'
  },
            {
    type: 'quiz_code',
    content: '좌표를 나타내는 튜플 (3, 4)를 만들고 그대로 출력하세요.',
    initialCode: 'point = (3, 4)\nprint(point)',
    expectedOutputs: ['(3, 4)'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '튜플 (5,10,15)의 마지막 값을 출력하세요.',
    initialCode: 'nums = (5, 10, 15)\n# 음수 인덱스를 사용하세요.',
    expectedOutputs: ['15'],
    hint: 'print(nums[-1])'
  },
            {
    type: 'quiz_code',
    content: '빈 튜플을 만들고 길이(0)를 출력하세요.',
    initialCode: 'empty = ()\nprint(len(empty))',
    expectedOutputs: ['0'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '튜플의 길이를 구하는 함수는?',
    options: ["len()","length()","size()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '리스트와 동일하게 len()을 씁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['튜플을 읽기 전용 ', ' 이라고 생각하면 편합니다.'],
    wordBank: ["리스트","숫자","문자열"],
    answer: ["리스트"],
    hint: '리스트와 비슷하지만 수정이 안 됩니다.'
  },
            {
    type: 'quiz_code',
    content: '튜플 (1,2)와 (3,4)를 더해 (1,2,3,4)를 만들어 출력하세요.',
    initialCode: 'a = (1, 2)\nb = (3, 4)\n# 두 튜플을 더하세요.',
    expectedOutputs: ['(1, 2, 3, 4)'],
    hint: 'print(a + b)'
  },
            {
    type: 'quiz_code',
    content: '스스로 요일 3개를 담은 튜플을 만들어 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['(\'월\', \'화\', \'수\')'],
    hint: 'days = (\'월\', \'화\', \'수\')\nprint(days)'
  }
          ]
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'UNIT 5\n티어 1 최종 보스전',
    nodes: [
      {
        id: 'node_5_1',
        title: '비기너 종합 테스트 1',
        guidebook: ["Unit 1 전체(출력, 변수, 연산, 문자열, 인덱싱)를 복습하는 관문입니다.","헷갈리는 부분이 있다면 가이드북에서 해당 유닛을 다시 확인하세요.","💡 자주 틀리는 유형: 문자열과 숫자를 그냥 더하려다 에러가 남","🚀 해결 팁: 숫자를 문자열에 합칠 땐 항상 str()로 감싸주세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'Egg\' + str(5) 의 결과는?',
    options: ["'Egg5'","에러 발생","'Egg 5'"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열끼리는 그대로 이어붙습니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['변수 이름은 ', ' 로 시작할 수 없습니다.'],
    wordBank: ["숫자","영문자","언더바"],
    answer: ["숫자"],
    hint: '숫자가 맨 앞에 오면 안 돼요.'
  },
            {
    type: 'quiz_code',
    content: '이름(name=\'코딩에그\')과 나이(age=5)를 이용해 \'코딩에그는 5살입니다\'를 출력하세요.',
    initialCode: 'name = \'코딩에그\'\nage = 5\nprint(name + \'는 \' + age + \'살입니다\')  # age를 문자열로 바꿔야 해요!',
    expectedOutputs: ['코딩에그는 5살입니다'],
    hint: 'str(age)로 감싸세요.'
  },
            {
    type: 'quiz_code',
    content: '\'Hello World\'에서 \'World\'만 슬라이싱해 출력하세요.',
    initialCode: 's = \'Hello World\'\nprint(s[6:])',
    expectedOutputs: ['World'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '가로 5, 세로 3인 사각형의 넓이를 변수 없이 바로 계산해 출력하세요.',
    initialCode: '# 5와 3을 곱해 출력하세요.',
    expectedOutputs: ['15'],
    hint: 'print(5 * 3)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '변수 이름으로 사용할 수 없는 것은?',
    options: ["1st","my_var","score"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '숫자로 시작하는 이름은 안 됩니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['문자열 슬라이싱 [0:3]은 인덱스 ', ' 를 가져옵니다.'],
    wordBank: ["0,1,2","0,1,2,3","1,2,3"],
    answer: ["0,1,2"],
    hint: '끝 번호는 제외됩니다.'
  },
            {
    type: 'quiz_code',
    content: '\'abc\'를 3번 반복해 출력하세요.',
    initialCode: 'print(\'abc\' + 3)  # 반복은 곱하기입니다!',
    expectedOutputs: ['abcabcabc'],
    hint: '\'abc\' * 3'
  },
            {
    type: 'quiz_code',
    content: '점수 변수 score=88을 만들고 그대로 출력하세요.',
    initialCode: 'score = 88\nprint(score)',
    expectedOutputs: ['88'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '\'Python\'[0:3]의 결과는?',
    options: ["'Pyt'","'yth'","'Pytho'"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '인덱스 0,1,2가 포함됩니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '10 // 3의 결과는?',
    options: ["3","3.33","1"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '몫만 구하는 연산자입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['나눗셈의 몫만 구할 땐 ', ' 를 씁니다.'],
    wordBank: ["//","/","%"],
    answer: ["//"],
    hint: '슬래시 두 개입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['문자열과 숫자를 합치려면 숫자를 ', ' 로 감싸야 합니다.'],
    wordBank: ["str()","int()","len()"],
    answer: ["str()"],
    hint: '문자열로 형변환합니다.'
  },
            {
    type: 'quiz_code',
    content: '\'banana\'의 길이를 구해 출력하세요.',
    initialCode: 'word = \'banana\'\nprint(len(word))',
    expectedOutputs: ['6'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '17을 5로 나눈 나머지를 출력하세요.',
    initialCode: 'print(17  5)  # 나머지 연산자가 빠졌어요!',
    expectedOutputs: ['2'],
    hint: 'print(17 % 5)'
  },
            {
    type: 'quiz_code',
    content: '\'Python\'의 마지막 글자를 출력하세요.',
    initialCode: 'word = \'Python\'\nprint(word[0])  # 인덱스를 고치세요!',
    expectedOutputs: ['n'],
    hint: 'word[-1]'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'print(1, 2, 3)의 출력 결과는?',
    options: ["1 2 3","1,2,3","123"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '쉼표로 구분된 값은 공백으로 출력됩니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['여러 값을 쉼표로 출력하면 ', ' 으로 구분되어 보입니다.'],
    wordBank: ["공백","줄바꿈","쉼표"],
    answer: ["공백"],
    hint: 'print(1, 2)는 "1 2"로 나옵니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 x=7, y=3을 만들고 x*y를 출력하세요.',
    initialCode: 'x = 7\ny = 3\n# 곱셈 결과를 출력하세요.',
    expectedOutputs: ['21'],
    hint: 'print(x * y)'
  },
            {
    type: 'quiz_code',
    content: '스스로 좋아하는 숫자(예:7)를 변수에 담아 \'내가 좋아하는 숫자는 7입니다\' 형태로 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['내가 좋아하는 숫자는 7입니다'],
    hint: 'num = 7\nprint(\'내가 좋아하는 숫자는 \' + str(num) + \'입니다\')'
  }
          ]
        ]
      },
      {
        id: 'node_5_2',
        title: '비기너 종합 테스트 2',
        guidebook: ["Unit 2 전체(조건문, 논리 연산자)를 복습하는 관문입니다.","and/or/not의 차이를 명확히 아는 것이 핵심입니다.","💡 자주 틀리는 유형: elif 순서를 무시하고 조건을 아무렇게나 배치함","🚀 해결 팁: 조건은 항상 위에서부터 순서대로 검사된다는 걸 기억하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '나이가 18 미만\'이면서\' 학생일 때만 참이 되려면 어떤 연산자가 필요할까요?',
    options: ["and","or","not"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '두 조건 모두 만족해야 합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['두 조건 모두 만족해야 할 땐 ', ' 를 씁니다.'],
    wordBank: ["and","or","not"],
    answer: ["and"],
    hint: '모두 참이어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '점수(75)가 60 이상이면 \'합격\', 아니면 \'불합격\'을 출력하세요.',
    initialCode: 'score = 75\nif score >= 60\n    print(\'합격\')\nelse:\n    print(\'불합격\')  # 콜론이 빠졌어요!',
    expectedOutputs: ['합격'],
    hint: 'if score >= 60: 로 고치세요.'
  },
            {
    type: 'quiz_code',
    content: '나이(17)가 19 이상이면 \'성인\', 아니면 \'미성년자\'를 출력하세요.',
    initialCode: 'age = 17\nif age >= 19:\n    print(\'성인\')\nelse:\n print(\'미성년자\')  # 들여쓰기를 맞추세요!',
    expectedOutputs: ['미성년자'],
    hint: 'print 앞에 스페이스 4칸.'
  },
            {
    type: 'quiz_code',
    content: '학점(score=72)에 따라 90+ \'A\', 80+ \'B\', 70+ \'C\', 그 외 \'D\'를 출력하세요.',
    initialCode: 'score = 72\nif score >= 90:\n    print(\'A\')\nelif score >= 80:\n    print(\'B\')\nelif score >= 70:\n    print(\'C\')\nelse:\n    print(\'D\')',
    expectedOutputs: ['C'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'if score>=90: A / elif score>=80: B / else: C 에서 score=95면?',
    options: ["A","B","C"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '위에서부터 순서대로 검사해 처음 참인 곳에서 멈춥니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['여러 조건을 순서대로 검사할 땐 ', ' 를 씁니다.'],
    wordBank: ["elif","else","and"],
    answer: ["elif"],
    hint: '위에서부터 차례로 봅니다.'
  },
            {
    type: 'quiz_code',
    content: '체력(60)이 50 이상\'이면서\' 마나(20)가 10 이상이면 \'스킬 사용 가능\'을 출력하세요.',
    initialCode: 'hp = 60\nmp = 20\nif hp >= 50 or mp >= 10:\n    print(\'스킬 사용 가능\')  # or을 and로 고쳐야 정확합니다!',
    expectedOutputs: ['스킬 사용 가능'],
    hint: 'and로 바꾸세요.'
  },
            {
    type: 'quiz_code',
    content: '비가 오지 않으면(is_raining=False) \'산책\'을 출력하는 조건문을 not을 사용해 작성하세요.',
    initialCode: 'is_raining = False\nif not is_raining:\n    print(\'산책\')',
    expectedOutputs: ['산책'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'not (5 > 3)의 결과는?',
    options: ["False","True","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '5>3은 True이고, not이 뒤집습니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'if 조건: 뒤에 콜론을 빼먹으면?',
    options: ["SyntaxError 발생","무시하고 실행된다","경고만 뜬다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '콜론은 필수 문법입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['조건을 뒤집을 땐 ', ' 를 씁니다.'],
    wordBank: ["not","reverse","invert"],
    answer: ["not"],
    hint: '참/거짓을 뒤집습니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['if 조건 뒤에는 반드시 ', ' 이 와야 합니다.'],
    wordBank: [": (콜론)","; (세미콜론)","없음"],
    answer: [": (콜론)"],
    hint: '콜론이 필요합니다.'
  },
            {
    type: 'quiz_code',
    content: '로그인 상태(True)이면서 관리자(False)가 아니면 \'일반 회원 메뉴\'를 출력하세요.',
    initialCode: 'is_logged_in = True\nis_admin = False\n# and와 not을 사용한 조건문을 작성하세요.',
    expectedOutputs: ['일반 회원 메뉴'],
    hint: 'if is_logged_in and not is_admin:\n    print(\'일반 회원 메뉴\')'
  },
            {
    type: 'quiz_code',
    content: '온도(temp=35)가 33 이상이면 \'폭염주의\'를 출력하세요.',
    initialCode: 'temp = 35\n# if문만 사용하세요 (else 없이).',
    expectedOutputs: ['폭염주의'],
    hint: 'if temp >= 33:\n    print(\'폭염주의\')'
  },
            {
    type: 'quiz_code',
    content: '레벨(level=7)이 5~10 사이(포함)인지 판단해 \'중급자\'를 출력하세요.',
    initialCode: 'level = 7\n# and를 사용해 범위를 확인하세요.',
    expectedOutputs: ['중급자'],
    hint: 'if level >= 5 and level <= 10:\n    print(\'중급자\')'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '중첩 조건문(if 안의 if)은 어떤 상황에 쓰이나요?',
    options: ["여러 단계의 조건을 확인할 때","조건이 하나일 때","반복이 필요할 때"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건 안에서 또 다른 조건을 확인할 때 사용해요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['if-elif-else는 처음으로 ', ' 조건에서 멈춥니다.'],
    wordBank: ["참인","거짓인","마지막"],
    answer: ["참인"],
    hint: '처음 만족하는 조건에서 멈춰요.'
  },
            {
    type: 'quiz_code',
    content: '가위바위보에서 내가 \'가위\'이고 상대가 \'보\'이면 \'승리\'를 출력하세요.',
    initialCode: 'me = \'가위\'\nopponent = \'보\'\n# 조건문을 작성하세요.',
    expectedOutputs: ['승리'],
    hint: 'if me == \'가위\' and opponent == \'보\':\n    print(\'승리\')'
  },
            {
    type: 'quiz_code',
    content: '스스로 시험 3과목 평균(80)이 60 이상이면 \'진급\'을 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['진급'],
    hint: 'avg = 80\nif avg >= 60:\n    print(\'진급\')'
  }
          ]
        ]
      },
      {
        id: 'node_5_3',
        title: '비기너 종합 테스트 3',
        guidebook: ["Unit 3 전체(while, for, break/continue, range)를 복습하는 관문입니다.","반복 횟수가 정해졌으면 for, 조건 기반이면 while이 유리합니다.","💡 자주 틀리는 유형: 무한 루프에 빠지거나 range 범위를 착각함","🚀 해결 팁: 반복문을 실행하기 전에 몇 번 돌지 손으로 먼저 세어보세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: 'for i in range(3): 은 몇 번 반복하나요?',
    options: ["3번","2번","4번"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '0,1,2 총 3번입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['for문은 ', ' 이 정해진 반복에 유리합니다.'],
    wordBank: ["횟수","조건","이름"],
    answer: ["횟수"],
    hint: '정해진 횟수만큼 돌 때 좋습니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 5까지의 합을 for문으로 구해 출력하세요.',
    initialCode: 'total = 0\nfor i in range(1, 5):  # 끝 숫자를 고쳐보세요!\n    total += i\nprint(total)',
    expectedOutputs: ['15'],
    hint: 'range(1, 6)'
  },
            {
    type: 'quiz_code',
    content: '1부터 10까지 중 짝수만 출력하세요.',
    initialCode: 'for i in range(1, 11):\n    if i % 2 == 0:\n        print(i)',
    expectedOutputs: ['10'],
    hint: '이미 정답입니다. 마지막 줄만 확인해요.'
  },
            {
    type: 'quiz_code',
    content: 'i가 5가 될 때까지 1씩 증가시키며 출력하는 while문을 완성하세요.',
    initialCode: 'i = 1\nwhile i <= 5:\n    print(i)\n    # i를 늘리는 코드가 빠졌어요!',
    expectedOutputs: ['1\n2\n3\n4\n5'],
    hint: 'i += 1'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'while문에서 조건을 갱신하지 않으면?',
    options: ["무한 루프에 빠진다","한 번만 실행된다","에러가 난다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건이 계속 참이면 영원히 반복됩니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['while문은 무한 루프를 피하려면 ', ' 이 필요합니다.'],
    wordBank: ["조건을 바꾸는 코드","print문","함수"],
    answer: ["조건을 바꾸는 코드"],
    hint: '조건이 언젠가 거짓이 되어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 20까지 중 7을 만나면 멈추세요.',
    initialCode: 'for i in range(1, 21):\n    print(i)\n    if i == 7:\n        break',
    expectedOutputs: ['1\n2\n3\n4\n5\n6\n7'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '1부터 10까지 중 3의 배수는 건너뛰고 출력하세요.',
    initialCode: 'for i in range(1, 11):\n    if i % 3 == 0:\n        continue\n    print(i)',
    expectedOutputs: ['10'],
    hint: '이미 정답입니다. 마지막 줄만 확인해요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: 'break와 continue 중 반복문을 완전히 멈추는 것은?',
    options: ["break","continue","둘 다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'break는 탈출, continue는 건너뛰기입니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'range(2, 10, 2)의 첫 값은?',
    options: ["2","0","10"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '시작값이 2이므로 그대로 2부터 시작합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['반복문을 완전히 탈출하려면 ', ' 를 씁니다.'],
    wordBank: ["break","continue","pass"],
    answer: ["break"],
    hint: '즉시 멈춥니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['range(a, b, c)에서 c는 ', ' 을 의미합니다.'],
    wordBank: ["건너뛰는 간격","시작값","반복 횟수"],
    answer: ["건너뛰는 간격"],
    hint: 'step 값입니다.'
  },
            {
    type: 'quiz_code',
    content: '구구단 5단을 출력하세요.',
    initialCode: 'for i in range(1, 10):\n    print(\'5 x \' + str(i) + \' = \' + str(5*i))',
    expectedOutputs: ['5 x 9 = 45'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '별 3개짜리 삼각형을 출력하세요.',
    initialCode: 'for i in range(1, 4):\n    print(\'*\' *  )  # i를 넣어주세요.',
    expectedOutputs: ['*\n**\n***'],
    hint: 'print(\'*\' * i)'
  },
            {
    type: 'quiz_code',
    content: '1부터 100까지 합을 while문으로 구해 출력하세요.',
    initialCode: 'i = 1\ntotal = 0\n# while문을 작성하세요.',
    expectedOutputs: ['5050'],
    hint: 'while i <= 100:\n    total += i\n    i += 1\nprint(total)'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '이중 for문에서 안쪽 루프는 바깥쪽 루프 1회당 몇 번 도나요?',
    options: ["안쪽 range 만큼 전부","1번만","바깥과 동일하게 1번"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '바깥이 한 바퀴 돌 때마다 안쪽은 처음부터 끝까지 다 돕니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['이중 for문은 ', ' 형태를 다룰 때 유용합니다.'],
    wordBank: ["표(격자)","한 줄짜리 텍스트","단일 값"],
    answer: ["표(격자)"],
    hint: '행과 열이 있을 때 씁니다.'
  },
            {
    type: 'quiz_code',
    content: 'range(10, 0, -1)로 10부터 1까지 출력하세요.',
    initialCode: '# for문과 range를 사용하세요.',
    expectedOutputs: ['10\n9\n8\n7\n6\n5\n4\n3\n2\n1'],
    hint: 'for i in range(10, 0, -1):\n    print(i)'
  },
            {
    type: 'quiz_code',
    content: '스스로 1~50 중 첫 번째로 발견되는 11의 배수를 찾아 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['11'],
    hint: 'for i in range(1, 51):\n    if i % 11 == 0:\n        print(i)\n        break'
  }
          ]
        ]
      },
      {
        id: 'node_5_4',
        title: '비기너 종합 테스트 4',
        guidebook: ["Unit 4 전체(리스트, 인덱싱, 메서드, 튜플)를 복습하는 관문입니다.","리스트는 변경 가능, 튜플은 변경 불가능이라는 차이를 기억하세요.","💡 자주 틀리는 유형: 리스트 메서드 이름(append/remove/pop)을 헷갈림","🚀 해결 팁: 헷갈리면 가이드북의 메서드 설명을 다시 확인하세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 [1,2,3].append(4) 실행 후 리스트는?',
    options: ["[1, 2, 3, 4]","[4, 1, 2, 3]","[1, 2, 3]"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'append는 맨 뒤에 추가합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['리스트 맨 뒤에 값을 더하려면 ', ' 를 씁니다.'],
    wordBank: ["append()","insert()","remove()"],
    answer: ["append()"],
    hint: '뒤에 붙입니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]에 4를 추가하고 출력하세요.',
    initialCode: 'nums = [1, 2, 3]\nnums.push(4)  # 메서드 이름을 고치세요!\nprint(nums)',
    expectedOutputs: ['[1, 2, 3, 4]'],
    hint: 'append(4)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4,5]에서 짝수만 출력하세요.',
    initialCode: 'nums = [1, 2, 3, 4, 5]\nfor n in nums:\n    if n % 2 == 0:\n        print(n)',
    expectedOutputs: ['2\n4'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '튜플 (1,2,3)의 값을 리스트로 바꿔 출력하세요.',
    initialCode: 't = (1, 2, 3)\nprint(list(t))',
    expectedOutputs: ['[1, 2, 3]'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '튜플과 리스트의 차이는?',
    options: ["튜플은 수정 불가, 리스트는 수정 가능","리스트는 숫자만 저장","차이가 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '튜플은 한 번 만들면 바꿀 수 없어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['튜플은 ', ' 를 사용해 만듭니다.'],
    wordBank: ["() 소괄호","[] 대괄호","{} 중괄호"],
    answer: ["() 소괄호"],
    hint: '소괄호를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [5,3,1,4,2]를 정렬해 출력하세요.',
    initialCode: 'nums = [5, 3, 1, 4, 2]\n# 정렬 메서드를 사용하세요.',
    expectedOutputs: ['[1, 2, 3, 4, 5]'],
    hint: 'nums.sort()\nprint(nums)'
  },
            {
    type: 'quiz_code',
    content: '리스트 [10,20,30]의 합을 for문으로 구해 출력하세요.',
    initialCode: 'nums = [10, 20, 30]\ntotal = 0\nfor n in nums:\n    total += n\nprint(total)',
    expectedOutputs: ['60'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트 [1,2,3][-1]의 값은?',
    options: ["3","1","에러"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '음수 인덱스는 뒤에서부터입니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: 'for x in [1,2,3]: 은 x에 무엇을 대입하나요?',
    options: ["리스트의 각 원소를 순서대로","리스트 전체를 한 번에","인덱스 번호만"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '원소를 하나씩 꺼내 x에 대입합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['리스트의 값을 찾아 지우려면 ', ' 를 씁니다.'],
    wordBank: ["remove()","pop()","append()"],
    answer: ["remove()"],
    hint: '값으로 찾아 지웁니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['for x in 리스트: 는 x에 원소를 ', ' 대입합니다.'],
    wordBank: ["하나씩 순서대로","전체 한 번에","거꾸로만"],
    answer: ["하나씩 순서대로"],
    hint: '차례대로 하나씩 꺼냅니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [\'a\',\'b\',\'c\']에서 \'b\'를 remove로 지우고 출력하세요.',
    initialCode: 'letters = [\'a\', \'b\', \'c\']\n# remove를 사용하세요.',
    expectedOutputs: ['[\'a\', \'c\']'],
    hint: 'letters.remove(\'b\')\nprint(letters)'
  },
            {
    type: 'quiz_code',
    content: '리스트에 \'egg\'가 있는지 in으로 확인해 출력하세요.',
    initialCode: 'cart = [\'milk\', \'egg\', \'bread\']\nprint(\'egg\' in cart)',
    expectedOutputs: ['True'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3]과 튜플 (4,5,6)의 길이를 각각 더해 출력하세요.',
    initialCode: 'a = [1, 2, 3]\nb = (4, 5, 6)\nprint(len(a) + len(b))',
    expectedOutputs: ['6'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '리스트를 오름차순 정렬하는 메서드는?',
    options: ["sort()","order()","arrange()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: 'sort()가 오름차순 정렬입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['리스트를 오름차순 정렬하려면 ', ' 를 씁니다.'],
    wordBank: ["sort()","len()","index()"],
    answer: ["sort()"],
    hint: 'sort()를 씁니다.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4,5]에서 최댓값을 max()로 출력하세요.',
    initialCode: 'nums = [1, 2, 3, 4, 5]\nprint(max(nums))',
    expectedOutputs: ['5'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '스스로 좋아하는 과일 3개를 리스트로 만들고, 첫 번째를 단일 튜플로 감싸 출력해보세요.',
    initialCode: '# 백지 상태입니다.',
    expectedOutputs: ['(\'사과\',)'],
    hint: 'fruits = [\'사과\', \'바나나\', \'포도\']\nprint((fruits[0],))'
  }
          ]
        ]
      },
      {
        id: 'node_5_5',
        title: '🏆 티어 1 클리어 🏆',
        guidebook: ["티어 1의 모든 내용을 종합한 최종 보스전입니다!","print부터 튜플까지, 배운 모든 무기를 활용해 문제를 해결하세요.","💡 자주 틀리는 유형: 여러 개념이 섞이면 어디서부터 풀어야 할지 막막해함","🚀 해결 팁: 문제를 작은 단계로 쪼개 하나씩 순서대로 해결해보세요."],
        lessons: [
          [
            {
    type: 'quiz_multiple_choice',
    content: '파이썬에서 코드 블록을 구분하는 방법은?',
    options: ["들여쓰기","중괄호 {}","세미콜론 ;"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 들여쓰기로 코드 블록을 구분합니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (1)',
    sentenceParts: ['파이썬은 코드 블록을 ', ' 로 구분합니다.'],
    wordBank: ["들여쓰기","중괄호","세미콜론"],
    answer: ["들여쓰기"],
    hint: '들여쓰기가 핵심입니다.'
  },
            {
    type: 'quiz_code',
    content: '이름(name=\'파이써니스타\')으로 \'축하합니다, 파이써니스타님!\'을 출력하세요.',
    initialCode: 'name = \'파이써니스타\'\nprint(\'축하합니다, \' + name + \'!\')  # \'님\'이 빠졌어요!',
    expectedOutputs: ['축하합니다, 파이써니스타님!'],
    hint: 'name + \'님\'으로 고치세요.'
  },
            {
    type: 'quiz_code',
    content: '1부터 10까지 숫자 중 짝수의 합을 구해 출력하세요.',
    initialCode: 'total = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        total += i\nprint(total)',
    expectedOutputs: ['30'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [1,2,3,4,5]에서 3보다 큰 값만 담은 새 리스트를 만들어 출력하세요.',
    initialCode: 'nums = [1, 2, 3, 4, 5]\nresult = []\nfor n in nums:\n    if n > 3:\n        result.append(n)\nprint(result)',
    expectedOutputs: ['[4, 5]'],
    hint: '이미 정답입니다. 실행해보세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '다음 중 변경 불가능한(immutable) 자료형은?',
    options: ["튜플","리스트","딕셔너리"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '튜플은 한 번 만들면 값을 바꿀 수 없어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (2)',
    sentenceParts: ['값을 바꿀 수 없는 자료형은 ', ' 입니다.'],
    wordBank: ["튜플","리스트","딕셔너리"],
    answer: ["튜플"],
    hint: '튜플은 읽기 전용입니다.'
  },
            {
    type: 'quiz_code',
    content: '점수 리스트 [70,85,90,60]의 평균을 구해 출력하세요.',
    initialCode: 'scores = [70, 85, 90, 60]\ntotal = 0\nfor s in scores:\n    total += s\nprint(total / len(scores))',
    expectedOutputs: ['76.25'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '점수 85가 합격선 60 이상이면서 90 미만이면 \'B등급\'을 출력하세요.',
    initialCode: 'score = 85\nif score >= 60 or score < 90:\n    print(\'B등급\')  # or을 and로 고쳐야 정확합니다!',
    expectedOutputs: ['B등급'],
    hint: 'and로 바꾸세요.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '조건이 참인 동안 반복하는 데 더 적합한 것은?',
    options: ["while","for","둘 다 아님"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '조건 기반 반복은 while의 특기입니다.'
  },
            {
    type: 'quiz_multiple_choice',
    content: '리스트 [1,2,3]과 튜플 (1,2,3) 중 값 수정이 가능한 것은?',
    options: ["리스트","튜플","둘 다 불가능"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '리스트는 자유롭게 수정할 수 있어요.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (3)',
    sentenceParts: ['조건이 참인 동안 반복하는 문법은 ', ' 입니다.'],
    wordBank: ["while","for","if"],
    answer: ["while"],
    hint: '조건 기반 반복문입니다.'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (4)',
    sentenceParts: ['리스트는 대괄호, 튜플은 ', ' 를 사용합니다.'],
    wordBank: ["소괄호","중괄호","콜론"],
    answer: ["소괄호"],
    hint: '괄호 모양이 다릅니다.'
  },
            {
    type: 'quiz_code',
    content: '1부터 30까지 숫자 중 3의 배수이면서 5의 배수인 첫 값을 찾아 출력하세요.',
    initialCode: 'for i in range(1, 31):\n    if i % 3 == 0 and i % 5 == 0:\n        print(i)\n        break',
    expectedOutputs: ['15'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '리스트 [3,1,4,1,5]를 정렬한 뒤 첫 값을 출력하세요.',
    initialCode: 'nums = [3, 1, 4, 1, 5]\nnums.sort()\nprint(nums[0])',
    expectedOutputs: ['1'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '\'Python\'이라는 단어를 거꾸로 뒤집어 출력하세요.',
    initialCode: 'word = \'Python\'\nprint(word[::-1])',
    expectedOutputs: ['nohtyP'],
    hint: '이미 정답입니다. 슬라이싱 [::-1]은 문자열을 뒤집어줍니다.'
  }
          ],
          [
            {
    type: 'quiz_multiple_choice',
    content: '티어1을 완료하면 다음에 배우는 것은?',
    options: ["함수와 딕셔너리 (티어2)","이 과정이 마지막이다","처음부터 다시 시작"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '코딩에그의 여정은 계속됩니다!'
  },
            {
    type: 'quiz_word_bank',
    content: '단어 블록 빈칸 채우기 (5)',
    sentenceParts: ['티어1을 마치면 다음은 ', ' 을 배웁니다.'],
    wordBank: ["함수와 딕셔너리","이 과정의 끝","알파벳"],
    answer: ["함수와 딕셔너리"],
    hint: '여정은 계속됩니다!'
  },
            {
    type: 'quiz_code',
    content: '1부터 5까지의 팩토리얼을 구해 출력하세요.',
    initialCode: 'result = 1\nfor i in range(1, 6):\n    result *= i\nprint(result)',
    expectedOutputs: ['120'],
    hint: '이미 정답입니다. 실행해보세요.'
  },
            {
    type: 'quiz_code',
    content: '티어1 클리어를 자축하며 \'나는 이제 파이썬 비기너를 졸업했다!\'를 출력해보세요.',
    initialCode: '# 백지 상태입니다. 자유롭게 완성해보세요!',
    expectedOutputs: ['나는 이제 파이썬 비기너를 졸업했다!'],
    hint: 'print(\'나는 이제 파이썬 비기너를 졸업했다!\')'
  }
          ]
        ]
      }
    ]
  }
];
