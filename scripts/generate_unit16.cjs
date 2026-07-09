const fs = require('fs');
const outPath = 'src/data/curriculum/tier3.jsx';

function escapeContent(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

const TOPICS = {};

TOPICS.fstring = {
  mcq: [
    { q: "f-string을 사용하려면 문자열 따옴표 앞에 어떤 글자를 붙이나요?", opts: ["f", "s", "c"], a: 0, hint: "f-string의 f입니다." },
    { q: "f-string 안에서 변수 값을 출력하려면 어떤 괄호를 사용하나요?", opts: ["{} (중괄호)", "[] (대괄호)", "() (소괄호)"], a: 0, hint: "중괄호 안에 변수를 넣습니다." },
    { q: "f'{10 + 20}' 의 출력 결과는 무엇인가요?", opts: ["30", "10 + 20", "에러"], a: 0, hint: "중괄호 안의 수식은 계산되어 출력됩니다." },
    { q: "소수점 두 자리까지만 출력하는 f-string 포맷 지정자는?", opts: [":.2f", ":.2", ":2f"], a: 0, hint: "콜론 뒤에 .2f를 붙입니다." },
    { q: "f-string은 언제부터 도입되었나요?", opts: ["Python 3.6", "Python 2.7", "Python 3.0"], a: 0, hint: "비교적 최신 문법인 3.6부터 도입되었습니다." }
  ],
  wb: [
    { parts: ["문자열 따옴표 앞에 ", " 를 붙이면 f-string이 됩니다."], bank: ["f", "s", "format"], ans: [0], hint: "f입니다." },
    { parts: ["f-string 내부에서 변수는 ", " 로 감쌉니다."], bank: ["{} 중괄호", "[] 대괄호", "() 소괄호"], ans: [0], hint: "중괄호입니다." },
    { parts: ["f-string 안에서는 변수뿐만 아니라 ", " 도 직접 계산할 수 있습니다."], bank: ["수식(연산)", "함수 정의", "모듈 임포트"], ans: [0], hint: "수식(연산)입니다." },
    { parts: ["소수점 둘째 자리까지 출력하려면 변수 뒤에 ", " 를 붙입니다."], bank: [":.2f", ":.2", ":f"], ans: [0], hint: ":.2f 입니다." },
    { parts: ["기존의 %나 .format()보다 f-string이 코드가 훨씬 ", "."], bank: ["간결하고 읽기 쉽습니다", "길고 복잡합니다", "느리게 작동합니다"], ans: [0], hint: "간결하고 읽기 쉽습니다." }
  ],
  code: [
    { c: "f-string을 사용해 '나는 에그, 5살입니다'를 출력하세요.", i: "name = '에그'\nage = 5\n# f-string을 사용해 변수를 넣어보세요.\nprint(f'나는 {   }, {   }살입니다')", e: "나는 에그, 5살입니다", h: "print(f'나는 {name}, {age}살입니다')" },
    { c: "f-string의 중괄호 안에서 100 * 2를 계산하여 출력하세요.", i: "print(f'정답은 {  }입니다')", e: "정답은 200입니다", h: "print(f'정답은 {100 * 2}입니다')" },
    { c: "원주율(pi)을 소수점 둘째 자리까지만 출력하세요.", i: "pi = 3.141592\n# 포맷 지정자 :.2f 를 사용하세요.\nprint(f'원주율은 {  }입니다')", e: "원주율은 3.14입니다", h: "print(f'원주율은 {pi:.2f}입니다')" },
    { c: "리스트의 첫 번째 요소를 f-string으로 출력하세요.", i: "fruits = ['사과', '바나나', '딸기']\nprint(f'내가 좋아하는 과일은 {   }입니다')", e: "내가 좋아하는 과일은 사과입니다", h: "print(f'내가 좋아하는 과일은 {fruits[0]}입니다')" },
    { c: "이름과 점수를 딕셔너리에서 꺼내 f-string으로 출력하세요.", i: "user = {'name': '에그', 'score': 100}\n# 따옴표 충돌을 피하기 위해 바깥은 쌍따옴표(\"\")를 쓰세요.\nprint(f\"이름: {   }, 점수: {   }\")", e: "이름: 에그, 점수: 100", h: "print(f\"이름: {user['name']}, 점수: {user['score']}\")" },
    { c: "f-string과 upper() 메서드를 조합해 'HELLO'를 출력하세요.", i: "word = 'hello'\n# 중괄호 안에서 메서드 호출도 가능합니다.\nprint(f'{  }')", e: "HELLO", h: "print(f'{word.upper()}')" },
    { c: "함수 반환값을 f-string 내에서 직접 호출해 출력하세요.", i: "def get_price():\n    return 5000\nprint(f'가격은 {   }원입니다')", e: "가격은 5000원입니다", h: "print(f'가격은 {get_price()}원입니다')" },
    { c: "여러 줄 문자열(f\"\"\" \"\"\")과 f-string을 함께 사용해보세요.", i: "name = '에그'\nlevel = 10\nmsg = f\"\"\"\n캐릭터: {  }\n레벨: {  }\n\"\"\"\nprint(msg)", e: "\n캐릭터: 에그\n레벨: 10\n", h: "캐릭터: {name}\n레벨: {level}" },
    { c: "f-string 안에서 조건문(삼항 연산자)을 사용해보세요.", i: "score = 80\n# 60점 이상이면 '합격', 아니면 '불합격'을 중괄호 안에서 평가하세요.\nprint(f\"결과: {  }\")", e: "결과: 합격", h: "print(f\"결과: {'합격' if score >= 60 else '불합격'}\")" },
    { c: "f-string으로 숫자 1000000에 쉼표(,) 구분자를 넣어 출력하세요.", i: "money = 1000000\n# 콜론 뒤에 쉼표(:,)를 넣으면 천 단위 콤마가 생깁니다.\nprint(f'금액: {   }원')", e: "금액: 1,000,000원", h: "print(f'금액: {money:,}원')" },
    { c: "변수명과 값을 동시에 출력하는 f'{x=}' 문법을 사용해보세요 (디버깅용).", i: "x = 10\ny = 20\n# 중괄호 안을 x= 로 쓰면 x=10 형태로 출력됩니다.\nprint(f'{  }, {  }')", e: "x=10, y=20", h: "print(f'{x=}, {y=}')" },
    { c: "이름 변수(name='Python')와 나이 변수(age=30)를 만들어 f-string으로 'Python은 30년 되었습니다.'를 출력하세요.", i: "# 백지 상태입니다. 변수를 선언하고 f-string으로 출력해보세요.", e: "Python은 30년 되었습니다.", h: "name = 'Python'\nage = 30\nprint(f'{name}은 {age}년 되었습니다.')" }
  ]
};

TOPICS.list_comp = {
  mcq: [
    { q: "리스트를 한 줄로 짧게 생성하는 파이썬 특유의 문법은?", opts: ["리스트 컴프리헨션", "리스트 제너레이터", "리스트 익스텐션"], a: 0, hint: "List Comprehension입니다." },
    { q: "[x for x in range(3)] 의 결과는?", opts: ["[0, 1, 2]", "[1, 2, 3]", "에러"], a: 0, hint: "0, 1, 2가 리스트에 담깁니다." },
    { q: "[x*2 for x in [1, 2, 3]] 의 결과는?", opts: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "[1, 4, 9]"], a: 0, hint: "각 요소에 2가 곱해집니다." },
    { q: "조건문을 붙여 [x for x in range(5) if x % 2 == 0] 처럼 쓰면?", opts: ["짝수만 포함된다", "홀수만 포함된다", "에러가 난다"], a: 0, hint: "if문 조건이 참인 것만 필터링됩니다." },
    { q: "리스트 컴프리헨션의 장점이 아닌 것은?", opts: ["코드가 매우 길어진다", "실행 속도가 일반 for문보다 조금 빠르다", "코드가 한 줄로 간결해진다"], a: 0, hint: "오히려 코드가 짧아집니다." }
  ],
  wb: [
    { parts: ["리스트를 간결하게 생성하는 문법을 리스트 ", " (이)라고 부릅니다."], bank: ["컴프리헨션", "제너레이터", "익스텐션"], ans: [0], hint: "컴프리헨션입니다." },
    { parts: ["기본 구조는 [표현식 ", " 변수 in 반복가능객체] 입니다."], bank: ["for", "while", "if"], ans: [0], hint: "for를 사용합니다." },
    { parts: ["원하는 요소만 골라내려면 끝에 ", " 문을 추가할 수 있습니다."], bank: ["if", "else", "break"], ans: [0], hint: "if문으로 필터링합니다." },
    { parts: ["append() 메서드를 여러 번 호출하는 것보다 코드가 ", "."], bank: ["간결합니다", "복잡합니다", "어렵습니다"], ans: [0], hint: "매우 간결해집니다." },
    { parts: ["중첩된 for문이나 복잡한 조건문이 섞이면 일반 for문보다 가독성이 ", "."], bank: ["떨어질 수 있습니다", "항상 좋아집니다", "차이가 없습니다"], ans: [0], hint: "너무 길게 쓰면 오히려 읽기 힘들어집니다." }
  ],
  code: [
    { c: "1부터 5까지 들어있는 리스트를 컴프리헨션으로 만드세요.", i: "# [x for x in range(1, 6)] 형태를 사용하세요.\nnums = [  ]\nprint(nums)", e: "[1, 2, 3, 4, 5]", h: "nums = [x for x in range(1, 6)]" },
    { c: "리스트의 모든 값에 10씩 더한 새 리스트를 만드세요.", i: "old = [1, 2, 3]\nnew = [x +   for x in old]  # 빈칸을 채우세요.\nprint(new)", e: "[11, 12, 13]", h: "new = [x + 10 for x in old]" },
    { c: "리스트에서 짝수만 걸러내어 새 리스트를 만드세요.", i: "old = [1, 2, 3, 4, 5]\nnew = [x for x in old if   ]  # 짝수 조건(x % 2 == 0)을 적으세요.\nprint(new)", e: "[2, 4]", h: "new = [x for x in old if x % 2 == 0]" },
    { c: "문자열 리스트에서 길이가 3 이상인 단어만 모아보세요.", i: "words = ['사과', '바나나', '귤', '수박']\nlong_words = [w for w in words if   ]  # len(w) >= 3\nprint(long_words)", e: "['바나나']", h: "long_words = [w for w in words if len(w) >= 3]" },
    { c: "리스트의 각 문자열을 모두 대문자로 변환하세요.", i: "words = ['hello', 'world']\nup_words = [  for w in words]  # w.upper()를 호출하세요.\nprint(up_words)", e: "['HELLO', 'WORLD']", h: "up_words = [w.upper() for w in words]" },
    { c: "조건을 만족하면 A, 아니면 B를 넣는 삼항 연산자를 사용해보세요.", i: "nums = [1, -2, 3, -4]\n# x가 양수면 '양수', 아니면 '음수' ( [ '양수' if x > 0 else '음수' for x in nums ] )\nresult = [  for x in nums]\nprint(result)", e: "['양수', '음수', '양수', '음수']", h: "result = ['양수' if x > 0 else '음수' for x in nums]" },
    { c: "문자열 내부의 각 글자를 리스트로 쪼개보세요.", i: "text = 'python'\nchars = [  for c in text]  # c를 그대로 리스트에 담습니다.\nprint(chars)", e: "['p', 'y', 't', 'h', 'o', 'n']", h: "chars = [c for c in text]" },
    { c: "1부터 10 사이의 홀수들만 제곱하여 리스트로 만드세요.", i: "squares = [  for x in range(1, 11) if   ]\nprint(squares)", e: "[1, 9, 25, 49, 81]", h: "squares = [x**2 for x in range(1, 11) if x % 2 != 0]" },
    { c: "중첩 컴프리헨션: 구구단 2단, 3단 결과를 하나의 리스트에 담으세요.", i: "gugu = [x * y for x in [2, 3] for y in range(1, 10)]\n# 위 코드를 그대로 실행하여 결과를 확인하세요.\nprint(gugu)", e: "[2, 4, 6, 8, 10, 12, 14, 16, 18, 3, 6, 9, 12, 15, 18, 21, 24, 27]", h: "그대로 실행하면 됩니다." },
    { c: "딕셔너리 컴프리헨션: 리스트의 단어를 키, 그 길이를 값으로 갖는 딕셔너리를 만드세요.", i: "words = ['apple', 'egg']\n# {w: len(w) for w in words} 문법을 사용합니다.\nd = {  }\nprint(d)", e: "{'apple': 5, 'egg': 3}", h: "d = {w: len(w) for w in words}" },
    { c: "일반 for문으로 작성된 리스트 생성 코드를 컴프리헨션 한 줄로 압축해보세요.", i: "old = [10, 20, 30]\n# new = []\n# for x in old: new.append(x // 10)\nnew = [  ]\nprint(new)", e: "[1, 2, 3]", h: "new = [x // 10 for x in old]" },
    { c: "스스로 1부터 20까지 숫자 중 3의 배수만 문자열로 변환한 리스트를 만들어보세요.", i: "# 백지 상태입니다. 리스트 컴프리헨션을 사용해 만드세요.", e: "['3', '6', '9', '12', '15', '18']", h: "print([str(x) for x in range(1, 21) if x % 3 == 0])" }
  ]
};

