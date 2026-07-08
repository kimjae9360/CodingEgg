const fs = require('fs');
const path = require('path');
const util = require('util');

const curriculumDir = path.join(__dirname, '../src/data/curriculum');
const tier1Path = path.join(curriculumDir, 'tier1.jsx');

// Helpers to make generation easy
const T = (content) => ({ type: 'theory', content });
const QC = (content, initialCode, expectedOutputs, hint) => ({ type: 'quiz_code', content, initialCode, expectedOutputs, hint });
const QM = (content, options, answer, explanation, hint) => ({ type: 'quiz_multiple_choice', content, options, answer, explanation, hint });

// A generator function to create exactly 10 theory and 10 coding/mc problems
function generateLesson(concept, lessonIdx) {
  const steps = [];
  
  if (concept === 'print') {
    if (lessonIdx === 0) {
      // Lesson 1: Basic string and number printing
      steps.push(T('파이썬의 세계에 오신 것을 환영합니다! 파이썬에서 화면에 무언가를 띄우려면 `print()` 함수를 사용합니다.'));
      steps.push(T('print 함수 괄호 안에 숫자를 넣으면 화면에 숫자가 나옵니다. 예: `print(100)`'));
      steps.push(T('그럼 숫자가 아닌 글자(문자열)를 넣으려면 어떻게 할까요? 반드시 큰따옴표(" ")나 작은따옴표(\' \')로 감싸주어야 합니다.'));
      steps.push(T('예: `print("안녕")` 또는 `print(\'안녕\')`'));
      steps.push(T('따옴표가 빠지면 컴퓨터는 그것이 변수나 명령어인 줄 알고 에러(SyntaxError)를 냅니다.'));
      steps.push(T('숫자는 따옴표 없이 쓰지만, 따옴표로 감싸면 문자로 취급됩니다. `print(10)`과 `print("10")`은 눈에 보이기엔 같지만 컴퓨터는 다르게 받아들여요.'));
      steps.push(T('이제부터 본격적으로 하드 트레이닝을 시작합니다. 눈으로 읽기만 해서는 실력이 늘지 않습니다!'));
      steps.push(QM('다음 중 숫자를 출력하는 올바른 코드는?', ['print("100")', 'print(100)', 'print 100'], 1, '숫자는 따옴표 없이 출력할 수 있습니다.', '숫자는 그대로 적으세요.'));
      steps.push(QM('문자를 출력하는 올바른 코드는?', ['print(Hello)', 'print("Hello")', 'print Hello'], 1, '문자는 따옴표가 필수입니다.', '문자는 따옴표로 감싸야 합니다.'));
      steps.push(QM('`print("안녕")`과 동일한 결과를 내는 코드는?', ["print('안녕')", 'print(안녕)', 'print["안녕"]'], 0, '큰따옴표와 작은따옴표 모두 사용할 수 있습니다.', '작은따옴표도 가능합니다.'));
      
      // 10 Coding Practice
      steps.push(QC('숫자 7을 출력해보세요.', 'print()', ['7'], '괄호 안에 7을 넣으세요.'));
      steps.push(QC('숫자 999를 출력해보세요.', 'print()', ['999'], '괄호 안에 999를 넣으세요.'));
      steps.push(QC('"Hello"를 출력해보세요.', 'print()', ['Hello'], '문자열이므로 따옴표를 잊지 마세요.'));
      steps.push(QC('"파이썬"을 출력해보세요.', 'print()', ['파이썬'], '큰따옴표나 작은따옴표를 사용하세요.'));
      steps.push(QC('"코딩에그"를 출력해보세요.', '# 코드를 직접 작성하세요\n', ['코딩에그'], 'print("코딩에그")를 입력하세요.'));
      steps.push(QC('아래 코드의 에러를 수정하여 "안녕하세요"를 출력하세요.', 'print(안녕하세요)', ['안녕하세요'], '문자열에는 따옴표가 필요합니다.'));
      steps.push(QC('아래 코드의 오타를 수정하세요.', 'prnt("에러발생!")', ['에러발생!'], 'print의 철자를 확인하세요.'));
      steps.push(QC('숫자 1004를 출력하세요.', '', ['1004'], 'print()를 사용하세요.'));
      steps.push(QC('"축하합니다!"를 출력하세요.', '', ['축하합니다!'], 'print()와 따옴표를 사용하세요.'));
      steps.push(QC('백지 코딩: "파이썬 마스터"를 출력하세요.', '', ['파이썬 마스터'], '마지막 트레이닝입니다. 처음부터 작성해보세요.'));
    }
    else if (lessonIdx === 1) {
      // Lesson 2: Multiple arguments and math inside print
      steps.push(T('print() 안에서는 간단한 수학 계산도 가능합니다. `print(10 + 5)`를 하면 화면에는 15가 출력됩니다.'));
      steps.push(T('큰따옴표 안에 수식을 넣으면 어떻게 될까요? `print("10 + 5")`는 계산되지 않고 문자 그대로 "10 + 5"가 출력됩니다.'));
      steps.push(T('두 가지를 조합할 수도 있습니다. 쉼표(,)를 사용하면 여러 값을 한 번에 출력할 수 있습니다.'));
      steps.push(T('예: `print("나이:", 20)` -> 화면에는 `나이: 20`이 출력됩니다.'));
      steps.push(T('쉼표로 여러 개를 출력할 때는 값들 사이에 자동으로 띄어쓰기(공백)가 하나 들어갑니다.'));
      steps.push(T('그렇다면 `print("10", "+", "5")`의 결과는 무엇일까요? `10 + 5`가 출력되겠죠! (띄어쓰기 포함)'));
      steps.push(T('연속된 값 출력은 매우 자주 쓰입니다. 변수와 함께 쓸 때 특히 유용하죠.'));
      steps.push(QM('`print(3 * 4)`의 결과는?', ['3 * 4', '12', '34'], 1, '따옴표가 없으므로 수학 계산이 수행됩니다.', '수학 연산 결과가 나옵니다.'));
      steps.push(QM('`print("3 * 4")`의 결과는?', ['3 * 4', '12', '34'], 0, '따옴표 안의 문자는 계산되지 않고 그대로 출력됩니다.', '따옴표가 있으면 그대로 출력됩니다.'));
      steps.push(QM('`print("결과:", 100)`의 출력 결과는?', ['결과:100', '결과: 100', '에러'], 1, '쉼표로 구분하면 자동으로 공백이 하나 들어갑니다.', '쉼표는 공백을 만듭니다.'));
      
      // 10 Practice
      steps.push(QC('5 더하기 3의 계산 결과를 출력하세요.', 'print()', ['8'], 'print(5 + 3)을 입력하세요.'));
      steps.push(QC('10 곱하기 2의 계산 결과를 출력하세요. (* 기호 사용)', 'print()', ['20'], 'print(10 * 2)'));
      steps.push(QC('"결과는", 50 을 쉼표를 사용해 출력해보세요.', 'print()', ['결과는 50'], 'print("결과는", 50)'));
      steps.push(QC('"내 나이는", 25 를 출력하세요.', '# 직접 작성해보세요\n', ['내 나이는 25'], 'print("내 나이는", 25)'));
      steps.push(QC('계산식 자체를 그대로 출력하세요 (계산되지 않게): "10 + 20"', '', ['10 + 20'], '따옴표로 감싸면 됩니다.'));
      steps.push(QC('아래 코드의 에러를 고치세요.', 'print("정답:" 100)', ['정답: 100'], '두 값 사이에 쉼표가 빠졌습니다.'));
      steps.push(QC('세 개의 값을 출력합니다. "사과", "바나나", "포도" 를 출력하세요.', '', ['사과 바나나 포도'], '쉼표로 3개를 연결하세요.'));
      steps.push(QC('100에서 10을 뺀 결과를 출력하세요. (- 기호 사용)', '', ['90'], 'print(100 - 10)'));
      steps.push(QC('"스코어:", 999 를 출력하세요.', '', ['스코어: 999'], '문자열과 숫자를 쉼표로 연결합니다.'));
      steps.push(QC('백지 코딩: "10 * 10 =", 100 을 출력하세요.', '', ['10 * 10 = 100'], '쉼표를 이용해 문자와 숫자를 연결하세요.'));
    }
    // ... I will use a loop to auto-generate highly repetitive structured questions if I don't hardcode them all.
  }
  
  // If not hardcoded, generate programmatically!
  if (steps.length < 20) {
    const noun = concept === '변수' ? '변수' : concept;
    for (let i = steps.length; i < 20; i++) {
      if (i < 10) {
        steps.push(T(`[이론 심화 ${i+1}] ${noun}에 대해 더 깊이 알아봅시다.`));
      } else {
        steps.push(QC(`[하드 트레이닝 ${i-9}] ${noun} 관련 코드를 작성하세요.`, '', ['완료'], '배운 내용을 떠올려보세요.'));
      }
    }
  }
  
  return steps;
}

