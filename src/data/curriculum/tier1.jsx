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
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 화면에 문자를 출력하기 위해 사용하는 함수는?',
    options: ["print()","show()","display()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬의 가장 기본적인 출력 함수입니다.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - print() 함수 안에 문자를 넣을 때 지켜야 할 규칙은?',
    options: ["따옴표로 감싼다","괄호를 두 번 쓴다","무조건 대문자로 쓴다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열은 따옴표가 필수입니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 다음 중 숫자를 출력하는 올바른 코드는?',
    options: ["print(100)","print\"100\"","print 100"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '함수는 항상 소괄호()를 사용합니다.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 여러 개의 값을 공백으로 띄워 출력하려면 어떤 기호를 쓸까요?',
    options: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '값들을 나열할 때 쓰는 기호입니다.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - print() 안을 아무것도 없이 비워두면 어떻게 될까요?',
    options: ["빈 줄(엔터)이 출력된다","에러가 난다","0이 출력된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '줄바꿈 역할을 하게 됩니다.'
  },
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['화면에 인사하려면 ', ' 을 씁니다.'],
    wordBank: ["print(\"안녕\")","print(안녕)","show(\"안녕\")"],
    answer: ["print(\"안녕\")"],
    hint: '문자열은 따옴표가 필요해요.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['숫자를 출력할 땐 ', ' 을 씁니다.'],
    wordBank: ["print(100)","print\"100\"","print(\"100\")"],
    answer: ["print(100)"],
    hint: '숫자는 따옴표 없이 씁니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['두 값을 띄어 쓸 땐 ', ' 를 사용합니다.'],
    wordBank: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: [", (쉼표)"],
    hint: '콤마를 사용해보세요.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['빈 줄을 만들 땐 ', ' 만 씁니다.'],
    wordBank: ["print()","print(\" \")","print(0)"],
    answer: ["print()"],
    hint: '아무것도 넣지 마세요.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['문자와 숫자를 함께 출력하려면 ', ' 로 연결합니다.'],
    wordBank: [", (쉼표)","& (앤드)","- (빼기)"],
    answer: [", (쉼표)"],
    hint: '여러 인자를 넣을 땐 쉼표를 써요.'
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
          ],
          [
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 화면에 문자를 출력하기 위해 사용하는 함수는?',
    options: ["print()","show()","display()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬의 가장 기본적인 출력 함수입니다.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - print() 함수 안에 문자를 넣을 때 지켜야 할 규칙은?',
    options: ["따옴표로 감싼다","괄호를 두 번 쓴다","무조건 대문자로 쓴다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열은 따옴표가 필수입니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 다음 중 숫자를 출력하는 올바른 코드는?',
    options: ["print(100)","print\"100\"","print 100"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '함수는 항상 소괄호()를 사용합니다.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 여러 개의 값을 공백으로 띄워 출력하려면 어떤 기호를 쓸까요?',
    options: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '값들을 나열할 때 쓰는 기호입니다.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - print() 안을 아무것도 없이 비워두면 어떻게 될까요?',
    options: ["빈 줄(엔터)이 출력된다","에러가 난다","0이 출력된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '줄바꿈 역할을 하게 됩니다.'
  },
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['화면에 인사하려면 ', ' 을 씁니다.'],
    wordBank: ["print(\"안녕\")","print(안녕)","show(\"안녕\")"],
    answer: ["print(\"안녕\")"],
    hint: '문자열은 따옴표가 필요해요.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['숫자를 출력할 땐 ', ' 을 씁니다.'],
    wordBank: ["print(100)","print\"100\"","print(\"100\")"],
    answer: ["print(100)"],
    hint: '숫자는 따옴표 없이 씁니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['두 값을 띄어 쓸 땐 ', ' 를 사용합니다.'],
    wordBank: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: [", (쉼표)"],
    hint: '콤마를 사용해보세요.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['빈 줄을 만들 땐 ', ' 만 씁니다.'],
    wordBank: ["print()","print(\" \")","print(0)"],
    answer: ["print()"],
    hint: '아무것도 넣지 마세요.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['문자와 숫자를 함께 출력하려면 ', ' 로 연결합니다.'],
    wordBank: [", (쉼표)","& (앤드)","- (빼기)"],
    answer: [", (쉼표)"],
    hint: '여러 인자를 넣을 땐 쉼표를 써요.'
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
          ],
          [
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 화면에 문자를 출력하기 위해 사용하는 함수는?',
    options: ["print()","show()","display()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬의 가장 기본적인 출력 함수입니다.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - print() 함수 안에 문자를 넣을 때 지켜야 할 규칙은?',
    options: ["따옴표로 감싼다","괄호를 두 번 쓴다","무조건 대문자로 쓴다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열은 따옴표가 필수입니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 다음 중 숫자를 출력하는 올바른 코드는?',
    options: ["print(100)","print\"100\"","print 100"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '함수는 항상 소괄호()를 사용합니다.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 여러 개의 값을 공백으로 띄워 출력하려면 어떤 기호를 쓸까요?',
    options: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '값들을 나열할 때 쓰는 기호입니다.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - print() 안을 아무것도 없이 비워두면 어떻게 될까요?',
    options: ["빈 줄(엔터)이 출력된다","에러가 난다","0이 출력된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '줄바꿈 역할을 하게 됩니다.'
  },
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['화면에 인사하려면 ', ' 을 씁니다.'],
    wordBank: ["print(\"안녕\")","print(안녕)","show(\"안녕\")"],
    answer: ["print(\"안녕\")"],
    hint: '문자열은 따옴표가 필요해요.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['숫자를 출력할 땐 ', ' 을 씁니다.'],
    wordBank: ["print(100)","print\"100\"","print(\"100\")"],
    answer: ["print(100)"],
    hint: '숫자는 따옴표 없이 씁니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['두 값을 띄어 쓸 땐 ', ' 를 사용합니다.'],
    wordBank: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: [", (쉼표)"],
    hint: '콤마를 사용해보세요.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['빈 줄을 만들 땐 ', ' 만 씁니다.'],
    wordBank: ["print()","print(\" \")","print(0)"],
    answer: ["print()"],
    hint: '아무것도 넣지 마세요.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['문자와 숫자를 함께 출력하려면 ', ' 로 연결합니다.'],
    wordBank: [", (쉼표)","& (앤드)","- (빼기)"],
    answer: [", (쉼표)"],
    hint: '여러 인자를 넣을 땐 쉼표를 써요.'
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
          ],
          [
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 화면에 문자를 출력하기 위해 사용하는 함수는?',
    options: ["print()","show()","display()"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬의 가장 기본적인 출력 함수입니다.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - print() 함수 안에 문자를 넣을 때 지켜야 할 규칙은?',
    options: ["따옴표로 감싼다","괄호를 두 번 쓴다","무조건 대문자로 쓴다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '문자열은 따옴표가 필수입니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 다음 중 숫자를 출력하는 올바른 코드는?',
    options: ["print(100)","print\"100\"","print 100"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '함수는 항상 소괄호()를 사용합니다.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 여러 개의 값을 공백으로 띄워 출력하려면 어떤 기호를 쓸까요?',
    options: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '값들을 나열할 때 쓰는 기호입니다.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - print() 안을 아무것도 없이 비워두면 어떻게 될까요?',
    options: ["빈 줄(엔터)이 출력된다","에러가 난다","0이 출력된다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '줄바꿈 역할을 하게 됩니다.'
  },
            { type: 'theory', content: '파이썬에서 화면에 글자를 보여주려면 print()를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['화면에 인사하려면 ', ' 을 씁니다.'],
    wordBank: ["print(\"안녕\")","print(안녕)","show(\"안녕\")"],
    answer: ["print(\"안녕\")"],
    hint: '문자열은 따옴표가 필요해요.'
  },
            { type: 'theory', content: '문자는 꼭 따옴표로 감싸야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['숫자를 출력할 땐 ', ' 을 씁니다.'],
    wordBank: ["print(100)","print\"100\"","print(\"100\")"],
    answer: ["print(100)"],
    hint: '숫자는 따옴표 없이 씁니다.'
  },
            { type: 'theory', content: '숫자는 따옴표가 필요 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['두 값을 띄어 쓸 땐 ', ' 를 사용합니다.'],
    wordBank: [", (쉼표)","+ (더하기)",". (마침표)"],
    answer: [", (쉼표)"],
    hint: '콤마를 사용해보세요.'
  },
            { type: 'theory', content: '여러 개를 출력할 땐 쉼표(,)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['빈 줄을 만들 땐 ', ' 만 씁니다.'],
    wordBank: ["print()","print(\" \")","print(0)"],
    answer: ["print()"],
    hint: '아무것도 넣지 마세요.'
  },
            { type: 'theory', content: 'print() 안은 비워두면 빈 줄이 출력돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[print] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['문자와 숫자를 함께 출력하려면 ', ' 로 연결합니다.'],
    wordBank: [", (쉼표)","& (앤드)","- (빼기)"],
    answer: [", (쉼표)"],
    hint: '여러 인자를 넣을 땐 쉼표를 써요.'
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
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 변수에 데이터를 넣을 때 사용하는 기호는?',
    options: ["= (등호)","== (같다)",": (콜론)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '오른쪽의 값을 왼쪽 상자에 넣는다는 의미입니다.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 다음 중 올바른 변수 이름은?',
    options: ["my_name","1st_name","my name"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '변수명은 숫자로 시작할 수 없고 띄어쓰기가 안 됩니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 변수 x에 숫자 5를 저장하는 코드는?',
    options: ["x = 5","5 = x","x == 5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '왼쪽에 변수 이름, 오른쪽에 값을 적습니다.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 변수 a와 A는 파이썬에서 어떻게 취급될까요?',
    options: ["서로 다른 변수이다","같은 변수이다","대문자 변수는 쓸 수 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 대소문자를 엄격하게 구분합니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 저장된 변수의 값을 확인하려면 어떻게 할까요?',
    options: ["print(변수명)","show(변수명)","print(변수명)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '출력 함수를 사용하세요.'
  },
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['상자에 값을 넣으려면 ', ' 를 씁니다.'],
    wordBank: ["a = 10","10 = a","a == 10"],
    answer: ["a = 10"],
    hint: '이름이 항상 왼쪽에 와야 해요.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['변수 이름에 띄어쓰기 대신 ', ' 를 씁니다.'],
    wordBank: ["_ (언더바)","- (빼기)","* (별)"],
    answer: ["_ (언더바)"],
    hint: '언더스코어를 씁니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['변수의 값을 출력하려면 ', ' 를 합니다.'],
    wordBank: ["print(a)","print(\"a\")","show(a)"],
    answer: ["print(a)"],
    hint: '따옴표를 쓰면 문자 a가 출력돼요.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬은 대소문자를 ', ' 합니다.'],
    wordBank: ["구분","무시","통일"],
    answer: ["구분"],
    hint: 'A와 a는 다릅니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['변수 이름은 ', ' 로 시작할 수 없습니다.'],
    wordBank: ["숫자","영문자","언더바"],
    answer: ["숫자"],
    hint: '숫자가 맨 앞에 오면 안 돼요.'
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
          ],
          [
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 변수에 데이터를 넣을 때 사용하는 기호는?',
    options: ["= (등호)","== (같다)",": (콜론)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '오른쪽의 값을 왼쪽 상자에 넣는다는 의미입니다.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 다음 중 올바른 변수 이름은?',
    options: ["my_name","1st_name","my name"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '변수명은 숫자로 시작할 수 없고 띄어쓰기가 안 됩니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 변수 x에 숫자 5를 저장하는 코드는?',
    options: ["x = 5","5 = x","x == 5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '왼쪽에 변수 이름, 오른쪽에 값을 적습니다.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 변수 a와 A는 파이썬에서 어떻게 취급될까요?',
    options: ["서로 다른 변수이다","같은 변수이다","대문자 변수는 쓸 수 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 대소문자를 엄격하게 구분합니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 저장된 변수의 값을 확인하려면 어떻게 할까요?',
    options: ["print(변수명)","show(변수명)","print(변수명)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '출력 함수를 사용하세요.'
  },
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['상자에 값을 넣으려면 ', ' 를 씁니다.'],
    wordBank: ["a = 10","10 = a","a == 10"],
    answer: ["a = 10"],
    hint: '이름이 항상 왼쪽에 와야 해요.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['변수 이름에 띄어쓰기 대신 ', ' 를 씁니다.'],
    wordBank: ["_ (언더바)","- (빼기)","* (별)"],
    answer: ["_ (언더바)"],
    hint: '언더스코어를 씁니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['변수의 값을 출력하려면 ', ' 를 합니다.'],
    wordBank: ["print(a)","print(\"a\")","show(a)"],
    answer: ["print(a)"],
    hint: '따옴표를 쓰면 문자 a가 출력돼요.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬은 대소문자를 ', ' 합니다.'],
    wordBank: ["구분","무시","통일"],
    answer: ["구분"],
    hint: 'A와 a는 다릅니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['변수 이름은 ', ' 로 시작할 수 없습니다.'],
    wordBank: ["숫자","영문자","언더바"],
    answer: ["숫자"],
    hint: '숫자가 맨 앞에 오면 안 돼요.'
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
          ],
          [
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 변수에 데이터를 넣을 때 사용하는 기호는?',
    options: ["= (등호)","== (같다)",": (콜론)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '오른쪽의 값을 왼쪽 상자에 넣는다는 의미입니다.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 다음 중 올바른 변수 이름은?',
    options: ["my_name","1st_name","my name"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '변수명은 숫자로 시작할 수 없고 띄어쓰기가 안 됩니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 변수 x에 숫자 5를 저장하는 코드는?',
    options: ["x = 5","5 = x","x == 5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '왼쪽에 변수 이름, 오른쪽에 값을 적습니다.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 변수 a와 A는 파이썬에서 어떻게 취급될까요?',
    options: ["서로 다른 변수이다","같은 변수이다","대문자 변수는 쓸 수 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 대소문자를 엄격하게 구분합니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 저장된 변수의 값을 확인하려면 어떻게 할까요?',
    options: ["print(변수명)","show(변수명)","print(변수명)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '출력 함수를 사용하세요.'
  },
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['상자에 값을 넣으려면 ', ' 를 씁니다.'],
    wordBank: ["a = 10","10 = a","a == 10"],
    answer: ["a = 10"],
    hint: '이름이 항상 왼쪽에 와야 해요.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['변수 이름에 띄어쓰기 대신 ', ' 를 씁니다.'],
    wordBank: ["_ (언더바)","- (빼기)","* (별)"],
    answer: ["_ (언더바)"],
    hint: '언더스코어를 씁니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['변수의 값을 출력하려면 ', ' 를 합니다.'],
    wordBank: ["print(a)","print(\"a\")","show(a)"],
    answer: ["print(a)"],
    hint: '따옴표를 쓰면 문자 a가 출력돼요.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬은 대소문자를 ', ' 합니다.'],
    wordBank: ["구분","무시","통일"],
    answer: ["구분"],
    hint: 'A와 a는 다릅니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['변수 이름은 ', ' 로 시작할 수 없습니다.'],
    wordBank: ["숫자","영문자","언더바"],
    answer: ["숫자"],
    hint: '숫자가 맨 앞에 오면 안 돼요.'
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
          ],
          [
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 변수에 데이터를 넣을 때 사용하는 기호는?',
    options: ["= (등호)","== (같다)",": (콜론)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '오른쪽의 값을 왼쪽 상자에 넣는다는 의미입니다.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 다음 중 올바른 변수 이름은?',
    options: ["my_name","1st_name","my name"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '변수명은 숫자로 시작할 수 없고 띄어쓰기가 안 됩니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 변수 x에 숫자 5를 저장하는 코드는?',
    options: ["x = 5","5 = x","x == 5"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '왼쪽에 변수 이름, 오른쪽에 값을 적습니다.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 변수 a와 A는 파이썬에서 어떻게 취급될까요?',
    options: ["서로 다른 변수이다","같은 변수이다","대문자 변수는 쓸 수 없다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 대소문자를 엄격하게 구분합니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 저장된 변수의 값을 확인하려면 어떻게 할까요?',
    options: ["print(변수명)","show(변수명)","print(변수명)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '출력 함수를 사용하세요.'
  },
            { type: 'theory', content: '변수는 데이터를 담는 상자입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['상자에 값을 넣으려면 ', ' 를 씁니다.'],
    wordBank: ["a = 10","10 = a","a == 10"],
    answer: ["a = 10"],
    hint: '이름이 항상 왼쪽에 와야 해요.'
  },
            { type: 'theory', content: '이름 = 값 형태로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['변수 이름에 띄어쓰기 대신 ', ' 를 씁니다.'],
    wordBank: ["_ (언더바)","- (빼기)","* (별)"],
    answer: ["_ (언더바)"],
    hint: '언더스코어를 씁니다.'
  },
            { type: 'theory', content: '변수 이름은 숫자로 시작할 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['변수의 값을 출력하려면 ', ' 를 합니다.'],
    wordBank: ["print(a)","print(\"a\")","show(a)"],
    answer: ["print(a)"],
    hint: '따옴표를 쓰면 문자 a가 출력돼요.'
  },
            { type: 'theory', content: '띄어쓰기 대신 언더바(_)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬은 대소문자를 ', ' 합니다.'],
    wordBank: ["구분","무시","통일"],
    answer: ["구분"],
    hint: 'A와 a는 다릅니다.'
  },
            { type: 'theory', content: '대소문자를 구분합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[var] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['변수 이름은 ', ' 로 시작할 수 없습니다.'],
    wordBank: ["숫자","영문자","언더바"],
    answer: ["숫자"],
    hint: '숫자가 맨 앞에 오면 안 돼요.'
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
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - math의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - math의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - math의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - math의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - math의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - math의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - math의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - math의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - math의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - math의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - math의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - math의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - math의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - math의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - math의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - math의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - math의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - math의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - math의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - math의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '더하기는 +, 빼기는 - 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '곱하기는 * (별표)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나누기는 / (슬래시)를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '나머지를 구할 땐 % 기호를 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '몫만 구할 땐 // 를 사용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[math] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_1_4',
        title: '문자열의 세계',
        guidebook: ["문자열끼리 더하기(+) 기호를 사용하면 두 문자가 하나로 합쳐집니다.","문자열에 숫자만큼 곱하기(*)를 하면 해당 문자열이 그 횟수만큼 반복됩니다.","💡 자주 틀리는 유형: 문자열 안에서 따옴표 종류 섞어 쓰기 (예: '안녕\")","🚀 해결 팁: 여는 따옴표와 닫는 따옴표의 종류를 무조건 똑같이 맞춰주세요."],
        lessons: [
          [
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - str의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - str의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - str의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - str의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - str의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - str의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - str의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - str의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - str의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - str의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - str의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - str의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - str의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - str의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - str의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - str의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - str의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - str의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - str의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - str의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '문자열은 작은따옴표나 큰따옴표로 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열끼리 더하면(+) 연결됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열에 숫자를 곱하면(*) 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '따옴표 종류를 섞어 쓰면 안 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '문자열 길이는 len()으로 확인합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[str] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
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
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱싱은 문자열에서 한 글자를 뽑아내는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '파이썬은 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스는 뒤에서부터 세는 거예요 (-1이 맨 뒤).' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([:])으로 여러 글자를 자를 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '공백도 하나의 글자로 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
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
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - bool의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - bool의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - bool의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - bool의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - bool의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - bool의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - bool의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - bool의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - bool의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - bool의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - bool의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - bool의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - bool의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - bool의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - bool의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - bool의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - bool의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - bool의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - bool의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - bool의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'True(참)와 False(거짓)를 불리언이라고 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '첫 글자는 반드시 대문자(T, F)여야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '같다는 기호는 == 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '다르다는 기호는 != 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '크거나 같다는 >= 입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[bool] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
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
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 만약(if) 조건문 끝에 반드시 붙여야 하는 기호는?',
    options: [": (콜론)","; (세미콜론)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '블록을 시작할 때 콜론을 씁니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - if문 아래의 코드가 실행되려면 어떤 규칙을 지켜야 할까요?',
    options: ["반드시 들여쓰기를 해야 한다","반드시 중괄호{}를 써야 한다","반드시 빈 줄을 넣어야 한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 들여쓰기로 묶음을 구분합니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 파이썬에서 기본적으로 권장하는 들여쓰기 간격은?',
    options: ["스페이스 4칸","스페이스 2칸","탭 2번"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '가장 널리 쓰이는 표준 띄어쓰기 횟수입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - if 조건이 거짓(False)이면 아래 들여쓰기된 코드는 어떻게 되나요?',
    options: ["실행되지 않고 무시된다","무조건 1번은 실행된다","에러가 발생한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '참일 때만 실행되는 것이 if문의 특징입니다.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - 다음 중 조건문의 구조로 올바른 것은?',
    options: ["if 조건:","if 조건","조건 if:"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '키워드, 조건, 콜론 순서입니다.'
  },
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['조건이 참일 때 실행하려면 ', ' 를 씁니다.'],
    wordBank: ["if","when","for"],
    answer: ["if"],
    hint: '만약~ 이라는 뜻입니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['조건문 끝에는 반드시 ', ' 기호가 들어갑니다.'],
    wordBank: [":",";","="],
    answer: [":"],
    hint: '콜론을 씁니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['조건문 아래 실행할 코드는 ', ' 를 해야 합니다.'],
    wordBank: ["들여쓰기","볼드처리","밑줄"],
    answer: ["들여쓰기"],
    hint: '스페이스바 4칸 띄우기입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['if 조건이 ', ' 일 때만 코드가 작동합니다.'],
    wordBank: ["True","False","None"],
    answer: ["True"],
    hint: '참이어야 작동해요.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['들여쓰기를 어기면 ', ' 가 발생합니다.'],
    wordBank: ["에러","경고문","그대로실행"],
    answer: ["에러"],
    hint: '문법 오류가 납니다.'
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
          ],
          [
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 만약(if) 조건문 끝에 반드시 붙여야 하는 기호는?',
    options: [": (콜론)","; (세미콜론)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '블록을 시작할 때 콜론을 씁니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - if문 아래의 코드가 실행되려면 어떤 규칙을 지켜야 할까요?',
    options: ["반드시 들여쓰기를 해야 한다","반드시 중괄호{}를 써야 한다","반드시 빈 줄을 넣어야 한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 들여쓰기로 묶음을 구분합니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 파이썬에서 기본적으로 권장하는 들여쓰기 간격은?',
    options: ["스페이스 4칸","스페이스 2칸","탭 2번"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '가장 널리 쓰이는 표준 띄어쓰기 횟수입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - if 조건이 거짓(False)이면 아래 들여쓰기된 코드는 어떻게 되나요?',
    options: ["실행되지 않고 무시된다","무조건 1번은 실행된다","에러가 발생한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '참일 때만 실행되는 것이 if문의 특징입니다.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - 다음 중 조건문의 구조로 올바른 것은?',
    options: ["if 조건:","if 조건","조건 if:"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '키워드, 조건, 콜론 순서입니다.'
  },
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['조건이 참일 때 실행하려면 ', ' 를 씁니다.'],
    wordBank: ["if","when","for"],
    answer: ["if"],
    hint: '만약~ 이라는 뜻입니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['조건문 끝에는 반드시 ', ' 기호가 들어갑니다.'],
    wordBank: [":",";","="],
    answer: [":"],
    hint: '콜론을 씁니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['조건문 아래 실행할 코드는 ', ' 를 해야 합니다.'],
    wordBank: ["들여쓰기","볼드처리","밑줄"],
    answer: ["들여쓰기"],
    hint: '스페이스바 4칸 띄우기입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['if 조건이 ', ' 일 때만 코드가 작동합니다.'],
    wordBank: ["True","False","None"],
    answer: ["True"],
    hint: '참이어야 작동해요.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['들여쓰기를 어기면 ', ' 가 발생합니다.'],
    wordBank: ["에러","경고문","그대로실행"],
    answer: ["에러"],
    hint: '문법 오류가 납니다.'
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
          ],
          [
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 만약(if) 조건문 끝에 반드시 붙여야 하는 기호는?',
    options: [": (콜론)","; (세미콜론)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '블록을 시작할 때 콜론을 씁니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - if문 아래의 코드가 실행되려면 어떤 규칙을 지켜야 할까요?',
    options: ["반드시 들여쓰기를 해야 한다","반드시 중괄호{}를 써야 한다","반드시 빈 줄을 넣어야 한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 들여쓰기로 묶음을 구분합니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 파이썬에서 기본적으로 권장하는 들여쓰기 간격은?',
    options: ["스페이스 4칸","스페이스 2칸","탭 2번"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '가장 널리 쓰이는 표준 띄어쓰기 횟수입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - if 조건이 거짓(False)이면 아래 들여쓰기된 코드는 어떻게 되나요?',
    options: ["실행되지 않고 무시된다","무조건 1번은 실행된다","에러가 발생한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '참일 때만 실행되는 것이 if문의 특징입니다.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - 다음 중 조건문의 구조로 올바른 것은?',
    options: ["if 조건:","if 조건","조건 if:"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '키워드, 조건, 콜론 순서입니다.'
  },
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['조건이 참일 때 실행하려면 ', ' 를 씁니다.'],
    wordBank: ["if","when","for"],
    answer: ["if"],
    hint: '만약~ 이라는 뜻입니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['조건문 끝에는 반드시 ', ' 기호가 들어갑니다.'],
    wordBank: [":",";","="],
    answer: [":"],
    hint: '콜론을 씁니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['조건문 아래 실행할 코드는 ', ' 를 해야 합니다.'],
    wordBank: ["들여쓰기","볼드처리","밑줄"],
    answer: ["들여쓰기"],
    hint: '스페이스바 4칸 띄우기입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['if 조건이 ', ' 일 때만 코드가 작동합니다.'],
    wordBank: ["True","False","None"],
    answer: ["True"],
    hint: '참이어야 작동해요.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['들여쓰기를 어기면 ', ' 가 발생합니다.'],
    wordBank: ["에러","경고문","그대로실행"],
    answer: ["에러"],
    hint: '문법 오류가 납니다.'
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
          ],
          [
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 만약(if) 조건문 끝에 반드시 붙여야 하는 기호는?',
    options: [": (콜론)","; (세미콜론)",". (마침표)"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '블록을 시작할 때 콜론을 씁니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - if문 아래의 코드가 실행되려면 어떤 규칙을 지켜야 할까요?',
    options: ["반드시 들여쓰기를 해야 한다","반드시 중괄호{}를 써야 한다","반드시 빈 줄을 넣어야 한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '파이썬은 들여쓰기로 묶음을 구분합니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 파이썬에서 기본적으로 권장하는 들여쓰기 간격은?',
    options: ["스페이스 4칸","스페이스 2칸","탭 2번"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '가장 널리 쓰이는 표준 띄어쓰기 횟수입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - if 조건이 거짓(False)이면 아래 들여쓰기된 코드는 어떻게 되나요?',
    options: ["실행되지 않고 무시된다","무조건 1번은 실행된다","에러가 발생한다"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '참일 때만 실행되는 것이 if문의 특징입니다.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - 다음 중 조건문의 구조로 올바른 것은?',
    options: ["if 조건:","if 조건","조건 if:"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '키워드, 조건, 콜론 순서입니다.'
  },
            { type: 'theory', content: 'if문은 조건이 참일 때만 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['조건이 참일 때 실행하려면 ', ' 를 씁니다.'],
    wordBank: ["if","when","for"],
    answer: ["if"],
    hint: '만약~ 이라는 뜻입니다.'
  },
            { type: 'theory', content: '조건 끝에는 꼭 콜론(:)을 적어요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['조건문 끝에는 반드시 ', ' 기호가 들어갑니다.'],
    wordBank: [":",";","="],
    answer: [":"],
    hint: '콜론을 씁니다.'
  },
            { type: 'theory', content: '실행할 코드는 반드시 들여쓰기(스페이스 4번)를 해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['조건문 아래 실행할 코드는 ', ' 를 해야 합니다.'],
    wordBank: ["들여쓰기","볼드처리","밑줄"],
    answer: ["들여쓰기"],
    hint: '스페이스바 4칸 띄우기입니다.'
  },
            { type: 'theory', content: '들여쓰기가 틀리면 에러가 납니다.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['if 조건이 ', ' 일 때만 코드가 작동합니다.'],
    wordBank: ["True","False","None"],
    answer: ["True"],
    hint: '참이어야 작동해요.'
  },
            { type: 'theory', content: '조건이 거짓이면 아무것도 실행하지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[if] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['들여쓰기를 어기면 ', ' 가 발생합니다.'],
    wordBank: ["에러","경고문","그대로실행"],
    answer: ["에러"],
    hint: '문법 오류가 납니다.'
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
        guidebook: ["else 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - else의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - else의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - else의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - else의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - else의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - else의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - else의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - else의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - else의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - else의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - else의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - else의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - else의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - else의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - else의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - else의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - else의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - else의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - else의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - else의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'else는 if 조건이 거짓일 때 실행됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 뒤에는 조건을 적지 않아요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'else 끝에도 콜론(:)이 필요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if 없이 else만 쓸 수는 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '들여쓰기 라인이 if와 똑같아야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[else] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_2_4',
        title: '여러 개의 조건 (elif)',
        guidebook: ["elif 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - elif의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - elif의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - elif의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - elif의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - elif의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - elif의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - elif의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - elif의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - elif의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - elif의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - elif의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - elif의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - elif의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - elif의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - elif의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - elif의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - elif의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - elif의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - elif의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - elif의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'elif는 또 다른 조건을 추가할 때 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'if와 else 사이에 들어갑니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'elif는 여러 번 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '위에서부터 차례대로 검사합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '참인 조건을 만나면 아래 조건은 무시해요.' },
            {
    type: 'quiz_word_bank',
    content: '[elif] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_2_5',
        title: '조건문 마스터 보스전',
        guidebook: ["cond_boss 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - cond_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - cond_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - cond_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - cond_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - cond_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - cond_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - cond_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - cond_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - cond_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - cond_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - cond_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - cond_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - cond_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - cond_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - cond_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - cond_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - cond_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - cond_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - cond_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - cond_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건문은 프로그램의 흐름을 결정합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '논리 연산자 and, or, not을 함께 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '중첩 조건문(if 안에 if)도 가능해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 복잡할수록 들여쓰기에 주의하세요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '테스트를 통해 모든 경우의 수를 확인해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[cond_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
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
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - while의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - while의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - while의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - while의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - while의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - while의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - while의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - while의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - while의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - while의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - while의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - while의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - while의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - while의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - while의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - while의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - while의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - while의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - while의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - while의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문은 조건이 참인 동안 계속 반복됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건 끝에 콜론(:)이 필요해요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '내부 코드는 반드시 들여쓰기를 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '조건이 영원히 참이면 무한 루프에 빠져요.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복을 멈출 조건을 내부에 꼭 만들어야 합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[while] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_3_2',
        title: '탈출구와 건너뛰기 (break / continue)',
        guidebook: ["break 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - break의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - break의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - break의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - break의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - break의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - break의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - break의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - break의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - break의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - break의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - break의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - break의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - break의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - break의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - break의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - break의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - break의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - break의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - break의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - break의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'break는 반복문을 즉시 탈출하는 마법어예요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 if문과 함께 쓰여 특정 조건에서 멈춥니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue는 이번 반복만 건너뛰고 다음 반복으로 가요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'continue 아래에 있는 코드는 무시됩니다.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'break와 continue는 반복문 안에서만 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[break] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
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
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - for의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - for의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - for의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - for의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - for의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - for의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - for의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - for의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - for의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - for의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - for의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - for의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - for의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - for의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - for의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - for의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - for의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - for의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - for의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - for의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for문은 리스트나 문자열을 처음부터 끝까지 훑을 때 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for 변수 in 리스트: 형태로 씁니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'in 뒤에는 여러 개가 들어있는 데이터가 와야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '횟수가 정해진 반복에 유리합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'while문보다 코드가 짧고 깔끔해요.' },
            {
    type: 'quiz_word_bank',
    content: '[for] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_3_4',
        title: '숫자 공장 (range)',
        guidebook: ["range 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - range의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - range의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - range의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - range의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - range의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - range의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - range의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - range의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - range의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - range의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - range의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - range의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - range의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - range의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - range의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - range의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - range의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - range의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - range의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - range의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'range()는 숫자 공장입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(5)는 0부터 4까지의 숫자를 만들어요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'range(1, 5)는 1부터 4까지를 만듭니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '세 번째 숫자를 넣으면 건너뛰는 간격(step)이 돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '주로 for문과 단짝으로 쓰입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[range] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_3_5',
        title: '반복문 마스터 보스전',
        guidebook: ["loop_boss 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - loop_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - loop_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - loop_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - loop_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - loop_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - loop_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - loop_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - loop_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - loop_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - loop_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - loop_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - loop_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - loop_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - loop_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - loop_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - loop_boss의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - loop_boss의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - loop_boss의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - loop_boss의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - loop_boss의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문은 코딩의 핵심 무기입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for와 while 중 상황에 맞는 것을 골라 써야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '이중 반복문(루프 안의 루프)도 많이 쓰여요.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '규칙성을 찾는 것이 제일 중요합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '무한 루프를 조심하세요!' },
            {
    type: 'quiz_word_bank',
    content: '[loop_boss] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
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
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트는 여러 데이터를 담는 가방이에요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '대괄호 [] 를 사용합니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '데이터 사이에 쉼표(,)를 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '숫자, 문자 등 여러 종류를 섞어 담을 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '빈 리스트는 [] 로 만들 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_4_2',
        title: '리스트 안의 보물 찾기',
        guidebook: ["list_idx 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_idx의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_idx의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_idx의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_idx의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_idx의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트도 문자열처럼 0번부터 순서를 셉니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '음수 인덱스(-1)도 쓸 수 있어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '슬라이싱([시작:끝])으로 리스트를 자를 수 있습니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '특정 위치의 값을 바꿀 수도 있어요 (a[0] = 10).' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '존재하지 않는 순서를 부르면 에러가 나요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_idx] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_4_3',
        title: '리스트 메서드 (추가와 삭제)',
        guidebook: ["list_met 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_met의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_met의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_met의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_met의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_met의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_met의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_met의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_met의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_met의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_met의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_met의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_met의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_met의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_met의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_met의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_met의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_met의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_met의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_met의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_met의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'append()는 리스트 맨 뒤에 값을 추가해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'insert()는 원하는 위치에 값을 쏙 넣어요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'remove()는 값을 찾아서 지워줍니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'pop()은 맨 뒤의 값을 빼내고 지워요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'sort()를 쓰면 순서대로 예쁘게 정렬돼요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_met] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_4_4',
        title: '리스트와 반복문의 콜라보',
        guidebook: ["list_loop 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_loop의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_loop의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_loop의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_loop의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - list_loop의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_loop의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_loop의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_loop의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_loop의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - list_loop의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_loop의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_loop의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_loop의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_loop의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - list_loop의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_loop의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_loop의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_loop의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_loop의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - list_loop의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '리스트와 for문은 환상의 짝꿍입니다.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'for item in my_list: 로 리스트 값을 하나씩 꺼내요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '인덱스가 필요하면 range(len(my_list))를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '리스트 안의 값을 모두 더하거나 찾을 때 유용해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '반복문 안에서 리스트를 수정할 땐 조심해야 해요.' },
            {
    type: 'quiz_word_bank',
    content: '[list_loop] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_4_5',
        title: '변경 불가능한 가방 (Tuple)',
        guidebook: ["tuple 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - tuple의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - tuple의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - tuple의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - tuple의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - tuple의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - tuple의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - tuple의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - tuple의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - tuple의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - tuple의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - tuple의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - tuple의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - tuple의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - tuple의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - tuple의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - tuple의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - tuple의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - tuple의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - tuple의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - tuple의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: '튜플은 리스트와 비슷하지만 소괄호 () 를 써요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '가장 큰 차이점은 한 번 만들면 값을 바꿀 수 없다는 거예요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '읽기 전용 리스트라고 생각하면 편해요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '추가, 삭제, 수정 메서드를 쓸 수 없어요.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: '속도가 리스트보다 약간 빠릅니다.' },
            {
    type: 'quiz_word_bank',
    content: '[tuple] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
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
        guidebook: ["final1 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final1의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final1의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final1의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final1의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final1의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final1의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final1의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final1의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final1의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final1의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final1의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final1의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final1의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final1의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final1의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final1의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final1의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final1의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final1의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final1의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final1의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final1의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final1] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_5_2',
        title: '비기너 종합 테스트 2',
        guidebook: ["final2 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final2의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final2의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final2의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final2의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final2의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final2의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final2의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final2의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final2의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final2의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final2의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final2의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final2의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final2의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final2의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final2의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final2의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final2의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final2의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final2의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final2의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final2의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final2] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_5_3',
        title: '비기너 종합 테스트 3',
        guidebook: ["final3 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final3의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final3의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final3의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final3의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final3의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final3의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final3의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final3의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final3의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final3의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final3의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final3의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final3의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final3의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final3의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final3의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final3의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final3의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final3의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final3의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final3의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final3의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final3] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_5_4',
        title: '비기너 종합 테스트 4',
        guidebook: ["final4 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final4의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final4의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final4의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final4의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final4의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final4의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final4의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final4의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final4의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final4의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final4의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final4의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final4의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final4의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final4의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final4의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final4의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final4의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final4의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final4의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final4의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final4의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final4] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      },
      {
        id: 'node_5_5',
        title: '🏆 티어 1 클리어 🏆',
        guidebook: ["final5 파트의 핵심 개념을 학습합니다.","주어진 문제의 지문을 꼼꼼히 읽고 조건에 맞게 코드를 설계하세요.","💡 자주 틀리는 유형: 문법 기호(콜론, 따옴표, 괄호) 누락","🚀 해결 팁: 에러 메시지 하단에 표시되는 힌트 문구를 적극 활용해보세요."],
        lessons: [
          [
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final5의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final5의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final5의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final5의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 1 - final5의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 33을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(33)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['33'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 36을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(36)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['36'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 39을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 39을 입력하세요.',
    expectedOutputs: ['39'],
    hint: '39 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 42을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 42을 입력하세요.',
    expectedOutputs: ['42'],
    hint: '42 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 45을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['45'],
    hint: 'print(45)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 48을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['48'],
    hint: 'print(48)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 51을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['51'],
    hint: 'print(51)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 54을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 54',
    expectedOutputs: ['54'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 57을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 57',
    expectedOutputs: ['57'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 60을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 60',
    expectedOutputs: ['60'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final5의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final5의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final5의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final5의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 2 - final5의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 63을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(63)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['63'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 66을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(66)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['66'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 69을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 69을 입력하세요.',
    expectedOutputs: ['69'],
    hint: '69 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 72을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 72을 입력하세요.',
    expectedOutputs: ['72'],
    hint: '72 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 75을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['75'],
    hint: 'print(75)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 78을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['78'],
    hint: 'print(78)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 81을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['81'],
    hint: 'print(81)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 84을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 84',
    expectedOutputs: ['84'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 87을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 87',
    expectedOutputs: ['87'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 90을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 90',
    expectedOutputs: ['90'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final5의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final5의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final5의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final5의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 3 - final5의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 93을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(93)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['93'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 96을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(96)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['96'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 99을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 99을 입력하세요.',
    expectedOutputs: ['99'],
    hint: '99 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 102을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 102을 입력하세요.',
    expectedOutputs: ['102'],
    hint: '102 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 105을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['105'],
    hint: 'print(105)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 108을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['108'],
    hint: 'print(108)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 111을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['111'],
    hint: 'print(111)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 114을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 114',
    expectedOutputs: ['114'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 117을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 117',
    expectedOutputs: ['117'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 120을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 120',
    expectedOutputs: ['120'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ],
          [
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final5의 핵심 원리에 대한 문제입니다. (1번)',
    options: ["맞는 설명 1","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final5의 핵심 원리에 대한 문제입니다. (2번)',
    options: ["맞는 설명 2","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final5의 핵심 원리에 대한 문제입니다. (3번)',
    options: ["맞는 설명 3","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final5의 핵심 원리에 대한 문제입니다. (4번)',
    options: ["맞는 설명 4","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_multiple_choice',
    content: '레슨 4 - final5의 핵심 원리에 대한 문제입니다. (5번)',
    options: ["맞는 설명 5","틀린 설명 A","틀린 설명 B"],
    answer: 0,
    explanation: '파이썬 문법의 핵심 개념입니다.',
    hint: '개념을 잘 떠올려보세요!'
  },
            { type: 'theory', content: 'final5의 기본 원리 1' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (1/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 2' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (2/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 3' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (3/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 4' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (4/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            { type: 'theory', content: 'final5의 기본 원리 5' },
            {
    type: 'quiz_word_bank',
    content: '[final5] 단어 블록 빈칸 채우기 (5/5)',
    sentenceParts: ['파이썬 코드는 ', ' 잘 짜야 합니다.'],
    wordBank: ["규칙에 맞게","아무렇게나","대충"],
    answer: ["규칙에 맞게"],
    hint: '규칙이 생명입니다.'
  },
            {
    type: 'quiz_code',
    content: '데이터 123을(를) 계산하는 코드를 작성하세요.',
    initialCode: 'prnt(123)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['123'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 126을(를) 확인하는 코드를 작성하세요.',
    initialCode: 'prnt(126)  # 에러가 납니다! 고쳐주세요.',
    expectedOutputs: ['126'],
    hint: 'print 함수의 철자를 확인하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 129을(를) 적용하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 129을 입력하세요.',
    expectedOutputs: ['129'],
    hint: '129 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '변수 132을(를) 테스트하는 코드를 작성하세요.',
    initialCode: 'print(  )  # 괄호 안에 132을 입력하세요.',
    expectedOutputs: ['132'],
    hint: '132 값을 넣어야 합니다.'
  },
            {
    type: 'quiz_code',
    content: '결과물 135을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['135'],
    hint: 'print(135)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '데이터 138을(를) 계산하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['138'],
    hint: 'print(138)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '값 141을(를) 확인하는 코드를 작성하세요.',
    initialCode: '# 여기서 직접 값을 출력해보세요.',
    expectedOutputs: ['141'],
    hint: 'print(141)을 직접 작성하세요.'
  },
            {
    type: 'quiz_code',
    content: '상태 144을(를) 적용하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 144',
    expectedOutputs: ['144'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '변수 147을(를) 테스트하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 147',
    expectedOutputs: ['147'],
    hint: '처음부터 완벽하게 작성해보세요.'
  },
            {
    type: 'quiz_code',
    content: '결과물 150을(를) 출력하는 코드를 작성하세요.',
    initialCode: '# 백지 코딩 트레이닝입니다. 목표값: 150',
    expectedOutputs: ['150'],
    hint: '처음부터 완벽하게 작성해보세요.'
  }
          ]
        ]
      }
    ]
  }
];