TOPICS.enum_zip = {
  mcq: [
    { q: "반복문에서 값과 함께 '인덱스 번호'도 같이 뽑아주는 함수는?", opts: ["enumerate()", "zip()", "range()"], a: 0, hint: "인덱스와 값을 묶어주는 enumerate입니다." },
    { q: "두 개 이상의 리스트를 같은 인덱스끼리 짝지어주는 함수는?", opts: ["zip()", "enumerate()", "append()"], a: 0, hint: "지퍼처럼 맞물리게 하는 zip입니다." },
    { q: "for i, v in enumerate(['A', 'B']): 일 때, 첫 번째 루프에서 i와 v의 값은?", opts: ["i=0, v='A'", "i='A', v=0", "i=1, v='A'"], a: 0, hint: "i는 0부터 시작하는 인덱스입니다." },
    { q: "zip([1, 2], ['a', 'b', 'c']) 의 결과물 길이는?", opts: ["2", "3", "에러"], a: 0, hint: "가장 짧은 리스트 길이에 맞춰집니다." },
    { q: "enumerate를 사용할 때 시작 인덱스를 1로 바꾸려면?", opts: ["enumerate(lst, start=1)", "enumerate(lst, 1)", "둘 다 맞음"], a: 0, hint: "start 파라미터나 두 번째 인자로 넘기면 됩니다." }
  ],
  wb: [
    { parts: ["리스트의 값과 인덱스를 동시에 얻으려면 ", " 함수를 사용합니다."], bank: ["enumerate", "zip", "index"], ans: [0], hint: "enumerate입니다." },
    { parts: ["두 리스트를 병렬로 동시에 순회하려면 ", " 함수를 사용합니다."], bank: ["zip", "enumerate", "concat"], ans: [0], hint: "zip입니다." },
    { parts: ["zip()은 묶으려는 리스트들 중 길이가 가장 ", " 길이에 맞춰집니다."], bank: ["짧은", "긴", "무작위의"], ans: [0], hint: "짧은 길이에 맞춰집니다." },
    { parts: ["enumerate()의 두 번째 인자로 숫자를 넘기면 인덱스의 ", " 이(가) 바뀝니다."], bank: ["시작값", "끝값", "증가량"], ans: [0], hint: "시작값이 바뀝니다." },
    { parts: ["for i, val in enumerate(lst): 구조로 인덱스 추적 변수를 직접 만들 필요가 ", "."], bank: ["없어집니다", "계속 필요합니다", "두 배로 필요합니다"], ans: [0], hint: "없어집니다." }
  ],
  code: [
    { c: "enumerate를 사용해 과일 리스트의 인덱스와 값을 출력하세요.", i: "fruits = ['사과', '귤']\nfor i, f in   (fruits):\n    print(f'{i}: {f}')", e: "0: 사과\n1: 귤", h: "for i, f in enumerate(fruits):" },
    { c: "enumerate의 시작 번호를 1로 변경하여 순위를 출력하세요.", i: "rank = ['에그', '치킨']\nfor i, name in enumerate(rank,   ):  # 두 번째 인자로 1을 줍니다.\n    print(f'{i}등 {name}')", e: "1등 에그\n2등 치킨", h: "enumerate(rank, 1):" },
    { c: "zip을 사용해 두 리스트(이름, 점수)를 하나씩 짝지어 출력하세요.", i: "names = ['철수', '영희']\nscores = [100, 90]\nfor name, score in   (names, scores):\n    print(name, score)", e: "철수 100\n영희 90", h: "for name, score in zip(names, scores):" },
    { c: "길이가 다른 두 리스트를 zip으로 묶어보고 결과를 확인하세요.", i: "A = [1, 2, 3]\nB = ['a', 'b']\n# zip은 짧은 쪽인 B의 길이에 맞춰 두 번만 실행됩니다.\nfor num, char in zip(A, B):\n    print(num, char)", e: "1 a\n2 b", h: "위 코드를 그대로 실행합니다." },
    { c: "두 리스트를 zip으로 묶은 뒤 dict()를 사용해 바로 딕셔너리로 만드세요.", i: "keys = ['a', 'b']\nvals = [1, 2]\nd =   (zip(keys, vals))\nprint(d)", e: "{'a': 1, 'b': 2}", h: "d = dict(zip(keys, vals))" },
    { c: "세 개의 리스트도 zip으로 묶을 수 있습니다. 확인해 보세요.", i: "a = [1]\nb = [2]\nc = [3]\nfor x, y, z in zip(a, b, c):\n    print(x + y + z)", e: "6", h: "그대로 실행합니다." },
    { c: "enumerate로 순회하며 짝수 인덱스(0, 2...)인 항목만 출력하세요.", i: "data = ['A', 'B', 'C', 'D']\nfor i, v in enumerate(data):\n    if   :  # i가 짝수일 때\n        print(v)", e: "A\nC", h: "if i % 2 == 0:" },
    { c: "리스트 컴프리헨션과 zip을 결합하여 두 리스트의 합을 구하세요.", i: "A = [1, 2]\nB = [10, 20]\nsums = [x + y for x, y in   ]\nprint(sums)", e: "[11, 22]", h: "sums = [x + y for x, y in zip(A, B)]" },
    { c: "enumerate로 인덱스와 값을 튜플 리스트로 만들어 출력하세요.", i: "items = ['a', 'b']\n# list(enumerate(items)) 로 바로 리스트 변환이 가능합니다.\nprint(list(  ))", e: "[(0, 'a'), (1, 'b')]", h: "print(list(enumerate(items)))" },
    { c: "zip과 f-string을 활용해 '누구의 점수: 몇점' 형태로 출력하세요.", i: "users = ['에그', '치킨']\npoints = [50, 100]\nfor u, p in zip(users, points):\n    print(f'  ')  # u와 p를 이용해 포맷팅하세요", e: "에그의 점수: 50점\n치킨의 점수: 100점", h: "print(f'{u}의 점수: {p}점')" },
    { c: "enumerate와 zip을 동시에 쓸 수도 있습니다! 구조를 파악해보세요.", i: "names = ['가', '나']\nages = [10, 20]\n# i는 인덱스, (n, a)는 zip에서 나온 튜플입니다.\nfor i, (n, a) in enumerate(zip(names, ages)):\n    print(i, n, a)", e: "0 가 10\n1 나 20", h: "그대로 실행합니다." },
    { c: "리스트 [1, 2]와 [3, 4]를 zip으로 묶어 각 쌍을 한 줄씩 출력하세요.", i: "# 백지 상태입니다. 두 개의 리스트를 만들고 zip으로 출력해보세요.", e: "1 3\n2 4", h: "for a, b in zip([1, 2], [3, 4]):\n    print(a, b)" }
  ]
};

