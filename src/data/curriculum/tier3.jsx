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
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(   ):  # 괄호 안에 부모 클래스를 넣어야 해요\n    pass\nd = Dog()\nd.eat()',
              expectedOutputs: ['먹는다'],
              hint: 'class Dog(Animal): 로 채우세요.'
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
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):  # 오타가 있어요! 부모 클래스 이름을 확인하세요\n    pass\nd = Dog(\'초코\')\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: 'Animal의 철자를 확인하세요. class Dog(Animal): 이어야 합니다.'
            },
            {
              type: 'quiz_code',
              content: '자식 클래스에 새로운 메서드를 추가해보세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(Animal):\n    def bark(self):\n        print(  )  # 짖는 소리를 넣어주세요\nd = Dog()\nd.eat()\nd.bark()',
              expectedOutputs: ['먹는다\n멍멍'],
              hint: 'print(\'멍멍\')'
            },
            {
              type: 'quiz_code',
              content: '여러 자식 클래스가 같은 부모 메서드를 공유하는지 확인하세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\nclass Dog(Animal):\n    pass\nclass Cat:  # Animal을 상속받지 않았어요!\n    pass\nDog().eat()\nCat().eat()',
              expectedOutputs: ['먹는다\n먹는다'],
              hint: 'class Cat(Animal): 로 고치세요.'
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
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        # 이름과 품종을 저장하는 코드를 작성하세요\n        pass\nd = Dog(\'초코\', \'푸들\')\nprint(d.name, d.breed)',
              expectedOutputs: ['초코 푸들'],
              hint: 'self.name = name\n        self.breed = breed'
            },
            {
              type: 'quiz_code',
              content: 'isinstance()로 자식 객체가 부모 타입이기도 한지 확인하세요.',
              initialCode: 'class Animal:\n    pass\nclass Dog(Animal):\n    pass\nd = Dog()\nprint(isinstance(d,   ))  # 부모 클래스를 넣어보세요',
              expectedOutputs: ['True'],
              hint: 'isinstance(d, Animal)'
            },
            {
              type: 'quiz_code',
              content: '3단계 상속(조부모-부모-자식)이 가능한지 확인하세요.',
              initialCode: 'class A:\n    def hello(self):\n        print(\'A입니다\')\nclass B(A):\n    pass\n# C가 B를 상속받도록 클래스를 작성하세요\nc = C()\nc.hello()',
              expectedOutputs: ['A입니다'],
              hint: 'class C(B):\n    pass'
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
              content: '자식 클래스에서만 호출 가능한 메서드를 직접 만들어보세요.',
              initialCode: 'class Animal:\n    def eat(self):\n        print(\'먹는다\')\n# Dog가 Animal을 상속받고, bark 메서드를 추가해 \'멍멍\'을 출력하도록 작성하세요\nd = Dog()\nd.bark()',
              expectedOutputs: ['멍멍'],
              hint: 'class Dog(Animal):\n    def bark(self):\n        print(\'멍멍\')'
            },
            {
              type: 'quiz_code',
              content: '부모 클래스 Shape을 상속받는 Circle 클래스에 area 메서드를 추가해 사용하세요.',
              initialCode: 'class Shape:\n    def __init__(self, name):\n        self.name = name\n# Circle 클래스가 Shape을 상속받아 radius를 저장하고 area()로 넓이를 계산하도록 작성하세요\nc = Circle(\'원\', 2)\nprint(c.area())',
              expectedOutputs: ['12.56'],
              hint: 'class Circle(Shape):\n    def __init__(self, name, radius):\n        self.name = name\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2'
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
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(  )  # 멍멍 소리를 채워보세요\nd = Dog()\nd.sound()',
              expectedOutputs: ['멍멍'],
              hint: 'print(\'멍멍\')'
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
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Fish:  # Animal을 상속받지 않았어요!\n    pass\nf = Fish()\nf.sound()',
              expectedOutputs: ['...'],
              hint: 'class Fish(Animal): 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '여러 자식 클래스가 각자 다르게 오버라이딩하는지 확인하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\nclass Cat(Animal):\n    def sound(self):\n        print(  )  # 야옹 소리를 채워보세요\nDog().sound()\nCat().sound()',
              expectedOutputs: ['멍멍\n야옹'],
              hint: 'print(\'야옹\')'
            },
            {
              type: 'quiz_code',
              content: '오버라이딩한 메서드 안에서 추가 로직을 넣어보세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\n        print(  )  # 꼬리를 흔든다는 문구를 채워보세요\nd = Dog()\nd.sound()',
              expectedOutputs: ['멍멍\n꼬리를 흔든다'],
              hint: 'print(\'꼬리를 흔든다\')'
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
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n# Dog가 Animal을 상속받아 name과 breed를 함께 저장하는 __init__을 오버라이딩하세요\nd = Dog(\'초코\', \'푸들\')\nprint(d.breed)',
              expectedOutputs: ['푸들'],
              hint: 'class Dog(Animal):\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed'
            },
            {
              type: 'quiz_code',
              content: '여러 도형 클래스가 area 메서드를 각자 다르게 오버라이딩하도록 만드세요.',
              initialCode: 'class Shape:\n    def area(self):\n        return 0\n# Square 클래스가 Shape을 상속받아 side를 저장하고 area()를 오버라이딩하도록 작성하세요\ns = Square(4)\nprint(s.area())',
              expectedOutputs: ['16'],
              hint: 'class Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2'
            },
            {
              type: 'quiz_code',
              content: '오버라이딩한 메서드가 리스트 순회 중에도 각자 다르게 동작하는지 확인하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'...\')\nclass Dog(Animal):\n    def sound(self):\n        print(\'멍멍\')\nclass Cat(Animal):\n    def sound(self):\n        print(  )  # 야옹 소리를 채워보세요\nanimals = [Dog(), Cat()]\nfor a in animals:\n    a.sound()',
              expectedOutputs: ['멍멍\n야옹'],
              hint: 'print(\'야옹\')'
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
              initialCode: 'class Animal:\n    def info(self):\n        return \'동물\'\n# Dog가 Animal을 상속받아 info()를 오버라이딩해 \'강아지\'를 반환하도록 작성하세요\nprint(Dog().info())',
              expectedOutputs: ['강아지'],
              hint: 'class Dog(Animal):\n    def info(self):\n        return \'강아지\''
            },
            {
              type: 'quiz_code',
              content: '오버라이딩된 메서드에서 결과를 조건에 따라 다르게 만들어보세요.',
              initialCode: 'class Employee:\n    def bonus(self):\n        return 0\n# Manager가 Employee를 상속받아 bonus()를 오버라이딩해 1000을 반환하도록 작성하세요\nm = Manager()\nprint(m.bonus())',
              expectedOutputs: ['1000'],
              hint: 'class Manager(Employee):\n    def bonus(self):\n        return 1000'
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
              initialCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed =   # breed 값을 저장하세요\nd = Dog(\'초코\', \'푸들\')\nprint(d.name, d.breed)',
              expectedOutputs: ['초코 푸들'],
              hint: 'self.breed = breed'
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
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'동물이 소리를 냅니다\')\nclass Dog(Animal):\n    def sound(self):\n        super.sound()  # super 뒤에 괄호가 빠졌어요!\n        print(\'멍멍\')\nd = Dog()\nd.sound()',
              expectedOutputs: ['동물이 소리를 냅니다\n멍멍'],
              hint: 'super().sound() 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: 'super() 없이 오버라이딩하면 부모 기능이 실행 안 됨을 확인하세요.',
              initialCode: 'class Animal:\n    def sound(self):\n        print(\'동물 소리\')\nclass Dog(Animal):\n    def sound(self):\n        super().sound()  # 이 줄을 지워야 \'멍멍\'만 출력돼요\n        print(\'멍멍\')\nd = Dog()\nd.sound()',
              expectedOutputs: ['멍멍'],
              hint: 'super().sound() 줄을 삭제하세요.'
            },
            {
              type: 'quiz_code',
              content: '3단계 상속에서 super()가 바로 위 부모를 호출하는지 확인하세요.',
              initialCode: 'class A:\n    def __init__(self):\n        print(\'A 초기화\')\nclass B(A):\n    def __init__(self):\n        super().  ()  # 부모의 초기화 메서드를 호출하세요\n        print(\'B 초기화\')\nb = B()',
              expectedOutputs: ['A 초기화\nB 초기화'],
              hint: 'super().__init__()'
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
              initialCode: 'class Shape:\n    def describe(self):\n        return \'도형\'\n# Circle이 Shape을 상속받아 describe()를 오버라이딩하면서 super().describe()의 결과 뒤에 \' - 원\'을 덧붙이도록 작성하세요\nc = Circle()\nprint(c.describe())',
              expectedOutputs: ['도형 - 원'],
              hint: 'class Circle(Shape):\n    def describe(self):\n        return super().describe() + \' - 원\''
            },
            {
              type: 'quiz_code',
              content: '여러 속성을 가진 부모를 super()로 초기화하고 자식이 메서드도 오버라이딩하세요.',
              initialCode: 'class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    def info(self):\n        return self.name + \': \' + str(self.salary)\n# Manager가 Employee를 상속받아 team_size를 추가로 저장하고, info()에 \'팀원 N명\'을 덧붙이도록 오버라이딩하세요\nm = Manager(\'김부장\', 5000, 10)\nprint(m.info())',
              expectedOutputs: ['김부장: 5000, 팀원 10명'],
              hint: 'class Manager(Employee):\n    def __init__(self, name, salary, team_size):\n        super().__init__(name, salary)\n        self.team_size = team_size\n    def info(self):\n        return super().info() + \', 팀원 \' + str(self.team_size) + \'명\''
            },
            {
              type: 'quiz_code',
              content: 'super()를 이용해 부모의 계산 로직을 재사용하는 자식 메서드를 만드세요.',
              initialCode: 'class Discount:\n    def apply(self, price):\n        return price * 0.9\n# VipDiscount가 Discount를 상속받아 apply()에서 super().apply() 결과에 0.9를 한 번 더 곱하도록 오버라이딩하세요\nprint(VipDiscount().apply(1000))',
              expectedOutputs: ['810.0'],
              hint: 'class VipDiscount(Discount):\n    def apply(self, price):\n        base = super().apply(price)\n        return base * 0.9'
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
              initialCode: 'class Animal:\n    def __init__(self, name=\'이름없음\'):\n        self.name = name\n# Dog가 Animal을 상속받아 __init__에서 super()로 \'초코\'라는 이름을 넘기도록 작성하세요\nd = Dog()\nprint(d.name)',
              expectedOutputs: ['초코'],
              hint: 'class Dog(Animal):\n    def __init__(self):\n        super().__init__(\'초코\')'
            },
            {
              type: 'quiz_code',
              content: '부모의 검증 로직을 재사용하면서 추가 검증을 더하는 메서드를 만드세요.',
              initialCode: 'class Validator:\n    def check(self, n):\n        if n < 0:\n            return False\n        return True\n# StrictValidator가 Validator를 상속받아 check()에서 super().check()도 만족하고 n이 100 이하인지까지 확인하도록 오버라이딩하세요\nprint(StrictValidator().check(150))',
              expectedOutputs: ['False'],
              hint: 'class StrictValidator(Validator):\n    def check(self, n):\n        if not super().check(n):\n            return False\n        return n <= 100'
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
              initialCode: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def __str__(self):\n        return self.name + \'(\' +   + \')\'  # age를 문자열로 바꿔 넣어보세요\np = Person(\'에그\', 5)\nprint(p)',
              expectedOutputs: ['에그(5)'],
              hint: 'str(self.age)'
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
              initialCode: 'class Cart:\n    def __init__(self, items):\n        self.items = items\n    def __len__(self):\n        return   (self.items)  # 개수를 세는 함수를 넣어보세요\nc = Cart([\'사과\', \'바나나\'])\nprint(len(c))',
              expectedOutputs: ['2'],
              hint: 'len(self.items)'
            },
            {
              type: 'quiz_code',
              content: '__add__로 두 객체를 더할 수 있게 만드세요.',
              initialCode: 'class Point:\n    def __init__(self, x):\n        self.x = x\n    def __add__(self, other):\n        return Point(self.x - other.x).x  # 뺄셈이 아니라 덧셈이어야 해요!\np1 = Point(3)\np2 = Point(4)\nprint(p1 + p2)',
              expectedOutputs: ['7'],
              hint: 'self.x + other.x 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '__eq__를 정의해 두 객체가 같은지 비교하세요.',
              initialCode: 'class Point:\n    def __init__(self, x):\n        self.x = x\n    def __eq__(self, other):\n        return self.x   other.x  # 비교 연산자를 채워보세요\np1 = Point(3)\np2 = Point(3)\nprint(p1 == p2)',
              expectedOutputs: ['True'],
              hint: 'self.x == other.x'
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
              initialCode: 'class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n    def __str__(self):\n        return self.name + \': \' + str(self.price) + \'원\'\n    # 할인된 가격을 반환하는 discount(rate) 메서드를 작성하세요\np = Product(\'사과\', 1000)\nprint(p)\nprint(p.discount(0.1))',
              expectedOutputs: ['사과: 1000원\n900.0'],
              hint: 'def discount(self, rate):\n        return self.price * (1 - rate)'
            },
            {
              type: 'quiz_code',
              content: '__len__과 __str__을 모두 정의한 클래스를 만들어 각각 확인하세요.',
              initialCode: 'class Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    def __len__(self):\n        return len(self.songs)\n    # 곡 개수를 포함한 문자열을 반환하는 __str__을 작성하세요 (예: \'재생목록(3곡)\')\np = Playlist([\'A\', \'B\', \'C\'])\nprint(p)\nprint(len(p))',
              expectedOutputs: ['재생목록(3곡)\n3'],
              hint: 'def __str__(self):\n        return \'재생목록(\' + str(len(self.songs)) + \'곡)\''
            },
            {
              type: 'quiz_code',
              content: '__add__로 커스텀 덧셈 규칙을 만들어보세요 (좌표 더하기).',
              initialCode: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __str__(self):\n        return \'(\' + str(self.x) + \', \' + str(self.y) + \')\'\n    # x와 y를 각각 더한 새 Point를 반환하는 __add__를 작성하세요\np1 = Point(1, 2)\np2 = Point(3, 4)\nprint(p1 + p2)',
              expectedOutputs: ['(4, 6)'],
              hint: 'def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)'
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
              initialCode: 'class Item:\n    def __init__(self, name):\n        self.name = name\n    # name이 같으면 같은 객체로 취급하도록 __eq__를 작성하세요\nitems = [Item(\'사과\'), Item(\'바나나\')]\ntarget = Item(\'바나나\')\nprint(target in items)',
              expectedOutputs: ['True'],
              hint: 'def __eq__(self, other):\n        return self.name == other.name'
            },
            {
              type: 'quiz_code',
              content: '__str__, __len__, __add__를 모두 갖춘 클래스를 만들어 종합적으로 테스트하세요.',
              initialCode: 'class Cart:\n    def __init__(self, items):\n        self.items = items\n    def __len__(self):\n        return len(self.items)\n    def __str__(self):\n        return \'장바구니(\' + str(len(self.items)) + \'개)\'\n    # 두 장바구니를 합치는 __add__를 작성하세요\nc1 = Cart([\'사과\'])\nc2 = Cart([\'바나나\', \'포도\'])\nmerged = c1 + c2\nprint(merged)',
              expectedOutputs: ['장바구니(3개)'],
              hint: 'def __add__(self, other):\n        return Cart(self.items + other.items)'
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
              initialCode: 'class Dog:\n    species =   # \'개\' 를 넣어보세요\n    def __init__(self, name):\n        self.name = name\nd = Dog(\'초코\')\nprint(d.species, d.name)',
              expectedOutputs: ['개 초코'],
              hint: 'species = \'개\''
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
              initialCode: 'class Dog:\n    species = \'개\'\nd = Dog()\nprint(  .species, d.species)  # 클래스 이름을 넣어보세요',
              expectedOutputs: ['개 개'],
              hint: 'Dog.species'
            },
            {
              type: 'quiz_code',
              content: '인스턴스 변수가 클래스 변수와 같은 이름일 때 인스턴스 변수가 우선되는지 확인하세요.',
              initialCode: 'class Dog:\n    species = \'개\'\nd = Dog()\nd.species =   # \'강아지\' 를 넣어 인스턴스 변수를 만들어보세요\nprint(d.species)',
              expectedOutputs: ['강아지'],
              hint: '\'강아지\''
            },
            {
              type: 'quiz_code',
              content: '클래스 변수를 카운터로 활용해 생성된 객체 수를 추적하세요.',
              initialCode: 'class User:\n    total = 0\n    def __init__(self, name):\n        self.name = name\n        User.total +=   \nUser(\'철수\')\nUser(\'영희\')\nUser(\'민수\')\nprint(User.total)',
              expectedOutputs: ['3'],
              hint: '1'
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
              initialCode: 'class Dog:\n    species = \'개\'\nd = Dog()\nd.species = \'강아지\'\n# 클래스 변수 species를 \'고양이\'로 바꾸는 코드를 작성하세요\nprint(d.species)',
              expectedOutputs: ['강아지'],
              hint: 'Dog.species = \'고양이\''
            },
            {
              type: 'quiz_code',
              content: '클래스 변수로 최대 체력 상수를 만들고 인스턴스마다 현재 체력을 관리하세요.',
              initialCode: 'class Character:\n    max_hp = 100\n    # __init__에서 hp를 max_hp로 초기화하세요\nc = Character()\nc.hp -= 30\nprint(c.hp, Character.max_hp)',
              expectedOutputs: ['70 100'],
              hint: 'def __init__(self):\n        self.hp = Character.max_hp'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수를 활용해 태어난 순서(번호)를 자동으로 부여하세요.',
              initialCode: 'class Ticket:\n    next_id = 1\n    # __init__에서 self.id에 next_id를 저장하고, next_id를 1 증가시키세요\nt1 = Ticket()\nt2 = Ticket()\nprint(t1.id, t2.id)',
              expectedOutputs: ['1 2'],
              hint: 'def __init__(self):\n        self.id = Ticket.next_id\n        Ticket.next_id += 1'
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
              initialCode: 'class Product:\n    tax_rate = 0.1\n    def __init__(self, price):\n        self.price = price\n    # 세금이 포함된 가격을 반환하는 price_with_tax()를 작성하세요\np1 = Product(1000)\np2 = Product(2000)\nprint(p1.price_with_tax(), p2.price_with_tax())',
              expectedOutputs: ['1100.0 2200.0'],
              hint: 'def price_with_tax(self):\n        return self.price * (1 + Product.tax_rate)'
            },
            {
              type: 'quiz_code',
              content: '클래스 변수를 활용해 전체 인스턴스 목록을 관리하는 클래스를 만드세요.',
              initialCode: 'class Player:\n    all_players = []\n    # __init__에서 name을 저장하고 all_players 리스트에 추가하세요\nPlayer(\'철수\')\nPlayer(\'영희\')\nprint(Player.all_players)',
              expectedOutputs: ['[\'철수\', \'영희\']'],
              hint: 'def __init__(self, name):\n        self.name = name\n        Player.all_players.append(name)'
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
              initialCode: 'f = open(\'num.txt\', \'w\')\nf.write(  )  # 저장할 숫자를 문자열로 채워보세요\nf.close()\nf2 = open(\'num.txt\', \'r\')\nprint(f2.read())\nf2.close()',
              expectedOutputs: ['100'],
              hint: '\'100\''
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
              initialCode: 'f = open(\'b.txt\', \'w\')\nf.write(\'hello\')\nf.close()\nf2 = open(\'b.txt\', \'r\')\ncontent = f2.read()\nf2.close()\nprint(  (content))  # 길이를 구하는 함수를 넣어보세요',
              expectedOutputs: ['5'],
              hint: 'len(content)'
            },
            {
              type: 'quiz_code',
              content: '파일을 두 번 write한 뒤 읽어 \'w\' 모드의 동작을 확인하세요.',
              initialCode: 'f = open(\'c.txt\', \'w\')\nf.write(\'첫줄\')\nf.close()\nf = open(\'c.txt\', \'a\')  # \'w\' 모드가 아니라 이어쓰기가 되어버려요!\nf.write(\'둘째줄\')\nf.close()\nf2 = open(\'c.txt\', \'r\')\nprint(f2.read())\nf2.close()',
              expectedOutputs: ['둘째줄'],
              hint: 'open(\'c.txt\', \'w\') 로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '파일 내용을 읽어 문자열 메서드로 처리해보세요 (대문자 변환).',
              initialCode: 'f = open(\'d.txt\', \'w\')\nf.write(\'hello\')\nf.close()\nf2 = open(\'d.txt\', \'r\')\nprint(f2.read().  ())  # 대문자로 바꾸는 메서드를 넣어보세요\nf2.close()',
              expectedOutputs: ['HELLO'],
              hint: 'upper()'
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
              initialCode: '# try 블록에서 없는 파일을 열고, FileNotFoundError를 except로 처리해 \'파일이 없습니다\'를 출력하세요\nf = open(\'없는파일.txt\', \'r\')',
              expectedOutputs: ['파일이 없습니다'],
              hint: 'try:\n    f = open(\'없는파일.txt\', \'r\')\nexcept FileNotFoundError:\n    print(\'파일이 없습니다\')'
            },
            {
              type: 'quiz_code',
              content: '파일에 여러 줄을 쓰고 읽어와 줄 수를 세보세요.',
              initialCode: 'f = open(\'e.txt\', \'w\')\nf.write(\'첫줄\\n둘째줄\\n셋째줄\')\nf.close()\nf2 = open(\'e.txt\', \'r\')\ncontent = f2.read()\nf2.close()\n# content를 줄바꿈 기준으로 나눈 뒤 개수를 출력하세요',
              expectedOutputs: ['3'],
              hint: 'print(len(content.split(\'\\n\')))'
            },
            {
              type: 'quiz_code',
              content: '파일 내용에 특정 단어가 포함되어 있는지 확인하세요.',
              initialCode: 'f = open(\'f.txt\', \'w\')\nf.write(\'파이썬은 재미있다\')\nf.close()\nf2 = open(\'f.txt\', \'r\')\ncontent = f2.read()\nf2.close()\n# content에 \'재미있다\'가 포함되어 있는지 출력하세요',
              expectedOutputs: ['True'],
              hint: 'print(\'재미있다\' in content)'
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
              initialCode: 'f = open(\'g.txt\', \'w\')\nf.write(\'42\')\nf.close()\nf2 = open(\'g.txt\', \'r\')\n# 파일 내용을 정수로 변환해 num 변수에 저장하세요\nf2.close()\nprint(num + 8)',
              expectedOutputs: ['50'],
              hint: 'num = int(f2.read())'
            },
            {
              type: 'quiz_code',
              content: '파일에서 읽은 내용을 함수로 안전하게 처리해보세요.',
              initialCode: '# 파일을 열어 내용을 읽고 닫은 뒤 반환하는 read_file(name) 함수를 작성하세요\nf = open(\'h.txt\', \'w\')\nf.write(\'테스트\')\nf.close()\nprint(read_file(\'h.txt\'))',
              expectedOutputs: ['테스트'],
              hint: 'def read_file(name):\n    f = open(name, \'r\')\n    content = f.read()\n    f.close()\n    return content'
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
              initialCode: 'with open(\'t3.txt\', \'w\') as f:\n    f.write(\'hi\')\nprint(f.  )  # 파일이 닫혔는지 확인하는 속성을 넣어보세요',
              expectedOutputs: ['True'],
              hint: 'f.closed'
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
              initialCode: 'with open(\'t4.txt\', \'w\') as f:\n    f.write(\'안녕하세요\')\nwith open(\'t4_copy.txt\', \'r\') as f:  # 파일 이름이 달라요! 위에서 쓴 파일명과 맞추세요\n    print(f.read())',
              expectedOutputs: ['안녕하세요'],
              hint: 'open(\'t4.txt\', \'r\') 로 파일명을 맞추세요.'
            },
            {
              type: 'quiz_code',
              content: 'with문 안에서 에러가 나도 파일이 닫히는지 확인하세요.',
              initialCode: 'with open(\'t5.txt\', \'w\') as f:\n    f.write(\'data\')\ntry:\n    with open(\'t5.txt\', \'r\') as f:\n        result = 1 / 0\nexcept ZeroDivisionError:\n    pass\nprint(f.  )  # 파일이 닫혔는지 확인하는 속성을 넣어보세요',
              expectedOutputs: ['True'],
              hint: 'f.closed'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 연 파일의 내용을 처리해 출력하세요.',
              initialCode: 'with open(\'t6.txt\', \'w\') as f:\n    f.write(\'hello world\')\nwith open(\'t6.txt\', \'r\') as f:\n    words = f.read().split(\' \')\n    print(  (words))  # 단어 개수를 세는 함수를 넣어보세요',
              expectedOutputs: ['2'],
              hint: 'len(words)'
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
              initialCode: 'with open(\'t7.txt\', \'w\') as f:\n    f.write(\'1,2,3\')\n# t7.txt를 읽어 콤마로 나눈 뒤 정수로 변환해 합계를 total에 담아 출력하세요',
              expectedOutputs: ['6'],
              hint: 'with open(\'t7.txt\', \'r\') as f:\n    nums = f.read().split(\',\')\n    total = 0\n    for n in nums:\n        total += int(n)\n    print(total)'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일을 함수 안에서 안전하게 처리하는 코드를 작성하세요.',
              initialCode: '# with문으로 파일에 내용을 쓰고 다시 읽어서 반환하는 save_and_load(name, content) 함수를 작성하세요\nprint(save_and_load(\'t8.txt\', \'완료\'))',
              expectedOutputs: ['완료'],
              hint: 'def save_and_load(name, content):\n    with open(name, \'w\') as f:\n        f.write(content)\n    with open(name, \'r\') as f:\n        return f.read()'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일에 여러 줄을 쓰고 줄 단위로 나눠 출력하세요.',
              initialCode: 'with open(\'t9.txt\', \'w\') as f:\n    f.write(\'가\\n나\\n다\')\n# t9.txt를 읽어 줄바꿈 기준으로 나눈 뒤 각 줄을 출력하세요',
              expectedOutputs: ['다'],
              hint: 'with open(\'t9.txt\', \'r\') as f:\n    for line in f.read().split(\'\\n\'):\n        print(line)'
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
              initialCode: 'with open(\'a10.txt\', \'w\') as f:\n    f.write(\'AAA\')\nwith open(\'b10.txt\', \'w\') as f:\n    f.write(\'BBB\')\n# a10.txt와 b10.txt를 동시에 열어 내용을 합쳐 출력하세요 (with ... , ... 형태)',
              expectedOutputs: ['AAABBB'],
              hint: 'with open(\'a10.txt\') as f1, open(\'b10.txt\') as f2:\n    print(f1.read() + f2.read())'
            },
            {
              type: 'quiz_code',
              content: 'with문으로 파일을 안전하게 처리하며 예외 상황(없는 파일)도 함께 다루세요.',
              initialCode: '# with문으로 없는파일2.txt를 열려다 FileNotFoundError가 나면 \'파일 없음\'을 출력하세요',
              expectedOutputs: ['파일 없음'],
              hint: 'try:\n    with open(\'없는파일2.txt\', \'r\') as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print(\'파일 없음\')'
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
              initialCode: 'with open(\'w3.txt\', \'w\') as f:\n    f.write(\'원래내용\')\nwith open(\'w3.txt\', \'a\') as f:  # \'a\'가 아니라 \'w\'로 덮어써야 해요!\n    f.write(\'새내용\')\nwith open(\'w3.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['새내용'],
              hint: 'open(\'w3.txt\', \'w\') 로 고치세요.'
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
              initialCode: 'with open(\'w4.txt\', \'w\') as f:\n    f.write(  (100))  # 숫자를 문자열로 바꾸는 함수를 넣어보세요\nwith open(\'w4.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['100'],
              hint: 'str'
            },
            {
              type: 'quiz_code',
              content: '여러 줄을 이어쓰기 모드로 추가해보세요.',
              initialCode: 'with open(\'w5.txt\', \'w\') as f:\n    f.write(\'1번\')\nwith open(\'w5.txt\', \'  \') as f:  # 이어쓰기 모드를 채워보세요\n    f.write(\'\\n2번\')\nwith open(\'w5.txt\', \'a\') as f:\n    f.write(\'\\n3번\')\nwith open(\'w5.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['1번\n2번\n3번'],
              hint: '\'a\''
            },
            {
              type: 'quiz_code',
              content: '리스트의 값을 한 줄씩 파일에 써보세요.',
              initialCode: 'items = [\'사과\', \'바나나\', \'포도\']\nwith open(\'w6.txt\', \'w\') as f:\n    for item in items:\n        f.write(item +   )  # 줄바꿈 문자를 채워보세요\nwith open(\'w6.txt\', \'r\') as f:\n    print(f.read().strip())',
              expectedOutputs: ['사과\n바나나\n포도'],
              hint: '\'\\n\''
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
              initialCode: 'data = {\'name\': \'에그\', \'age\': 5}\n# data를 문자열로 바꿔 w7.txt에 저장하고 다시 읽어 출력하세요',
              expectedOutputs: ['{\'name\': \'에그\', \'age\': 5}'],
              hint: 'with open(\'w7.txt\', \'w\') as f:\n    f.write(str(data))\nwith open(\'w7.txt\', \'r\') as f:\n    print(f.read())'
            },
            {
              type: 'quiz_code',
              content: '함수로 로그를 이어쓰는 코드를 작성해보세요.',
              initialCode: '# w8.txt에 메시지를 이어쓰는 log(msg) 함수를 작성하세요\nlog(\'시작\')\nlog(\'완료\')\nwith open(\'w8.txt\', \'r\') as f:\n    print(f.read().strip())',
              expectedOutputs: ['시작\n완료'],
              hint: 'def log(msg):\n    with open(\'w8.txt\', \'a\') as f:\n        f.write(msg + \'\\n\')'
            },
            {
              type: 'quiz_code',
              content: '1부터 5까지의 숫자를 파일에 한 줄씩 쓰고 합계를 다시 계산해보세요.',
              initialCode: 'with open(\'w9.txt\', \'w\') as f:\n    for i in range(1, 6):\n        f.write(str(i) + \'\\n\')\n# w9.txt를 읽어 각 줄을 정수로 변환한 뒤 합계를 total에 담아 출력하세요',
              expectedOutputs: ['15'],
              hint: 'with open(\'w9.txt\', \'r\') as f:\n    nums = f.read().strip().split(\'\\n\')\n    total = 0\n    for n in nums:\n        total += int(n)\nprint(total)'
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
              initialCode: 'with open(\'w10.txt\', \'w\') as f:\n    f.write(\'=== 로그 ===\\n\')\n# w10.txt에 이어쓰기 모드로 \'내용1\'과 \'내용2\'를 순서대로 추가하세요\nwith open(\'w10.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['=== 로그 ===\n내용1\n내용2'],
              hint: 'with open(\'w10.txt\', \'a\') as f:\n    f.write(\'내용1\\n\')\nwith open(\'w10.txt\', \'a\') as f:\n    f.write(\'내용2\')'
            },
            {
              type: 'quiz_code',
              content: '함수로 파일 초기화(w) 후 여러 번 추가(a)하는 유틸리티를 만드세요.',
              initialCode: '# 파일을 빈 내용으로 초기화하는 init_file(name)과, 줄을 추가하는 append_line(name, text) 함수를 작성하세요\ninit_file(\'w11.txt\')\nappend_line(\'w11.txt\', \'A\')\nappend_line(\'w11.txt\', \'B\')\nwith open(\'w11.txt\', \'r\') as f:\n    print(f.read().strip())',
              expectedOutputs: ['A\nB'],
              hint: 'def init_file(name):\n    with open(name, \'w\') as f:\n        f.write(\'\')\ndef append_line(name, text):\n    with open(name, \'a\') as f:\n        f.write(text + \'\\n\')'
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
              initialCode: 'with open(\'l3.txt\', \'w\') as f:\n    f.write(\'A\\nB\\nC\')\nwith open(\'l3.txt\', \'r\') as f:\n    for line in f:\n        print(line.  ())  # 줄바꿈 문자를 제거하는 메서드를 넣어보세요',
              expectedOutputs: ['A\nB\nC'],
              hint: 'strip()'
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
              initialCode: 'with open(\'l4.txt\', \'w\') as f:\n    f.write(\'하나\\n둘\\n\')\nwith open(\'l4.txt\', \'r\') as f:\n    lines = f.readlines()\n    print(lines[0].  ())  # 줄바꿈 문자를 제거하는 메서드를 넣어보세요',
              expectedOutputs: ['하나'],
              hint: 'strip()'
            },
            {
              type: 'quiz_code',
              content: '파일의 줄 수를 세어 출력하세요.',
              initialCode: 'with open(\'l5.txt\', \'w\') as f:\n    f.write(\'1\\n2\\n3\\n4\')\nwith open(\'l5.txt\', \'r\') as f:\n    count = 0\n    for line in f:\n        count +=   \n    print(count)',
              expectedOutputs: ['4'],
              hint: '1'
            },
            {
              type: 'quiz_code',
              content: '파일의 각 줄을 숫자로 변환해 합계를 구하세요.',
              initialCode: 'with open(\'l6.txt\', \'w\') as f:\n    f.write(\'10\\n20\\n30\')\nwith open(\'l6.txt\', \'r\') as f:\n    total = 0\n    for line in f:\n        total +=   (line.strip())  # 문자열을 정수로 바꾸는 함수를 넣어보세요\nprint(total)',
              expectedOutputs: ['60'],
              hint: 'int'
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
              initialCode: 'with open(\'l7.txt\', \'w\') as f:\n    f.write(\'처음\\n중간\\n마지막\')\nwith open(\'l7.txt\', \'r\') as f:\n    lines = f.readlines()\n    # lines에서 마지막 줄을 출력하세요',
              expectedOutputs: ['마지막'],
              hint: 'print(lines[-1])'
            },
            {
              type: 'quiz_code',
              content: '특정 단어가 포함된 줄만 골라 출력하세요.',
              initialCode: 'with open(\'l8.txt\', \'w\') as f:\n    f.write(\'사과 좋아\\n바나나 싫어\\n포도 좋아\')\nwith open(\'l8.txt\', \'r\') as f:\n    for line in f:\n        # line에 \'좋아\'가 포함되어 있으면 출력하세요\n        pass',
              expectedOutputs: ['포도 좋아'],
              hint: 'if \'좋아\' in line:\n            print(line.strip())'
            },
            {
              type: 'quiz_code',
              content: '파일의 각 줄에 순번을 붙여 출력하세요.',
              initialCode: 'with open(\'l9.txt\', \'w\') as f:\n    f.write(\'가\\n나\\n다\')\nwith open(\'l9.txt\', \'r\') as f:\n    lines = f.readlines()\n    # 각 줄 앞에 \'순번. \' 형태로 붙여 출력하세요 (예: \'1. 가\')',
              expectedOutputs: ['3. 다'],
              hint: 'for i in range(len(lines)):\n        print(str(i + 1) + \'. \' + lines[i].strip())'
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
              initialCode: 'with open(\'l10.txt\', \'w\') as f:\n    f.write(\'가\\n\\n나\\n다\')\nwith open(\'l10.txt\', \'r\') as f:\n    count = 0\n    # 빈 줄이 아닌 경우에만 count를 증가시키세요\nprint(count)',
              expectedOutputs: ['3'],
              hint: 'for line in f:\n        if line.strip() != \'\':\n            count += 1'
            },
            {
              type: 'quiz_code',
              content: '파일에서 가장 긴 줄을 찾아 출력하세요.',
              initialCode: 'with open(\'l11.txt\', \'w\') as f:\n    f.write(\'짧다\\n조금더길다\\n중간\')\nwith open(\'l11.txt\', \'r\') as f:\n    lines = f.readlines()\n    # lines 중 가장 긴 줄(공백 제거 기준)을 longest에 담으세요\nprint(longest.strip())',
              expectedOutputs: ['조금더길다'],
              hint: 'longest = max(lines, key=lambda l: len(l.strip()))'
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
              initialCode: 'import csv\nimport io\ndata = \'이름,나이\\n에그,5\\n치킨,3\'\nreader = csv.reader(io.StringIO(data))\nfor row in   :  # 순회할 대상을 넣어보세요\n    print(row)',
              expectedOutputs: ['[\'치킨\', \'3\']'],
              hint: 'reader'
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
              initialCode: 'import csv\nimport io\ndata = \'이름,나이\\n에그,5\'\nreader = csv.reader(io.StringIO(data))\nheader =   (reader)  # 첫 줄만 가져오는 함수를 넣어보세요\nprint(header)',
              expectedOutputs: ['[\'이름\', \'나이\']'],
              hint: 'next'
            },
            {
              type: 'quiz_code',
              content: 'CSV writer로 여러 줄을 써보세요.',
              initialCode: 'import csv\nimport io\noutput = io.StringIO()\nwriter = csv.writer(output)\nwriter.writerow([\'사과\', 1000])\nwriter.  ([\'바나나\', 500])  # 한 줄을 쓰는 메서드를 넣어보세요\nprint(output.getvalue().strip())',
              expectedOutputs: ['사과,1000\n바나나,500'],
              hint: 'writerow'
            },
            {
              type: 'quiz_code',
              content: 'CSV에서 헤더를 건너뛰고 데이터만 순회하세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,85\'\nreader = csv.reader(io.StringIO(data))\n  (reader)  # 헤더를 건너뛰는 함수를 넣어보세요\nfor row in reader:\n    print(row[0] + \': \' + row[1])',
              expectedOutputs: ['철수: 90\n영희: 85'],
              hint: 'next'
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
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,85\'\nreader = csv.reader(io.StringIO(data))\nnext(reader)\n# 각 행의 점수(두번째 열)를 정수로 변환해 total에 더하세요\nprint(total)',
              expectedOutputs: ['175'],
              hint: 'total = 0\nfor row in reader:\n    total += int(row[1])'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 형태로 CSV를 읽는 DictReader를 사용해보세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\'\n# DictReader로 data를 읽어 각 행의 \'이름\'과 \'점수\'를 출력하세요',
              expectedOutputs: ['철수 90'],
              hint: 'reader = csv.DictReader(io.StringIO(data))\nfor row in reader:\n    print(row[\'이름\'], row[\'점수\'])'
            },
            {
              type: 'quiz_code',
              content: 'DictWriter로 딕셔너리 데이터를 CSV로 써보세요.',
              initialCode: 'import csv\nimport io\noutput = io.StringIO()\n# fieldnames가 [\'이름\', \'나이\']인 DictWriter로 헤더를 쓰고 {\'이름\': \'에그\', \'나이\': 5}를 한 줄 쓰세요\nprint(output.getvalue().strip())',
              expectedOutputs: ['이름,나이\n에그,5'],
              hint: 'writer = csv.DictWriter(output, fieldnames=[\'이름\', \'나이\'])\nwriter.writeheader()\nwriter.writerow({\'이름\': \'에그\', \'나이\': 5})'
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
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,70\\n민수,95\'\nreader = csv.DictReader(io.StringIO(data))\n# 점수가 90 이상인 행의 이름만 출력하세요',
              expectedOutputs: ['철수\n민수'],
              hint: 'for row in reader:\n    if int(row[\'점수\']) >= 90:\n        print(row[\'이름\'])'
            },
            {
              type: 'quiz_code',
              content: 'CSV로 여러 학생의 평균 점수를 계산해보세요.',
              initialCode: 'import csv\nimport io\ndata = \'이름,점수\\n철수,90\\n영희,80\\n민수,70\'\nreader = csv.DictReader(io.StringIO(data))\ntotal = 0\ncount = 0\n# 각 행의 점수를 total에 더하고 count를 늘리세요\nprint(total / count)',
              expectedOutputs: ['80.0'],
              hint: 'for row in reader:\n    total += int(row[\'점수\'])\n    count += 1'
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
              initialCode: 'import math\nprint(math.  (25))  # 제곱근 함수를 넣어보세요',
              expectedOutputs: ['5.0'],
              hint: 'sqrt'
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
              initialCode: 'import math\nprint(math.floor(3.7), math.  (3.2))  # 올림 함수를 넣어보세요',
              expectedOutputs: ['3 4'],
              hint: 'ceil'
            },
            {
              type: 'quiz_code',
              content: '모듈에 별명을 붙여 사용해보세요.',
              initialCode: 'import math as m\nprint(math.sqrt(9))  # 별명 m을 써야 해요!',
              expectedOutputs: ['3.0'],
              hint: 'm.sqrt(9)'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈의 여러 함수를 함께 사용해보세요.',
              initialCode: 'import math\nprint(math.  (2, 3))  # 거듭제곱 함수를 넣어보세요',
              expectedOutputs: ['8.0'],
              hint: 'pow'
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
              initialCode: 'import math\nradius = 3\n# math.pi와 radius를 이용해 원의 넓이를 출력하세요',
              expectedOutputs: ['28.274333882308138'],
              hint: 'print(math.pi * radius ** 2)'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈로 절댓값을 구하세요.',
              initialCode: 'import math\n# math 모듈로 -7의 절댓값을 출력하세요',
              expectedOutputs: ['7.0'],
              hint: 'print(math.fabs(-7))'
            },
            {
              type: 'quiz_code',
              content: '두 모듈(math, random)을 함께 import해보세요.',
              initialCode: 'import math\n# random 모듈도 import하고 seed를 1로 고정하세요\nrandom.seed(1)\nprint(math.sqrt(4) == 2.0)',
              expectedOutputs: ['True'],
              hint: 'import random'
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
              initialCode: 'import math\n# math.pi와 반지름 r을 이용해 원의 넓이를 반환하는 circle_area(r) 함수를 작성하세요\nprint(round(circle_area(2), 2))',
              expectedOutputs: ['12.57'],
              hint: 'def circle_area(r):\n    return math.pi * r ** 2'
            },
            {
              type: 'quiz_code',
              content: 'math 모듈로 로그와 지수를 함께 사용하는 계산을 해보세요.',
              initialCode: 'import math\n# math.log와 math.e를 이용해 자연로그값이 1.0인지 확인하세요',
              expectedOutputs: ['1.0'],
              hint: 'print(math.log(math.e))'
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
              initialCode: 'from math import sqrt,   \nprint(sqrt(9), pow(2, 3))  # pow도 함께 가져와야 해요',
              expectedOutputs: ['3.0 8.0'],
              hint: 'pow'
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
              initialCode: 'from math import sqrt as   \nprint(s(25))  # 별명을 넣어보세요',
              expectedOutputs: ['5.0'],
              hint: 's'
            },
            {
              type: 'quiz_code',
              content: 'random 모듈에서 seed와 randint를 가져와 사용하세요.',
              initialCode: 'from random import seed, randint\nseed(1)\nn =   (1, 10)  # 1~10 사이의 정수를 뽑는 함수를 넣어보세요\nprint(1 <= n <= 10)',
              expectedOutputs: ['True'],
              hint: 'randint'
            },
            {
              type: 'quiz_code',
              content: 'from import로 가져온 함수를 다른 함수 안에서 사용하세요.',
              initialCode: 'from math import   \ndef hypotenuse(a, b):\n    return sqrt(a ** 2 + b ** 2)\nprint(hypotenuse(3, 4))',
              expectedOutputs: ['5.0'],
              hint: 'sqrt'
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
              initialCode: '# math에서 pi와 sqrt를 각각 from import 하세요\nprint(round(pi, 2), sqrt(4))',
              expectedOutputs: ['3.14 2.0'],
              hint: 'from math import pi\nfrom math import sqrt'
            },
            {
              type: 'quiz_code',
              content: 'import 방식과 from import 방식을 비교해보세요.',
              initialCode: '# math에서 sqrt를 from import해서 math.sqrt(16)과 같은 결과인지 비교하세요\nimport math',
              expectedOutputs: ['True'],
              hint: 'from math import sqrt\nprint(math.sqrt(16) == sqrt(16))'
            },
            {
              type: 'quiz_code',
              content: 'from math import *로 여러 기능을 한 번에 가져와보세요.',
              initialCode: '# math의 모든 기능을 한 번에 가져오세요\nprint(sqrt(16), pi > 3)',
              expectedOutputs: ['4.0 True'],
              hint: 'from math import *'
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
              initialCode: '# sqrt를 sq로, pow를 p로 별명 붙여 가져오세요\nprint(sq(4), p(2, 4))',
              expectedOutputs: ['2.0 16.0'],
              hint: 'from math import sqrt as sq, pow as p'
            },
            {
              type: 'quiz_code',
              content: 'from import한 함수로 피타고라스 정리를 활용한 함수를 만드세요.',
              initialCode: '# math에서 sqrt를 from import하고, 두 점 사이 거리를 구하는 distance(x1, y1, x2, y2) 함수를 작성하세요\nprint(distance(0, 0, 3, 4))',
              expectedOutputs: ['5.0'],
              hint: 'from math import sqrt\ndef distance(x1, y1, x2, y2):\n    return sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)'
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
              initialCode: 'import random\nn = random.random()\nprint(0 <= n <   )  # 상한값을 넣어보세요',
              expectedOutputs: ['True'],
              hint: '1'
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
              initialCode: 'import random\nrandom.seed(1)\na = random.randint(1, 100)\nrandom.  (1)  # 같은 시드를 다시 고정해보세요\nb = random.randint(1, 100)\nprint(a == b)',
              expectedOutputs: ['True'],
              hint: 'seed'
            },
            {
              type: 'quiz_code',
              content: 'random.randint로 뽑은 값이 정수 타입인지 확인하세요.',
              initialCode: 'import random\nn = random.randint(1, 6)\nprint(type(n).  )  # 타입 이름을 가져오는 속성을 넣어보세요',
              expectedOutputs: ['int'],
              hint: '__name__'
            },
            {
              type: 'quiz_code',
              content: '주사위를 10번 굴려도 모든 값이 1~6 범위 안인지 확인하세요.',
              initialCode: 'import random\nall_valid = True\nfor i in range(10):\n    n = random.randint(1, 6)\n    if not (1 <= n <=   ):  # 상한값을 넣어보세요\n        all_valid = False\nprint(all_valid)',
              expectedOutputs: ['True'],
              hint: '6'
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
              initialCode: 'import random\nnums = [1, 2, 3, 4, 5]\n# nums를 섞고 개수를 출력하세요',
              expectedOutputs: ['5'],
              hint: 'random.shuffle(nums)\nprint(len(nums))'
            },
            {
              type: 'quiz_code',
              content: 'random.shuffle 후에도 모든 원래 값이 리스트 안에 남아있는지 확인하세요.',
              initialCode: 'import random\nnums = [1, 2, 3]\n# nums를 섞고 정렬된 결과를 출력하세요',
              expectedOutputs: ['[1, 2, 3]'],
              hint: 'random.shuffle(nums)\nprint(sorted(nums))'
            },
            {
              type: 'quiz_code',
              content: 'random.sample로 리스트에서 중복 없이 2개를 뽑아 개수를 확인하세요.',
              initialCode: 'import random\nnums = [1, 2, 3, 4, 5]\n# nums에서 중복 없이 2개를 뽑아 picked에 담고 개수를 출력하세요',
              expectedOutputs: ['2'],
              hint: 'picked = random.sample(nums, 2)\nprint(len(picked))'
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
              initialCode: 'import random\nnums = [1, 2, 3, 4, 5]\n# nums에서 3개를 뽑아 모두 원본 리스트 안에 있는지 확인하세요',
              expectedOutputs: ['True'],
              hint: 'picked = random.sample(nums, 3)\nall_in = all(p in nums for p in picked)\nprint(all_in)'
            },
            {
              type: 'quiz_code',
              content: '주사위 두 개를 굴려 합이 2~12 사이인지 확인하는 함수를 만드세요.',
              initialCode: 'import random\n# 주사위 두 개(1~6)를 굴려 합을 반환하는 roll_two() 함수를 작성하세요\nresult = roll_two()\nprint(2 <= result <= 12)',
              expectedOutputs: ['True'],
              hint: 'def roll_two():\n    return random.randint(1, 6) + random.randint(1, 6)'
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
              initialCode: 'from datetime import datetime\nd1 = datetime(2024, 1, 10)\nd2 = datetime(2024, 1, 1)\ndiff = d1 - d2\nprint(diff.  )  # 일수를 나타내는 속성을 넣어보세요',
              expectedOutputs: ['9'],
              hint: 'days'
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
              initialCode: 'from datetime import datetime, timedelta\nd = datetime(2024, 1, 1)\nnew_d = d +   (days=10)  # timedelta를 넣어보세요\nprint(new_d.day)',
              expectedOutputs: ['11'],
              hint: 'timedelta'
            },
            {
              type: 'quiz_code',
              content: '날짜 객체를 원하는 형식의 문자열로 바꿔보세요.',
              initialCode: 'from datetime import datetime\nd = datetime(2024, 3, 5)\nprint(d.strftime(\'  \'))  # 연-월-일 형식을 채워보세요',
              expectedOutputs: ['2024-03-05'],
              hint: '\'%Y-%m-%d\''
            },
            {
              type: 'quiz_code',
              content: '두 날짜를 비교해 어느 쪽이 더 빠른지 확인하세요.',
              initialCode: 'from datetime import datetime\nd1 = datetime(2024, 1, 1)\nd2 = datetime(2024, 6, 1)\nprint(d1   d2)  # 비교 연산자를 채워보세요',
              expectedOutputs: ['True'],
              hint: '<'
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
              initialCode: 'from datetime import datetime\ntoday = datetime(2024, 1, 1)\nbirthday = datetime(2024, 1, 15)\n# 두 날짜의 차이(일수)를 출력하세요',
              expectedOutputs: ['14'],
              hint: 'diff = birthday - today\nprint(diff.days)'
            },
            {
              type: 'quiz_code',
              content: '날짜 객체에서 요일을 확인하세요 (weekday(): 월요일=0).',
              initialCode: 'from datetime import datetime\nd = datetime(2024, 1, 1)\n# d의 요일(weekday)을 출력하세요',
              expectedOutputs: ['0'],
              hint: 'print(d.weekday())'
            },
            {
              type: 'quiz_code',
              content: 'timedelta로 30일 뒤의 날짜를 계산해보세요.',
              initialCode: 'from datetime import datetime, timedelta\nd = datetime(2024, 1, 1)\n# d에서 30일 뒤 날짜를 \'YYYY-MM-DD\' 형식으로 출력하세요',
              expectedOutputs: ['2024-01-31'],
              hint: 'new_d = d + timedelta(days=30)\nprint(new_d.strftime(\'%Y-%m-%d\'))'
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
              initialCode: 'from datetime import datetime\nd1 = datetime(2024, 1, 1)\nd2 = datetime(2024, 1, 15)\n# 두 날짜의 차이를 주 단위로(7일 = 1주) 출력하세요',
              expectedOutputs: ['2'],
              hint: 'diff = d2 - d1\nprint(diff.days // 7)'
            },
            {
              type: 'quiz_code',
              content: '여러 날짜를 리스트로 만들어 가장 빠른 날짜를 찾아보세요.',
              initialCode: 'from datetime import datetime\ndates = [datetime(2024, 3, 1), datetime(2024, 1, 1), datetime(2024, 6, 1)]\n# dates 중 가장 빠른 날짜를 \'YYYY-MM-DD\' 형식으로 출력하세요',
              expectedOutputs: ['2024-01-01'],
              hint: 'print(min(dates).strftime(\'%Y-%m-%d\'))'
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
              initialCode: 'import os\nwith open(\'exists.txt\', \'w\') as f:\n    f.write(\'data\')\nprint(os.path.  (\'exists.txt\'))  # 존재 확인 함수를 넣어보세요',
              expectedOutputs: ['True'],
              hint: 'exists'
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
              initialCode: 'import os\nprint(os.path.exists(\'  \'))  # 없는 파일 이름을 넣어보세요',
              expectedOutputs: ['False'],
              hint: '\'없는파일_xyz.txt\''
            },
            {
              type: 'quiz_code',
              content: '파일 이름에서 확장자를 분리해보세요.',
              initialCode: 'import os\nname, ext = os.path.  (\'photo.png\')  # 확장자를 분리하는 함수를 넣어보세요\nprint(name, ext)',
              expectedOutputs: ['photo .png'],
              hint: 'splitext'
            },
            {
              type: 'quiz_code',
              content: '파일을 만들고 listdir()로 목록에 포함되는지 확인하세요.',
              initialCode: 'import os\nwith open(\'mylist.txt\', \'w\') as f:\n    f.write(\'data\')\nprint(\'mylist.txt\' in os.  ())  # 목록을 가져오는 함수를 넣어보세요',
              expectedOutputs: ['True'],
              hint: 'listdir'
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
              initialCode: 'import os\n# \'folder\', \'sub\', \'file.txt\'를 하나의 경로로 합쳐 출력하세요',
              expectedOutputs: ['folder/sub/file.txt'],
              hint: 'print(os.path.join(\'folder\', \'sub\', \'file.txt\'))'
            },
            {
              type: 'quiz_code',
              content: '파일의 기본 이름(basename)만 추출해보세요.',
              initialCode: 'import os\n# \'/some/folder/file.txt\'에서 파일 이름만 추출해 출력하세요',
              expectedOutputs: ['file.txt'],
              hint: 'print(os.path.basename(\'/some/folder/file.txt\'))'
            },
            {
              type: 'quiz_code',
              content: '디렉토리 경로(dirname)만 추출해보세요.',
              initialCode: 'import os\n# \'/some/folder/file.txt\'에서 디렉토리 경로만 추출해 출력하세요',
              expectedOutputs: ['/some/folder'],
              hint: 'print(os.path.dirname(\'/some/folder/file.txt\'))'
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
              initialCode: 'import os\n# \'newdir\' 디렉토리를 만들고(이미 있어도 에러 나지 않게) 존재 여부를 출력하세요',
              expectedOutputs: ['True'],
              hint: 'os.makedirs(\'newdir\', exist_ok=True)\nprint(os.path.exists(\'newdir\'))'
            },
            {
              type: 'quiz_code',
              content: '디렉토리를 만들고 그 안에 파일을 만들어 경로가 올바른지 확인하세요.',
              initialCode: 'import os\nos.makedirs(\'mydir\', exist_ok=True)\n# \'mydir\' 안에 \'note.txt\' 경로를 만들어 파일을 쓰고, 경로가 존재하는지 확인하세요',
              expectedOutputs: ['True'],
              hint: 'path = os.path.join(\'mydir\', \'note.txt\')\nwith open(path, \'w\') as f:\n    f.write(\'메모\')\nprint(os.path.exists(path))'
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
              initialCode: 'import re\nresult = re.findall(r\'  \', \'a1b22c333\')  # 숫자 패턴을 채워보세요\nprint(result)',
              expectedOutputs: ['[\'1\', \'22\', \'333\']'],
              hint: '\\d+'
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
              initialCode: 'import re\nresult = re.search(r\'\\d+\', \'hello1\')  # 숫자가 없는 문자열로 바꿔야 해요!\nprint(result)',
              expectedOutputs: ['None'],
              hint: '\'hello\'로 고치면 숫자가 없어 None이 됩니다.'
            },
            {
              type: 'quiz_code',
              content: 're.sub로 숫자를 \'#\'으로 바꿔보세요.',
              initialCode: 'import re\nresult = re.sub(r\'\\d+\',   , \'a1b22c333\')  # 바꿀 문자를 채워보세요\nprint(result)',
              expectedOutputs: ['a#b#c#'],
              hint: '\'#\''
            },
            {
              type: 'quiz_code',
              content: '이메일과 비슷한 간단한 패턴이 있는지 확인하세요.',
              initialCode: 'import re\nresult = re.search(r\'\\w+@  \', \'test@example\')  # 도메인 패턴을 채워보세요\nprint(result.group())',
              expectedOutputs: ['test@example'],
              hint: '\\w+'
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
              initialCode: 'import re\n# \'12345\'가 숫자로만 이루어졌는지 fullmatch로 확인하세요',
              expectedOutputs: ['True'],
              hint: 'result = re.fullmatch(r\'\\d+\', \'12345\')\nprint(result is not None)'
            },
            {
              type: 'quiz_code',
              content: '정규식으로 단어를 모두 찾아보세요.',
              initialCode: 'import re\n# \'hello world python\'에서 단어(\\w+)를 모두 찾아 리스트로 출력하세요',
              expectedOutputs: ['[\'hello\', \'world\', \'python\']'],
              hint: 'result = re.findall(r\'\\w+\', \'hello world python\')\nprint(result)'
            },
            {
              type: 'quiz_code',
              content: '문자열 시작이 특정 패턴인지 match로 확인하세요.',
              initialCode: 'import re\n# \'Hello World\'가 \'Hello\'로 시작하는지 match로 확인하세요',
              expectedOutputs: ['True'],
              hint: 'result = re.match(r\'Hello\', \'Hello World\')\nprint(result is not None)'
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
              initialCode: 'import re\nnums = re.findall(r\'\\d+\', \'a1b2c3\')\n# nums의 각 숫자를 정수로 변환해 total에 더하세요\nprint(total)',
              expectedOutputs: ['6'],
              hint: 'total = 0\nfor n in nums:\n    total += int(n)'
            },
            {
              type: 'quiz_code',
              content: '전화번호 형식(000-0000-0000)이 맞는지 확인하는 패턴을 만들어보세요.',
              initialCode: 'import re\n# \'010-1234-5678\'이 000-0000-0000 형식인지 fullmatch로 확인하세요',
              expectedOutputs: ['True'],
              hint: 'result = re.fullmatch(r\'\\d{3}-\\d{4}-\\d{4}\', \'010-1234-5678\')\nprint(result is not None)'
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
              initialCode: 'import re\nresult = re.findall(r\'[c]at\', \'cat bat rat\')  # 대괄호 안에 b도 포함해야 해요!\nprint(result)',
              expectedOutputs: ['[\'cat\', \'bat\']'],
              hint: 'r\'[cb]at\'로 고치세요.'
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
              initialCode: 'import re\nresult = re.search(r\'\\d \', \'가격 500원\')  # +를 넣어 하나 이상의 숫자를 찾아보세요\nprint(result.group())',
              expectedOutputs: ['500'],
              hint: '\\d+'
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
              initialCode: 'import re\nresult1 = re.fullmatch(r\'colour\', \'color\')  # u 뒤에 ?를 추가해야 둘 다 매치돼요!\nresult2 = re.fullmatch(r\'colour\', \'colour\')\nprint(result1 is not None, result2 is not None)',
              expectedOutputs: ['True True'],
              hint: 'r\'colou?r\'로 고치세요.'
            },
            {
              type: 'quiz_code',
              content: '^로 문자열이 특정 단어로 시작하는지 확인하세요.',
              initialCode: 'import re\nresult = re.match(r\'  Hello\', \'Hello World\')  # ^ 를 채워 시작 위치를 표시해보세요\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '^'
            },
            {
              type: 'quiz_code',
              content: '$로 문자열이 특정 단어로 끝나는지 확인하세요.',
              initialCode: 'import re\nresult = re.search(r\'World  \', \'Hello World\')  # $ 를 채워 끝 위치를 표시해보세요\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '$'
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
              initialCode: 'import re\n# \'010-1234\'에서 (\\d+)-(\\d+) 패턴으로 그룹 두 개를 추출해 각각 출력하세요',
              expectedOutputs: ['010 1234'],
              hint: 'result = re.search(r\'(\\d+)-(\\d+)\', \'010-1234\')\nprint(result.group(1), result.group(2))'
            },
            {
              type: 'quiz_code',
              content: '그룹 참조로 날짜 형식을 바꿔보세요 (YYYY-MM-DD -> MM/DD/YYYY).',
              initialCode: 'import re\n# \'2024-03-15\'를 (연)-(월)-(일) 그룹으로 잡아 \'월/일/연\' 순서로 바꿔 출력하세요',
              expectedOutputs: ['03/15/2024'],
              hint: 'result = re.sub(r\'(\\d{4})-(\\d{2})-(\\d{2})\', r\'\\2/\\3/\\1\', \'2024-03-15\')\nprint(result)'
            },
            {
              type: 'quiz_code',
              content: '{n}으로 정확한 반복 횟수를 지정해보세요 (우편번호 5자리).',
              initialCode: 'import re\n# \'12345\'가 숫자 5자리로만 이루어졌는지 fullmatch로 확인하세요',
              expectedOutputs: ['True'],
              hint: 'result = re.fullmatch(r\'\\d{5}\', \'12345\')\nprint(result is not None)'
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
              initialCode: 'import re\n# \'나는 cat과 dog를 좋아해\'에서 cat 또는 dog를 모두 찾아 출력하세요',
              expectedOutputs: ['[\'cat\', \'dog\']'],
              hint: 'result = re.findall(r\'cat|dog\', \'나는 cat과 dog를 좋아해\')\nprint(result)'
            },
            {
              type: 'quiz_code',
              content: '복잡한 패턴으로 이메일 형식과 비슷한 문자열을 검증해보세요.',
              initialCode: 'import re\n# \'test@example.com\'이 이메일 형식(문자@문자.문자)인지 fullmatch로 검증하세요',
              expectedOutputs: ['True'],
              hint: 'pattern = r\'^\\w+@\\w+\\.\\w+$\'\nresult = re.fullmatch(pattern, \'test@example.com\')\nprint(result is not None)'
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
              initialCode: 'fake_response = {\'name\': \'치킨집\', \'rating\': 4.5}\nprint(fake_response[\'name\'], fake_response[\'  \'])  # 평점 키를 넣어보세요',
              expectedOutputs: ['치킨집 4.5'],
              hint: '\'rating\''
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
              initialCode: 'fake_response = {\'status_code\': 404}\nif fake_response[\'status_code\'] ==   :  # 성공 코드를 넣어보세요\n    print(\'성공\')\nelse:\n    print(\'요청 실패\')',
              expectedOutputs: ['요청 실패'],
              hint: '200'
            },
            {
              type: 'quiz_code',
              content: '가상 응답의 리스트 데이터를 순회하며 출력하세요.',
              initialCode: 'fake_response = {\'items\': [\'사과\', \'바나나\', \'포도\']}\nfor item in fake_response[  ]:  # 순회할 키를 넣어보세요\n    print(item)',
              expectedOutputs: ['사과\n바나나\n포도'],
              hint: '\'items\''
            },
            {
              type: 'quiz_code',
              content: '응답 데이터가 비어있는지 확인하는 코드를 작성하세요.',
              initialCode: 'fake_response = {\'items\': []}\nif len(fake_response[\'items\']) ==   :  # 빈 리스트의 길이를 넣어보세요\n    print(\'데이터 없음\')\nelse:\n    print(\'데이터 있음\')',
              expectedOutputs: ['데이터 없음'],
              hint: '0'
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
              initialCode: 'def fake_request(should_fail):\n    if should_fail:\n        raise ConnectionError(\'연결 실패\')\n    return {\'status_code\': 200}\n# fake_request(True)를 호출하고 ConnectionError를 처리해 \'네트워크 오류 발생\'을 출력하세요',
              expectedOutputs: ['네트워크 오류 발생'],
              hint: 'try:\n    result = fake_request(True)\nexcept ConnectionError:\n    print(\'네트워크 오류 발생\')'
            },
            {
              type: 'quiz_code',
              content: '여러 개의 가상 응답 중 성공한 것만 골라 출력하세요.',
              initialCode: 'responses = [{\'status_code\': 200, \'name\': \'A\'}, {\'status_code\': 404, \'name\': \'B\'}, {\'status_code\': 200, \'name\': \'C\'}]\n# status_code가 200인 응답의 name만 출력하세요',
              expectedOutputs: ['A\nC'],
              hint: 'for r in responses:\n    if r[\'status_code\'] == 200:\n        print(r[\'name\'])'
            },
            {
              type: 'quiz_code',
              content: '중첩된 가상 응답(딕셔너리 안의 딕셔너리)에서 값을 꺼내보세요.',
              initialCode: 'fake_response = {\'user\': {\'name\': \'에그\', \'profile\': {\'age\': 5}}}\n# user 안의 profile 안의 age 값을 출력하세요',
              expectedOutputs: ['5'],
              hint: 'print(fake_response[\'user\'][\'profile\'][\'age\'])'
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
              initialCode: '# status_code가 200이면 data를 반환하고, 아니면 None을 반환하는 get_data(response) 함수를 작성하세요\nprint(get_data({\'status_code\': 200, \'data\': \'완료\'}))',
              expectedOutputs: ['완료'],
              hint: 'def get_data(response):\n    if response[\'status_code\'] == 200:\n        return response[\'data\']\n    return None'
            },
            {
              type: 'quiz_code',
              content: '여러 가상 응답의 데이터를 합쳐 하나의 리스트로 만들어보세요.',
              initialCode: 'responses = [{\'items\': [\'A\', \'B\']}, {\'items\': [\'C\']}]\n# 모든 응답의 items를 all_items 리스트에 합쳐 출력하세요',
              expectedOutputs: ['[\'A\', \'B\', \'C\']'],
              hint: 'all_items = []\nfor r in responses:\n    all_items += r[\'items\']\nprint(all_items)'
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
              initialCode: 'import json\nnums = [1, 2, 3]\nprint(json.  (nums))  # 리스트를 문자열로 바꾸는 함수를 넣어보세요',
              expectedOutputs: ['[1, 2, 3]'],
              hint: 'dumps'
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
              initialCode: 'import json\ndata = {\'user\': {\'name\': \'egg\'}}\ntext = json.dumps(data)\nparsed = json.  (text)  # 문자열을 다시 딕셔너리로 바꾸는 함수를 넣어보세요\nprint(parsed[\'user\'][\'name\'])',
              expectedOutputs: ['egg'],
              hint: 'loads'
            },
            {
              type: 'quiz_code',
              content: 'JSON으로 변환 후 타입이 문자열인지 확인하세요.',
              initialCode: 'import json\ndata = {\'a\': 1}\ntext = json.dumps(data)\nprint(type(text).  )  # 타입 이름을 가져오는 속성을 넣어보세요',
              expectedOutputs: ['str'],
              hint: '__name__'
            },
            {
              type: 'quiz_code',
              content: '한글이 포함된 딕셔너리를 ensure_ascii=False로 변환해 그대로 출력하세요.',
              initialCode: 'import json\ndata = {\'name\': \'에그\'}\nprint(json.dumps(data, ensure_ascii=  ))  # False를 넣어보세요',
              expectedOutputs: ['{"name": "에그"}'],
              hint: 'False'
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
              initialCode: 'import json\ntext = \'{"items": ["a", "b", "c"]}\'\n# text를 파싱해 items 리스트를 순회하며 출력하세요',
              expectedOutputs: ['a\nb\nc'],
              hint: 'data = json.loads(text)\nfor item in data[\'items\']:\n    print(item)'
            },
            {
              type: 'quiz_code',
              content: 'JSON으로 변환한 데이터의 길이를 원본과 비교하세요.',
              initialCode: 'import json\nitems = [1, 2, 3, 4]\ntext = json.dumps(items)\n# text를 다시 파싱해 원본과 길이가 같은지 비교하세요',
              expectedOutputs: ['True'],
              hint: 'parsed = json.loads(text)\nprint(len(parsed) == len(items))'
            },
            {
              type: 'quiz_code',
              content: '여러 사용자 정보를 담은 리스트를 JSON으로 저장하고 다시 읽어보세요.',
              initialCode: 'import json\nusers = [{\'name\': \'철수\'}, {\'name\': \'영희\'}]\n# users를 JSON 문자열로 바꾼 뒤 다시 파싱해 두번째 사용자의 이름을 출력하세요',
              expectedOutputs: ['영희'],
              hint: 'text = json.dumps(users, ensure_ascii=False)\nparsed = json.loads(text)\nprint(parsed[1][\'name\'])'
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
              initialCode: 'import json\ndata = {\'name\': \'egg\'}\n# data에 age 키(5)를 추가하고 JSON 문자열로 바꿔 출력하세요',
              expectedOutputs: ['{"name": "egg", "age": 5}'],
              hint: 'data[\'age\'] = 5\ntext = json.dumps(data)\nprint(text)'
            },
            {
              type: 'quiz_code',
              content: 'JSON으로 여러 단계 중첩된 데이터를 처리해보세요.',
              initialCode: 'import json\ntext = \'{"user": {"name": "egg", "scores": [90, 85, 100]}}\'\n# text를 파싱해 user의 scores 합계를 출력하세요',
              expectedOutputs: ['275'],
              hint: 'data = json.loads(text)\nprint(sum(data[\'user\'][\'scores\']))'
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
              initialCode: 'def describe(status):\n    if status == 200:\n        return \'성공\'\n    elif status == 404:\n        return \'찾을 수 없음\'\n    elif status ==   :\n        return \'서버 오류\'\n    return \'알 수 없음\'\nprint(describe(500))',
              expectedOutputs: ['서버 오류'],
              hint: '500'
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
              initialCode: 'status = 403\nprint(400 <= status <   )  # 상한값을 넣어보세요',
              expectedOutputs: ['True'],
              hint: '500'
            },
            {
              type: 'quiz_code',
              content: '상태 코드가 200번대(성공)인지 확인하세요.',
              initialCode: 'status = 201\nprint(  <= status < 300)  # 하한값을 넣어보세요',
              expectedOutputs: ['True'],
              hint: '200'
            },
            {
              type: 'quiz_code',
              content: '여러 상태 코드 리스트에서 성공한 것의 개수를 세어보세요.',
              initialCode: 'statuses = [200, 404, 200, 500, 201]\ncount = 0\nfor s in statuses:\n    if 200 <= s < 300:\n        count +=   \nprint(count)',
              expectedOutputs: ['3'],
              hint: '1'
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
              initialCode: 'def category(status):\n    if 200 <= status < 300:\n        return \'성공\'\n    # 400번대는 \'클라이언트 오류\', 500번대는 \'서버 오류\'를 반환하도록 완성하세요\n    return \'기타\'\nprint(category(403))',
              expectedOutputs: ['클라이언트 오류'],
              hint: 'elif 400 <= status < 500:\n        return \'클라이언트 오류\'\n    elif 500 <= status < 600:\n        return \'서버 오류\''
            },
            {
              type: 'quiz_code',
              content: '딕셔너리로 상태 코드와 설명을 매핑해 조회하세요.',
              initialCode: 'codes = {200: \'성공\', 404: \'찾을 수 없음\', 500: \'서버 오류\'}\n# 404에 해당하는 설명을 조회하고, 없으면 \'알 수 없는 코드\'를 출력하세요',
              expectedOutputs: ['찾을 수 없음'],
              hint: 'print(codes.get(404, \'알 수 없는 코드\'))'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리에 없는 코드를 조회했을 때 기본값이 나오는지 확인하세요.',
              initialCode: 'codes = {200: \'성공\', 404: \'찾을 수 없음\'}\n# 딕셔너리에 없는 999 코드를 조회하고, 없으면 \'알 수 없는 코드\'를 출력하세요',
              expectedOutputs: ['알 수 없는 코드'],
              hint: 'print(codes.get(999, \'알 수 없는 코드\'))'
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
              initialCode: 'responses = [{\'url\': \'a\', \'status\': 200}, {\'url\': \'b\', \'status\': 404}, {\'url\': \'c\', \'status\': 200}]\n# status가 400 이상인 응답의 url만 출력하세요',
              expectedOutputs: ['b'],
              hint: 'for r in responses:\n    if r[\'status\'] >= 400:\n        print(r[\'url\'])'
            },
            {
              type: 'quiz_code',
              content: '응답 리스트에서 성공률(%)을 계산해보세요.',
              initialCode: 'statuses = [200, 200, 404, 200, 500]\nsuccess = 0\n# 200번대인 개수를 success에 세고, 전체 대비 백분율을 출력하세요',
              expectedOutputs: ['60.0'],
              hint: 'for s in statuses:\n    if 200 <= s < 300:\n        success += 1\nprint(success / len(statuses) * 100)'
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
              initialCode: 'responses = [{\'status_code\': 200, \'name\': \'A\'}, {\'status_code\': 200, \'name\': \'B\'}]\nnames = []\nfor r in responses:\n    names.append(r[  ])  # 이름 키를 넣어보세요\nprint(names)',
              expectedOutputs: ['[\'A\', \'B\']'],
              hint: '\'name\''
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
              initialCode: 'responses = [{\'rating\': 4.0}, {\'rating\': 5.0}, {\'rating\': 3.0}]\ntotal = 0\nfor r in responses:\n    total += r[\'rating\']\nprint(total /   )  # 나눌 개수를 넣어보세요',
              expectedOutputs: ['4.0'],
              hint: 'len(responses)'
            },
            {
              type: 'quiz_code',
              content: 'try-except로 안전하게 API 호출을 흉내내는 함수를 만드세요.',
              initialCode: 'def fetch(should_fail):\n    if should_fail:\n        raise ConnectionError(\'실패\')\n    return {\'status_code\': 200, \'data\': \'완료\'}\ntry:\n    result = fetch(False)\n    print(result[\'data\'])\nexcept   :  # 잡을 예외를 넣어보세요\n    print(\'오류\')',
              expectedOutputs: ['완료'],
              hint: 'ConnectionError'
            },
            {
              type: 'quiz_code',
              content: '여러 페이지의 가짜 데이터를 하나로 합쳐보세요.',
              initialCode: 'page1 = {\'items\': [\'a\', \'b\']}\npage2 = {\'items\': [\'c\', \'d\']}\nall_items = page1[\'items\']   page2[\'items\']  # 두 리스트를 합치는 연산자를 넣어보세요\nprint(all_items)',
              expectedOutputs: ['[\'a\', \'b\', \'c\', \'d\']'],
              hint: '+'
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
              initialCode: 'import json\nresponse_text = \'{"name": "에그", "price": 5000}\'\n# response_text를 파싱해 \'이름: 가격원\' 형태로 출력하세요',
              expectedOutputs: ['에그: 5000원'],
              hint: 'data = json.loads(response_text)\nprint(data[\'name\'] + \': \' + str(data[\'price\']) + \'원\')'
            },
            {
              type: 'quiz_code',
              content: '여러 응답 중 실패한 것의 개수를 정리해보세요.',
              initialCode: 'responses = [{\'status_code\': 200}, {\'status_code\': 404}, {\'status_code\': 500}, {\'status_code\': 200}]\n# status_code가 200이 아닌 응답만 모아 개수를 출력하세요',
              expectedOutputs: ['2'],
              hint: 'failed = [r for r in responses if r[\'status_code\'] != 200]\nprint(len(failed))'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 응답에서 중첩된 데이터를 안전하게 꺼내보세요.',
              initialCode: 'response = {\'status_code\': 200, \'result\': {\'items\': [1, 2, 3]}}\n# result 안의 items 합계를 출력하세요',
              expectedOutputs: ['6'],
              hint: 'print(sum(response[\'result\'][\'items\']))'
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
              initialCode: 'shops = [{\'name\': \'A\', \'rating\': 4.2}, {\'name\': \'B\', \'rating\': 4.8}, {\'name\': \'C\', \'rating\': 3.9}]\n# rating이 가장 높은 상점의 이름을 출력하세요',
              expectedOutputs: ['B'],
              hint: 'best = max(shops, key=lambda s: s[\'rating\'])\nprint(best[\'name\'])'
            },
            {
              type: 'quiz_code',
              content: '여러 페이지의 가짜 데이터를 순회하며 조건에 맞는 것만 모아보세요.',
              initialCode: 'pages = [{\'items\': [{\'name\': \'A\', \'price\': 1000}, {\'name\': \'B\', \'price\': 5000}]}, {\'items\': [{\'name\': \'C\', \'price\': 2000}]}]\ncheap_items = []\n# 가격이 3000 미만인 아이템의 이름을 cheap_items에 모으세요\nprint(cheap_items)',
              expectedOutputs: ['[\'A\', \'C\']'],
              hint: 'for page in pages:\n    for item in page[\'items\']:\n        if item[\'price\'] < 3000:\n            cheap_items.append(item[\'name\'])'
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
              initialCode: 'data = [\'철수\', \'\', \'영희\', \'\', \'민수\']\ncleaned = []\nfor d in data:\n    if d !=   :  # 빈 문자열을 넣어보세요\n        cleaned.append(d)\nprint(cleaned)',
              expectedOutputs: ['[\'철수\', \'영희\', \'민수\']'],
              hint: '\'\''
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
              initialCode: 'data = [\'사과\', \'바나나\', \'사과\', \'포도\', \'바나나\']\ncleaned = list(  (data))  # 중복을 제거하는 자료형을 넣어보세요\nprint(len(cleaned))',
              expectedOutputs: ['3'],
              hint: 'set'
            },
            {
              type: 'quiz_code',
              content: '문자열 숫자를 정수로 안전하게 변환해보세요.',
              initialCode: 'values = [\'10\', \'20\', \'abc\', \'30\']\ntotal = 0\nfor v in values:\n    try:\n        total += int(v)\n    except   :\n        pass\nprint(total)',
              expectedOutputs: ['60'],
              hint: 'ValueError'
            },
            {
              type: 'quiz_code',
              content: '공백 제거와 소문자 변환을 함께 적용해보세요.',
              initialCode: 'data = [\'  Apple \', \'BANANA  \']\ncleaned = []\nfor d in data:\n    cleaned.append(d.strip().  ())  # 소문자로 바꾸는 메서드를 넣어보세요\nprint(cleaned)',
              expectedOutputs: ['[\'apple\', \'banana\']'],
              hint: 'lower()'
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
              initialCode: 'data = [10, None, 20, None, 30]\ntotal = 0\n# None이 아닌 값만 total에 더하세요\nprint(total)',
              expectedOutputs: ['60'],
              hint: 'for d in data:\n    if d is not None:\n        total += d'
            },
            {
              type: 'quiz_code',
              content: '여러 형식이 섞인 나이 데이터를 정리해 평균을 계산하세요.',
              initialCode: 'ages = [\'25\', \'30\', \'N/A\', \'40\']\nvalid_ages = []\n# 정수로 변환 가능한 값만 valid_ages에 담고 평균을 출력하세요',
              expectedOutputs: ['31.666666666666668'],
              hint: 'for a in ages:\n    try:\n        valid_ages.append(int(a))\n    except ValueError:\n        continue\nprint(sum(valid_ages) / len(valid_ages))'
            },
            {
              type: 'quiz_code',
              content: '딕셔너리 리스트에서 특정 필드가 빠진 항목을 걸러내세요.',
              initialCode: 'records = [{\'name\': \'철수\', \'age\': 20}, {\'name\': \'영희\'}, {\'name\': \'민수\', \'age\': 25}]\n# \'age\' 키가 있는 항목만 valid에 담아 개수를 출력하세요',
              expectedOutputs: ['2'],
              hint: 'valid = [r for r in records if \'age\' in r]\nprint(len(valid))'
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
              initialCode: 'nums = [5, 3, 5, 1, 3, 2]\n# 중복을 제거하고 정렬해 출력하세요',
              expectedOutputs: ['[1, 2, 3, 5]'],
              hint: 'cleaned = sorted(set(nums))\nprint(cleaned)'
            },
            {
              type: 'quiz_code',
              content: '이름과 점수 데이터에서 이상치(0점 이하)를 제거하고 평균을 계산하세요.',
              initialCode: 'scores = [{\'name\': \'철수\', \'score\': 90}, {\'name\': \'영희\', \'score\': -5}, {\'name\': \'민수\', \'score\': 85}]\n# score가 0보다 큰 값만 모아 평균을 출력하세요',
              expectedOutputs: ['87.5'],
              hint: 'valid = [s[\'score\'] for s in scores if s[\'score\'] > 0]\nprint(sum(valid) / len(valid))'
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
              initialCode: 'd = {\'a\': 1}\nd.  (\'b\', 10)  # 키가 없을 때만 기본값을 넣는 메서드를 넣어보세요\nd.setdefault(\'a\', 999)\nprint(d)',
              expectedOutputs: ['{\'a\': 1, \'b\': 10}'],
              hint: 'setdefault'
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
              initialCode: 'd = {\'a\': 1}\nif \'a\'   d:  # in을 넣어보세요\n    print(d[\'a\'])\nelse:\n    print(\'없음\')',
              expectedOutputs: ['1'],
              hint: 'in'
            },
            {
              type: 'quiz_code',
              content: 'update()로 두 딕셔너리를 안전하게 합쳐보세요.',
              initialCode: 'd1 = {\'a\': 1}\nd2 = {\'b\': 2}\nd1.  (d2)  # 합치는 메서드를 넣어보세요\nprint(d1)',
              expectedOutputs: ['{\'a\': 1, \'b\': 2}'],
              hint: 'update'
            },
            {
              type: 'quiz_code',
              content: '중첩된 딕셔너리를 get()으로 단계별로 안전하게 조회하세요.',
              initialCode: 'd = {\'user\': {\'name\': \'에그\'}}\nname = d.get(\'user\', {}).get(  , \'없음\')  # 조회할 키를 넣어보세요\nprint(name)',
              expectedOutputs: ['에그'],
              hint: '\'name\''
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
              initialCode: 'd = {\'user\': {\'name\': \'에그\'}}\n# user 안에 없는 \'age\' 키를 get()으로 안전하게 조회하고, 없으면 \'없음\'을 출력하세요',
              expectedOutputs: ['없음'],
              hint: 'age = d.get(\'user\', {}).get(\'age\', \'없음\')\nprint(age)'
            },
            {
              type: 'quiz_code',
              content: '여러 딕셔너리를 update()로 순서대로 합쳐 최종 값을 확인하세요.',
              initialCode: 'd1 = {\'a\': 1, \'b\': 2}\nd2 = {\'b\': 20, \'c\': 3}\n# d1에 d2를 update()로 합쳐 출력하세요',
              expectedOutputs: ['{\'a\': 1, \'b\': 20, \'c\': 3}'],
              hint: 'd1.update(d2)\nprint(d1)'
            },
            {
              type: 'quiz_code',
              content: 'try-except로 중첩 딕셔너리 접근을 안전하게 처리하는 함수를 만드세요.',
              initialCode: 'def safe_get(d, *keys):\n    # keys를 순서대로 따라가며 값을 찾고, 실패하면 None을 반환하도록 작성하세요\n    pass\nd = {\'user\': {\'name\': \'에그\'}}\nprint(safe_get(d, \'user\', \'name\'))',
              expectedOutputs: ['에그'],
              hint: 'try:\n        result = d\n        for k in keys:\n            result = result[k]\n        return result\n    except (KeyError, TypeError):\n        return None'
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
              initialCode: 'def safe_get(d, *keys):\n    try:\n        result = d\n        for k in keys:\n            result = result[k]\n        return result\n    except (KeyError, TypeError):\n        return None\nd = {\'user\': {\'name\': \'에그\'}}\n# 없는 \'age\' 키로 safe_get을 호출해 결과를 출력하세요',
              expectedOutputs: ['None'],
              hint: 'print(safe_get(d, \'user\', \'age\'))'
            },
            {
              type: 'quiz_code',
              content: '여러 사용자 딕셔너리에서 안전하게 정보를 수집하는 코드를 작성하세요.',
              initialCode: 'users = [{\'name\': \'철수\', \'age\': 20}, {\'name\': \'영희\'}]\nresult = []\n# 각 사용자의 age를 get()으로 안전하게(기본값 0) 가져와 result에 담으세요\nprint(result)',
              expectedOutputs: ['[20, 0]'],
              hint: 'for u in users:\n    result.append(u.get(\'age\', 0))'
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
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 5}\n    def sell(self, name, qty):\n        if self.items[name] < qty:\n            raise ValueError(  )  # 에러 메시지를 넣어보세요\n        self.items[name] -= qty\ninv = Inventory()\ntry:\n    inv.sell(\'사과\', 10)\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['재고 부족'],
              hint: '\'재고 부족\''
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
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 5}\n    def check(self, name):\n        return self.items.get(name,   )  # 기본값을 넣어보세요\ninv = Inventory()\nprint(inv.check(\'바나나\'))',
              expectedOutputs: ['0'],
              hint: '0'
            },
            {
              type: 'quiz_code',
              content: '여러 상품을 추가한 뒤 전체 재고 합계를 구하세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {}\n    def add(self, name, qty):\n        self.items[name] = qty\ninv = Inventory()\ninv.add(\'사과\', 10)\ninv.add(\'바나나\', 5)\nprint(  (inv.items.values()))  # 합계를 구하는 함수를 넣어보세요',
              expectedOutputs: ['15'],
              hint: 'sum'
            },
            {
              type: 'quiz_code',
              content: '재고를 파일에 저장하고 다시 불러오는 기능을 만들어보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 10}\n    def save(self, filename):\n        with open(filename, \'w\') as f:\n            f.write(  (self.items))  # 딕셔너리를 문자열로 바꾸는 함수를 넣어보세요\ninv = Inventory()\ninv.save(\'inv.txt\')\nwith open(\'inv.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['{\'사과\': 10}'],
              hint: 'str'
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
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 5}\n# Order 클래스가 Inventory를 받아 buy(name)으로 재고를 안전하게(기본값 0) 조회하도록 작성하세요\ninv = Inventory()\norder = Order(inv)\nprint(order.buy(\'사과\'))',
              expectedOutputs: ['5'],
              hint: 'class Order:\n    def __init__(self, inventory):\n        self.inventory = inventory\n    def buy(self, name):\n        return self.inventory.items.get(name, 0)'
            },
            {
              type: 'quiz_code',
              content: '여러 상품에 대해 재고 부족 여부를 한 번에 확인해보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 2, \'바나나\': 10}\n    # threshold보다 재고가 적은 상품 이름을 리스트로 반환하는 check_low(threshold)를 작성하세요\ninv = Inventory()\nprint(inv.check_low(5))',
              expectedOutputs: ['[\'사과\']'],
              hint: 'def check_low(self, threshold):\n        low = []\n        for name, qty in self.items.items():\n            if qty < threshold:\n                low.append(name)\n        return low'
            },
            {
              type: 'quiz_code',
              content: '주문 처리 중 예외가 발생해도 다음 주문은 계속 처리되도록 만드세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 3}\n    def sell(self, name, qty):\n        if self.items.get(name, 0) < qty:\n            raise ValueError(\'재고 부족: \' + name)\n        self.items[name] -= qty\ninv = Inventory()\norders = [(\'사과\', 1), (\'사과\', 10), (\'사과\', 1)]\n# 각 주문을 시도하고, 성공하면 \'성공\', 예외가 나면 \'실패\'를 출력하세요',
              expectedOutputs: ['성공\n실패\n성공'],
              hint: 'for name, qty in orders:\n    try:\n        inv.sell(name, qty)\n        print(\'성공\')\n    except ValueError:\n        print(\'실패\')'
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
              initialCode: 'class Order:\n    total_orders = 0\n    # __init__에서 item을 저장하고 total_orders를 1 증가시키세요\nOrder(\'사과\')\nOrder(\'바나나\')\nprint(Order.total_orders)',
              expectedOutputs: ['2'],
              hint: 'def __init__(self, item):\n        self.item = item\n        Order.total_orders += 1'
            },
            {
              type: 'quiz_code',
              content: '재고 관리와 주문 처리를 통합한 미니 시스템을 완성해보세요.',
              initialCode: 'class Inventory:\n    def __init__(self):\n        self.items = {\'사과\': 10, \'바나나\': 5}\n    def sell(self, name, qty):\n        if self.items.get(name, 0) < qty:\n            raise ValueError(\'재고 부족\')\n        self.items[name] -= qty\n        return self.items[name]\ninv = Inventory()\nresults = []\n# 각 주문을 시도해 성공하면 남은 재고를, 실패하면 -1을 results에 담으세요\nprint(results)',
              expectedOutputs: ['[7, -1, 5]'],
              hint: 'for name, qty in [(\'사과\', 3), (\'바나나\', 10), (\'사과\', 2)]:\n    try:\n        results.append(inv.sell(name, qty))\n    except ValueError:\n        results.append(-1)'
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
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise ValueError(  )  # 에러 메시지를 넣어보세요\n        self.balance -= amount\na = Account(500)\ntry:\n    a.withdraw(1000)\nexcept ValueError as e:\n    print(e)',
              expectedOutputs: ['잔액 부족'],
              hint: '\'잔액 부족\''
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
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\na = Account(1000)\nwith open(\'account.txt\', \'w\') as f:\n    f.write(  (a.balance))  # 숫자를 문자열로 바꾸는 함수를 넣어보세요\nwith open(\'account.txt\', \'r\') as f:\n    print(f.read())',
              expectedOutputs: ['1000'],
              hint: 'str'
            },
            {
              type: 'quiz_code',
              content: '정규표현식으로 계좌번호 형식을 검증하세요.',
              initialCode: 'import re\naccount_number = \'123-456-789\'\nresult = re.fullmatch(r\'\\d{3}-\\d{3}-  \', account_number)  # 마지막 자릿수 패턴을 채워보세요\nprint(result is not None)',
              expectedOutputs: ['True'],
              hint: '\\d{3}'
            },
            {
              type: 'quiz_code',
              content: '계좌 정보를 JSON으로 변환해 저장해보세요.',
              initialCode: 'import json\naccount_data = {\'name\': \'에그\', \'balance\': 1000}\ntext = json.  (account_data, ensure_ascii=False)  # 딕셔너리를 문자열로 바꾸는 함수를 넣어보세요\nprint(text)',
              expectedOutputs: ['{"name": "에그", "balance": 1000}'],
              hint: 'dumps'
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
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\naccounts = [Account(1000), Account(2000), Account(500)]\n# accounts의 모든 balance를 더해 total을 출력하세요',
              expectedOutputs: ['3500'],
              hint: 'total = 0\nfor a in accounts:\n    total += a.balance\nprint(total)'
            },
            {
              type: 'quiz_code',
              content: '상속을 활용해 저축 계좌(이자 지급 기능 추가)를 만들어보세요.',
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n# SavingsAccount가 Account를 상속받아 add_interest(rate)로 이자를 더하도록 작성하세요\ns = SavingsAccount(1000)\ns.add_interest(0.1)\nprint(s.balance)',
              expectedOutputs: ['1100.0'],
              hint: 'class SavingsAccount(Account):\n    def add_interest(self, rate):\n        self.balance += self.balance * rate'
            },
            {
              type: 'quiz_code',
              content: '계좌 거래 내역을 안전하게 딕셔너리로 관리해보세요.',
              initialCode: 'transactions = {}\n# transactions에 setdefault로 리스트를 만들고 금액을 추가하는 log(name, amount) 함수를 작성하세요\nlog(\'에그\', 100)\nlog(\'에그\', -50)\nprint(sum(transactions[\'에그\']))',
              expectedOutputs: ['50'],
              hint: 'def log(name, amount):\n    transactions.setdefault(name, [])\n    transactions[name].append(amount)'
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
              initialCode: 'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        try:\n            if amount > self.balance:\n                raise ValueError(\'잔액 부족\')\n            self.balance -= amount\n            return \'성공\'\n        except ValueError as e:\n            return str(e)\n        # 성공하든 실패하든 \'거래 시도 완료\'를 출력하는 finally 블록을 추가하세요\na = Account(500)\nprint(a.withdraw(1000))',
              expectedOutputs: ['거래 시도 완료\n잔액 부족'],
              hint: 'finally:\n            print(\'거래 시도 완료\')'
            },
            {
              type: 'quiz_code',
              content: '클래스, 예외처리, 파일, JSON을 모두 활용한 종합 코드를 완성해보세요.',
              initialCode: 'import json\nclass Account:\n    def __init__(self, name, balance):\n        self.name = name\n        self.balance = balance\n    # name과 balance를 JSON 문자열로 반환하는 to_json() 메서드를 작성하세요\na = Account(\'에그\', 1000)\nwith open(\'final.txt\', \'w\') as f:\n    f.write(a.to_json())\nwith open(\'final.txt\', \'r\') as f:\n    data = json.loads(f.read())\nprint(data[\'name\'], data[\'balance\'])',
              expectedOutputs: ['에그 1000'],
              hint: 'def to_json(self):\n        return json.dumps({\'name\': self.name, \'balance\': self.balance}, ensure_ascii=False)'
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
,
  {
  id: 16,
  title: "UNIT 16\n실전 파이썬 스킬업",
  nodes: [
    {
      id: "node_16_1",
      title: "현대적인 문자열 조합 (f-string)",
      lessons: [
        [
          {
            type: "quiz_multiple_choice",
            content: "f-string을 사용하려면 문자열 따옴표 앞에 어떤 글자를 붙이나요?",
            options: [
              "f",
              "s",
              "c"
            ],
            answer: 0,
            hint: "f-string의 f입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (1)",
            sentenceParts: [
              "문자열 따옴표 앞에 ",
              " 를 붙이면 f-string이 됩니다."
            ],
            wordBank: [
              "f",
              "s",
              "format"
            ],
            answer: [
              0
            ],
            hint: "f입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "f-string 안에서 변수 값을 출력하려면 어떤 괄호를 사용하나요?",
            options: [
              "{} (중괄호)",
              "[] (대괄호)",
              "() (소괄호)"
            ],
            answer: 0,
            hint: "중괄호 안에 변수를 넣습니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (2)",
            sentenceParts: [
              "f-string 내부에서 변수는 ",
              " 로 감쌉니다."
            ],
            wordBank: [
              "{} 중괄호",
              "[] 대괄호",
              "() 소괄호"
            ],
            answer: [
              0
            ],
            hint: "중괄호입니다."
          },
          {
            type: "quiz_code",
            content: "f-string을 사용해 '나는 에그, 5살입니다'를 출력하세요.",
            initialCode: "name = '에그'\nage = 5\n# f-string을 사용해 변수를 넣어보세요.\nprint(f'나는 {   }, {   }살입니다')",
            expectedOutputs: [
              "나는 에그, 5살입니다"
            ],
            hint: "print(f'나는 {name}, {age}살입니다')"
          },
          {
            type: "quiz_code",
            content: "f-string의 중괄호 안에서 100 * 2를 계산하여 출력하세요.",
            initialCode: "print(f'정답은 {  }입니다')",
            expectedOutputs: [
              "정답은 200입니다"
            ],
            hint: "print(f'정답은 {100 * 2}입니다')"
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "f'{10 + 20}' 의 출력 결과는 무엇인가요?",
            options: [
              "30",
              "10 + 20",
              "에러"
            ],
            answer: 0,
            hint: "중괄호 안의 수식은 계산되어 출력됩니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (3)",
            sentenceParts: [
              "f-string 안에서는 변수뿐만 아니라 ",
              " 도 직접 계산할 수 있습니다."
            ],
            wordBank: [
              "수식(연산)",
              "함수 정의",
              "모듈 임포트"
            ],
            answer: [
              0
            ],
            hint: "수식(연산)입니다."
          },
          {
            type: "quiz_code",
            content: "원주율(pi)을 소수점 둘째 자리까지만 출력하세요.",
            initialCode: "pi = 3.141592\n# 포맷 지정자 :.2f 를 사용하세요.\nprint(f'원주율은 {  }입니다')",
            expectedOutputs: [
              "원주율은 3.14입니다"
            ],
            hint: "print(f'원주율은 {pi:.2f}입니다')"
          },
          {
            type: "quiz_multiple_choice",
            content: "소수점 두 자리까지만 출력하는 f-string 포맷 지정자는?",
            options: [
              ":.2f",
              ":.2",
              ":2f"
            ],
            answer: 0,
            hint: "콜론 뒤에 .2f를 붙입니다."
          },
          {
            type: "quiz_code",
            content: "리스트의 첫 번째 요소를 f-string으로 출력하세요.",
            initialCode: "fruits = ['사과', '바나나', '딸기']\nprint(f'내가 좋아하는 과일은 {   }입니다')",
            expectedOutputs: [
              "내가 좋아하는 과일은 사과입니다"
            ],
            hint: "print(f'내가 좋아하는 과일은 {fruits[0]}입니다')"
          },
          {
            type: "quiz_multiple_choice",
            content: "f-string은 언제부터 도입되었나요?",
            options: [
              "Python 3.6",
              "Python 2.7",
              "Python 3.0"
            ],
            answer: 0,
            hint: "비교적 최신 문법인 3.6부터 도입되었습니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (4)",
            sentenceParts: [
              "소수점 둘째 자리까지 출력하려면 변수 뒤에 ",
              " 를 붙입니다."
            ],
            wordBank: [
              ":.2f",
              ":.2",
              ":f"
            ],
            answer: [
              0
            ],
            hint: ":.2f 입니다."
          },
          {
            type: "quiz_code",
            content: "이름과 점수를 딕셔너리에서 꺼내 f-string으로 출력하세요.",
            initialCode: "user = {'name': '에그', 'score': 100}\n# 따옴표 충돌을 피하기 위해 바깥은 쌍따옴표(\"\")를 쓰세요.\nprint(f\"이름: {   }, 점수: {   }\")",
            expectedOutputs: [
              "이름: 에그, 점수: 100"
            ],
            hint: "print(f\"이름: {user['name']}, 점수: {user['score']}\")"
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (5)",
            sentenceParts: [
              "기존의 %나 .format()보다 f-string이 코드가 훨씬 ",
              "."
            ],
            wordBank: [
              "간결하고 읽기 쉽습니다",
              "길고 복잡합니다",
              "느리게 작동합니다"
            ],
            answer: [
              0
            ],
            hint: "간결하고 읽기 쉽습니다."
          },
          {
            type: "quiz_code",
            content: "f-string과 upper() 메서드를 조합해 'HELLO'를 출력하세요.",
            initialCode: "word = 'hello'\n# 중괄호 안에서 메서드 호출도 가능합니다.\nprint(f'{  }')",
            expectedOutputs: [
              "HELLO"
            ],
            hint: "print(f'{word.upper()}')"
          }
        ],
        [
          {
            type: "quiz_code",
            content: "함수 반환값을 f-string 내에서 직접 호출해 출력하세요.",
            initialCode: "def get_price():\n    return 5000\nprint(f'가격은 {   }원입니다')",
            expectedOutputs: [
              "가격은 5000원입니다"
            ],
            hint: "print(f'가격은 {get_price()}원입니다')"
          },
          {
            type: "quiz_code",
            content: "여러 줄 문자열(f\"\"\" \"\"\")과 f-string을 함께 사용해보세요.",
            initialCode: "name = '에그'\nlevel = 10\nmsg = f\"\"\"\n캐릭터: {  }\n레벨: {  }\n\"\"\"\nprint(msg)",
            expectedOutputs: [
              "\n캐릭터: 에그\n레벨: 10\n"
            ],
            hint: "캐릭터: {name}\n레벨: {level}"
          },
          {
            type: "quiz_code",
            content: "f-string 안에서 조건문(삼항 연산자)을 사용해보세요.",
            initialCode: "score = 80\n# 60점 이상이면 '합격', 아니면 '불합격'을 중괄호 안에서 평가하세요.\nprint(f\"결과: {  }\")",
            expectedOutputs: [
              "결과: 합격"
            ],
            hint: "print(f\"결과: {'합격' if score >= 60 else '불합격'}\")"
          },
          {
            type: "quiz_code",
            content: "f-string으로 숫자 1000000에 쉼표(,) 구분자를 넣어 출력하세요.",
            initialCode: "money = 1000000\n# 콜론 뒤에 쉼표(:,)를 넣으면 천 단위 콤마가 생깁니다.\nprint(f'금액: {   }원')",
            expectedOutputs: [
              "금액: 1,000,000원"
            ],
            hint: "print(f'금액: {money:,}원')"
          },
          {
            type: "quiz_code",
            content: "변수명과 값을 동시에 출력하는 f'{x=}' 문법을 사용해보세요 (디버깅용).",
            initialCode: "x = 10\ny = 20\n# 중괄호 안을 x= 로 쓰면 x=10 형태로 출력됩니다.\nprint(f'{  }, {  }')",
            expectedOutputs: [
              "x=10, y=20"
            ],
            hint: "print(f'{x=}, {y=}')"
          },
          {
            type: "quiz_code",
            content: "자유롭게 f-string을 사용하여 자신만의 문장을 2개 이상의 변수를 포함해 출력해보세요.",
            initialCode: "# 백지 상태입니다. 변수를 선언하고 f-string으로 출력해보세요.",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "name = 'Python'\nage = 30\nprint(f'{name}은 {age}년 되었습니다.')"
          }
        ]
      ]
    },
    {
      id: "node_16_2",
      title: "빠르고 간결한 리스트 컴프리헨션",
      lessons: [
        [
          {
            type: "quiz_multiple_choice",
            content: "리스트를 한 줄로 짧게 생성하는 파이썬 특유의 문법은?",
            options: [
              "리스트 컴프리헨션",
              "리스트 제너레이터",
              "리스트 익스텐션"
            ],
            answer: 0,
            hint: "List Comprehension입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (1)",
            sentenceParts: [
              "리스트를 간결하게 생성하는 문법을 리스트 ",
              " (이)라고 부릅니다."
            ],
            wordBank: [
              "컴프리헨션",
              "제너레이터",
              "익스텐션"
            ],
            answer: [
              0
            ],
            hint: "컴프리헨션입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[x for x in range(3)] 의 결과는?",
            options: [
              "[0, 1, 2]",
              "[1, 2, 3]",
              "에러"
            ],
            answer: 0,
            hint: "0, 1, 2가 리스트에 담깁니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (2)",
            sentenceParts: [
              "기본 구조는 [표현식 ",
              " 변수 in 반복가능객체] 입니다."
            ],
            wordBank: [
              "for",
              "while",
              "if"
            ],
            answer: [
              0
            ],
            hint: "for를 사용합니다."
          },
          {
            type: "quiz_code",
            content: "1부터 5까지 들어있는 리스트를 컴프리헨션으로 만드세요.",
            initialCode: "# [x for x in range(1, 6)] 형태를 사용하세요.\nnums = [  ]\nprint(nums)",
            expectedOutputs: [
              "[1, 2, 3, 4, 5]"
            ],
            hint: "nums = [x for x in range(1, 6)]"
          },
          {
            type: "quiz_code",
            content: "리스트의 모든 값에 10씩 더한 새 리스트를 만드세요.",
            initialCode: "old = [1, 2, 3]\nnew = [x +   for x in old]  # 빈칸을 채우세요.\nprint(new)",
            expectedOutputs: [
              "[11, 12, 13]"
            ],
            hint: "new = [x + 10 for x in old]"
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "[x*2 for x in [1, 2, 3]] 의 결과는?",
            options: [
              "[2, 4, 6]",
              "[1, 2, 3, 1, 2, 3]",
              "[1, 4, 9]"
            ],
            answer: 0,
            hint: "각 요소에 2가 곱해집니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (3)",
            sentenceParts: [
              "원하는 요소만 골라내려면 끝에 ",
              " 문을 추가할 수 있습니다."
            ],
            wordBank: [
              "if",
              "else",
              "break"
            ],
            answer: [
              0
            ],
            hint: "if문으로 필터링합니다."
          },
          {
            type: "quiz_code",
            content: "리스트에서 짝수만 걸러내어 새 리스트를 만드세요.",
            initialCode: "old = [1, 2, 3, 4, 5]\nnew = [x for x in old if   ]  # 짝수 조건(x % 2 == 0)을 적으세요.\nprint(new)",
            expectedOutputs: [
              "[2, 4]"
            ],
            hint: "new = [x for x in old if x % 2 == 0]"
          },
          {
            type: "quiz_multiple_choice",
            content: "조건문을 붙여 [x for x in range(5) if x % 2 == 0] 처럼 쓰면?",
            options: [
              "짝수만 포함된다",
              "홀수만 포함된다",
              "에러가 난다"
            ],
            answer: 0,
            hint: "if문 조건이 참인 것만 필터링됩니다."
          },
          {
            type: "quiz_code",
            content: "문자열 리스트에서 길이가 3 이상인 단어만 모아보세요.",
            initialCode: "words = ['사과', '바나나', '귤', '수박']\nlong_words = [w for w in words if   ]  # len(w) >= 3\nprint(long_words)",
            expectedOutputs: [
              "['바나나']"
            ],
            hint: "long_words = [w for w in words if len(w) >= 3]"
          },
          {
            type: "quiz_multiple_choice",
            content: "리스트 컴프리헨션의 장점이 아닌 것은?",
            options: [
              "코드가 매우 길어진다",
              "실행 속도가 일반 for문보다 조금 빠르다",
              "코드가 한 줄로 간결해진다"
            ],
            answer: 0,
            hint: "오히려 코드가 짧아집니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (4)",
            sentenceParts: [
              "append() 메서드를 여러 번 호출하는 것보다 코드가 ",
              "."
            ],
            wordBank: [
              "간결합니다",
              "복잡합니다",
              "어렵습니다"
            ],
            answer: [
              0
            ],
            hint: "매우 간결해집니다."
          },
          {
            type: "quiz_code",
            content: "리스트의 각 문자열을 모두 대문자로 변환하세요.",
            initialCode: "words = ['hello', 'world']\nup_words = [  for w in words]  # w.upper()를 호출하세요.\nprint(up_words)",
            expectedOutputs: [
              "['HELLO', 'WORLD']"
            ],
            hint: "up_words = [w.upper() for w in words]"
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (5)",
            sentenceParts: [
              "중첩된 for문이나 복잡한 조건문이 섞이면 일반 for문보다 가독성이 ",
              "."
            ],
            wordBank: [
              "떨어질 수 있습니다",
              "항상 좋아집니다",
              "차이가 없습니다"
            ],
            answer: [
              0
            ],
            hint: "너무 길게 쓰면 오히려 읽기 힘들어집니다."
          },
          {
            type: "quiz_code",
            content: "조건을 만족하면 A, 아니면 B를 넣는 삼항 연산자를 사용해보세요.",
            initialCode: "nums = [1, -2, 3, -4]\n# x가 양수면 '양수', 아니면 '음수' ( [ '양수' if x > 0 else '음수' for x in nums ] )\nresult = [  for x in nums]\nprint(result)",
            expectedOutputs: [
              "['양수', '음수', '양수', '음수']"
            ],
            hint: "result = ['양수' if x > 0 else '음수' for x in nums]"
          }
        ],
        [
          {
            type: "quiz_code",
            content: "문자열 내부의 각 글자를 리스트로 쪼개보세요.",
            initialCode: "text = 'python'\nchars = [  for c in text]  # c를 그대로 리스트에 담습니다.\nprint(chars)",
            expectedOutputs: [
              "['p', 'y', 't', 'h', 'o', 'n']"
            ],
            hint: "chars = [c for c in text]"
          },
          {
            type: "quiz_code",
            content: "1부터 10 사이의 홀수들만 제곱하여 리스트로 만드세요.",
            initialCode: "squares = [  for x in range(1, 11) if   ]\nprint(squares)",
            expectedOutputs: [
              "[1, 9, 25, 49, 81]"
            ],
            hint: "squares = [x**2 for x in range(1, 11) if x % 2 != 0]"
          },
          {
            type: "quiz_code",
            content: "중첩 컴프리헨션: 구구단 2단, 3단 결과를 하나의 리스트에 담으세요.",
            initialCode: "gugu = [x * y for x in [2, 3] for y in range(1, 10)]\n# 위 코드를 그대로 실행하여 결과를 확인하세요.\nprint(gugu)",
            expectedOutputs: [
              "[2, 4, 6, 8, 10, 12, 14, 16, 18, 3, 6, 9, 12, 15, 18, 21, 24, 27]"
            ],
            hint: "그대로 실행하면 됩니다."
          },
          {
            type: "quiz_code",
            content: "딕셔너리 컴프리헨션: 리스트의 단어를 키, 그 길이를 값으로 갖는 딕셔너리를 만드세요.",
            initialCode: "words = ['apple', 'egg']\n# {w: len(w) for w in words} 문법을 사용합니다.\nd = {  }\nprint(d)",
            expectedOutputs: [
              "{'apple': 5, 'egg': 3}"
            ],
            hint: "d = {w: len(w) for w in words}"
          },
          {
            type: "quiz_code",
            content: "일반 for문으로 작성된 리스트 생성 코드를 컴프리헨션 한 줄로 압축해보세요.",
            initialCode: "old = [10, 20, 30]\n# new = []\n# for x in old: new.append(x // 10)\nnew = [  ]\nprint(new)",
            expectedOutputs: [
              "[1, 2, 3]"
            ],
            hint: "new = [x // 10 for x in old]"
          },
          {
            type: "quiz_code",
            content: "스스로 1부터 20까지 숫자 중 3의 배수만 문자열로 변환한 리스트를 만들어보세요.",
            initialCode: "# 백지 상태입니다. 리스트 컴프리헨션을 사용해 만드세요.",
            expectedOutputs: [
              "['3', '6', '9', '12', '15', '18']"
            ],
            hint: "print([str(x) for x in range(1, 21) if x % 3 == 0])"
          }
        ]
      ]
    },
    {
      id: "node_16_3",
      title: "반복문의 짝꿍 함수 (enumerate & zip)",
      lessons: [
        [
          {
            type: "quiz_multiple_choice",
            content: "반복문에서 값과 함께 '인덱스 번호'도 같이 뽑아주는 함수는?",
            options: [
              "enumerate()",
              "zip()",
              "range()"
            ],
            answer: 0,
            hint: "인덱스와 값을 묶어주는 enumerate입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (1)",
            sentenceParts: [
              "리스트의 값과 인덱스를 동시에 얻으려면 ",
              " 함수를 사용합니다."
            ],
            wordBank: [
              "enumerate",
              "zip",
              "index"
            ],
            answer: [
              0
            ],
            hint: "enumerate입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "두 개 이상의 리스트를 같은 인덱스끼리 짝지어주는 함수는?",
            options: [
              "zip()",
              "enumerate()",
              "append()"
            ],
            answer: 0,
            hint: "지퍼처럼 맞물리게 하는 zip입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (2)",
            sentenceParts: [
              "두 리스트를 병렬로 동시에 순회하려면 ",
              " 함수를 사용합니다."
            ],
            wordBank: [
              "zip",
              "enumerate",
              "concat"
            ],
            answer: [
              0
            ],
            hint: "zip입니다."
          },
          {
            type: "quiz_code",
            content: "enumerate를 사용해 과일 리스트의 인덱스와 값을 출력하세요.",
            initialCode: "fruits = ['사과', '귤']\nfor i, f in   (fruits):\n    print(f'{i}: {f}')",
            expectedOutputs: [
              "0: 사과\n1: 귤"
            ],
            hint: "for i, f in enumerate(fruits):"
          },
          {
            type: "quiz_code",
            content: "enumerate의 시작 번호를 1로 변경하여 순위를 출력하세요.",
            initialCode: "rank = ['에그', '치킨']\nfor i, name in enumerate(rank,   ):  # 두 번째 인자로 1을 줍니다.\n    print(f'{i}등 {name}')",
            expectedOutputs: [
              "1등 에그\n2등 치킨"
            ],
            hint: "enumerate(rank, 1):"
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "for i, v in enumerate(['A', 'B']): 일 때, 첫 번째 루프에서 i와 v의 값은?",
            options: [
              "i=0, v='A'",
              "i='A', v=0",
              "i=1, v='A'"
            ],
            answer: 0,
            hint: "i는 0부터 시작하는 인덱스입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (3)",
            sentenceParts: [
              "zip()은 묶으려는 리스트들 중 길이가 가장 ",
              " 길이에 맞춰집니다."
            ],
            wordBank: [
              "짧은",
              "긴",
              "무작위의"
            ],
            answer: [
              0
            ],
            hint: "짧은 길이에 맞춰집니다."
          },
          {
            type: "quiz_code",
            content: "zip을 사용해 두 리스트(이름, 점수)를 하나씩 짝지어 출력하세요.",
            initialCode: "names = ['철수', '영희']\nscores = [100, 90]\nfor name, score in   (names, scores):\n    print(name, score)",
            expectedOutputs: [
              "철수 100\n영희 90"
            ],
            hint: "for name, score in zip(names, scores):"
          },
          {
            type: "quiz_multiple_choice",
            content: "zip([1, 2], ['a', 'b', 'c']) 의 결과물 길이는?",
            options: [
              "2",
              "3",
              "에러"
            ],
            answer: 0,
            hint: "가장 짧은 리스트 길이에 맞춰집니다."
          },
          {
            type: "quiz_code",
            content: "길이가 다른 두 리스트를 zip으로 묶어보고 결과를 확인하세요.",
            initialCode: "A = [1, 2, 3]\nB = ['a', 'b']\n# zip은 짧은 쪽인 B의 길이에 맞춰 두 번만 실행됩니다.\nfor num, char in zip(A, B):\n    print(num, char)",
            expectedOutputs: [
              "1 a\n2 b"
            ],
            hint: "위 코드를 그대로 실행합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "enumerate를 사용할 때 시작 인덱스를 1로 바꾸려면?",
            options: [
              "enumerate(lst, start=1)",
              "enumerate(lst, 1)",
              "둘 다 맞음"
            ],
            answer: 0,
            hint: "start 파라미터나 두 번째 인자로 넘기면 됩니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (4)",
            sentenceParts: [
              "enumerate()의 두 번째 인자로 숫자를 넘기면 인덱스의 ",
              " 이(가) 바뀝니다."
            ],
            wordBank: [
              "시작값",
              "끝값",
              "증가량"
            ],
            answer: [
              0
            ],
            hint: "시작값이 바뀝니다."
          },
          {
            type: "quiz_code",
            content: "두 리스트를 zip으로 묶은 뒤 dict()를 사용해 바로 딕셔너리로 만드세요.",
            initialCode: "keys = ['a', 'b']\nvals = [1, 2]\nd =   (zip(keys, vals))\nprint(d)",
            expectedOutputs: [
              "{'a': 1, 'b': 2}"
            ],
            hint: "d = dict(zip(keys, vals))"
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (5)",
            sentenceParts: [
              "for i, val in enumerate(lst): 구조로 인덱스 추적 변수를 직접 만들 필요가 ",
              "."
            ],
            wordBank: [
              "없어집니다",
              "계속 필요합니다",
              "두 배로 필요합니다"
            ],
            answer: [
              0
            ],
            hint: "없어집니다."
          },
          {
            type: "quiz_code",
            content: "세 개의 리스트도 zip으로 묶을 수 있습니다. 확인해 보세요.",
            initialCode: "a = [1]\nb = [2]\nc = [3]\nfor x, y, z in zip(a, b, c):\n    print(x + y + z)",
            expectedOutputs: [
              "6"
            ],
            hint: "그대로 실행합니다."
          }
        ],
        [
          {
            type: "quiz_code",
            content: "enumerate로 순회하며 짝수 인덱스(0, 2...)인 항목만 출력하세요.",
            initialCode: "data = ['A', 'B', 'C', 'D']\nfor i, v in enumerate(data):\n    if   :  # i가 짝수일 때\n        print(v)",
            expectedOutputs: [
              "A\nC"
            ],
            hint: "if i % 2 == 0:"
          },
          {
            type: "quiz_code",
            content: "리스트 컴프리헨션과 zip을 결합하여 두 리스트의 합을 구하세요.",
            initialCode: "A = [1, 2]\nB = [10, 20]\nsums = [x + y for x, y in   ]\nprint(sums)",
            expectedOutputs: [
              "[11, 22]"
            ],
            hint: "sums = [x + y for x, y in zip(A, B)]"
          },
          {
            type: "quiz_code",
            content: "enumerate로 인덱스와 값을 튜플 리스트로 만들어 출력하세요.",
            initialCode: "items = ['a', 'b']\n# list(enumerate(items)) 로 바로 리스트 변환이 가능합니다.\nprint(list(  ))",
            expectedOutputs: [
              "[(0, 'a'), (1, 'b')]"
            ],
            hint: "print(list(enumerate(items)))"
          },
          {
            type: "quiz_code",
            content: "zip과 f-string을 활용해 '누구의 점수: 몇점' 형태로 출력하세요.",
            initialCode: "users = ['에그', '치킨']\npoints = [50, 100]\nfor u, p in zip(users, points):\n    print(f'  ')  # u와 p를 이용해 포맷팅하세요",
            expectedOutputs: [
              "에그의 점수: 50점\n치킨의 점수: 100점"
            ],
            hint: "print(f'{u}의 점수: {p}점')"
          },
          {
            type: "quiz_code",
            content: "enumerate와 zip을 동시에 쓸 수도 있습니다! 구조를 파악해보세요.",
            initialCode: "names = ['가', '나']\nages = [10, 20]\n# i는 인덱스, (n, a)는 zip에서 나온 튜플입니다.\nfor i, (n, a) in enumerate(zip(names, ages)):\n    print(i, n, a)",
            expectedOutputs: [
              "0 가 10\n1 나 20"
            ],
            hint: "그대로 실행합니다."
          },
          {
            type: "quiz_code",
            content: "스스로 enumerate나 zip을 활용하여 원하는 리스트 두 개를 묶어 출력해보세요.",
            initialCode: "# 백지 상태입니다. 두 개의 리스트를 만들고 zip으로 출력해보세요.",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "for a, b in zip([1,2], [3,4]): print(a, b)"
          }
        ]
      ]
    },
    {
      id: "node_16_4",
      title: "파이썬 스크립트의 진입점 (if __name__ == '__main__')",
      lessons: [
        [
          {
            type: "quiz_multiple_choice",
            content: "파이썬 스크립트를 직접 실행할 때 __name__ 변수에는 어떤 값이 들어가나요?",
            options: [
              "'__main__'",
              "'__self__'",
              "파일명"
            ],
            answer: 0,
            hint: "직접 실행 시 '__main__'이 됩니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (1)",
            sentenceParts: [
              "직접 실행한 파일의 내장 변수 __name__은 항상 ",
              " 문자열을 갖습니다."
            ],
            wordBank: [
              "'__main__'",
              "파일명",
              "None"
            ],
            answer: [
              0
            ],
            hint: "'__main__' 입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "다른 파일에서 이 모듈을 import 하면 __name__에는 어떤 값이 들어가나요?",
            options: [
              "해당 모듈의 이름(파일명)",
              "'__main__'",
              "'import'"
            ],
            answer: 0,
            hint: "파일명(모듈명)이 그대로 들어갑니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (2)",
            sentenceParts: [
              "모듈로 import된 파일의 __name__은 ",
              " 을 갖습니다."
            ],
            wordBank: [
              "모듈 이름",
              "'__main__'",
              "오류"
            ],
            answer: [
              0
            ],
            hint: "모듈의 고유 이름입니다."
          },
          {
            type: "quiz_code",
            content: "현재 파일의 내장 변수 __name__ 값을 그대로 출력해보세요.",
            initialCode: "print(__name__)",
            expectedOutputs: [
              "__main__"
            ],
            hint: "웹 브라우저의 파이썬 환경(Pyodide)에서도 메인 스크립트로 실행되어 __main__이 나옵니다."
          },
          {
            type: "quiz_code",
            content: "if문을 사용해 직접 실행될 때만 '시작합니다'를 출력하게 하세요.",
            initialCode: "if __name__ == '__main__':\n    print(  )",
            expectedOutputs: [
              "시작합니다"
            ],
            hint: "print('시작합니다')"
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "if __name__ == '__main__': 블록은 언제 주로 사용하나요?",
            options: [
              "이 파일이 직접 실행될 때만 작동할 코드를 넣을 때",
              "모든 함수 선언을 감쌀 때",
              "클래스를 정의할 때"
            ],
            answer: 0,
            hint: "테스트 코드나 직접 실행 시의 진입점으로 씁니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (3)",
            sentenceParts: [
              "if __name__ == '__main__': 아래의 코드는 파일이 모듈로 불려갈 땐 실행이 ",
              "."
            ],
            wordBank: [
              "방지됩니다",
              "강제됩니다",
              "반복됩니다"
            ],
            answer: [
              0
            ],
            hint: "import 시에는 무시(방지)됩니다."
          },
          {
            type: "quiz_code",
            content: "main() 함수를 만들고, 파일이 직접 실행될 때만 이 함수를 호출하세요.",
            initialCode: "def main():\n    print('메인 함수 실행')\n\nif __name__ ==   :\n    main()",
            expectedOutputs: [
              "메인 함수 실행"
            ],
            hint: "if __name__ == '__main__':"
          },
          {
            type: "quiz_multiple_choice",
            content: "파이썬에는 C/Java와 달리 고정된 main() 함수가 필수인가요?",
            options: [
              "아니요, 위에서 아래로 순차 실행됩니다",
              "네, 반드시 main()을 만들어야 합니다",
              "파이썬 버전에 따라 다릅니다"
            ],
            answer: 0,
            hint: "스크립트 언어라 고정된 진입점 함수가 필수가 아닙니다."
          },
          {
            type: "quiz_code",
            content: "모듈로 import 될 상황을 시뮬레이션 해봅니다. __name__이 모듈명이라 가정하고 조건문을 작성하세요.",
            initialCode: "current_name = 'my_module' # import된 상황 가정\nif current_name == '__main__':\n    print('직접 실행')\nelse:\n    print('모듈로 import 됨')",
            expectedOutputs: [
              "모듈로 import 됨"
            ],
            hint: "그대로 실행해 결과를 확인하세요."
          },
          {
            type: "quiz_multiple_choice",
            content: "VSCode 등 실무 파이썬 프로젝트에서 if __name__ ... 패턴은 왜 중요한가요?",
            options: [
              "import 시 원치 않는 코드가 실행되는 것을 막아줍니다",
              "코드가 더 빨리 실행되게 해줍니다",
              "문법 에러를 방지합니다"
            ],
            answer: 0,
            hint: "모듈로 재사용할 때 부작용(사이드 이펙트)을 막습니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (4)",
            sentenceParts: [
              "이 패턴을 사용하면 하나의 파일을 모듈로도 쓰고 ",
              " 스크립트로도 쓸 수 있습니다."
            ],
            wordBank: [
              "독립적인 실행",
              "주석 전용",
              "에러 출력"
            ],
            answer: [
              0
            ],
            hint: "단독으로 실행할 수 있습니다."
          },
          {
            type: "quiz_code",
            content: "함수 정의는 밖으로, 테스트 코드는 안에 넣어 분리하세요.",
            initialCode: "def add(a, b):\n    return a + b\n# 아래 블록 안에 테스트 코드를 넣어주세요.\nif __name__ == '__main__':\n    print(add(2, 3))",
            expectedOutputs: [
              "5"
            ],
            hint: "그대로 실행하세요. 이렇게 짜면 add 함수만 다른 파일에서 안전하게 import할 수 있습니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (5)",
            sentenceParts: [
              "실무에서는 보통 메인 로직을 main() 이라는 별도 함수로 빼고, 마지막 블록에서 이 함수를 ",
              " 합니다."
            ],
            wordBank: [
              "호출",
              "삭제",
              "숨김"
            ],
            answer: [
              0
            ],
            hint: "호출(call)하여 실행합니다."
          },
          {
            type: "quiz_code",
            content: "파이썬 개발자들의 관용구를 똑같이 손으로 타이핑해 외워보세요.",
            initialCode: "# if __name__ == '__main__': 를 타이핑하세요\n    print('Hello World!')",
            expectedOutputs: [
              "Hello World!"
            ],
            hint: "if __name__ == '__main__':\n    print('Hello World!')"
          }
        ],
        [
          {
            type: "quiz_code",
            content: "조건이 틀렸을 때는 아무것도 출력되지 않아야 합니다.",
            initialCode: "if __name__ == 'other_module':\n    print('출력되지 않아야 함')",
            expectedOutputs: [
              ""
            ],
            hint: "__name__은 '__main__'이므로 조건이 거짓이 되어 아무것도 출력되지 않습니다."
          },
          {
            type: "quiz_code",
            content: "만약 이 블록이 없다면? 함수 바깥 코드가 import 시 어떻게 무단 실행되는지 시뮬레이션 합니다.",
            initialCode: "# if문 없이 바로 작성된 코드 (import 시 강제 실행됨)\nprint('파일이 로드되었습니다!')",
            expectedOutputs: [
              "파일이 로드되었습니다!"
            ],
            hint: "그대로 실행하세요."
          },
          {
            type: "quiz_code",
            content: "main 함수 안에서 sys.argv(명령줄 인자)를 처리하는 패턴을 확인하세요.",
            initialCode: "import sys\ndef main(args):\n    print('인자 개수:', len(args))\nif __name__ == '__main__':\n    main(sys.argv)",
            expectedOutputs: [
              "인자 개수: 1"
            ],
            hint: "브라우저 환경이라 기본 인자 1개(스크립트 이름 없음 등)로 동작합니다."
          },
          {
            type: "quiz_code",
            content: "pass 키워드를 사용해 구조만 먼저 잡아보세요.",
            initialCode: "def main():\n    pass\nif __name__ == '__main__':\n    pass\nprint('구조 잡기 완료')",
            expectedOutputs: [
              "구조 잡기 완료"
            ],
            hint: "그대로 실행하세요."
          },
          {
            type: "quiz_code",
            content: "실전 구조: 메인 로직을 감싼 main()과 이를 호출하는 if 블록을 직접 완성하세요.",
            initialCode: "def main():\n    print('앱 실행')\n\n# 여기에 if 블록을 작성하세요.",
            expectedOutputs: [
              "앱 실행"
            ],
            hint: "if __name__ == '__main__':\n    main()"
          },
          {
            type: "quiz_code",
            content: "스스로 main() 함수를 만들고 자유롭게 텍스트를 출력하는 스크립 구조를 완성하세요.",
            initialCode: "# 백지 상태입니다.",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "def main():\n    print('완성')\nif __name__ == '__main__':\n    main()"
          }
        ]
      ]
    },
    {
      id: "node_16_5",
      title: "이름 없는 함수와 친구들 (lambda, map, filter)",
      lessons: [
        [
          {
            type: "quiz_multiple_choice",
            content: "이름 없는 간단한 한 줄 함수를 만들 때 사용하는 키워드는?",
            options: [
              "lambda",
              "def",
              "anon"
            ],
            answer: 0,
            hint: "파이썬의 익명 함수 키워드는 lambda입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (1)",
            sentenceParts: [
              "이름 없는 함수를 만들 때 ",
              " 키워드를 사용합니다."
            ],
            wordBank: [
              "lambda",
              "def",
              "class"
            ],
            answer: [
              0
            ],
            hint: "lambda입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "lambda x: x + 1 에 대한 설명으로 옳은 것은?",
            options: [
              "입력 x에 1을 더해 반환한다",
              "x를 1로 만든다",
              "아무것도 반환하지 않는다"
            ],
            answer: 0,
            hint: "x를 받아 x + 1을 돌려주는 함수입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (2)",
            sentenceParts: [
              "lambda 인자: ",
              " 형식으로 콜론 뒤에 반환값을 적습니다."
            ],
            wordBank: [
              "반환식",
              "return",
              "pass"
            ],
            answer: [
              0
            ],
            hint: "반환할 식(표현식)입니다."
          },
          {
            type: "quiz_code",
            content: "lambda를 사용해 x에 10을 곱하는 함수를 만들고 5를 넣어 실행해보세요.",
            initialCode: "times_ten =   x: x * 10\nprint(times_ten(5))",
            expectedOutputs: [
              "50"
            ],
            hint: "lambda x: x * 10"
          },
          {
            type: "quiz_code",
            content: "lambda를 사용해 인자 x, y를 받아 두 수를 더하는 함수를 작성하세요.",
            initialCode: "add = lambda x, y:   \nprint(add(2, 3))",
            expectedOutputs: [
              "5"
            ],
            hint: "lambda x, y: x + y"
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "리스트의 모든 원소에 특정 함수를 적용하는 내장 함수는?",
            options: [
              "map()",
              "filter()",
              "apply()"
            ],
            answer: 0,
            hint: "값을 일괄 변환(매핑)해주는 map입니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (3)",
            sentenceParts: [
              "리스트의 모든 요소를 일괄 변환할 땐 ",
              " 함수를 씁니다."
            ],
            wordBank: [
              "map",
              "filter",
              "reduce"
            ],
            answer: [
              0
            ],
            hint: "map입니다."
          },
          {
            type: "quiz_code",
            content: "map과 lambda를 사용해 리스트의 모든 숫자에 2를 곱하세요.",
            initialCode: "nums = [1, 2, 3]\nresult = list(map(  x: x * 2, nums))\nprint(result)",
            expectedOutputs: [
              "[2, 4, 6]"
            ],
            hint: "list(map(lambda x: x * 2, nums))"
          },
          {
            type: "quiz_multiple_choice",
            content: "리스트에서 조건이 참인 원소만 골라내는 내장 함수는?",
            options: [
              "filter()",
              "map()",
              "select()"
            ],
            answer: 0,
            hint: "조건에 맞는 것만 걸러내는(필터링하는) filter입니다."
          },
          {
            type: "quiz_code",
            content: "map을 이용해 문자열 리스트를 정수 리스트로 변환하세요.",
            initialCode: "str_nums = ['10', '20', '30']\n# int 함수를 map에 전달하면 일괄 변환됩니다.\nint_nums = list(map(  , str_nums))\nprint(int_nums)",
            expectedOutputs: [
              "[10, 20, 30]"
            ],
            hint: "list(map(int, str_nums))"
          },
          {
            type: "quiz_multiple_choice",
            content: "map()이나 filter()의 결과를 리스트로 보려면 어떻게 해야 하나요?",
            options: [
              "list()로 감싸준다",
              "그냥 출력하면 된다",
              "dict()로 감싼다"
            ],
            answer: 0,
            hint: "결과가 이터레이터(Iterator)이므로 list()로 변환해야 합니다."
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (4)",
            sentenceParts: [
              "리스트에서 조건에 맞는 요소만 추려낼 땐 ",
              " 함수를 씁니다."
            ],
            wordBank: [
              "filter",
              "map",
              "extract"
            ],
            answer: [
              0
            ],
            hint: "filter입니다."
          },
          {
            type: "quiz_code",
            content: "filter와 lambda를 사용해 리스트에서 짝수만 걸러내세요.",
            initialCode: "nums = [1, 2, 3, 4, 5]\nresult = list(filter(lambda x:   , nums))  # x % 2 == 0 을 넣으세요.\nprint(result)",
            expectedOutputs: [
              "[2, 4]"
            ],
            hint: "list(filter(lambda x: x % 2 == 0, nums))"
          },
          {
            type: "quiz_word_bank",
            content: "단어 블록 (5)",
            sentenceParts: [
              "map과 filter의 결과는 반복 객체이므로 ",
              "()를 씌워 리스트로 만듭니다."
            ],
            wordBank: [
              "list",
              "tuple",
              "dict"
            ],
            answer: [
              0
            ],
            hint: "list()입니다."
          },
          {
            type: "quiz_code",
            content: "filter를 사용해 길이가 3 이상인 과일만 골라내세요.",
            initialCode: "fruits = ['사과', '바나나', '귤']\nresult = list(filter(lambda f: len(f) >= 3,   ))\nprint(result)",
            expectedOutputs: [
              "['바나나']"
            ],
            hint: "list(filter(lambda f: len(f) >= 3, fruits))"
          }
        ],
        [
          {
            type: "quiz_code",
            content: "기존에 배운 리스트 컴프리헨션과 map의 결과가 같음을 확인하세요.",
            initialCode: "nums = [1, 2]\nprint([x*10 for x in nums])\nprint(list(map(lambda x: x*10, nums)))",
            expectedOutputs: [
              "[10, 20]\n[10, 20]"
            ],
            hint: "그대로 실행합니다. 둘 다 많이 쓰이는 패턴입니다."
          },
          {
            type: "quiz_code",
            content: "람다 함수는 다른 함수의 인자로 바로 전달할 때 진가를 발휘합니다.",
            initialCode: "words = ['banana', 'apple', 'cherry']\n# 길이(len)를 기준으로 정렬해보세요. (sort의 key로 전달)\nwords.sort(key=lambda x: len(x))\nprint(words)",
            expectedOutputs: [
              "['apple', 'banana', 'cherry']"
            ],
            hint: "그대로 실행해 길이순 정렬을 확인하세요."
          },
          {
            type: "quiz_code",
            content: "map, filter, lambda를 연속으로 조합해보세요! (짝수만 골라 10 곱하기)",
            initialCode: "nums = [1, 2, 3, 4, 5]\nevens = filter(lambda x: x % 2 == 0, nums)\nresult = list(map(lambda x: x * 10, evens))\nprint(result)",
            expectedOutputs: [
              "[20, 40]"
            ],
            hint: "그대로 실행해 파이프라인 형태의 처리를 경험하세요."
          },
          {
            type: "quiz_code",
            content: "여러 인자를 받는 람다와 map을 확인하세요.",
            initialCode: "A = [1, 2]\nB = [10, 20]\n# 인자를 여러 개 받는 함수와 여러 개의 리스트를 넘기면 zip처럼 동작합니다.\nresult = list(map(lambda x, y: x + y, A, B))\nprint(result)",
            expectedOutputs: [
              "[11, 22]"
            ],
            hint: "그대로 실행합니다."
          },
          {
            type: "quiz_code",
            content: "스스로 lambda를 정의해 바로 호출해보세요 (IIFE 패턴).",
            initialCode: "print((lambda x: x * 100)(5))",
            expectedOutputs: [
              "500"
            ],
            hint: "그대로 실행합니다."
          },
          {
            type: "quiz_code",
            content: "자유롭게 map이나 filter와 lambda를 결합한 스크립트를 작성해보세요.",
            initialCode: "# 백지 상태입니다. 숫자 리스트를 만들어 홀수만 거르거나 변환해보세요.",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "print(list(filter(lambda x: x%2!=0, [1,2,3])))"
          }
        ]
      ]
    }
  ]
}
,
  {
  id: 17,
  title: "UNIT 17\n파이썬 실무 스킬업",
  nodes: [
    {
      id: "node_17_1",
      title: "타입 힌팅 (Type Hinting)",
      description: "VSCode 실무 환경에서 꼭 필요한 파이썬의 고급 스킬을 마스터합니다.",
      lessons: [
        [
          {
            type: "quiz_word_bank",
            content: "[개념 확인 1] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "함수의 인자 타입을 명시할 때는 인자 뒤에 ",
              " 을 붙여 적습니다."
            ],
            wordBank: [
              "콜론(:)",
              "화살표(->)",
              "이퀄(=)"
            ],
            answer: [
              0
            ],
            hint: "name: str 처럼 콜론을 씁니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 2] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "함수의 반환 타입을 명시할 때는 인자 괄호 뒤에 ",
              " 기호를 씁니다."
            ],
            wordBank: [
              "->",
              ":",
              "=>"
            ],
            answer: [
              0
            ],
            hint: "화살표(->)입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 3] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "문자열 타입을 힌팅하려면 ",
              " 을 적어줍니다."
            ],
            wordBank: [
              "str",
              "String",
              "char"
            ],
            answer: [
              0
            ],
            hint: "파이썬의 문자열은 str입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 4] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "타입 힌트를 쓰면 ",
              " 같은 에디터에서 자동완성이 매우 잘 됩니다."
            ],
            wordBank: [
              "VSCode",
              "그림판",
              "메모장"
            ],
            answer: [
              0
            ],
            hint: "개발자들의 영혼의 단짝 VSCode입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 5] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "타입 힌트는 강제성이 없어서 틀려도 에러가 ",
              "."
            ],
            wordBank: [
              "나지 않는다",
              "난다",
              "종료된다"
            ],
            answer: [
              0
            ],
            hint: "파이썬은 여전히 동적 타입 언어이므로 에러는 나지 않습니다."
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 1] 파이썬에서 변수나 함수의 반환값에 자료형을 명시하는 문법을 무엇이라 하나요?",
            options: [
              "Type Hinting (타입 힌팅)",
              "Type Forcing",
              "Strict Typing"
            ],
            answer: 0,
            hint: "가독성과 버그 방지를 위해 도입된 Type Hinting입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 2] 함수 반환값의 타입을 지정할 때 올바른 문법은?",
            options: [
              "def add() -> int:",
              "def add() : int",
              "def add() returns int:"
            ],
            answer: 0,
            hint: "화살표(->) 기호를 사용해 반환 타입을 명시합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 3] 타입 힌트를 사용하면 파이썬이 실행될 때 타입이 틀리면 에러를 발생시킬까요?",
            options: [
              "발생시키지 않는다 (단지 힌트일 뿐)",
              "무조건 발생시킨다",
              "파이썬 버전에 따라 다르다"
            ],
            answer: 0,
            hint: "타입 힌팅은 런타임 에러를 발생시키지 않으며, 개발자나 IDE(VSCode)를 위한 '가이드' 역할을 합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 4] 리스트 안에 정수만 들어감을 명시하고 싶을 때 올바른 타입 힌트는? (최신 파이썬 기준)",
            options: [
              "list[int]",
              "List(int)",
              "list<int>"
            ],
            answer: 0,
            hint: "파이썬 3.9+ 부터는 소문자 list[int] 형태로 바로 명시할 수 있습니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 5] 타입 힌팅의 주된 목적이 아닌 것은?",
            options: [
              "실행 속도(성능) 향상",
              "IDE 자동완성 지원",
              "코드 가독성 향상"
            ],
            answer: 0,
            hint: "타입 힌팅은 실행 속도와는 무관하며, 유지보수와 가독성을 위한 것입니다."
          }
        ],
        [
          {
            type: "quiz_code",
            content: "[실습 1] 이름(str)과 나이(int)를 받아 인사말을 반환(str)하는 함수에 타입 힌트를 추가하세요.",
            initialCode: "def greet(name:   , age:   )    str:\n    return f\"안녕 {name}! 넌 {age}살이구나.\"\nprint(greet('코딩에그', 5))",
            expectedOutputs: [
              "안녕 코딩에그! 넌 5살이구나."
            ],
            hint: "name: str, age: int, 그리고 -> str"
          },
          {
            type: "quiz_code",
            content: "[실습 2] 정수(int) 리스트를 받아 총합(int)을 반환하는 함수를 작성하세요.",
            initialCode: "def calc_sum(nums: list[  ]) ->   :\n    return sum(nums)\nprint(calc_sum([1, 2, 3]))",
            expectedOutputs: [
              "6"
            ],
            hint: "nums: list[int] -> int"
          },
          {
            type: "quiz_code",
            content: "[실습 3] 변수에도 타입 힌트를 달 수 있습니다. 정수형 변수 score를 선언하세요.",
            initialCode: "score:    = 100\nprint(score)",
            expectedOutputs: [
              "100"
            ],
            hint: "score: int"
          },
          {
            type: "quiz_code",
            content: "[실습 4] 딕셔너리 값에 대한 타입 힌팅도 해보세요. (키는 str, 값은 int)",
            initialCode: "scores: dict[   ,    ] = {'수학': 100, '영어': 90}\nprint(scores['수학'])",
            expectedOutputs: [
              "100"
            ],
            hint: "dict[str, int]"
          },
          {
            type: "quiz_code",
            content: "[실습 5] 타입 힌트가 틀려도 실행은 됨을 확인해보세요.",
            initialCode: "def add(a: int) -> int:\n    # 타입 힌트는 int지만 문자열을 넣어봅니다.\n    return a + '입니다'\nprint(add('파이썬'))",
            expectedOutputs: [
              "파이썬입니다"
            ],
            hint: "그대로 실행하면 문자열 덧셈이 정상 동작합니다."
          },
          {
            type: "quiz_code",
            content: "[실습 6] 백지에서 두 실수를 곱해 반환하는 함수를 타입 힌팅을 사용해 작성해보세요. (실수는 float)",
            initialCode: "# 함수 이름: multiply, 인자 2개, 반환값 타입 힌팅 포함",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "def multiply(x: float, y: float) -> float:\n    return x * y\nprint(multiply(3.0, 2.5))"
          }
        ]
      ]
    },
    {
      id: "node_17_2",
      title: "가변 인자의 마법 (*args & **kwargs)",
      description: "VSCode 실무 환경에서 꼭 필요한 파이썬의 고급 스킬을 마스터합니다.",
      lessons: [
        [
          {
            type: "quiz_word_bank",
            content: "[개념 확인 1] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "개수를 알 수 없는 일반 인자들을 받을 땐 ",
              "를 사용합니다."
            ],
            wordBank: [
              "*args",
              "**kwargs",
              "self"
            ],
            answer: [
              0
            ],
            hint: "별 하나짜리 *args입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 2] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "*args는 함수 안에서 괄호로 묶인 ",
              " 형태로 사용됩니다."
            ],
            wordBank: [
              "튜플",
              "리스트",
              "문자열"
            ],
            answer: [
              0
            ],
            hint: "수정 불가능한 튜플입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 3] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "이름표가 붙은 여러 인자를 받을 땐 ",
              "를 사용합니다."
            ],
            wordBank: [
              "**kwargs",
              "*args",
              "dict"
            ],
            answer: [
              0
            ],
            hint: "별 두개짜리 **kwargs입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 4] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "**kwargs는 함수 안에서 키와 값을 가진 ",
              " 형태로 사용됩니다."
            ],
            wordBank: [
              "딕셔너리",
              "리스트",
              "튜플"
            ],
            answer: [
              0
            ],
            hint: "딕셔너리(dict)입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 5] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "별표(*) 기호는 남은 인자들을 모두 모아준다는 의미로 ",
              " 연산자라고도 부릅니다."
            ],
            wordBank: [
              "패킹(Packing)",
              "언패킹",
              "복사"
            ],
            answer: [
              0
            ],
            hint: "하나로 묶어주는 패킹입니다."
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 1] 인자의 개수를 미리 알 수 없을 때 사용하는 파이썬 문법은?",
            options: [
              "*args",
              "**kwargs",
              "*vars"
            ],
            answer: 0,
            hint: "Arguments의 약자인 *args를 주로 씁니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 2] *args로 전달된 인자들은 함수 내부에서 어떤 자료형으로 취급되나요?",
            options: [
              "튜플(Tuple)",
              "리스트(List)",
              "딕셔너리(Dict)"
            ],
            answer: 0,
            hint: "수정할 수 없는 튜플로 묶여서 들어옵니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 3] 키워드 인자를 무한정 받을 수 있게 해주는 문법은?",
            options: [
              "**kwargs",
              "*args",
              "&&kwargs"
            ],
            answer: 0,
            hint: "Keyword Arguments의 약자인 **kwargs입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 4] **kwargs로 전달된 인자들은 함수 내부에서 어떤 자료형으로 취급되나요?",
            options: [
              "딕셔너리(Dict)",
              "리스트(List)",
              "튜플(Tuple)"
            ],
            answer: 0,
            hint: "키-값 쌍의 형태이므로 딕셔너리로 다뤄집니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 5] 일반 인자, *args, **kwargs를 섞어 쓸 때 올바른 순서는?",
            options: [
              "일반 인자, *args, **kwargs",
              "*args, **kwargs, 일반 인자",
              "상관없음"
            ],
            answer: 0,
            hint: "반드시 지정된 인자, 가변 인자(*), 키워드 가변 인자(**) 순이어야 합니다."
          }
        ],
        [
          {
            type: "quiz_code",
            content: "[실습 1] 입력된 모든 숫자를 더해주는 함수를 만들어보세요.",
            initialCode: "def add_all(   ):\n    return sum(args)\nprint(add_all(1, 2, 3, 4, 5))",
            expectedOutputs: [
              "15"
            ],
            hint: "*args를 넣으세요."
          },
          {
            type: "quiz_code",
            content: "[실습 2] 이름표(키워드)가 붙은 모든 인자를 출력하는 함수를 만들어보세요.",
            initialCode: "def print_info(    ):\n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\nprint_info(name='에그', age=5)",
            expectedOutputs: [
              "name: 에그\nage: 5"
            ],
            hint: "**kwargs를 넣으세요."
          },
          {
            type: "quiz_code",
            content: "[실습 3] 일반 인자와 *args를 같이 써보세요.",
            initialCode: "def make_pizza(size,    ):\n    print(f\"{size}인치 피자 토핑: {args}\")\nmake_pizza(12, '치즈', '페퍼로니', '올리브')",
            expectedOutputs: [
              "12인치 피자 토핑: ('치즈', '페퍼로니', '올리브')"
            ],
            hint: "*args를 넣으세요."
          },
          {
            type: "quiz_code",
            content: "[실습 4] *args와 **kwargs를 모두 받는 만능 함수를 만들어보세요.",
            initialCode: "def super_func(*args, **kwargs):\n    print('args:', args)\n    print('kwargs:', kwargs)\n# 그대로 실행해보세요\nsuper_func(1, 2, a=3, b=4)",
            expectedOutputs: [
              "args: (1, 2)\nkwargs: {'a': 3, 'b': 4}"
            ],
            hint: "그대로 실행합니다."
          },
          {
            type: "quiz_code",
            content: "[실습 5] 리스트의 요소들을 풀어서(Unpacking) *args 함수에 전달해보세요.",
            initialCode: "def add_three(a, b, c):\n    return a + b + c\nnums = [10, 20, 30]\n# nums 앞에 *를 붙이면 리스트가 풀려서 들어갑니다.\nprint(add_three(  nums))",
            expectedOutputs: [
              "60"
            ],
            hint: "함수 호출 시 *nums를 씁니다."
          },
          {
            type: "quiz_code",
            content: "[실습 6] 백지에서 *args를 이용해 전달받은 모든 문자열을 이어붙여 반환하는 함수를 만들어보세요.",
            initialCode: "# 힌트: ''.join(args)를 사용해보세요.",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "def concat(*args):\n    return ''.join(args)\nprint(concat('안녕', '하세요'))"
          }
        ]
      ]
    },
    {
      id: "node_17_3",
      title: "함수를 감싸는 마법사 (데코레이터)",
      description: "VSCode 실무 환경에서 꼭 필요한 파이썬의 고급 스킬을 마스터합니다.",
      lessons: [
        [
          {
            type: "quiz_word_bank",
            content: "[개념 확인 1] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "함수의 실행 앞뒤로 덧붙일 기능이 있을 때 ",
              "를 사용합니다."
            ],
            wordBank: [
              "데코레이터",
              "컴프리헨션",
              "제너레이터"
            ],
            answer: [
              0
            ],
            hint: "Decorator입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 2] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "함수 바로 위 줄에 ",
              " 기호를 적고 데코레이터 이름을 씁니다."
            ],
            wordBank: [
              "@",
              "#",
              "!"
            ],
            answer: [
              0
            ],
            hint: "골뱅이(@) 기호입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 3] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "데코레이터를 만들려면 내부에 ",
              " 함수를 하나 더 정의해야 합니다."
            ],
            wordBank: [
              "감싸는(wrapper)",
              "반복하는(loop)",
              "삭제하는(delete)"
            ],
            answer: [
              0
            ],
            hint: "기존 함수를 감싸는 래퍼 함수입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 4] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "데코레이터는 기존 함수의 ",
              "를 수정하지 않고 확장하는 멋진 기술입니다."
            ],
            wordBank: [
              "원본 코드",
              "이름",
              "확장자"
            ],
            answer: [
              0
            ],
            hint: "원본 코드를 보존합니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 5] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "함수의 실행 시간을 측정할 때도 ",
              " 형태로 만들면 모든 함수에 재사용이 가능합니다."
            ],
            wordBank: [
              "데코레이터",
              "전역 변수",
              "클래스"
            ],
            answer: [
              0
            ],
            hint: "공통 기능은 데코레이터로 만듭니다."
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 1] 기존 코드를 건드리지 않고 함수의 앞뒤에 기능을 추가하고 싶을 때 사용하는 문법은?",
            options: [
              "Decorator (데코레이터)",
              "Generator",
              "Class"
            ],
            answer: 0,
            hint: "함수를 '장식'해주는 Decorator입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 2] 데코레이터를 사용할 때 함수 위에 붙이는 기호는?",
            options: [
              "@",
              "#",
              "$"
            ],
            answer: 0,
            hint: "이메일 등에 쓰이는 골뱅이(@) 기호를 사용합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 3] 데코레이터는 결국 무엇의 또 다른 형태인가요?",
            options: [
              "함수를 인자로 받는 함수",
              "새로운 데이터 타입",
              "반복문의 일종"
            ],
            answer: 0,
            hint: "데코레이터는 함수를 통째로 넘겨받아 감싸는 고차 함수입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 4] 데코레이터 내부에서 기존 함수를 감싸는 내부 함수의 이름으로 관례적으로 자주 쓰이는 것은?",
            options: [
              "wrapper",
              "inner",
              "main"
            ],
            answer: 0,
            hint: "감싼다는 의미의 wrapper를 자주 사용합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 5] Flask나 Django 같은 웹 프레임워크에서 특정 페이지 접속 권한을 체크할 때 자주 쓰이는 것은?",
            options: [
              "데코레이터",
              "map 함수",
              "while 문"
            ],
            answer: 0,
            hint: "권한 체크나 로그아웃 처리 등 공통 작업에 데코레이터가 애용됩니다."
          }
        ],
        [
          {
            type: "quiz_code",
            content: "[실습 1] 함수 앞뒤로 메시지를 출력하는 초간단 데코레이터를 확인하세요.",
            initialCode: "def my_deco(func):\n    def wrapper():\n        print('--- 시작 ---')\n        func()\n        print('--- 끝 ---')\n    return wrapper\n\n@my_deco\ndef hello():\n    print('안녕하세요!')\n\nhello()",
            expectedOutputs: [
              "--- 시작 ---\n안녕하세요!\n--- 끝 ---"
            ],
            hint: "그대로 실행해서 @my_deco의 마법을 확인하세요."
          },
          {
            type: "quiz_code",
            content: "[실습 2] 이번엔 빈칸을 채워 데코레이터를 완성해보세요.",
            initialCode: "def bold_deco(func):\n    def wrapper():\n        return \"<b>\" + func() + \"</b>\"\n    return   \n\n@bold_deco\ndef get_text():\n    return \"코딩에그\"\n\nprint(get_text())",
            expectedOutputs: [
              "<b>코딩에그</b>"
            ],
            hint: "내부 함수인 wrapper를 리턴해야 합니다."
          },
          {
            type: "quiz_code",
            content: "[실습 3] 인자를 받는 함수를 위한 데코레이터에는 *args, **kwargs가 필수입니다.",
            initialCode: "def trace(func):\n    def wrapper(  args,   kwargs):\n        print(func.__name__, '함수 호출됨')\n        return func(*args, **kwargs)\n    return wrapper\n\n@trace\ndef add(a, b):\n    return a + b\n\nprint(add(10, 20))",
            expectedOutputs: [
              "add 함수 호출됨\n30"
            ],
            hint: "*args와 **kwargs를 넣으세요."
          },
          {
            type: "quiz_code",
            content: "[실습 4] 실행 시간을 재는 실무형 데코레이터를 실행해보세요.",
            initialCode: "import time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        res = func(*args, **kwargs)\n        print(f\"{func.__name__} 소요시간: {time.time() - start:.4f}초\")\n        return res\n    return wrapper\n\n@timer\ndef slow_func():\n    time.sleep(0.5)\n    return '완료'\n\nprint(slow_func())",
            expectedOutputs: [
              "slow_func 소요시간: 0.5000초\n완료"
            ],
            hint: "그대로 실행해보세요 (시간은 조금 다를 수 있습니다)."
          },
          {
            type: "quiz_code",
            content: "[실습 5] 백지에서 여러분만의 데코레이터를 만들어보세요. (호출 전후로 별표(*)를 10개씩 출력)",
            initialCode: "# 함수 이름: star_deco",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "def star_deco(func):\n    def wrapper(*args, **kwargs):\n        print('*'*10)\n        func(*args, **kwargs)\n        print('*'*10)\n    return wrapper"
          }
        ]
      ]
    },
    {
      id: "node_17_4",
      title: "메모리 다이어트 (제너레이터와 yield)",
      description: "VSCode 실무 환경에서 꼭 필요한 파이썬의 고급 스킬을 마스터합니다.",
      lessons: [
        [
          {
            type: "quiz_word_bank",
            content: "[개념 확인 1] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "제너레이터 함수는 값을 반환할 때 return 대신 ",
              " 키워드를 사용합니다."
            ],
            wordBank: [
              "yield",
              "give",
              "pass"
            ],
            answer: [
              0
            ],
            hint: "yield(일드) 입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 2] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "일반 함수는 return을 만나면 종료되지만, 제너레이터는 yield를 만나면 일시 ",
              " 상태가 됩니다."
            ],
            wordBank: [
              "정지(pause)",
              "종료",
              "삭제"
            ],
            answer: [
              0
            ],
            hint: "상태를 기억한 채 정지합니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 3] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "대용량의 데이터를 다룰 때 제너레이터를 쓰면 ",
              " 사용량을 획기적으로 줄일 수 있습니다."
            ],
            wordBank: [
              "메모리",
              "CPU",
              "하드디스크"
            ],
            answer: [
              0
            ],
            hint: "리스트처럼 모두 들고있지 않아 메모리가 절약됩니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 4] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "제너레이터 객체에서 값을 하나씩 꺼내려면 ",
              "() 함수를 씁니다."
            ],
            wordBank: [
              "next",
              "pop",
              "get"
            ],
            answer: [
              0
            ],
            hint: "next()입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 5] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "무한 반복문(while True) 안에 yield를 넣으면 끊임없이 값을 만들어내는 ",
              " 수열을 만들 수 있습니다."
            ],
            wordBank: [
              "무한",
              "유한",
              "에러"
            ],
            answer: [
              0
            ],
            hint: "무한 루프에 빠지지 않고 필요할 때만 값을 만듭니다."
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 1] 값을 한꺼번에 메모리에 올리지 않고, 필요할 때마다 하나씩 만들어내는 함수를 무엇이라 하나요?",
            options: [
              "Generator (제너레이터)",
              "List (리스트)",
              "Tuple (튜플)"
            ],
            answer: 0,
            hint: "데이터를 '생성'해내는 Generator입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 2] 제너레이터를 만들 때 return 대신 사용하는 핵심 키워드는?",
            options: [
              "yield",
              "give",
              "next"
            ],
            answer: 0,
            hint: "양보하다, 산출하다 라는 뜻의 yield를 사용합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 3] 제너레이터의 가장 큰 장점은 무엇인가요?",
            options: [
              "메모리를 극도로 적게 차지한다",
              "코드가 짧아진다",
              "수학 계산이 빠르다"
            ],
            answer: 0,
            hint: "1억 개의 데이터를 다뤄도 메모리가 터지지 않습니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 4] 제너레이터에서 다음 값을 뽑아내기 위해 사용하는 내장 함수는?",
            options: [
              "next()",
              "step()",
              "pop()"
            ],
            answer: 0,
            hint: "다음(next) 값을 달라고 요청합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 5] 리스트 컴프리헨션의 괄호를 대괄호([]) 대신 소괄호(())로 묶으면 무엇이 되나요?",
            options: [
              "제너레이터 표현식",
              "튜플 컴프리헨션",
              "에러 발생"
            ],
            answer: 0,
            hint: "소괄호를 쓰면 메모리를 절약하는 제너레이터가 됩니다."
          }
        ],
        [
          {
            type: "quiz_code",
            content: "[실습 1] return 대신 yield를 사용해 값을 하나씩 뱉어내는 제너레이터를 확인하세요.",
            initialCode: "def count_up():\n    yield 1\n    yield 2\n    yield 3\n\n# 제너레이터 객체 생성\ngen = count_up()\nprint(next(gen))\nprint(next(gen))",
            expectedOutputs: [
              "1\n2"
            ],
            hint: "그대로 실행합니다. next()를 호출할 때마다 다음 yield까지 실행됩니다."
          },
          {
            type: "quiz_code",
            content: "[실습 2] for문을 사용하면 next() 없이도 끝까지 알아서 뽑아줍니다.",
            initialCode: "def abc():\n    yield 'A'\n    yield 'B'\n    yield 'C'\n\nfor letter in   ():\n    print(letter)",
            expectedOutputs: [
              "A\nB\nC"
            ],
            hint: "abc() 를 호출하세요."
          },
          {
            type: "quiz_code",
            content: "[실습 3] 무한히 1씩 증가하는 번호표 발행기(제너레이터)를 만들어보세요.",
            initialCode: "def ticket_machine():\n    num = 1\n    while True:\n           num\n        num += 1\n\nmachine = ticket_machine()\nprint(next(machine))\nprint(next(machine))\nprint(next(machine))",
            expectedOutputs: [
              "1\n2\n3"
            ],
            hint: "yield num 을 적으세요."
          },
          {
            type: "quiz_code",
            content: "[실습 4] 제너레이터 표현식을 사용해 메모리를 절약해보세요.",
            initialCode: "# 리스트: 메모리를 한 번에 할당함\nlist_comp = [x*x for x in range(3)]\n# 제너레이터: 괄호를 소괄호로 변경\ngen_comp = (  *  for x in range(3))\n\nprint(list_comp)\nprint(gen_comp) # 객체 자체가 출력됨\nprint(next(gen_comp))",
            expectedOutputs: [
              "[0, 1, 4]\n<generator object ...>\n0"
            ],
            hint: "x*x 를 적으세요."
          },
          {
            type: "quiz_code",
            content: "[실습 5] 백지에서 짝수만 무한히 만들어내는 제너레이터를 작성하고 3개만 뽑아보세요.",
            initialCode: "# 힌트: yield x",
            expectedOutputs: [
              "자유 출력"
            ],
            hint: "def evens():\n    n = 0\n    while True:\n        yield n\n        n += 2\ng = evens()\nprint(next(g))\nprint(next(g))\nprint(next(g))"
          }
        ]
      ]
    },
    {
      id: "node_17_5",
      title: "VSCode와 실무 환경 세팅 (pip & venv)",
      description: "VSCode 실무 환경에서 꼭 필요한 파이썬의 고급 스킬을 마스터합니다.",
      lessons: [
        [
          {
            type: "quiz_word_bank",
            content: "[개념 확인 1] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "파이썬 패키지 관리자의 이름은 ",
              " 입니다."
            ],
            wordBank: [
              "pip",
              "npm",
              "git"
            ],
            answer: [
              0
            ],
            hint: "Pip Installs Packages의 약자입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 2] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "프로젝트별로 패키지 충돌을 막기 위해 ",
              " 환경을 만듭니다."
            ],
            wordBank: [
              "가상(Virtual)",
              "실제",
              "네트워크"
            ],
            answer: [
              0
            ],
            hint: "가상 환경입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 3] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "가상 환경을 활성화하면 터미널 프롬프트 맨 앞에 ",
              " 괄호가 생깁니다."
            ],
            wordBank: [
              "(가상환경 이름)",
              "[버전]",
              "<경고>"
            ],
            answer: [
              0
            ],
            hint: "(myenv) 처럼 이름이 표시됩니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 4] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "남의 프로젝트를 다운받은 후, ",
              " install -r requirements.txt 를 치면 필요 패키지가 싹 설치됩니다."
            ],
            wordBank: [
              "pip",
              "python",
              "run"
            ],
            answer: [
              0
            ],
            hint: "설치 명령어는 pip입니다."
          },
          {
            type: "quiz_word_bank",
            content: "[개념 확인 5] 다음 빈칸을 알맞은 단어로 채워보세요.",
            sentenceParts: [
              "VSCode에서 파이썬을 잘 쓰려면 Microsoft가 제공하는 Python ",
              "(플러그인)을 꼭 설치해야 합니다."
            ],
            wordBank: [
              "확장(Extension)",
              "테마",
              "폰트"
            ],
            answer: [
              0
            ],
            hint: "VSCode Extension 탭에서 받습니다."
          }
        ],
        [
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 1] 내 컴퓨터(VSCode 등)에서 남이 만든 유용한 파이썬 패키지를 설치할 때 쓰는 명령어는?",
            options: [
              "pip install",
              "python download",
              "get package"
            ],
            answer: 0,
            hint: "파이썬의 공식 패키지 매니저는 pip입니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 2] 프로젝트마다 서로 다른 패키지 버전을 충돌 없이 관리하기 위해 만드는 독립된 방은?",
            options: [
              "가상 환경 (Virtual Environment)",
              "샌드박스 (Sandbox)",
              "클라우드 (Cloud)"
            ],
            answer: 0,
            hint: "venv 등을 이용해 가상 환경을 구축합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 3] 파이썬 내장 모듈 venv를 사용해 'myenv'라는 이름의 가상 환경을 만드는 터미널 명령어는?",
            options: [
              "python -m venv myenv",
              "pip create myenv",
              "make venv myenv"
            ],
            answer: 0,
            hint: "-m 플래그를 써서 venv 모듈을 실행합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 4] 현재 프로젝트에 설치된 패키지들의 목록과 버전을 requirements.txt 파일에 저장하는 명령어는?",
            options: [
              "pip freeze > requirements.txt",
              "pip save requirements.txt",
              "pip list export"
            ],
            answer: 0,
            hint: "현재 상태를 '얼려서(freeze)' 텍스트 파일로 저장합니다."
          },
          {
            type: "quiz_multiple_choice",
            content: "[이론 점검 5] 브라우저(코딩에그)가 아닌 실제 컴퓨터에서 파이썬 코드를 실행하는 명령어는?",
            options: [
              "python 파일명.py",
              "run 파일명.py",
              "start 파일명"
            ],
            answer: 0,
            hint: "터미널에서 python 명령어 뒤에 파일명을 적어 실행합니다."
          }
        ],
        [
          {
            type: "quiz_code",
            content: "[실습 1] [실무 시뮬레이션] 당신은 지금 VSCode 터미널에 있습니다. requests 패키지를 설치하는 명령어를 문자열로 출력해보세요.",
            initialCode: "cmd = \"   install requests\"\nprint(\"실행할 명령어:\", cmd)",
            expectedOutputs: [
              "실행할 명령어: pip install requests"
            ],
            hint: "pip"
          },
          {
            type: "quiz_code",
            content: "[실습 2] [실무 시뮬레이션] venv를 이용해 'my_project_env'라는 가상환경을 생성하는 터미널 명령어를 출력해보세요.",
            initialCode: "cmd = \"python -m    my_project_env\"\nprint(\"실행할 명령어:\", cmd)",
            expectedOutputs: [
              "실행할 명령어: python -m venv my_project_env"
            ],
            hint: "venv 모듈을 사용합니다."
          },
          {
            type: "quiz_code",
            content: "[실습 3] [실무 시뮬레이션] 다른 개발자가 넘겨준 requirements.txt 안의 패키지를 일괄 설치하는 명령어를 출력하세요.",
            initialCode: "cmd = \"pip install -r    \"\nprint(\"실행할 명령어:\", cmd)",
            expectedOutputs: [
              "실행할 명령어: pip install -r requirements.txt"
            ],
            hint: "requirements.txt 파일명을 적습니다."
          },
          {
            type: "quiz_code",
            content: "[실습 4] 파이썬 기본 내장 모듈 중, 현재 파이썬 버전을 알아내는 코드를 실행해보세요.",
            initialCode: "import sys\n# 코딩에그 서버(Pyodide)의 파이썬 버전을 확인합니다.\nprint(sys.version.split(' ')[0])",
            expectedOutputs: [
              "3.11.3 (버전은 다를 수 있음)"
            ],
            hint: "그대로 실행합니다. 실제 환경에서도 유용합니다."
          },
          {
            type: "quiz_code",
            content: "[실습 5] 여기까지 오신 것을 환영합니다! 파이썬의 모든 핵심 기초와 실무 지식을 습득했습니다. 축하 메시지를 자유롭게 print 해보세요!",
            initialCode: "print(\"파이썬 마스터 완료!\")",
            expectedOutputs: [
              "파이썬 마스터 완료!"
            ],
            hint: "자유롭게 작성하세요!"
          }
        ]
      ]
    }
  ]
}
];

// ==========================================
// UNIT 17: 파이썬 프로페셔널 스킬
// ==========================================
