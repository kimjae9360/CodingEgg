export const tier2 = [
  {
    id: 6,
    title: 'UNIT 6\n데이터의 집합 (딕셔너리)',
    nodes: [
      {
        id: 'node_6_1',
        title: '이름표가 달린 가방 (Dict)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리를 만들 때 사용하는 기호는?',
              options: ["{} (중괄호)","[] (대괄호)","() (소괄호)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '중괄호를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['딕셔너리는 ', ' 를 사용해 만듭니다.'],
              wordBank: ["{} 중괄호","[] 대괄호","() 소괄호"],
              answer: ["{} 중괄호"],
              hint: '중괄호입니다.'
            },
            {
              type: 'quiz_code',
              content: '\'name\' 키에 \'에그\'를 가진 딕셔너리를 만들고 출력하세요.',
              initialCode: 'user = [\'name\': \'에그\']  # 대괄호를 중괄호로 고치세요!\nprint(user)',
              expectedOutputs: ['{\'name\': \'에그\'}'],
              hint: 'user = {\'name\': \'에그\'}'
            },
            {
              type: 'quiz_code',
              content: '\'age\' 키에 5를 가진 딕셔너리를 만들고 출력하세요.',
              initialCode: 'user = {\'age\' 5}  # 콜론이 빠졌어요!\nprint(user)',
              expectedOutputs: ['{\'age\': 5}'],
              hint: '{\'age\': 5}'
            },
            {
              type: 'quiz_code',
              content: '\'level\' 키에 10을 넣은 딕셔너리를 만들어 출력하세요.',
              initialCode: 'data = {\'level\':   }  # 10을 넣어주세요.\nprint(data)',
              expectedOutputs: ['{\'level\': 10}'],
              hint: 'data = {\'level\': 10}'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '키와 값을 연결하는 기호는?',
              options: [": (콜론)","= (등호)",", (쉼표)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '콜론으로 연결합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['키와 값은 ', ' 로 연결합니다.'],
              wordBank: [": (콜론)","= (등호)",", (쉼표)"],
              answer: [": (콜론)"],
              hint: '콜론입니다.'
            },
            {
              type: 'quiz_code',
              content: '\'hp\'는 100, \'mp\'는 50을 담은 딕셔너리를 만들어 출력하세요.',
              initialCode: 'stats = {\'hp\': 100  \'mp\': 50}  # 쉼표가 빠졌어요!\nprint(stats)',
              expectedOutputs: ['{\'hp\': 100, \'mp\': 50}'],
              hint: '쉼표로 구분하세요.'
            },
            {
              type: 'quiz_code',
              content: '이름은 \'치킨\', 가격은 15000을 담은 딕셔너리 menu를 만들어 출력하세요.',
              initialCode: '# 딕셔너리를 만들어 출력하세요.',
              expectedOutputs: ['{\'name\': \'치킨\', \'price\': 15000}'],
              hint: 'menu = {\'name\': \'치킨\', \'price\': 15000}'
            },
            {
              type: 'quiz_code',
              content: '빈 딕셔너리를 만들고 그대로 출력하세요.',
              initialCode: 'cart = {}\nprint(cart)',
              expectedOutputs: ['{}'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리 {\'name\': \'에그\'}에서 키는 무엇인가요?',
              options: ["'name'","'에그'","전체"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '콜론 왼쪽이 키입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리의 키는 중복될 수 있나요?',
              options: ["아니요, 중복될 수 없습니다","네, 얼마든지 가능합니다","값만 중복 안 됩니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '키는 유일해야 해요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['딕셔너리는 순서 대신 ', ' 로 값을 찾습니다.'],
              wordBank: ["키(Key)","인덱스","길이"],
              answer: ["키(Key)"],
              hint: '키로 찾습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['딕셔너리의 키는 ', ' 될 수 없습니다.'],
              wordBank: ["중복","변경","출력"],
              answer: ["중복"],
              hint: '유일해야 합니다.'
            },
            {
              type: 'quiz_code',
              content: '과일 이름(name=\'사과\')과 가격(price=1000)을 담은 딕셔너리를 만들고 키 개수를 출력하세요.',
              initialCode: 'fruit = {\'name\': \'사과\', \'price\': 1000}\n# len()으로 딕셔너리의 키 개수를 출력하세요.',
              expectedOutputs: ['2'],
              hint: 'print(len(fruit))'
            },
            {
              type: 'quiz_code',
              content: '학생 정보 {\'name\':\'철수\',\'score\':90}을 만들고 그대로 출력하세요.',
              initialCode: 'student = {\'name\': \'철수\', \'score\': 90}\nprint(student)',
              expectedOutputs: ['{\'name\': \'철수\', \'score\': 90}'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '동물원 우리에 사자(\'lion\')와 나이(5)를 담은 딕셔너리를 키 \'animal\', \'age\'로 만드세요.',
              initialCode: '# 키 이름에 주의하세요: animal, age',
              expectedOutputs: ['{\'animal\': \'lion\', \'age\': 5}'],
              hint: 'zoo = {\'animal\': \'lion\', \'age\': 5}\nprint(zoo)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '빈 딕셔너리를 만드는 방법으로 옳은 것은?',
              options: ["{}","[]","dict[]"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '빈 중괄호입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['여러 키-값 쌍은 ', ' 로 구분합니다.'],
              wordBank: [", (쉼표)","; (세미콜론)"," (공백)"],
              answer: [", (쉼표)"],
              hint: '쉼표로 구분합니다.'
            },
            {
              type: 'quiz_code',
              content: '게임 캐릭터의 hp=100, mp=50, level=1을 담은 딕셔너리를 만들고 출력하세요.',
              initialCode: '# 3개의 키-값 쌍을 가진 딕셔너리를 만드세요.',
              expectedOutputs: ['{\'hp\': 100, \'mp\': 50, \'level\': 1}'],
              hint: 'char = {\'hp\': 100, \'mp\': 50, \'level\': 1}\nprint(char)'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\': 1}의 값이 아니라 키의 개수만 정확히 출력하세요.',
              initialCode: 'd = {\'a\': 1}\n# 키의 개수를 출력하세요 (딕셔너리 자체를 출력하면 안 됩니다).',
              expectedOutputs: ['1'],
              hint: 'print(len(d))'
            },
            {
              type: 'quiz_code',
              content: '스스로 좋아하는 색(color)과 숫자(number)를 담은 딕셔너리를 만들어 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['{\'color\': \'파랑\', \'number\': 7}'],
              hint: 'favorite = {\'color\': \'파랑\', \'number\': 7}\nprint(favorite)'
            }
          ]
        ]
      },
      {
        id: 'node_6_2',
        title: '딕셔너리에서 값 꺼내기',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리 d={\'name\':\'에그\'}에서 값을 꺼내는 코드는?',
              options: ["d['name']","d.name","d(name)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '대괄호 안에 키를 넣습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['딕셔너리 값을 꺼내려면 ', ' 안에 키를 넣습니다.'],
              wordBank: ["대괄호 []","소괄호 ()","중괄호 {}"],
              answer: ["대괄호 []"],
              hint: '대괄호입니다.'
            },
            {
              type: 'quiz_code',
              content: 'd={\'name\':\'에그\'}에서 \'name\' 값을 출력하세요.',
              initialCode: 'd = {\'name\': \'에그\'}\nprint(d.name)  # 잘못된 문법이에요!',
              expectedOutputs: ['에그'],
              hint: 'd[\'name\']으로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'd={\'age\':5}에서 \'age\' 값을 출력하세요.',
              initialCode: 'd = {\'age\': 5}\nprint(d[age])  # 따옴표가 빠졌어요!',
              expectedOutputs: ['5'],
              hint: 'd[\'age\']로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':100}에서 hp 값을 출력하세요.',
              initialCode: 'stat = {\'hp\': 100}\nprint(stat[  ])  # 키를 넣어주세요.',
              expectedOutputs: ['100'],
              hint: 'stat[\'hp\']'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '존재하지 않는 키를 대괄호로 부르면?',
              options: ["KeyError 발생","None 출력","0 출력"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러가 납니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['없는 키를 대괄호로 부르면 ', ' 가 발생합니다.'],
              wordBank: ["KeyError","IndexError","TypeError"],
              answer: ["KeyError"],
              hint: 'KeyError입니다.'
            },
            {
              type: 'quiz_code',
              content: 'get()으로 없는 키 \'mp\'를 조회했을 때 None이 출력되는지 확인하세요.',
              initialCode: 'stat = {\'hp\': 100}\nprint(stat.get(\'mp\'))',
              expectedOutputs: ['None'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'get()으로 없는 키 \'mp\'를 조회하되 기본값 0을 지정해 출력하세요.',
              initialCode: 'stat = {\'hp\': 100}\nprint(stat.get(\'mp\'  0))  # 쉼표가 빠졌어요!',
              expectedOutputs: ['0'],
              hint: 'stat.get(\'mp\', 0)'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'name\':\'치킨\',\'price\':15000}에서 price 값을 출력하세요.',
              initialCode: 'menu = {\'name\': \'치킨\', \'price\': 15000}\n# price 값을 출력하세요.',
              expectedOutputs: ['15000'],
              hint: 'print(menu[\'price\'])'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'get()의 장점은?',
              options: ["키가 없어도 에러 없이 None을 돌려준다","항상 더 빠르다","값을 자동으로 수정한다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '안전하게 값을 꺼낼 수 있어요.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'd.get(\'age\', 0)에서 \'age\' 키가 없으면?',
              options: ["0이 반환된다","에러가 난다","None이 반환된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '두 번째 인자가 기본값입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['에러 없이 안전하게 값을 꺼내려면 ', ' 를 씁니다.'],
              wordBank: ["get()","fetch()","find()"],
              answer: ["get()"],
              hint: 'get()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['get(\'키\', 기본값)에서 두 번째 인자는 ', ' 입니다.'],
              wordBank: ["키가 없을 때 돌려줄 기본값","항상 반환되는 값","무시되는 값"],
              answer: ["키가 없을 때 돌려줄 기본값"],
              hint: '기본값입니다.'
            },
            {
              type: 'quiz_code',
              content: '\'name\' 키가 있는지 in으로 확인해 True를 출력하세요.',
              initialCode: 'd = {\'name\': \'에그\'}\nprint(\'name\' in d)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '\'age\' 키가 없는지 in과 not으로 확인해 True를 출력하세요.',
              initialCode: 'd = {\'name\': \'에그\'}\n# not in 을 사용해보세요.',
              expectedOutputs: ['True'],
              hint: 'print(\'age\' not in d)'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':100,\'mp\':50}에서 hp와 mp를 더한 값을 출력하세요.',
              initialCode: 'stat = {\'hp\': 100, \'mp\': 50}\n# 두 값을 더해 출력하세요.',
              expectedOutputs: ['150'],
              hint: 'print(stat[\'hp\'] + stat[\'mp\'])'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '\'name\' in d 는 무엇을 확인하나요?',
              options: ["d에 'name' 키가 있는지","d의 값이 'name'인지","d가 비어있는지"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'in은 키의 존재 여부를 확인합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['키의 존재 여부는 ', ' 연산자로 확인합니다.'],
              wordBank: ["in","is","=="],
              answer: ["in"],
              hint: 'in 연산자입니다.'
            },
            {
              type: 'quiz_code',
              content: '학생 딕셔너리 {\'name\':\'철수\',\'score\':85}에서 \'철수: 85점\' 형태로 출력하세요.',
              initialCode: 'student = {\'name\': \'철수\', \'score\': 85}\n# 문자열을 조합해 출력하세요.',
              expectedOutputs: ['철수: 85점'],
              hint: 'print(student[\'name\'] + \': \' + str(student[\'score\']) + \'점\')'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':1,\'b\':2}에서 없는 키 \'c\'를 get()으로 조회해 기본값 -1을 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2}\n# get()과 기본값을 사용하세요.',
              expectedOutputs: ['-1'],
              hint: 'print(d.get(\'c\', -1))'
            },
            {
              type: 'quiz_code',
              content: '스스로 자신의 정보를 담은 딕셔너리(name, age)를 만들고 \'name은 age살입니다\' 형태로 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩은 5살입니다'],
              hint: 'me = {\'name\': \'코딩\', \'age\': 5}\nprint(me[\'name\'] + \'은 \' + str(me[\'age\']) + \'살입니다\')'
            }
          ]
        ]
      },
      {
        id: 'node_6_3',
        title: '딕셔너리 추가/수정/삭제',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리에 새 키-값을 추가하는 방법은?',
              options: ["d['new'] = 값","d.add('new', 값)","d + 'new'"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '대괄호에 새 키를 넣고 대입하면 추가돼요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['새 키-값을 추가하려면 ', ' 형태로 대입합니다.'],
              wordBank: ["d['new'] = 값","d.add(값)","d + 값"],
              answer: ["d['new'] = 값"],
              hint: '대입으로 추가합니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':100}에 \'mp\':50을 추가하고 출력하세요.',
              initialCode: 'stat = {\'hp\': 100}\nstat[\'mp\'] == 50  # 대입 연산자로 고치세요!\nprint(stat)',
              expectedOutputs: ['{\'hp\': 100, \'mp\': 50}'],
              hint: 'stat[\'mp\'] = 50'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'level\':1}의 level 값을 2로 수정하고 출력하세요.',
              initialCode: 'data = {\'level\': 1}\ndata[level] = 2  # 따옴표가 빠졌어요!\nprint(data)',
              expectedOutputs: ['{\'level\': 2}'],
              hint: 'data[\'level\'] = 2'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'name\':\'에그\'}에 \'age\':5를 추가해 출력하세요.',
              initialCode: 'user = {\'name\': \'에그\'}\nuser[\'age\'] =   \nprint(user)',
              expectedOutputs: ['{\'name\': \'에그\', \'age\': 5}'],
              hint: 'user[\'age\'] = 5'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '기존 키의 값을 수정하는 방법은?',
              options: ["d['키'] = 새값","d.update()만 가능","수정 불가능"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '추가와 같은 문법으로 값을 바꿀 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['기존 값을 바꾸려면 ', ' 를 그대로 사용합니다.'],
              wordBank: ["대입(=)","del","in"],
              answer: ["대입(=)"],
              hint: '똑같이 대입하면 됩니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':100,\'mp\':50}에서 \'mp\' 키를 삭제하고 출력하세요.',
              initialCode: 'stat = {\'hp\': 100, \'mp\': 50}\ndel stat[\'mp\']\nprint(stat)',
              expectedOutputs: ['{\'hp\': 100}'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':1,\'b\':2}에서 pop()으로 \'a\'를 꺼내 그 값을 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2}\nprint(d.pop(\'a\'))',
              expectedOutputs: ['1'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'score\':50}의 score를 90으로 올려 출력하세요.',
              initialCode: 'student = {\'score\': 50}\n# score를 90으로 수정하세요.',
              expectedOutputs: ['{\'score\': 90}'],
              hint: 'student[\'score\'] = 90'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리에서 키를 삭제하는 키워드는?',
              options: ["del","remove","erase"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'del d[\'키\'] 형태로 씁니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'pop(\'키\')과 del d[\'키\']의 공통점은?',
              options: ["둘 다 키를 삭제한다","둘 다 값을 추가한다","둘 다 에러를 낸다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '둘 다 삭제 기능입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['키를 삭제하려면 ', ' 키워드를 씁니다.'],
              wordBank: ["del","remove","cut"],
              answer: ["del"],
              hint: 'del입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['pop(\'키\')은 값을 ', ' 서 삭제합니다.'],
              wordBank: ["반환하면","무시하면","복사하면"],
              answer: ["반환하면"],
              hint: '값을 돌려주며 지웁니다.'
            },
            {
              type: 'quiz_code',
              content: '빈 딕셔너리에 \'name\':\'치킨\', \'price\':15000을 순서대로 추가해 출력하세요.',
              initialCode: 'menu = {}\n# 두 개의 키-값을 순서대로 추가하세요.',
              expectedOutputs: ['{\'name\': \'치킨\', \'price\': 15000}'],
              hint: 'menu[\'name\'] = \'치킨\'\nmenu[\'price\'] = 15000'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':100,\'mp\':50,\'gold\':10}에서 \'gold\' 키만 삭제하고 출력하세요.',
              initialCode: 'char = {\'hp\': 100, \'mp\': 50, \'gold\': 10}\n# gold를 삭제하세요.',
              expectedOutputs: ['{\'hp\': 100, \'mp\': 50}'],
              hint: 'del char[\'gold\']'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':1}에 \'b\':2, \'c\':3을 추가한 뒤 길이를 출력하세요.',
              initialCode: 'd = {\'a\': 1}\n# b, c를 추가하고 길이를 출력하세요.',
              expectedOutputs: ['3'],
              hint: 'd[\'b\'] = 2\nd[\'c\'] = 3\nprint(len(d))'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'pop()과 del의 차이는?',
              options: ["pop()은 삭제한 값을 반환한다","del은 값을 반환한다","차이가 없다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'pop()은 지운 값을 돌려줍니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['존재하지 않는 키를 del로 지우려 하면 ', ' 가 납니다.'],
              wordBank: ["에러","경고","무시"],
              answer: ["에러"],
              hint: 'KeyError가 납니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':50}의 hp에 30을 더한 값으로 갱신해 출력하세요.',
              initialCode: 'stat = {\'hp\': 50}\n# hp에 30을 더해 갱신하세요.',
              expectedOutputs: ['{\'hp\': 80}'],
              hint: 'stat[\'hp\'] = stat[\'hp\'] + 30'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':1,\'b\':2,\'c\':3}에서 pop()으로 \'b\'를 꺼낸 뒤, 남은 딕셔너리를 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2, \'c\': 3}\nd.pop(\'b\')\n# 남은 딕셔너리를 출력하세요.',
              expectedOutputs: ['{\'a\': 1, \'c\': 3}'],
              hint: 'print(d)'
            },
            {
              type: 'quiz_code',
              content: '스스로 빈 딕셔너리에 좋아하는 게임 캐릭터의 hp, mp를 추가한 뒤 하나를 삭제해 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['{\'hp\': 100}'],
              hint: 'char = {}\nchar[\'hp\'] = 100\nchar[\'mp\'] = 50\ndel char[\'mp\']\nprint(char)'
            }
          ]
        ]
      },
      {
        id: 'node_6_4',
        title: '딕셔너리의 열쇠 꾸러미',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리의 모든 키를 얻는 메서드는?',
              options: ["keys()","values()","items()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'keys()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['모든 키를 얻으려면 ', ' 를 씁니다.'],
              wordBank: ["keys()","values()","items()"],
              answer: ["keys()"],
              hint: 'keys()입니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':1,\'b\':2}의 키들을 리스트로 만들어 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2}\nprint(list(d.key()))  # 메서드 이름을 고치세요!',
              expectedOutputs: ['[\'a\', \'b\']'],
              hint: 'd.keys()'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':1,\'b\':2}의 값들을 리스트로 만들어 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2}\nprint(list(d.value()))  # 메서드 이름을 고치세요!',
              expectedOutputs: ['[1, 2]'],
              hint: 'd.values()'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'x\':1,\'y\':2}의 키 목록을 리스트로 출력하세요.',
              initialCode: 'd = {\'x\': 1, \'y\': 2}\nprint(list(d.  ()))  # 알맞은 메서드를 넣으세요.',
              expectedOutputs: ['[\'x\', \'y\']'],
              hint: 'keys()'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리의 모든 값을 얻는 메서드는?',
              options: ["values()","keys()","items()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'values()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['모든 값을 얻으려면 ', ' 를 씁니다.'],
              wordBank: ["values()","keys()","items()"],
              answer: ["values()"],
              hint: 'values()입니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':100,\'mp\':50}의 값 목록을 리스트로 출력하세요.',
              initialCode: 'stat = {\'hp\': 100, \'mp\': 50}\nprint(list(stat.values()))',
              expectedOutputs: ['[100, 50]'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'for문으로 딕셔너리 {\'a\':1,\'b\':2}의 키를 하나씩 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2}\nfor k in d:\n    print(k)',
              expectedOutputs: ['a\nb'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'for문으로 딕셔너리 {\'name\':\'에그\',\'age\':5}의 값을 하나씩 출력하세요.',
              initialCode: 'd = {\'name\': \'에그\', \'age\': 5}\n# .values()로 반복하세요.',
              expectedOutputs: ['에그\n5'],
              hint: 'for v in d.values():\n    print(v)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '키와 값을 쌍으로 얻는 메서드는?',
              options: ["items()","keys()","values()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'items()는 (키,값) 쌍을 줍니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'for k, v in d.items(): 은 무엇을 반복하나요?',
              options: ["키와 값 쌍을 각각 k, v에 대입","키만 반복","값만 반복"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'items()는 튜플 쌍을 돌려줍니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['키와 값을 쌍으로 얻으려면 ', ' 를 씁니다.'],
              wordBank: ["items()","keys()","values()"],
              answer: ["items()"],
              hint: 'items()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['for k, v in d.items(): 은 ', ' 형태로 반복합니다.'],
              wordBank: ["키, 값 쌍","키만","값만"],
              answer: ["키, 값 쌍"],
              hint: '쌍으로 반복합니다.'
            },
            {
              type: 'quiz_code',
              content: 'items()로 딕셔너리 {\'a\':1,\'b\':2}의 키와 값을 \'a=1\' 형태로 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2}\nfor k, v in d.items():\n    print(k + \'=\' + str(v))',
              expectedOutputs: ['a=1\nb=2'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'hp\':100,\'mp\':50,\'gold\':10}의 키 개수를 keys()의 길이로 출력하세요.',
              initialCode: 'char = {\'hp\': 100, \'mp\': 50, \'gold\': 10}\n# len(keys())를 출력하세요.',
              expectedOutputs: ['3'],
              hint: 'print(len(char.keys()))'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':10,\'b\':20,\'c\':30}의 값들의 합을 for문으로 구해 출력하세요.',
              initialCode: 'd = {\'a\': 10, \'b\': 20, \'c\': 30}\ntotal = 0\n# values()로 반복하며 합을 구하세요.',
              expectedOutputs: ['60'],
              hint: 'for v in d.values():\n    total += v\nprint(total)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'd.keys()의 결과를 리스트로 바꾸는 방법은?',
              options: ["list(d.keys())","d.keys().list()","array(d.keys())"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'list() 함수로 감싸면 됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['keys()의 결과를 리스트로 바꾸려면 ', ' 로 감쌉니다.'],
              wordBank: ["list()","str()","tuple()"],
              answer: ["list()"],
              hint: 'list()입니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'철수\':90,\'영희\':85}를 items()로 순회하며 \'이름: 점수\' 형태로 출력하세요.',
              initialCode: 'scores = {\'철수\': 90, \'영희\': 85}\n# items()를 사용하세요.',
              expectedOutputs: ['철수: 90\n영희: 85'],
              hint: 'for name, score in scores.items():\n    print(name + \': \' + str(score))'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 {\'a\':1,\'b\':2,\'c\':3}에서 값이 2보다 큰 키만 출력하세요.',
              initialCode: 'd = {\'a\': 1, \'b\': 2, \'c\': 3}\n# items()와 if문을 함께 사용하세요.',
              expectedOutputs: ['c'],
              hint: 'for k, v in d.items():\n    if v > 2:\n        print(k)'
            },
            {
              type: 'quiz_code',
              content: '스스로 좋아하는 과일 2개와 가격을 담은 딕셔너리를 만들고 items()로 모두 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['사과: 1000\n바나나: 500'],
              hint: 'prices = {\'사과\': 1000, \'바나나\': 500}\nfor name, price in prices.items():\n    print(name + \': \' + str(price))'
            }
          ]
        ]
      },
      {
        id: 'node_6_5',
        title: '중복을 허락하지 않는 Set',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '집합(set)을 만들 때 사용하는 기호는?',
              options: ["{} (중괄호, 값만)","[] (대괄호)","() (소괄호)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '중괄호를 쓰지만 키:값이 아니라 값만 넣습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['집합은 ', ' 를 사용해 만듭니다 (값만).'],
              wordBank: ["{} 중괄호","[] 대괄호","() 소괄호"],
              answer: ["{} 중괄호"],
              hint: '중괄호를 씁니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트 [1,2,2,3]을 집합으로 바꿔 정렬된 리스트로 출력하세요.',
              initialCode: 'nums = [1, 2, 2, 3]\nprint(list(nums))  # 집합으로 바꿔야 해요!',
              expectedOutputs: ['[1, 2, 3]'],
              hint: 'print(sorted(set(nums)))'
            },
            {
              type: 'quiz_code',
              content: '빈 집합을 만들고 타입을 출력하세요.',
              initialCode: 's = {}  # 이건 딕셔너리예요!\nprint(type(s))',
              expectedOutputs: ['dict'],
              hint: 's = set()로 고쳐야 진짜 빈 집합이 됩니다 (힌트: {}의 타입은 dict입니다).'
            },
            {
              type: 'quiz_code',
              content: '집합 {1,2,3}에 4를 추가한 뒤 정렬된 리스트로 출력하세요.',
              initialCode: 's = {1, 2, 3}\ns.  (4)\nprint(sorted(s))',
              expectedOutputs: ['[1, 2, 3, 4]'],
              hint: 's.add(4)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '집합의 가장 큰 특징은?',
              options: ["중복된 값을 허용하지 않는다","순서가 있다","키-값 쌍을 저장한다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '중복 제거가 핵심 기능입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['집합은 ', ' 값을 허용하지 않습니다.'],
              wordBank: ["중복된","음수","문자열"],
              answer: ["중복된"],
              hint: '중복을 허용하지 않습니다.'
            },
            {
              type: 'quiz_code',
              content: '문자열 리스트 [\'a\',\'b\',\'a\',\'c\']에서 중복을 제거한 개수를 출력하세요.',
              initialCode: 'letters = [\'a\', \'b\', \'a\', \'c\']\nprint(set(letters))  # 개수만 출력하도록 고치세요!',
              expectedOutputs: ['3'],
              hint: 'print(len(set(letters)))'
            },
            {
              type: 'quiz_code',
              content: '집합 {1,2,3}의 길이를 출력하세요.',
              initialCode: 's = {1, 2, 3}\nprint(len(s))',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '집합 {1,2,3}에 3(이미 있는 값)을 추가해도 개수가 그대로인지 확인하세요.',
              initialCode: 's = {1, 2, 3}\ns.add(3)\nprint(len(s))',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 중복은 무시됩니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'set([1,2,2,3])의 결과는?',
              options: ["{1, 2, 3}","{1, 2, 2, 3}","[1, 2, 3]"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '중복된 2가 하나로 합쳐집니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '빈 집합을 만들 때 {}를 쓰면 안 되는 이유는?',
              options: ["{}는 빈 딕셔너리로 인식되기 때문","문법 오류가 나기 때문","집합은 원래 못 만들기 때문"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '빈 집합은 set()으로 만들어야 해요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['리스트를 집합으로 바꾸려면 ', ' 를 씁니다.'],
              wordBank: ["set()","list()","dict()"],
              answer: ["set()"],
              hint: 'set()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['빈 집합은 ', ' 로 만들어야 합니다.'],
              wordBank: ["set()","{}","[]"],
              answer: ["set()"],
              hint: '{}는 딕셔너리가 됩니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트 [1,1,2,2,3,3]에서 중복을 제거한 뒤 개수를 출력하세요.',
              initialCode: 'nums = [1, 1, 2, 2, 3, 3]\n# 집합으로 바꾼 뒤 길이를 출력하세요.',
              expectedOutputs: ['3'],
              hint: 'print(len(set(nums)))'
            },
            {
              type: 'quiz_code',
              content: '3이 집합 {1,2,3}에 있는지 in으로 확인해 출력하세요.',
              initialCode: 's = {1, 2, 3}\nprint(3 in s)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '두 집합 {1,2,3}과 {2,3,4}의 교집합을 &로 구해 정렬된 리스트로 출력하세요.',
              initialCode: 'a = {1, 2, 3}\nb = {2, 3, 4}\n# 교집합을 정렬해 출력하세요.',
              expectedOutputs: ['[2, 3]'],
              hint: 'print(sorted(a & b))'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '집합에 값을 추가하는 메서드는?',
              options: ["add()","append()","insert()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '리스트의 append와 다른 이름입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['집합에 값을 추가하려면 ', ' 를 씁니다.'],
              wordBank: ["add()","append()","insert()"],
              answer: ["add()"],
              hint: 'add()입니다.'
            },
            {
              type: 'quiz_code',
              content: '두 집합 {1,2}와 {2,3}의 합집합을 |로 구해 정렬된 리스트로 출력하세요.',
              initialCode: 'a = {1, 2}\nb = {2, 3}\n# 합집합을 정렬해 출력하세요.',
              expectedOutputs: ['[1, 2, 3]'],
              hint: 'print(sorted(a | b))'
            },
            {
              type: 'quiz_code',
              content: '리스트 [\'사과\',\'바나나\',\'사과\',\'포도\']에서 중복 없이 몇 종류의 과일이 있는지 출력하세요.',
              initialCode: 'fruits = [\'사과\', \'바나나\', \'사과\', \'포도\']\n# 집합으로 바꿔 종류의 개수를 출력하세요.',
              expectedOutputs: ['3'],
              hint: 'print(len(set(fruits)))'
            },
            {
              type: 'quiz_code',
              content: '스스로 좋아하는 색 리스트(중복 포함)를 만들고, 집합으로 바꿔 몇 가지 색이 있는지 개수를 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['2'],
              hint: 'colors = [\'빨강\', \'파랑\', \'빨강\']\nprint(len(set(colors)))'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'UNIT 7\n마법 주문서 (함수 기초)',
    nodes: [
      {
        id: 'node_7_1',
        title: '나만의 마법 주문 만들기 (def)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수를 정의할 때 사용하는 키워드는?',
              options: ["def","function","func"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'def 뒤에 함수 이름을 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['함수를 정의하려면 ', ' 키워드를 씁니다.'],
              wordBank: ["def","function","make"],
              answer: ["def"],
              hint: 'def입니다.'
            },
            {
              type: 'quiz_code',
              content: '\'안녕!\'을 출력하는 함수 greet를 만들고 호출하세요.',
              initialCode: 'def greet()\n    print(\'안녕!\')  # 콜론이 빠졌어요!\ngreet()',
              expectedOutputs: ['안녕!'],
              hint: 'def greet(): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '함수 say_hi를 만들어 호출하세요.',
              initialCode: 'def say_hi():\nprint(\'hi\')  # 들여쓰기가 빠졌어요!\nsay_hi()',
              expectedOutputs: ['hi'],
              hint: 'print 앞에 스페이스 4칸을 넣으세요.'
            },
            {
              type: 'quiz_code',
              content: '\'파이팅!\'을 출력하는 함수 cheer를 만들고 호출하세요.',
              initialCode: 'def cheer():\n    print(  )\ncheer()',
              expectedOutputs: ['파이팅!'],
              hint: 'print(\'파이팅!\')'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수 정의 끝에 필요한 기호는?',
              options: [": (콜론)","; (세미콜론)","{}"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '콜론이 필요합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['함수 정의 끝에는 ', ' 이 필요합니다.'],
              wordBank: [": (콜론)","; (세미콜론)","없음"],
              answer: [": (콜론)"],
              hint: '콜론입니다.'
            },
            {
              type: 'quiz_code',
              content: '함수 show_number를 정의해 100을 출력하고 호출하세요.',
              initialCode: '# 함수를 정의하고 호출하세요.',
              expectedOutputs: ['100'],
              hint: 'def show_number():\n    print(100)\nshow_number()'
            },
            {
              type: 'quiz_code',
              content: '함수를 정의만 하고 호출하지 않으면 아무것도 출력되지 않음을 확인하세요.',
              initialCode: 'def hello():\n    print(\'hello\')\n# 호출하지 않았습니다. 그대로 실행해보세요.',
              expectedOutputs: [''],
              hint: '이미 정답입니다. 호출하지 않으면 아무 일도 없어요.'
            },
            {
              type: 'quiz_code',
              content: '함수 welcome을 만들어 \'환영합니다\'를 출력하고 2번 호출하세요.',
              initialCode: 'def welcome():\n    print(\'환영합니다\')\nwelcome()\nwelcome()',
              expectedOutputs: ['환영합니다\n환영합니다'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '정의한 함수를 실행하려면?',
              options: ["함수이름()","함수이름","run(함수이름)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '괄호를 붙여 호출합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '함수 안의 코드는 어떻게 작성하나요?',
              options: ["들여쓰기를 합니다","한 줄로 씁니다","중괄호로 감쌉니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '파이썬은 들여쓰기로 블록을 구분합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['함수를 실행하려면 ', ' 를 붙여 호출합니다.'],
              wordBank: ["() 괄호","[] 대괄호","없이 이름만"],
              answer: ["() 괄호"],
              hint: '괄호가 필요합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['함수 내부 코드는 ', ' 를 해야 합니다.'],
              wordBank: ["들여쓰기","대문자화","한 줄로"],
              answer: ["들여쓰기"],
              hint: '들여쓰기입니다.'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 다른 함수를 호출해보세요 (main이 greet를 호출).',
              initialCode: 'def greet():\n    print(\'안녕\')\ndef main():\n    greet()\nmain()',
              expectedOutputs: ['안녕'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수 count_up을 만들어 1,2,3을 출력하고 호출하세요.',
              initialCode: '# 함수 안에 for문을 넣어보세요.',
              expectedOutputs: ['1\n2\n3'],
              hint: 'def count_up():\n    for i in range(1, 4):\n        print(i)\ncount_up()'
            },
            {
              type: 'quiz_code',
              content: '함수 print_line을 만들어 \'-\'를 10개 출력하고 호출하세요.',
              initialCode: '# 함수를 정의하세요.',
              expectedOutputs: ['----------'],
              hint: 'def print_line():\n    print(\'-\' * 10)\nprint_line()'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수를 정의만 하고 호출하지 않으면?',
              options: ["아무 일도 일어나지 않는다","자동으로 실행된다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '함수는 호출해야 실행됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['함수는 ', ' 해야 실행됩니다.'],
              wordBank: ["호출","정의만","import만"],
              answer: ["호출"],
              hint: '호출이 필요합니다.'
            },
            {
              type: 'quiz_code',
              content: '함수 show_menu를 만들어 \'1.피자\'와 \'2.치킨\'을 각 줄에 출력하고 호출하세요.',
              initialCode: '# 함수를 정의하세요.',
              expectedOutputs: ['1.피자\n2.치킨'],
              hint: 'def show_menu():\n    print(\'1.피자\')\n    print(\'2.치킨\')\nshow_menu()'
            },
            {
              type: 'quiz_code',
              content: '함수 3개(a,b,c)를 정의해 각각 다른 숫자를 출력하고, main 함수에서 순서대로 호출하세요.',
              initialCode: '# 함수 a, b, c와 main을 정의하세요.',
              expectedOutputs: ['1\n2\n3'],
              hint: 'def a():\n    print(1)\ndef b():\n    print(2)\ndef c():\n    print(3)\ndef main():\n    a()\n    b()\n    c()\nmain()'
            },
            {
              type: 'quiz_code',
              content: '스스로 자신을 소개하는 함수 introduce를 만들어 호출해보세요 (예: \'저는 코딩에그입니다\').',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['저는 코딩에그입니다'],
              hint: 'def introduce():\n    print(\'저는 코딩에그입니다\')\nintroduce()'
            }
          ]
        ]
      },
      {
        id: 'node_7_2',
        title: '재료 넣기 (매개변수)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수에 값을 전달할 때 사용하는 것은?',
              options: ["매개변수(parameter)","반환값","클래스"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '괄호 안에 받을 값의 이름을 적습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['함수에 값을 전달하는 것을 ', ' 라고 합니다.'],
              wordBank: ["매개변수","반환값","클래스"],
              answer: ["매개변수"],
              hint: '매개변수입니다.'
            },
            {
              type: 'quiz_code',
              content: '이름을 매개변수로 받아 인사하는 함수를 만들어 \'에그\'로 호출하세요.',
              initialCode: 'def greet(name):\n    print(\'안녕, \' + name)\ngreet(에그)  # 따옴표가 빠졌어요!',
              expectedOutputs: ['안녕, 에그'],
              hint: 'greet(\'에그\')로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '숫자 두 개를 받아 더한 값을 출력하는 함수를 만들어 3, 4로 호출하세요.',
              initialCode: 'def add(a, b)\n    print(a + b)  # 콜론이 빠졌어요!\nadd(3, 4)',
              expectedOutputs: ['7'],
              hint: 'def add(a, b): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '이름을 받아 출력하는 함수를 완성해 \'치킨\'으로 호출하세요.',
              initialCode: 'def show(name):\n    print(  )\nshow(\'치킨\')',
              expectedOutputs: ['치킨'],
              hint: 'print(name)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'def greet(name): 에서 name은 무엇인가요?',
              options: ["매개변수","함수 이름","반환값"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '괄호 안의 이름이 매개변수입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['def greet(name): 에서 name은 ', ' 입니다.'],
              wordBank: ["매개변수","함수 이름","전역변수"],
              answer: ["매개변수"],
              hint: '매개변수입니다.'
            },
            {
              type: 'quiz_code',
              content: '매개변수 하나(age)를 받아 그대로 출력하는 함수를 만들어 20으로 호출하세요.',
              initialCode: '# 함수를 정의하고 호출하세요.',
              expectedOutputs: ['20'],
              hint: 'def show_age(age):\n    print(age)\nshow_age(20)'
            },
            {
              type: 'quiz_code',
              content: '두 매개변수 a, b를 곱해서 출력하는 함수를 만들어 6, 7로 호출하세요.',
              initialCode: 'def multiply(a, b):\n    print(a * b)\nmultiply(6, 7)',
              expectedOutputs: ['42'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '세 매개변수를 모두 더해 출력하는 함수를 만들어 1,2,3으로 호출하세요.',
              initialCode: '# 매개변수 3개를 받는 함수를 만드세요.',
              expectedOutputs: ['6'],
              hint: 'def total(a, b, c):\n    print(a + b + c)\ntotal(1, 2, 3)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수를 호출할 때 넘기는 실제 값을 뭐라 하나요?',
              options: ["인자(argument)","매개변수","키워드"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '괄호 안에 실제로 넣는 값입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '매개변수를 2개 받는 함수를 호출할 때 인자를 1개만 주면?',
              options: ["에러가 난다","자동으로 0이 채워진다","무시된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '개수가 맞지 않으면 TypeError가 납니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['호출할 때 실제로 넘기는 값을 ', ' 라고 합니다.'],
              wordBank: ["인자(argument)","매개변수","반환값"],
              answer: ["인자(argument)"],
              hint: '인자입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['매개변수 개수와 인자 개수가 다르면 ', ' 가 납니다.'],
              wordBank: ["TypeError","IndexError","아무 일도 없음"],
              answer: ["TypeError"],
              hint: 'TypeError입니다.'
            },
            {
              type: 'quiz_code',
              content: '이름과 나이를 매개변수로 받아 \'이름은 나이살입니다\' 형태로 출력하는 함수를 만들어 호출하세요.',
              initialCode: 'def intro(name, age):\n    print(name + \'는 \' + str(age) + \'살입니다\')\nintro(\'에그\', 5)',
              expectedOutputs: ['에그는 5살입니다'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수를 두 번 다른 인자로 호출해보세요 (5, 10 각각).',
              initialCode: 'def show(n):\n    print(n)\nshow(5)\nshow(10)',
              expectedOutputs: ['5\n10'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '매개변수로 받은 숫자가 짝수인지 판별해 출력하는 함수를 만들어 4로 호출하세요.',
              initialCode: '# 짝수 판별 함수를 만드세요.',
              expectedOutputs: ['True'],
              hint: 'def is_even(n):\n    print(n % 2 == 0)\nis_even(4)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 매개변수를 받을 때 순서는 왜 중요한가요?',
              options: ["넘긴 순서대로 매개변수에 대입되기 때문","순서는 상관없기 때문","항상 알파벳 순이기 때문"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '위치 인자는 순서대로 대입됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['여러 인자는 넘긴 ', ' 대로 매개변수에 대입됩니다.'],
              wordBank: ["순서","알파벳","길이"],
              answer: ["순서"],
              hint: '순서대로 대입됩니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트를 매개변수로 받아 합계를 출력하는 함수를 만들어 [1,2,3]으로 호출하세요.',
              initialCode: '# 리스트를 받는 함수를 만드세요.',
              expectedOutputs: ['6'],
              hint: 'def total(nums):\n    print(sum(nums))\ntotal([1, 2, 3])'
            },
            {
              type: 'quiz_code',
              content: '두 인자를 받아 큰 값을 출력하는 함수를 만들어 7, 3으로 호출하세요.',
              initialCode: '# 두 값 중 큰 값을 출력하는 함수를 만드세요.',
              expectedOutputs: ['7'],
              hint: 'def bigger(a, b):\n    if a > b:\n        print(a)\n    else:\n        print(b)\nbigger(7, 3)'
            },
            {
              type: 'quiz_code',
              content: '스스로 두 개의 인자(이름, 점수)를 받아 \'이름님 점수점입니다\'를 출력하는 함수를 만들어 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['철수님 90점입니다'],
              hint: 'def result(name, score):\n    print(name + \'님 \' + str(score) + \'점입니다\')\nresult(\'철수\', 90)'
            }
          ]
        ]
      },
      {
        id: 'node_7_3',
        title: '결과물 돌려주기 (return)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수의 결과값을 돌려주는 키워드는?',
              options: ["return","give","output"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'return입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['함수의 결과값을 돌려주려면 ', ' 를 씁니다.'],
              wordBank: ["return","give","send"],
              answer: ["return"],
              hint: 'return입니다.'
            },
            {
              type: 'quiz_code',
              content: '두 수를 더한 값을 반환하는 함수를 만들어 결과를 출력하세요.',
              initialCode: 'def add(a, b):\n    print a + b  # return으로 고치세요!\nresult = add(3, 4)\nprint(result)',
              expectedOutputs: ['7'],
              hint: 'return a + b'
            },
            {
              type: 'quiz_code',
              content: '숫자를 제곱해 반환하는 함수를 만들어 5로 호출한 결과를 출력하세요.',
              initialCode: 'def square(n):\n    return n * n\nresult = square(5)\nprnt(result)  # 오타를 고치세요!',
              expectedOutputs: ['25'],
              hint: 'print(result)'
            },
            {
              type: 'quiz_code',
              content: '이름을 받아 인사말을 반환하는 함수를 완성하세요.',
              initialCode: 'def greet(name):\n    return   + name\nprint(greet(\'에그\'))',
              expectedOutputs: ['안녕 에그'],
              hint: 'return \'안녕 \' + name'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'return을 만나면 함수는 어떻게 되나요?',
              options: ["즉시 종료되고 값을 돌려준다","계속 실행된다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'return은 함수를 끝냅니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['return을 만나면 함수가 ', ' 됩니다.'],
              wordBank: ["즉시 종료","계속 반복","무시"],
              answer: ["즉시 종료"],
              hint: '즉시 종료됩니다.'
            },
            {
              type: 'quiz_code',
              content: '두 수 중 큰 값을 반환하는 함수를 만들어 10, 20으로 호출한 결과를 출력하세요.',
              initialCode: '# 함수를 만들어 결과를 출력하세요.',
              expectedOutputs: ['20'],
              hint: 'def bigger(a, b):\n    if a > b:\n        return a\n    return b\nprint(bigger(10, 20))'
            },
            {
              type: 'quiz_code',
              content: '리스트의 합을 반환하는 함수를 만들어 [1,2,3,4]로 호출한 결과를 출력하세요.',
              initialCode: 'def total(nums):\n    return sum(nums)\nprint(total([1, 2, 3, 4]))',
              expectedOutputs: ['10'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'return이 없는 함수를 호출한 결과가 None인지 확인하세요.',
              initialCode: 'def do_nothing():\n    pass\nprint(do_nothing())',
              expectedOutputs: ['None'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수의 반환값을 변수에 저장하려면?',
              options: ["결과 = 함수()","print(함수())만 가능","저장할 수 없다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '함수 호출 결과를 변수에 대입할 수 있어요.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'return 값이 없는 함수를 호출하면 반환값은?',
              options: ["None","0","에러"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'return이 없으면 자동으로 None을 반환합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['반환값을 변수에 저장하려면 ', ' 형태로 씁니다.'],
              wordBank: ["결과 = 함수()","함수() = 결과","print(함수)"],
              answer: ["결과 = 함수()"],
              hint: '대입으로 저장합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['return이 없는 함수는 ', ' 을 반환합니다.'],
              wordBank: ["None","0","빈 문자열"],
              answer: ["None"],
              hint: 'None입니다.'
            },
            {
              type: 'quiz_code',
              content: '함수의 반환값을 다른 함수의 인자로 사용해보세요.',
              initialCode: 'def add(a, b):\n    return a + b\ndef square(n):\n    return n * n\nprint(square(add(2, 3)))',
              expectedOutputs: ['25'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'return 뒤의 코드는 실행되지 않음을 확인하세요.',
              initialCode: 'def test():\n    return 1\n    print(\'실행 안됨\')\nprint(test())',
              expectedOutputs: ['1'],
              hint: '이미 정답입니다. return 뒤 코드는 무시됩니다.'
            },
            {
              type: 'quiz_code',
              content: '숫자가 짝수면 \'even\', 홀수면 \'odd\'를 반환하는 함수를 만들어 7로 호출한 결과를 출력하세요.',
              initialCode: '# 함수를 만드세요.',
              expectedOutputs: ['odd'],
              hint: 'def check(n):\n    if n % 2 == 0:\n        return \'even\'\n    return \'odd\'\nprint(check(7))'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'return 뒤의 코드는 어떻게 되나요?',
              options: ["실행되지 않는다","항상 실행된다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'return은 함수를 즉시 끝냅니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['return 아래의 코드는 ', ' 됩니다.'],
              wordBank: ["실행되지 않게","항상 실행","두 번 실행"],
              answer: ["실행되지 않게"],
              hint: '실행되지 않습니다.'
            },
            {
              type: 'quiz_code',
              content: '두 수의 곱과 합을 각각 반환하는 함수 두 개를 만들어 순서대로 출력하세요 (인자:3,4).',
              initialCode: '# 함수 두 개를 만드세요.',
              expectedOutputs: ['12\n7'],
              hint: 'def mul(a, b):\n    return a * b\ndef add(a, b):\n    return a + b\nprint(mul(3, 4))\nprint(add(3, 4))'
            },
            {
              type: 'quiz_code',
              content: '팩토리얼을 계산해 반환하는 함수를 만들어 5!을 출력하세요.',
              initialCode: '# 반복문을 사용한 팩토리얼 함수를 만드세요.',
              expectedOutputs: ['120'],
              hint: 'def factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\nprint(factorial(5))'
            },
            {
              type: 'quiz_code',
              content: '스스로 점수를 받아 60 이상이면 \'합격\', 아니면 \'불합격\'을 반환하는 함수를 만들어 75로 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['합격'],
              hint: 'def check(score):\n    if score >= 60:\n        return \'합격\'\n    return \'불합격\'\nprint(check(75))'
            }
          ]
        ]
      },
      {
        id: 'node_7_4',
        title: 'return의 숨겨진 비밀',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: 'return을 쓰지 않은 함수의 반환값은?',
              options: ["None","0","빈 리스트"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자동으로 None이 반환됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['return이 없으면 함수는 ', ' 을 반환합니다.'],
              wordBank: ["None","0","자기 자신"],
              answer: ["None"],
              hint: 'None입니다.'
            },
            {
              type: 'quiz_code',
              content: '두 값을 각각 몫과 나머지로 반환하는 함수를 만들어 출력하세요 (17, 5).',
              initialCode: 'def divmod_custom(a, b):\n    return a // b  a % b  # 쉼표가 빠졌어요!\nprint(divmod_custom(17, 5))',
              expectedOutputs: ['(3, 2)'],
              hint: 'return a // b, a % b'
            },
            {
              type: 'quiz_code',
              content: '함수가 반환한 튜플을 두 변수로 나눠 받아 출력하세요.',
              initialCode: 'def get_point():\n    return 3, 4\nx y = get_point()  # 쉼표가 빠졌어요!\nprint(x, y)',
              expectedOutputs: ['3 4'],
              hint: 'x, y = get_point()'
            },
            {
              type: 'quiz_code',
              content: 'return 없는 함수의 반환값이 None인지 확인하세요.',
              initialCode: 'def nothing():\n    x = 1\nprint(  ())',
              expectedOutputs: ['None'],
              hint: 'print(nothing())'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수가 return a, b 처럼 여러 값을 반환하면?',
              options: ["튜플로 묶여 반환된다","에러가 난다","첫 값만 반환된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '쉼표로 나열하면 튜플이 됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['return a, b 처럼 쓰면 ', ' 로 묶여 반환됩니다.'],
              wordBank: ["튜플","리스트","딕셔너리"],
              answer: ["튜플"],
              hint: '튜플입니다.'
            },
            {
              type: 'quiz_code',
              content: '이름과 나이를 튜플로 반환하는 함수를 만들어 출력하세요.',
              initialCode: 'def get_info():\n    return \'에그\', 5\nprint(get_info())',
              expectedOutputs: ['(\'에그\', 5)'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수가 반환한 이름, 나이를 각각 변수로 받아 출력하세요.',
              initialCode: 'def get_info():\n    return \'에그\', 5\nname, age = get_info()\nprint(name, age)',
              expectedOutputs: ['에그 5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '조건에 따라 다른 값을 반환하는 함수에서 실제 실행되는 return을 확인하세요 (n=5).',
              initialCode: 'def check(n):\n    if n > 0:\n        return \'양수\'\n    return \'0 이하\'\nprint(check(5))',
              expectedOutputs: ['양수'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'x, y = get_point() 처럼 여러 변수로 한 번에 받는 것을 뭐라 하나요?',
              options: ["튜플 언패킹","리스트 슬라이싱","딕셔너리 매핑"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '튜플을 풀어서 각 변수에 나눠 담는 것입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '조건별로 return이 여러 번 등장하는 함수에서 실제로 실행되는 return은?',
              options: ["가장 먼저 만나는 하나","전부 다","마지막 것만"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'return을 만나는 즉시 함수가 끝납니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['x, y = 함수() 처럼 나눠 담는 것을 ', ' 이라 합니다.'],
              wordBank: ["튜플 언패킹","슬라이싱","캐스팅"],
              answer: ["튜플 언패킹"],
              hint: '튜플 언패킹입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['여러 return 중 실제 실행되는 것은 ', ' 입니다.'],
              wordBank: ["가장 먼저 만나는 것","마지막 것","전부"],
              answer: ["가장 먼저 만나는 것"],
              hint: '가장 먼저 만나는 것입니다.'
            },
            {
              type: 'quiz_code',
              content: '최댓값과 최솟값을 튜플로 반환하는 함수를 만들어 [3,1,4,1,5]로 호출해 출력하세요.',
              initialCode: '# max()와 min()을 사용해 튜플로 반환하세요.',
              expectedOutputs: ['(5, 1)'],
              hint: 'def min_max(nums):\n    return max(nums), min(nums)\nprint(min_max([3, 1, 4, 1, 5]))'
            },
            {
              type: 'quiz_code',
              content: '함수의 반환값이 None일 때 조건문으로 구분해 \'값 없음\'을 출력하세요.',
              initialCode: 'def maybe():\n    pass\nresult = maybe()\nif result is None:\n    print(\'값 없음\')',
              expectedOutputs: ['값 없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '두 수의 합과 곱을 각각 반환하는 함수를 만들어 3, 4로 호출한 결과를 언패킹해 출력하세요.',
              initialCode: '# 튜플 언패킹을 사용하세요.',
              expectedOutputs: ['7 12'],
              hint: 'def calc(a, b):\n    return a + b, a * b\ns, p = calc(3, 4)\nprint(s, p)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수 안에 return이 없는데 print(함수())를 하면?',
              options: ["None이 출력된다","아무것도 출력 안 된다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '함수의 기본 반환값 None이 그대로 출력됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['print(함수())에서 함수에 return이 없으면 ', ' 가 출력됩니다.'],
              wordBank: ["None","빈 문자열","에러 메시지"],
              answer: ["None"],
              hint: 'None이 출력됩니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트에서 짝수와 홀수 개수를 각각 세어 튜플로 반환하는 함수를 만들어 [1,2,3,4,5]로 호출하세요.',
              initialCode: '# 짝수 개수, 홀수 개수를 세는 함수를 만드세요.',
              expectedOutputs: ['(2, 3)'],
              hint: 'def count_eo(nums):\n    e = 0\n    o = 0\n    for n in nums:\n        if n % 2 == 0:\n            e += 1\n        else:\n            o += 1\n    return e, o\nprint(count_eo([1, 2, 3, 4, 5]))'
            },
            {
              type: 'quiz_code',
              content: '성적을 받아 등급과 통과 여부를 튜플로 반환하는 함수를 만들어 85로 호출하세요.',
              initialCode: '# 등급과 통과 여부를 함께 반환하세요.',
              expectedOutputs: ['(\'B\', \'합격\')'],
              hint: 'def grade(score):\n    if score >= 90:\n        g = \'A\'\n    elif score >= 80:\n        g = \'B\'\n    else:\n        g = \'C\'\n    if score >= 60:\n        p = \'합격\'\n    else:\n        p = \'불합격\'\n    return g, p\nprint(grade(85))'
            },
            {
              type: 'quiz_code',
              content: '스스로 이름과 좋아하는 색을 튜플로 반환하는 함수를 만들어 언패킹해 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩 파랑'],
              hint: 'def me():\n    return \'코딩\', \'파랑\'\nname, color = me()\nprint(name, color)'
            }
          ]
        ]
      },
      {
        id: 'node_7_5',
        title: '내 땅과 남의 땅 (지역/전역 변수)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수 안에서 만든 변수는 어디서 쓸 수 있나요?',
              options: ["그 함수 안에서만","프로그램 전체에서","다른 함수에서도"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '지역 변수는 함수 안에서만 유효합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['함수 안에서만 쓰이는 변수를 ', ' 라고 합니다.'],
              wordBank: ["지역 변수","전역 변수","상수"],
              answer: ["지역 변수"],
              hint: '지역 변수입니다.'
            },
            {
              type: 'quiz_code',
              content: '전역 변수 x=10을 함수 안에서 출력하세요.',
              initialCode: 'x = 10\ndef show():\n    print(y)  # 변수 이름을 고치세요!\nshow()',
              expectedOutputs: ['10'],
              hint: 'print(x)'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 만든 지역 변수는 함수 밖에서 접근할 수 없음을 확인하세요.',
              initialCode: 'def make():\n    local_var = 5\nmake()\ntry:\n    print(local_var)\nexcept:\n    print(\'접근 불가\')',
              expectedOutputs: ['접근 불가'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '전역 변수 count=0을 global로 선언해 함수 안에서 1 증가시키세요.',
              initialCode: 'count = 0\ndef increase():\n    global count\n    count += 1\nincrease()\nprint(count)',
              expectedOutputs: ['1'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수 밖에서 정의된 변수를 뭐라 부르나요?',
              options: ["전역 변수","지역 변수","임시 변수"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '전역(global) 변수입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['함수 밖에서 정의된 변수를 ', ' 라고 합니다.'],
              wordBank: ["전역 변수","지역 변수","임시 변수"],
              answer: ["전역 변수"],
              hint: '전역 변수입니다.'
            },
            {
              type: 'quiz_code',
              content: 'global 없이 함수 안에서 전역 변수와 같은 이름에 값을 대입해도 전역 변수는 그대로임을 확인하세요.',
              initialCode: 'x = 10\ndef change():\n    x = 20\nchange()\nprint(x)',
              expectedOutputs: ['10'],
              hint: '이미 정답입니다. global 없이는 전역 변수가 바뀌지 않아요.'
            },
            {
              type: 'quiz_code',
              content: 'global로 점수(score=0)를 함수 호출마다 10씩 올려 2번 호출 후 출력하세요.',
              initialCode: 'score = 0\ndef add_score():\n    global score\n    score += 10\nadd_score()\nadd_score()\nprint(score)',
              expectedOutputs: ['20'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 지역 변수 total을 만들어 리스트 합을 구하고 반환하세요.',
              initialCode: 'def total(nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total\nprint(total([1, 2, 3]))',
              expectedOutputs: ['6'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수 안에서 전역 변수의 값을 읽을 수 있나요?',
              options: ["네, 읽기는 가능합니다","아니요, 전혀 접근 못합니다","쓰기만 가능합니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '읽기는 자유롭게 가능해요.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '함수 안에서 전역 변수의 값을 수정하려면?',
              options: ["global 키워드를 사용한다","그냥 대입하면 된다","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'global 키워드가 필요합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['함수 안에서 전역 변수를 읽는 것은 ', ' 합니다.'],
              wordBank: ["자유롭게 가능","불가능","조건부로만 가능"],
              answer: ["자유롭게 가능"],
              hint: '자유롭게 가능합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['전역 변수를 함수 안에서 수정하려면 ', ' 키워드가 필요합니다.'],
              wordBank: ["global","local","static"],
              answer: ["global"],
              hint: 'global입니다.'
            },
            {
              type: 'quiz_code',
              content: '전역 변수 hp=100을 함수에서 20 깎고, 그 결과를 전역 변수에 반영해 출력하세요.',
              initialCode: 'hp = 100\ndef damage():\n    global hp\n    hp -= 20\ndamage()\nprint(hp)',
              expectedOutputs: ['80'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '전역 리스트 cart=[]에 함수 안에서 \'egg\'를 추가하세요.',
              initialCode: 'cart = []\ndef add_item():\n    cart.append(\'egg\')\nadd_item()\nprint(cart)',
              expectedOutputs: ['[\'egg\']'],
              hint: '이미 정답입니다. 리스트/딕셔너리는 global 없이도 내용 수정이 가능해요.'
            },
            {
              type: 'quiz_code',
              content: '전역 변수 level=1을 함수 호출 3번으로 1씩 올려 4가 되는지 출력하세요.',
              initialCode: 'level = 1\ndef level_up():\n    global level\n    level += 1\n# 3번 호출하세요.',
              expectedOutputs: ['4'],
              hint: 'level_up()\nlevel_up()\nlevel_up()\nprint(level)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '함수 안에서 global 없이 전역 변수와 같은 이름에 값을 대입하면?',
              options: ["새로운 지역 변수가 만들어진다","전역 변수가 바뀐다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'global 선언 없이는 새 지역 변수가 생깁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['global 없이 대입하면 ', ' 이 새로 만들어집니다.'],
              wordBank: ["지역 변수","전역 변수","상수"],
              answer: ["지역 변수"],
              hint: '지역 변수가 새로 생깁니다.'
            },
            {
              type: 'quiz_code',
              content: '전역 변수 gold=100을 함수에서 가격만큼 차감하는 buy 함수를 만들어 30으로 호출 후 출력하세요.',
              initialCode: 'gold = 100\n# global을 사용한 buy 함수를 만드세요.',
              expectedOutputs: ['70'],
              hint: 'def buy(price):\n    global gold\n    gold -= price\nbuy(30)\nprint(gold)'
            },
            {
              type: 'quiz_code',
              content: '지역 변수와 전역 변수의 이름이 같을 때, 함수 안에서는 지역 변수가 우선됨을 확인하세요.',
              initialCode: 'name = \'전역이\'\ndef show():\n    name = \'지역이\'\n    print(name)\nshow()',
              expectedOutputs: ['지역이'],
              hint: '이미 정답입니다. 함수 안에서는 지역 변수가 우선 사용됩니다.'
            },
            {
              type: 'quiz_code',
              content: '스스로 전역 변수 exp=0을 만들고, global로 50씩 올리는 함수를 2번 호출해 결과를 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['100'],
              hint: 'exp = 0\ndef gain_exp():\n    global exp\n    exp += 50\ngain_exp()\ngain_exp()\nprint(exp)'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'UNIT 8\n고급 마법 (함수 심화)',
    nodes: [
      {
        id: 'node_8_1',
        title: '기본값 (Default Args)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '매개변수에 기본값을 주는 문법은?',
              options: ["def f(x=10):","def f(x:10):","def f(x==10):"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '등호로 기본값을 지정합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['매개변수에 기본값을 주려면 ', ' 로 지정합니다.'],
              wordBank: ["= (등호)",": (콜론)","== (비교)"],
              answer: ["= (등호)"],
              hint: '등호입니다.'
            },
            {
              type: 'quiz_code',
              content: '인사말 함수에 기본 이름 \'손님\'을 주고, 인자 없이 호출하세요.',
              initialCode: 'def greet(name = \'손님\')\n    print(\'안녕, \' + name)  # 콜론이 빠졌어요!\ngreet()',
              expectedOutputs: ['안녕, 손님'],
              hint: 'def greet(name=\'손님\'): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '기본값 10을 가진 매개변수 함수를 완성해 인자 없이 호출하세요.',
              initialCode: 'def show(n =   ):\n    print(n)\nshow()',
              expectedOutputs: ['10'],
              hint: 'def show(n=10):'
            },
            {
              type: 'quiz_code',
              content: '기본값 \'치킨\'을 가진 함수를 인자 없이, 그리고 \'피자\'로 각각 호출하세요.',
              initialCode: 'def order(food=\'치킨\'):\n    print(food)\norder()\norder(\'피자\')',
              expectedOutputs: ['치킨\n피자'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '기본값이 있는 매개변수를 인자 없이 호출하면?',
              options: ["기본값이 사용된다","에러가 난다","None이 사용된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '인자를 안 주면 기본값이 쓰입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['기본값이 있는 매개변수는 인자 없이 호출하면 ', ' 이 사용됩니다.'],
              wordBank: ["기본값","None","에러"],
              answer: ["기본값"],
              hint: '기본값이 쓰입니다.'
            },
            {
              type: 'quiz_code',
              content: '기본 인사말 \'안녕\'을 가진 함수에 이름을 넣어 호출하세요.',
              initialCode: 'def greet(name, msg=\'안녕\'):\n    print(msg + \', \' + name)\ngreet(\'에그\')',
              expectedOutputs: ['안녕, 에그'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '할인율 기본값 10을 가진 함수로 가격 1000의 할인 후 가격을 계산하세요.',
              initialCode: 'def discount(price, rate=10):\n    print(price - price * rate // 100)\ndiscount(1000)',
              expectedOutputs: ['900'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '기본값을 무시하고 직접 넘긴 인자가 우선 사용되는지 확인하세요.',
              initialCode: 'def power(base, exp=2):\n    print(base ** exp)\npower(2, 3)',
              expectedOutputs: ['8'],
              hint: '이미 정답입니다. exp=3이 우선 사용됩니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '기본값이 있어도 인자를 직접 주면?',
              options: ["넘긴 인자가 우선 사용된다","기본값이 항상 우선한다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '직접 넘긴 값이 우선합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '기본값 매개변수는 어디에 위치해야 하나요?',
              options: ["기본값 없는 매개변수 뒤에","항상 맨 앞에","아무 곳이나 상관없다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '기본값 없는 매개변수보다 뒤에 와야 합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['인자를 직접 넘기면 ', ' 이 우선 사용됩니다.'],
              wordBank: ["넘긴 인자","기본값","둘 다"],
              answer: ["넘긴 인자"],
              hint: '직접 넘긴 값이 우선합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['기본값 매개변수는 기본값 없는 매개변수보다 ', ' 위치해야 합니다.'],
              wordBank: ["뒤에","앞에","같은 자리에"],
              answer: ["뒤에"],
              hint: '뒤에 와야 합니다.'
            },
            {
              type: 'quiz_code',
              content: '레벨 기본값 1을 가진 캐릭터 생성 함수를 이름만으로, 그리고 이름+레벨로 호출하세요.',
              initialCode: 'def create(name, level=1):\n    print(name + \' Lv.\' + str(level))\ncreate(\'전사\')\ncreate(\'마법사\', 5)',
              expectedOutputs: ['전사 Lv.1\n마법사 Lv.5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '기본값 있는 매개변수(unit=\'개\')를 가진 함수를 만들어 호출해보세요.',
              initialCode: '# 함수를 정의하고 호출하세요.',
              expectedOutputs: ['사과 5개'],
              hint: 'def show(name, count, unit=\'개\'):\n    print(name + \' \' + str(count) + unit)\nshow(\'사과\', 5)'
            },
            {
              type: 'quiz_code',
              content: '기본값 있는 함수에서 키워드 인자로 순서를 바꿔 호출해보세요 (food=\'피자\', count=2).',
              initialCode: 'def order(food=\'치킨\', count=1):\n    print(food, count)\n# 키워드 인자로 순서를 바꿔 호출하세요.',
              expectedOutputs: ['피자 2'],
              hint: 'order(count=2, food=\'피자\')'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'def f(a, b=10, c): 처럼 쓰면?',
              options: ["SyntaxError 발생","정상 동작한다","c에 자동으로 기본값이 생긴다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '기본값 매개변수 뒤에 기본값 없는 매개변수가 오면 안 됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['기본값 매개변수 뒤에 일반 매개변수가 오면 ', ' 가 납니다.'],
              wordBank: ["SyntaxError","TypeError","경고만"],
              answer: ["SyntaxError"],
              hint: 'SyntaxError입니다.'
            },
            {
              type: 'quiz_code',
              content: '환영 메시지 기본값을 가진 함수를 만들어, 기본값과 커스텀 메시지 둘 다 테스트하세요.',
              initialCode: '# 함수를 정의하고 두 번 호출하세요.',
              expectedOutputs: ['환영합니다\n반갑습니다'],
              hint: 'def welcome(msg=\'환영합니다\'):\n    print(msg)\nwelcome()\nwelcome(\'반갑습니다\')'
            },
            {
              type: 'quiz_code',
              content: '기본 세율(tax=0.1)을 가진 가격 계산 함수를 만들어 세금 포함 가격(1000원)을 출력하세요.',
              initialCode: '# 함수를 정의하세요.',
              expectedOutputs: ['1100.0'],
              hint: 'def total_price(price, tax=0.1):\n    return price + price * tax\nprint(total_price(1000))'
            },
            {
              type: 'quiz_code',
              content: '스스로 기본 인사말(\'반갑습니다\')을 가진 함수를 만들어 이름을 붙여 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['반갑습니다, 에그'],
              hint: 'def greet(name, msg=\'반갑습니다\'):\n    print(msg + \', \' + name)\ngreet(\'에그\')'
            }
          ]
        ]
      },
      {
        id: 'node_8_2',
        title: '무제한 재료 받기 (*args)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 개의 인자를 개수 제한 없이 받으려면?',
              options: ["*args","**kwargs","args[]"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '별표 하나(*)를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['여러 인자를 개수 제한 없이 받으려면 ', ' 를 씁니다.'],
              wordBank: ["*args","**kwargs","args()"],
              answer: ["*args"],
              hint: '*args입니다.'
            },
            {
              type: 'quiz_code',
              content: '숫자를 몇 개든 받아 합계를 출력하는 함수를 만들어 1,2,3으로 호출하세요.',
              initialCode: 'def total(args):  # 별표가 빠졌어요!\n    print(sum(args))\ntotal(1, 2, 3)',
              expectedOutputs: ['6'],
              hint: 'def total(*args):'
            },
            {
              type: 'quiz_code',
              content: '*args로 받은 인자들을 튜플 그대로 출력하세요.',
              initialCode: 'def show(  args):\n    print(args)\nshow(1, 2, 3)',
              expectedOutputs: ['(1, 2, 3)'],
              hint: 'def show(*args):'
            },
            {
              type: 'quiz_code',
              content: '*args로 받은 숫자들의 최댓값을 출력하는 함수를 만들어 3,7,2로 호출하세요.',
              initialCode: 'def biggest(*nums):\n    print(max(nums))\nbiggest(3, 7, 2)',
              expectedOutputs: ['7'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '*args로 받은 인자들은 함수 안에서 어떤 자료형인가요?',
              options: ["튜플","리스트","딕셔너리"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '튜플로 묶여 들어옵니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['*args로 받은 값들은 ', ' 로 묶입니다.'],
              wordBank: ["튜플","리스트","딕셔너리"],
              answer: ["튜플"],
              hint: '튜플입니다.'
            },
            {
              type: 'quiz_code',
              content: '*args를 인자 없이 호출하면 빈 튜플이 되는지 확인하세요.',
              initialCode: 'def show(*args):\n    print(args)\nshow()',
              expectedOutputs: ['()'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '*args로 받은 문자열들을 공백으로 이어붙여 출력하세요.',
              initialCode: 'def join_words(*words):\n    print(\' \'.join(words))\njoin_words(\'나는\', \'코딩을\', \'좋아해\')',
              expectedOutputs: ['나는 코딩을 좋아해'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '고정 매개변수(title)와 *args를 함께 받는 함수를 만들어 호출하세요.',
              initialCode: 'def show(title, *items):\n    print(title, items)\nshow(\'장바구니\', \'사과\', \'바나나\')',
              expectedOutputs: ['장바구니 (\'사과\', \'바나나\')'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'def total(*nums): 를 total(1,2,3)으로 호출하면 nums는?',
              options: ["(1, 2, 3)","[1, 2, 3]","1, 2, 3"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '튜플로 묶입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '*args는 왜 유용한가요?',
              options: ["인자 개수가 몇 개든 유연하게 받을 수 있어서","항상 더 빠르기 때문에","에러를 방지하기 때문에"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '개수가 정해지지 않은 경우에 좋습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['*args는 인자 개수가 ', ' 때 유용합니다.'],
              wordBank: ["정해지지 않았을","정확히 2개일","항상 1개일"],
              answer: ["정해지지 않았을"],
              hint: '개수가 유동적일 때 좋습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['def f(a, *args): 에서 첫 인자는 ', ' 가 가져갑니다.'],
              wordBank: ["a","args","둘 다"],
              answer: ["a"],
              hint: 'a가 먼저 가져갑니다.'
            },
            {
              type: 'quiz_code',
              content: '*args로 받은 숫자들의 개수를 len()으로 출력하세요.',
              initialCode: 'def count(*nums):\n    print(len(nums))\ncount(1, 2, 3, 4, 5)',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '*args로 받은 숫자들 중 짝수만 골라 리스트로 출력하는 함수를 만드세요.',
              initialCode: '# *args와 for문을 사용하세요.',
              expectedOutputs: ['[2, 4]'],
              hint: 'def evens(*nums):\n    result = []\n    for n in nums:\n        if n % 2 == 0:\n            result.append(n)\n    print(result)\nevens(1, 2, 3, 4)'
            },
            {
              type: 'quiz_code',
              content: '*args로 받은 값들의 평균을 계산해 출력하는 함수를 만들어 2,4,6으로 호출하세요.',
              initialCode: '# 평균 계산 함수를 만드세요.',
              expectedOutputs: ['4.0'],
              hint: 'def average(*nums):\n    print(sum(nums) / len(nums))\naverage(2, 4, 6)'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'def f(a, *args): 를 f(1,2,3)으로 호출하면 args는?',
              options: ["(2, 3)","(1, 2, 3)","(3,)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '첫 인자는 a가 가져가고 나머지가 args에 담깁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['*args 안의 값을 하나씩 꺼내려면 ', ' 을 사용합니다.'],
              wordBank: ["for문","while문","if문"],
              answer: ["for문"],
              hint: 'for문으로 순회합니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트를 언패킹(*)해서 *args 함수에 넘겨보세요.',
              initialCode: 'def total(*nums):\n    print(sum(nums))\nmy_list = [1, 2, 3]\n# 리스트를 언패킹해서 넘기세요.',
              expectedOutputs: ['6'],
              hint: 'total(*my_list)'
            },
            {
              type: 'quiz_code',
              content: '*args로 받은 문자열 중 가장 긴 단어를 출력하는 함수를 만드세요.',
              initialCode: '# for문으로 가장 긴 단어를 찾으세요.',
              expectedOutputs: ['바나나'],
              hint: 'def longest(*words):\n    result = words[0]\n    for w in words:\n        if len(w) > len(result):\n            result = w\n    print(result)\nlongest(\'사과\', \'바나나\', \'배\')'
            },
            {
              type: 'quiz_code',
              content: '스스로 *args로 여러 점수를 받아 총합을 출력하는 함수를 만들어 90,85,100으로 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['275'],
              hint: 'def total_score(*scores):\n    print(sum(scores))\ntotal_score(90, 85, 100)'
            }
          ]
        ]
      },
      {
        id: 'node_8_3',
        title: '키워드 무제한 받기 (**kwargs)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '키워드 인자를 개수 제한 없이 받으려면?',
              options: ["**kwargs","*args","kwargs{}"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '별표 두 개(**)를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['키워드 인자를 개수 제한 없이 받으려면 ', ' 를 씁니다.'],
              wordBank: ["**kwargs","*args","kwargs()"],
              answer: ["**kwargs"],
              hint: '**kwargs입니다.'
            },
            {
              type: 'quiz_code',
              content: '이름과 나이를 키워드 인자로 받아 딕셔너리로 출력하세요.',
              initialCode: 'def show(info):  # 별표 두 개가 빠졌어요!\n    print(info)\nshow(name=\'에그\', age=5)',
              expectedOutputs: ['{\'name\': \'에그\', \'age\': 5}'],
              hint: 'def show(**info):'
            },
            {
              type: 'quiz_code',
              content: '**kwargs로 받은 정보를 그대로 출력하세요.',
              initialCode: 'def show(  kwargs):\n    print(kwargs)\nshow(city=\'서울\')',
              expectedOutputs: ['{\'city\': \'서울\'}'],
              hint: 'def show(**kwargs):'
            },
            {
              type: 'quiz_code',
              content: '**kwargs로 받은 딕셔너리의 키 개수를 출력하세요.',
              initialCode: 'def count_info(**info):\n    print(len(info))\ncount_info(name=\'에그\', age=5, job=\'학생\')',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '**kwargs로 받은 값들은 함수 안에서 어떤 자료형인가요?',
              options: ["딕셔너리","튜플","리스트"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '키-값 쌍이니 딕셔너리입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['**kwargs로 받은 값들은 ', ' 로 묶입니다.'],
              wordBank: ["딕셔너리","튜플","리스트"],
              answer: ["딕셔너리"],
              hint: '딕셔너리입니다.'
            },
            {
              type: 'quiz_code',
              content: '**kwargs를 인자 없이 호출하면 빈 딕셔너리가 되는지 확인하세요.',
              initialCode: 'def show(**kwargs):\n    print(kwargs)\nshow()',
              expectedOutputs: ['{}'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '**kwargs로 받은 값 중 \'name\'만 꺼내 출력하세요.',
              initialCode: 'def show(**info):\n    print(info[\'name\'])\nshow(name=\'에그\', age=5)',
              expectedOutputs: ['에그'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '고정 매개변수(title)와 **kwargs를 함께 받는 함수를 만들어 호출하세요.',
              initialCode: 'def show(title, **details):\n    print(title, details)\nshow(\'프로필\', name=\'에그\', age=5)',
              expectedOutputs: ['프로필 {\'name\': \'에그\', \'age\': 5}'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'def f(**info): 를 f(name=\'에그\', age=5)로 호출하면 info는?',
              options: ["{'name': '에그', 'age': 5}","('에그', 5)","['에그', 5]"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '딕셔너리로 묶입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '*args와 **kwargs를 함께 쓸 때 순서는?',
              options: ["*args가 먼저, **kwargs가 나중","**kwargs가 먼저","순서는 상관없다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '위치 인자류가 먼저 옵니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['*args와 **kwargs를 함께 쓸 때 ', ' 가 먼저 옵니다.'],
              wordBank: ["*args","**kwargs","순서 상관없음"],
              answer: ["*args"],
              hint: '*args가 먼저입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['**kwargs 안의 키-값을 순회하려면 ', ' 를 씁니다.'],
              wordBank: ["items()","keys()만","values()만"],
              answer: ["items()"],
              hint: 'items()입니다.'
            },
            {
              type: 'quiz_code',
              content: '**kwargs를 items()로 순회하며 \'키: 값\' 형태로 출력하세요.',
              initialCode: 'def show(**info):\n    for k, v in info.items():\n        print(k + \': \' + str(v))\nshow(name=\'에그\', age=5)',
              expectedOutputs: ['name: 에그\nage: 5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리를 언패킹(**)해서 **kwargs 함수에 넘겨보세요.',
              initialCode: 'def show(**info):\n    print(info)\nmy_dict = {\'name\': \'에그\', \'age\': 5}\n# 딕셔너리를 언패킹해서 넘기세요.',
              expectedOutputs: ['{\'name\': \'에그\', \'age\': 5}'],
              hint: 'show(**my_dict)'
            },
            {
              type: 'quiz_code',
              content: '**kwargs로 여러 과목 점수를 받아 총합을 출력하세요.',
              initialCode: 'def total_score(**scores):\n    print(sum(scores.values()))\ntotal_score(math=90, english=85)',
              expectedOutputs: ['175'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '**kwargs 안의 키-값을 순회하려면?',
              options: ["kwargs.items()","kwargs.args()","kwargs[0]"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '딕셔너리이므로 items()를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['**kwargs는 ', ' 이름으로 인자를 넘길 때 사용합니다.'],
              wordBank: ["키워드","위치","숫자"],
              answer: ["키워드"],
              hint: '키워드 인자용입니다.'
            },
            {
              type: 'quiz_code',
              content: '*args와 **kwargs를 함께 받는 함수를 만들어 각각 출력하세요.',
              initialCode: 'def show(*args, **kwargs):\n    print(args)\n    print(kwargs)\nshow(1, 2, name=\'에그\')',
              expectedOutputs: ['(1, 2)\n{\'name\': \'에그\'}'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '**kwargs로 받은 값 중 특정 키(\'age\')가 있는지 확인해 출력하세요.',
              initialCode: 'def check(**info):\n    print(\'age\' in info)\ncheck(name=\'에그\', age=5)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 **kwargs로 자신의 프로필(name, hobby)을 받아 출력하는 함수를 만들어 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['{\'name\': \'코딩\', \'hobby\': \'독서\'}'],
              hint: 'def profile(**info):\n    print(info)\nprofile(name=\'코딩\', hobby=\'독서\')'
            }
          ]
        ]
      },
      {
        id: 'node_8_4',
        title: '이름 없는 마법사 (Lambda)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '이름 없는 함수를 만드는 키워드는?',
              options: ["lambda","def","func"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'lambda 키워드를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['이름 없는 함수를 만들 땐 ', ' 키워드를 씁니다.'],
              wordBank: ["lambda","def","anon"],
              answer: ["lambda"],
              hint: 'lambda입니다.'
            },
            {
              type: 'quiz_code',
              content: '두 수를 더하는 lambda 함수를 만들어 3, 4로 호출한 결과를 출력하세요.',
              initialCode: 'add = lambda a, b: return a + b  # return이 필요 없어요!\nprint(add(3, 4))',
              expectedOutputs: ['7'],
              hint: 'lambda a, b: a + b'
            },
            {
              type: 'quiz_code',
              content: '숫자를 제곱하는 lambda 함수를 완성해 5로 호출하세요.',
              initialCode: 'square = lambda x:   \nprint(square(5))',
              expectedOutputs: ['25'],
              hint: 'lambda x: x * x'
            },
            {
              type: 'quiz_code',
              content: '두 수 중 큰 값을 반환하는 lambda 함수를 만들어 7, 3으로 호출하세요.',
              initialCode: 'bigger = lambda a, b: a if a > b else b\nprint(bigger(7, 3))',
              expectedOutputs: ['7'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'lambda x: x + 1 은 무엇을 하나요?',
              options: ["x에 1을 더해 반환한다","x를 그대로 반환한다","1을 반환한다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '콜론 뒤가 반환값입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['lambda는 ', ' 없이 표현식 자체를 반환합니다.'],
              wordBank: ["return","콜론","괄호"],
              answer: ["return"],
              hint: 'return이 필요 없습니다.'
            },
            {
              type: 'quiz_code',
              content: '이름을 받아 인사말을 반환하는 lambda 함수를 만들어 \'에그\'로 호출하세요.',
              initialCode: 'greet = lambda name: \'안녕, \' + name\nprint(greet(\'에그\'))',
              expectedOutputs: ['안녕, 에그'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '숫자가 짝수인지 확인하는 lambda 함수를 만들어 4로 호출하세요.',
              initialCode: 'is_even = lambda n: n % 2 == 0\nprint(is_even(4))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '세 수를 더하는 lambda 함수를 만들어 1,2,3으로 호출하세요.',
              initialCode: '# 세 매개변수를 받는 lambda를 만드세요.',
              expectedOutputs: ['6'],
              hint: 'add3 = lambda a, b, c: a + b + c\nprint(add3(1, 2, 3))'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'lambda 함수는 return을 쓸 수 있나요?',
              options: ["아니요, return 없이 표현식만 씁니다","네, 반드시 필요합니다","선택사항입니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'lambda는 표현식 자체가 반환값입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'lambda는 주로 언제 사용하나요?',
              options: ["간단한 함수를 짧게 한 줄로 쓸 때","복잡한 로직을 작성할 때","클래스를 정의할 때"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '간단한 일회성 함수에 적합합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['lambda는 ', ' 함수를 짧게 쓸 때 유용합니다.'],
              wordBank: ["간단한","복잡한","여러 줄의"],
              answer: ["간단한"],
              hint: '간단한 함수용입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['lambda 매개변수와 반환식은 ', ' 로 구분합니다.'],
              wordBank: [": (콜론)","; (세미콜론)","-> (화살표)"],
              answer: [": (콜론)"],
              hint: '콜론입니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트를 정렬할 때 key로 lambda를 사용해보세요 (문자열 길이 기준).',
              initialCode: 'words = [\'banana\', \'kiwi\', \'fig\']\nwords.sort(key=lambda w: len(w))\nprint(words)',
              expectedOutputs: ['[\'fig\', \'kiwi\', \'banana\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 리스트를 나이 기준으로 정렬해보세요.',
              initialCode: 'people = [{\'name\': \'철수\', \'age\': 30}, {\'name\': \'영희\', \'age\': 20}]\npeople.sort(key=lambda p: p[\'age\'])\nprint(people[0][\'name\'])',
              expectedOutputs: ['영희'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'lambda로 만든 함수를 변수 없이 즉시 호출해보세요.',
              initialCode: 'print((lambda x: x * 2)(5))',
              expectedOutputs: ['10'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'add = lambda a, b: a + b 를 add(2,3)으로 호출하면?',
              options: ["5","23","에러"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '일반 함수처럼 호출할 수 있습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['lambda로 만든 함수도 ', ' 처럼 호출할 수 있습니다.'],
              wordBank: ["일반 함수","클래스","모듈"],
              answer: ["일반 함수"],
              hint: '일반 함수처럼 호출됩니다.'
            },
            {
              type: 'quiz_code',
              content: '두 수의 나머지를 구하는 lambda를 만들어 17, 5로 호출하세요.',
              initialCode: '# lambda를 만드세요.',
              expectedOutputs: ['2'],
              hint: 'mod = lambda a, b: a % b\nprint(mod(17, 5))'
            },
            {
              type: 'quiz_code',
              content: '숫자 리스트를 lambda로 내림차순 정렬해보세요.',
              initialCode: 'nums = [3, 1, 4, 1, 5]\nnums.sort(key=lambda x: -x)\nprint(nums)',
              expectedOutputs: ['[5, 4, 3, 1, 1]'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 두 수를 곱하는 lambda 함수를 만들어 6, 7로 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['42'],
              hint: 'multiply = lambda a, b: a * b\nprint(multiply(6, 7))'
            }
          ]
        ]
      },
      {
        id: 'node_8_5',
        title: '지도 그리기 (map)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: 'map()은 무엇을 하는 함수인가요?',
              options: ["리스트의 모든 원소에 함수를 적용한다","리스트를 정렬한다","리스트의 길이를 센다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '각 원소에 함수를 적용시켜 새 결과를 만듭니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['리스트의 모든 원소에 함수를 적용하려면 ', ' 를 씁니다.'],
              wordBank: ["map()","filter()","sort()"],
              answer: ["map()"],
              hint: 'map()입니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트 [1,2,3]의 각 값을 제곱해 리스트로 출력하세요.',
              initialCode: 'nums = [1, 2, 3]\nresult = map(lambda x: x ** 2, nums)\nprint(result)  # list()로 감싸야 해요!',
              expectedOutputs: ['[1, 4, 9]'],
              hint: 'print(list(result))'
            },
            {
              type: 'quiz_code',
              content: '리스트 [1,2,3]의 각 값을 2배로 만들어 출력하세요.',
              initialCode: 'nums = [1, 2, 3]\nresult = list(map(lambda x:   , nums))\nprint(result)',
              expectedOutputs: ['[2, 4, 6]'],
              hint: 'lambda x: x * 2'
            },
            {
              type: 'quiz_code',
              content: '문자열 리스트 [\'1\',\'2\',\'3\']을 숫자로 변환해 출력하세요.',
              initialCode: 'strs = [\'1\', \'2\', \'3\']\nprint(list(map(int, strs)))',
              expectedOutputs: ['[1, 2, 3]'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'map(함수, 리스트)의 결과를 리스트로 보려면?',
              options: ["list(map(함수, 리스트))","map(함수, 리스트)","리스트(map())"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'map 객체를 list()로 감싸야 리스트가 됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['map()의 결과를 리스트로 보려면 ', ' 로 감쌉니다.'],
              wordBank: ["list()","str()","tuple()"],
              answer: ["list()"],
              hint: 'list()입니다.'
            },
            {
              type: 'quiz_code',
              content: '숫자 리스트 [1,2,3]을 문자열로 변환해 출력하세요.',
              initialCode: 'nums = [1, 2, 3]\nprint(list(map(str, nums)))',
              expectedOutputs: ['[\'1\', \'2\', \'3\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '리스트 [1,2,3,4]의 각 값에 10을 더해 출력하세요.',
              initialCode: 'nums = [1, 2, 3, 4]\n# map과 lambda를 사용하세요.',
              expectedOutputs: ['[11, 12, 13, 14]'],
              hint: 'print(list(map(lambda x: x + 10, nums)))'
            },
            {
              type: 'quiz_code',
              content: 'map()의 결과를 for문으로 바로 순회하며 출력하세요.',
              initialCode: 'nums = [1, 2, 3]\nfor n in map(lambda x: x * 2, nums):\n    print(n)',
              expectedOutputs: ['2\n4\n6'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'map()과 lambda는 왜 자주 함께 쓰이나요?',
              options: ["간단한 변환 함수를 즉석에서 만들 수 있어서","항상 더 빠르기 때문에","map은 lambda 없이 못 쓰기 때문에"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '간단한 변환에 lambda가 편리합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'map(str, [1,2,3])의 결과는?',
              options: ["각 숫자가 문자열로 변환된다","숫자 그대로다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'str 함수가 각 원소에 적용됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['map()은 ', ' 과 자주 함께 쓰입니다.'],
              wordBank: ["lambda","class","try"],
              answer: ["lambda"],
              hint: 'lambda와 자주 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['map(str, [1,2,3])은 각 숫자를 ', ' 로 바꿉니다.'],
              wordBank: ["문자열","실수","불리언"],
              answer: ["문자열"],
              hint: '문자열로 바꿉니다.'
            },
            {
              type: 'quiz_code',
              content: '두 리스트 [1,2,3]과 [10,20,30]을 더해 [11,22,33]을 만드세요.',
              initialCode: 'a = [1, 2, 3]\nb = [10, 20, 30]\nprint(list(map(lambda x, y: x + y, a, b)))',
              expectedOutputs: ['[11, 22, 33]'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '이름 리스트 [\'철수\',\'영희\']에 \'님\'을 붙여 map으로 변환하세요.',
              initialCode: 'names = [\'철수\', \'영희\']\n# map과 lambda를 사용하세요.',
              expectedOutputs: ['[\'철수님\', \'영희님\']'],
              hint: 'print(list(map(lambda n: n + \'님\', names)))'
            },
            {
              type: 'quiz_code',
              content: '숫자 리스트 [1,2,3,4,5]에서 map으로 짝수 여부를 변환해 출력하세요.',
              initialCode: 'nums = [1, 2, 3, 4, 5]\n# map을 사용하세요.',
              expectedOutputs: ['[False, True, False, True, False]'],
              hint: 'print(list(map(lambda n: n % 2 == 0, nums)))'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'map()의 결과를 for문으로 바로 순회할 수 있나요?',
              options: ["네, map 객체도 순회 가능합니다","아니요, 리스트로 변환해야만 합니다","항상 에러가 납니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'map 객체는 반복 가능한(iterable) 객체입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['map() 객체는 ', ' 가능한 객체입니다.'],
              wordBank: ["순회(반복)","저장","삭제"],
              answer: ["순회(반복)"],
              hint: '반복 가능한 객체입니다.'
            },
            {
              type: 'quiz_code',
              content: 'map()의 결과 리스트의 합을 sum()으로 구해 출력하세요.',
              initialCode: 'nums = [1, 2, 3]\nsquared = list(map(lambda x: x ** 2, nums))\nprint(sum(squared))',
              expectedOutputs: ['14'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 리스트에서 map으로 이름만 추출해 리스트로 출력하세요.',
              initialCode: 'people = [{\'name\': \'철수\'}, {\'name\': \'영희\'}]\n# map과 lambda로 이름만 추출하세요.',
              expectedOutputs: ['[\'철수\', \'영희\']'],
              hint: 'print(list(map(lambda p: p[\'name\'], people)))'
            },
            {
              type: 'quiz_code',
              content: '스스로 온도 리스트(섭씨)를 화씨로 변환하는 map을 만들어 [0, 100]으로 테스트해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['[32.0, 212.0]'],
              hint: 'celsius = [0, 100]\nprint(list(map(lambda c: c * 9 / 5 + 32, celsius)))'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'UNIT 9\n에러를 두려워하지 마',
    nodes: [
      {
        id: 'node_9_1',
        title: '치명적 오류와 방패 (try-except)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '예외 상황을 처리하는 문법은?',
              options: ["try-except","if-else","for-in"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'try 블록에서 에러가 나면 except가 잡습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['예외 상황을 처리하는 문법은 ', ' 입니다.'],
              wordBank: ["try-except","if-else","def-return"],
              answer: ["try-except"],
              hint: 'try-except입니다.'
            },
            {
              type: 'quiz_code',
              content: '10을 0으로 나누는 코드를 try-except로 감싸 \'에러 발생\'을 출력하세요.',
              initialCode: 'try:\n    print(10 / 0)\nexcept\n    print(\'에러 발생\')  # 콜론이 빠졌어요!',
              expectedOutputs: ['에러 발생'],
              hint: 'except: 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '리스트의 범위를 벗어난 인덱스 접근을 try-except로 처리하세요.',
              initialCode: 'nums = [1, 2, 3]\ntry:\n    print(nums[10])\n  :\n    print(\'범위 초과\')',
              expectedOutputs: ['범위 초과'],
              hint: 'except:'
            },
            {
              type: 'quiz_code',
              content: '정수 변환 실패를 try-except로 처리해 \'변환 실패\'를 출력하세요.',
              initialCode: 'try:\n    print(int(\'abc\'))\nexcept:\n    print(\'변환 실패\')',
              expectedOutputs: ['변환 실패'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'try 블록에서 에러가 나면?',
              options: ["except 블록이 실행된다","프로그램이 즉시 멈춘다","무시하고 계속된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러를 except가 잡아서 처리합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['try 블록에서 에러가 나면 ', ' 블록이 실행됩니다.'],
              wordBank: ["except","else","finally"],
              answer: ["except"],
              hint: 'except입니다.'
            },
            {
              type: 'quiz_code',
              content: '에러가 없는 코드를 try로 감싸도 정상 실행되는지 확인하세요.',
              initialCode: 'try:\n    print(10 / 2)\nexcept:\n    print(\'에러\')',
              expectedOutputs: ['5.0'],
              hint: '이미 정답입니다. 에러가 없으면 try 블록만 실행됩니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리에서 없는 키 접근을 try-except로 처리하세요.',
              initialCode: 'd = {\'a\': 1}\ntry:\n    print(d[\'b\'])\nexcept:\n    print(\'키 없음\')',
              expectedOutputs: ['키 없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '변수로 나눗셈을 try-except로 안전하게 처리하세요 (0으로 나누기).',
              initialCode: 'a = 10\nb = 0\ntry:\n    print(a / b)\nexcept:\n    print(\'0으로 나눌 수 없어요\')',
              expectedOutputs: ['0으로 나눌 수 없어요'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'try 블록에서 에러가 없으면 except는?',
              options: ["실행되지 않는다","무조건 실행된다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러가 있을 때만 실행됩니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'try-except를 쓰는 이유는?',
              options: ["에러로 프로그램이 멈추는 것을 막기 위해","코드를 더 빠르게 하기 위해","에러를 아예 없애기 위해"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러가 나도 프로그램이 계속 동작하게 합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['에러가 없으면 except는 ', ' 됩니다.'],
              wordBank: ["실행되지 않게","무조건 실행","에러 발생"],
              answer: ["실행되지 않게"],
              hint: '실행되지 않습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['try-except는 에러로 프로그램이 ', ' 것을 막습니다.'],
              wordBank: ["멈추는","빨라지는","느려지는"],
              answer: ["멈추는"],
              hint: '멈추는 것을 막습니다.'
            },
            {
              type: 'quiz_code',
              content: '리스트 순회 중 특정 인덱스에서 에러가 나도 계속 진행되도록 for문 안에 try-except를 넣으세요.',
              initialCode: 'nums = [1, 2, 3]\nfor i in range(5):\n    try:\n        print(nums[i])\n    except:\n        print(\'없음\')',
              expectedOutputs: ['없음'],
              hint: '이미 정답입니다. 마지막 줄만 확인해요.'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 예외 처리를 해 안전하게 나눗셈을 수행하는 함수를 만드세요.',
              initialCode: 'def safe_div(a, b):\n    try:\n        return a / b\n    except:\n        return None\nprint(safe_div(10, 0))',
              expectedOutputs: ['None'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '문자열을 숫자로 변환하는 안전한 함수를 만들어 실패 시 0을 반환하세요.',
              initialCode: 'def to_int(s):\n    try:\n        return int(s)\n    except:\n        return 0\nprint(to_int(\'hello\'))',
              expectedOutputs: ['0'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '10/0 을 try 없이 실행하면?',
              options: ["ZeroDivisionError로 프로그램이 멈춘다","0이 출력된다","무한대가 출력된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '0으로 나누면 에러가 납니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['0으로 나누면 ', ' 가 발생합니다.'],
              wordBank: ["ZeroDivisionError","ValueError","TypeError"],
              answer: ["ZeroDivisionError"],
              hint: 'ZeroDivisionError입니다.'
            },
            {
              type: 'quiz_code',
              content: '성공 케이스도 확인해보세요 (to_int(\'42\')는 42를 반환해야 함).',
              initialCode: 'def to_int(s):\n    try:\n        return int(s)\n    except:\n        return 0\nprint(to_int(\'42\'))',
              expectedOutputs: ['42'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '리스트 여러 개의 나눗셈을 순회하며 에러가 나는 것만 건너뛰고 계속 진행하세요.',
              initialCode: 'pairs = [(10, 2), (5, 0), (8, 4)]\nfor a, b in pairs:\n    try:\n        print(a / b)\n    except:\n        continue',
              expectedOutputs: ['2.0'],
              hint: '이미 정답입니다. 마지막 줄(2.0)만 확인해요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 리스트 인덱스 접근을 try-except로 안전하게 처리하는 함수를 만들어 범위를 벗어난 값으로 테스트해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['인덱스 없음'],
              hint: 'def safe_get(lst, i):\n    try:\n        return lst[i]\n    except:\n        return \'인덱스 없음\'\nprint(safe_get([1, 2, 3], 10))'
            }
          ]
        ]
      },
      {
        id: 'node_9_2',
        title: '특정 에러만 골라 잡기',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '특정 종류의 에러만 잡으려면?',
              options: ["except 에러종류:","except all:","except *:"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러 클래스 이름을 지정합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['특정 에러만 잡으려면 ', ' 뒤에 에러 종류를 씁니다.'],
              wordBank: ["except","try","catch"],
              answer: ["except"],
              hint: 'except입니다.'
            },
            {
              type: 'quiz_code',
              content: 'ZeroDivisionError만 잡아 \'0으로 나눌 수 없음\'을 출력하세요.',
              initialCode: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError\n    print(\'0으로 나눌 수 없음\')  # 콜론이 빠졌어요!',
              expectedOutputs: ['0으로 나눌 수 없음'],
              hint: 'except ZeroDivisionError: 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'ValueError만 잡아 \'숫자가 아님\'을 출력하세요.',
              initialCode: 'try:\n    print(int(\'abc\'))\nexcept   :\n    print(\'숫자가 아님\')',
              expectedOutputs: ['숫자가 아님'],
              hint: 'except ValueError:'
            },
            {
              type: 'quiz_code',
              content: 'KeyError를 잡아 \'키 없음\'을 출력하세요.',
              initialCode: 'd = {\'a\': 1}\ntry:\n    print(d[\'b\'])\nexcept KeyError:\n    print(\'키 없음\')',
              expectedOutputs: ['키 없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '0으로 나눌 때 발생하는 에러 종류는?',
              options: ["ZeroDivisionError","ValueError","KeyError"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'ZeroDivisionError입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['0으로 나눌 때 나는 에러는 ', ' 입니다.'],
              wordBank: ["ZeroDivisionError","ValueError","KeyError"],
              answer: ["ZeroDivisionError"],
              hint: 'ZeroDivisionError입니다.'
            },
            {
              type: 'quiz_code',
              content: 'IndexError를 잡아 \'범위 초과\'를 출력하세요.',
              initialCode: 'nums = [1, 2, 3]\ntry:\n    print(nums[10])\nexcept IndexError:\n    print(\'범위 초과\')',
              expectedOutputs: ['범위 초과'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'ZeroDivisionError와 ValueError를 각각 다르게 처리하는 코드에서 ZeroDivisionError 케이스를 확인하세요.',
              initialCode: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\'0으로 나눔\')\nexcept ValueError:\n    print(\'값 에러\')',
              expectedOutputs: ['0으로 나눔'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '같은 코드에서 ValueError 케이스도 확인해보세요 (int(\'abc\')로 변경).',
              initialCode: 'try:\n    print(int(\'abc\'))\nexcept ZeroDivisionError:\n    print(\'0으로 나눔\')\nexcept ValueError:\n    print(\'값 에러\')',
              expectedOutputs: ['값 에러'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '문자열을 숫자로 잘못 변환할 때 나는 에러는?',
              options: ["ValueError","TypeError","NameError"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'int(\'abc\') 같은 경우 ValueError가 납니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '여러 종류의 에러를 각각 다르게 처리하려면?',
              options: ["except를 여러 번 쓴다","try를 여러 번 쓴다","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'except ValueError:, except TypeError: 처럼 나눠 쓸 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['잘못된 형변환 시 나는 에러는 ', ' 입니다.'],
              wordBank: ["ValueError","TypeError","IndexError"],
              answer: ["ValueError"],
              hint: 'ValueError입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['여러 에러를 각각 처리하려면 ', ' 를 여러 번 씁니다.'],
              wordBank: ["except","try","finally"],
              answer: ["except"],
              hint: 'except를 여러 번 씁니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 접근에서 KeyError만 잡아보세요.',
              initialCode: 'd = {\'a\': 1}\ntry:\n    print(d[\'x\'])\nexcept KeyError:\n    print(\'키 에러\')',
              expectedOutputs: ['키 에러'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 ValueError만 잡아 안전하게 숫자로 변환하는 함수를 만드세요.',
              initialCode: 'def to_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        return -1\nprint(to_int(\'hello\'))',
              expectedOutputs: ['-1'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 키에 안전하게 접근하는 함수를 KeyError만 잡아 만드세요.',
              initialCode: 'def safe_get(d, key):\n    try:\n        return d[key]\n    except KeyError:\n        return \'없음\'\nprint(safe_get({\'a\': 1}, \'b\'))',
              expectedOutputs: ['없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '지정한 에러 종류와 다른 에러가 발생하면?',
              options: ["그 except가 잡지 못하고 에러가 그대로 발생한다","무조건 잡힌다","프로그램이 무시하고 계속된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '타입이 맞아야 잡힙니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['지정한 종류와 다른 에러는 ', ' 잡히지 않습니다.'],
              wordBank: ["해당 except에","항상","절대로 아무 except에도"],
              answer: ["해당 except에"],
              hint: '타입이 맞아야 잡힙니다.'
            },
            {
              type: 'quiz_code',
              content: '지정하지 않은 에러 종류가 발생하면 어떻게 되는지 확인하세요 (TypeError 예시).',
              initialCode: 'try:\n    print(\'a\' + 1)\nexcept ZeroDivisionError:\n    print(\'0으로 나눔\')\nexcept TypeError:\n    print(\'타입 에러\')',
              expectedOutputs: ['타입 에러'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '세 가지 에러를 각각 처리하는 함수를 만들어 KeyError 케이스로 테스트하세요.',
              initialCode: 'def handle(d):\n    try:\n        return d[\'x\'] / int(d[\'y\'])\n    except ZeroDivisionError:\n        return \'0으로 나눔\'\n    except ValueError:\n        return \'값 에러\'\n    except KeyError:\n        return \'키 에러\'\nprint(handle({\'y\': \'5\'}))',
              expectedOutputs: ['키 에러'],
              hint: '이미 정답입니다. \'x\' 키가 없어서 KeyError가 납니다.'
            },
            {
              type: 'quiz_code',
              content: '스스로 리스트 인덱스 접근에서 IndexError만 잡는 안전한 함수를 만들어 범위를 벗어난 값으로 테스트해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['인덱스 초과'],
              hint: 'def safe_get(lst, i):\n    try:\n        return lst[i]\n    except IndexError:\n        return \'인덱스 초과\'\nprint(safe_get([1, 2, 3], 10))'
            }
          ]
        ]
      },
      {
        id: 'node_9_3',
        title: '에러 메시지 훔쳐보기 (as e)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '에러 객체를 변수로 받으려면?',
              options: ["except 에러종류 as e:","except e = 에러종류:","except(e):"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'as 뒤에 변수 이름을 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['에러 객체를 변수로 받으려면 ', ' 뒤에 변수 이름을 씁니다.'],
              wordBank: ["as","=","->"],
              answer: ["as"],
              hint: 'as입니다.'
            },
            {
              type: 'quiz_code',
              content: 'ZeroDivisionError를 잡아 에러 메시지를 출력하세요.',
              initialCode: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError e:  # as가 빠졌어요!\n    print(str(e))',
              expectedOutputs: ['division by zero'],
              hint: 'except ZeroDivisionError as e: 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'ValueError의 메시지를 출력하세요.',
              initialCode: 'try:\n    print(int(\'abc\'))\nexcept ValueError as e:\n    print(  (e))',
              expectedOutputs: ['invalid literal for int() with base 10: \'abc\''],
              hint: 'print(str(e))'
            },
            {
              type: 'quiz_code',
              content: '에러 메시지를 e로 받아 그대로 출력하세요.',
              initialCode: 'try:\n    x = 1 / 0\nexcept Exception as e:\n    print(e)',
              expectedOutputs: ['division by zero'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'e 변수에 담긴 것은 무엇인가요?',
              options: ["에러에 대한 정보(메시지 등)","에러가 난 줄 번호","항상 None"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러 객체 자체가 담깁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['as e로 받은 e는 ', ' 정보를 담고 있습니다.'],
              wordBank: ["에러","성공","무관한"],
              answer: ["에러"],
              hint: '에러 정보입니다.'
            },
            {
              type: 'quiz_code',
              content: 'KeyError의 에러 메시지를 확인하세요.',
              initialCode: 'd = {\'a\': 1}\ntry:\n    print(d[\'b\'])\nexcept KeyError as e:\n    print(e)',
              expectedOutputs: ['\'b\''],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '일반 Exception으로 에러를 잡아 타입 이름을 출력하세요.',
              initialCode: 'try:\n    print(1 + \'1\')\nexcept Exception as e:\n    print(type(e).__name__)',
              expectedOutputs: ['TypeError'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '에러 메시지를 활용해 \'에러: 메시지\' 형태로 출력하세요.',
              initialCode: 'try:\n    print(10 / 0)\nexcept Exception as e:\n    print(\'에러: \' + str(e))',
              expectedOutputs: ['에러: division by zero'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'str(e)를 출력하면 무엇이 나오나요?',
              options: ["에러 메시지 문자열","에러 이름만","숫자 코드"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러의 설명 문자열이 나옵니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'as e는 어떤 상황에서 유용한가요?',
              options: ["에러의 구체적인 원인을 확인하고 싶을 때","에러를 무시하고 싶을 때","항상 필수일 때"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '디버깅에 도움이 됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['str(e)는 ', ' 을 문자열로 보여줍니다.'],
              wordBank: ["에러 메시지","에러 이름만","줄 번호"],
              answer: ["에러 메시지"],
              hint: '에러 메시지입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['as e는 에러의 구체적인 ', ' 을 확인할 때 유용합니다.'],
              wordBank: ["원인","이름만","여부"],
              answer: ["원인"],
              hint: '원인 파악에 유용합니다.'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 예외를 잡아 메시지를 반환하세요.',
              initialCode: 'def safe_div(a, b):\n    try:\n        return a / b\n    except Exception as e:\n        return str(e)\nprint(safe_div(5, 0))',
              expectedOutputs: ['division by zero'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 나눗셈을 시도하며 에러가 난 경우 메시지를 출력하세요.',
              initialCode: 'pairs = [(10, 2), (5, 0)]\nfor a, b in pairs:\n    try:\n        print(a / b)\n    except Exception as e:\n        print(str(e))',
              expectedOutputs: ['division by zero'],
              hint: '이미 정답입니다. 마지막 줄만 확인해요.'
            },
            {
              type: 'quiz_code',
              content: '에러 타입 이름만 추출해 출력하세요.',
              initialCode: 'try:\n    print([1, 2][10])\nexcept Exception as e:\n    print(type(e).__name__)',
              expectedOutputs: ['IndexError'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'print(e)와 print(str(e))의 차이는?',
              options: ["대부분의 경우 결과가 같다","완전히 다른 값이 나온다","print(e)는 항상 에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '에러 객체의 문자열 표현이 같은 경우가 많습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['as e 없이는 에러 발생 여부만 알고 ', ' 은 알 수 없습니다.'],
              wordBank: ["구체적인 메시지","에러가 났는지","프로그램 종료 여부"],
              answer: ["구체적인 메시지"],
              hint: '구체적인 메시지를 알 수 없습니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 접근 에러의 타입 이름을 출력하세요.',
              initialCode: 'd = {}\ntry:\n    print(d[\'x\'])\nexcept Exception as e:\n    print(type(e).__name__)',
              expectedOutputs: ['KeyError'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수에서 에러 타입에 따라 다른 메시지를 만들어 반환하세요.',
              initialCode: 'def describe(f):\n    try:\n        f()\n    except Exception as e:\n        return type(e).__name__ + \': \' + str(e)\nprint(describe(lambda: 1 / 0))',
              expectedOutputs: ['ZeroDivisionError: division by zero'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 리스트 인덱스 에러를 잡아 \'에러타입: 메시지\' 형태로 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['IndexError: list index out of range'],
              hint: 'try:\n    [1, 2, 3][10]\nexcept Exception as e:\n    print(type(e).__name__ + \': \' + str(e))'
            }
          ]
        ]
      },
      {
        id: 'node_9_4',
        title: '무조건 실행되는 (finally)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '에러 발생 여부와 상관없이 항상 실행되는 블록은?',
              options: ["finally","except","else"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'finally는 항상 실행됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['에러 여부와 상관없이 항상 실행되는 것은 ', ' 입니다.'],
              wordBank: ["finally","except","if"],
              answer: ["finally"],
              hint: 'finally입니다.'
            },
            {
              type: 'quiz_code',
              content: '에러 여부와 상관없이 \'종료\'를 출력하세요.',
              initialCode: 'try:\n    print(10 / 0)\nexcept:\n    print(\'에러\')\nfinal:\n    print(\'종료\')  # finally로 고치세요!',
              expectedOutputs: ['종료'],
              hint: 'finally: 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '에러가 없어도 finally가 실행되는지 확인하세요.',
              initialCode: 'try:\n    print(10 / 2)\n  :\n    print(\'항상 실행\')',
              expectedOutputs: ['항상 실행'],
              hint: 'finally:'
            },
            {
              type: 'quiz_code',
              content: '에러가 나는 경우에도 finally가 실행되는지 확인하세요.',
              initialCode: 'try:\n    print(1 / 0)\nexcept:\n    print(\'에러 발생\')\nfinally:\n    print(\'종료\')',
              expectedOutputs: ['에러 발생\n종료'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'finally는 try-except 중 어디에 위치하나요?',
              options: ["가장 마지막","가장 처음","except 이전"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '모든 처리 후 마지막에 옵니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['finally는 try-except 구조의 ', ' 에 위치합니다.'],
              wordBank: ["가장 마지막","가장 처음","중간"],
              answer: ["가장 마지막"],
              hint: '가장 마지막입니다.'
            },
            {
              type: 'quiz_code',
              content: '에러가 안 나는 케이스도 확인하세요.',
              initialCode: 'try:\n    print(10 / 2)\nexcept:\n    print(\'에러 발생\')\nfinally:\n    print(\'종료\')',
              expectedOutputs: ['5.0\n종료'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 return이 있어도 finally가 실행되는지 확인하세요.',
              initialCode: 'def test():\n    try:\n        return \'결과\'\n    finally:\n        print(\'finally 실행\')\nprint(test())',
              expectedOutputs: ['finally 실행\n결과'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '자원 정리 패턴을 만들어보세요 (\'열기\'->에러->\'닫기\').',
              initialCode: 'try:\n    print(\'열기\')\n    print(1 / 0)\nexcept:\n    print(\'에러 처리\')\nfinally:\n    print(\'닫기\')',
              expectedOutputs: ['열기\n에러 처리\n닫기'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'try에서 에러가 안 나도 finally는 실행되나요?',
              options: ["네, 항상 실행됩니다","아니요, 에러가 나야만 실행됩니다","조건에 따라 다릅니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'finally는 항상 실행됩니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'finally는 주로 어떤 용도로 쓰이나요?',
              options: ["파일 닫기 등 마무리 작업","에러 잡기","조건 검사"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자원 정리(파일 닫기 등)에 자주 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['에러가 안 나도 finally는 ', ' 됩니다.'],
              wordBank: ["실행","무시","생략"],
              answer: ["실행"],
              hint: '항상 실행됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['finally는 주로 ', ' 작업에 사용됩니다.'],
              wordBank: ["마무리(정리)","에러 잡기","반복"],
              answer: ["마무리(정리)"],
              hint: '마무리 작업입니다.'
            },
            {
              type: 'quiz_code',
              content: 'finally 안에서 변수를 정리하는 코드를 작성해보세요.',
              initialCode: 'connected = True\ntry:\n    print(1 / 0)\nexcept:\n    print(\'에러\')\nfinally:\n    connected = False\n    print(\'연결 상태:\', connected)',
              expectedOutputs: ['연결 상태: False'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'try-except-finally를 모두 갖춘 안전한 나눗셈 함수를 만드세요.',
              initialCode: 'def safe_div(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        result = None\n    finally:\n        print(\'계산 시도 완료\')\n    return result\nprint(safe_div(10, 0))',
              expectedOutputs: ['계산 시도 완료\nNone'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 값에 대해 안전한 나눗셈을 시도하며 finally로 매 시도마다 로그를 남기세요.',
              initialCode: 'for b in [2, 0]:\n    try:\n        print(10 / b)\n    except:\n        print(\'실패\')\n    finally:\n        print(\'시도 완료\')',
              expectedOutputs: ['5.0\n시도 완료\n실패\n시도 완료'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'try 안에 return이 있어도 finally는 실행되나요?',
              options: ["네, return 전에 실행됩니다","아니요, 건너뜁니다","에러가 납니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'finally는 return이 있어도 반드시 실행됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['try 안에 return이 있어도 finally는 ', ' 실행됩니다.'],
              wordBank: ["반드시","건너뛰고","때때로"],
              answer: ["반드시"],
              hint: '반드시 실행됩니다.'
            },
            {
              type: 'quiz_code',
              content: 'finally 블록에서 카운터를 증가시켜 몇 번 시도했는지 세어보세요.',
              initialCode: 'count = 0\nfor b in [1, 0, 2]:\n    try:\n        10 / b\n    except:\n        pass\n    finally:\n        count += 1\nprint(count)',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '리소스 사용 흉내를 내는 함수를 만들어보세요 (성공/실패 모두 \'정리\'가 출력되어야 함).',
              initialCode: 'def use_resource(fail):\n    try:\n        if fail:\n            raise ValueError(\'실패\')\n        print(\'작업 성공\')\n    except ValueError:\n        print(\'작업 실패\')\n    finally:\n        print(\'정리\')\nuse_resource(True)',
              expectedOutputs: ['작업 실패\n정리'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 try-except-finally 구조로 0으로 나누기를 시도하고, finally에서 \'작업 종료\'를 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['작업 종료'],
              hint: 'try:\n    10 / 0\nexcept:\n    print(\'에러\')\nfinally:\n    print(\'작업 종료\')'
            }
          ]
        ]
      },
      {
        id: 'node_9_5',
        title: '에러 강제 소환 (raise)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '직접 에러를 발생시키는 키워드는?',
              options: ["raise","throw","error"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'raise를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['직접 에러를 발생시키려면 ', ' 키워드를 씁니다.'],
              wordBank: ["raise","throw","force"],
              answer: ["raise"],
              hint: 'raise입니다.'
            },
            {
              type: 'quiz_code',
              content: '나이가 음수면 ValueError를 발생시켜 잡아 출력하세요.',
              initialCode: 'age = -5\ntry:\n    if age < 0:\n        rase ValueError(\'나이는 음수일 수 없어요\')  # 오타를 고치세요!\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['나이는 음수일 수 없어요'],
              hint: 'rase -> raise'
            },
            {
              type: 'quiz_code',
              content: '점수가 100을 넘으면 ValueError를 발생시키세요.',
              initialCode: 'score = 150\ntry:\n    if score > 100:\n           ValueError(\'점수는 100을 넘을 수 없어요\')\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['점수는 100을 넘을 수 없어요'],
              hint: 'raise ValueError(...)'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 잘못된 값이면 raise로 에러를 발생시키고 호출부에서 잡으세요.',
              initialCode: 'def set_age(age):\n    if age < 0:\n        raise ValueError(\'음수 불가\')\n    return age\ntry:\n    set_age(-1)\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['음수 불가'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'raise ValueError(\'메시지\') 를 실행하면?',
              options: ["ValueError가 발생한다","아무 일도 없다","메시지만 출력된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '실제로 에러를 발생시킵니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['raise ValueError(\'메시지\')는 ', ' 를 발생시킵니다.'],
              wordBank: ["실제 에러","경고 메시지만","아무 효과 없음"],
              answer: ["실제 에러"],
              hint: '실제 에러를 발생시킵니다.'
            },
            {
              type: 'quiz_code',
              content: 'raise로 발생시킨 에러가 정상적으로 잡히는지 확인하세요.',
              initialCode: 'def check_divisor(b):\n    if b == 0:\n        raise ZeroDivisionError(\'0으로 나눌 수 없어요\')\n    return 10 / b\ntry:\n    check_divisor(0)\nexcept ZeroDivisionError as e:\n    print(e)',
              expectedOutputs: ['0으로 나눌 수 없어요'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'raise된 에러 메시지에 값을 포함시켜보세요.',
              initialCode: 'age = -3\ntry:\n    if age < 0:\n        raise ValueError(\'나이 \' + str(age) + \'는 유효하지 않습니다\')\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['나이 -3는 유효하지 않습니다'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수에서 raise된 에러를 넓은 Exception으로 감싸 잡아보세요.',
              initialCode: 'def validate(n):\n    if n < 0:\n        raise ValueError(\'음수 불가\')\ntry:\n    validate(-1)\nexcept Exception as e:\n    print(str(e))',
              expectedOutputs: ['음수 불가'],
              hint: '이미 정답입니다. Exception은 ValueError도 잡을 수 있어요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'raise를 사용하는 이유는?',
              options: ["잘못된 입력값 등을 명시적으로 알리기 위해","에러를 없애기 위해","코드를 빠르게 하기 위해"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '조건에 맞지 않으면 직접 에러를 알릴 수 있어요.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '함수 안에서 raise된 에러는 어떻게 되나요?',
              options: ["호출한 곳까지 전파되어 처리해야 한다","함수 안에서 자동으로 사라진다","항상 무시된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'try-except로 잡지 않으면 호출부까지 전달됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['raise는 잘못된 입력을 ', ' 위해 사용합니다.'],
              wordBank: ["명시적으로 알리기","숨기기","자동 수정하기"],
              answer: ["명시적으로 알리기"],
              hint: '명시적으로 알리기 위함입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['함수 안에서 raise된 에러는 ', ' 까지 전파됩니다.'],
              wordBank: ["호출한 곳","같은 함수 안에서 소멸","전역 변수로"],
              answer: ["호출한 곳"],
              hint: '호출한 곳까지 전파됩니다.'
            },
            {
              type: 'quiz_code',
              content: '비밀번호 길이가 4 미만이면 raise로 에러를 발생시키세요.',
              initialCode: 'pw = \'123\'\ntry:\n    if len(pw) < 4:\n        raise ValueError(\'비밀번호가 너무 짧아요\')\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['비밀번호가 너무 짧아요'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수에서 입력값을 검증해 조건에 어긋나면 raise하세요 (재고가 음수인 경우).',
              initialCode: 'def add_stock(n):\n    if n < 0:\n        raise ValueError(\'재고는 음수가 될 수 없어요\')\n    return n\ntry:\n    add_stock(-5)\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['재고는 음수가 될 수 없어요'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'raise한 에러를 잡아 원래 값 대신 기본값을 반환하는 안전한 함수를 만드세요.',
              initialCode: 'def safe_set(age):\n    try:\n        if age < 0:\n            raise ValueError(\'음수 불가\')\n        return age\n    except ValueError:\n        return 0\nprint(safe_set(-10))',
              expectedOutputs: ['0'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'raise Exception(\'메시지\')를 try 없이 실행하면?',
              options: ["프로그램이 멈추고 에러 메시지가 출력된다","조용히 넘어간다","메시지만 출력되고 계속된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '잡지 않으면 프로그램이 중단됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['raise된 에러를 try로 안 잡으면 프로그램이 ', ' 됩니다.'],
              wordBank: ["중단","일시정지","자동 재시작"],
              answer: ["중단"],
              hint: '중단됩니다.'
            },
            {
              type: 'quiz_code',
              content: '여러 유효성 검사를 하나의 함수에서 처리하며 각각 다른 메시지로 raise하세요.',
              initialCode: 'def validate_age(age):\n    if age < 0:\n        raise ValueError(\'음수 불가\')\n    if age > 150:\n        raise ValueError(\'나이가 너무 큽니다\')\n    return age\ntry:\n    validate_age(200)\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['나이가 너무 큽니다'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'raise된 에러를 잡아 로그를 남기고 기본값을 반환하는 함수를 만들어보세요.',
              initialCode: 'def parse_score(s):\n    try:\n        score = int(s)\n        if score < 0 or score > 100:\n            raise ValueError(\'점수 범위 초과\')\n        return score\n    except ValueError as e:\n        print(\'경고: \' + str(e))\n        return -1\nprint(parse_score(\'150\'))',
              expectedOutputs: ['경고: 점수 범위 초과\n-1'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 나이를 매개변수로 받아 음수면 raise하고, 호출부에서 안전하게 처리하는 코드를 작성해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['유효하지 않은 나이입니다'],
              hint: 'def check(age):\n    if age < 0:\n        raise ValueError(\'유효하지 않은 나이입니다\')\n    return age\ntry:\n    check(-1)\nexcept ValueError as e:\n    print(e)'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'UNIT 10\n붕어빵의 철학 (OOP 기초)',
    nodes: [
      {
        id: 'node_10_1',
        title: '붕어빵 틀과 붕어빵 (클래스와 객체)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '클래스는 무엇에 비유할 수 있나요?',
              options: ["붕어빵 틀(설계도)","완성된 붕어빵","재료"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '클래스는 객체를 만드는 설계도입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['클래스는 ', ' 에 비유할 수 있습니다.'],
              wordBank: ["붕어빵 틀(설계도)","완성된 붕어빵","가게"],
              answer: ["붕어빵 틀(설계도)"],
              hint: '설계도입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Dog를 정의하고 객체를 만들어보세요.',
              initialCode: 'class Dog\n    pass  # 콜론이 빠졌어요!\nmy_dog = Dog()\nprint(type(my_dog).__name__)',
              expectedOutputs: ['Dog'],
              hint: 'class Dog: 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '빈 클래스 Cat을 만들고 객체를 생성해 타입을 출력하세요.',
              initialCode: 'class Cat:\n    \nmy_cat =   ()\nprint(type(my_cat).__name__)',
              expectedOutputs: ['Cat'],
              hint: 'my_cat = Cat()'
            },
            {
              type: 'quiz_code',
              content: '클래스 Car로 객체 두 개를 만들어 서로 다른 객체인지 확인하세요.',
              initialCode: 'class Car:\n    pass\ncar1 = Car()\ncar2 = Car()\nprint(car1 is car2)',
              expectedOutputs: ['False'],
              hint: '이미 정답입니다. 서로 다른 객체입니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '클래스로 만들어진 실제 결과물을 뭐라 하나요?',
              options: ["객체(인스턴스)","함수","모듈"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '틀에서 찍어낸 붕어빵이 객체입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['클래스로 만든 실제 결과물을 ', ' 라고 합니다.'],
              wordBank: ["객체(인스턴스)","함수","변수"],
              answer: ["객체(인스턴스)"],
              hint: '객체입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Robot으로 만든 객체의 타입을 확인하세요.',
              initialCode: 'class Robot:\n    pass\nr = Robot()\nprint(type(r).__name__)',
              expectedOutputs: ['Robot'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Robot으로 3개의 객체를 만들고 개수를 확인하세요.',
              initialCode: 'class Robot:\n    pass\nrobots = [Robot(), Robot(), Robot()]\nprint(len(robots))',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Fish로 객체를 만들고 isinstance()로 타입을 확인하세요.',
              initialCode: 'class Fish:\n    pass\nnemo = Fish()\nprint(isinstance(nemo, Fish))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '하나의 클래스로 여러 객체를 만들 수 있나요?',
              options: ["네, 여러 개 만들 수 있습니다","아니요, 하나만 가능합니다","클래스당 정확히 2개만"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '틀 하나로 붕어빵을 여러 개 찍어낼 수 있죠.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '클래스와 객체의 관계는?',
              options: ["클래스는 설계도, 객체는 그 설계도로 만든 실체","클래스와 객체는 완전히 같다","객체가 클래스를 만든다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '설계도-실체 관계입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['하나의 클래스로 ', ' 객체를 만들 수 있습니다.'],
              wordBank: ["여러 개의","딱 하나의","정확히 두 개의"],
              answer: ["여러 개의"],
              hint: '여러 개 가능합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['클래스는 ', ' 이고 객체는 그로 만든 실체입니다.'],
              wordBank: ["설계도","완성품 그 자체","무관한 개념"],
              answer: ["설계도"],
              hint: '설계도입니다.'
            },
            {
              type: 'quiz_code',
              content: '서로 다른 두 클래스로 만든 객체가 다른 타입인지 확인하세요.',
              initialCode: 'class Dog:\n    pass\nclass Cat:\n    pass\nd = Dog()\nc = Cat()\nprint(type(d) == type(c))',
              expectedOutputs: ['False'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Student로 3개의 객체를 만들어 각 타입 이름을 출력하세요.',
              initialCode: 'class Student:\n    pass\nstudents = [Student(), Student(), Student()]\nfor s in students:\n    print(type(s).__name__)',
              expectedOutputs: ['Student\nStudent\nStudent'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스로 만든 객체에 속성을 나중에 추가해보세요.',
              initialCode: 'class Point:\n    pass\np = Point()\np.x = 3\np.y = 4\nprint(p.x, p.y)',
              expectedOutputs: ['3 4'],
              hint: '이미 정답입니다. 객체에 속성을 나중에 추가할 수도 있어요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '왜 클래스를 사용하나요?',
              options: ["비슷한 데이터와 기능을 묶어 재사용하기 위해","코드를 무조건 짧게 만들기 위해","변수를 못 쓰게 하려고"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '관련된 데이터와 동작을 하나로 묶습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['클래스를 쓰면 관련된 데이터와 기능을 ', ' 묶을 수 있습니다.'],
              wordBank: ["하나로","따로따로","무작위로"],
              answer: ["하나로"],
              hint: '하나로 묶습니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Point의 객체 두 개에 각각 다른 속성값을 부여해보세요.',
              initialCode: 'class Point:\n    pass\np1 = Point()\np1.x = 1\np2 = Point()\np2.x = 2\nprint(p1.x, p2.x)',
              expectedOutputs: ['1 2'],
              hint: '이미 정답입니다. 각 객체는 독립적인 속성을 가집니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Animal로 만든 5개의 객체 개수를 세는 코드를 작성해보세요.',
              initialCode: 'class Animal:\n    pass\nzoo = []\nfor i in range(5):\n    zoo.append(Animal())\nprint(len(zoo))',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 클래스 Egg를 정의하고 객체를 만들어 타입 이름을 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['Egg'],
              hint: 'class Egg:\n    pass\ne = Egg()\nprint(type(e).__name__)'
            }
          ]
        ]
      },
      {
        id: 'node_10_2',
        title: '나만의 클래스 만들기',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '클래스 안에 정의하는 함수를 뭐라 하나요?',
              options: ["메서드","일반함수","서브루틴"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '클래스 안의 함수는 메서드라고 부릅니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['클래스 안에 정의하는 함수를 ', ' 라고 합니다.'],
              wordBank: ["메서드","서브루틴","매크로"],
              answer: ["메서드"],
              hint: '메서드입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Dog에 bark 메서드를 만들어 호출하세요.',
              initialCode: 'class Dog:\n    def bark():  # self가 빠졌어요!\n        print(\'멍멍!\')\nd = Dog()\nd.bark()',
              expectedOutputs: ['멍멍!'],
              hint: 'def bark(self):'
            },
            {
              type: 'quiz_code',
              content: '클래스 Cat에 meow 메서드를 완성해 호출하세요.',
              initialCode: 'class Cat:\n    def meow(  ):\n        print(\'야옹\')\nc = Cat()\nc.meow()',
              expectedOutputs: ['야옹'],
              hint: 'def meow(self):'
            },
            {
              type: 'quiz_code',
              content: '클래스 Person에 greet 메서드를 만들어 호출하세요.',
              initialCode: 'class Person:\n    def greet(self):\n        print(\'안녕하세요\')\np = Person()\np.greet()',
              expectedOutputs: ['안녕하세요'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '메서드의 첫 번째 매개변수는 관례적으로 무엇인가요?',
              options: ["self","this","obj"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '파이썬은 self를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['메서드의 첫 매개변수는 관례적으로 ', ' 를 씁니다.'],
              wordBank: ["self","this","me"],
              answer: ["self"],
              hint: 'self입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스에 메서드 두 개를 정의해 각각 호출하세요.',
              initialCode: 'class Robot:\n    def move(self):\n        print(\'이동\')\n    def stop(self):\n        print(\'정지\')\nr = Robot()\nr.move()\nr.stop()',
              expectedOutputs: ['이동\n정지'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '같은 클래스로 만든 두 객체가 각각 메서드를 독립적으로 호출하는지 확인하세요.',
              initialCode: 'class Dog:\n    def bark(self):\n        print(\'멍멍\')\nd1 = Dog()\nd2 = Dog()\nd1.bark()\nd2.bark()',
              expectedOutputs: ['멍멍\n멍멍'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '메서드 안에서 값을 반환해보세요.',
              initialCode: 'class Calculator:\n    def add(self, a, b):\n        return a + b\ncalc = Calculator()\nprint(calc.add(3, 4))',
              expectedOutputs: ['7'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'self는 무엇을 가리키나요?',
              options: ["메서드를 호출한 객체 자기 자신","클래스 이름","전역 변수"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자기 자신(인스턴스)을 가리킵니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '객체.메서드()를 호출하면 self에는 무엇이 자동으로 전달되나요?',
              options: ["호출한 객체 자신","아무것도 전달 안 됨","클래스 자체"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '파이썬이 자동으로 객체를 self에 넘겨줍니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['self는 ', ' 을 가리킵니다.'],
              wordBank: ["자기 자신(인스턴스)","클래스 이름","부모 클래스"],
              answer: ["자기 자신(인스턴스)"],
              hint: '자기 자신입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['객체.메서드()를 호출하면 ', ' 이 self로 자동 전달됩니다.'],
              wordBank: ["호출한 객체","클래스 이름","아무것도"],
              answer: ["호출한 객체"],
              hint: '호출한 객체가 전달됩니다.'
            },
            {
              type: 'quiz_code',
              content: '메서드가 매개변수를 받아 사용하는 것을 확인하세요.',
              initialCode: 'class Greeter:\n    def greet(self, name):\n        print(\'안녕, \' + name)\ng = Greeter()\ng.greet(\'에그\')',
              expectedOutputs: ['안녕, 에그'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스 안에서 한 메서드가 다른 메서드를 호출하도록 만드세요.',
              initialCode: 'class Robot:\n    def beep(self):\n        print(\'삐빅\')\n    def greet(self):\n        self.beep()\n        print(\'안녕\')\nr = Robot()\nr.greet()',
              expectedOutputs: ['삐빅\n안녕'],
              hint: '이미 정답입니다. self.메서드()로 같은 클래스의 다른 메서드를 호출합니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 Calculator에 곱셈 메서드를 추가해 호출하세요.',
              initialCode: 'class Calculator:\n    def add(self, a, b):\n        return a + b\n    def multiply(self, a, b):\n        return a * b\ncalc = Calculator()\nprint(calc.multiply(6, 7))',
              expectedOutputs: ['42'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '메서드를 정의할 때 self를 빼먹으면?',
              options: ["에러가 날 수 있다","아무 문제 없다","자동으로 추가된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '객체 호출 시 인자 개수가 안 맞아 에러가 납니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['메서드 정의에 self가 없으면 ', ' 가 날 수 있습니다.'],
              wordBank: ["에러","경고","아무 문제 없음"],
              answer: ["에러"],
              hint: '에러가 날 수 있습니다.'
            },
            {
              type: 'quiz_code',
              content: '메서드 3개를 가진 클래스를 만들어 순서대로 호출하세요.',
              initialCode: '# 세 개의 메서드를 가진 클래스를 만드세요.',
              expectedOutputs: ['1\n2\n3'],
              hint: 'class Counter:\n    def one(self):\n        print(1)\n    def two(self):\n        print(2)\n    def three(self):\n        print(3)\nc = Counter()\nc.one()\nc.two()\nc.three()'
            },
            {
              type: 'quiz_code',
              content: '클래스 메서드가 조건문을 포함하도록 만들어보세요.',
              initialCode: 'class Judge:\n    def check(self, score):\n        if score >= 60:\n            return \'합격\'\n        return \'불합격\'\nj = Judge()\nprint(j.check(75))',
              expectedOutputs: ['합격'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 클래스 Greeter에 이름을 받아 인사하는 메서드를 만들어 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['안녕, 코딩'],
              hint: 'class Greeter:\n    def greet(self, name):\n        print(\'안녕, \' + name)\ng = Greeter()\ng.greet(\'코딩\')'
            }
          ]
        ]
      },
      {
        id: 'node_10_3',
        title: '클래스 안의 변수 (속성)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '객체의 속성(변수)을 만들려면?',
              options: ["self.속성명 = 값","속성명 = 값 (self 없이)","class.속성명 = 값"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'self를 붙여야 객체의 속성이 됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['객체의 속성을 만들려면 ', ' 형태로 씁니다.'],
              wordBank: ["self.속성명 = 값","속성명 = 값","class.속성명"],
              answer: ["self.속성명 = 값"],
              hint: 'self.속성명 = 값입니다.'
            },
            {
              type: 'quiz_code',
              content: '객체에 name 속성을 부여해 출력하세요.',
              initialCode: 'class Dog:\n    pass\nd = Dog()\nname = \'초코\'  # self가 빠졌어요!\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: 'd.name = \'초코\'로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '객체 p에 age 속성 10을 부여해 출력하세요.',
              initialCode: 'class Person:\n    pass\np = Person()\np.age =   \nprint(p.age)',
              expectedOutputs: ['10'],
              hint: 'p.age = 10'
            },
            {
              type: 'quiz_code',
              content: '객체 두 개에 서로 다른 name 속성을 부여해 출력하세요.',
              initialCode: 'class Dog:\n    pass\nd1 = Dog()\nd1.name = \'초코\'\nd2 = Dog()\nd2.name = \'뭉치\'\nprint(d1.name, d2.name)',
              expectedOutputs: ['초코 뭉치'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '객체의 속성에 접근하려면?',
              options: ["객체.속성명","속성명","self(속성명)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '점(.) 표기법을 사용합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['객체의 속성에 접근하려면 ', ' 표기법을 씁니다.'],
              wordBank: ["점(.)","대괄호([])","화살표(->)"],
              answer: ["점(.)"],
              hint: '점 표기법입니다.'
            },
            {
              type: 'quiz_code',
              content: '객체의 속성값을 나중에 바꿔보세요.',
              initialCode: 'class Counter:\n    pass\nc = Counter()\nc.count = 0\nc.count = 5\nprint(c.count)',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '객체에 여러 속성(hp, mp)을 부여해 출력하세요.',
              initialCode: 'class Character:\n    pass\nchar = Character()\nchar.hp = 100\nchar.mp = 50\nprint(char.hp, char.mp)',
              expectedOutputs: ['100 50'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '속성값을 이용해 계산한 결과를 출력하세요.',
              initialCode: 'class Rectangle:\n    pass\nr = Rectangle()\nr.width = 4\nr.height = 5\nprint(r.width * r.height)',
              expectedOutputs: ['20'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'self.name = name 은 무엇을 하나요?',
              options: ["매개변수 name의 값을 객체 속성 name에 저장한다","전역 변수를 만든다","아무 의미 없다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '객체의 속성으로 저장합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '속성값을 나중에 바꿀 수 있나요?',
              options: ["네, 객체.속성명 = 새값 으로 가능","아니요, 한 번 정하면 못 바꿉니다","클래스를 다시 만들어야 합니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자유롭게 수정할 수 있습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['self.name = name 은 값을 객체의 ', ' 으로 저장합니다.'],
              wordBank: ["속성","전역 변수","클래스 이름"],
              answer: ["속성"],
              hint: '속성으로 저장합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['속성값은 ', ' 바꿀 수 있습니다.'],
              wordBank: ["나중에 자유롭게","한 번만","절대"],
              answer: ["나중에 자유롭게"],
              hint: '자유롭게 바꿀 수 있습니다.'
            },
            {
              type: 'quiz_code',
              content: '객체 속성을 이용해 자기소개 문장을 만들어 출력하세요.',
              initialCode: 'class Person:\n    pass\np = Person()\np.name = \'에그\'\np.age = 5\nprint(p.name + \'는 \' + str(p.age) + \'살입니다\')',
              expectedOutputs: ['에그는 5살입니다'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '메서드 안에서 속성을 설정하는 방식으로 바꿔보세요.',
              initialCode: 'class Dog:\n    def set_name(self, name):\n        self.name = name\nd = Dog()\nd.set_name(\'초코\')\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: '이미 정답입니다. 메서드 안에서 self.속성 = 값 형태로 설정합니다.'
            },
            {
              type: 'quiz_code',
              content: '메서드로 속성값을 증가시키는 코드를 작성하세요.',
              initialCode: 'class Counter:\n    def set_count(self, n):\n        self.count = n\n    def increase(self):\n        self.count += 1\nc = Counter()\nc.set_count(0)\nc.increase()\nc.increase()\nprint(c.count)',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '서로 다른 객체의 같은 이름 속성은 서로 영향을 주나요?',
              options: ["아니요, 각 객체마다 독립적입니다","네, 하나 바꾸면 전부 바뀝니다","클래스에 따라 다릅니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '각 객체는 자신만의 속성 값을 가집니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['서로 다른 객체의 속성은 ', ' 입니다.'],
              wordBank: ["서로 독립적","항상 같은 값","클래스 전체 공유"],
              answer: ["서로 독립적"],
              hint: '독립적입니다.'
            },
            {
              type: 'quiz_code',
              content: '객체 리스트를 만들어 각각 다른 속성값을 부여한 뒤 순회하며 출력하세요.',
              initialCode: 'class Dog:\n    pass\nnames = [\'초코\', \'뭉치\']\ndogs = []\nfor n in names:\n    d = Dog()\n    d.name = n\n    dogs.append(d)\nfor d in dogs:\n    print(d.name)',
              expectedOutputs: ['초코\n뭉치'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '메서드로 속성을 설정하고, 다른 메서드로 조건에 따라 다른 값을 반환하세요.',
              initialCode: 'class Student:\n    def set_score(self, score):\n        self.score = score\n    def result(self):\n        if self.score >= 60:\n            return \'합격\'\n        return \'불합격\'\ns = Student()\ns.set_score(75)\nprint(s.result())',
              expectedOutputs: ['합격'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 객체에 name, hobby 속성을 부여하고 소개 문장을 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩의 취미는 독서입니다'],
              hint: 'class Person:\n    pass\np = Person()\np.name = \'코딩\'\np.hobby = \'독서\'\nprint(p.name + \'의 취미는 \' + p.hobby + \'입니다\')'
            }
          ]
        ]
      },
      {
        id: 'node_10_4',
        title: '클래스 안의 함수 (메서드)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '메서드 안에서 객체의 속성에 접근하려면?',
              options: ["self.속성명","속성명만","this.속성명"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'self를 통해 접근합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['메서드 안에서 속성에 접근하려면 ', ' 를 씁니다.'],
              wordBank: ["self.속성명","속성명만","this"],
              answer: ["self.속성명"],
              hint: 'self.속성명입니다.'
            },
            {
              type: 'quiz_code',
              content: '체력 속성을 20 깎는 메서드를 만들어 호출하세요.',
              initialCode: 'class Character:\n    def set_hp(self, hp):\n        self.hp = hp\n    def damage(self):\n        hp -= 20  # self가 빠졌어요!\nc = Character()\nc.set_hp(100)\nc.damage()\nprint(c.hp)',
              expectedOutputs: ['80'],
              hint: 'self.hp -= 20'
            },
            {
              type: 'quiz_code',
              content: '레벨을 1 올리는 메서드를 완성하세요.',
              initialCode: 'class Player:\n    def set_level(self, lv):\n        self.level = lv\n    def level_up(self):\n        self.level +=   \np = Player()\np.set_level(1)\np.level_up()\nprint(p.level)',
              expectedOutputs: ['2'],
              hint: 'self.level += 1'
            },
            {
              type: 'quiz_code',
              content: '메서드로 여러 번 값을 누적해보세요.',
              initialCode: 'class Wallet:\n    def set_gold(self, g):\n        self.gold = g\n    def earn(self, amount):\n        self.gold += amount\nw = Wallet()\nw.set_gold(0)\nw.earn(50)\nw.earn(30)\nprint(w.gold)',
              expectedOutputs: ['80'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '메서드가 속성값을 변경하면 그 변경은 어디에 남나요?',
              options: ["해당 객체에 그대로 남는다","메서드가 끝나면 사라진다","다른 객체에도 적용된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '객체의 상태가 실제로 바뀝니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['메서드가 속성을 바꾸면 ', ' 에 그대로 남습니다.'],
              wordBank: ["해당 객체","다른 객체","클래스 전체"],
              answer: ["해당 객체"],
              hint: '해당 객체에 남습니다.'
            },
            {
              type: 'quiz_code',
              content: '메서드로 속성값을 조회해 조건에 따라 다른 결과를 반환하세요.',
              initialCode: 'class Character:\n    def set_hp(self, hp):\n        self.hp = hp\n    def is_alive(self):\n        return self.hp > 0\nc = Character()\nc.set_hp(0)\nprint(c.is_alive())',
              expectedOutputs: ['False'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '두 메서드가 같은 속성을 공유하는지 확인하세요.',
              initialCode: 'class Counter:\n    def set_count(self, n):\n        self.count = n\n    def show(self):\n        print(self.count)\nc = Counter()\nc.set_count(5)\nc.show()',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '메서드로 속성을 여러 번 조작한 뒤 결과를 확인하세요.',
              initialCode: 'class Character:\n    def set_hp(self, hp):\n        self.hp = hp\n    def damage(self, n):\n        self.hp -= n\n    def heal(self, n):\n        self.hp += n\nc = Character()\nc.set_hp(100)\nc.damage(30)\nc.heal(10)\nprint(c.hp)',
              expectedOutputs: ['80'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 메서드가 같은 속성을 공유해서 쓸 수 있나요?',
              options: ["네, self를 통해 공유합니다","아니요, 메서드마다 따로입니다","불가능합니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '같은 객체의 속성이라 공유됩니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '메서드에서 계산 결과를 속성에 저장하려면?',
              options: ["self.속성 = 계산식","속성 = 계산식","return 속성"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'self.를 붙여 저장합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['같은 객체의 메서드들은 속성을 ', ' 할 수 있습니다.'],
              wordBank: ["공유","독립적으로만 사용","삭제만"],
              answer: ["공유"],
              hint: '공유할 수 있습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['계산 결과를 속성에 저장하려면 ', ' 형태로 씁니다.'],
              wordBank: ["self.속성 = 계산식","속성 = 계산식","return 속성"],
              answer: ["self.속성 = 계산식"],
              hint: 'self.속성 = 계산식입니다.'
            },
            {
              type: 'quiz_code',
              content: '객체 두 개가 각자의 상태를 독립적으로 유지하는지 확인하세요.',
              initialCode: 'class Character:\n    def set_hp(self, hp):\n        self.hp = hp\n    def damage(self, n):\n        self.hp -= n\na = Character()\na.set_hp(100)\nb = Character()\nb.set_hp(100)\na.damage(50)\nprint(a.hp, b.hp)',
              expectedOutputs: ['50 100'],
              hint: '이미 정답입니다. 각 객체는 독립적인 상태를 가집니다.'
            },
            {
              type: 'quiz_code',
              content: '메서드가 조건에 따라 다른 메서드를 호출하도록 만들어보세요.',
              initialCode: 'class Character:\n    def set_hp(self, hp):\n        self.hp = hp\n    def damage(self, n):\n        self.hp -= n\n        if self.hp <= 0:\n            self.die()\n    def die(self):\n        print(\'사망\')\nc = Character()\nc.set_hp(10)\nc.damage(20)',
              expectedOutputs: ['사망'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '순서대로 여러 상태 변경 메서드를 호출해 최종 결과를 확인하세요.',
              initialCode: 'class Inventory:\n    def set_items(self, n):\n        self.items = n\n    def add(self, n):\n        self.items += n\n    def remove(self, n):\n        self.items -= n\ninv = Inventory()\ninv.set_items(10)\ninv.add(5)\ninv.remove(3)\nprint(inv.items)',
              expectedOutputs: ['12'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '객체의 상태(속성)를 바꾸는 메서드를 뭐라 부르기도 하나요?',
              options: ["세터(setter)/상태 변경 메서드","게터(getter)만","상수 메서드"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '값을 설정/변경하는 메서드를 세터라고도 합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['값을 설정/변경하는 메서드를 ', ' 라고도 부릅니다.'],
              wordBank: ["세터(setter)","게터(getter)","상수"],
              answer: ["세터(setter)"],
              hint: '세터라고 부릅니다.'
            },
            {
              type: 'quiz_code',
              content: '동일 클래스의 여러 객체를 리스트로 관리하며 각자 상태를 변경해보세요.',
              initialCode: 'class Character:\n    def set_hp(self, hp):\n        self.hp = hp\n    def damage(self, n):\n        self.hp -= n\nchars = [Character(), Character()]\nfor c in chars:\n    c.set_hp(100)\nchars[0].damage(30)\nprint(chars[0].hp, chars[1].hp)',
              expectedOutputs: ['70 100'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '경험치가 100 이상이면 레벨을 올리고 경험치를 0으로 초기화하는 메서드를 만드세요.',
              initialCode: 'class Player:\n    def set_stat(self, level, exp):\n        self.level = level\n        self.exp = exp\n    def gain_exp(self, n):\n        self.exp += n\n        if self.exp >= 100:\n            self.level += 1\n            self.exp = 0\np = Player()\np.set_stat(1, 90)\np.gain_exp(20)\nprint(p.level, p.exp)',
              expectedOutputs: ['2 10'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 체력(hp) 속성을 가진 캐릭터 클래스를 만들어 데미지를 입히는 메서드를 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['70'],
              hint: 'class Character:\n    def set_hp(self, hp):\n        self.hp = hp\n    def damage(self, n):\n        self.hp -= n\nc = Character()\nc.set_hp(100)\nc.damage(30)\nprint(c.hp)'
            }
          ]
        ]
      },
      {
        id: 'node_10_5',
        title: '붕어빵의 첫 탄생 (초기화 __init__)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '객체가 생성될 때 자동으로 호출되는 메서드는?',
              options: ["__init__","__new__","__start__"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '__init__은 생성자 역할을 합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['객체가 생성될 때 자동 호출되는 메서드는 ', ' 입니다.'],
              wordBank: ["__init__","__new__","__start__"],
              answer: ["__init__"],
              hint: '__init__입니다.'
            },
            {
              type: 'quiz_code',
              content: '__init__으로 이름 속성을 초기화하는 클래스를 만들어 \'초코\'로 생성 후 출력하세요.',
              initialCode: 'class Dog:\n    def _init_(self, name):  # 언더바가 하나씩 부족해요!\n        self.name = name\nd = Dog(\'초코\')\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: 'def __init__(self, name): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '__init__으로 나이 속성을 초기화하는 클래스를 완성하세요.',
              initialCode: 'class Person:\n    def __init__(self, age):\n        self.  = age\np = Person(20)\nprint(p.age)',
              expectedOutputs: ['20'],
              hint: 'self.age = age'
            },
            {
              type: 'quiz_code',
              content: '__init__으로 두 개의 속성(name, age)을 한 번에 초기화하세요.',
              initialCode: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\np = Person(\'에그\', 5)\nprint(p.name, p.age)',
              expectedOutputs: ['에그 5'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '__init__ 메서드의 첫 매개변수는?',
              options: ["self","init","new"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '다른 메서드와 마찬가지로 self가 먼저 옵니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['__init__의 첫 매개변수는 ', ' 입니다.'],
              wordBank: ["self","init","new"],
              answer: ["self"],
              hint: 'self입니다.'
            },
            {
              type: 'quiz_code',
              content: '__init__에 기본값을 줘서 인자 없이도 객체를 만들 수 있게 하세요.',
              initialCode: 'class Player:\n    def __init__(self, level=1):\n        self.level = level\np = Player()\nprint(p.level)',
              expectedOutputs: ['1'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__init__으로 초기화한 속성을 다른 메서드에서 사용하세요.',
              initialCode: 'class Character:\n    def __init__(self, hp):\n        self.hp = hp\n    def show(self):\n        print(self.hp)\nc = Character(100)\nc.show()',
              expectedOutputs: ['100'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '같은 클래스로 서로 다른 초기값을 가진 객체 두 개를 만들어보세요.',
              initialCode: 'class Dog:\n    def __init__(self, name):\n        self.name = name\nd1 = Dog(\'초코\')\nd2 = Dog(\'뭉치\')\nprint(d1.name, d2.name)',
              expectedOutputs: ['초코 뭉치'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'Dog(\'초코\') 처럼 호출하면 \'초코\'는 __init__의 어디로 전달되나요?',
              options: ["self 다음 매개변수","self 자리에","전달되지 않는다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'self는 자동, 나머지는 순서대로 전달됩니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '__init__을 쓰는 이유는?',
              options: ["객체 생성과 동시에 속성을 초기화하기 위해","클래스를 삭제하기 위해","메서드를 숨기기 위해"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '생성 시점에 필요한 값을 바로 세팅합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['Dog(\'초코\')에서 \'초코\'는 __init__의 ', ' 로 전달됩니다.'],
              wordBank: ["self 다음 매개변수","self 자리","무시됨"],
              answer: ["self 다음 매개변수"],
              hint: 'self 다음 매개변수로 전달됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['__init__은 객체 생성과 동시에 ', ' 를 위해 사용합니다.'],
              wordBank: ["속성 초기화","클래스 삭제","메서드 숨기기"],
              answer: ["속성 초기화"],
              hint: '속성 초기화용입니다.'
            },
            {
              type: 'quiz_code',
              content: '__init__에서 계산한 값을 속성으로 저장하세요 (넓이 계산).',
              initialCode: 'class Rectangle:\n    def __init__(self, w, h):\n        self.area = w * h\nr = Rectangle(4, 5)\nprint(r.area)',
              expectedOutputs: ['20'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__init__과 다른 메서드를 함께 사용해 상태를 변경하는 클래스를 만드세요.',
              initialCode: 'class Character:\n    def __init__(self, hp):\n        self.hp = hp\n    def damage(self, n):\n        self.hp -= n\nc = Character(100)\nc.damage(30)\nprint(c.hp)',
              expectedOutputs: ['70'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__init__에서 기본 속성 외에 계산된 속성도 함께 초기화하세요.',
              initialCode: 'class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n        self.area = 3.14 * radius * radius\nc = Circle(2)\nprint(c.area)',
              expectedOutputs: ['12.56'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '__init__이 없는 클래스로 객체를 만들면?',
              options: ["속성 없이 빈 객체가 만들어진다","에러가 난다","자동으로 기본 속성이 생긴다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '__init__ 없이도 객체는 만들 수 있지만 속성이 없습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['__init__이 없어도 객체는 만들 수 있지만 ', ' 이 없습니다.'],
              wordBank: ["초기 속성","이름","타입"],
              answer: ["초기 속성"],
              hint: '초기 속성이 없습니다.'
            },
            {
              type: 'quiz_code',
              content: '__init__으로 리스트 속성을 초기화하고 메서드로 값을 추가하세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = []\n    def add(self, item):\n        self.items.append(item)\ninv = Inventory()\ninv.add(\'물약\')\nprint(inv.items)',
              expectedOutputs: ['[\'물약\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__init__으로 여러 속성을 초기화하고, 메서드로 조건부 결과를 반환하는 클래스를 만드세요.',
              initialCode: 'class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n    def result(self):\n        if self.score >= 60:\n            return self.name + \': 합격\'\n        return self.name + \': 불합격\'\ns = Student(\'철수\', 75)\nprint(s.result())',
              expectedOutputs: ['철수: 합격'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 __init__으로 이름과 나이를 받는 Person 클래스를 만들어 소개 문장을 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['저는 코딩이고 5살입니다'],
              hint: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\np = Person(\'코딩\', 5)\nprint(\'저는 \' + p.name + \'이고 \' + str(p.age) + \'살입니다\')'
            }
          ]
        ]
      }
    ]
  }
];