TOPICS.main_block = {
  mcq: [
    { q: "파이썬 스크립트를 직접 실행할 때 __name__ 변수에는 어떤 값이 들어가나요?", opts: ["'__main__'", "'__self__'", "파일명"], a: 0, hint: "직접 실행 시 '__main__'이 됩니다." },
    { q: "다른 파일에서 이 모듈을 import 하면 __name__에는 어떤 값이 들어가나요?", opts: ["해당 모듈의 이름(파일명)", "'__main__'", "'import'"], a: 0, hint: "파일명(모듈명)이 그대로 들어갑니다." },
    { q: "if __name__ == '__main__': 블록은 언제 주로 사용하나요?", opts: ["이 파일이 직접 실행될 때만 작동할 코드를 넣을 때", "모든 함수 선언을 감쌀 때", "클래스를 정의할 때"], a: 0, hint: "테스트 코드나 직접 실행 시의 진입점으로 씁니다." },
    { q: "파이썬에는 C/Java와 달리 고정된 main() 함수가 필수인가요?", opts: ["아니요, 위에서 아래로 순차 실행됩니다", "네, 반드시 main()을 만들어야 합니다", "파이썬 버전에 따라 다릅니다"], a: 0, hint: "스크립트 언어라 고정된 진입점 함수가 필수가 아닙니다." },
    { q: "VSCode 등 실무 파이썬 프로젝트에서 if __name__ ... 패턴은 왜 중요한가요?", opts: ["import 시 원치 않는 코드가 실행되는 것을 막아줍니다", "코드가 더 빨리 실행되게 해줍니다", "문법 에러를 방지합니다"], a: 0, hint: "모듈로 재사용할 때 부작용(사이드 이펙트)을 막습니다." }
  ],
  wb: [
    { parts: ["직접 실행한 파일의 내장 변수 __name__은 항상 ", " 문자열을 갖습니다."], bank: ["'__main__'", "파일명", "None"], ans: [0], hint: "'__main__' 입니다." },
    { parts: ["모듈로 import된 파일의 __name__은 ", " 을 갖습니다."], bank: ["모듈 이름", "'__main__'", "오류"], ans: [0], hint: "모듈의 고유 이름입니다." },
    { parts: ["if __name__ == '__main__': 아래의 코드는 파일이 모듈로 불려갈 땐 실행이 ", "."], bank: ["방지됩니다", "강제됩니다", "반복됩니다"], ans: [0], hint: "import 시에는 무시(방지)됩니다." },
    { parts: ["이 패턴을 사용하면 하나의 파일을 모듈로도 쓰고 ", " 스크립트로도 쓸 수 있습니다."], bank: ["독립적인 실행", "주석 전용", "에러 출력"], ans: [0], hint: "단독으로 실행할 수 있습니다." },
    { parts: ["실무에서는 보통 메인 로직을 main() 이라는 별도 함수로 빼고, 마지막 블록에서 이 함수를 ", " 합니다."], bank: ["호출", "삭제", "숨김"], ans: [0], hint: "호출(call)하여 실행합니다." }
  ],
  code: [
    { c: "현재 파일의 내장 변수 __name__ 값을 그대로 출력해보세요.", i: "print(__name__)", e: "__main__", h: "웹 브라우저의 파이썬 환경(Pyodide)에서도 메인 스크립트로 실행되어 __main__이 나옵니다." },
    { c: "if문을 사용해 직접 실행될 때만 '시작합니다'를 출력하게 하세요.", i: "if __name__ == '__main__':\n    print(  )", e: "시작합니다", h: "print('시작합니다')" },
    { c: "main() 함수를 만들고, 파일이 직접 실행될 때만 이 함수를 호출하세요.", i: "def main():\n    print('메인 함수 실행')\n\nif __name__ ==   :\n    main()", e: "메인 함수 실행", h: "if __name__ == '__main__':" },
    { c: "모듈로 import 될 상황을 시뮬레이션 해봅니다. __name__이 모듈명이라 가정하고 조건문을 작성하세요.", i: "current_name = 'my_module' # import된 상황 가정\nif current_name == '__main__':\n    print('직접 실행')\nelse:\n    print('모듈로 import 됨')", e: "모듈로 import 됨", h: "그대로 실행해 결과를 확인하세요." },
    { c: "함수 정의는 밖으로, 테스트 코드는 안에 넣어 분리하세요.", i: "def add(a, b):\n    return a + b\n# 아래 블록 안에 테스트 코드를 넣어주세요.\nif __name__ == '__main__':\n    print(add(2, 3))", e: "5", h: "그대로 실행하세요. 이렇게 짜면 add 함수만 다른 파일에서 안전하게 import할 수 있습니다." },
    { c: "파이썬 개발자들의 관용구를 똑같이 손으로 타이핑해 외워보세요.", i: "# if __name__ == '__main__': 를 타이핑하세요\n    print('Hello World!')", e: "Hello World!", h: "if __name__ == '__main__':\n    print('Hello World!')" },
    { c: "조건이 틀렸을 때는 아무것도 출력되지 않아야 합니다.", i: "if __name__ == 'other_module':\n    print('출력되지 않아야 함')", e: "", h: "__name__은 '__main__'이므로 조건이 거짓이 되어 아무것도 출력되지 않습니다." },
    { c: "만약 이 블록이 없다면? 함수 바깥 코드가 import 시 어떻게 무단 실행되는지 시뮬레이션 합니다.", i: "# if문 없이 바로 작성된 코드 (import 시 강제 실행됨)\nprint('파일이 로드되었습니다!')", e: "파일이 로드되었습니다!", h: "그대로 실행하세요." },
    { c: "main 함수 안에서 sys.argv(명령줄 인자)를 처리하는 패턴을 확인하세요.", i: "import sys\ndef main(args):\n    print('인자 개수:', len(args))\nif __name__ == '__main__':\n    main(sys.argv)", e: "인자 개수: 1", h: "브라우저 환경이라 기본 인자 1개(스크립트 이름 없음 등)로 동작합니다." },
    { c: "pass 키워드를 사용해 구조만 먼저 잡아보세요.", i: "def main():\n    pass\nif __name__ == '__main__':\n    pass\nprint('구조 잡기 완료')", e: "구조 잡기 완료", h: "그대로 실행하세요." },
    { c: "실전 구조: 메인 로직을 감싼 main()과 이를 호출하는 if 블록을 직접 완성하세요.", i: "def main():\n    print('앱 실행')\n\n# 여기에 if 블록을 작성하세요.", e: "앱 실행", h: "if __name__ == '__main__':\n    main()" },
    { c: "main() 함수를 만들어 '완성'을 출력하고, if __name__ == '__main__': 구조로 호출하세요.", i: "# 백지 상태입니다.", e: "완성", h: "def main():\n    print('완성')\nif __name__ == '__main__':\n    main()" }
  ]
};