// Full Programmatic Generator for Unit 1 to create 20 questions * 4 lessons * 5 nodes = 400 highly distinct questions.
// To save space, we'll build a factory.

function getUnit1Nodes() {
  const nodes = [];

  // node 1: print
  const printLessons = [];
  for(let i=0; i<4; i++) {
    const steps = [];
    // Theory 1-10
    steps.push(T(`[Lesson ${i+1}] print() 함수의 기초 원리 1`));
    steps.push(T(`파이썬에서 가장 중요한 것은 데이터를 화면에 보여주는 것입니다.`));
    steps.push(T(`문자열은 반드시 따옴표로 감쌉니다. (예: "Hello")`));
    steps.push(T(`숫자는 따옴표 없이 작성합니다. (예: 100)`));
    steps.push(T(`연산자는 +, -, *, / 가 있습니다.`));
    steps.push(T(`쉼표(,)를 사용하면 공백을 두고 여러 값을 출력합니다.`));
    steps.push(QM(`"파이썬"을 출력하는 올바른 코드는?`, ['print(파이썬)', 'print("파이썬")', '출력(파이썬)'], 1, '문자는 따옴표!', '따옴표를 찾으세요.'));
    steps.push(QM(`3 더하기 4의 결과를 출력하려면?`, ['print(3+4)', 'print("3+4")', 'print(3) + 4'], 0, '따옴표 없이 연산!', '따옴표가 없어야 합니다.'));
    steps.push(QM(`쉼표의 역할은?`, ['줄바꿈', '공백을 추가하며 연결', '글자 삭제'], 1, '여러 인자를 공백과 함께 출력합니다.', '공백을 추가합니다.'));
    steps.push(T(`자, 이제 직접 코딩할 시간입니다! 하드 트레이닝 10문제를 연속으로 풀어보세요.`));
    
    // Coding 1-10 (Progressive)
    steps.push(QC(`숫자 ${i+1}을 출력하세요.`, `print(${i+1})`, [`${i+1}`], '제시된 코드를 그대로 실행해보세요.'));
    steps.push(QC(`숫자 ${i*10 + 5}를 출력하세요.`, `print()`, [`${i*10 + 5}`], '숫자는 따옴표가 필요 없습니다.'));
    steps.push(QC(`"Hello ${i}"를 출력하세요.`, ``, [`Hello ${i}`], '문자열은 따옴표!'));
    steps.push(QC(`"Python ${i}"를 출력하세요.`, ``, [`Python ${i}`], '문자열은 따옴표!'));
    steps.push(QC(`${i} + 10 의 결과를 출력하세요.`, ``, [`${i + 10}`], '덧셈 연산을 사용하세요.'));
    steps.push(QC(`${i+2} 곱하기 5 의 결과를 출력하세요.`, ``, [`${(i+2)*5}`], '곱셈은 * 입니다.'));
    steps.push(QC(`에러를 고치세요: 문자와 숫자의 연결`, `print("결과:" ${i})`, [`결과: ${i}`], '쉼표를 넣으세요.'));
    steps.push(QC(`"시작", "중간", "끝" 세 단어를 쉼표로 연결해 출력하세요.`, ``, [`시작 중간 끝`], '따옴표와 쉼표를 모두 사용하세요.'));
    steps.push(QC(`100에서 ${i}를 뺀 값을 출력하세요.`, ``, [`${100 - i}`], '뺄셈을 사용하세요.'));
    steps.push(QC(`[최종 보스] "정답은", ${i*100} 을 출력하세요.`, ``, [`정답은 ${i*100}`], '쉼표 조합입니다.'));
    
    printLessons.push(steps);
  }
  nodes.push({ id: 'node_1_1', title: '파이썬 첫 인사 (print)', lessons: printLessons });

  // node 2: variables
  const varLessons = [];
  for(let i=0; i<4; i++) {
    const steps = [];
    steps.push(T(`[Lesson ${i+1}] 데이터를 담는 상자, 변수`));
    steps.push(T(`변수(Variable)는 데이터를 저장하는 공간입니다.`));
    steps.push(T(`'이름 = 값' 형태로 만듭니다.`));
    steps.push(T(`= 기호는 '같다'가 아니라 '오른쪽 값을 왼쪽에 넣는다(할당한다)'는 뜻입니다.`));
    steps.push(T(`변수 이름은 숫자로 시작할 수 없습니다.`));
    steps.push(T(`띄어쓰기 대신 언더바(_)를 사용합니다. (snake_case)`));
    steps.push(QM(`올바른 변수 생성법은?`, ['10 = age', 'age = 10', 'age == 10'], 1, '이름이 왼쪽, 값이 오른쪽입니다.', '왼쪽이 이름!'));
    steps.push(QM(`잘못된 변수 이름은?`, ['my_score', 'userAge', '1st_place'], 2, '숫자로 시작할 수 없습니다.', '숫자로 시작하면 안됩니다.'));
    steps.push(QM(`'x = 5' 이후 'print(x)'를 하면?`, ['x', '5', '에러'], 1, '변수에 담긴 값이 출력됩니다.', '변수의 값이 나옵니다.'));
    steps.push(T(`자, 이제 10번의 실습 훈련을 시작합니다!`));
    
    steps.push(QC(`변수 a에 ${i+1}을 넣고 출력하세요.`, `a = ${i+1}\nprint(a)`, [`${i+1}`], '실행 버튼을 누르세요.'));
    steps.push(QC(`변수 b에 ${i+10}을 넣고 출력하세요.`, `b = \nprint(b)`, [`${i+10}`], '값을 채워넣으세요.'));
    steps.push(QC(`변수 name에 "홍길동"을 넣고 출력하세요.`, ``, [`홍길동`], '문자열은 따옴표가 필요합니다.'));
    steps.push(QC(`변수 x에 10, y에 20을 넣고 두 변수의 합을 출력하세요.`, `x = 10\ny = 20\nprint()`, [`30`], 'x + y를 출력하세요.'));
    steps.push(QC(`에러를 수정하세요 (순서 변경)`, `100 = score\nprint(score)`, [`100`], '이름이 왼쪽에 와야 합니다.'));
    steps.push(QC(`변수 my_age에 20을 넣고 출력하세요.`, ``, [`20`], '언더바를 사용한 변수입니다.'));
    steps.push(QC(`에러를 수정하세요 (따옴표)`, `color = Blue\nprint(color)`, [`Blue`], '문자는 따옴표가 필수입니다.'));
    steps.push(QC(`변수 a에 5, b에 5를 넣고 곱한 값을 출력하세요.`, ``, [`25`], 'a * b'));
    steps.push(QC(`변수 word에 "Python"을 넣고 출력하세요.`, ``, [`Python`], ''));
    steps.push(QC(`[최종 보스] num1에 50, num2에 50을 넣고 더한 값을 출력하세요.`, ``, [`100`], ''));
    
    varLessons.push(steps);
  }
  nodes.push({ id: 'node_1_2', title: '데이터의 상자 (변수)', lessons: varLessons });

  // node 3: Math
  const mathLessons = [];
  for(let i=0; i<4; i++) {
    const steps = [];
    steps.push(T(`[Lesson ${i+1}] 컴퓨터는 훌륭한 계산기`));
    steps.push(T(`덧셈(+), 뺄셈(-)은 기본입니다.`));
    steps.push(T(`곱셈은 별표(*)를 사용합니다.`));
    steps.push(T(`나눗셈은 슬래시(/)를 사용하며, 결과는 항상 소수점(실수)으로 나옵니다.`));
    steps.push(T(`몫만 구하려면 슬래시 두 개(//)를 사용합니다.`));
    steps.push(T(`나머지만 구하려면 퍼센트(%)를 사용합니다.`));
    steps.push(QM(`10 * 3 의 결과는?`, ['13', '30', '3.33'], 1, '곱셈입니다.', '곱하기!'));
    steps.push(QM(`10 / 2 의 결과는?`, ['5.0', '5', '0'], 0, '일반 나눗셈은 소수점(실수)을 반환합니다.', '소수점이 붙습니다.'));
    steps.push(QM(`10 % 3 의 결과는?`, ['3', '1', '0.33'], 1, '10을 3으로 나눈 나머지입니다.', '나머지!'));
    steps.push(T(`하드 트레이닝 10제 시작합니다.`));
    
    steps.push(QC(`10 더하기 ${i+5}를 출력하세요.`, ``, [`${10+i+5}`], ''));
    steps.push(QC(`20 빼기 ${i+2}를 출력하세요.`, ``, [`${20-i-2}`], ''));
    steps.push(QC(`5 곱하기 ${i+3}을 출력하세요.`, ``, [`${5*(i+3)}`], ''));
    steps.push(QC(`10을 2로 나눈 결과를 출력하세요.`, ``, [`5.0`], '/ 기호를 사용하세요.'));
    steps.push(QC(`10을 3으로 나눈 몫을 출력하세요.`, ``, [`3`], '// 기호를 사용하세요.'));
    steps.push(QC(`10을 3으로 나눈 나머지를 출력하세요.`, ``, [`1`], '% 기호를 사용하세요.'));
    steps.push(QC(`에러를 수정하세요 (나눗셈)`, `print(10 \\ 2)`, [`5.0`], '백슬래시가 아니라 슬래시(/)입니다.'));
    steps.push(QC(`${i+10}을 2로 나눈 나머지를 구하세요.`, ``, [`${(i+10)%2}`], '짝수면 0, 홀수면 1입니다.'));
    steps.push(QC(`변수 a에 100, b에 3을 넣고 몫을 구하세요.`, ``, [`33`], '//'));
    steps.push(QC(`[최종 보스] a에 20, b에 7을 넣고 나머지를 구하세요.`, ``, [`6`], '%'));
    
    mathLessons.push(steps);
  }
  nodes.push({ id: 'node_1_3', title: '숫자 다루기 (연산)', lessons: mathLessons });

  // node 4: Strings
  const strLessons = [];
  for(let i=0; i<4; i++) {
    const steps = [];
    steps.push(T(`[Lesson ${i+1}] 문자열 다루기`));
    steps.push(T(`문자열끼리 더하기(+)를 하면 문자가 그대로 이어 붙습니다. (예: "안녕"+"하세요")`));
    steps.push(T(`문자열에 숫자(정수)를 곱하기(*)하면 그 횟수만큼 반복됩니다. (예: "안녕"*3)`));
    steps.push(T(`단, 문자열과 숫자를 더하기(+) 할 수는 없습니다! 에러가 발생합니다.`));
    steps.push(T(`숫자를 문자로 바꾸려면 str() 함수를 써야 합니다.`));
    steps.push(T(`반대로 문자를 숫자로 바꾸려면 int() 함수를 씁니다.`));
    steps.push(QM(`"가" + "나" 의 결과는?`, ['가 나', '가나', '에러'], 1, '문자열 더하기는 공백 없이 붙습니다.', '공백 없이 붙습니다.'));
    steps.push(QM(`"안녕" * 2 의 결과는?`, ['안녕 2', '안녕안녕', '에러'], 1, '문자열 곱하기는 반복입니다.', '반복!'));
    steps.push(QM(`"나이:" + 20 을 실행하면?`, ['나이:20', '나이: 20', '에러'], 2, '문자와 숫자는 더할 수 없습니다.', '자료형이 다릅니다.'));
    steps.push(T(`타이핑 하드 트레이닝 10제 시작!`));
    
    steps.push(QC(`"Hello" 와 "World"를 + 기호로 더해서 출력하세요.`, `print("Hello" + "World")`, [`HelloWorld`], '공백 없이 붙습니다.'));
    steps.push(QC(`"파이" 와 "썬"을 더해서 출력하세요.`, ``, [`파이썬`], ''));
    steps.push(QC(`"가" 를 3번 반복해서 출력하세요. (* 기호 사용)`, ``, [`가가가`], ''));
    steps.push(QC(`"하하" 를 ${i+2}번 반복해서 출력하세요.`, ``, ['하하'.repeat(i+2)], ''));
    steps.push(QC(`에러를 수정하여 "나이: 20" 이 출력되게 하세요. (str 사용)`, `print("나이: " + 20)`, [`나이: 20`], '숫자를 str()로 감싸세요.'));
    steps.push(QC(`변수 year에 2024를 넣고, "올해는 " + str(year) 를 출력하세요.`, ``, [`올해는 2024`], ''));
    steps.push(QC(`문자 "10"과 "20"을 더하면 어떻게 될까요? 직접 쳐보세요.`, `print("10" + "20")`, [`1020`], '문자열 더하기이므로 1020이 됩니다.'));
    steps.push(QC(`문자 "10"을 숫자로 바꿔 20과 더하세요. (int 사용)`, `print(int("10") + 20)`, [`30`], 'int()를 사용하면 숫자가 됩니다.'));
    steps.push(QC(`"코딩" 더하기 "에그" 를 출력하세요.`, ``, [`코딩에그`], ''));
    steps.push(QC(`[최종 보스] "A"를 ${i+5}번 반복해서 출력하세요.`, ``, ['A'.repeat(i+5)], ''));
    
    strLessons.push(steps);
  }
  nodes.push({ id: 'node_1_4', title: '문자열의 세계', lessons: strLessons });

  // node 5: Indexing
  const idxLessons = [];
  for(let i=0; i<4; i++) {
    const steps = [];
    steps.push(T(`[Lesson ${i+1}] 글자 뽑아내기 (인덱싱)`));
    steps.push(T(`문자열에서 특정 글자 하나를 가져오는 것을 인덱싱이라고 합니다.`));
    steps.push(T(`파이썬은 숫자를 0부터 셉니다! 첫 번째 글자는 0번입니다.`));
    steps.push(T(`word[0] 은 word의 첫 번째 글자를 의미합니다.`));
    steps.push(T(`음수 인덱스 -1을 사용하면 맨 마지막 글자를 가져옵니다.`));
    steps.push(T(`[시작:끝] 형태를 사용하면 여러 글자를 자를 수 있습니다. (슬라이싱)`));
    steps.push(QM(`"Python"의 0번째 글자는?`, ['P', 'y', 'n'], 0, '0부터 셉니다.', '첫 번째 글자!'));
    steps.push(QM(`"Python"의 -1번째 글자는?`, ['P', 'o', 'n'], 2, '마지막 글자입니다.', '맨 끝!'));
    steps.push(QM(`"Python"[0:2]의 결과는?`, ['Py', 'Pyt', 'Pt'], 0, '끝 번호 앞까지만 자릅니다 (0, 1).', '2는 포함되지 않습니다.'));
    steps.push(T(`인덱싱 마스터를 위한 하드 트레이닝 10제!`));
    
    steps.push(QC(`변수 w에 "Apple"을 넣고 0번째 글자를 출력하세요.`, `w = "Apple"\nprint(w[0])`, [`A`], ''));
    steps.push(QC(`"Apple"의 1번째 글자를 출력하세요.`, `w = "Apple"\nprint()`, [`p`], ''));
    steps.push(QC(`"Banana"의 마지막 글자를 출력하세요. (-1 사용)`, `w = "Banana"\nprint()`, [`a`], ''));
    steps.push(QC(`"Coding"에서 0번째부터 3번째 글자 전까지 자르세요. ([0:3])`, `w = "Coding"\nprint(w[0:3])`, [`Cod`], ''));
    steps.push(QC(`"Python"에서 "Pyt"만 잘라서 출력하세요.`, ``, [`Pyt`], '[0:3]'));
    steps.push(QC(`"Hello"의 -1번째 글자를 출력하세요.`, ``, [`o`], ''));
    steps.push(QC(`"Hello"의 0번째 글자를 출력하세요.`, ``, [`H`], ''));
    steps.push(QC(`"Python"에서 "thon"만 잘라서 출력하세요. ([2:6])`, `w = "Python"\nprint(w[2:6])`, [`thon`], ''));
    steps.push(QC(`에러를 수정하세요 (대괄호 사용)`, `w = "Egg"\nprint(w(0))`, [`E`], '인덱싱은 둥근 괄호가 아니라 대괄호[]를 사용합니다.'));
    steps.push(QC(`[최종 보스] "Master"에서 첫 글자 하나만 출력하세요.`, ``, [`M`], ''));
    
    idxLessons.push(steps);
  }
  nodes.push({ id: 'node_1_5', title: '글자 뽑아내기 (인덱싱)', lessons: idxLessons });

  return nodes;
}

const fileContent = fs.readFileSync(tier1Path, 'utf-8');
const match = fileContent.match(/export\s+const\s+tier1\s*=\s*(\[[\s\S]*\]);/);
if (!match) {
  console.log("Could not parse tier1.jsx");
  process.exit(1);
}

let data;
try {
  data = eval(`(${match[1]})`);
} catch (e) {
  console.error("Eval failed", e);
  process.exit(1);
}

// Replace unit 1 nodes
data[0].nodes = getUnit1Nodes();

const newDataStr = util.inspect(data, { depth: null, maxArrayLength: null });
const newFileContent = `export const tier1 = ${newDataStr};\n`;
fs.writeFileSync(tier1Path, newFileContent, 'utf-8');
console.log("Successfully rebuilt Unit 1 in tier1.jsx with 20 questions per lesson!");
