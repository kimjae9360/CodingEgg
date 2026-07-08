export const tier3 = [
  {
    id: 11,
    title: 'UNIT 11\n객체지향 마스터',
    nodes: [
      {
        id: 'node_11_1',
        title: '유산 물려받기 (상속)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '부모 클래스의 기능을 물려받는 것을 뭐라 하나요?',
              options: ["상속","복제","캡슐화"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '상속(Inheritance)입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['부모의 기능을 물려받는 것을 ', ' 이라 합니다.'],
              wordBank: ["상속","복사","분리"],
              answer: ["상속"],
              hint: '상속입니다.'
            },
            {
              type: 'quiz_code',
              content: 'Animal을 상속받는 Dog 클래스를 만들어보세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(Animal)\n    pass  # 콜론이 빠졌어요!\nd = Dog()\nd.eat()',
              expectedOutputs: ['먹는다'],
              hint: 'class Dog(Animal): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'Cat이 Animal을 상속받도록 완성하세요.',
              initialCode: 'class Animal:\n    def sleep(self):\n        print(\'잔다\')\nclass Cat(  ):\n    pass\nc = Cat()\nc.sleep()',
              expectedOutputs: ['잔다'],
              hint: 'class Cat(Animal):'
            },
            {
              type: 'quiz_code',
              content: '부모 클래스의 메서드를 자식 객체에서 호출하세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(Animal):\n    pass\nd = Dog()\nd.eat()',
              expectedOutputs: ['먹는다'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '상속받는 문법은?',
              options: ["class 자식(부모):","class 자식 extends 부모:","class 자식 : 부모"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '괄호 안에 부모 클래스를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['상속받으려면 ', ' 형태로 씁니다.'],
              wordBank: ["class 자식(부모):","class 자식 -> 부모","class 부모(자식):"],
              answer: ["class 자식(부모):"],
              hint: '자식(부모) 형태입니다.'
            },
            {
              type: 'quiz_code',
              content: '부모의 __init__을 자식이 그대로 사용하는지 확인하세요.',
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    pass\nd = Dog(\'초코\')\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '자식 클래스에 새로운 메서드를 추가해보세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(Animal):\n    def bark(self):\n        print(\'멍멍\')\nd = Dog()\nd.eat()\nd.bark()',
              expectedOutputs: ['먹는다\n멍멍'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 자식 클래스가 같은 부모 메서드를 공유하는지 확인하세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(Animal):\n    pass\nclass Cat(Animal):\n    pass\nDog().eat()\nCat().eat()',
              expectedOutputs: ['먹는다\n먹는다'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '자식 클래스는 부모의 메서드를 그대로 쓸 수 있나요?',
              options: ["네, 별도 작성 없이 사용 가능합니다","아니요, 다시 작성해야 합니다","불가능합니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '상속받으면 자동으로 사용 가능합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'class Dog(Animal): 에서 부모 클래스는?',
              options: ["Animal","Dog","둘 다 아님"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '괄호 안이 부모 클래스입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['자식 클래스는 부모의 메서드를 ', ' 사용할 수 있습니다.'],
              wordBank: ["다시 작성 없이","반드시 재정의해야","사용할 수 없이"],
              answer: ["다시 작성 없이"],
              hint: '재작성 없이 사용 가능합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['class Dog(Animal): 에서 ', ' 이 부모 클래스입니다.'],
              wordBank: ["Animal","Dog","둘 다"],
              answer: ["Animal"],
              hint: 'Animal입니다.'
            },
            {
              type: 'quiz_code',
              content: '부모 속성과 자식만의 속성을 함께 사용하세요.',
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\nd = Dog(\'초코\', \'푸들\')\nprint(d.name, d.breed)',
              expectedOutputs: ['초코 푸들'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'isinstance()로 자식 객체가 부모 타입이기도 한지 확인하세요.',
              initialCode: 'class Animal:\n    pass\nclass Dog(Animal):\n    pass\nd = Dog()\nprint(isinstance(d, Animal))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 자식 객체는 부모 타입이기도 합니다.'
            },
            {
              type: 'quiz_code',
              content: '3단계 상속(조부모-부모-자식)이 가능한지 확인하세요.',
              initialCode: 'class A:\n    def hello(self):\n        print(\'A입니다\')\nclass B(A):\n    pass\nclass C(B):\n    pass\nc = C()\nc.hello()',
              expectedOutputs: ['A입니다'],
              hint: '이미 정답입니다. 상속은 여러 단계로도 이어집니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '부모 클래스에 없는 메서드를 자식 클래스에 새로 추가할 수 있나요?',
              options: ["네, 자유롭게 추가 가능합니다","아니요, 부모에 있는 것만 써야 합니다","클래스를 다시 만들어야 합니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자식만의 고유 기능을 추가할 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['자식 클래스는 부모에 없는 기능을 ', ' 수 있습니다.'],
              wordBank: ["새로 추가할","추가할 수 없을","반드시 삭제해야 할"],
              answer: ["새로 추가할"],
              hint: '새로 추가할 수 있습니다.'
            },
            {
              type: 'quiz_code',
              content: '자식만 호출 가능한 메서드를 확인하세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(Animal):\n    def bark(self):\n        print(\'멍멍\')\nd = Dog()\nd.bark()',
              expectedOutputs: ['멍멍'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '부모 클래스 Shape을 상속받는 Circle 클래스에 area 메서드를 추가해 사용하세요.',
              initialCode: 'class Shape:\n    def __init__(self, name):\n        self.name = name\nclass Circle(Shape):\n    def __init__(self, name, radius):\n        self.name = name\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\nc = Circle(\'원\', 2)\nprint(c.area())',
              expectedOutputs: ['12.56'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 Vehicle 클래스를 만들고 Car 클래스가 상속받아 고유 메서드를 추가해 호출해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['달린다\n경적을 울린다'],
              hint: 'class Vehicle:\n    def move(self):\n        print(\'달린다\')\nclass Car(Vehicle):\n    def honk(self):\n        print(\'경적을 울린다\')\nc = Car()\nc.move()\nc.honk()'
            }
          ]
        ]
      },
      {
        id: 'node_11_2',
        title: '기능 덮어쓰기 (오버라이딩)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '자식 클래스가 부모의 메서드를 다시 정의하는 것을 뭐라 하나요?',
              options: ["오버라이딩(재정의)","오버로딩","상속 해제"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '같은 이름으로 다시 정의하는 것입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['자식이 부모의 메서드를 다시 정의하는 것을 ', ' 이라 합니다.'],
              wordBank: ["오버라이딩","캡슐화","상속"],
              answer: ["오버라이딩"],
              hint: '오버라이딩입니다.'
            },
            {
              type: 'quiz_code',
              content: 'Dog 클래스에서 부모의 sound 메서드를 오버라이딩하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self)\n        print(\'멍멍\')  # 콜론이 빠졌어요!\nd = Dog()\nd.sound()',
              expectedOutputs: ['멍멍'],
              hint: 'def sound(self): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'Cat 클래스에서 sound 메서드를 오버라이딩해 \'야옹\'을 출력하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Cat(Animal):\n    def sound(self):\n        print(  )\nc = Cat()\nc.sound()',
              expectedOutputs: ['야옹'],
              hint: 'print(\'야옹\')'
            },
            {
              type: 'quiz_code',
              content: '부모와 자식이 같은 메서드를 가질 때 자식 메서드가 실행되는지 확인하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\nd = Dog()\nd.sound()',
              expectedOutputs: ['멍멍'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '오버라이딩하면 자식 객체는 어떤 메서드가 실행되나요?',
              options: ["자식 클래스의 새 메서드","부모 클래스의 메서드","둘 다 실행"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자식이 재정의한 것이 우선합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['오버라이딩하면 자식 객체는 ', ' 메서드가 실행됩니다.'],
              wordBank: ["자식의","부모의","둘 다의"],
              answer: ["자식의"],
              hint: '자식의 메서드입니다.'
            },
            {
              type: 'quiz_code',
              content: '오버라이딩 없이 부모 메서드가 그대로 사용되는 경우와 비교해보세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Fish(Animal):\n    pass\nf = Fish()\nf.sound()',
              expectedOutputs: ['...'],
              hint: '이미 정답입니다. 오버라이딩하지 않으면 부모 메서드가 사용됩니다.'
            },
            {
              type: 'quiz_code',
              content: '여러 자식 클래스가 각자 다르게 오버라이딩하는지 확인하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\nclass Cat(Animal):\n    def sound(self):\n        print(\'야옹\')\nDog().sound()\nCat().sound()',
              expectedOutputs: ['멍멍\n야옹'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '오버라이딩한 메서드 안에서 추가 로직을 넣어보세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\n        print(\'꼬리를 흔든다\')\nd = Dog()\nd.sound()',
              expectedOutputs: ['멍멍\n꼬리를 흔든다'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '오버라이딩은 왜 사용하나요?',
              options: ["자식마다 다른 동작이 필요할 때","부모 클래스를 삭제하기 위해","상속을 취소하기 위해"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '공통 기능은 유지하되 세부 동작만 바꿉니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '부모와 자식 모두 같은 이름의 메서드를 가지면?',
              options: ["자식 객체는 자식 메서드가 우선 실행된다","항상 부모 메서드가 실행된다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자식이 우선합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['오버라이딩은 ', ' 다른 동작이 필요할 때 사용합니다.'],
              wordBank: ["자식마다","항상 똑같이","부모만"],
              answer: ["자식마다"],
              hint: '자식마다 다르게 필요할 때입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['부모와 자식이 같은 이름의 메서드를 가지면 ', ' 이 우선됩니다.'],
              wordBank: ["자식의 메서드","부모의 메서드","둘 다 무시"],
              answer: ["자식의 메서드"],
              hint: '자식의 메서드가 우선됩니다.'
            },
            {
              type: 'quiz_code',
              content: '__init__을 오버라이딩해 추가 속성을 설정하세요.',
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\nd = Dog(\'초코\', \'푸들\')\nprint(d.breed)',
              expectedOutputs: ['푸들'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 도형 클래스가 area 메서드를 각자 다르게 오버라이딩하도록 만드세요.',
              initialCode: 'class Shape:\n    def area(self):\n        return 0\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\ns = Square(4)\nprint(s.area())',
              expectedOutputs: ['16'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '오버라이딩한 메서드가 리스트 순회 중에도 각자 다르게 동작하는지 확인하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\nclass Cat(Animal):\n    def sound(self):\n        print(\'야옹\')\nanimals = [Dog(), Cat()]\nfor a in animals:\n    a.sound()',
              expectedOutputs: ['멍멍\n야옹'],
              hint: '이미 정답입니다. 다형성(polymorphism)의 예시입니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '오버라이딩된 메서드의 매개변수 개수는 부모와 같아야 하나요?',
              options: ["반드시 같을 필요는 없다","항상 같아야 한다","항상 달라야 한다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '파이썬은 유연하게 다른 시그니처도 허용합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['오버라이딩된 메서드의 매개변수는 ', ' 도 괜찮습니다.'],
              wordBank: ["부모와 달라져도","반드시 같아야","전혀 없어야"],
              answer: ["부모와 달라져도"],
              hint: '달라도 괜찮습니다.'
            },
            {
              type: 'quiz_code',
              content: '부모의 메서드와 자식의 오버라이딩된 메서드가 반환값도 다른지 확인하세요.',
              initialCode: 'class Animal:\n    def info(self):\n        return \'동물\'\nclass Dog(Animal):\n    def info(self):\n        return \'강아지\'\nprint(Dog().info())',
              expectedOutputs: ['강아지'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '오버라이딩된 메서드에서 결과를 조건에 따라 다르게 만들어보세요.',
              initialCode: 'class Employee:\n    def bonus(self):\n        return 0\nclass Manager(Employee):\n    def bonus(self):\n        return 1000\nm = Manager()\nprint(m.bonus())',
              expectedOutputs: ['1000'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 Bird 클래스가 Animal을 상속받아 sound 메서드를 오버라이딩해 \'짹짹\'을 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['짹짹'],
              hint: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Bird(Animal):\n    def sound(self):\n        print(\'짹짹\')\nb = Bird()\nb.sound()'
            }
          ]
        ]
      },
      {
        id: 'node_11_3',
        title: '부모님 소환하기 (super)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '부모 클래스의 메서드를 명시적으로 호출하는 함수는?',
              options: ["super()","parent()","base()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'super()를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['부모 클래스의 메서드를 호출하려면 ', ' 를 씁니다.'],
              wordBank: ["super()","parent()","base()"],
              answer: ["super()"],
              hint: 'super()입니다.'
            },
            {
              type: 'quiz_code',
              content: '자식 __init__에서 super()로 부모 생성자를 호출하세요.',
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super()._init_(name)  # 언더바가 부족해요!\n        self.breed = breed\nd = Dog(\'초코\', \'푸들\')\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: 'super().__init__(name) 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'super()로 부모의 __init__을 호출해 이름을 설정하세요.',
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Cat(Animal):\n    def __init__(self, name):\n        super().  (name)\nc = Cat(\'나비\')\nprint(c.name)',
              expectedOutputs: ['나비'],
              hint: 'super().__init__(name)'
            },
            {
              type: 'quiz_code',
              content: '자식이 super()로 부모 생성자를 호출하고 추가 속성도 설정하세요.',
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\nd = Dog(\'초코\', \'푸들\')\nprint(d.name, d.breed)',
              expectedOutputs: ['초코 푸들'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'super().__init__()은 무엇을 하나요?',
              options: ["부모의 __init__을 호출한다","자식의 __init__을 무효화한다","아무 효과 없다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '부모의 생성자를 실행합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['super().__init__()은 ', ' 를 호출합니다.'],
              wordBank: ["부모의 생성자","자식의 생성자","아무것도"],
              answer: ["부모의 생성자"],
              hint: '부모의 생성자입니다.'
            },
            {
              type: 'quiz_code',
              content: '오버라이딩한 메서드에서 super()로 부모의 기능도 함께 실행하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'동물이 소리를 냅니다\')\nclass Dog(Animal):\n    def sound(self):\n        super().sound()\n        print(\'멍멍\')\nd = Dog()\nd.sound()',
              expectedOutputs: ['동물이 소리를 냅니다\n멍멍'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'super() 없이 오버라이딩하면 부모 기능이 실행 안 됨을 확인하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'동물 소리\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\nd = Dog()\nd.sound()',
              expectedOutputs: ['멍멍'],
              hint: '이미 정답입니다. super()를 안 쓰면 부모 기능은 실행되지 않아요.'
            },
            {
              type: 'quiz_code',
              content: '3단계 상속에서 super()가 바로 위 부모를 호출하는지 확인하세요.',
              initialCode: 'class A:\n    def __init__(self):\n        print(\'A 초기화\')\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print(\'B 초기화\')\nb = B()',
              expectedOutputs: ['A 초기화\nB 초기화'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '오버라이딩한 메서드 안에서 부모의 원래 기능도 실행하려면?',
              options: ["super().메서드() 를 함께 호출","다시 새 클래스를 만든다","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'super()로 부모 기능을 추가로 호출할 수 있어요.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'super()를 사용하는 주된 이유는?',
              options: ["자식에서 부모의 기능을 재사용하기 위해","부모 클래스를 삭제하기 위해","전역 변수를 만들기 위해"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '코드 중복 없이 부모 기능을 재사용합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['오버라이딩 안에서 부모 기능도 쓰려면 ', ' 를 함께 호출합니다.'],
              wordBank: ["super().메서드()","self.메서드()","부모클래스명()"],
              answer: ["super().메서드()"],
              hint: 'super().메서드()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['super()는 코드 중복 없이 부모 기능을 ', ' 위해 사용합니다.'],
              wordBank: ["재사용하기","삭제하기","숨기기"],
              answer: ["재사용하기"],
              hint: '재사용하기 위함입니다.'
            },
            {
              type: 'quiz_code',
              content: 'super()로 부모 메서드를 호출한 뒤 결과값을 활용하세요.',
              initialCode: 'class Shape:\n    def describe(self):\n        return \'도형\'\nclass Circle(Shape):\n    def describe(self):\n        return super().describe() + \' - 원\'\nc = Circle()\nprint(c.describe())',
              expectedOutputs: ['도형 - 원'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 속성을 가진 부모를 super()로 초기화하고 자식이 메서드도 오버라이딩하세요.',
              initialCode: 'class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    def info(self):\n        return self.name + \': \' + str(self.salary)\nclass Manager(Employee):\n    def __init__(self, name, salary, team_size):\n        super().__init__(name, salary)\n        self.team_size = team_size\n    def info(self):\n        return super().info() + \', 팀원 \' + str(self.team_size) + \'명\'\nm = Manager(\'김부장\', 5000, 10)\nprint(m.info())',
              expectedOutputs: ['김부장: 5000, 팀원 10명'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'super()를 이용해 부모의 계산 로직을 재사용하는 자식 메서드를 만드세요.',
              initialCode: 'class Discount:\n    def apply(self, price):\n        return price * 0.9\nclass VipDiscount(Discount):\n    def apply(self, price):\n        base = super().apply(price)\n        return base * 0.9\nprint(VipDiscount().apply(1000))',
              expectedOutputs: ['810.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '자식 __init__에서 super().__init__()을 빼먹으면?',
              options: ["부모가 설정하는 속성이 초기화되지 않을 수 있다","항상 에러가 난다","자동으로 실행된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '명시적으로 호출하지 않으면 실행되지 않습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['자식에서 super().__init__()을 빼먹으면 부모의 속성 초기화가 ', ' 수 있습니다.'],
              wordBank: ["안 될","항상 될","두 번 실행될"],
              answer: ["안 될"],
              hint: '안 될 수 있습니다.'
            },
            {
              type: 'quiz_code',
              content: '부모의 __init__에 기본값이 있을 때 super()로 넘기는 방식을 확인하세요.',
              initialCode: 'class Animal:\n    def __init__(self, name=\'이름없음\'):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self):\n        super().__init__(\'초코\')\nd = Dog()\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '부모의 검증 로직을 재사용하면서 추가 검증을 더하는 메서드를 만드세요.',
              initialCode: 'class Validator:\n    def check(self, n):\n        if n < 0:\n            return False\n        return True\nclass StrictValidator(Validator):\n    def check(self, n):\n        if not super().check(n):\n            return False\n        return n <= 100\nprint(StrictValidator().check(150))',
              expectedOutputs: ['False'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 Person 클래스를 상속받는 Student 클래스를 만들어 super()로 이름을 초기화하고 학번도 추가해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩 20250001'],
              hint: 'class Person:\n    def __init__(self, name):\n        self.name = name\nclass Student(Person):\n    def __init__(self, name, student_id):\n        super().__init__(name)\n        self.student_id = student_id\ns = Student(\'코딩\', \'20250001\')\nprint(s.name, s.student_id)'
            }
          ]
        ]
      },
      {
        id: 'node_11_4',
        title: '마법의 메서드 (Magic Methods)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '__init__처럼 앞뒤에 밑줄 두 개가 붙은 메서드를 뭐라 하나요?',
              options: ["매직 메서드(스페셜 메서드)","일반 메서드","숨김 메서드"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '매직 메서드라고 부릅니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['앞뒤에 밑줄 두 개가 붙은 메서드를 ', ' 라고 합니다.'],
              wordBank: ["매직 메서드","숨김 메서드","비공개 메서드"],
              answer: ["매직 메서드"],
              hint: '매직 메서드입니다.'
            },
            {
              type: 'quiz_code',
              content: '__str__을 정의해 print(객체)로 이름이 나오게 하세요.',
              initialCode: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def _str_(self):  # 언더바가 부족해요!\n        return self.name\nd = Dog(\'초코\')\nprint(d)',
              expectedOutputs: ['초코'],
              hint: 'def __str__(self): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '__len__을 정의해 len(객체)가 동작하게 하세요.',
              initialCode: 'class Bag:\n    def __init__(self, items):\n        self.items = items\n    def   (self):\n        return len(self.items)\nb = Bag([1, 2, 3])\nprint(len(b))',
              expectedOutputs: ['3'],
              hint: 'def __len__(self):'
            },
            {
              type: 'quiz_code',
              content: '__str__로 사람 소개 문자열을 만들어 출력하세요.',
              initialCode: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def __str__(self):\n        return self.name + \'(\' + str(self.age) + \')\'\np = Person(\'에그\', 5)\nprint(p)',
              expectedOutputs: ['에그(5)'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'print(객체)를 했을 때 보여줄 문자열을 정의하는 매직 메서드는?',
              options: ["__str__","__print__","__show__"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '__str__을 정의하면 됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['print(객체)의 출력을 정의하려면 ', ' 를 씁니다.'],
              wordBank: ["__str__","__print__","__repr__만"],
              answer: ["__str__"],
              hint: '__str__입니다.'
            },
            {
              type: 'quiz_code',
              content: '__len__으로 장바구니 물건 개수를 확인하세요.',
              initialCode: 'class Cart:\n    def __init__(self, items):\n        self.items = items\n    def __len__(self):\n        return len(self.items)\nc = Cart([\'사과\', \'바나나\'])\nprint(len(c))',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__add__로 두 객체를 더할 수 있게 만드세요.',
              initialCode: 'class Point:\n    def __init__(self, x):\n        self.x = x\n    def __add__(self, other):\n        return Point(self.x + other.x).x\np1 = Point(3)\np2 = Point(4)\nprint(p1 + p2)',
              expectedOutputs: ['7'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__eq__를 정의해 두 객체가 같은지 비교하세요.',
              initialCode: 'class Point:\n    def __init__(self, x):\n        self.x = x\n    def __eq__(self, other):\n        return self.x == other.x\np1 = Point(3)\np2 = Point(3)\nprint(p1 == p2)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'len(객체)가 동작하게 하려면 어떤 메서드를 정의해야 하나요?',
              options: ["__len__","__length__","__size__"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '__len__을 정의합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '객체끼리 + 연산을 가능하게 하려면?',
              options: ["__add__ 메서드를 정의한다","__plus__ 메서드를 정의한다","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '__add__로 + 연산을 정의할 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['len(객체)가 동작하려면 ', ' 를 정의해야 합니다.'],
              wordBank: ["__len__","__length__","__count__"],
              answer: ["__len__"],
              hint: '__len__입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['객체끼리 + 연산을 하려면 ', ' 를 정의합니다.'],
              wordBank: ["__add__","__plus__","__sum__"],
              answer: ["__add__"],
              hint: '__add__입니다.'
            },
            {
              type: 'quiz_code',
              content: '__str__과 다른 일반 메서드를 함께 사용하세요.',
              initialCode: 'class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n    def __str__(self):\n        return self.name + \': \' + str(self.price) + \'원\'\n    def discount(self, rate):\n        return self.price * (1 - rate)\np = Product(\'사과\', 1000)\nprint(p)\nprint(p.discount(0.1))',
              expectedOutputs: ['사과: 1000원\n900.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__len__과 __str__을 모두 정의한 클래스를 만들어 각각 확인하세요.',
              initialCode: 'class Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    def __len__(self):\n        return len(self.songs)\n    def __str__(self):\n        return \'재생목록(\' + str(len(self.songs)) + \'곡)\'\np = Playlist([\'A\', \'B\', \'C\'])\nprint(p)\nprint(len(p))',
              expectedOutputs: ['재생목록(3곡)\n3'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__add__로 커스텀 덧셈 규칙을 만들어보세요 (좌표 더하기).',
              initialCode: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)\n    def __str__(self):\n        return \'(\' + str(self.x) + \', \' + str(self.y) + \')\'\np1 = Point(1, 2)\np2 = Point(3, 4)\nprint(p1 + p2)',
              expectedOutputs: ['(4, 6)'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '매직 메서드를 정의하지 않으면 print(객체)는 어떻게 나오나요?',
              options: ["기본적으로 클래스 이름과 메모리 주소가 나온다","에러가 난다","항상 None이 나온다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '__str__이 없으면 기본 표현이 출력됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['__str__이 없으면 print(객체)는 ', ' 이 나옵니다.'],
              wordBank: ["기본 표현(클래스명과 주소)","빈 문자열","에러"],
              answer: ["기본 표현(클래스명과 주소)"],
              hint: '기본 표현이 나옵니다.'
            },
            {
              type: 'quiz_code',
              content: '__eq__로 여러 객체를 비교해 리스트에서 찾아보세요.',
              initialCode: 'class Item:\n    def __init__(self, name):\n        self.name = name\n    def __eq__(self, other):\n        return self.name == other.name\nitems = [Item(\'사과\'), Item(\'바나나\')]\ntarget = Item(\'바나나\')\nprint(target in items)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '__str__, __len__, __add__를 모두 갖춘 클래스를 만들어 종합적으로 테스트하세요.',
              initialCode: 'class Cart:\n    def __init__(self, items):\n        self.items = items\n    def __len__(self):\n        return len(self.items)\n    def __str__(self):\n        return \'장바구니(\' + str(len(self.items)) + \'개)\'\n    def __add__(self, other):\n        return Cart(self.items + other.items)\nc1 = Cart([\'사과\'])\nc2 = Cart([\'바나나\', \'포도\'])\nmerged = c1 + c2\nprint(merged)',
              expectedOutputs: ['장바구니(3개)'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 __str__을 정의한 Book 클래스를 만들어 제목과 저자가 나오게 해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩의 정석 - 저자: 에그'],
              hint: 'class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    def __str__(self):\n        return self.title + \' - 저자: \' + self.author\nb = Book(\'코딩의 정석\', \'에그\')\nprint(b)'
            }
          ]
        ]
      },
      {
        id: 'node_11_5',
        title: '클래스 변수와 인스턴스 변수',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '클래스 전체가 공유하는 변수를 뭐라 하나요?',
              options: ["클래스 변수","인스턴스 변수","지역 변수"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '모든 객체가 함께 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['모든 객체가 공유하는 변수를 ', ' 라고 합니다.'],
              wordBank: ["클래스 변수","인스턴스 변수","지역 변수"],
              answer: ["클래스 변수"],
              hint: '클래스 변수입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수 species를 만들어 모든 객체가 공유하는지 확인하세요.',
              initialCode: 'class Dog:\n    species == \'개\'  # 등호가 잘못됐어요!\nd1 = Dog()\nd2 = Dog()\nprint(d1.species, d2.species)',
              expectedOutputs: ['개 개'],
              hint: 'species = \'개\' 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수 count를 만들어 인스턴스 개수를 세보세요.',
              initialCode: 'class Robot:\n    count = 0\n    def __init__(self):\n        Robot.count +=   \nr1 = Robot()\nr2 = Robot()\nprint(Robot.count)',
              expectedOutputs: ['2'],
              hint: 'Robot.count += 1'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수와 인스턴스 변수를 함께 사용하세요.',
              initialCode: 'class Dog:\n    species = \'개\'\n    def __init__(self, name):\n        self.name = name\nd = Dog(\'초코\')\nprint(d.species, d.name)',
              expectedOutputs: ['개 초코'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '각 객체마다 따로 가지는 변수를 뭐라 하나요?',
              options: ["인스턴스 변수","클래스 변수","전역 변수"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'self.로 만드는 변수입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['각 객체마다 따로 가지는 변수를 ', ' 라고 합니다.'],
              wordBank: ["인스턴스 변수","클래스 변수","전역 변수"],
              answer: ["인스턴스 변수"],
              hint: '인스턴스 변수입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수는 객체를 통해서도, 클래스 자체로도 접근 가능함을 확인하세요.',
              initialCode: 'class Dog:\n    species = \'개\'\nd = Dog()\nprint(Dog.species, d.species)',
              expectedOutputs: ['개 개'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '인스턴스 변수가 클래스 변수와 같은 이름일 때 인스턴스 변수가 우선되는지 확인하세요.',
              initialCode: 'class Dog:\n    species = \'개\'\nd = Dog()\nd.species = \'강아지\'\nprint(d.species)',
              expectedOutputs: ['강아지'],
              hint: '이미 정답입니다. 인스턴스 변수가 우선됩니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수를 카운터로 활용해 생성된 객체 수를 추적하세요.',
              initialCode: 'class User:\n    total = 0\n    def __init__(self, name):\n        self.name = name\n        User.total += 1\nUser(\'철수\')\nUser(\'영희\')\nUser(\'민수\')\nprint(User.total)',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '클래스 변수는 어디에 정의하나요?',
              options: ["클래스 몸체에 직접 (메서드 밖)","__init__ 안에 self.로","항상 함수 밖에서"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '클래스 블록 안, 메서드 바깥에 씁니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '클래스 변수를 하나의 객체에서 수정하면 다른 객체에도 영향이 있나요?',
              options: ["클래스 변수 자체를 바꾸면 모두에 영향을 줄 수 있다","아니요, 절대 영향 없습니다","항상 에러가 납니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '공유되는 값이라 서로 영향을 줄 수 있습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['클래스 변수는 ', ' 에 정의합니다.'],
              wordBank: ["클래스 몸체(메서드 밖)","__init__ 안에서만","함수 안에서만"],
              answer: ["클래스 몸체(메서드 밖)"],
              hint: '클래스 몸체입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['클래스 변수는 여러 객체가 ', ' 값입니다.'],
              wordBank: ["공유하는","각자 다른","무관한"],
              answer: ["공유하는"],
              hint: '공유하는 값입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수를 수정해도 인스턴스 변수는 영향받지 않는지 확인하세요.',
              initialCode: 'class Dog:\n    species = \'개\'\nd = Dog()\nd.species = \'강아지\'\nDog.species = \'고양이\'\nprint(d.species)',
              expectedOutputs: ['강아지'],
              hint: '이미 정답입니다. 인스턴스에서 재정의된 값이 우선합니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수로 최대 체력 상수를 만들고 인스턴스마다 현재 체력을 관리하세요.',
              initialCode: 'class Character:\n    max_hp = 100\n    def __init__(self):\n        self.hp = Character.max_hp\nc = Character()\nc.hp -= 30\nprint(c.hp, Character.max_hp)',
              expectedOutputs: ['70 100'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수를 활용해 태어난 순서(번호)를 자동으로 부여하세요.',
              initialCode: 'class Ticket:\n    next_id = 1\n    def __init__(self):\n        self.id = Ticket.next_id\n        Ticket.next_id += 1\nt1 = Ticket()\nt2 = Ticket()\nprint(t1.id, t2.id)',
              expectedOutputs: ['1 2'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '인스턴스 변수와 클래스 변수의 이름이 같으면 객체에서 접근 시 무엇이 우선인가요?',
              options: ["인스턴스 변수","클래스 변수","랜덤하게 결정"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '인스턴스 변수가 있으면 그것이 우선됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['같은 이름일 때 객체 접근에서는 ', ' 가 우선됩니다.'],
              wordBank: ["인스턴스 변수","클래스 변수","둘 다 무시"],
              answer: ["인스턴스 변수"],
              hint: '인스턴스 변수입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수로 세율을 관리하며 여러 객체가 같은 세율을 사용하는지 확인하세요.',
              initialCode: 'class Product:\n    tax_rate = 0.1\n    def __init__(self, price):\n        self.price = price\n    def price_with_tax(self):\n        return self.price * (1 + Product.tax_rate)\np1 = Product(1000)\np2 = Product(2000)\nprint(p1.price_with_tax(), p2.price_with_tax())',
              expectedOutputs: ['1100.0 2200.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수를 활용해 전체 인스턴스 목록을 관리하는 클래스를 만드세요.',
              initialCode: 'class Player:\n    all_players = []\n    def __init__(self, name):\n        self.name = name\n        Player.all_players.append(name)\nPlayer(\'철수\')\nPlayer(\'영희\')\nprint(Player.all_players)',
              expectedOutputs: ['[\'철수\', \'영희\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 클래스 변수로 학교 이름을 공유하고, 인스턴스 변수로 학생 이름을 관리하는 클래스를 만들어보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩고 소속의 에그'],
              hint: 'class Student:\n    school = \'코딩고\'\n    def __init__(self, name):\n        self.name = name\ns = Student(\'에그\')\nprint(s.school + \' 소속의 \' + s.name)'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'UNIT 12\n파일과의 대화 (I/O)',
    nodes: [
      {
        id: 'node_12_1',
        title: '파일 읽기 (open)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '파일을 여는 함수는?',
              options: ["open()","file()","read()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'open()을 사용합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['파일을 열려면 ', ' 함수를 사용합니다.'],
              wordBank: ["open()","file()","load()"],
              answer: ["open()"],
              hint: 'open()입니다.'
            },
            {
              type: 'quiz_code',
              content: '파일을 읽기 모드로 열어 내용을 출력하세요.',
              initialCode: 'f = open(\'test.txt\', \'w\')\nf.write(\'안녕\')\nf.close()\nf2 = open(\'test.txt\', \'x\')  # 모드를 읽기로 고치세요!\nprint(f2.read())\nf2.close()',
              expectedOutputs: ['안녕'],
              hint: 'open(\'test.txt\', \'r\')'
            },
            {
              type: 'quiz_code',
              content: '파일 내용을 읽는 메서드를 채워 넣으세요.',
              initialCode: 'f = open(\'a.txt\', \'w\')\nf.write(\'파이썬\')\nf.close()\nf2 = open(\'a.txt\', \'r\')\nprint(f2.  ())\nf2.close()',
              expectedOutputs: ['파이썬'],
              hint: 'f2.read()'
            },
            {
              type: 'quiz_code',
              content: '파일에 숫자를 저장하고 읽어와 출력하세요.',
              initialCode: 'f = open(\'num.txt\', \'w\')\nf.write(\'100\')\nf.close()\nf2 = open(\'num.txt\', \'r\')\nprint(f2.read())\nf2.close()',
              expectedOutputs: ['100'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '파일 내용을 전부 읽어오는 메서드는?',
              options: ["read()","readline()","get()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'read()가 전체 내용을 가져옵니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['파일 전체 내용을 읽으려면 ', ' 를 씁니다.'],
              wordBank: ["read()","readline()","get()"],
              answer: ["read()"],
              hint: 'read()입니다.'
            },
            {
              type: 'quiz_code',
              content: '읽어온 파일 내용의 길이를 출력하세요.',
              initialCode: 'f = open(\'b.txt\', \'w\')\nf.write(\'hello\')\nf.close()\nf2 = open(\'b.txt\', \'r\')\ncontent = f2.read()\nf2.close()\nprint(len(content))',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일을 두 번 write한 뒤 읽어 \'w\' 모드의 동작을 확인하세요.',
              initialCode: 'f = open(\'c.txt\', \'w\')\nf.write(\'첫줄\')\nf.close()\nf = open(\'c.txt\', \'w\')\nf.write(\'둘째줄\')\nf.close()\nf2 = open(\'c.txt\', \'r\')\nprint(f2.read())\nf2.close()',
              expectedOutputs: ['둘째줄'],
              hint: '이미 정답입니다. \'w\' 모드는 매번 새로 씁니다(덮어쓰기).'
            },
            {
              type: 'quiz_code',
              content: '파일 내용을 읽어 문자열 메서드로 처리해보세요 (대문자 변환).',
              initialCode: 'f = open(\'d.txt\', \'w\')\nf.write(\'hello\')\nf.close()\nf2 = open(\'d.txt\', \'r\')\nprint(f2.read().upper())\nf2.close()',
              expectedOutputs: ['HELLO'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '파일을 다 읽은 후 반드시 해야 할 일은?',
              options: ["close()로 닫기","다시 open()하기","아무것도 안 해도 됨"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '자원을 해제하려면 닫아야 합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'open(\'file.txt\', \'r\')에서 \'r\'은 무엇을 의미하나요?',
              options: ["읽기 모드","쓰기 모드","추가 모드"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'r은 read(읽기)의 약자입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['파일 작업 후에는 ', ' 로 닫아야 합니다.'],
              wordBank: ["close()","end()","stop()"],
              answer: ["close()"],
              hint: 'close()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['\'r\' 모드는 ', ' 를 의미합니다.'],
              wordBank: ["읽기","쓰기","추가"],
              answer: ["읽기"],
              hint: '읽기입니다.'
            },
            {
              type: 'quiz_code',
              content: '존재하지 않는 파일을 열려다 에러가 나는 것을 try-except로 확인하세요.',
              initialCode: 'try:\n    f = open(\'없는파일.txt\', \'r\')\nexcept FileNotFoundError:\n    print(\'파일이 없습니다\')',
              expectedOutputs: ['파일이 없습니다'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일에 여러 줄을 쓰고 읽어와 줄 수를 세보세요.',
              initialCode: 'f = open(\'e.txt\', \'w\')\nf.write(\'첫줄\\n둘째줄\\n셋째줄\')\nf.close()\nf2 = open(\'e.txt\', \'r\')\ncontent = f2.read()\nf2.close()\nprint(len(content.split(\'\\n\')))',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일 내용에 특정 단어가 포함되어 있는지 확인하세요.',
              initialCode: 'f = open(\'f.txt\', \'w\')\nf.write(\'파이썬은 재미있다\')\nf.close()\nf2 = open(\'f.txt\', \'r\')\ncontent = f2.read()\nf2.close()\nprint(\'재미있다\' in content)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '존재하지 않는 파일을 \'r\' 모드로 열면?',
              options: ["FileNotFoundError가 발생한다","빈 파일이 자동 생성된다","None이 반환된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '읽기 모드는 파일이 있어야 합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['없는 파일을 \'r\' 모드로 열면 ', ' 가 발생합니다.'],
              wordBank: ["FileNotFoundError","자동 생성","아무 일도 없음"],
              answer: ["FileNotFoundError"],
              hint: 'FileNotFoundError입니다.'
            },
            {
              type: 'quiz_code',
              content: '파일에서 읽은 숫자 문자열을 정수로 변환해 계산하세요.',
              initialCode: 'f = open(\'g.txt\', \'w\')\nf.write(\'42\')\nf.close()\nf2 = open(\'g.txt\', \'r\')\nnum = int(f2.read())\nf2.close()\nprint(num + 8)',
              expectedOutputs: ['50'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일에서 읽은 내용을 함수로 안전하게 처리해보세요.',
              initialCode: 'def read_file(name):\n    f = open(name, \'r\')\n    content = f.read()\n    f.close()\n    return content\nf = open(\'h.txt\', \'w\')\nf.write(\'테스트\')\nf.close()\nprint(read_file(\'h.txt\'))',
              expectedOutputs: ['테스트'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 파일에 자기소개를 쓰고 다시 읽어서 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['저는 에그입니다'],
              hint: 'f = open(\'me.txt\', \'w\')\nf.write(\'저는 에그입니다\')\nf.close()\nf2 = open(\'me.txt\', \'r\')\nprint(f2.read())\nf2.close()'
            }
          ]
        ]
      },
      {
        id: 'node_12_2',
        title: '안전하게 열고 닫기 (with문)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: 'with문을 쓰면 파일을 자동으로 무엇을 해주나요?',
              options: ["닫아준다(close)","읽어준다","삭제한다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '블록이 끝나면 자동으로 close됩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['with문을 쓰면 파일을 자동으로 ', ' 줍니다.'],
              wordBank: ["닫아","읽어","삭제해"],
              answer: ["닫아"],
              hint: '닫아줍니다.'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일을 열어 내용을 출력하세요.',
              initialCode: 'with open(\'t1.txt\', \'w\') as f:\n    f.write(\'안녕\')\nwith open(\'t1.txt\', \'r\') as f\n    print(f.read())  # 콜론이 빠졌어요!',
              expectedOutputs: ['안녕'],
              hint: 'with open(\'t1.txt\', \'r\') as f: 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일을 읽는 코드를 완성하세요.',
              initialCode: 'with open(\'t2.txt\', \'w\') as f:\n    f.write(\'파이썬\')\nwith open(\'t2.txt\', \'r\')   f:\n    print(f.read())',
              expectedOutputs: ['파이썬'],
              hint: 'as f:'
            },
            {
              type: 'quiz_code',
              content: 'with문 블록이 끝난 뒤 파일이 닫혔는지 확인하세요.',
              initialCode: 'with open(\'t3.txt\', \'w\') as f:\n    f.write(\'hi\')\nprint(f.closed)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. with 블록을 나가면 자동으로 닫힙니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'with문의 기본 형태는?',
              options: ["with open(...) as f:","with f = open(...):","open(...) with f:"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'as 뒤에 변수 이름을 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['with문의 기본 형태는 ', ' 입니다.'],
              wordBank: ["with open(...) as f:","with f = open(...):","open(...) with f:"],
              answer: ["with open(...) as f:"],
              hint: 'with open(...) as f:입니다.'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일을 쓰고 바로 다른 with문으로 읽어오세요.',
              initialCode: 'with open(\'t4.txt\', \'w\') as f:\n    f.write(\'안녕하세요\')\nwith open(\'t4.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['안녕하세요'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'with문 안에서 에러가 나도 파일이 닫히는지 확인하세요.',
              initialCode: 'with open(\'t5.txt\', \'w\') as f:\n    f.write(\'data\')\ntry:\n    with open(\'t5.txt\', \'r\') as f:\n        result = 1 / 0\nexcept ZeroDivisionError:\n    pass\nprint(f.closed)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. with문은 에러가 나도 안전하게 닫아줍니다.'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 연 파일의 내용을 처리해 출력하세요.',
              initialCode: 'with open(\'t6.txt\', \'w\') as f:\n    f.write(\'hello world\')\nwith open(\'t6.txt\', \'r\') as f:\n    words = f.read().split(\' \')\n    print(len(words))',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'with문 안에서 에러가 나도 파일이 닫히나요?',
              options: ["네, 자동으로 닫힙니다","아니요, 닫히지 않습니다","조건에 따라 다릅니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'with문은 에러가 나도 안전하게 정리해줍니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'with문을 쓰는 것이 권장되는 이유는?',
              options: ["close()를 깜빡할 위험이 없어서","코드가 더 빨라져서","에러가 절대 안 나서"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '실수로 close()를 빠뜨리는 걸 방지합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['with문 안에서 에러가 나도 파일은 ', ' 닫힙니다.'],
              wordBank: ["자동으로","닫히지 않고","수동으로만"],
              answer: ["자동으로"],
              hint: '자동으로 닫힙니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['with문은 ', ' 를 깜빡할 위험을 없애줍니다.'],
              wordBank: ["close()","open()","write()"],
              answer: ["close()"],
              hint: 'close()입니다.'
            },
            {
              type: 'quiz_code',
              content: '두 개의 with문을 순서대로 사용해 파일을 처리하세요.',
              initialCode: 'with open(\'t7.txt\', \'w\') as f:\n    f.write(\'1,2,3\')\nwith open(\'t7.txt\', \'r\') as f:\n    nums = f.read().split(\',\')\n    total = 0\n    for n in nums:\n        total += int(n)\n    print(total)',
              expectedOutputs: ['6'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일을 함수 안에서 안전하게 처리하는 코드를 작성하세요.',
              initialCode: 'def save_and_load(name, content):\n    with open(name, \'w\') as f:\n        f.write(content)\n    with open(name, \'r\') as f:\n        return f.read()\nprint(save_and_load(\'t8.txt\', \'완료\'))',
              expectedOutputs: ['완료'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일에 여러 줄을 쓰고 줄 단위로 나눠 출력하세요.',
              initialCode: 'with open(\'t9.txt\', \'w\') as f:\n    f.write(\'가\\n나\\n다\')\nwith open(\'t9.txt\', \'r\') as f:\n    for line in f.read().split(\'\\n\'):\n        print(line)',
              expectedOutputs: ['다'],
              hint: '이미 정답입니다. 마지막 줄만 확인해요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'with open(...) as f: 블록을 벗어나면 f는 어떻게 되나요?',
              options: ["이미 닫힌 상태가 된다","여전히 열려있다","자동으로 삭제된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '블록을 나가는 순간 자동으로 닫힙니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['with 블록을 벗어나면 파일은 이미 ', ' 상태가 됩니다.'],
              wordBank: ["닫힌","열린","삭제된"],
              answer: ["닫힌"],
              hint: '닫힌 상태입니다.'
            },
            {
              type: 'quiz_code',
              content: 'with문 두 개를 겹쳐서 두 파일을 동시에 다뤄보세요.',
              initialCode: 'with open(\'a10.txt\', \'w\') as f:\n    f.write(\'AAA\')\nwith open(\'b10.txt\', \'w\') as f:\n    f.write(\'BBB\')\nwith open(\'a10.txt\') as f1, open(\'b10.txt\') as f2:\n    print(f1.read() + f2.read())',
              expectedOutputs: ['AAABBB'],
              hint: '이미 정답입니다. with문은 쉼표로 여러 파일을 동시에 열 수 있습니다.'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일을 안전하게 처리하며 예외 상황(없는 파일)도 함께 다루세요.',
              initialCode: 'try:\n    with open(\'없는파일2.txt\', \'r\') as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print(\'파일 없음\')',
              expectedOutputs: ['파일 없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 with문으로 파일에 좋아하는 문구를 쓰고 다시 읽어 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩은 재밌다'],
              hint: 'with open(\'quote.txt\', \'w\') as f:\n    f.write(\'코딩은 재밌다\')\nwith open(\'quote.txt\', \'r\') as f:\n    print(f.read())'
            }
          ]
        ]
      },
      {
        id: 'node_12_3',
        title: '파일 쓰기와 추가하기',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '파일에 새로 쓸 때(덮어쓰기) 사용하는 모드는?',
              options: ["'w'","'a'","'r'"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'write의 w입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['덮어쓰기 모드는 ', ' 입니다.'],
              wordBank: ["'w'","'a'","'r'"],
              answer: ["'w'"],
              hint: '\'w\'입니다.'
            },
            {
              type: 'quiz_code',
              content: '파일에 \'안녕\'을 쓰고 출력하세요.',
              initialCode: 'f = open(\'w1.txt\', \'x\')  # 모드를 쓰기로 고치세요!\nf.write(\'안녕\')\nf.close()\nf2 = open(\'w1.txt\', \'r\')\nprint(f2.read())\nf2.close()',
              expectedOutputs: ['안녕'],
              hint: 'open(\'w1.txt\', \'w\')'
            },
            {
              type: 'quiz_code',
              content: '기존 내용 뒤에 이어쓰기 모드로 내용을 추가하세요.',
              initialCode: 'with open(\'w2.txt\', \'w\') as f:\n    f.write(\'첫줄\')\nwith open(\'w2.txt\', \'  \') as f:\n    f.write(\'둘째줄\')\nwith open(\'w2.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['첫줄둘째줄'],
              hint: '\'a\''
            },
            {
              type: 'quiz_code',
              content: '\'w\' 모드로 다시 쓰면 기존 내용이 사라지는지 확인하세요.',
              initialCode: 'with open(\'w3.txt\', \'w\') as f:\n    f.write(\'원래내용\')\nwith open(\'w3.txt\', \'w\') as f:\n    f.write(\'새내용\')\nwith open(\'w3.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['새내용'],
              hint: '이미 정답입니다. \'w\'는 덮어씁니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '기존 내용 뒤에 이어서 쓸 때 사용하는 모드는?',
              options: ["'a'","'w'","'r'"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'append의 a입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['이어쓰기(추가) 모드는 ', ' 입니다.'],
              wordBank: ["'a'","'w'","'r'"],
              answer: ["'a'"],
              hint: '\'a\'입니다.'
            },
            {
              type: 'quiz_code',
              content: '숫자를 문자열로 변환해 파일에 쓰세요.',
              initialCode: 'with open(\'w4.txt\', \'w\') as f:\n    f.write(str(100))\nwith open(\'w4.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['100'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 줄을 이어쓰기 모드로 추가해보세요.',
              initialCode: 'with open(\'w5.txt\', \'w\') as f:\n    f.write(\'1번\')\nwith open(\'w5.txt\', \'a\') as f:\n    f.write(\'\\n2번\')\nwith open(\'w5.txt\', \'a\') as f:\n    f.write(\'\\n3번\')\nwith open(\'w5.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['1번\n2번\n3번'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '리스트의 값을 한 줄씩 파일에 써보세요.',
              initialCode: 'items = [\'사과\', \'바나나\', \'포도\']\nwith open(\'w6.txt\', \'w\') as f:\n    for item in items:\n        f.write(item + \'\\n\')\nwith open(\'w6.txt\', \'r\') as f:\n    print(f.read().strip())',
              expectedOutputs: ['사과\n바나나\n포도'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '\'w\' 모드로 이미 있는 파일을 열면?',
              options: ["기존 내용이 사라지고 새로 써진다","기존 내용 뒤에 추가된다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '덮어쓰기 모드입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '\'a\' 모드로 없는 파일을 열면?',
              options: ["새 파일이 생성된다","에러가 난다","무시된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'append 모드도 파일이 없으면 새로 만듭니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['\'w\' 모드는 기존 내용을 ', ' 씁니다.'],
              wordBank: ["지우고 새로","유지한 채 이어서","읽기만 하고"],
              answer: ["지우고 새로"],
              hint: '지우고 새로 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['\'a\' 모드로 없는 파일을 열면 ', ' 생성됩니다.'],
              wordBank: ["새로","에러 없이 무시하고","읽기 전용으로"],
              answer: ["새로"],
              hint: '새로 생성됩니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 값을 문자열로 변환해 파일에 저장하고 읽어오세요.',
              initialCode: 'data = {\'name\': \'에그\', \'age\': 5}\nwith open(\'w7.txt\', \'w\') as f:\n    f.write(str(data))\nwith open(\'w7.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['{\'name\': \'에그\', \'age\': 5}'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수로 로그를 이어쓰는 코드를 작성해보세요.',
              initialCode: 'def log(msg):\n    with open(\'w8.txt\', \'a\') as f:\n        f.write(msg + \'\\n\')\nlog(\'시작\')\nlog(\'완료\')\nwith open(\'w8.txt\', \'r\') as f:\n    print(f.read().strip())',
              expectedOutputs: ['시작\n완료'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '1부터 5까지의 숫자를 파일에 한 줄씩 쓰고 합계를 다시 계산해보세요.',
              initialCode: 'with open(\'w9.txt\', \'w\') as f:\n    for i in range(1, 6):\n        f.write(str(i) + \'\\n\')\nwith open(\'w9.txt\', \'r\') as f:\n    nums = f.read().strip().split(\'\\n\')\n    total = 0\n    for n in nums:\n        total += int(n)\nprint(total)',
              expectedOutputs: ['15'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'write()로 숫자를 바로 쓰면?',
              options: ["TypeError가 난다 (문자열로 변환 필요)","자동으로 문자열이 된다","항상 0이 써진다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'write()는 문자열만 받습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['write()에 숫자를 그대로 넣으면 ', ' 가 납니다.'],
              wordBank: ["TypeError","자동 변환","아무 문제 없음"],
              answer: ["TypeError"],
              hint: 'TypeError입니다.'
            },
            {
              type: 'quiz_code',
              content: '\'w\'와 \'a\' 모드를 함께 사용해 헤더와 본문을 순서대로 작성하세요.',
              initialCode: 'with open(\'w10.txt\', \'w\') as f:\n    f.write(\'=== 로그 ===\\n\')\nwith open(\'w10.txt\', \'a\') as f:\n    f.write(\'내용1\\n\')\nwith open(\'w10.txt\', \'a\') as f:\n    f.write(\'내용2\')\nwith open(\'w10.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['=== 로그 ===\n내용1\n내용2'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '함수로 파일 초기화(w) 후 여러 번 추가(a)하는 유틸리티를 만드세요.',
              initialCode: 'def init_file(name):\n    with open(name, \'w\') as f:\n        f.write(\'\')\ndef append_line(name, text):\n    with open(name, \'a\') as f:\n        f.write(text + \'\\n\')\ninit_file(\'w11.txt\')\nappend_line(\'w11.txt\', \'A\')\nappend_line(\'w11.txt\', \'B\')\nwith open(\'w11.txt\', \'r\') as f:\n    print(f.read().strip())',
              expectedOutputs: ['A\nB'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 파일에 오늘 할 일 목록 2개를 한 줄씩 써보고 읽어서 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['공부하기\n운동하기'],
              hint: 'with open(\'todo.txt\', \'w\') as f:\n    f.write(\'공부하기\\n운동하기\')\nwith open(\'todo.txt\', \'r\') as f:\n    print(f.read())'
            }
          ]
        ]
      },
      {
        id: 'node_12_4',
        title: '한 줄씩 읽어오기',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '파일을 한 줄씩 읽는 메서드는?',
              options: ["readline()","read()","readall()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'readline()은 한 줄만 읽습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['파일을 한 줄만 읽으려면 ', ' 를 씁니다.'],
              wordBank: ["readline()","read()","line()"],
              answer: ["readline()"],
              hint: 'readline()입니다.'
            },
            {
              type: 'quiz_code',
              content: '파일의 첫 줄만 읽어 출력하세요.',
              initialCode: 'with open(\'l1.txt\', \'w\') as f:\n    f.write(\'첫줄\\n둘째줄\')\nwith open(\'l1.txt\', \'r\') as f:\n    print(f.readlines())  # 한 줄만 읽는 메서드로 고치세요!',
              expectedOutputs: ['첫줄'],
              hint: 'f.readline().strip()'
            },
            {
              type: 'quiz_code',
              content: '모든 줄을 리스트로 읽어 개수를 출력하세요.',
              initialCode: 'with open(\'l2.txt\', \'w\') as f:\n    f.write(\'가\\n나\\n다\')\nwith open(\'l2.txt\', \'r\') as f:\n    lines = f.  ()\n    print(len(lines))',
              expectedOutputs: ['3'],
              hint: 'f.readlines()'
            },
            {
              type: 'quiz_code',
              content: 'for문으로 파일을 한 줄씩 순회하며 출력하세요.',
              initialCode: 'with open(\'l3.txt\', \'w\') as f:\n    f.write(\'A\\nB\\nC\')\nwith open(\'l3.txt\', \'r\') as f:\n    for line in f:\n        print(line.strip())',
              expectedOutputs: ['A\nB\nC'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '파일의 모든 줄을 리스트로 가져오는 메서드는?',
              options: ["readlines()","readline()","lines()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'readlines()는 리스트로 반환합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['모든 줄을 리스트로 가져오려면 ', ' 를 씁니다.'],
              wordBank: ["readlines()","readline()","getlines()"],
              answer: ["readlines()"],
              hint: 'readlines()입니다.'
            },
            {
              type: 'quiz_code',
              content: 'readlines()로 읽은 줄들의 개행 문자를 strip()으로 제거하세요.',
              initialCode: 'with open(\'l4.txt\', \'w\') as f:\n    f.write(\'하나\\n둘\\n\')\nwith open(\'l4.txt\', \'r\') as f:\n    lines = f.readlines()\n    print(lines[0].strip())',
              expectedOutputs: ['하나'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일의 줄 수를 세어 출력하세요.',
              initialCode: 'with open(\'l5.txt\', \'w\') as f:\n    f.write(\'1\\n2\\n3\\n4\')\nwith open(\'l5.txt\', \'r\') as f:\n    count = 0\n    for line in f:\n        count += 1\n    print(count)',
              expectedOutputs: ['4'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일의 각 줄을 숫자로 변환해 합계를 구하세요.',
              initialCode: 'with open(\'l6.txt\', \'w\') as f:\n    f.write(\'10\\n20\\n30\')\nwith open(\'l6.txt\', \'r\') as f:\n    total = 0\n    for line in f:\n        total += int(line.strip())\nprint(total)',
              expectedOutputs: ['60'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'for line in f: 은 무엇을 하나요?',
              options: ["파일을 한 줄씩 순회한다","파일 전체를 한 번에 가져온다","파일명을 출력한다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '파일 객체는 줄 단위로 반복 가능합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'readlines()로 읽은 각 줄 끝에 남아있는 것은?',
              options: ["줄바꿈 문자(\\n)","공백","아무것도 없음"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '각 줄에는 개행 문자가 포함될 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['for line in f: 는 파일을 ', ' 순회합니다.'],
              wordBank: ["한 줄씩","한 글자씩","전체 한 번에"],
              answer: ["한 줄씩"],
              hint: '한 줄씩 순회합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['readlines()의 각 줄 끝에는 ', ' 이 남아있을 수 있습니다.'],
              wordBank: ["줄바꿈 문자(\\n)","공백만","아무것도 없음"],
              answer: ["줄바꿈 문자(\\n)"],
              hint: '줄바꿈 문자입니다.'
            },
            {
              type: 'quiz_code',
              content: 'readlines()로 마지막 줄만 출력하세요.',
              initialCode: 'with open(\'l7.txt\', \'w\') as f:\n    f.write(\'처음\\n중간\\n마지막\')\nwith open(\'l7.txt\', \'r\') as f:\n    lines = f.readlines()\n    print(lines[-1])',
              expectedOutputs: ['마지막'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '특정 단어가 포함된 줄만 골라 출력하세요.',
              initialCode: 'with open(\'l8.txt\', \'w\') as f:\n    f.write(\'사과 좋아\\n바나나 싫어\\n포도 좋아\')\nwith open(\'l8.txt\', \'r\') as f:\n    for line in f:\n        if \'좋아\' in line:\n            print(line.strip())',
              expectedOutputs: ['포도 좋아'],
              hint: '이미 정답입니다. 마지막 줄만 확인해요.'
            },
            {
              type: 'quiz_code',
              content: '파일의 각 줄에 순번을 붙여 출력하세요.',
              initialCode: 'with open(\'l9.txt\', \'w\') as f:\n    f.write(\'가\\n나\\n다\')\nwith open(\'l9.txt\', \'r\') as f:\n    lines = f.readlines()\n    for i in range(len(lines)):\n        print(str(i + 1) + \'. \' + lines[i].strip())',
              expectedOutputs: ['3. 다'],
              hint: '이미 정답입니다. 마지막 줄만 확인해요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '줄바꿈 문자를 제거하려면?',
              options: ["strip()을 사용한다","자동으로 제거된다","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'strip()으로 앞뒤 공백/개행을 없앨 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['줄바꿈 문자를 제거하려면 ', ' 를 사용합니다.'],
              wordBank: ["strip()","cut()","remove()"],
              answer: ["strip()"],
              hint: 'strip()입니다.'
            },
            {
              type: 'quiz_code',
              content: '빈 줄을 제외하고 실제 내용이 있는 줄의 개수를 세어보세요.',
              initialCode: 'with open(\'l10.txt\', \'w\') as f:\n    f.write(\'가\\n\\n나\\n다\')\nwith open(\'l10.txt\', \'r\') as f:\n    count = 0\n    for line in f:\n        if line.strip() != \'\':\n            count += 1\nprint(count)',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일에서 가장 긴 줄을 찾아 출력하세요.',
              initialCode: 'with open(\'l11.txt\', \'w\') as f:\n    f.write(\'짧다\\n조금더길다\\n중간\')\nwith open(\'l11.txt\', \'r\') as f:\n    lines = f.readlines()\n    longest = max(lines, key=lambda l: len(l.strip()))\nprint(longest.strip())',
              expectedOutputs: ['조금더길다'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 파일에 세 줄의 숫자를 쓰고 평균을 계산해 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['20.0'],
              hint: 'with open(\'avg.txt\', \'w\') as f:\n    f.write(\'10\\n20\\n30\')\nnums = []\nwith open(\'avg.txt\', \'r\') as f:\n    for line in f:\n        nums.append(int(line.strip()))\nprint(sum(nums) / len(nums))'
            }
          ]
        ]
      },
      {
        id: 'node_12_5',
        title: 'CSV 다루기 꿀팁',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: 'CSV는 무엇의 약자인가요?',
              options: ["Comma-Separated Values (쉼표로 구분된 값)","Code String Value","Class Storage Value"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '쉼표로 값을 구분하는 파일 형식입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['CSV는 ', ' 로 구분된 값이라는 뜻입니다.'],
              wordBank: ["쉼표(콤마)","공백","콜론"],
              answer: ["쉼표(콤마)"],
              hint: '쉼표입니다.'
            },
            {
              type: 'quiz_code',
              content: 'csv.reader로 \'a,b,c\' 한 줄을 읽어 리스트로 출력하세요.',
              initialCode: 'import csv\nimport io\ndata = \'a,b,c\'\nreader = csv.reader(data)  # io.StringIO로 감싸야 해요!\nfor row in reader:\n    print(row)',
              expectedOutputs: ['[\'a\', \'b\', \'c\']'],
              hint: 'csv.reader(io.StringIO(data))'
            },
            {
              type: 'quiz_code',
              content: 'csv.writer로 리스트를 한 줄 써서 출력하세요.',
              initialCode: 'import csv\nimport io\noutput = io.StringIO()\nwriter = csv.writer(output)\nwriter.  ([\'이름\', \'나이\'])\nprint(output.getvalue().strip())',
              expectedOutputs: ['이름,나이'],
              hint: 'writer.writerow([\'이름\', \'나이\'])'
            },
            {
              type: 'quiz_code',
              content: 'CSV 문자열의 여러 줄을 순회하며 출력하세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,나이\\n에그,5\\n치킨,3\'\nreader = csv.reader(io.StringIO(data))\nfor row in reader:\n    print(row)',
              expectedOutputs: ['[\'치킨\', \'3\']'],
              hint: '이미 정답입니다. 마지막 줄만 확인해요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '파이썬에서 CSV를 다루는 표준 모듈은?',
              options: ["csv","comma","table"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'csv 모듈을 import합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['CSV를 다루려면 ', ' 모듈을 사용합니다.'],
              wordBank: ["csv","comma","table"],
              answer: ["csv"],
              hint: 'csv입니다.'
            },
            {
              type: 'quiz_code',
              content: 'CSV의 첫 줄(헤더)만 가져와 출력하세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,나이\\n에그,5\'\nreader = csv.reader(io.StringIO(data))\nheader = next(reader)\nprint(header)',
              expectedOutputs: ['[\'이름\', \'나이\']'],
              hint: '이미 정답입니다. next()로 첫 줄만 가져올 수 있어요.'
            },
            {
              type: 'quiz_code',
              content: 'CSV writer로 여러 줄을 써보세요.',
              initialCode: 'import csv\nimport io\noutput = io.StringIO()\nwriter = csv.writer(output)\nwriter.writerow([\'사과\', 1000])\nwriter.writerow([\'바나나\', 500])\nprint(output.getvalue().strip())',
              expectedOutputs: ['사과,1000\n바나나,500'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'CSV에서 헤더를 건너뛰고 데이터만 순회하세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,85\'\nreader = csv.reader(io.StringIO(data))\nnext(reader)\nfor row in reader:\n    print(row[0] + \': \' + row[1])',
              expectedOutputs: ['철수: 90\n영희: 85'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'csv.reader()는 각 줄을 무엇으로 반환하나요?',
              options: ["리스트","딕셔너리","문자열 그대로"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '쉼표로 나뉜 값들을 리스트로 돌려줍니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'csv.writer()로 한 줄을 쓰는 메서드는?',
              options: ["writerow()","write()","append()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'writerow()에 리스트를 넣습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['csv.reader()의 각 줄은 ', ' 로 반환됩니다.'],
              wordBank: ["리스트","딕셔너리","숫자"],
              answer: ["리스트"],
              hint: '리스트입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['csv.writer()로 한 줄을 쓰려면 ', ' 를 씁니다.'],
              wordBank: ["writerow()","write()","add()"],
              answer: ["writerow()"],
              hint: 'writerow()입니다.'
            },
            {
              type: 'quiz_code',
              content: 'CSV 데이터에서 점수 열의 합계를 구하세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,85\'\nreader = csv.reader(io.StringIO(data))\nnext(reader)\ntotal = 0\nfor row in reader:\n    total += int(row[1])\nprint(total)',
              expectedOutputs: ['175'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 형태로 CSV를 읽는 DictReader를 사용해보세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\'\nreader = csv.DictReader(io.StringIO(data))\nfor row in reader:\n    print(row[\'이름\'], row[\'점수\'])',
              expectedOutputs: ['철수 90'],
              hint: '이미 정답입니다. DictReader는 헤더를 키로 사용합니다.'
            },
            {
              type: 'quiz_code',
              content: 'DictWriter로 딕셔너리 데이터를 CSV로 써보세요.',
              initialCode: 'import csv\nimport io\noutput = io.StringIO()\nwriter = csv.DictWriter(output, fieldnames=[\'이름\', \'나이\'])\nwriter.writeheader()\nwriter.writerow({\'이름\': \'에그\', \'나이\': 5})\nprint(output.getvalue().strip())',
              expectedOutputs: ['이름,나이\n에그,5'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'CSV 파일의 첫 줄은 보통 무엇을 의미하나요?',
              options: ["헤더(열 이름)","항상 빈 줄","마지막 데이터"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '보통 컬럼 이름이 첫 줄에 옵니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['CSV의 첫 줄은 보통 ', ' 을 의미합니다.'],
              wordBank: ["헤더(열 이름)","랜덤 데이터","주석"],
              answer: ["헤더(열 이름)"],
              hint: '헤더입니다.'
            },
            {
              type: 'quiz_code',
              content: 'CSV 데이터에서 특정 조건(점수 90 이상)에 맞는 행만 출력하세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,70\\n민수,95\'\nreader = csv.DictReader(io.StringIO(data))\nfor row in reader:\n    if int(row[\'점수\']) >= 90:\n        print(row[\'이름\'])',
              expectedOutputs: ['철수\n민수'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'CSV로 여러 학생의 평균 점수를 계산해보세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,80\\n민수,70\'\nreader = csv.DictReader(io.StringIO(data))\ntotal = 0\ncount = 0\nfor row in reader:\n    total += int(row[\'점수\'])\n    count += 1\nprint(total / count)',
              expectedOutputs: ['80.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 학생 2명의 이름과 점수를 CSV 형태로 만들어 DictReader로 읽어 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩 100\n에그 90'],
              hint: 'import csv\nimport io\ndata = \'이름,점수\\n코딩,100\\n에그,90\'\nreader = csv.DictReader(io.StringIO(data))\nfor row in reader:\n    print(row[\'이름\'], row[\'점수\'])'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 13,
    title: 'UNIT 13\n도구 상자 (모듈과 패키지)',
    nodes: [
      {
        id: 'node_13_1',
        title: '남의 코드 빌려오기 (import)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '다른 모듈의 기능을 가져오는 키워드는?',
              options: ["import","include","require"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'import를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['다른 모듈을 가져오려면 ', ' 를 씁니다.'],
              wordBank: ["import","include","require"],
              answer: ["import"],
              hint: 'import입니다.'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈을 가져와 제곱근을 계산하세요.',
              initialCode: 'import maths  # 모듈 이름 오타를 고치세요!\nprint(math.sqrt(16))',
              expectedOutputs: ['4.0'],
              hint: 'import math'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈로 파이 값을 출력하세요.',
              initialCode: 'import math\nprint(math.  )',
              expectedOutputs: ['3.141592653589793'],
              hint: 'math.pi'
            },
            {
              type: 'quiz_code',
              content: 'math.sqrt로 제곱근을 계산하세요.',
              initialCode: 'import math\nprint(math.sqrt(25))',
              expectedOutputs: ['5.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'import math 후 파이(π) 값을 쓰려면?',
              options: ["math.pi","pi","math().pi"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '모듈이름.속성 형태로 접근합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['math 모듈의 pi에 접근하려면 ', ' 로 씁니다.'],
              wordBank: ["math.pi","pi","math[pi]"],
              answer: ["math.pi"],
              hint: 'math.pi입니다.'
            },
            {
              type: 'quiz_code',
              content: 'math.floor와 math.ceil로 소수를 내림/올림해보세요.',
              initialCode: 'import math\nprint(math.floor(3.7), math.ceil(3.2))',
              expectedOutputs: ['3 4'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '모듈에 별명을 붙여 사용해보세요.',
              initialCode: 'import math as m\nprint(m.sqrt(9))',
              expectedOutputs: ['3.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈의 여러 함수를 함께 사용해보세요.',
              initialCode: 'import math\nprint(math.pow(2, 3))',
              expectedOutputs: ['8.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '모듈에 별명을 붙이는 문법은?',
              options: ["import 모듈 as 별명","import 모듈 -> 별명","import(모듈, 별명)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'as 뒤에 별명을 씁니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'import math를 두 번 해도 문제 없나요?',
              options: ["네, 문제 없습니다 (중복 로드 방지됨)","에러가 납니다","모듈이 두 배로 로드됩니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '파이썬이 중복 로딩을 알아서 방지합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['모듈에 별명을 붙이려면 ', ' 를 씁니다.'],
              wordBank: ["as","->","alias"],
              answer: ["as"],
              hint: 'as입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['같은 모듈을 여러 번 import해도 ', ' 됩니다.'],
              wordBank: ["한 번만 로드","매번 새로 로드","에러가"],
              answer: ["한 번만 로드"],
              hint: '한 번만 로드됩니다.'
            },
            {
              type: 'quiz_code',
              content: 'math.pi를 이용해 원의 넓이를 계산하세요.',
              initialCode: 'import math\nradius = 3\nprint(math.pi * radius ** 2)',
              expectedOutputs: ['28.274333882308138'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈로 절댓값을 구하세요.',
              initialCode: 'import math\nprint(math.fabs(-7))',
              expectedOutputs: ['7.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '두 모듈(math, random)을 함께 import해보세요.',
              initialCode: 'import math\nimport random\nrandom.seed(1)\nprint(math.sqrt(4) == 2.0)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '존재하지 않는 모듈을 import하면?',
              options: ["ModuleNotFoundError가 발생한다","자동으로 설치된다","무시된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '모듈이 없으면 에러가 납니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['없는 모듈을 import하면 ', ' 가 발생합니다.'],
              wordBank: ["ModuleNotFoundError","경고만","자동 설치"],
              answer: ["ModuleNotFoundError"],
              hint: 'ModuleNotFoundError입니다.'
            },
            {
              type: 'quiz_code',
              content: '함수 안에서 math 모듈을 사용하는 계산 함수를 만드세요.',
              initialCode: 'import math\ndef circle_area(r):\n    return math.pi * r ** 2\nprint(round(circle_area(2), 2))',
              expectedOutputs: ['12.57'],
              hint: '이미 정답입니다. round()로 소수점을 반올림했어요.'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈로 로그와 지수를 함께 사용하는 계산을 해보세요.',
              initialCode: 'import math\nprint(math.log(math.e))',
              expectedOutputs: ['1.0'],
              hint: '이미 정답입니다. math.e는 자연상수입니다.'
            },
            {
              type: 'quiz_code',
              content: '스스로 math 모듈을 가져와 100의 제곱근을 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['10.0'],
              hint: 'import math\nprint(math.sqrt(100))'
            }
          ]
        ]
      },
      {
        id: 'node_13_2',
        title: '원하는 것만 쏙 빼오기 (from)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '모듈에서 특정 기능만 가져오는 문법은?',
              options: ["from 모듈 import 기능","import 모듈.기능","include 기능 from 모듈"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'from ... import ... 형태입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['특정 기능만 가져오려면 ', ' 형태로 씁니다.'],
              wordBank: ["from 모듈 import 기능","import 모듈.기능","get 기능 from 모듈"],
              answer: ["from 모듈 import 기능"],
              hint: 'from 모듈 import 기능입니다.'
            },
            {
              type: 'quiz_code',
              content: 'from math import sqrt로 가져와 사용하세요.',
              initialCode: 'from math import sqrt\nprint(math.sqrt(16))  # math. 을 빼야 해요!',
              expectedOutputs: ['4.0'],
              hint: 'print(sqrt(16))'
            },
            {
              type: 'quiz_code',
              content: 'from math import pi로 파이 값을 가져와 출력하세요.',
              initialCode: 'from math import   \nprint(pi)',
              expectedOutputs: ['3.141592653589793'],
              hint: 'pi'
            },
            {
              type: 'quiz_code',
              content: '여러 기능을 한 번에 가져와보세요.',
              initialCode: 'from math import sqrt, pow\nprint(sqrt(9), pow(2, 3))',
              expectedOutputs: ['3.0 8.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'from math import sqrt 후 sqrt를 쓰는 방법은?',
              options: ["sqrt(16)","math.sqrt(16)","math[sqrt](16)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '모듈 이름 없이 바로 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['from math import sqrt 후에는 ', ' 로 바로 사용합니다.'],
              wordBank: ["sqrt(값)","math.sqrt(값)","sqrt.math(값)"],
              answer: ["sqrt(값)"],
              hint: 'sqrt(값)입니다.'
            },
            {
              type: 'quiz_code',
              content: 'as로 별명을 붙여 가져와보세요.',
              initialCode: 'from math import sqrt as s\nprint(s(25))',
              expectedOutputs: ['5.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'random 모듈에서 seed와 randint를 가져와 사용하세요.',
              initialCode: 'from random import seed, randint\nseed(1)\nn = randint(1, 10)\nprint(1 <= n <= 10)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'from import로 가져온 함수를 다른 함수 안에서 사용하세요.',
              initialCode: 'from math import sqrt\ndef hypotenuse(a, b):\n    return sqrt(a ** 2 + b ** 2)\nprint(hypotenuse(3, 4))',
              expectedOutputs: ['5.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'from 모듈 import * 는 무엇을 하나요?',
              options: ["모듈의 모든 기능을 가져온다","아무것도 안 한다","에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '별표는 전부 가져온다는 뜻입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'from math import sqrt as s 처럼 쓰면?',
              options: ["sqrt를 s라는 이름으로 사용할 수 있다","에러가 난다","sqrt는 사용할 수 없게 된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'as로 별명을 붙일 수 있습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['from 모듈 import * 는 ', ' 를 가져옵니다.'],
              wordBank: ["모든 기능","아무것도","이름만"],
              answer: ["모든 기능"],
              hint: '모든 기능입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['from math import sqrt as s 는 sqrt에 ', ' 을 붙입니다.'],
              wordBank: ["별명 s","새 기능","오류"],
              answer: ["별명 s"],
              hint: '별명을 붙입니다.'
            },
            {
              type: 'quiz_code',
              content: '두 개의 from import를 함께 사용해보세요.',
              initialCode: 'from math import pi\nfrom math import sqrt\nprint(round(pi, 2), sqrt(4))',
              expectedOutputs: ['3.14 2.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'import 방식과 from import 방식을 비교해보세요.',
              initialCode: 'import math\nfrom math import sqrt\nprint(math.sqrt(16) == sqrt(16))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 둘 다 같은 함수를 가리킵니다.'
            },
            {
              type: 'quiz_code',
              content: 'from math import *로 여러 기능을 한 번에 가져와보세요.',
              initialCode: 'from math import *\nprint(sqrt(16), pi > 3)',
              expectedOutputs: ['4.0 True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'from 모듈 import * 를 남용하면 어떤 문제가 생길 수 있나요?',
              options: ["이름이 겹쳐 헷갈릴 수 있다","항상 에러가 난다","속도가 매우 느려진다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '어디서 온 이름인지 알기 어려워질 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['import * 를 남용하면 ', ' 문제가 생길 수 있습니다.'],
              wordBank: ["이름 충돌","속도 저하만","보안 문제만"],
              answer: ["이름 충돌"],
              hint: '이름 충돌입니다.'
            },
            {
              type: 'quiz_code',
              content: 'as로 별명을 붙인 여러 기능을 함께 사용해보세요.',
              initialCode: 'from math import sqrt as sq, pow as p\nprint(sq(4), p(2, 4))',
              expectedOutputs: ['2.0 16.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'from import한 함수로 피타고라스 정리를 활용한 함수를 만드세요.',
              initialCode: 'from math import sqrt\ndef distance(x1, y1, x2, y2):\n    return sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)\nprint(distance(0, 0, 3, 4))',
              expectedOutputs: ['5.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 from math import pow로 2의 10제곱을 계산해 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['1024.0'],
              hint: 'from math import pow\nprint(pow(2, 10))'
            }
          ]
        ]
      },
      {
        id: 'node_13_3',
        title: '난수 발생기 (random)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '무작위 값을 만드는 표준 모듈은?',
              options: ["random","random_gen","rand"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'random 모듈입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['무작위 값을 만들 땐 ', ' 모듈을 사용합니다.'],
              wordBank: ["random","rand","math"],
              answer: ["random"],
              hint: 'random입니다.'
            },
            {
              type: 'quiz_code',
              content: '1부터 10 사이의 난수를 만들고 범위 안에 있는지 확인하세요.',
              initialCode: 'import random\nn = random.randit(1, 10)  # 함수 이름 오타를 고치세요!\nprint(1 <= n <= 10)',
              expectedOutputs: ['True'],
              hint: 'random.randint(1, 10)'
            },
            {
              type: 'quiz_code',
              content: 'random.choice로 리스트에서 값을 하나 뽑아 리스트 안에 있는지 확인하세요.',
              initialCode: 'import random\nitems = [\'가위\', \'바위\', \'보\']\nresult = random.  (items)\nprint(result in items)',
              expectedOutputs: ['True'],
              hint: 'random.choice(items)'
            },
            {
              type: 'quiz_code',
              content: 'random.random()의 결과가 0 이상 1 미만인지 확인하세요.',
              initialCode: 'import random\nn = random.random()\nprint(0 <= n < 1)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '1부터 10 사이의 정수를 무작위로 뽑는 함수는?',
              options: ["random.randint(1, 10)","random.random(1, 10)","random.int(1, 10)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'randint(시작, 끝)입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['정수 난수를 뽑으려면 ', ' 를 씁니다.'],
              wordBank: ["randint()","random()","choice()"],
              answer: ["randint()"],
              hint: 'randint()입니다.'
            },
            {
              type: 'quiz_code',
              content: 'random.seed(1)로 시드를 고정하면 항상 같은 결과가 나오는지 확인하세요.',
              initialCode: 'import random\nrandom.seed(1)\na = random.randint(1, 100)\nrandom.seed(1)\nb = random.randint(1, 100)\nprint(a == b)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 같은 시드는 같은 결과를 만듭니다.'
            },
            {
              type: 'quiz_code',
              content: 'random.randint로 뽑은 값이 정수 타입인지 확인하세요.',
              initialCode: 'import random\nn = random.randint(1, 6)\nprint(type(n).__name__)',
              expectedOutputs: ['int'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '주사위를 10번 굴려도 모든 값이 1~6 범위 안인지 확인하세요.',
              initialCode: 'import random\nall_valid = True\nfor i in range(10):\n    n = random.randint(1, 6)\n    if not (1 <= n <= 6):\n        all_valid = False\nprint(all_valid)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '리스트에서 무작위로 하나를 뽑는 함수는?',
              options: ["random.choice(리스트)","random.pick(리스트)","random.get(리스트)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'choice()를 씁니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'random.seed(숫자)를 쓰면 무엇이 좋아지나요?',
              options: ["매번 같은 순서의 난수가 나와 테스트하기 좋다","난수가 완전히 사라진다","속도가 빨라진다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '시드를 고정하면 재현 가능한 결과를 얻습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['리스트에서 무작위로 뽑으려면 ', ' 를 씁니다.'],
              wordBank: ["choice()","randint()","shuffle()"],
              answer: ["choice()"],
              hint: 'choice()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['random.seed()를 쓰면 결과를 ', ' 만들 수 있습니다.'],
              wordBank: ["재현 가능하게","완전히 무작위로","항상 다르게"],
              answer: ["재현 가능하게"],
              hint: '재현 가능하게 만듭니다.'
            },
            {
              type: 'quiz_code',
              content: 'random.shuffle로 리스트를 섞은 뒤 원소 개수가 그대로인지 확인하세요.',
              initialCode: 'import random\nnums = [1, 2, 3, 4, 5]\nrandom.shuffle(nums)\nprint(len(nums))',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. shuffle은 순서만 바꾸고 개수는 그대로입니다.'
            },
            {
              type: 'quiz_code',
              content: 'random.shuffle 후에도 모든 원래 값이 리스트 안에 남아있는지 확인하세요.',
              initialCode: 'import random\nnums = [1, 2, 3]\nrandom.shuffle(nums)\nprint(sorted(nums))',
              expectedOutputs: ['[1, 2, 3]'],
              hint: '이미 정답입니다. sorted()로 정렬하면 원래 값들이 그대로 있는지 확인할 수 있어요.'
            },
            {
              type: 'quiz_code',
              content: 'random.sample로 리스트에서 중복 없이 2개를 뽑아 개수를 확인하세요.',
              initialCode: 'import random\nnums = [1, 2, 3, 4, 5]\npicked = random.sample(nums, 2)\nprint(len(picked))',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'random.randint(1, 10)의 결과 범위는?',
              options: ["1 이상 10 이하","1 이상 10 미만","0 이상 10 이하"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'randint는 양 끝을 모두 포함합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['randint(1, 10)은 1과 10을 ', ' 범위입니다.'],
              wordBank: ["모두 포함하는","포함하지 않는","제외한"],
              answer: ["모두 포함하는"],
              hint: '모두 포함합니다.'
            },
            {
              type: 'quiz_code',
              content: 'random.sample로 뽑은 값들이 모두 원본 리스트 안에 있는지 확인하세요.',
              initialCode: 'import random\nnums = [1, 2, 3, 4, 5]\npicked = random.sample(nums, 3)\nall_in = all(p in nums for p in picked)\nprint(all_in)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. all()은 모두 참인지 확인합니다.'
            },
            {
              type: 'quiz_code',
              content: '주사위 두 개를 굴려 합이 2~12 사이인지 확인하는 함수를 만드세요.',
              initialCode: 'import random\ndef roll_two():\n    return random.randint(1, 6) + random.randint(1, 6)\nresult = roll_two()\nprint(2 <= result <= 12)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 random.choice로 3가지 메뉴 중 하나를 뽑고 목록 안에 있는지 확인해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['True'],
              hint: 'import random\nmenu = [\'피자\', \'치킨\', \'초밥\']\npick = random.choice(menu)\nprint(pick in menu)'
            }
          ]
        ]
      },
      {
        id: 'node_13_4',
        title: '시간을 다루는 마법사 (datetime)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '날짜와 시간을 다루는 표준 모듈은?',
              options: ["datetime","time","calendar"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'datetime 모듈입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['날짜와 시간을 다루려면 ', ' 모듈을 사용합니다.'],
              wordBank: ["datetime","time","calendar"],
              answer: ["datetime"],
              hint: 'datetime입니다.'
            },
            {
              type: 'quiz_code',
              content: '2024년 1월 1일을 나타내는 날짜를 만들어 연도를 출력하세요.',
              initialCode: 'from datetime import datetime\nd = datetime(2024, 1, 1)\nprint(d.year())  # year는 속성이지 함수가 아니에요!',
              expectedOutputs: ['2024'],
              hint: 'print(d.year)'
            },
            {
              type: 'quiz_code',
              content: '날짜 객체에서 월을 출력하세요.',
              initialCode: 'from datetime import datetime\nd = datetime(2024, 5, 15)\nprint(d.  )',
              expectedOutputs: ['5'],
              hint: 'd.month'
            },
            {
              type: 'quiz_code',
              content: '두 날짜의 차이(일수)를 계산하세요.',
              initialCode: 'from datetime import datetime\nd1 = datetime(2024, 1, 10)\nd2 = datetime(2024, 1, 1)\ndiff = d1 - d2\nprint(diff.days)',
              expectedOutputs: ['9'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '특정 날짜를 만드는 방법은?',
              options: ["datetime(년, 월, 일)","date(년, 월, 일)만 가능","날짜는 만들 수 없다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'datetime(2024, 1, 1)처럼 만듭니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['특정 날짜를 만들려면 ', ' 형태로 씁니다.'],
              wordBank: ["datetime(년, 월, 일)","date_make(년, 월, 일)","new_date()"],
              answer: ["datetime(년, 월, 일)"],
              hint: 'datetime(년, 월, 일)입니다.'
            },
            {
              type: 'quiz_code',
              content: 'timedelta로 날짜에 며칠을 더해보세요.',
              initialCode: 'from datetime import datetime, timedelta\nd = datetime(2024, 1, 1)\nnew_d = d + timedelta(days=10)\nprint(new_d.day)',
              expectedOutputs: ['11'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '날짜 객체를 원하는 형식의 문자열로 바꿔보세요.',
              initialCode: 'from datetime import datetime\nd = datetime(2024, 3, 5)\nprint(d.strftime(\'%Y-%m-%d\'))',
              expectedOutputs: ['2024-03-05'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '두 날짜를 비교해 어느 쪽이 더 빠른지 확인하세요.',
              initialCode: 'from datetime import datetime\nd1 = datetime(2024, 1, 1)\nd2 = datetime(2024, 6, 1)\nprint(d1 < d2)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '두 날짜의 차이를 구하면 무엇이 반환되나요?',
              options: ["timedelta 객체","정수(일수)","문자열"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '날짜 뺄셈은 timedelta를 돌려줍니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'datetime 객체에서 연도만 가져오려면?',
              options: ["객체.year","객체.get_year()","연도(객체)"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '.year 속성을 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['두 날짜를 빼면 ', ' 객체가 반환됩니다.'],
              wordBank: ["timedelta","datetime","int"],
              answer: ["timedelta"],
              hint: 'timedelta입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['날짜 객체에서 연도를 가져오려면 ', ' 를 씁니다.'],
              wordBank: [".year",".get_year()","year()"],
              answer: [".year"],
              hint: '.year입니다.'
            },
            {
              type: 'quiz_code',
              content: '생일까지 남은 일수를 계산해보세요.',
              initialCode: 'from datetime import datetime\ntoday = datetime(2024, 1, 1)\nbirthday = datetime(2024, 1, 15)\ndiff = birthday - today\nprint(diff.days)',
              expectedOutputs: ['14'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '날짜 객체에서 요일을 확인하세요 (weekday(): 월요일=0).',
              initialCode: 'from datetime import datetime\nd = datetime(2024, 1, 1)\nprint(d.weekday())',
              expectedOutputs: ['0'],
              hint: '이미 정답입니다. 2024년 1월 1일은 월요일입니다.'
            },
            {
              type: 'quiz_code',
              content: 'timedelta로 30일 뒤의 날짜를 계산해보세요.',
              initialCode: 'from datetime import datetime, timedelta\nd = datetime(2024, 1, 1)\nnew_d = d + timedelta(days=30)\nprint(new_d.strftime(\'%Y-%m-%d\'))',
              expectedOutputs: ['2024-01-31'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'timedelta(days=7)은 무엇을 나타내나요?',
              options: ["7일이라는 기간","7번째 날짜","7시간"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '기간(차이)을 나타냅니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['timedelta(days=7)은 ', ' 을 나타냅니다.'],
              wordBank: ["7일이라는 기간","7번째 날짜","7주"],
              answer: ["7일이라는 기간"],
              hint: '7일이라는 기간입니다.'
            },
            {
              type: 'quiz_code',
              content: '두 날짜의 차이를 주(week) 단위로 계산해보세요.',
              initialCode: 'from datetime import datetime\nd1 = datetime(2024, 1, 1)\nd2 = datetime(2024, 1, 15)\ndiff = d2 - d1\nprint(diff.days // 7)',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 날짜를 리스트로 만들어 가장 빠른 날짜를 찾아보세요.',
              initialCode: 'from datetime import datetime\ndates = [datetime(2024, 3, 1), datetime(2024, 1, 1), datetime(2024, 6, 1)]\nprint(min(dates).strftime(\'%Y-%m-%d\'))',
              expectedOutputs: ['2024-01-01'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 2024년 12월 25일 날짜를 만들어 월과 요일을 함께 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['12 2'],
              hint: 'from datetime import datetime\nd = datetime(2024, 12, 25)\nprint(d.month, d.weekday())'
            }
          ]
        ]
      },
      {
        id: 'node_13_5',
        title: '컴퓨터 속 탐험 (os 모듈)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '운영체제 기능(파일/경로 등)을 다루는 모듈은?',
              options: ["os","system","env"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'os 모듈입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['운영체제 기능을 다루려면 ', ' 모듈을 사용합니다.'],
              wordBank: ["os","system","env"],
              answer: ["os"],
              hint: 'os입니다.'
            },
            {
              type: 'quiz_code',
              content: '현재 작업 디렉토리 문자열의 타입을 확인하세요.',
              initialCode: 'import os\nprint(type(os.getcwd))  # 괄호가 빠졌어요!',
              expectedOutputs: ['str'],
              hint: 'type(os.getcwd())'
            },
            {
              type: 'quiz_code',
              content: '경로 \'a\'와 \'b.txt\'를 합쳐 출력하세요.',
              initialCode: 'import os\nprint(os.path.  (\'a\', \'b.txt\'))',
              expectedOutputs: ['a/b.txt'],
              hint: 'os.path.join(\'a\', \'b.txt\')'
            },
            {
              type: 'quiz_code',
              content: '파일을 만들고 존재하는지 확인하세요.',
              initialCode: 'import os\nwith open(\'exists.txt\', \'w\') as f:\n    f.write(\'data\')\nprint(os.path.exists(\'exists.txt\'))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '현재 작업 디렉토리를 확인하는 함수는?',
              options: ["os.getcwd()","os.cwd()","os.current()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'getcwd()는 get current working directory의 줄임말입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['현재 작업 디렉토리는 ', ' 로 확인합니다.'],
              wordBank: ["os.getcwd()","os.cwd()","os.dir()"],
              answer: ["os.getcwd()"],
              hint: 'os.getcwd()입니다.'
            },
            {
              type: 'quiz_code',
              content: '없는 파일이 존재하지 않는지 확인하세요.',
              initialCode: 'import os\nprint(os.path.exists(\'없는파일_xyz.txt\'))',
              expectedOutputs: ['False'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일 이름에서 확장자를 분리해보세요.',
              initialCode: 'import os\nname, ext = os.path.splitext(\'photo.png\')\nprint(name, ext)',
              expectedOutputs: ['photo .png'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일을 만들고 listdir()로 목록에 포함되는지 확인하세요.',
              initialCode: 'import os\nwith open(\'mylist.txt\', \'w\') as f:\n    f.write(\'data\')\nprint(\'mylist.txt\' in os.listdir())',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '경로를 안전하게 이어붙이는 함수는?',
              options: ["os.path.join()","os.path.add()","os.combine()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '운영체제에 맞게 경로 구분자를 처리해줍니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '파일이 존재하는지 확인하는 함수는?',
              options: ["os.path.exists()","os.exists()","os.check()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'os.path.exists()를 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['경로를 이어붙이려면 ', ' 를 씁니다.'],
              wordBank: ["os.path.join()","os.path.add()","os.merge()"],
              answer: ["os.path.join()"],
              hint: 'os.path.join()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['파일 존재 여부는 ', ' 로 확인합니다.'],
              wordBank: ["os.path.exists()","os.exists()","os.file()"],
              answer: ["os.path.exists()"],
              hint: 'os.path.exists()입니다.'
            },
            {
              type: 'quiz_code',
              content: 'os.path.join으로 여러 경로 조각을 합쳐보세요.',
              initialCode: 'import os\nprint(os.path.join(\'folder\', \'sub\', \'file.txt\'))',
              expectedOutputs: ['folder/sub/file.txt'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '파일의 기본 이름(basename)만 추출해보세요.',
              initialCode: 'import os\nprint(os.path.basename(\'/some/folder/file.txt\'))',
              expectedOutputs: ['file.txt'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '디렉토리 경로(dirname)만 추출해보세요.',
              initialCode: 'import os\nprint(os.path.dirname(\'/some/folder/file.txt\'))',
              expectedOutputs: ['/some/folder'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'os.listdir()은 무엇을 반환하나요?',
              options: ["디렉토리 안의 파일/폴더 이름 리스트","파일 내용","경로 문자열 하나"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '디렉토리 목록을 리스트로 줍니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['os.listdir()은 ', ' 를 리스트로 반환합니다.'],
              wordBank: ["파일/폴더 이름","파일 내용","경로 개수"],
              answer: ["파일/폴더 이름"],
              hint: '파일/폴더 이름입니다.'
            },
            {
              type: 'quiz_code',
              content: '새 디렉토리를 만들고 존재하는지 확인하세요.',
              initialCode: 'import os\nos.makedirs(\'newdir\', exist_ok=True)\nprint(os.path.exists(\'newdir\'))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '디렉토리를 만들고 그 안에 파일을 만들어 경로가 올바른지 확인하세요.',
              initialCode: 'import os\nos.makedirs(\'mydir\', exist_ok=True)\npath = os.path.join(\'mydir\', \'note.txt\')\nwith open(path, \'w\') as f:\n    f.write(\'메모\')\nprint(os.path.exists(path))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 확장자가 \'.txt\'인 파일 이름을 만들어 splitext로 확장자만 분리해 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['.txt'],
              hint: 'import os\nname, ext = os.path.splitext(\'report.txt\')\nprint(ext)'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 14,
    title: 'UNIT 14\n텍스트 수색대와 웹',
    nodes: [
      {
        id: 'node_14_1',
        title: '정규표현식의 세계 (re)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '정규표현식을 다루는 표준 모듈은?',
              options: ["re","regex","pattern"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 're 모듈입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['정규표현식을 다루려면 ', ' 모듈을 사용합니다.'],
              wordBank: ["re","regex","pattern"],
              answer: ["re"],
              hint: 're입니다.'
            },
            {
              type: 'quiz_code',
              content: '\'abc123\'에서 숫자 부분을 찾아 출력하세요.',
              initialCode: 'import re\nresult = re.search(r\'\\d+\', \'abc\')  # 문자열에 숫자가 없어요! \'abc123\'으로 고치세요.\nprint(result.group())',
              expectedOutputs: ['123'],
              hint: 're.search(r\'\\d+\', \'abc123\')'
            },
            {
              type: 'quiz_code',
              content: '문자열에서 숫자만 찾는 패턴을 완성하세요.',
              initialCode: 'import re\nresult = re.search(r\'  +\', \'hello42\')\nprint(result.group())',
              expectedOutputs: ['42'],
              hint: '\\d'
            },
            {
              type: 'quiz_code',
              content: 'findall로 문자열의 모든 숫자를 찾아 리스트로 출력하세요.',
              initialCode: 'import re\nresult = re.findall(r\'\\d+\', \'a1b22c333\')\nprint(result)',
              expectedOutputs: ['[\'1\', \'22\', \'333\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '패턴이 문자열에 있는지 찾는 함수는?',
              options: ["re.search()","re.find()","re.check()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'search()로 찾을 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['패턴이 있는지 찾으려면 ', ' 를 씁니다.'],
              wordBank: ["re.search()","re.find()","re.locate()"],
              answer: ["re.search()"],
              hint: 're.search()입니다.'
            },
            {
              type: 'quiz_code',
              content: '패턴이 없는 경우 None이 반환되는지 확인하세요.',
              initialCode: 'import re\nresult = re.search(r\'\\d+\', \'hello\')\nprint(result)',
              expectedOutputs: ['None'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 're.sub로 숫자를 \'#\'으로 바꿔보세요.',
              initialCode: 'import re\nresult = re.sub(r\'\\d+\', \'#\', \'a1b22c333\')\nprint(result)',
              expectedOutputs: ['a#b#c#'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '이메일과 비슷한 간단한 패턴이 있는지 확인하세요.',
              initialCode: 'import re\nresult = re.search(r\'\\w+@\\w+\', \'test@example\')\nprint(result.group())',
              expectedOutputs: ['test@example'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '문자열 전체가 패턴과 정확히 일치하는지 확인하는 함수는?',
              options: ["re.fullmatch()","re.search()만 가능","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'fullmatch()는 전체 일치를 확인합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '\\d는 정규표현식에서 무엇을 의미하나요?',
              options: ["숫자 하나","알파벳 하나","공백"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'digit(숫자)의 약자입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['숫자 하나를 의미하는 정규식 기호는 ', ' 입니다.'],
              wordBank: ["\\d","\\w","\\s"],
              answer: ["\\d"],
              hint: '\\d 입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['모든 일치 결과를 리스트로 받으려면 ', ' 를 씁니다.'],
              wordBank: ["re.findall()","re.search()","re.match()"],
              answer: ["re.findall()"],
              hint: 're.findall()입니다.'
            },
            {
              type: 'quiz_code',
              content: '문자열이 숫자로만 이루어졌는지 fullmatch로 확인하세요.',
              initialCode: 'import re\nresult = re.fullmatch(r\'\\d+\', \'12345\')\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '정규식으로 단어를 모두 찾아보세요.',
              initialCode: 'import re\nresult = re.findall(r\'\\w+\', \'hello world python\')\nprint(result)',
              expectedOutputs: ['[\'hello\', \'world\', \'python\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '문자열 시작이 특정 패턴인지 match로 확인하세요.',
              initialCode: 'import re\nresult = re.match(r\'Hello\', \'Hello World\')\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. match()는 문자열 시작 부분을 확인합니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 're.findall()은 무엇을 반환하나요?',
              options: ["패턴과 일치하는 모든 부분의 리스트","첫 번째 일치 결과만","True/False"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '모든 매치를 리스트로 돌려줍니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['패턴을 다른 문자열로 바꾸려면 ', ' 를 씁니다.'],
              wordBank: ["re.sub()","re.replace()","re.change()"],
              answer: ["re.sub()"],
              hint: 're.sub()입니다.'
            },
            {
              type: 'quiz_code',
              content: 'findall로 찾은 숫자들을 정수로 변환해 합계를 구하세요.',
              initialCode: 'import re\nnums = re.findall(r\'\\d+\', \'a1b2c3\')\ntotal = 0\nfor n in nums:\n    total += int(n)\nprint(total)',
              expectedOutputs: ['6'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '전화번호 형식(000-0000-0000)이 맞는지 확인하는 패턴을 만들어보세요.',
              initialCode: 'import re\nresult = re.fullmatch(r\'\\d{3}-\\d{4}-\\d{4}\', \'010-1234-5678\')\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. {n}은 반복 횟수를 지정합니다.'
            },
            {
              type: 'quiz_code',
              content: '스스로 문자열 \'가격: 15000원\'에서 숫자만 추출해 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['15000'],
              hint: 'import re\nresult = re.search(r\'\\d+\', \'가격: 15000원\')\nprint(result.group())'
            }
          ]
        ]
      },
      {
        id: 'node_14_2',
        title: '정규표현식 심화',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '패턴 안에서 특정 문자 그룹을 하나로 묶는 기호는?',
              options: ["() 괄호","[] 대괄호","{} 중괄호"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '괄호로 그룹을 만듭니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['패턴을 그룹으로 묶으려면 ', ' 를 씁니다.'],
              wordBank: ["() 괄호","[] 대괄호","{} 중괄호"],
              answer: ["() 괄호"],
              hint: '괄호입니다.'
            },
            {
              type: 'quiz_code',
              content: '\'cat\'과 \'bat\'을 모두 찾는 패턴을 확인하세요.',
              initialCode: 'import re\nresult = re.findall(r\'[cb]at\', \'cat bat rat\')\nprint(result)',
              expectedOutputs: ['[\'cat\', \'bat\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '그룹을 사용해 \'user@domain\' 형태에서 아이디 부분만 추출하세요.',
              initialCode: 'import re\nresult = re.search(r\'(\\w+)@(\\w+)\', \'egg@test\')\nprint(result.group(  ))',
              expectedOutputs: ['egg'],
              hint: '1'
            },
            {
              type: 'quiz_code',
              content: '패턴에 반복 수량자 +를 사용해 하나 이상의 숫자를 찾으세요.',
              initialCode: 'import re\nresult = re.search(r\'\\d+\', \'가격 500원\')\nprint(result.group())',
              expectedOutputs: ['500'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 문자 중 하나를 의미하는 정규식 기호는?',
              options: ["[] 대괄호","() 괄호","<> 꺾쇠"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '대괄호 안에 후보 문자들을 나열합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['여러 문자 중 하나를 매칭하려면 ', ' 를 씁니다.'],
              wordBank: ["[] 대괄호","() 괄호","// 슬래시"],
              answer: ["[] 대괄호"],
              hint: '대괄호입니다.'
            },
            {
              type: 'quiz_code',
              content: '?로 선택적 문자를 표현해보세요.',
              initialCode: 'import re\nresult1 = re.fullmatch(r\'colou?r\', \'color\')\nresult2 = re.fullmatch(r\'colou?r\', \'colour\')\nprint(result1 is not None, result2 is not None)',
              expectedOutputs: ['True True'],
              hint: '이미 정답입니다. ?는 앞 문자가 0개 또는 1개임을 의미합니다.'
            },
            {
              type: 'quiz_code',
              content: '^로 문자열이 특정 단어로 시작하는지 확인하세요.',
              initialCode: 'import re\nresult = re.match(r\'^Hello\', \'Hello World\')\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '$로 문자열이 특정 단어로 끝나는지 확인하세요.',
              initialCode: 'import re\nresult = re.search(r\'World$\', \'Hello World\')\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '?, *, + 는 무엇을 나타내나요?',
              options: ["앞 문자의 반복 횟수(수량자)","줄의 시작","단어 경계"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '반복 횟수를 지정하는 수량자입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '^와 $는 각각 무엇을 의미하나요?',
              options: ["문자열의 시작과 끝","숫자와 문자","그룹의 시작과 끝"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '^은 시작, $는 끝을 의미합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['?, *, + 는 ', ' 를 나타내는 수량자입니다.'],
              wordBank: ["반복 횟수","줄바꿈","공백"],
              answer: ["반복 횟수"],
              hint: '반복 횟수입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['^ 와 $ 는 각각 문자열의 ', ' 을 의미합니다.'],
              wordBank: ["시작과 끝","끝과 시작","중간"],
              answer: ["시작과 끝"],
              hint: '시작과 끝입니다.'
            },
            {
              type: 'quiz_code',
              content: '그룹을 두 개 사용해 각각 추출해보세요.',
              initialCode: 'import re\nresult = re.search(r\'(\\d+)-(\\d+)\', \'010-1234\')\nprint(result.group(1), result.group(2))',
              expectedOutputs: ['010 1234'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '그룹 참조로 날짜 형식을 바꿔보세요 (YYYY-MM-DD -> MM/DD/YYYY).',
              initialCode: 'import re\nresult = re.sub(r\'(\\d{4})-(\\d{2})-(\\d{2})\', r\'\\2/\\3/\\1\', \'2024-03-15\')\nprint(result)',
              expectedOutputs: ['03/15/2024'],
              hint: '이미 정답입니다. \\1, \\2, \\3은 그룹 순서대로 참조합니다.'
            },
            {
              type: 'quiz_code',
              content: '{n}으로 정확한 반복 횟수를 지정해보세요 (우편번호 5자리).',
              initialCode: 'import re\nresult = re.fullmatch(r\'\\d{5}\', \'12345\')\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. {5}는 정확히 5번 반복을 의미합니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 're.sub()에서 그룹을 활용해 값을 재배치할 수 있나요?',
              options: ["네, \\1 같은 그룹 참조로 가능합니다","아니요, 불가능합니다","그룹은 sub에서 쓸 수 없습니다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '그룹 번호를 참조해 순서를 바꿀 수 있어요.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['그룹으로 캡처한 값은 ', ' 로 참조할 수 있습니다.'],
              wordBank: ["\\1 같은 그룹 번호","불가능","항상 첫 글자만"],
              answer: ["\\1 같은 그룹 번호"],
              hint: '그룹 번호로 참조합니다.'
            },
            {
              type: 'quiz_code',
              content: '여러 후보 중 하나를 매칭하는 |(OR) 기호를 사용해보세요.',
              initialCode: 'import re\nresult = re.findall(r\'cat|dog\', \'나는 cat과 dog를 좋아해\')\nprint(result)',
              expectedOutputs: ['[\'cat\', \'dog\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '복잡한 패턴으로 이메일 형식과 비슷한 문자열을 검증해보세요.',
              initialCode: 'import re\npattern = r\'^\\w+@\\w+\\.\\w+$\'\nresult = re.fullmatch(pattern, \'test@example.com\')\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 문자열 \'2024-03-15\'에서 연,월,일을 각각 그룹으로 추출해 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['2024 03 15'],
              hint: 'import re\nresult = re.search(r\'(\\d{4})-(\\d{2})-(\\d{2})\', \'2024-03-15\')\nprint(result.group(1), result.group(2), result.group(3))'
            }
          ]
        ]
      },
      {
        id: 'node_14_3',
        title: '세상과 소통하기 (requests)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '웹 서버에 요청을 보내는 대표적인 라이브러리는?',
              options: ["requests","http","web"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'requests 라이브러리가 널리 쓰입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['웹 요청을 보내는 대표 라이브러리는 ', ' 입니다.'],
              wordBank: ["requests","http","web"],
              answer: ["requests"],
              hint: 'requests입니다.'
            },
            {
              type: 'quiz_code',
              content: '가상의 API 응답(딕셔너리)에서 이름을 꺼내 출력하세요.',
              initialCode: '# 실제로는 requests.get(url).json()이 반환하는 형태를 흉내낸 가상 데이터입니다.\nfake_response = {\'name\': \'에그\', \'age\': 5}\nprint(fake_response.name)  # 딕셔너리는 대괄호로 접근해야 해요!',
              expectedOutputs: ['에그'],
              hint: 'fake_response[\'name\']'
            },
            {
              type: 'quiz_code',
              content: '가상 응답에서 status_code가 200(성공)인지 확인하세요.',
              initialCode: 'fake_response = {\'status_code\': 200, \'data\': \'성공\'}\nprint(fake_response[\'  \'] == 200)',
              expectedOutputs: ['True'],
              hint: 'status_code'
            },
            {
              type: 'quiz_code',
              content: '가상 응답 딕셔너리에서 여러 값을 꺼내 출력하세요.',
              initialCode: 'fake_response = {\'name\': \'치킨집\', \'rating\': 4.5}\nprint(fake_response[\'name\'], fake_response[\'rating\'])',
              expectedOutputs: ['치킨집 4.5'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'requests.get(url)의 결과에서 상태 코드를 확인하는 속성은?',
              options: [".status_code",".code",".status"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'status_code 속성입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['응답의 성공 여부는 ', ' 로 확인합니다.'],
              wordBank: ["status_code",".code",".ok만"],
              answer: ["status_code"],
              hint: 'status_code입니다.'
            },
            {
              type: 'quiz_code',
              content: '응답이 실패(404)인 경우를 조건문으로 처리해보세요.',
              initialCode: 'fake_response = {\'status_code\': 404}\nif fake_response[\'status_code\'] == 200:\n    print(\'성공\')\nelse:\n    print(\'요청 실패\')',
              expectedOutputs: ['요청 실패'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '가상 응답의 리스트 데이터를 순회하며 출력하세요.',
              initialCode: 'fake_response = {\'items\': [\'사과\', \'바나나\', \'포도\']}\nfor item in fake_response[\'items\']:\n    print(item)',
              expectedOutputs: ['사과\n바나나\n포도'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '응답 데이터가 비어있는지 확인하는 코드를 작성하세요.',
              initialCode: 'fake_response = {\'items\': []}\nif len(fake_response[\'items\']) == 0:\n    print(\'데이터 없음\')\nelse:\n    print(\'데이터 있음\')',
              expectedOutputs: ['데이터 없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '응답 데이터를 JSON(딕셔너리)으로 바꾸는 메서드는?',
              options: [".json()",".dict()",".parse()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'json() 메서드를 호출합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'requests.get()이 실패(연결 안 됨 등)하면 어떻게 되나요?',
              options: ["예외(에러)가 발생할 수 있다","항상 빈 딕셔너리를 반환한다","무시하고 계속된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '네트워크 문제는 예외로 처리해야 합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['응답을 딕셔너리로 바꾸려면 ', ' 를 호출합니다.'],
              wordBank: [".json()",".dict()",".parse()"],
              answer: [".json()"],
              hint: '.json()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['네트워크 요청은 실패할 수 있으므로 ', ' 로 감싸는 것이 안전합니다.'],
              wordBank: ["try-except","for문","lambda"],
              answer: ["try-except"],
              hint: 'try-except입니다.'
            },
            {
              type: 'quiz_code',
              content: 'try-except로 요청 실패(연결 오류) 상황을 흉내내 처리하세요.',
              initialCode: 'def fake_request(should_fail):\n    if should_fail:\n        raise ConnectionError(\'연결 실패\')\n    return {\'status_code\': 200}\ntry:\n    result = fake_request(True)\nexcept ConnectionError:\n    print(\'네트워크 오류 발생\')',
              expectedOutputs: ['네트워크 오류 발생'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 개의 가상 응답 중 성공한 것만 골라 출력하세요.',
              initialCode: 'responses = [{\'status_code\': 200, \'name\': \'A\'}, {\'status_code\': 404, \'name\': \'B\'}, {\'status_code\': 200, \'name\': \'C\'}]\nfor r in responses:\n    if r[\'status_code\'] == 200:\n        print(r[\'name\'])',
              expectedOutputs: ['A\nC'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '중첩된 가상 응답(딕셔너리 안의 딕셔너리)에서 값을 꺼내보세요.',
              initialCode: 'fake_response = {\'user\': {\'name\': \'에그\', \'profile\': {\'age\': 5}}}\nprint(fake_response[\'user\'][\'profile\'][\'age\'])',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '실제 서비스에서 API 요청 결과를 다루기 전에 무엇을 확인해야 하나요?',
              options: ["상태 코드가 성공(200)인지","응답 속도만","요청 URL 길이만"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '성공 여부를 먼저 확인하는 게 안전합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['응답을 사용하기 전에 ', ' 가 200인지 확인하는 것이 좋습니다.'],
              wordBank: ["상태 코드","응답 속도","요청 크기"],
              answer: ["상태 코드"],
              hint: '상태 코드입니다.'
            },
            {
              type: 'quiz_code',
              content: '함수로 응답을 안전하게 처리하는 코드를 작성하세요.',
              initialCode: 'def get_data(response):\n    if response[\'status_code\'] == 200:\n        return response[\'data\']\n    return None\nprint(get_data({\'status_code\': 200, \'data\': \'완료\'}))',
              expectedOutputs: ['완료'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 가상 응답의 데이터를 합쳐 하나의 리스트로 만들어보세요.',
              initialCode: 'responses = [{\'items\': [\'A\', \'B\']}, {\'items\': [\'C\']}]\nall_items = []\nfor r in responses:\n    all_items += r[\'items\']\nprint(all_items)',
              expectedOutputs: ['[\'A\', \'B\', \'C\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 가상 API 응답(이름, 나이)을 만들어 안전하게 값을 꺼내 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['코딩 5'],
              hint: 'fake_response = {\'status_code\': 200, \'name\': \'코딩\', \'age\': 5}\nif fake_response[\'status_code\'] == 200:\n    print(fake_response[\'name\'], fake_response[\'age\'])'
            }
          ]
        ]
      },
      {
        id: 'node_14_4',
        title: '데이터 교환의 표준 (JSON)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: 'JSON을 다루는 파이썬 표준 모듈은?',
              options: ["json","jsonlib","data"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'json 모듈입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['JSON을 다루려면 ', ' 모듈을 사용합니다.'],
              wordBank: ["json","jsonlib","data"],
              answer: ["json"],
              hint: 'json입니다.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리를 JSON 문자열로 바꿔 출력하세요.',
              initialCode: 'import json\ndata = {\'name\': \'egg\', \'age\': 5}\nprint(json.dump(data))  # 메서드 이름을 고치세요!',
              expectedOutputs: ['{"name": "egg", "age": 5}'],
              hint: 'json.dumps(data)'
            },
            {
              type: 'quiz_code',
              content: 'JSON 문자열을 딕셔너리로 바꿔 값을 출력하세요.',
              initialCode: 'import json\ntext = \'{"name": "egg"}\'\ndata = json.  (text)\nprint(data[\'name\'])',
              expectedOutputs: ['egg'],
              hint: 'json.loads(text)'
            },
            {
              type: 'quiz_code',
              content: '리스트를 JSON 문자열로 바꿔 출력하세요.',
              initialCode: 'import json\nnums = [1, 2, 3]\nprint(json.dumps(nums))',
              expectedOutputs: ['[1, 2, 3]'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리를 JSON 문자열로 바꾸는 함수는?',
              options: ["json.dumps()","json.loads()","json.encode()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'dumps는 dump string의 줄임말입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['딕셔너리를 JSON 문자열로 바꾸려면 ', ' 를 씁니다.'],
              wordBank: ["json.dumps()","json.loads()","json.encode()"],
              answer: ["json.dumps()"],
              hint: 'json.dumps()입니다.'
            },
            {
              type: 'quiz_code',
              content: '중첩된 딕셔너리를 JSON으로 바꾼 뒤 다시 파싱해 값을 확인하세요.',
              initialCode: 'import json\ndata = {\'user\': {\'name\': \'egg\'}}\ntext = json.dumps(data)\nparsed = json.loads(text)\nprint(parsed[\'user\'][\'name\'])',
              expectedOutputs: ['egg'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'JSON으로 변환 후 타입이 문자열인지 확인하세요.',
              initialCode: 'import json\ndata = {\'a\': 1}\ntext = json.dumps(data)\nprint(type(text).__name__)',
              expectedOutputs: ['str'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '한글이 포함된 딕셔너리를 ensure_ascii=False로 변환해 그대로 출력하세요.',
              initialCode: 'import json\ndata = {\'name\': \'에그\'}\nprint(json.dumps(data, ensure_ascii=False))',
              expectedOutputs: ['{"name": "에그"}'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'JSON 문자열을 딕셔너리로 바꾸는 함수는?',
              options: ["json.loads()","json.dumps()","json.decode()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'loads는 load string의 줄임말입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: 'JSON은 어떤 자료형과 비슷한 구조인가요?',
              options: ["딕셔너리와 리스트","튜플만","정수만"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '키-값 쌍과 배열 구조입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['JSON 문자열을 딕셔너리로 바꾸려면 ', ' 를 씁니다.'],
              wordBank: ["json.loads()","json.dumps()","json.decode()"],
              answer: ["json.loads()"],
              hint: 'json.loads()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['JSON은 ', ' 구조와 비슷합니다.'],
              wordBank: ["딕셔너리와 리스트","튜플만","정수만"],
              answer: ["딕셔너리와 리스트"],
              hint: '딕셔너리와 리스트입니다.'
            },
            {
              type: 'quiz_code',
              content: 'JSON 문자열을 파싱해 리스트 데이터를 순회하며 출력하세요.',
              initialCode: 'import json\ntext = \'{"items": ["a", "b", "c"]}\'\ndata = json.loads(text)\nfor item in data[\'items\']:\n    print(item)',
              expectedOutputs: ['a\nb\nc'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'JSON으로 변환한 데이터의 길이를 원본과 비교하세요.',
              initialCode: 'import json\nitems = [1, 2, 3, 4]\ntext = json.dumps(items)\nparsed = json.loads(text)\nprint(len(parsed) == len(items))',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 변환 후에도 데이터는 동일합니다.'
            },
            {
              type: 'quiz_code',
              content: '여러 사용자 정보를 담은 리스트를 JSON으로 저장하고 다시 읽어보세요.',
              initialCode: 'import json\nusers = [{\'name\': \'철수\'}, {\'name\': \'영희\'}]\ntext = json.dumps(users, ensure_ascii=False)\nparsed = json.loads(text)\nprint(parsed[1][\'name\'])',
              expectedOutputs: ['영희'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'json.dumps()에 ensure_ascii=False를 주면 무엇이 달라지나요?',
              options: ["한글이 유니코드 이스케이프 없이 그대로 저장된다","에러가 난다","숫자만 저장된다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '한글 등 비ASCII 문자를 그대로 표시하게 해줍니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['한글을 그대로 저장하려면 ', ' 옵션을 씁니다.'],
              wordBank: ["ensure_ascii=False","utf8=True","korean=True"],
              answer: ["ensure_ascii=False"],
              hint: 'ensure_ascii=False입니다.'
            },
            {
              type: 'quiz_code',
              content: 'JSON 데이터에 새 키를 추가한 뒤 다시 직렬화해보세요.',
              initialCode: 'import json\ndata = {\'name\': \'egg\'}\ndata[\'age\'] = 5\ntext = json.dumps(data)\nprint(text)',
              expectedOutputs: ['{"name": "egg", "age": 5}'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'JSON으로 여러 단계 중첩된 데이터를 처리해보세요.',
              initialCode: 'import json\ntext = \'{"user": {"name": "egg", "scores": [90, 85, 100]}}\'\ndata = json.loads(text)\nprint(sum(data[\'user\'][\'scores\']))',
              expectedOutputs: ['275'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 딕셔너리(이름, 취미)를 JSON 문자열로 바꾼 뒤 다시 파싱해 취미를 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['독서'],
              hint: 'import json\ndata = {\'name\': \'코딩\', \'hobby\': \'독서\'}\ntext = json.dumps(data, ensure_ascii=False)\nparsed = json.loads(text)\nprint(parsed[\'hobby\'])'
            }
          ]
        ]
      },
      {
        id: 'node_14_5',
        title: 'HTTP 상태 코드',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '요청이 성공했을 때의 대표적인 상태 코드는?',
              options: ["200","404","500"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '200번대는 성공을 의미합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['요청 성공을 나타내는 코드는 ', ' 입니다.'],
              wordBank: ["200","404","500"],
              answer: ["200"],
              hint: '200입니다.'
            },
            {
              type: 'quiz_code',
              content: '상태 코드가 200이면 \'성공\'을 출력하세요.',
              initialCode: 'status = 200\nif status = 200:  # 비교 연산자로 고치세요!\n    print(\'성공\')',
              expectedOutputs: ['성공'],
              hint: 'if status == 200:'
            },
            {
              type: 'quiz_code',
              content: '404 코드일 때 \'찾을 수 없음\'을 출력하세요.',
              initialCode: 'status = 404\nif status ==   :\n    print(\'찾을 수 없음\')',
              expectedOutputs: ['찾을 수 없음'],
              hint: '404'
            },
            {
              type: 'quiz_code',
              content: '여러 상태 코드를 각각 판별하는 함수를 만드세요.',
              initialCode: 'def describe(status):\n    if status == 200:\n        return \'성공\'\n    elif status == 404:\n        return \'찾을 수 없음\'\n    elif status == 500:\n        return \'서버 오류\'\n    return \'알 수 없음\'\nprint(describe(500))',
              expectedOutputs: ['서버 오류'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '요청한 자원을 찾을 수 없을 때의 상태 코드는?',
              options: ["404","200","301"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'Not Found를 의미합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['자원을 찾을 수 없을 때는 ', ' 코드가 옵니다.'],
              wordBank: ["404","200","301"],
              answer: ["404"],
              hint: '404입니다.'
            },
            {
              type: 'quiz_code',
              content: '상태 코드가 400번대인지 확인하는 코드를 작성하세요.',
              initialCode: 'status = 403\nprint(400 <= status < 500)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '상태 코드가 200번대(성공)인지 확인하세요.',
              initialCode: 'status = 201\nprint(200 <= status < 300)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 상태 코드 리스트에서 성공한 것의 개수를 세어보세요.',
              initialCode: 'statuses = [200, 404, 200, 500, 201]\ncount = 0\nfor s in statuses:\n    if 200 <= s < 300:\n        count += 1\nprint(count)',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '서버 내부에 문제가 생겼을 때의 상태 코드는?',
              options: ["500","400","200"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'Internal Server Error입니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '클라이언트(요청자)의 잘못된 요청을 나타내는 코드 대역은?',
              options: ["400번대","200번대","500번대"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '4xx는 클라이언트 오류입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['서버 내부 오류는 ', ' 코드입니다.'],
              wordBank: ["500","400","200"],
              answer: ["500"],
              hint: '500입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['클라이언트 오류는 ', ' 코드 대역입니다.'],
              wordBank: ["400번대","200번대","500번대"],
              answer: ["400번대"],
              hint: '400번대입니다.'
            },
            {
              type: 'quiz_code',
              content: '상태 코드를 범주별로 분류하는 함수를 만드세요.',
              initialCode: 'def category(status):\n    if 200 <= status < 300:\n        return \'성공\'\n    elif 400 <= status < 500:\n        return \'클라이언트 오류\'\n    elif 500 <= status < 600:\n        return \'서버 오류\'\n    return \'기타\'\nprint(category(403))',
              expectedOutputs: ['클라이언트 오류'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리로 상태 코드와 설명을 매핑해 조회하세요.',
              initialCode: 'codes = {200: \'성공\', 404: \'찾을 수 없음\', 500: \'서버 오류\'}\nprint(codes.get(404, \'알 수 없는 코드\'))',
              expectedOutputs: ['찾을 수 없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리에 없는 코드를 조회했을 때 기본값이 나오는지 확인하세요.',
              initialCode: 'codes = {200: \'성공\', 404: \'찾을 수 없음\'}\nprint(codes.get(999, \'알 수 없는 코드\'))',
              expectedOutputs: ['알 수 없는 코드'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '상태 코드 300번대는 대체로 무엇을 의미하나요?',
              options: ["리다이렉션(다른 곳으로 이동)","성공","서버 오류"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '3xx는 리다이렉션을 의미합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['300번대는 ', ' 을 의미합니다.'],
              wordBank: ["리다이렉션","성공","클라이언트 오류"],
              answer: ["리다이렉션"],
              hint: '리다이렉션입니다.'
            },
            {
              type: 'quiz_code',
              content: '여러 응답을 순회하며 실패(400 이상)한 것만 골라 출력하세요.',
              initialCode: 'responses = [{\'url\': \'a\', \'status\': 200}, {\'url\': \'b\', \'status\': 404}, {\'url\': \'c\', \'status\': 200}]\nfor r in responses:\n    if r[\'status\'] >= 400:\n        print(r[\'url\'])',
              expectedOutputs: ['b'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '응답 리스트에서 성공률(%)을 계산해보세요.',
              initialCode: 'statuses = [200, 200, 404, 200, 500]\nsuccess = 0\nfor s in statuses:\n    if 200 <= s < 300:\n        success += 1\nprint(success / len(statuses) * 100)',
              expectedOutputs: ['60.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 상태 코드 201을 판별해 \'성공(생성됨)\'을 출력하는 조건문을 작성해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['성공(생성됨)'],
              hint: 'status = 201\nif status == 201:\n    print(\'성공(생성됨)\')'
            }
          ]
        ]
      }
    ]
  },
  {
    id: 15,
    title: 'UNIT 15\n그랜드 마스터 보스전',
    nodes: [
      {
        id: 'node_15_1',
        title: '데이터 수집가 (가짜 API 연동)',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '가짜 API 데이터에서 status_code 200은 무엇을 의미하나요?',
              options: ["요청 성공","요청 실패","데이터 없음"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '200은 성공을 의미합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['status_code 200은 ', ' 를 의미합니다.'],
              wordBank: ["요청 성공","요청 실패","데이터 없음"],
              answer: ["요청 성공"],
              hint: '요청 성공입니다.'
            },
            {
              type: 'quiz_code',
              content: '가짜 응답 리스트에서 성공(200)한 이름만 출력하세요.',
              initialCode: 'responses = [{\'status_code\': 200, \'name\': \'가게1\'}, {\'status_code\': 404, \'name\': \'가게2\'}]\nfor r in responses:\n    if r[\'status_code\'] = 200:  # 비교 연산자로 고치세요!\n        print(r[\'name\'])',
              expectedOutputs: ['가게1'],
              hint: 'if r[\'status_code\'] == 200:'
            },
            {
              type: 'quiz_code',
              content: '가짜 응답에서 성공한 데이터 개수를 세어보세요.',
              initialCode: 'responses = [{\'status_code\': 200}, {\'status_code\': 200}, {\'status_code\': 404}]\ncount = 0\nfor r in responses:\n    if r[\'status_code\'] == 200:\n        count +=   \nprint(count)',
              expectedOutputs: ['2'],
              hint: 'count += 1'
            },
            {
              type: 'quiz_code',
              content: '여러 가짜 응답에서 이름들을 리스트로 모아보세요.',
              initialCode: 'responses = [{\'status_code\': 200, \'name\': \'A\'}, {\'status_code\': 200, \'name\': \'B\'}]\nnames = []\nfor r in responses:\n    names.append(r[\'name\'])\nprint(names)',
              expectedOutputs: ['[\'A\', \'B\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 개의 응답 리스트에서 성공한 데이터만 거르는 방법은?',
              options: ["for문과 if문으로 필터링","자동으로 걸러진다","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '반복문과 조건문을 함께 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['성공한 응답만 거르려면 ', ' 을 사용합니다.'],
              wordBank: ["for문과 if문","자동 필터","클래스"],
              answer: ["for문과 if문"],
              hint: 'for문과 if문입니다.'
            },
            {
              type: 'quiz_code',
              content: '응답 리스트에서 평균 평점을 계산하세요.',
              initialCode: 'responses = [{\'rating\': 4.0}, {\'rating\': 5.0}, {\'rating\': 3.0}]\ntotal = 0\nfor r in responses:\n    total += r[\'rating\']\nprint(total / len(responses))',
              expectedOutputs: ['4.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'try-except로 안전하게 API 호출을 흉내내는 함수를 만드세요.',
              initialCode: 'def fetch(should_fail):\n    if should_fail:\n        raise ConnectionError(\'실패\')\n    return {\'status_code\': 200, \'data\': \'완료\'}\ntry:\n    result = fetch(False)\n    print(result[\'data\'])\nexcept ConnectionError:\n    print(\'오류\')',
              expectedOutputs: ['완료'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 페이지의 가짜 데이터를 하나로 합쳐보세요.',
              initialCode: 'page1 = {\'items\': [\'a\', \'b\']}\npage2 = {\'items\': [\'c\', \'d\']}\nall_items = page1[\'items\'] + page2[\'items\']\nprint(all_items)',
              expectedOutputs: ['[\'a\', \'b\', \'c\', \'d\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: 'API 응답을 JSON으로 파싱한 뒤 실제로 쓰기 전에 확인해야 할 것은?',
              options: ["필요한 키가 있는지","응답 속도","URL 길이"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '키가 없으면 에러가 날 수 있어요.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '데이터 수집 시 예외 처리가 중요한 이유는?',
              options: ["일부 요청이 실패해도 전체가 멈추지 않게 하려고","코드를 짧게 하려고","항상 필요하진 않아서"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '일부 실패가 전체를 멈추지 않게 합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['응답을 쓰기 전에 필요한 ', ' 가 있는지 확인해야 합니다.'],
              wordBank: ["키","속도","URL"],
              answer: ["키"],
              hint: '키입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['예외 처리는 일부 요청 실패로 ', ' 것을 막아줍니다.'],
              wordBank: ["전체가 멈추는","속도가 빨라지는","데이터가 늘어나는"],
              answer: ["전체가 멈추는"],
              hint: '전체가 멈추는 것을 막습니다.'
            },
            {
              type: 'quiz_code',
              content: 'JSON으로 변환한 응답에서 데이터를 다시 파싱해 사용해보세요.',
              initialCode: 'import json\nresponse_text = \'{"name": "에그", "price": 5000}\'\ndata = json.loads(response_text)\nprint(data[\'name\'] + \': \' + str(data[\'price\']) + \'원\')',
              expectedOutputs: ['에그: 5000원'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 응답 중 실패한 것의 개수를 정리해보세요.',
              initialCode: 'responses = [{\'status_code\': 200}, {\'status_code\': 404}, {\'status_code\': 500}, {\'status_code\': 200}]\nfailed = [r for r in responses if r[\'status_code\'] != 200]\nprint(len(failed))',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 응답에서 중첩된 데이터를 안전하게 꺼내보세요.',
              initialCode: 'response = {\'status_code\': 200, \'result\': {\'items\': [1, 2, 3]}}\nprint(sum(response[\'result\'][\'items\']))',
              expectedOutputs: ['6'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 페이지의 데이터를 모으려면?',
              options: ["반복문으로 여러 응답을 합친다","한 번에 다 가져올 수밖에 없다","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '반복문으로 누적해서 합칩니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['여러 응답을 모으려면 ', ' 으로 합칩니다.'],
              wordBank: ["반복문","단일 조건문","클래스 상속"],
              answer: ["반복문"],
              hint: '반복문입니다.'
            },
            {
              type: 'quiz_code',
              content: '여러 가상 상점의 평점을 비교해 가장 높은 곳을 찾아보세요.',
              initialCode: 'shops = [{\'name\': \'A\', \'rating\': 4.2}, {\'name\': \'B\', \'rating\': 4.8}, {\'name\': \'C\', \'rating\': 3.9}]\nbest = max(shops, key=lambda s: s[\'rating\'])\nprint(best[\'name\'])',
              expectedOutputs: ['B'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 페이지의 가짜 데이터를 순회하며 조건에 맞는 것만 모아보세요.',
              initialCode: 'pages = [{\'items\': [{\'name\': \'A\', \'price\': 1000}, {\'name\': \'B\', \'price\': 5000}]}, {\'items\': [{\'name\': \'C\', \'price\': 2000}]}]\ncheap_items = []\nfor page in pages:\n    for item in page[\'items\']:\n        if item[\'price\'] < 3000:\n            cheap_items.append(item[\'name\'])\nprint(cheap_items)',
              expectedOutputs: ['[\'A\', \'C\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 가짜 응답에서 status_code가 200일 때만 데이터를 출력하는 코드를 작성해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['수집 완료'],
              hint: 'response = {\'status_code\': 200, \'data\': \'수집 완료\'}\nif response[\'status_code\'] == 200:\n    print(response[\'data\'])'
            }
          ]
        ]
      },
      {
        id: 'node_15_2',
        title: '데이터 정제소',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '문자열 앞뒤 공백을 제거하는 메서드는?',
              options: ["strip()","trim()","clean()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'strip()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['문자열 양 끝 공백을 제거하려면 ', ' 를 씁니다.'],
              wordBank: ["strip()","trim()","clean()"],
              answer: ["strip()"],
              hint: 'strip()입니다.'
            },
            {
              type: 'quiz_code',
              content: '공백이 섞인 이름 목록을 정리(strip)하세요.',
              initialCode: 'names = [\'  철수\', \'영희  \', \' 민수 \']\ncleaned = []\nfor n in names:\n    cleaned.append(n.trim())  # 메서드 이름을 고치세요!\nprint(cleaned)',
              expectedOutputs: ['[\'철수\', \'영희\', \'민수\']'],
              hint: 'n.strip()'
            },
            {
              type: 'quiz_code',
              content: '대문자가 섞인 데이터를 모두 소문자로 통일하세요.',
              initialCode: 'words = [\'Apple\', \'BANANA\', \'grape\']\ncleaned = []\nfor w in words:\n    cleaned.append(w.  ())\nprint(cleaned)',
              expectedOutputs: ['[\'apple\', \'banana\', \'grape\']'],
              hint: 'lower()'
            },
            {
              type: 'quiz_code',
              content: '빈 문자열을 걸러내고 실제 데이터만 남겨보세요.',
              initialCode: 'data = [\'철수\', \'\', \'영희\', \'\', \'민수\']\ncleaned = []\nfor d in data:\n    if d != \'\':\n        cleaned.append(d)\nprint(cleaned)',
              expectedOutputs: ['[\'철수\', \'영희\', \'민수\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '문자열을 소문자로 통일하는 메서드는?',
              options: ["lower()","lowercase()","tolower()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'lower()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['대소문자를 통일하려면 ', ' 나 upper()를 씁니다.'],
              wordBank: ["lower()","small()","down()"],
              answer: ["lower()"],
              hint: 'lower()입니다.'
            },
            {
              type: 'quiz_code',
              content: '중복된 데이터를 제거해보세요.',
              initialCode: 'data = [\'사과\', \'바나나\', \'사과\', \'포도\', \'바나나\']\ncleaned = list(set(data))\nprint(len(cleaned))',
              expectedOutputs: ['3'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '문자열 숫자를 정수로 안전하게 변환해보세요.',
              initialCode: 'values = [\'10\', \'20\', \'abc\', \'30\']\ntotal = 0\nfor v in values:\n    try:\n        total += int(v)\n    except ValueError:\n        pass\nprint(total)',
              expectedOutputs: ['60'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '공백 제거와 소문자 변환을 함께 적용해보세요.',
              initialCode: 'data = [\'  Apple \', \'BANANA  \']\ncleaned = []\nfor d in data:\n    cleaned.append(d.strip().lower())\nprint(cleaned)',
              expectedOutputs: ['[\'apple\', \'banana\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '리스트에서 중복을 제거하는 가장 간단한 방법은?',
              options: ["set()으로 변환","for문으로 하나씩 삭제","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '집합으로 바꾸면 중복이 사라집니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '잘못된 데이터(빈 문자열 등)를 걸러내는 방법은?',
              options: ["조건문으로 필터링","자동으로 삭제된다","항상 에러가 난다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '조건문으로 걸러냅니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['중복 제거의 가장 간단한 방법은 ', ' 로 변환하는 것입니다.'],
              wordBank: ["set()","list()","dict()"],
              answer: ["set()"],
              hint: 'set()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['잘못된 데이터는 ', ' 으로 걸러냅니다.'],
              wordBank: ["조건문(필터링)","자동 삭제","무시"],
              answer: ["조건문(필터링)"],
              hint: '조건문입니다.'
            },
            {
              type: 'quiz_code',
              content: 'None 값을 걸러내고 실제 값만 합산해보세요.',
              initialCode: 'data = [10, None, 20, None, 30]\ntotal = 0\nfor d in data:\n    if d is not None:\n        total += d\nprint(total)',
              expectedOutputs: ['60'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 형식이 섞인 나이 데이터를 정리해 평균을 계산하세요.',
              initialCode: 'ages = [\'25\', \'30\', \'N/A\', \'40\']\nvalid_ages = []\nfor a in ages:\n    try:\n        valid_ages.append(int(a))\n    except ValueError:\n        continue\nprint(sum(valid_ages) / len(valid_ages))',
              expectedOutputs: ['31.666666666666668'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 리스트에서 특정 필드가 빠진 항목을 걸러내세요.',
              initialCode: 'records = [{\'name\': \'철수\', \'age\': 20}, {\'name\': \'영희\'}, {\'name\': \'민수\', \'age\': 25}]\nvalid = [r for r in records if \'age\' in r]\nprint(len(valid))',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '데이터 타입이 섞여 있을 때 안전하게 변환하려면?',
              options: ["try-except로 변환 실패를 처리한다","무조건 int()를 쓴다","변환하지 않는다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'try-except로 실패를 처리합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['변환 실패 가능성이 있을 땐 ', ' 로 안전하게 처리합니다.'],
              wordBank: ["try-except","for문","import"],
              answer: ["try-except"],
              hint: 'try-except입니다.'
            },
            {
              type: 'quiz_code',
              content: '중복 제거 후 정렬까지 함께 적용해보세요.',
              initialCode: 'nums = [5, 3, 5, 1, 3, 2]\ncleaned = sorted(set(nums))\nprint(cleaned)',
              expectedOutputs: ['[1, 2, 3, 5]'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '이름과 점수 데이터에서 이상치(0점 이하)를 제거하고 평균을 계산하세요.',
              initialCode: 'scores = [{\'name\': \'철수\', \'score\': 90}, {\'name\': \'영희\', \'score\': -5}, {\'name\': \'민수\', \'score\': 85}]\nvalid = [s[\'score\'] for s in scores if s[\'score\'] > 0]\nprint(sum(valid) / len(valid))',
              expectedOutputs: ['87.5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 공백과 중복이 섞인 이름 리스트를 정리해 깔끔한 리스트로 출력해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['[\'철수\', \'영희\']'],
              hint: 'names = [\'철수 \', \' 영희\', \'철수\']\ncleaned = []\nfor n in names:\n    stripped = n.strip()\n    if stripped not in cleaned:\n        cleaned.append(stripped)\nprint(cleaned)'
            }
          ]
        ]
      },
      {
        id: 'node_15_3',
        title: '딕셔너리 안전 설계',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리에서 안전하게 값을 꺼내는 방법이 아닌 것은?',
              options: ["딕셔너리[키] (대괄호 직접 접근)","get()","in으로 확인 후 접근"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '대괄호 직접 접근은 키가 없으면 에러가 납니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['안전하게 값을 꺼내려면 대괄호 대신 ', ' 를 씁니다.'],
              wordBank: ["get()","직접 접근","del"],
              answer: ["get()"],
              hint: 'get()입니다.'
            },
            {
              type: 'quiz_code',
              content: '없는 키를 안전하게 조회해 기본값을 출력하세요.',
              initialCode: 'd = {\'a\': 1}\nprint(d[\'b\'])  # 에러가 나요! get()으로 고치세요.',
              expectedOutputs: ['None'],
              hint: 'print(d.get(\'b\'))'
            },
            {
              type: 'quiz_code',
              content: 'get()에 기본값을 지정해 안전하게 조회하세요.',
              initialCode: 'd = {\'a\': 1}\nprint(d.get(\'b\',   ))',
              expectedOutputs: ['0'],
              hint: '0'
            },
            {
              type: 'quiz_code',
              content: '키가 없으면 기본값을 넣고, 있으면 기존 값을 유지하세요.',
              initialCode: 'd = {\'a\': 1}\nd.setdefault(\'b\', 10)\nd.setdefault(\'a\', 999)\nprint(d)',
              expectedOutputs: ['{\'a\': 1, \'b\': 10}'],
              hint: '이미 정답입니다. 이미 있는 키는 setdefault가 값을 바꾸지 않습니다.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '키가 없을 때 기본값과 함께 넣어주는 메서드는?',
              options: ["setdefault()","default()","fill()"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'setdefault()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['키가 없을 때 기본값을 채워 넣으려면 ', ' 를 씁니다.'],
              wordBank: ["setdefault()","default()","fill()"],
              answer: ["setdefault()"],
              hint: 'setdefault()입니다.'
            },
            {
              type: 'quiz_code',
              content: 'in으로 먼저 확인한 후 안전하게 접근하세요.',
              initialCode: 'd = {\'a\': 1}\nif \'a\' in d:\n    print(d[\'a\'])\nelse:\n    print(\'없음\')',
              expectedOutputs: ['1'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: 'update()로 두 딕셔너리를 안전하게 합쳐보세요.',
              initialCode: 'd1 = {\'a\': 1}\nd2 = {\'b\': 2}\nd1.update(d2)\nprint(d1)',
              expectedOutputs: ['{\'a\': 1, \'b\': 2}'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '중첩된 딕셔너리를 get()으로 단계별로 안전하게 조회하세요.',
              initialCode: 'd = {\'user\': {\'name\': \'에그\'}}\nname = d.get(\'user\', {}).get(\'name\', \'없음\')\nprint(name)',
              expectedOutputs: ['에그'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 딕셔너리를 안전하게 합치는 방법은?',
              options: ["update() 메서드","+ 연산자","자동으로 합쳐진다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: 'update()를 사용합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '중첩된 딕셔너리 접근 시 안전하게 하려면?',
              options: ["단계별로 get()을 사용하거나 try-except","무조건 대괄호로 접근","불가능하다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '단계별로 get()을 씁니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['두 딕셔너리를 합치려면 ', ' 를 사용합니다.'],
              wordBank: ["update()","+","append()"],
              answer: ["update()"],
              hint: 'update()입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['중첩 딕셔너리는 단계별로 ', ' 를 사용하면 안전합니다.'],
              wordBank: ["get()","대괄호만","del"],
              answer: ["get()"],
              hint: 'get()입니다.'
            },
            {
              type: 'quiz_code',
              content: '없는 중첩 키를 안전하게 조회했을 때 기본값이 나오는지 확인하세요.',
              initialCode: 'd = {\'user\': {\'name\': \'에그\'}}\nage = d.get(\'user\', {}).get(\'age\', \'없음\')\nprint(age)',
              expectedOutputs: ['없음'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 딕셔너리를 update()로 순서대로 합쳐 최종 값을 확인하세요.',
              initialCode: 'd1 = {\'a\': 1, \'b\': 2}\nd2 = {\'b\': 20, \'c\': 3}\nd1.update(d2)\nprint(d1)',
              expectedOutputs: ['{\'a\': 1, \'b\': 20, \'c\': 3}'],
              hint: '이미 정답입니다. update()는 같은 키를 덮어씁니다.'
            },
            {
              type: 'quiz_code',
              content: 'try-except로 중첩 딕셔너리 접근을 안전하게 처리하는 함수를 만드세요.',
              initialCode: 'def safe_get(d, *keys):\n    try:\n        result = d\n        for k in keys:\n            result = result[k]\n        return result\n    except (KeyError, TypeError):\n        return None\nd = {\'user\': {\'name\': \'에그\'}}\nprint(safe_get(d, \'user\', \'name\'))',
              expectedOutputs: ['에그'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '딕셔너리 설계 시 안전성을 높이는 방법은?',
              options: ["예상 가능한 접근에 기본값을 준비하는 것","키를 최대한 많이 만드는 것","값을 항상 문자열로 통일하는 것"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '기본값을 미리 준비합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['딕셔너리 설계의 안전성은 ', ' 준비에서 나옵니다.'],
              wordBank: ["기본값","무작위 값","빈 값 삭제"],
              answer: ["기본값"],
              hint: '기본값입니다.'
            },
            {
              type: 'quiz_code',
              content: '같은 함수로 없는 키를 조회했을 때 None이 나오는지 확인하세요.',
              initialCode: 'def safe_get(d, *keys):\n    try:\n        result = d\n        for k in keys:\n            result = result[k]\n        return result\n    except (KeyError, TypeError):\n        return None\nd = {\'user\': {\'name\': \'에그\'}}\nprint(safe_get(d, \'user\', \'age\'))',
              expectedOutputs: ['None'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 사용자 딕셔너리에서 안전하게 정보를 수집하는 코드를 작성하세요.',
              initialCode: 'users = [{\'name\': \'철수\', \'age\': 20}, {\'name\': \'영희\'}]\nresult = []\nfor u in users:\n    result.append(u.get(\'age\', 0))\nprint(result)',
              expectedOutputs: ['[20, 0]'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 딕셔너리에서 get()과 기본값을 사용해 없는 키를 안전하게 조회해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['손님'],
              hint: 'user = {\'name\': \'에그\'}\nprint(user.get(\'nickname\', \'손님\'))'
            }
          ]
        ]
      },
      {
        id: 'node_15_4',
        title: '종합 실무 미션',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '여러 기능(클래스, 예외처리, 파일)을 함께 쓰는 이유는?',
              options: ["실무 프로그램은 여러 개념이 함께 필요하기 때문","한 가지만 알면 충분해서","시험에 나와서"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '실무는 여러 개념이 얽혀 있습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['실무 프로그램은 ', ' 개념이 함께 필요합니다.'],
              wordBank: ["여러","한 가지","전혀 다른"],
              answer: ["여러"],
              hint: '여러 개념입니다.'
            },
            {
              type: 'quiz_code',
              content: '재고(Inventory) 클래스를 만들어 물건을 추가하세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {}\n    def add(self, name, qty):\n        self.items[name] = qty\ninv = Inventory()\ninv.add(\'사과\', 10)\nprint(inv.items[\'사과\']())  # 괄호를 빼야 해요!',
              expectedOutputs: ['10'],
              hint: 'print(inv.items[\'사과\'])'
            },
            {
              type: 'quiz_code',
              content: '재고를 판매(차감)하는 메서드를 완성하세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 10}\n    def sell(self, name, qty):\n        self.items[name] -=   \ninv = Inventory()\ninv.sell(\'사과\', 3)\nprint(inv.items[\'사과\'])',
              expectedOutputs: ['7'],
              hint: 'qty'
            },
            {
              type: 'quiz_code',
              content: '재고가 부족하면 예외를 발생시키는 메서드를 만드세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 5}\n    def sell(self, name, qty):\n        if self.items[name] < qty:\n            raise ValueError(\'재고 부족\')\n        self.items[name] -= qty\ninv = Inventory()\ntry:\n    inv.sell(\'사과\', 10)\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['재고 부족'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '클래스와 예외처리를 함께 쓰면 좋은 점은?',
              options: ["객체의 상태를 안전하게 관리할 수 있다","코드가 항상 짧아진다","클래스가 필요 없어진다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '안전한 상태 관리가 가능해집니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['클래스와 예외처리를 함께 쓰면 ', ' 를 안전하게 관리할 수 있습니다.'],
              wordBank: ["객체의 상태","코드의 길이","파일의 크기"],
              answer: ["객체의 상태"],
              hint: '객체의 상태입니다.'
            },
            {
              type: 'quiz_code',
              content: '없는 상품을 안전하게 조회해보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 5}\n    def check(self, name):\n        return self.items.get(name, 0)\ninv = Inventory()\nprint(inv.check(\'바나나\'))',
              expectedOutputs: ['0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 상품을 추가한 뒤 전체 재고 합계를 구하세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {}\n    def add(self, name, qty):\n        self.items[name] = qty\ninv = Inventory()\ninv.add(\'사과\', 10)\ninv.add(\'바나나\', 5)\nprint(sum(inv.items.values()))',
              expectedOutputs: ['15'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '재고를 파일에 저장하고 다시 불러오는 기능을 만들어보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 10}\n    def save(self, filename):\n        with open(filename, \'w\') as f:\n            f.write(str(self.items))\ninv = Inventory()\ninv.save(\'inv.txt\')\nwith open(\'inv.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['{\'사과\': 10}'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '재고 관리 시스템에서 재고가 부족할 때 적절한 처리는?',
              options: ["예외를 발생시키거나 안전하게 막는다","무시하고 진행한다","프로그램을 강제 종료한다"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '예외 처리나 방어 로직이 필요합니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '여러 클래스가 협력하는 구조를 설계할 때 중요한 것은?',
              options: ["각 클래스의 역할을 명확히 나누는 것","클래스를 하나로 합치는 것","상속을 쓰지 않는 것"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '역할 분리가 중요합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['재고 부족 시 ', ' 처리를 하는 것이 안전합니다.'],
              wordBank: ["예외 발생 또는 방어 로직","무시","강제 종료"],
              answer: ["예외 발생 또는 방어 로직"],
              hint: '예외 발생 또는 방어 로직입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['여러 클래스가 협력할 땐 ', ' 을 명확히 나눕니다.'],
              wordBank: ["역할","이름 길이","변수명"],
              answer: ["역할"],
              hint: '역할입니다.'
            },
            {
              type: 'quiz_code',
              content: 'Order 클래스가 Inventory 클래스와 협력하는 구조를 만들어보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 5}\nclass Order:\n    def __init__(self, inventory):\n        self.inventory = inventory\n    def buy(self, name):\n        return self.inventory.items.get(name, 0)\ninv = Inventory()\norder = Order(inv)\nprint(order.buy(\'사과\'))',
              expectedOutputs: ['5'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 상품에 대해 재고 부족 여부를 한 번에 확인해보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 2, \'바나나\': 10}\n    def check_low(self, threshold):\n        low = []\n        for name, qty in self.items.items():\n            if qty < threshold:\n                low.append(name)\n        return low\ninv = Inventory()\nprint(inv.check_low(5))',
              expectedOutputs: ['[\'사과\']'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '주문 처리 중 예외가 발생해도 다음 주문은 계속 처리되도록 만드세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 3}\n    def sell(self, name, qty):\n        if self.items.get(name, 0) < qty:\n            raise ValueError(\'재고 부족: \' + name)\n        self.items[name] -= qty\ninv = Inventory()\norders = [(\'사과\', 1), (\'사과\', 10), (\'사과\', 1)]\nfor name, qty in orders:\n    try:\n        inv.sell(name, qty)\n        print(\'성공\')\n    except ValueError:\n        print(\'실패\')',
              expectedOutputs: ['성공\n실패\n성공'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '실무 코드에서 데이터 유효성 검사가 중요한 이유는?',
              options: ["잘못된 데이터로 인한 오류를 미리 막기 위해","코드를 길게 만들기 위해","검사가 필수는 아니라서"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '오류를 미리 방지합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['데이터 유효성 검사는 ', ' 를 미리 막아줍니다.'],
              wordBank: ["잘못된 데이터로 인한 오류","프로그램 속도 저하","메모리 부족"],
              answer: ["잘못된 데이터로 인한 오류"],
              hint: '잘못된 데이터로 인한 오류입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수로 전체 주문 건수를 추적해보세요.',
              initialCode: 'class Order:\n    total_orders = 0\n    def __init__(self, item):\n        self.item = item\n        Order.total_orders += 1\nOrder(\'사과\')\nOrder(\'바나나\')\nprint(Order.total_orders)',
              expectedOutputs: ['2'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '재고 관리와 주문 처리를 통합한 미니 시스템을 완성해보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 10, \'바나나\': 5}\n    def sell(self, name, qty):\n        if self.items.get(name, 0) < qty:\n            raise ValueError(\'재고 부족\')\n        self.items[name] -= qty\n        return self.items[name]\ninv = Inventory()\nresults = []\nfor name, qty in [(\'사과\', 3), (\'바나나\', 10), (\'사과\', 2)]:\n    try:\n        results.append(inv.sell(name, qty))\n    except ValueError:\n        results.append(-1)\nprint(results)',
              expectedOutputs: ['[7, -1, 5]'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 Inventory 클래스를 만들어 상품을 추가하고 판매까지 처리해보세요.',
              initialCode: '# 백지 상태입니다.',
              expectedOutputs: ['3'],
              hint: 'class Inventory:\n    def __init__(self):\n        self.items = {}\n    def add(self, name, qty):\n        self.items[name] = qty\n    def sell(self, name, qty):\n        self.items[name] -= qty\ninv = Inventory()\ninv.add(\'사과\', 5)\ninv.sell(\'사과\', 2)\nprint(inv.items[\'사과\'])'
            }
          ]
        ]
      },
      {
        id: 'node_15_5',
        title: '🌟 영광의 파이썬 마스터 🌟',
        lessons: [
          [
            {
              type: 'quiz_multiple_choice',
              content: '지금까지 배운 것 중 클래스의 핵심 개념이 아닌 것은?',
              options: ["전역 변수 선언","상속","메서드"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '전역 변수는 함수 파트에서 배운 개념입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (1)',
              sentenceParts: ['파일과 예외처리를 함께 쓰는 이유는 파일 작업이 ', ' 수 있기 때문입니다.'],
              wordBank: ["실패할","항상 성공할","자동화될"],
              answer: ["실패할"],
              hint: '실패할 수 있기 때문입니다.'
            },
            {
              type: 'quiz_code',
              content: '클래스로 만든 계좌 객체에서 잔액을 확인하세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\na = Account(1000)\nprint(a.balance())  # 속성이지 메서드가 아니에요!',
              expectedOutputs: ['1000'],
              hint: 'print(a.balance)'
            },
            {
              type: 'quiz_code',
              content: '계좌 클래스에 출금 메서드를 완성하세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        self.balance -=   \na = Account(1000)\na.withdraw(300)\nprint(a.balance)',
              expectedOutputs: ['700'],
              hint: 'amount'
            },
            {
              type: 'quiz_code',
              content: '잔액 부족 시 예외를 발생시키는 출금 메서드를 만드세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise ValueError(\'잔액 부족\')\n        self.balance -= amount\na = Account(500)\ntry:\n    a.withdraw(1000)\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['잔액 부족'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '파일과 예외처리를 함께 쓰는 이유는?',
              options: ["파일 작업은 실패할 수 있어 안전하게 처리해야 하므로","파일은 항상 성공하기 때문에","예외처리가 파일을 자동으로 만들어줘서"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '파일 작업은 실패 가능성이 있습니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (2)',
              sentenceParts: ['정규표현식과 JSON은 ', ' 데이터를 처리할 때 함께 쓰입니다.'],
              wordBank: ["텍스트에서 추출한 구조화된","전혀 무관한","클래스 전용"],
              answer: ["텍스트에서 추출한 구조화된"],
              hint: '구조화된 데이터 처리에 함께 씁니다.'
            },
            {
              type: 'quiz_code',
              content: '계좌 정보를 파일에 저장하고 다시 읽어보세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\na = Account(1000)\nwith open(\'account.txt\', \'w\') as f:\n    f.write(str(a.balance))\nwith open(\'account.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['1000'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '정규표현식으로 계좌번호 형식을 검증하세요.',
              initialCode: 'import re\naccount_number = \'123-456-789\'\nresult = re.fullmatch(r\'\\d{3}-\\d{3}-\\d{3}\', account_number)\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '계좌 정보를 JSON으로 변환해 저장해보세요.',
              initialCode: 'import json\naccount_data = {\'name\': \'에그\', \'balance\': 1000}\ntext = json.dumps(account_data, ensure_ascii=False)\nprint(text)',
              expectedOutputs: ['{"name": "에그", "balance": 1000}'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '정규표현식과 JSON을 함께 쓰는 상황은?',
              options: ["텍스트에서 패턴을 찾아 구조화된 데이터로 만들 때","항상 무관하다","클래스를 만들 때만"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '패턴 추출 후 구조화할 때 함께 씁니다.'
            },
            {
              type: 'quiz_multiple_choice',
              content: '실무에서 API 응답을 처리할 때 배운 순서는?',
              options: ["상태 확인 -> JSON 파싱 -> 안전한 데이터 접근","무조건 바로 사용","파싱 없이 바로 출력"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '순서대로 안전하게 처리합니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (3)',
              sentenceParts: ['API 응답 처리는 상태 확인 -> ', ' -> 안전한 접근 순서입니다.'],
              wordBank: ["JSON 파싱","바로 출력","클래스 생성"],
              answer: ["JSON 파싱"],
              hint: 'JSON 파싱입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (4)',
              sentenceParts: ['클래스, 예외처리, 파일, 모듈은 실무에서 ', ' 사용됩니다.'],
              wordBank: ["함께","따로만","선택적으로 하나만"],
              answer: ["함께"],
              hint: '함께 사용됩니다.'
            },
            {
              type: 'quiz_code',
              content: '여러 계좌 객체를 리스트로 관리하며 총 잔액을 계산하세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\naccounts = [Account(1000), Account(2000), Account(500)]\ntotal = 0\nfor a in accounts:\n    total += a.balance\nprint(total)',
              expectedOutputs: ['3500'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '상속을 활용해 저축 계좌(이자 지급 기능 추가)를 만들어보세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\nclass SavingsAccount(Account):\n    def add_interest(self, rate):\n        self.balance += self.balance * rate\ns = SavingsAccount(1000)\ns.add_interest(0.1)\nprint(s.balance)',
              expectedOutputs: ['1100.0'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '계좌 거래 내역을 안전하게 딕셔너리로 관리해보세요.',
              initialCode: 'transactions = {}\ndef log(name, amount):\n    transactions.setdefault(name, [])\n    transactions[name].append(amount)\nlog(\'에그\', 100)\nlog(\'에그\', -50)\nprint(sum(transactions[\'에그\']))',
              expectedOutputs: ['50'],
              hint: '이미 정답입니다. 실행해보세요.'
            }
          ],
          [
            {
              type: 'quiz_multiple_choice',
              content: '지금까지의 학습 여정에서 가장 중요한 것은?',
              options: ["기초부터 차근차근 쌓인 이해","암기한 코드 조각들","빠른 타이핑 속도"],
              answer: 0,
              explanation: '파이썬 문법의 핵심 개념입니다.',
              hint: '기초부터 쌓인 이해가 핵심입니다.'
            },
            {
              type: 'quiz_word_bank',
              content: '단어 블록 빈칸 채우기 (5)',
              sentenceParts: ['지금까지의 학습에서 가장 중요한 것은 ', ' 입니다.'],
              wordBank: ["기초부터 쌓인 이해","암기량","속도"],
              answer: ["기초부터 쌓인 이해"],
              hint: '기초부터 쌓인 이해입니다.'
            },
            {
              type: 'quiz_code',
              content: 'try-except-finally를 활용해 안전한 출금 처리를 완성하세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        try:\n            if amount > self.balance:\n                raise ValueError(\'잔액 부족\')\n            self.balance -= amount\n            return \'성공\'\n        except ValueError as e:\n            return str(e)\n        finally:\n            print(\'거래 시도 완료\')\na = Account(500)\nprint(a.withdraw(1000))',
              expectedOutputs: ['거래 시도 완료\n잔액 부족'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '클래스, 예외처리, 파일, JSON을 모두 활용한 종합 코드를 완성해보세요.',
              initialCode: 'import json\nclass Account:\n    def __init__(self, name, balance):\n        self.name = name\n        self.balance = balance\n    def to_json(self):\n        return json.dumps({\'name\': self.name, \'balance\': self.balance}, ensure_ascii=False)\na = Account(\'에그\', 1000)\nwith open(\'final.txt\', \'w\') as f:\n    f.write(a.to_json())\nwith open(\'final.txt\', \'r\') as f:\n    data = json.loads(f.read())\nprint(data[\'name\'], data[\'balance\'])',
              expectedOutputs: ['에그 1000'],
              hint: '이미 정답입니다. 실행해보세요.'
            },
            {
              type: 'quiz_code',
              content: '스스로 계좌 클래스를 만들어 입금, 출금 메서드를 모두 구현하고 최종 잔액을 출력해보세요.',
              initialCode: '# 백지 상태입니다. 지금까지 배운 모든 것을 활용해 자유롭게 완성해보세요!',
              expectedOutputs: ['1200'],
              hint: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def deposit(self, amount):\n        self.balance += amount\n    def withdraw(self, amount):\n        self.balance -= amount\na = Account(1000)\na.deposit(500)\na.withdraw(300)\nprint(a.balance)'
            }
          ]
        ]
      }
    ]
  }
];