TOPICS.lambda_map_filter = {
  mcq: [
    { q: "이름 없는 간단한 한 줄 함수를 만들 때 사용하는 키워드는?", opts: ["lambda", "def", "anon"], a: 0, hint: "파이썬의 익명 함수 키워드는 lambda입니다." },
    { q: "lambda x: x + 1 에 대한 설명으로 옳은 것은?", opts: ["입력 x에 1을 더해 반환한다", "x를 1로 만든다", "아무것도 반환하지 않는다"], a: 0, hint: "x를 받아 x + 1을 돌려주는 함수입니다." },
    { q: "리스트의 모든 원소에 특정 함수를 적용하는 내장 함수는?", opts: ["map()", "filter()", "apply()"], a: 0, hint: "값을 일괄 변환(매핑)해주는 map입니다." },
    { q: "리스트에서 조건이 참인 원소만 골라내는 내장 함수는?", opts: ["filter()", "map()", "select()"], a: 0, hint: "조건에 맞는 것만 걸러내는(필터링하는) filter입니다." },
    { q: "map()이나 filter()의 결과를 리스트로 보려면 어떻게 해야 하나요?", opts: ["list()로 감싸준다", "그냥 출력하면 된다", "dict()로 감싼다"], a: 0, hint: "결과가 이터레이터(Iterator)이므로 list()로 변환해야 합니다." }
  ],
  wb: [
    { parts: ["이름 없는 함수를 만들 때 ", " 키워드를 사용합니다."], bank: ["lambda", "def", "class"], ans: [0], hint: "lambda입니다." },
    { parts: ["lambda 인자: ", " 형식으로 콜론 뒤에 반환값을 적습니다."], bank: ["반환식", "return", "pass"], ans: [0], hint: "반환할 식(표현식)입니다." },
    { parts: ["리스트의 모든 요소를 일괄 변환할 땐 ", " 함수를 씁니다."], bank: ["map", "filter", "reduce"], ans: [0], hint: "map입니다." },
    { parts: ["리스트에서 조건에 맞는 요소만 추려낼 땐 ", " 함수를 씁니다."], bank: ["filter", "map", "extract"], ans: [0], hint: "filter입니다." },
    { parts: ["map과 filter의 결과는 반복 객체이므로 ", "()를 씌워 리스트로 만듭니다."], bank: ["list", "tuple", "dict"], ans: [0], hint: "list()입니다." }
  ],
  code: [
    { c: "lambda를 사용해 x에 10을 곱하는 함수를 만들고 5를 넣어 실행해보세요.", i: "times_ten =   x: x * 10\nprint(times_ten(5))", e: "50", h: "lambda x: x * 10" },
    { c: "lambda를 사용해 인자 x, y를 받아 두 수를 더하는 함수를 작성하세요.", i: "add = lambda x, y:   \nprint(add(2, 3))", e: "5", h: "lambda x, y: x + y" },
    { c: "map과 lambda를 사용해 리스트의 모든 숫자에 2를 곱하세요.", i: "nums = [1, 2, 3]\nresult = list(map(  x: x * 2, nums))\nprint(result)", e: "[2, 4, 6]", h: "list(map(lambda x: x * 2, nums))" },
    { c: "map을 이용해 문자열 리스트를 정수 리스트로 변환하세요.", i: "str_nums = ['10', '20', '30']\n# int 함수를 map에 전달하면 일괄 변환됩니다.\nint_nums = list(map(  , str_nums))\nprint(int_nums)", e: "[10, 20, 30]", h: "list(map(int, str_nums))" },
    { c: "filter와 lambda를 사용해 리스트에서 짝수만 걸러내세요.", i: "nums = [1, 2, 3, 4, 5]\nresult = list(filter(lambda x:   , nums))  # x % 2 == 0 을 넣으세요.\nprint(result)", e: "[2, 4]", h: "list(filter(lambda x: x % 2 == 0, nums))" },
    { c: "filter를 사용해 길이가 3 이상인 과일만 골라내세요.", i: "fruits = ['사과', '바나나', '귤']\nresult = list(filter(lambda f: len(f) >= 3,   ))\nprint(result)", e: "['바나나']", h: "list(filter(lambda f: len(f) >= 3, fruits))" },
    { c: "기존에 배운 리스트 컴프리헨션과 map의 결과가 같음을 확인하세요.", i: "nums = [1, 2]\nprint([x*10 for x in nums])\nprint(list(map(lambda x: x*10, nums)))", e: "[10, 20]\n[10, 20]", h: "그대로 실행합니다. 둘 다 많이 쓰이는 패턴입니다." },
    { c: "람다 함수는 다른 함수의 인자로 바로 전달할 때 진가를 발휘합니다.", i: "words = ['banana', 'apple', 'cherry']\n# 길이(len)를 기준으로 정렬해보세요. (sort의 key로 전달)\nwords.sort(key=lambda x: len(x))\nprint(words)", e: "['apple', 'banana', 'cherry']", h: "그대로 실행해 길이순 정렬을 확인하세요." },
    { c: "map, filter, lambda를 연속으로 조합해보세요! (짝수만 골라 10 곱하기)", i: "nums = [1, 2, 3, 4, 5]\nevens = filter(lambda x: x % 2 == 0, nums)\nresult = list(map(lambda x: x * 10, evens))\nprint(result)", e: "[20, 40]", h: "그대로 실행해 파이프라인 형태의 처리를 경험하세요." },
    { c: "여러 인자를 받는 람다와 map을 확인하세요.", i: "A = [1, 2]\nB = [10, 20]\n# 인자를 여러 개 받는 함수와 여러 개의 리스트를 넘기면 zip처럼 동작합니다.\nresult = list(map(lambda x, y: x + y, A, B))\nprint(result)", e: "[11, 22]", h: "그대로 실행합니다." },
    { c: "스스로 lambda를 정의해 바로 호출해보세요 (IIFE 패턴).", i: "print((lambda x: x * 100)(5))", e: "500", h: "그대로 실행합니다." },
    { c: "리스트 [1, 2, 3]에서 filter와 lambda를 사용해 홀수만 걸러 리스트로 출력하세요.", i: "# 백지 상태입니다. 숫자 리스트를 만들어 홀수만 거르거나 변환해보세요.", e: "[1, 3]", h: "print(list(filter(lambda x: x % 2 != 0, [1, 2, 3])))" }
  ]
};

// Generate nodes
const nodesData = [
  { id: 'node_16_1', title: '현대적인 문자열 조합 (f-string)', key: 'fstring' },
  { id: 'node_16_2', title: '빠르고 간결한 리스트 컴프리헨션', key: 'list_comp' },
  { id: 'node_16_3', title: '반복문의 짝꿍 함수 (enumerate & zip)', key: 'enum_zip' },
  { id: 'node_16_4', title: "파이썬 스크립트의 진입점 (if __name__ == '__main__')", key: 'main_block' },
  { id: 'node_16_5', title: "이름 없는 함수와 친구들 (lambda, map, filter)", key: 'lambda_map_filter' },
];

// Every other unit in the curriculum ramps difficulty across 4 lessons
// (mcq/wb/code interleaved, not grouped by type) — match that here so
// Unit 16 feels consistent with Units 1-15 instead of a 3-lesson outlier.
function mcqStep(q) { return { type: 'quiz_multiple_choice', content: q.q, options: q.opts, answer: q.a, hint: q.hint }; }
function wbStep(q, i) { return { type: 'quiz_word_bank', content: `단어 블록 (${i + 1})`, sentenceParts: q.parts, wordBank: q.bank, answer: q.ans, hint: q.hint }; }
function codeStep(q) { return { type: 'quiz_code', content: q.c, initialCode: q.i, expectedOutputs: [q.e], hint: q.h }; }

function buildLesson(t, mcqRange, wbRange, codeRange) {
  const steps = [];
  for (let i = mcqRange[0]; i < mcqRange[1]; i++) steps.push(mcqStep(t.mcq[i]));
  for (let i = wbRange[0]; i < wbRange[1]; i++) steps.push(wbStep(t.wb[i], i));
  for (let i = codeRange[0]; i < codeRange[1]; i++) steps.push(codeStep(t.code[i]));
  return steps;
}

function generateUnit() {
  const nodes = [];

  for (const nodeInfo of nodesData) {
    const t = TOPICS[nodeInfo.key];
    const lessons = [
      buildLesson(t, [0, 1], [0, 1], [0, 3]),
      buildLesson(t, [1, 2], [1, 2], [3, 6]),
      buildLesson(t, [2, 4], [2, 4], [6, 9]),
      buildLesson(t, [4, 5], [4, 5], [9, 12])
    ];

    nodes.push({
      id: nodeInfo.id,
      title: nodeInfo.title,
      lessons
    });
  }

  return {
    id: 16,
    title: 'UNIT 16\n실전 파이썬 스킬업',
    nodes
  };
}

const unit16Data = generateUnit();

let content = fs.readFileSync(outPath, 'utf8');

const insertIndex = content.lastIndexOf('];');
if (insertIndex === -1) {
  console.error("Could not find the end of the tier3 array.");
  process.exit(1);
}

let injectedObj = JSON.stringify(unit16Data, null, 2);
// Remove quotes from simple keys to match the file style, though strictly unnecessary.
injectedObj = injectedObj.replace(/"([^"]+)":/g, (match, p1) => {
  if (/^[a-zA-Z_]\w*$/.test(p1)) return p1 + ':';
  return match;
});

const newContent = content.substring(0, insertIndex) + ',\n  ' + injectedObj + '\n' + content.substring(insertIndex);
fs.writeFileSync(outPath, newContent, 'utf8');

console.log("Successfully generated and appended UNIT 16 to tier3.jsx!");
