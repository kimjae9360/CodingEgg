export const sql_tier1 = [
  {
    id: 201,
    title: "UNIT 1\n데이터 읽기의 기초",
    nodes: [
      {
        id: "node_sql_1_1",
        title: "데이터 꺼내보기 (SELECT)",
        description: "데이터베이스에서 원하는 데이터를 조회하는 가장 기본적인 명령어 SELECT를 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 데이터베이스 테이블에서 데이터를 조회할 때 사용하는 SQL 명령어는?",
              options: [
                "SELECT",
                "FETCH",
                "GET",
                "READ"
              ],
              answer: 0,
              hint: "데이터를 '선택'한다는 뜻의 영어 단어입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] users 테이블에서 모든 열을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                ";"
              ],
              wordBank: [
                "*",
                "FROM",
                "users",
                "TABLE",
                "IN"
              ],
              answer: [
                "*",
                "FROM",
                "users"
              ],
              hint: "SELECT * FROM 테이블명 의 구조입니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees 테이블의 모든 데이터를 조회하세요.\n\n📋 employees: id, name, department, salary",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    2,
                    "이에그",
                    "디자인팀",
                    4500000
                  ],
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ],
                  [
                    4,
                    "최데이터",
                    "마케팅팀",
                    4000000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM employees;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] 테이블의 모든 열(컬럼)을 조회하려면 어떻게 작성해야 하나요?",
              options: [
                "SELECT * FROM 테이블명",
                "SELECT ALL FROM 테이블명",
                "SELECT % FROM 테이블명",
                "SELECT ? FROM 테이블명"
              ],
              answer: 0,
              hint: "모든 것을 의미하는 특수문자 '*'(와일드카드)를 사용합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] products 테이블에서 상품명(product_name) 컬럼 하나만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                " FROM products;"
              ],
              wordBank: [
                "product_name",
                "*",
                "FROM",
                "ALL"
              ],
              answer: [
                "product_name"
              ],
              hint: "여러 컬럼 중 하나만 쓰면 그 컬럼만 조회됩니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees 테이블에서 이름(name)과 부서(department)만 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "department"
                ],
                rows: [
                  [
                    "김코딩",
                    "개발팀"
                  ],
                  [
                    "이에그",
                    "디자인팀"
                  ],
                  [
                    "박치킨",
                    "개발팀"
                  ],
                  [
                    "최데이터",
                    "마케팅팀"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT name, department FROM employees;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] products 테이블에서 상품명(product_name)과 가격(price)만 조회하세요.\n\n📋 products: id, product_name, price, stock",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 10);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);\nINSERT INTO products VALUES (3, '키보드', 80000, 50);\nINSERT INTO products VALUES (4, '모니터', 350000, 20);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "product_name",
                  "price"
                ],
                rows: [
                  [
                    "노트북",
                    1200000
                  ],
                  [
                    "마우스",
                    25000
                  ],
                  [
                    "키보드",
                    80000
                  ],
                  [
                    "모니터",
                    350000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT product_name, price FROM products;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] SQL 문장에서 테이블 이름 앞에 오는 키워드는?",
              options: [
                "FROM",
                "TABLE",
                "IN",
                "USING"
              ],
              answer: 0,
              hint: "'어디서(from) 가져올지'를 지정하는 키워드입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] SELECT salary AS 급여 FROM employees; 에서 AS의 역할은?",
              options: [
                "컬럼에 별칭(alias)을 지정한다",
                "컬럼을 삭제한다",
                "컬럼 값을 정렬한다",
                "컬럼을 그룹화한다"
              ],
              answer: 0,
              hint: "AS는 컬럼이나 테이블에 별명(별칭)을 붙일 때 사용합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] employees에서 name과 salary 두 컬럼을 함께 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                " FROM employees;"
              ],
              wordBank: [
                "name,",
                "salary",
                "name",
                "department",
                "*,"
              ],
              answer: [
                "name,",
                "salary"
              ],
              hint: "여러 컬럼을 조회할 때는 쉼표(,)로 구분합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] users 테이블의 name 컬럼을 '이름'이라는 별칭으로 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT name ",
                " 이름 FROM users;"
              ],
              wordBank: [
                "AS",
                "IS",
                "TO",
                "="
              ],
              answer: [
                "AS"
              ],
              hint: "컬럼명 AS 별칭 형태로 별칭을 지정합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] books 테이블에서 제목(title)과 저자(author)만 조회하세요.\n\n📋 books: id, title, author, price, published_year",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, price INTEGER, published_year INTEGER);\nINSERT INTO books VALUES (1, '어린 왕자', '생텍쥐페리', 12000, 1943);\nINSERT INTO books VALUES (2, '데미안', '헤르만 헤세', 13000, 1919);\nINSERT INTO books VALUES (3, '코스모스', '칼 세이건', 25000, 1980);\nINSERT INTO books VALUES (4, '1984', '조지 오웰', 15000, 1949);\nINSERT INTO books VALUES (5, '사피엔스', '유발 하라리', 22000, 2011);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "title",
                  "author"
                ],
                rows: [
                  [
                    "어린 왕자",
                    "생텍쥐페리"
                  ],
                  [
                    "데미안",
                    "헤르만 헤세"
                  ],
                  [
                    "코스모스",
                    "칼 세이건"
                  ],
                  [
                    "1984",
                    "조지 오웰"
                  ],
                  [
                    "사피엔스",
                    "유발 하라리"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT title, author FROM books;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] movies 테이블에서 장르(genre)의 중복 없는 목록을 조회하세요.\n\n📋 movies: id, title, genre, rating, release_year",
              setupSQL: "CREATE TABLE movies (id INTEGER PRIMARY KEY, title TEXT, genre TEXT, rating REAL, release_year INTEGER);\nINSERT INTO movies VALUES (1, '인터스텔라', 'SF', 4.8, 2014);\nINSERT INTO movies VALUES (2, '기생충', '드라마', 4.9, 2019);\nINSERT INTO movies VALUES (3, '어벤져스', 'SF', 4.3, 2019);\nINSERT INTO movies VALUES (4, '올드보이', '드라마', 4.5, 2003);\nINSERT INTO movies VALUES (5, '매드맥스', '액션', 4.6, 2015);\nINSERT INTO movies VALUES (6, '존윅', '액션', 4.4, 2014);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "genre"
                ],
                rows: [
                  [
                    "SF"
                  ],
                  [
                    "드라마"
                  ],
                  [
                    "액션"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT DISTINCT genre FROM movies;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] SELECT DISTINCT department FROM employees; 의 역할은?",
              options: [
                "중복된 부서명을 제거하고 한 번씩만 보여준다",
                "부서명을 오름차순 정렬한다",
                "부서가 있는 행만 보여준다",
                "부서명을 삭제한다"
              ],
              answer: 0,
              hint: "DISTINCT는 '뚜렷한, 구별되는'이라는 뜻으로 중복을 제거합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] employees에서 중복 없이 부서명만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                " department FROM employees;"
              ],
              wordBank: [
                "DISTINCT",
                "UNIQUE",
                "ONLY",
                "SINGLE"
              ],
              answer: [
                "DISTINCT"
              ],
              hint: "중복을 제거할 때는 DISTINCT 키워드를 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] restaurant_menu 테이블에서 메뉴명(item_name)은 '메뉴', 가격(price)은 '가격'이라는 별칭으로 조회하세요.\n\n📋 restaurant_menu: id, item_name, category, price",
              setupSQL: "CREATE TABLE restaurant_menu (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO restaurant_menu VALUES (1, '김치찌개', '한식', 9000);\nINSERT INTO restaurant_menu VALUES (2, '돈까스', '일식', 11000);\nINSERT INTO restaurant_menu VALUES (3, '파스타', '양식', 15000);\nINSERT INTO restaurant_menu VALUES (4, '비빔밥', '한식', 9500);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "메뉴",
                  "가격"
                ],
                rows: [
                  [
                    "김치찌개",
                    9000
                  ],
                  [
                    "돈까스",
                    11000
                  ],
                  [
                    "파스타",
                    15000
                  ],
                  [
                    "비빔밥",
                    9500
                  ]
                ],
                ordered: false
              },
              hint: "SELECT item_name AS 메뉴, price AS 가격 FROM restaurant_menu;"
            }
          ]
        ]
      },
      {
        id: "node_sql_1_2",
        title: "원하는 행만 골라내기 (WHERE)",
        description: "조건을 지정하여 원하는 데이터만 필터링하는 WHERE 절을 마스터합니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 특정 조건에 맞는 행(row)만 골라내려면 어떤 절을 사용하나요?",
              options: [
                "WHERE",
                "FILTER",
                "CONDITION",
                "HAVING"
              ],
              answer: 0,
              hint: "조건을 거는 키워드입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 개발팀 직원만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees ",
                "department = '개발팀';"
              ],
              wordBank: [
                "WHERE",
                "AND",
                "HAVING",
                "FROM"
              ],
              answer: [
                "WHERE"
              ],
              hint: "WHERE 절로 조건을 지정합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees에서 개발팀 직원만 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM employees WHERE department = '개발팀';"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] WHERE 절에서 '보다 크거나 같다'를 의미하는 연산자는?",
              options: [
                ">=",
                "=>",
                ">>",
                "~~"
              ],
              answer: 0,
              hint: "크다(>) + 같다(=)를 합친 기호입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 개발팀이 아닌 직원만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees WHERE department ",
                " '개발팀';"
              ],
              wordBank: [
                "!=",
                "==",
                "=>",
                "IS"
              ],
              answer: [
                "!="
              ],
              hint: "같지 않다는 != (또는 <>) 로 표현합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees에서 급여(salary)가 5,000,000 이상인 직원만 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM employees WHERE salary >= 5000000;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] products에서 가격(price)이 50,000 이상 300,000 이하인 상품을 조회하세요.",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 10);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);\nINSERT INTO products VALUES (3, '키보드', 80000, 50);\nINSERT INTO products VALUES (4, '모니터', 350000, 20);\nINSERT INTO products VALUES (5, '웹캠', 55000, 30);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "product_name",
                  "price",
                  "stock"
                ],
                rows: [
                  [
                    3,
                    "키보드",
                    80000,
                    50
                  ],
                  [
                    5,
                    "웹캠",
                    55000,
                    30
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM products WHERE price >= 50000 AND price <= 300000;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] WHERE에서 두 조건이 모두 참일 때만 반환하는 키워드는?",
              options: [
                "AND",
                "OR",
                "NOT",
                "BUT"
              ],
              answer: 0,
              hint: "'그리고(and)' — 두 조건 모두 만족해야 합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] WHERE에서 두 조건 중 하나만 참이어도 반환하는 키워드는?",
              options: [
                "OR",
                "AND",
                "NOT",
                "XOR"
              ],
              answer: 0,
              hint: "'또는(or)' — 둘 중 하나만 만족해도 됩니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 이름이 '김'으로 시작하는 직원을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees WHERE name ",
                " '김%';"
              ],
              wordBank: [
                "LIKE",
                "IN",
                "IS",
                "="
              ],
              answer: [
                "LIKE"
              ],
              hint: "패턴 매칭에는 LIKE와 와일드카드 %를 사용합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 급여가 4,000,000에서 5,000,000 사이인 직원을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees WHERE salary ",
                " 4000000 AND 5000000;"
              ],
              wordBank: [
                "BETWEEN",
                "RANGE",
                "WITHIN",
                "FROM"
              ],
              answer: [
                "BETWEEN"
              ],
              hint: "BETWEEN a AND b 는 a 이상 b 이하를 의미합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] books 테이블에서 저자(author) 이름이 '이'로 시작하는 책을 조회하세요.\n\n📋 books: id, title, author, price",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, price INTEGER);\nINSERT INTO books VALUES (1, '삼국지', '이문열', 15000);\nINSERT INTO books VALUES (2, '토지', '박경리', 18000);\nINSERT INTO books VALUES (3, '벽오금학도', '이외수', 14000);\nINSERT INTO books VALUES (4, '태백산맥', '조정래', 20000);\nINSERT INTO books VALUES (5, '채식주의자', '한강', 12000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "author",
                  "price"
                ],
                rows: [
                  [
                    1,
                    "삼국지",
                    "이문열",
                    15000
                  ],
                  [
                    3,
                    "벽오금학도",
                    "이외수",
                    14000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM books WHERE author LIKE '이%';"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] inventory 테이블에서 수량(quantity)이 10 이상 50 이하인 재고를 조회하세요.\n\n📋 inventory: id, item_name, quantity, unit_price",
              setupSQL: "CREATE TABLE inventory (id INTEGER PRIMARY KEY, item_name TEXT, quantity INTEGER, unit_price INTEGER);\nINSERT INTO inventory VALUES (1, '볼펜', 200, 500);\nINSERT INTO inventory VALUES (2, 'A4용지', 30, 5000);\nINSERT INTO inventory VALUES (3, '스테이플러', 8, 3000);\nINSERT INTO inventory VALUES (4, '노트', 45, 1500);\nINSERT INTO inventory VALUES (5, '클립', 500, 200);\nINSERT INTO inventory VALUES (6, '가위', 15, 2500);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "quantity",
                  "unit_price"
                ],
                rows: [
                  [
                    2,
                    "A4용지",
                    30,
                    5000
                  ],
                  [
                    4,
                    "노트",
                    45,
                    1500
                  ],
                  [
                    6,
                    "가위",
                    15,
                    2500
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM inventory WHERE quantity BETWEEN 10 AND 50;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] WHERE department IN ('개발팀', '디자인팀') 와 같은 의미의 조건식은?",
              options: [
                "department = '개발팀' OR department = '디자인팀'",
                "department = '개발팀' AND department = '디자인팀'",
                "department != '개발팀' AND department != '디자인팀'",
                "department LIKE '개발팀'"
              ],
              answer: 0,
              hint: "IN은 여러 값 중 하나와 일치하는지를 OR로 비교하는 것과 같습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 개발팀 또는 디자인팀 직원을 IN으로 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees WHERE department ",
                " ('개발팀', '디자인팀');"
              ],
              wordBank: [
                "IN",
                "ON",
                "AT",
                "OF"
              ],
              answer: [
                "IN"
              ],
              hint: "IN (값1, 값2, ...) 은 여러 값 중 하나와 일치하는지 확인합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] restaurant_menu 테이블에서 카테고리(category)가 '한식' 또는 '일식'이면서 가격(price)이 10,000 미만인 메뉴를 조회하세요.\n\n📋 restaurant_menu: id, item_name, category, price",
              setupSQL: "CREATE TABLE restaurant_menu (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO restaurant_menu VALUES (1, '김치찌개', '한식', 9000);\nINSERT INTO restaurant_menu VALUES (2, '돈까스', '일식', 11000);\nINSERT INTO restaurant_menu VALUES (3, '초밥', '일식', 9500);\nINSERT INTO restaurant_menu VALUES (4, '파스타', '양식', 15000);\nINSERT INTO restaurant_menu VALUES (5, '비빔밥', '한식', 8500);\nINSERT INTO restaurant_menu VALUES (6, '스테이크', '양식', 32000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "category",
                  "price"
                ],
                rows: [
                  [
                    1,
                    "김치찌개",
                    "한식",
                    9000
                  ],
                  [
                    3,
                    "초밥",
                    "일식",
                    9500
                  ],
                  [
                    5,
                    "비빔밥",
                    "한식",
                    8500
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM restaurant_menu WHERE category IN ('한식', '일식') AND price < 10000;"
            }
          ]
        ]
      },
      {
        id: "node_sql_1_3",
        title: "데이터 정렬하기 (ORDER BY)",
        description: "조회 결과를 원하는 기준으로 오름차순/내림차순 정렬하는 방법을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 조회 결과를 정렬할 때 사용하는 절은?",
              options: [
                "ORDER BY",
                "SORT BY",
                "ARRANGE BY",
                "GROUP BY"
              ],
              answer: 0,
              hint: "'순서(order)를 기준으로(by)' 정렬합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 급여를 높은 순(내림차순)으로 정렬하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees ORDER BY salary ",
                ";"
              ],
              wordBank: [
                "DESC",
                "ASC",
                "DOWN",
                "HIGH"
              ],
              answer: [
                "DESC"
              ],
              hint: "내림차순은 DESC(Descending)입니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees를 급여 오름차순으로 정렬해 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    4,
                    "최데이터",
                    "마케팅팀",
                    4000000
                  ],
                  [
                    2,
                    "이에그",
                    "디자인팀",
                    4500000
                  ],
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM employees ORDER BY salary ASC;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] ORDER BY 기본 정렬 방향은?",
              options: [
                "오름차순 (ASC)",
                "내림차순 (DESC)",
                "랜덤",
                "삽입 순서"
              ],
              answer: 0,
              hint: "작은 값에서 큰 값(A→Z) 순이 기본입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 상품을 가격 오름차순으로 명시적으로 정렬하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM products ORDER BY price ",
                ";"
              ],
              wordBank: [
                "ASC",
                "DESC",
                "UP",
                "MIN"
              ],
              answer: [
                "ASC"
              ],
              hint: "오름차순을 명시할 때는 ASC를 붙입니다 (생략 가능)."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees를 급여 내림차순으로 정렬해 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ],
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    2,
                    "이에그",
                    "디자인팀",
                    4500000
                  ],
                  [
                    4,
                    "최데이터",
                    "마케팅팀",
                    4000000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM employees ORDER BY salary DESC;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] products에서 상품명과 가격을 가격 내림차순으로 조회하세요.",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 10);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);\nINSERT INTO products VALUES (3, '키보드', 80000, 50);\nINSERT INTO products VALUES (4, '모니터', 350000, 20);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "product_name",
                  "price"
                ],
                rows: [
                  [
                    "노트북",
                    1200000
                  ],
                  [
                    "모니터",
                    350000
                  ],
                  [
                    "키보드",
                    80000
                  ],
                  [
                    "마우스",
                    25000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT product_name, price FROM products ORDER BY price DESC;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] 오름차순을 명시적으로 표기하는 키워드는?",
              options: [
                "ASC",
                "UP",
                "INC",
                "MIN"
              ],
              answer: 0,
              hint: "Ascending(오름차순)의 약자입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] ORDER BY department, salary DESC 의 정렬 순서는?",
              options: [
                "department 먼저 오름차순 정렬 후, 같은 부서 내에서 salary 내림차순 정렬",
                "salary만 내림차순 정렬",
                "department만 오름차순 정렬",
                "둘 다 무시하고 원본 순서 유지"
              ],
              answer: 0,
              hint: "여러 컬럼을 나열하면 앞의 컬럼이 우선순위가 높습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 부서(department) 오름차순, 그 안에서 급여(salary) 내림차순으로 정렬하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees ORDER BY department, salary ",
                ";"
              ],
              wordBank: [
                "DESC",
                "ASC",
                "DOWN",
                "LOW"
              ],
              answer: [
                "DESC"
              ],
              hint: "여러 컬럼을 콤마로 나열하면 각각 정렬 방향을 지정할 수 있습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 개발팀 직원만 급여 내림차순으로 정렬하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees WHERE department = '개발팀' ",
                " salary DESC;"
              ],
              wordBank: [
                "ORDER BY",
                "GROUP BY",
                "SORT BY",
                "HAVING"
              ],
              answer: [
                "ORDER BY"
              ],
              hint: "WHERE는 ORDER BY보다 앞에 옵니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] books 테이블을 출간연도(published_year) 오름차순으로 정렬해 조회하세요.\n\n📋 books: id, title, author, published_year",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, published_year INTEGER);\nINSERT INTO books VALUES (1, '데미안', '헤르만 헤세', 1919);\nINSERT INTO books VALUES (2, '1984', '조지 오웰', 1949);\nINSERT INTO books VALUES (3, '어린 왕자', '생텍쥐페리', 1943);\nINSERT INTO books VALUES (4, '사피엔스', '유발 하라리', 2011);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "author",
                  "published_year"
                ],
                rows: [
                  [
                    1,
                    "데미안",
                    "헤르만 헤세",
                    1919
                  ],
                  [
                    3,
                    "어린 왕자",
                    "생텍쥐페리",
                    1943
                  ],
                  [
                    2,
                    "1984",
                    "조지 오웰",
                    1949
                  ],
                  [
                    4,
                    "사피엔스",
                    "유발 하라리",
                    2011
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM books ORDER BY published_year ASC;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] students 테이블을 과목(subject) 오름차순, 그 안에서 점수(score) 내림차순으로 정렬해 조회하세요.\n\n📋 students: id, name, subject, score",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, subject TEXT, score INTEGER);\nINSERT INTO students VALUES (1, '김철수', '수학', 85);\nINSERT INTO students VALUES (2, '이영희', '영어', 92);\nINSERT INTO students VALUES (3, '박민준', '수학', 95);\nINSERT INTO students VALUES (4, '최수진', '영어', 78);\nINSERT INTO students VALUES (5, '정다은', '수학', 70);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "subject",
                  "score"
                ],
                rows: [
                  [
                    3,
                    "박민준",
                    "수학",
                    95
                  ],
                  [
                    1,
                    "김철수",
                    "수학",
                    85
                  ],
                  [
                    5,
                    "정다은",
                    "수학",
                    70
                  ],
                  [
                    2,
                    "이영희",
                    "영어",
                    92
                  ],
                  [
                    4,
                    "최수진",
                    "영어",
                    78
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM students ORDER BY subject ASC, score DESC;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] ORDER BY 2 DESC; 처럼 컬럼 번호로 정렬할 때 '2'가 의미하는 것은?",
              options: [
                "SELECT 절에서 두 번째로 나열된 컬럼",
                "테이블의 두 번째 컬럼(항상)",
                "2개의 컬럼 기준 정렬",
                "두 번째 행부터 정렬"
              ],
              answer: 0,
              hint: "SELECT 목록에서 몇 번째 컬럼인지를 숫자로 나타냅니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 급여에 별칭 sal을 붙이고 그 별칭 기준으로 정렬하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT name, salary AS sal FROM employees ORDER BY ",
                " DESC;"
              ],
              wordBank: [
                "sal",
                "salary",
                "name",
                "AS"
              ],
              answer: [
                "sal"
              ],
              hint: "ORDER BY에는 SELECT에서 지정한 별칭(alias)도 사용할 수 있습니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] movies 테이블에서 평점(rating)이 4.5 이상인 영화를 평점 내림차순으로 정렬해 제목(title)과 평점을 조회하세요.\n\n📋 movies: id, title, genre, rating",
              setupSQL: "CREATE TABLE movies (id INTEGER PRIMARY KEY, title TEXT, genre TEXT, rating REAL);\nINSERT INTO movies VALUES (1, '인터스텔라', 'SF', 4.8);\nINSERT INTO movies VALUES (2, '기생충', '드라마', 4.9);\nINSERT INTO movies VALUES (3, '어벤져스', 'SF', 4.3);\nINSERT INTO movies VALUES (4, '올드보이', '드라마', 4.5);\nINSERT INTO movies VALUES (5, '매드맥스', '액션', 4.6);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "title",
                  "rating"
                ],
                rows: [
                  [
                    "기생충",
                    4.9
                  ],
                  [
                    "인터스텔라",
                    4.8
                  ],
                  [
                    "매드맥스",
                    4.6
                  ],
                  [
                    "올드보이",
                    4.5
                  ]
                ],
                ordered: true
              },
              hint: "SELECT title, rating FROM movies WHERE rating >= 4.5 ORDER BY rating DESC;"
            }
          ]
        ]
      },
      {
        id: "node_sql_1_4",
        title: "개수 제한하기 (LIMIT)",
        description: "조회 결과 중 상위 N개의 행만 가져오는 LIMIT 절을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 조회 결과 행 수를 N개로 제한할 때 사용하는 절은?",
              options: [
                "LIMIT",
                "TOP",
                "MAX",
                "COUNT"
              ],
              answer: 0,
              hint: "'한계(limit)'를 설정하는 키워드입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 급여 TOP 3 직원을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees ORDER BY salary DESC ",
                "3;"
              ],
              wordBank: [
                "LIMIT",
                "TOP",
                "MAX",
                "TAKE"
              ],
              answer: [
                "LIMIT"
              ],
              hint: "LIMIT 뒤에 가져올 행의 수를 씁니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees에서 급여 높은 상위 2명만 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ],
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM employees ORDER BY salary DESC LIMIT 2;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] SELECT * FROM users LIMIT 5; 의 결과는?",
              options: [
                "최대 5행",
                "정확히 5행",
                "5행을 제외한 나머지",
                "모든 행"
              ],
              answer: 0,
              hint: "데이터가 5개 미만이면 있는 것만 반환됩니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] products에서 3번째, 4번째로 저렴한 상품(앞 2개는 건너뜀)을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM products ORDER BY price ASC LIMIT 2 ",
                " 2;"
              ],
              wordBank: [
                "OFFSET",
                "SKIP",
                "FROM",
                "START"
              ],
              answer: [
                "OFFSET"
              ],
              hint: "OFFSET 뒤에 건너뛸 행 수를 씁니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] products에서 가장 저렴한 상품 3개만 조회하세요.",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 10);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);\nINSERT INTO products VALUES (3, '키보드', 80000, 50);\nINSERT INTO products VALUES (4, '모니터', 350000, 20);\nINSERT INTO products VALUES (5, '웹캠', 55000, 30);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "product_name",
                  "price",
                  "stock"
                ],
                rows: [
                  [
                    2,
                    "마우스",
                    25000,
                    100
                  ],
                  [
                    5,
                    "웹캠",
                    55000,
                    30
                  ],
                  [
                    3,
                    "키보드",
                    80000,
                    50
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM products ORDER BY price ASC LIMIT 3;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] employees에서 개발팀 직원 중 급여가 가장 높은 1명만 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM employees WHERE department = '개발팀' ORDER BY salary DESC LIMIT 1;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] LIMIT 3 OFFSET 2; 의 의미는?",
              options: [
                "앞 2개를 건너뛰고 그 다음 3개를 가져온다",
                "앞 3개를 건너뛰고 그 다음 2개를 가져온다",
                "총 5개를 가져온다",
                "2번째 행만 가져온다"
              ],
              answer: 0,
              hint: "OFFSET은 '건너뛸 행 수', LIMIT은 '가져올 행 수'입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] '급여 TOP 3'처럼 순위 기반 조회를 하려면 LIMIT과 반드시 함께 써야 하는 절은?",
              options: [
                "ORDER BY",
                "WHERE",
                "GROUP BY",
                "HAVING"
              ],
              answer: 0,
              hint: "정렬 기준이 없으면 '상위'라는 개념 자체가 성립하지 않습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 개발팀 직원 중 급여 상위 1명을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees WHERE department = '개발팀' ORDER BY salary DESC ",
                " 1;"
              ],
              wordBank: [
                "LIMIT",
                "TOP",
                "MAX",
                "FIRST"
              ],
              answer: [
                "LIMIT"
              ],
              hint: "WHERE와 ORDER BY 뒤에 LIMIT을 붙입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] products에서 가장 비싼 상품 1개를 LIMIT으로 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM products ORDER BY price DESC ",
                " 1;"
              ],
              wordBank: [
                "LIMIT",
                "MAX",
                "TOP",
                "ONLY"
              ],
              answer: [
                "LIMIT"
              ],
              hint: "가장 비싼 1개 = 내림차순 정렬 후 LIMIT 1"
            },
            {
              type: "quiz_sql",
              content: "[실습 4] books 테이블에서 가격이 가장 저렴한 책 2권을 조회하세요.\n\n📋 books: id, title, author, price",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, price INTEGER);\nINSERT INTO books VALUES (1, '데미안', '헤르만 헤세', 13000);\nINSERT INTO books VALUES (2, '1984', '조지 오웰', 15000);\nINSERT INTO books VALUES (3, '어린 왕자', '생텍쥐페리', 9000);\nINSERT INTO books VALUES (4, '사피엔스', '유발 하라리', 22000);\nINSERT INTO books VALUES (5, '코스모스', '칼 세이건', 8000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "author",
                  "price"
                ],
                rows: [
                  [
                    5,
                    "코스모스",
                    "칼 세이건",
                    8000
                  ],
                  [
                    3,
                    "어린 왕자",
                    "생텍쥐페리",
                    9000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM books ORDER BY price ASC LIMIT 2;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] movies 테이블을 평점(rating) 내림차순으로 정렬했을 때, 1~2위를 건너뛰고 3~4위 영화를 조회하세요.\n\n📋 movies: id, title, rating",
              setupSQL: "CREATE TABLE movies (id INTEGER PRIMARY KEY, title TEXT, rating REAL);\nINSERT INTO movies VALUES (1, '기생충', 4.9);\nINSERT INTO movies VALUES (2, '인터스텔라', 4.8);\nINSERT INTO movies VALUES (3, '매드맥스', 4.6);\nINSERT INTO movies VALUES (4, '올드보이', 4.5);\nINSERT INTO movies VALUES (5, '어벤져스', 4.3);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "rating"
                ],
                rows: [
                  [
                    3,
                    "매드맥스",
                    4.6
                  ],
                  [
                    4,
                    "올드보이",
                    4.5
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM movies ORDER BY rating DESC LIMIT 2 OFFSET 2;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] 게시판에서 2페이지(한 페이지 5개씩)를 보여주려면 어떤 LIMIT/OFFSET 조합이 맞을까요?",
              options: [
                "LIMIT 5 OFFSET 5",
                "LIMIT 5 OFFSET 10",
                "LIMIT 10 OFFSET 5",
                "LIMIT 2 OFFSET 5"
              ],
              answer: 0,
              hint: "2페이지는 1페이지(5개)를 건너뛴 뒤 5개를 가져옵니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인] 평점순으로 정렬된 목록에서 11번째부터 20번째까지(10개, 앞 10개 건너뜀)를 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM movies ORDER BY rating DESC LIMIT 10 ",
                " 10;"
              ],
              wordBank: [
                "OFFSET",
                "SKIP",
                "FROM",
                "PAGE"
              ],
              answer: [
                "OFFSET"
              ],
              hint: "OFFSET 10은 앞의 10개(1~10번째)를 건너뛴다는 뜻입니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] restaurant_menu 테이블에서 '한식' 카테고리 메뉴 중 가격이 가장 비싼 1개를 메뉴명(item_name)과 가격(price)만 조회하세요.\n\n📋 restaurant_menu: id, item_name, category, price",
              setupSQL: "CREATE TABLE restaurant_menu (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO restaurant_menu VALUES (1, '김치찌개', '한식', 9000);\nINSERT INTO restaurant_menu VALUES (2, '갈비탕', '한식', 14000);\nINSERT INTO restaurant_menu VALUES (3, '초밥', '일식', 22000);\nINSERT INTO restaurant_menu VALUES (4, '비빔밥', '한식', 9500);\nINSERT INTO restaurant_menu VALUES (5, '삼계탕', '한식', 16000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "item_name",
                  "price"
                ],
                rows: [
                  [
                    "삼계탕",
                    16000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT item_name, price FROM restaurant_menu WHERE category = '한식' ORDER BY price DESC LIMIT 1;"
            }
          ]
        ]
      },
      {
        id: "node_sql_1_5",
        title: "📊 SELECT 마스터 보스전",
        description: "SELECT, WHERE, ORDER BY, LIMIT를 복합 활용하는 종합 문제입니다.",
        lessons: [
          [
            {
              type: "quiz_sql",
              content: "[보스전 1] students에서 점수(score)가 80 이상인 학생의 이름과 점수를 점수 내림차순으로 조회하세요.\n\n📋 students: id, name, subject, score",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, subject TEXT, score INTEGER);\nINSERT INTO students VALUES (1, '김철수', '수학', 95);\nINSERT INTO students VALUES (2, '이영희', '수학', 78);\nINSERT INTO students VALUES (3, '박민준', '수학', 88);\nINSERT INTO students VALUES (4, '최수진', '수학', 62);\nINSERT INTO students VALUES (5, '정다은', '수학', 91);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "score"
                ],
                rows: [
                  [
                    "김철수",
                    95
                  ],
                  [
                    "정다은",
                    91
                  ],
                  [
                    "박민준",
                    88
                  ]
                ],
                ordered: true
              },
              hint: "SELECT name, score FROM students WHERE score >= 80 ORDER BY score DESC;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 2] books 테이블에서 가격(price)이 15,000 미만인 책을 가격 오름차순으로 정렬해 상위 2권만 조회하세요.\n\n📋 books: id, title, author, price",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, price INTEGER);\nINSERT INTO books VALUES (1, '데미안', '헤르만 헤세', 13000);\nINSERT INTO books VALUES (2, '1984', '조지 오웰', 15000);\nINSERT INTO books VALUES (3, '어린 왕자', '생텍쥐페리', 9000);\nINSERT INTO books VALUES (4, '사피엔스', '유발 하라리', 22000);\nINSERT INTO books VALUES (5, '코스모스', '칼 세이건', 8000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "author",
                  "price"
                ],
                rows: [
                  [
                    5,
                    "코스모스",
                    "칼 세이건",
                    8000
                  ],
                  [
                    3,
                    "어린 왕자",
                    "생텍쥐페리",
                    9000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM books WHERE price < 15000 ORDER BY price ASC LIMIT 2;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[보스전 3] orders에서 금액(amount) 100,000 이상인 주문을 금액 내림차순 상위 3건만 조회하세요.\n\n📋 orders: id, customer_name, amount, status",
              setupSQL: "CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_name TEXT, amount INTEGER, status TEXT);\nINSERT INTO orders VALUES (1, '김코딩', 50000, '완료');\nINSERT INTO orders VALUES (2, '이에그', 150000, '완료');\nINSERT INTO orders VALUES (3, '박치킨', 200000, '대기');\nINSERT INTO orders VALUES (4, '최데이터', 80000, '완료');\nINSERT INTO orders VALUES (5, '정머신', 300000, '완료');\nINSERT INTO orders VALUES (6, '한러닝', 120000, '대기');",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "customer_name",
                  "amount",
                  "status"
                ],
                rows: [
                  [
                    5,
                    "정머신",
                    300000,
                    "완료"
                  ],
                  [
                    3,
                    "박치킨",
                    200000,
                    "대기"
                  ],
                  [
                    2,
                    "이에그",
                    150000,
                    "완료"
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM orders WHERE amount >= 100000 ORDER BY amount DESC LIMIT 3;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 4] products에서 재고(stock)가 30 초과이고 가격이 100,000 미만인 상품을 가격 오름차순으로 조회하세요.\n\n📋 products: id, product_name, price, stock",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 10);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);\nINSERT INTO products VALUES (3, '키보드', 80000, 50);\nINSERT INTO products VALUES (4, '모니터', 350000, 20);\nINSERT INTO products VALUES (5, '웹캠', 55000, 60);\nINSERT INTO products VALUES (6, '마우스패드', 15000, 200);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "product_name",
                  "price",
                  "stock"
                ],
                rows: [
                  [
                    6,
                    "마우스패드",
                    15000,
                    200
                  ],
                  [
                    2,
                    "마우스",
                    25000,
                    100
                  ],
                  [
                    5,
                    "웹캠",
                    55000,
                    60
                  ],
                  [
                    3,
                    "키보드",
                    80000,
                    50
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM products WHERE stock > 30 AND price < 100000 ORDER BY price ASC;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[보스전 5] movies 테이블에서 장르(genre)가 'SF'이고 평점(rating)이 4.5 이상인 영화를 평점 내림차순으로 조회하세요.\n\n📋 movies: id, title, genre, rating",
              setupSQL: "CREATE TABLE movies (id INTEGER PRIMARY KEY, title TEXT, genre TEXT, rating REAL);\nINSERT INTO movies VALUES (1, '인터스텔라', 'SF', 4.8);\nINSERT INTO movies VALUES (2, '그래비티', 'SF', 4.2);\nINSERT INTO movies VALUES (3, '듄', 'SF', 4.6);\nINSERT INTO movies VALUES (4, '기생충', '드라마', 4.9);\nINSERT INTO movies VALUES (5, '마션', 'SF', 4.5);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "genre",
                  "rating"
                ],
                rows: [
                  [
                    1,
                    "인터스텔라",
                    "SF",
                    4.8
                  ],
                  [
                    3,
                    "듄",
                    "SF",
                    4.6
                  ],
                  [
                    5,
                    "마션",
                    "SF",
                    4.5
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM movies WHERE genre = 'SF' AND rating >= 4.5 ORDER BY rating DESC;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 6] restaurant_menu 테이블에서 메뉴명(item_name)에 '찌개'가 들어간 메뉴 중 가격이 가장 저렴한 1개를 조회하세요.\n\n📋 restaurant_menu: id, item_name, category, price",
              setupSQL: "CREATE TABLE restaurant_menu (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO restaurant_menu VALUES (1, '김치찌개', '한식', 9000);\nINSERT INTO restaurant_menu VALUES (2, '된장찌개', '한식', 8000);\nINSERT INTO restaurant_menu VALUES (3, '부대찌개', '한식', 10000);\nINSERT INTO restaurant_menu VALUES (4, '초밥', '일식', 22000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "category",
                  "price"
                ],
                rows: [
                  [
                    2,
                    "된장찌개",
                    "한식",
                    8000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM restaurant_menu WHERE item_name LIKE '%찌개%' ORDER BY price ASC LIMIT 1;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[보스전 7] inventory 테이블에서 수량(quantity)이 20 이상 300 이하인 재고를 수량 내림차순으로 정렬해 상위 3개만 조회하세요.\n\n📋 inventory: id, item_name, quantity, unit_price",
              setupSQL: "CREATE TABLE inventory (id INTEGER PRIMARY KEY, item_name TEXT, quantity INTEGER, unit_price INTEGER);\nINSERT INTO inventory VALUES (1, '볼펜', 200, 500);\nINSERT INTO inventory VALUES (2, 'A4용지', 30, 5000);\nINSERT INTO inventory VALUES (3, '스테이플러', 8, 3000);\nINSERT INTO inventory VALUES (4, '노트', 45, 1500);\nINSERT INTO inventory VALUES (5, '클립', 500, 200);\nINSERT INTO inventory VALUES (6, '가위', 15, 2500);\nINSERT INTO inventory VALUES (7, '지우개', 90, 300);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "quantity",
                  "unit_price"
                ],
                rows: [
                  [
                    1,
                    "볼펜",
                    200,
                    500
                  ],
                  [
                    7,
                    "지우개",
                    90,
                    300
                  ],
                  [
                    4,
                    "노트",
                    45,
                    1500
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM inventory WHERE quantity BETWEEN 20 AND 300 ORDER BY quantity DESC LIMIT 3;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 8] gym_members 테이블에서 등급(membership)이 'VIP'인 회원 중 방문횟수(visit_count)가 많은 순으로 정렬해 이름(name)과 방문횟수를 '이름', '방문횟수'라는 별칭으로 상위 2명만 조회하세요.\n\n📋 gym_members: id, name, membership, visit_count",
              setupSQL: "CREATE TABLE gym_members (id INTEGER PRIMARY KEY, name TEXT, membership TEXT, visit_count INTEGER);\nINSERT INTO gym_members VALUES (1, '김헬스', 'VIP', 45);\nINSERT INTO gym_members VALUES (2, '이근육', '일반', 60);\nINSERT INTO gym_members VALUES (3, '박운동', 'VIP', 80);\nINSERT INTO gym_members VALUES (4, '최단백', 'VIP', 30);\nINSERT INTO gym_members VALUES (5, '정런닝', '일반', 20);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "이름",
                  "방문횟수"
                ],
                rows: [
                  [
                    "박운동",
                    80
                  ],
                  [
                    "김헬스",
                    45
                  ]
                ],
                ordered: true
              },
              hint: "SELECT name AS 이름, visit_count AS 방문횟수 FROM gym_members WHERE membership = 'VIP' ORDER BY visit_count DESC LIMIT 2;"
            }
          ]
        ]
      }
    ]
  },
  {
    id: 202,
    title: "UNIT 2\n데이터 분석하기",
    nodes: [
      {
        id: "node_sql_2_1",
        title: "숫자로 요약하기 (집계 함수)",
        description: "COUNT, SUM, AVG, MAX, MIN으로 데이터를 수치로 요약하는 방법을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 행(row) 개수를 세는 집계 함수는?",
              options: [
                "COUNT(*)",
                "SUM(*)",
                "SIZE()",
                "LEN()"
              ],
              answer: 0,
              hint: "'셀다(count)'는 뜻을 가진 함수입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 직원들의 평균 급여를 구하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                "(salary) FROM employees;"
              ],
              wordBank: [
                "AVG",
                "MEAN",
                "AVERAGE",
                "MID"
              ],
              answer: [
                "AVG"
              ],
              hint: "평균(Average)의 약자 AVG를 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees의 전체 직원 수를 '직원수'로 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "직원수"
                ],
                rows: [
                  [
                    4
                  ]
                ],
                ordered: false
              },
              hint: "SELECT COUNT(*) AS 직원수 FROM employees;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] 특정 컬럼의 합계를 구하는 함수는?",
              options: [
                "SUM(컬럼명)",
                "TOTAL(컬럼명)",
                "ADD(컬럼명)",
                "PLUS(컬럼명)"
              ],
              answer: 0,
              hint: "'합산(sum)'을 의미합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 전체 상품 개수를 '상품수'로 세는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                "(*) AS 상품수 FROM products;"
              ],
              wordBank: [
                "COUNT",
                "SUM",
                "AVG",
                "TOTAL"
              ],
              answer: [
                "COUNT"
              ],
              hint: "행 개수를 셀 때는 COUNT를 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees에서 전체 급여 합계(총급여)와 평균 급여(평균급여)를 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "총급여",
                  "평균급여"
                ],
                rows: [
                  [
                    19000000,
                    4750000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT SUM(salary) AS 총급여, AVG(salary) AS 평균급여 FROM employees;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] products에서 최고가(MAX)와 최저가(MIN)를 조회하세요.",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 10);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);\nINSERT INTO products VALUES (3, '키보드', 80000, 50);\nINSERT INTO products VALUES (4, '모니터', 350000, 20);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "최고가",
                  "최저가"
                ],
                rows: [
                  [
                    1200000,
                    25000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT MAX(price) AS 최고가, MIN(price) AS 최저가 FROM products;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] 컬럼의 최솟값을 구하는 함수는?",
              options: [
                "MIN()",
                "MINIMUM()",
                "SMALL()",
                "LOWEST()"
              ],
              answer: 0,
              hint: "Minimum(최솟값)의 약자입니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] COUNT(*)와 COUNT(컬럼명)의 차이점으로 옳은 것은?",
              options: [
                "COUNT(*)는 NULL 포함 전체 행 수, COUNT(컬럼명)은 NULL을 제외한 행 수",
                "둘 다 완전히 동일하다",
                "COUNT(컬럼명)이 항상 더 크다",
                "COUNT(*)는 컬럼값이 있는 행만 센다"
              ],
              answer: 0,
              hint: "COUNT(컬럼명)은 해당 컬럼이 NULL인 행을 세지 않습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 상품 중 가장 비싼 가격을 구하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                "(price) FROM products;"
              ],
              wordBank: [
                "MAX",
                "TOP",
                "HIGH",
                "BIG"
              ],
              answer: [
                "MAX"
              ],
              hint: "최댓값은 MAX 함수로 구합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] 집계 결과 컬럼에 별명을 붙일 때 사용하는 키워드를 완성하세요:",
              sentenceParts: [
                "SELECT COUNT(*) ",
                " 인원수 FROM employees;"
              ],
              wordBank: [
                "AS",
                "IS",
                "TO",
                "NAME"
              ],
              answer: [
                "AS"
              ],
              hint: "별칭(alias)을 지정할 때는 AS를 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] books에서 전체 도서 수(도서수)와 평균 가격(평균가격)을 조회하세요.",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, genre TEXT, price INTEGER, stock INTEGER);\nINSERT INTO books VALUES (1, '코딩의 정석', 'IT', 25000, 12);\nINSERT INTO books VALUES (2, '추리소설 살인사건', '소설', 15000, 5);\nINSERT INTO books VALUES (3, '파이썬 첫걸음', 'IT', 22000, 8);\nINSERT INTO books VALUES (4, '판타지 대모험', '소설', 18000, 3);\nINSERT INTO books VALUES (5, '에세이 모음집', '에세이', 14000, 20);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "도서수",
                  "평균가격"
                ],
                rows: [
                  [
                    5,
                    18800
                  ]
                ],
                ordered: false
              },
              hint: "SELECT COUNT(*) AS 도서수, AVG(price) AS 평균가격 FROM books;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] menu_items에서 카테고리가 '디저트'인 메뉴를 제외한 전체 메뉴 개수(메뉴수)와 평균 가격(평균가격)을 조회하세요.",
              setupSQL: "CREATE TABLE menu_items (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO menu_items VALUES (1, '김치찌개', '식사', 9000);\nINSERT INTO menu_items VALUES (2, '된장찌개', '식사', 8500);\nINSERT INTO menu_items VALUES (3, '아메리카노', '음료', 4000);\nINSERT INTO menu_items VALUES (4, '초코케이크', '디저트', 6500);\nINSERT INTO menu_items VALUES (5, '마카롱', '디저트', 3000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "메뉴수",
                  "평균가격"
                ],
                rows: [
                  [
                    3,
                    7166.666666666667
                  ]
                ],
                ordered: false
              },
              hint: "SELECT COUNT(*) AS 메뉴수, AVG(price) AS 평균가격 FROM menu_items WHERE category != '디저트';"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] GROUP BY 없이 SELECT COUNT(*) FROM employees;를 실행하면 결과는 몇 행이 나올까요?",
              options: [
                "1행 (전체 집계 결과)",
                "employees의 전체 행 수만큼",
                "0행",
                "에러 발생"
              ],
              answer: 0,
              hint: "GROUP BY가 없으면 테이블 전체를 하나의 그룹으로 보고 집계 결과 1행만 반환합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 최고가와 최저가의 차이를 '가격차이'로 구하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT ",
                "(price) - MIN(price) AS 가격차이 FROM products;"
              ],
              wordBank: [
                "MAX",
                "MIN",
                "AVG",
                "SUM"
              ],
              answer: [
                "MAX"
              ],
              hint: "최댓값에서 최솟값을 빼면 차이를 구할 수 있습니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] members에서 전체 회원 수(회원수)와 반올림한 평균 월회비(평균회비, 정수)를 조회하세요.",
              setupSQL: "CREATE TABLE members (id INTEGER PRIMARY KEY, name TEXT, membership_type TEXT, monthly_fee INTEGER);\nINSERT INTO members VALUES (1, '김헬스', '프리미엄', 89000);\nINSERT INTO members VALUES (2, '이근육', '베이직', 45000);\nINSERT INTO members VALUES (3, '박운동', '프리미엄', 89000);\nINSERT INTO members VALUES (4, '최다이어트', '베이직', 45000);\nINSERT INTO members VALUES (5, '정건강', 'VIP', 120000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "회원수",
                  "평균회비"
                ],
                rows: [
                  [
                    5,
                    77600
                  ]
                ],
                ordered: false
              },
              hint: "SELECT COUNT(*) AS 회원수, ROUND(AVG(monthly_fee), 0) AS 평균회비 FROM members;"
            }
          ]
        ]
      },
      {
        id: "node_sql_2_2",
        title: "그룹별로 묶기 (GROUP BY)",
        description: "데이터를 특정 컬럼 기준으로 그룹화하고 각 그룹별 집계를 구하는 GROUP BY를 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 특정 컬럼 기준으로 데이터를 묶어 집계할 때 사용하는 절은?",
              options: [
                "GROUP BY",
                "CLUSTER BY",
                "PARTITION BY",
                "ARRANGE BY"
              ],
              answer: 0,
              hint: "'그룹(group)으로 기준(by)을 삼아' 묶습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 부서별 직원 수를 구하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT department, COUNT(*) FROM employees ",
                "department;"
              ],
              wordBank: [
                "GROUP BY",
                "ORDER BY",
                "WHERE",
                "HAVING"
              ],
              answer: [
                "GROUP BY"
              ],
              hint: "GROUP BY 뒤에 그룹 기준 컬럼을 씁니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees에서 부서별 직원 수를 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);\nINSERT INTO employees VALUES (5, '정분석', '개발팀', 4800000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "department",
                  "인원수"
                ],
                rows: [
                  [
                    "개발팀",
                    3
                  ],
                  [
                    "디자인팀",
                    1
                  ],
                  [
                    "마케팅팀",
                    1
                  ]
                ],
                ordered: false
              },
              hint: "SELECT department, COUNT(*) AS 인원수 FROM employees GROUP BY department;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] GROUP BY 사용 시 SELECT에 올 수 있는 것은?",
              options: [
                "GROUP BY 기준 컬럼과 집계함수만",
                "모든 컬럼",
                "집계함수만",
                "기준 컬럼만"
              ],
              answer: 0,
              hint: "그룹 기준 컬럼과 집계 함수만 SELECT에 사용 가능합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 카테고리별 상품 개수를 구하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT category, COUNT(*) FROM products ",
                "category;"
              ],
              wordBank: [
                "GROUP BY",
                "ORDER BY",
                "HAVING",
                "WHERE"
              ],
              answer: [
                "GROUP BY"
              ],
              hint: "그룹화 기준은 GROUP BY 뒤에 씁니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees에서 부서별 평균 급여를 내림차순으로 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);\nINSERT INTO employees VALUES (5, '정분석', '개발팀', 4800000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "department",
                  "평균급여"
                ],
                rows: [
                  [
                    "개발팀",
                    5100000
                  ],
                  [
                    "디자인팀",
                    4500000
                  ],
                  [
                    "마케팅팀",
                    4000000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT department, AVG(salary) AS 평균급여 FROM employees GROUP BY department ORDER BY 평균급여 DESC;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] books에서 장르(genre)별 도서 수를 조회하세요.",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, genre TEXT, price INTEGER);\nINSERT INTO books VALUES (1, '코딩의 정석', 'IT', 25000);\nINSERT INTO books VALUES (2, '추리소설 살인사건', '소설', 15000);\nINSERT INTO books VALUES (3, '파이썬 첫걸음', 'IT', 22000);\nINSERT INTO books VALUES (4, '판타지 대모험', '소설', 18000);\nINSERT INTO books VALUES (5, '로맨스 이야기', '소설', 13000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "genre",
                  "도서수"
                ],
                rows: [
                  [
                    "IT",
                    2
                  ],
                  [
                    "소설",
                    3
                  ]
                ],
                ordered: false
              },
              hint: "SELECT genre, COUNT(*) AS 도서수 FROM books GROUP BY genre;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] 두 개 이상의 컬럼을 기준으로 그룹화할 수 있는가?",
              options: [
                "가능하다, 콤마(,)로 구분해 여러 컬럼을 지정한다",
                "불가능하다, 한 번에 하나의 컬럼만 가능하다",
                "가능하지만 최대 2개까지만 가능하다",
                "서브쿼리를 사용해야만 가능하다"
              ],
              answer: 0,
              hint: "GROUP BY a, b 처럼 콤마로 여러 컬럼을 나열할 수 있습니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] 다음 중 SQL 실행 순서로 올바른 것은?",
              options: [
                "FROM → WHERE → GROUP BY → SELECT → ORDER BY",
                "SELECT → FROM → WHERE → GROUP BY → ORDER BY",
                "FROM → GROUP BY → WHERE → SELECT → ORDER BY",
                "WHERE → FROM → SELECT → GROUP BY → ORDER BY"
              ],
              answer: 0,
              hint: "FROM으로 테이블을 정하고, WHERE로 행을 거른 뒤, GROUP BY로 묶고, SELECT로 뽑아, ORDER BY로 정렬합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 부서와 직급별로 함께 그룹화하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT department, position, COUNT(*) FROM employees GROUP BY department, ",
                ";"
              ],
              wordBank: [
                "position",
                "COUNT(*)",
                "salary",
                "id"
              ],
              answer: [
                "position"
              ],
              hint: "콤마 뒤에 두 번째 그룹화 기준 컬럼을 씁니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] 그룹화한 평균 급여를 내림차순으로 정렬하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department ",
                " avg_sal DESC;"
              ],
              wordBank: [
                "ORDER BY",
                "GROUP BY",
                "HAVING",
                "SORT BY"
              ],
              answer: [
                "ORDER BY"
              ],
              hint: "정렬은 ORDER BY로 합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] order_items에서 카테고리(category)별 총 판매 수량(총수량)을 조회하세요.",
              setupSQL: "CREATE TABLE order_items (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, quantity INTEGER);\nINSERT INTO order_items VALUES (1, '김치찌개', '식사', 5);\nINSERT INTO order_items VALUES (2, '아메리카노', '음료', 10);\nINSERT INTO order_items VALUES (3, '된장찌개', '식사', 3);\nINSERT INTO order_items VALUES (4, '라떼', '음료', 7);\nINSERT INTO order_items VALUES (5, '초코케이크', '디저트', 4);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "category",
                  "총수량"
                ],
                rows: [
                  [
                    "디저트",
                    4
                  ],
                  [
                    "식사",
                    8
                  ],
                  [
                    "음료",
                    17
                  ]
                ],
                ordered: false
              },
              hint: "SELECT category, SUM(quantity) AS 총수량 FROM order_items GROUP BY category;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] enrollments에서 과목(course)별 수강 인원수(인원수)와 평균 성적(평균성적)을 조회하세요.",
              setupSQL: "CREATE TABLE enrollments (id INTEGER PRIMARY KEY, student_name TEXT, course TEXT, grade INTEGER);\nINSERT INTO enrollments VALUES (1, '김학생', '수학', 90);\nINSERT INTO enrollments VALUES (2, '이학생', '수학', 80);\nINSERT INTO enrollments VALUES (3, '박학생', '영어', 85);\nINSERT INTO enrollments VALUES (4, '최학생', '영어', 95);\nINSERT INTO enrollments VALUES (5, '정학생', '과학', 70);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "course",
                  "인원수",
                  "평균성적"
                ],
                rows: [
                  [
                    "과학",
                    1,
                    70
                  ],
                  [
                    "수학",
                    2,
                    85
                  ],
                  [
                    "영어",
                    2,
                    90
                  ]
                ],
                ordered: false
              },
              hint: "SELECT course, COUNT(*) AS 인원수, AVG(grade) AS 평균성적 FROM enrollments GROUP BY course;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] 중복을 제거하고 서로 다른 값의 개수만 세고 싶을 때 사용하는 것은?",
              options: [
                "COUNT(DISTINCT 컬럼명)",
                "COUNT(UNIQUE 컬럼명)",
                "COUNT(ONLY 컬럼명)",
                "DISTINCT COUNT(컬럼명)"
              ],
              answer: 0,
              hint: "DISTINCT를 COUNT 함수 안에 넣어 중복을 제거한 뒤 셉니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 고객별로 서로 다른 상품을 몇 종류 주문했는지 구하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT customer_id, COUNT(",
                " product_id) FROM orders GROUP BY customer_id;"
              ],
              wordBank: [
                "DISTINCT",
                "UNIQUE",
                "ONLY",
                "ALL"
              ],
              answer: [
                "DISTINCT"
              ],
              hint: "중복을 제거하려면 DISTINCT를 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] class_signups에서 클래스(class_name)별 서로 다른 회원 수(참여회원수, 중복 제거)를 조회하세요.",
              setupSQL: "CREATE TABLE class_signups (id INTEGER PRIMARY KEY, member_id INTEGER, class_name TEXT);\nINSERT INTO class_signups VALUES (1, 1, '요가');\nINSERT INTO class_signups VALUES (2, 1, '요가');\nINSERT INTO class_signups VALUES (3, 2, '요가');\nINSERT INTO class_signups VALUES (4, 3, '필라테스');\nINSERT INTO class_signups VALUES (5, 2, '필라테스');",
              initialCode: "",
              expectedResult: {
                columns: [
                  "class_name",
                  "참여회원수"
                ],
                rows: [
                  [
                    "요가",
                    2
                  ],
                  [
                    "필라테스",
                    2
                  ]
                ],
                ordered: false
              },
              hint: "SELECT class_name, COUNT(DISTINCT member_id) AS 참여회원수 FROM class_signups GROUP BY class_name;"
            }
          ]
        ]
      },
      {
        id: "node_sql_2_3",
        title: "그룹 조건 필터 (HAVING)",
        description: "GROUP BY로 묶은 결과에 조건을 적용하는 HAVING 절을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] GROUP BY 이후 그룹 결과에 조건을 적용하는 절은?",
              options: [
                "HAVING",
                "WHERE",
                "FILTER",
                "CONDITION"
              ],
              answer: 0,
              hint: "그룹 집계 결과에 조건을 거는 절입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 직원이 2명 초과인 부서만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT department, COUNT(*) AS cnt FROM employees GROUP BY department ",
                "cnt > 2;"
              ],
              wordBank: [
                "HAVING",
                "WHERE",
                "AND",
                "FILTER"
              ],
              answer: [
                "HAVING"
              ],
              hint: "집계 결과에 조건을 걸 때는 HAVING을 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees에서 직원 수가 2명 이상인 부서만 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);\nINSERT INTO employees VALUES (5, '정분석', '개발팀', 4800000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "department",
                  "cnt"
                ],
                rows: [
                  [
                    "개발팀",
                    3
                  ]
                ],
                ordered: false
              },
              hint: "SELECT department, COUNT(*) AS cnt FROM employees GROUP BY department HAVING cnt >= 2;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] WHERE와 HAVING의 차이점은?",
              options: [
                "WHERE는 개별 행 필터, HAVING은 그룹화 결과 필터",
                "WHERE는 숫자 조건만, HAVING은 문자 조건만",
                "기능은 동일하며 위치만 다름",
                "차이가 없다"
              ],
              answer: 0,
              hint: "WHERE는 GROUP BY 이전, HAVING은 GROUP BY 이후에 작동합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 급여가 400만원 이상인 직원 중, 부서별 인원이 2명 이상인 부서만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT department, COUNT(*) FROM employees WHERE salary >= 4000000 ",
                " department HAVING COUNT(*) >= 2;"
              ],
              wordBank: [
                "GROUP BY",
                "ORDER BY",
                "WHERE",
                "HAVING"
              ],
              answer: [
                "GROUP BY"
              ],
              hint: "WHERE로 먼저 거른 뒤 GROUP BY로 묶습니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees에서 평균 급여가 4,800,000 이상인 부서만 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);\nINSERT INTO employees VALUES (5, '정분석', '개발팀', 4800000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "department",
                  "avg_sal"
                ],
                rows: [
                  [
                    "개발팀",
                    5100000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department HAVING avg_sal >= 4800000;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] books에서 장르(genre)별 도서 수가 2권 이상인 장르만 조회하세요.",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, genre TEXT, price INTEGER);\nINSERT INTO books VALUES (1, '코딩의 정석', 'IT', 25000);\nINSERT INTO books VALUES (2, '추리소설 살인사건', '소설', 15000);\nINSERT INTO books VALUES (3, '파이썬 첫걸음', 'IT', 22000);\nINSERT INTO books VALUES (4, '판타지 대모험', '소설', 18000);\nINSERT INTO books VALUES (5, '로맨스 이야기', '소설', 13000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "genre",
                  "cnt"
                ],
                rows: [
                  [
                    "IT",
                    2
                  ],
                  [
                    "소설",
                    3
                  ]
                ],
                ordered: false
              },
              hint: "SELECT genre, COUNT(*) AS cnt FROM books GROUP BY genre HAVING cnt >= 2;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] WHERE와 HAVING을 하나의 쿼리에 함께 사용할 수 있는가?",
              options: [
                "가능하다, WHERE로 행을 먼저 거르고 HAVING으로 그룹 결과를 거른다",
                "불가능하다, 둘 중 하나만 사용해야 한다",
                "가능하지만 HAVING이 항상 먼저 실행된다",
                "WHERE는 SELECT 안에서만 사용 가능하다"
              ],
              answer: 0,
              hint: "WHERE는 GROUP BY 전에, HAVING은 GROUP BY 후에 실행되므로 함께 쓸 수 있습니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] 다음 중 SQL 실행 순서로 올바른 것은?",
              options: [
                "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
                "FROM → HAVING → GROUP BY → WHERE → SELECT",
                "SELECT → WHERE → GROUP BY → HAVING",
                "FROM → GROUP BY → HAVING → WHERE → SELECT"
              ],
              answer: 0,
              hint: "HAVING은 GROUP BY 뒤, ORDER BY보다는 앞에 실행됩니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 총 판매량이 100 이상인 카테고리만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT category, SUM(quantity) AS total FROM order_items GROUP BY category ",
                " total >= 100;"
              ],
              wordBank: [
                "HAVING",
                "WHERE",
                "AND",
                "IF"
              ],
              answer: [
                "HAVING"
              ],
              hint: "그룹 집계 결과에 조건을 걸 때는 HAVING입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] 평균 성적이 80점 이상인 과목만 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT course, AVG(grade) AS avg_grade FROM enrollments GROUP BY course HAVING ",
                "(grade) >= 80;"
              ],
              wordBank: [
                "AVG",
                "SUM",
                "COUNT",
                "MAX"
              ],
              answer: [
                "AVG"
              ],
              hint: "평균 조건이므로 AVG를 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] order_items에서 카테고리(category)별 총 판매 수량(총수량)이 10개 이상인 카테고리만 조회하세요.",
              setupSQL: "CREATE TABLE order_items (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, quantity INTEGER);\nINSERT INTO order_items VALUES (1, '김치찌개', '식사', 5);\nINSERT INTO order_items VALUES (2, '아메리카노', '음료', 10);\nINSERT INTO order_items VALUES (3, '된장찌개', '식사', 3);\nINSERT INTO order_items VALUES (4, '라떼', '음료', 7);\nINSERT INTO order_items VALUES (5, '초코케이크', '디저트', 4);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "category",
                  "총수량"
                ],
                rows: [
                  [
                    "음료",
                    17
                  ]
                ],
                ordered: false
              },
              hint: "SELECT category, SUM(quantity) AS 총수량 FROM order_items GROUP BY category HAVING 총수량 >= 10;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] enrollments에서 성적(grade)이 60점 이상인 수강 기록만 대상으로, 과목(course)별 수강 인원이 2명 이상인 과목을 조회하세요.",
              setupSQL: "CREATE TABLE enrollments (id INTEGER PRIMARY KEY, student_name TEXT, course TEXT, grade INTEGER);\nINSERT INTO enrollments VALUES (1, '김학생', '수학', 90);\nINSERT INTO enrollments VALUES (2, '이학생', '수학', 80);\nINSERT INTO enrollments VALUES (3, '박학생', '영어', 85);\nINSERT INTO enrollments VALUES (4, '최학생', '영어', 40);\nINSERT INTO enrollments VALUES (5, '정학생', '과학', 70);\nINSERT INTO enrollments VALUES (6, '한학생', '과학', 75);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "course",
                  "cnt"
                ],
                rows: [
                  [
                    "과학",
                    2
                  ],
                  [
                    "수학",
                    2
                  ]
                ],
                ordered: false
              },
              hint: "SELECT course, COUNT(*) AS cnt FROM enrollments WHERE grade >= 60 GROUP BY course HAVING cnt >= 2;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] HAVING 절에서 두 가지 조건을 동시에 만족해야 할 때 사용하는 연산자는?",
              options: [
                "AND",
                "GROUP",
                "WITH",
                "PLUS"
              ],
              answer: 0,
              hint: "여러 조건을 동시에 만족시키려면 AND로 연결합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 인원이 2명 이상이면서 평균 급여도 400만원 이상인 부서를 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT department FROM employees GROUP BY department HAVING COUNT(*) >= 2 ",
                " AVG(salary) >= 4000000;"
              ],
              wordBank: [
                "AND",
                "OR",
                "GROUP BY",
                "WHERE"
              ],
              answer: [
                "AND"
              ],
              hint: "두 조건을 동시에 만족시키려면 AND로 연결합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] class_signups에서 클래스(class_name)별 신청 건수가 2건 이상이면서 서로 다른 회원 수도 2명 이상인 클래스를 조회하세요.",
              setupSQL: "CREATE TABLE class_signups (id INTEGER PRIMARY KEY, member_id INTEGER, class_name TEXT);\nINSERT INTO class_signups VALUES (1, 1, '요가');\nINSERT INTO class_signups VALUES (2, 1, '요가');\nINSERT INTO class_signups VALUES (3, 2, '요가');\nINSERT INTO class_signups VALUES (4, 3, '필라테스');\nINSERT INTO class_signups VALUES (5, 2, '필라테스');\nINSERT INTO class_signups VALUES (6, 4, '크로스핏');",
              initialCode: "",
              expectedResult: {
                columns: [
                  "class_name",
                  "cnt",
                  "member_cnt"
                ],
                rows: [
                  [
                    "요가",
                    3,
                    2
                  ],
                  [
                    "필라테스",
                    2,
                    2
                  ]
                ],
                ordered: false
              },
              hint: "SELECT class_name, COUNT(*) AS cnt, COUNT(DISTINCT member_id) AS member_cnt FROM class_signups GROUP BY class_name HAVING cnt >= 2 AND member_cnt >= 2;"
            }
          ]
        ]
      },
      {
        id: "node_sql_2_4",
        title: "테이블 합치기 (JOIN)",
        description: "두 개 이상의 테이블을 공통 컬럼으로 연결하는 JOIN을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 두 테이블에서 공통된 값이 있는 행끼리 합치는 JOIN 유형은?",
              options: [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "FULL JOIN"
              ],
              answer: 0,
              hint: "'내부(inner)'의 교집합만 반환합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] orders와 customers를 고객ID로 합치는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM orders ",
                "customers ON orders.customer_id = customers.id;"
              ],
              wordBank: [
                "INNER JOIN",
                "COMBINE",
                "MERGE",
                "ATTACH"
              ],
              answer: [
                "INNER JOIN"
              ],
              hint: "INNER JOIN 테이블명 ON 조인 조건"
            },
            {
              type: "quiz_sql",
              content: "[실습 1] orders와 customers를 INNER JOIN하여 주문자 이름과 주문 금액을 조회하세요.\n\n📋 orders: id, customer_id, amount\n📋 customers: id, name, email",
              setupSQL: "CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, email TEXT);\nCREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, amount INTEGER);\nINSERT INTO customers VALUES (1, '김코딩', 'kim@egg.com');\nINSERT INTO customers VALUES (2, '이에그', 'lee@egg.com');\nINSERT INTO customers VALUES (3, '박치킨', 'park@egg.com');\nINSERT INTO orders VALUES (1, 1, 150000);\nINSERT INTO orders VALUES (2, 1, 80000);\nINSERT INTO orders VALUES (3, 2, 200000);\nINSERT INTO orders VALUES (4, 3, 50000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "amount"
                ],
                rows: [
                  [
                    "김코딩",
                    150000
                  ],
                  [
                    "김코딩",
                    80000
                  ],
                  [
                    "이에그",
                    200000
                  ],
                  [
                    "박치킨",
                    50000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT customers.name, orders.amount FROM orders INNER JOIN customers ON orders.customer_id = customers.id;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] LEFT JOIN의 특징은?",
              options: [
                "왼쪽 테이블 전체 + 오른쪽에서 매칭된 것만",
                "오른쪽 테이블 전체 + 왼쪽에서 매칭된 것만",
                "두 테이블의 교집합만",
                "두 테이블 전체 합집합"
              ],
              answer: 0,
              hint: "LEFT는 왼쪽(기준) 테이블의 모든 행을 보존합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] menu_items와 order_items를 메뉴ID로 연결하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM order_items INNER JOIN menu_items ",
                " order_items.menu_id = menu_items.id;"
              ],
              wordBank: [
                "ON",
                "WHERE",
                "USING",
                "IF"
              ],
              answer: [
                "ON"
              ],
              hint: "연결 조건은 ON 뒤에 씁니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees와 departments를 JOIN하여 직원 이름과 부서 위치(location)를 조회하세요.",
              setupSQL: "CREATE TABLE departments (id INTEGER PRIMARY KEY, dept_name TEXT, location TEXT);\nCREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, dept_id INTEGER, salary INTEGER);\nINSERT INTO departments VALUES (1, '개발팀', '서울 강남');\nINSERT INTO departments VALUES (2, '디자인팀', '서울 홍대');\nINSERT INTO departments VALUES (3, '마케팅팀', '부산');\nINSERT INTO employees VALUES (1, '김코딩', 1, 5000000);\nINSERT INTO employees VALUES (2, '이에그', 2, 4500000);\nINSERT INTO employees VALUES (3, '박치킨', 1, 5500000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "location"
                ],
                rows: [
                  [
                    "김코딩",
                    "서울 강남"
                  ],
                  [
                    "이에그",
                    "서울 홍대"
                  ],
                  [
                    "박치킨",
                    "서울 강남"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT employees.name, departments.location FROM employees INNER JOIN departments ON employees.dept_id = departments.id;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] books와 loans를 LEFT JOIN하여 모든 도서의 제목과 대출자(borrower)를 조회하세요. 대출된 적 없는 책도 결과에 포함되어야 합니다.\n\n📋 books: id, title\n📋 loans: id, book_id, borrower",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT);\nCREATE TABLE loans (id INTEGER PRIMARY KEY, book_id INTEGER, borrower TEXT);\nINSERT INTO books VALUES (1, '코딩의 정석');\nINSERT INTO books VALUES (2, '추리소설 살인사건');\nINSERT INTO books VALUES (3, '파이썬 첫걸음');\nINSERT INTO loans VALUES (1, 1, '김독서');\nINSERT INTO loans VALUES (2, 3, '이책벌레');",
              initialCode: "",
              expectedResult: {
                columns: [
                  "title",
                  "borrower"
                ],
                rows: [
                  [
                    "코딩의 정석",
                    "김독서"
                  ],
                  [
                    "추리소설 살인사건",
                    null
                  ],
                  [
                    "파이썬 첫걸음",
                    "이책벌레"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT books.title, loans.borrower FROM books LEFT JOIN loans ON books.id = loans.book_id;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] JOIN 시 두 테이블을 연결할 조건을 지정하는 키워드는?",
              options: [
                "ON",
                "WHERE",
                "USING",
                "IF"
              ],
              answer: 0,
              hint: "JOIN 다음에 ON 조건을 붙여 연결 기준을 정합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] LEFT JOIN에서 오른쪽 테이블에 매칭되는 값이 없으면 해당 컬럼은 어떻게 표시되는가?",
              options: [
                "NULL로 표시된다",
                "0으로 표시된다",
                "에러가 발생한다",
                "해당 행이 통째로 제외된다"
              ],
              answer: 0,
              hint: "매칭이 안 되면 오른쪽 테이블의 컬럼 값은 NULL이 됩니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 주문이 없는 고객도 모두 보이도록 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM customers ",
                " orders ON customers.id = orders.customer_id;"
              ],
              wordBank: [
                "LEFT JOIN",
                "INNER JOIN",
                "RIGHT JOIN",
                "CROSS JOIN"
              ],
              answer: [
                "LEFT JOIN"
              ],
              hint: "왼쪽 테이블 전체를 보존하려면 LEFT JOIN을 사용합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] 테이블 이름에 짧은 별칭을 붙이는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT c.name FROM customers ",
                " c;"
              ],
              wordBank: [
                "AS",
                "ON",
                "IN",
                "TO"
              ],
              answer: [
                "AS"
              ],
              hint: "별칭을 붙일 때는 AS를 사용합니다 (생략 가능하지만 명시하는 것이 안전합니다)."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] order_items와 menu_items를 INNER JOIN하여 주문된 메뉴 이름과 수량을 조회하세요.\n\n📋 order_items: id, menu_id, quantity\n📋 menu_items: id, item_name, price",
              setupSQL: "CREATE TABLE menu_items (id INTEGER PRIMARY KEY, item_name TEXT, price INTEGER);\nCREATE TABLE order_items (id INTEGER PRIMARY KEY, menu_id INTEGER, quantity INTEGER);\nINSERT INTO menu_items VALUES (1, '김치찌개', 9000);\nINSERT INTO menu_items VALUES (2, '아메리카노', 4000);\nINSERT INTO menu_items VALUES (3, '초코케이크', 6500);\nINSERT INTO order_items VALUES (1, 1, 2);\nINSERT INTO order_items VALUES (2, 2, 3);\nINSERT INTO order_items VALUES (3, 1, 1);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "item_name",
                  "quantity"
                ],
                rows: [
                  [
                    "김치찌개",
                    2
                  ],
                  [
                    "아메리카노",
                    3
                  ],
                  [
                    "김치찌개",
                    1
                  ]
                ],
                ordered: false
              },
              hint: "SELECT menu_items.item_name, order_items.quantity FROM order_items INNER JOIN menu_items ON order_items.menu_id = menu_items.id;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] members와 class_signups를 LEFT JOIN하여 클래스를 한 번도 신청하지 않은 회원만 조회하세요.\n\n📋 members: id, name\n📋 class_signups: id, member_id, class_name",
              setupSQL: "CREATE TABLE members (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE class_signups (id INTEGER PRIMARY KEY, member_id INTEGER, class_name TEXT);\nINSERT INTO members VALUES (1, '김헬스');\nINSERT INTO members VALUES (2, '이근육');\nINSERT INTO members VALUES (3, '박운동');\nINSERT INTO class_signups VALUES (1, 1, '요가');\nINSERT INTO class_signups VALUES (2, 2, '필라테스');",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name"
                ],
                rows: [
                  [
                    "박운동"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT members.name FROM members LEFT JOIN class_signups ON members.id = class_signups.member_id WHERE class_signups.id IS NULL;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] 세 개 이상의 테이블을 JOIN할 수 있는가?",
              options: [
                "가능하다, JOIN을 여러 번 이어서 연결하면 된다",
                "불가능하다, 최대 2개 테이블까지만 JOIN 가능하다",
                "가능하지만 결과가 항상 비어 있다",
                "서브쿼리 없이는 불가능하다"
              ],
              answer: 0,
              hint: "JOIN을 계속 이어붙이면 여러 테이블을 연결할 수 있습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 주문 내역이 하나도 없는 고객만 찾는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM customers LEFT JOIN orders ON customers.id = orders.customer_id WHERE orders.id IS ",
                ";"
              ],
              wordBank: [
                "NULL",
                "NOT NULL",
                "0",
                "EMPTY"
              ],
              answer: [
                "NULL"
              ],
              hint: "매칭이 안 된 행은 오른쪽 컬럼이 NULL이 됩니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] students와 enrollments를 JOIN하여 성적(grade)이 80점 이상인 학생의 이름과 과목, 성적을 성적 내림차순으로 조회하세요.\n\n📋 students: id, name\n📋 enrollments: id, student_id, course, grade",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE enrollments (id INTEGER PRIMARY KEY, student_id INTEGER, course TEXT, grade INTEGER);\nINSERT INTO students VALUES (1, '김학생');\nINSERT INTO students VALUES (2, '이학생');\nINSERT INTO students VALUES (3, '박학생');\nINSERT INTO enrollments VALUES (1, 1, '수학', 90);\nINSERT INTO enrollments VALUES (2, 2, '영어', 75);\nINSERT INTO enrollments VALUES (3, 3, '과학', 85);\nINSERT INTO enrollments VALUES (4, 1, '영어', 60);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "course",
                  "grade"
                ],
                rows: [
                  [
                    "김학생",
                    "수학",
                    90
                  ],
                  [
                    "박학생",
                    "과학",
                    85
                  ]
                ],
                ordered: true
              },
              hint: "SELECT students.name, enrollments.course, enrollments.grade FROM students INNER JOIN enrollments ON students.id = enrollments.student_id WHERE enrollments.grade >= 80 ORDER BY enrollments.grade DESC;"
            }
          ]
        ]
      },
      {
        id: "node_sql_2_5",
        title: "📊 집계 · JOIN 보스전",
        description: "집계 함수, GROUP BY, HAVING, JOIN을 복합 활용하는 종합 문제입니다.",
        lessons: [
          [
            {
              type: "quiz_sql",
              content: "[보스전 1] orders에서 고객별 총 주문금액 합계가 100,000 이상인 고객만 조회하세요.",
              setupSQL: "CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, amount INTEGER);\nINSERT INTO orders VALUES (1, 1, 150000);\nINSERT INTO orders VALUES (2, 1, 80000);\nINSERT INTO orders VALUES (3, 2, 200000);\nINSERT INTO orders VALUES (4, 3, 50000);\nINSERT INTO orders VALUES (5, 2, 30000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "customer_id",
                  "total"
                ],
                rows: [
                  [
                    1,
                    230000
                  ],
                  [
                    2,
                    230000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT customer_id, SUM(amount) AS total FROM orders GROUP BY customer_id HAVING total >= 100000;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 2] employees와 departments를 JOIN하여 부서별 평균 급여를 내림차순으로 조회하세요.",
              setupSQL: "CREATE TABLE departments (id INTEGER PRIMARY KEY, dept_name TEXT);\nCREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, dept_id INTEGER, salary INTEGER);\nINSERT INTO departments VALUES (1, '개발팀');\nINSERT INTO departments VALUES (2, '디자인팀');\nINSERT INTO departments VALUES (3, '마케팅팀');\nINSERT INTO employees VALUES (1, '김코딩', 1, 5000000);\nINSERT INTO employees VALUES (2, '이에그', 2, 4500000);\nINSERT INTO employees VALUES (3, '박치킨', 1, 5500000);\nINSERT INTO employees VALUES (4, '최데이터', 3, 4000000);\nINSERT INTO employees VALUES (5, '정분석', 1, 4800000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "dept_name",
                  "avg_sal"
                ],
                rows: [
                  [
                    "개발팀",
                    5100000
                  ],
                  [
                    "디자인팀",
                    4500000
                  ],
                  [
                    "마케팅팀",
                    4000000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT departments.dept_name, AVG(employees.salary) AS avg_sal FROM employees INNER JOIN departments ON employees.dept_id = departments.id GROUP BY departments.dept_name ORDER BY avg_sal DESC;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[보스전 3] books와 loans를 JOIN하여 2번 이상 대출된 도서의 제목과 대출 횟수를 조회하세요.\n\n📋 books: id, title\n📋 loans: id, book_id",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT);\nCREATE TABLE loans (id INTEGER PRIMARY KEY, book_id INTEGER);\nINSERT INTO books VALUES (1, '코딩의 정석');\nINSERT INTO books VALUES (2, '추리소설 살인사건');\nINSERT INTO books VALUES (3, '파이썬 첫걸음');\nINSERT INTO loans VALUES (1, 1);\nINSERT INTO loans VALUES (2, 1);\nINSERT INTO loans VALUES (3, 2);\nINSERT INTO loans VALUES (4, 3);\nINSERT INTO loans VALUES (5, 3);\nINSERT INTO loans VALUES (6, 3);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "title",
                  "대출횟수"
                ],
                rows: [
                  [
                    "코딩의 정석",
                    2
                  ],
                  [
                    "파이썬 첫걸음",
                    3
                  ]
                ],
                ordered: false
              },
              hint: "SELECT books.title, COUNT(*) AS 대출횟수 FROM books INNER JOIN loans ON books.id = loans.book_id GROUP BY books.title HAVING 대출횟수 >= 2;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 4] menu_items와 order_items를 JOIN하여 메뉴별 총 판매 수량이 5개 이상인 메뉴를 판매 수량 내림차순으로 조회하세요.\n\n📋 menu_items: id, item_name\n📋 order_items: id, menu_id, quantity",
              setupSQL: "CREATE TABLE menu_items (id INTEGER PRIMARY KEY, item_name TEXT);\nCREATE TABLE order_items (id INTEGER PRIMARY KEY, menu_id INTEGER, quantity INTEGER);\nINSERT INTO menu_items VALUES (1, '김치찌개');\nINSERT INTO menu_items VALUES (2, '아메리카노');\nINSERT INTO menu_items VALUES (3, '초코케이크');\nINSERT INTO order_items VALUES (1, 1, 3);\nINSERT INTO order_items VALUES (2, 1, 4);\nINSERT INTO order_items VALUES (3, 2, 2);\nINSERT INTO order_items VALUES (4, 3, 6);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "item_name",
                  "총수량"
                ],
                rows: [
                  [
                    "김치찌개",
                    7
                  ],
                  [
                    "초코케이크",
                    6
                  ]
                ],
                ordered: true
              },
              hint: "SELECT menu_items.item_name, SUM(order_items.quantity) AS 총수량 FROM menu_items INNER JOIN order_items ON menu_items.id = order_items.menu_id GROUP BY menu_items.item_name HAVING 총수량 >= 5 ORDER BY 총수량 DESC;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[보스전 5] students와 enrollments를 JOIN하여 평균 성적이 80점 이상인 학생의 이름과 평균 성적을 조회하세요.\n\n📋 students: id, name\n📋 enrollments: id, student_id, grade",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE enrollments (id INTEGER PRIMARY KEY, student_id INTEGER, grade INTEGER);\nINSERT INTO students VALUES (1, '김학생');\nINSERT INTO students VALUES (2, '이학생');\nINSERT INTO students VALUES (3, '박학생');\nINSERT INTO enrollments VALUES (1, 1, 90);\nINSERT INTO enrollments VALUES (2, 1, 85);\nINSERT INTO enrollments VALUES (3, 2, 60);\nINSERT INTO enrollments VALUES (4, 2, 70);\nINSERT INTO enrollments VALUES (5, 3, 80);\nINSERT INTO enrollments VALUES (6, 3, 90);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "평균성적"
                ],
                rows: [
                  [
                    "김학생",
                    87.5
                  ],
                  [
                    "박학생",
                    85
                  ]
                ],
                ordered: false
              },
              hint: "SELECT students.name, AVG(enrollments.grade) AS 평균성적 FROM students INNER JOIN enrollments ON students.id = enrollments.student_id GROUP BY students.name HAVING 평균성적 >= 80;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 6] members와 class_signups를 LEFT JOIN하여 신청한 클래스가 하나도 없는 회원의 이름을 조회하세요.\n\n📋 members: id, name\n📋 class_signups: id, member_id, class_name",
              setupSQL: "CREATE TABLE members (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE class_signups (id INTEGER PRIMARY KEY, member_id INTEGER, class_name TEXT);\nINSERT INTO members VALUES (1, '김헬스');\nINSERT INTO members VALUES (2, '이근육');\nINSERT INTO members VALUES (3, '박운동');\nINSERT INTO class_signups VALUES (1, 1, '요가');\nINSERT INTO class_signups VALUES (2, 1, '필라테스');\nINSERT INTO class_signups VALUES (3, 2, '요가');",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "신청수"
                ],
                rows: [
                  [
                    "박운동",
                    0
                  ]
                ],
                ordered: false
              },
              hint: "SELECT members.name, COUNT(class_signups.id) AS 신청수 FROM members LEFT JOIN class_signups ON members.id = class_signups.member_id GROUP BY members.name HAVING 신청수 = 0;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[보스전 7] products와 reviews를 JOIN하여 리뷰가 2건 이상이면서 평균 평점(avg_rating)이 4.0 이상인 상품명과 평균 평점을 조회하세요.\n\n📋 products: id, product_name\n📋 reviews: id, product_id, rating",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT);\nCREATE TABLE reviews (id INTEGER PRIMARY KEY, product_id INTEGER, rating REAL);\nINSERT INTO products VALUES (1, '무선 이어폰');\nINSERT INTO products VALUES (2, '블루투스 스피커');\nINSERT INTO products VALUES (3, '보조배터리');\nINSERT INTO reviews VALUES (1, 1, 5);\nINSERT INTO reviews VALUES (2, 1, 4);\nINSERT INTO reviews VALUES (3, 2, 3);\nINSERT INTO reviews VALUES (4, 2, 2);\nINSERT INTO reviews VALUES (5, 3, 5);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "product_name",
                  "avg_rating",
                  "review_cnt"
                ],
                rows: [
                  [
                    "무선 이어폰",
                    4.5,
                    2
                  ]
                ],
                ordered: false
              },
              hint: "SELECT products.product_name, AVG(reviews.rating) AS avg_rating, COUNT(*) AS review_cnt FROM products INNER JOIN reviews ON products.id = reviews.product_id GROUP BY products.product_name HAVING review_cnt >= 2 AND avg_rating >= 4.0;"
            },
            {
              type: "quiz_sql",
              content: "[보스전 8] students, enrollments, courses 세 테이블을 JOIN하여 과목별 평균 성적이 80점 이상인 과목명과 평균 성적을 평균 성적 내림차순으로 조회하세요.\n\n📋 students: id, name\n📋 courses: id, course_name\n📋 enrollments: id, student_id, course_id, grade",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE courses (id INTEGER PRIMARY KEY, course_name TEXT);\nCREATE TABLE enrollments (id INTEGER PRIMARY KEY, student_id INTEGER, course_id INTEGER, grade INTEGER);\nINSERT INTO students VALUES (1, '김학생');\nINSERT INTO students VALUES (2, '이학생');\nINSERT INTO students VALUES (3, '박학생');\nINSERT INTO courses VALUES (1, '수학');\nINSERT INTO courses VALUES (2, '영어');\nINSERT INTO courses VALUES (3, '과학');\nINSERT INTO enrollments VALUES (1, 1, 1, 95);\nINSERT INTO enrollments VALUES (2, 2, 1, 85);\nINSERT INTO enrollments VALUES (3, 3, 2, 60);\nINSERT INTO enrollments VALUES (4, 1, 2, 70);\nINSERT INTO enrollments VALUES (5, 2, 3, 90);\nINSERT INTO enrollments VALUES (6, 3, 3, 88);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "course_name",
                  "avg_grade"
                ],
                rows: [
                  [
                    "수학",
                    90
                  ],
                  [
                    "과학",
                    89
                  ]
                ],
                ordered: true
              },
              hint: "SELECT courses.course_name, AVG(enrollments.grade) AS avg_grade FROM enrollments INNER JOIN students ON enrollments.student_id = students.id INNER JOIN courses ON enrollments.course_id = courses.id GROUP BY courses.course_name HAVING avg_grade >= 80 ORDER BY avg_grade DESC;"
            }
          ]
        ]
      }
    ]
  },
  {
    id: 203,
    title: "UNIT 3\n데이터 변경하기",
    nodes: [
      {
        id: "node_sql_3_1",
        title: "새 데이터 넣기 (INSERT)",
        description: "테이블에 새로운 행을 추가하는 INSERT INTO 문을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 테이블에 새로운 데이터를 삽입할 때 사용하는 SQL 명령어는?",
              options: [
                "INSERT INTO",
                "ADD INTO",
                "PUSH INTO",
                "APPEND INTO"
              ],
              answer: 0,
              hint: "'삽입(insert)하여 ~안에(into)' 넣는 명령어입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] employees 테이블에 새 직원을 추가하는 SQL을 완성하세요:",
              sentenceParts: [
                "INSERT ",
                "employees (name, department, salary) VALUES ('홍길동', '개발팀', 5000000);"
              ],
              wordBank: [
                "INTO",
                "IN",
                "TO",
                "AT"
              ],
              answer: [
                "INTO"
              ],
              hint: "INSERT INTO 테이블명 (컬럼명들) VALUES (값들)"
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees에 '홍길동', '마케팅팀', 급여 3,800,000을 추가하고 전체 직원을 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);",
              initialCode: "INSERT INTO employees (name, department, salary) VALUES\n\nSELECT * FROM employees;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    2,
                    "이에그",
                    "디자인팀",
                    4500000
                  ],
                  [
                    3,
                    "홍길동",
                    "마케팅팀",
                    3800000
                  ]
                ],
                ordered: false
              },
              hint: "INSERT INTO employees (name, department, salary) VALUES ('홍길동', '마케팅팀', 3800000);\nSELECT * FROM employees;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] INSERT 시 VALUES 괄호 안의 값들의 순서는?",
              options: [
                "컬럼 목록에 나열한 순서와 동일하게",
                "알파벳 순서로",
                "숫자 컬럼 먼저",
                "아무 순서나 가능"
              ],
              answer: 0,
              hint: "(name, salary) VALUES ('김코딩', 5000000) — 순서가 1:1로 매칭됩니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] gym_members 테이블에 새 회원을 추가하는 SQL을 완성하세요:",
              sentenceParts: [
                "INSERT INTO gym_members (name, plan) ",
                "('오런닝', '프리미엄');"
              ],
              wordBank: [
                "VALUES",
                "SET",
                "WHERE",
                "FROM"
              ],
              answer: [
                "VALUES"
              ],
              hint: "INSERT INTO 테이블 (컬럼들) VALUES (값들) 형태로 작성합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] products에 '태블릿', 가격 600,000, 재고 15를 추가하고 전체 상품을 조회하세요.",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 10);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);",
              initialCode: "\nSELECT * FROM products;",
              expectedResult: {
                columns: [
                  "id",
                  "product_name",
                  "price",
                  "stock"
                ],
                rows: [
                  [
                    1,
                    "노트북",
                    1200000,
                    10
                  ],
                  [
                    2,
                    "마우스",
                    25000,
                    100
                  ],
                  [
                    3,
                    "태블릿",
                    600000,
                    15
                  ]
                ],
                ordered: false
              },
              hint: "INSERT INTO products (product_name, price, stock) VALUES ('태블릿', 600000, 15);\nSELECT * FROM products;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] books 테이블에 '클린 코드'라는 제목, 저자 '로버트 마틴', 출간연도 2008로 새 책을 추가하고 전체 도서를 조회하세요.",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, year INTEGER);\nINSERT INTO books VALUES (1, '이펙티브 자바', '조슈아 블로크', 2001);\nINSERT INTO books VALUES (2, '리팩터링', '마틴 파울러', 1999);",
              initialCode: "\nSELECT * FROM books;",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "author",
                  "year"
                ],
                rows: [
                  [
                    1,
                    "이펙티브 자바",
                    "조슈아 블로크",
                    2001
                  ],
                  [
                    2,
                    "리팩터링",
                    "마틴 파울러",
                    1999
                  ],
                  [
                    3,
                    "클린 코드",
                    "로버트 마틴",
                    2008
                  ]
                ],
                ordered: false
              },
              hint: "INSERT INTO books (title, author, year) VALUES ('클린 코드', '로버트 마틴', 2008);\nSELECT * FROM books;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] 컬럼명을 생략하고 INSERT INTO employees VALUES (4, '최고수', '기획팀', 4700000); 처럼 쓰면 어떻게 되나요?",
              options: [
                "테이블에 정의된 모든 컬럼에 순서대로 값이 들어간다",
                "첫 번째 컬럼에만 값이 들어간다",
                "에러가 발생해 실행되지 않는다",
                "값이 무작위 컬럼에 들어간다"
              ],
              answer: 0,
              hint: "컬럼 목록을 생략하면 테이블 정의 순서 그대로 모든 컬럼에 값이 매칭됩니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] 한 번에 여러 행을 INSERT하려면 어떻게 작성하나요?",
              options: [
                "VALUES 뒤에 (값1), (값2)처럼 콤마로 나열",
                "INSERT문을 두 번 이상 쓸 수 없다",
                "UNION INSERT 키워드를 사용",
                "VALUES를 여러 번 반복해서 작성"
              ],
              answer: 0,
              hint: "VALUES (1행), (2행), (3행); 처럼 콤마로 구분해 여러 행을 한 번에 넣을 수 있습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 한 번에 두 상품을 추가하는 SQL을 완성하세요:",
              sentenceParts: [
                "INSERT INTO products (product_name, price) VALUES ('키보드', 80000)",
                " ('모니터', 300000);"
              ],
              wordBank: [
                ",",
                ";",
                ".",
                ":"
              ],
              answer: [
                ","
              ],
              hint: "여러 행을 한 번에 넣을 때는 VALUES 뒤에 괄호를 콤마(,)로 구분해 나열합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] 개발팀 직원만 backup_employees 테이블로 복사해 넣는 SQL을 완성하세요:",
              sentenceParts: [
                "INSERT INTO backup_employees (name, department, salary) ",
                "name, department, salary FROM employees WHERE department = '개발팀';"
              ],
              wordBank: [
                "SELECT",
                "VALUES",
                "WHERE",
                "FROM"
              ],
              answer: [
                "SELECT"
              ],
              hint: "INSERT INTO ... SELECT ... FROM ... 형태로 다른 테이블의 조회 결과를 그대로 삽입할 수 있습니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] menu 테이블에 '아메리카노'(4,500원)와 '카페라떼'(5,000원) 두 메뉴를 한 번에 추가하고 전체 메뉴를 조회하세요.",
              setupSQL: "CREATE TABLE menu (id INTEGER PRIMARY KEY, item_name TEXT, price INTEGER);\nINSERT INTO menu VALUES (1, '에스프레소', 4000);",
              initialCode: "\nSELECT * FROM menu;",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "price"
                ],
                rows: [
                  [
                    1,
                    "에스프레소",
                    4000
                  ],
                  [
                    2,
                    "아메리카노",
                    4500
                  ],
                  [
                    3,
                    "카페라떼",
                    5000
                  ]
                ],
                ordered: false
              },
              hint: "INSERT INTO menu (item_name, price) VALUES ('아메리카노', 4500), ('카페라떼', 5000);\nSELECT * FROM menu;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] students 테이블에 이름 '정민지', 학년(grade) 3, 점수(score) 92인 학생을 score, name, grade 순서로 컬럼을 지정해 추가하고 전체 학생을 조회하세요.",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, grade INTEGER, score INTEGER);\nINSERT INTO students VALUES (1, '한여름', 2, 85);\nINSERT INTO students VALUES (2, '이겨울', 3, 78);",
              initialCode: "\nSELECT * FROM students;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "grade",
                  "score"
                ],
                rows: [
                  [
                    1,
                    "한여름",
                    2,
                    85
                  ],
                  [
                    2,
                    "이겨울",
                    3,
                    78
                  ],
                  [
                    3,
                    "정민지",
                    3,
                    92
                  ]
                ],
                ordered: false
              },
              hint: "INSERT INTO students (score, name, grade) VALUES (92, '정민지', 3);\nSELECT * FROM students;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] id가 PRIMARY KEY인 employees 테이블에 이미 존재하는 id 값으로 INSERT하면 어떤 일이 벌어지나요?",
              options: [
                "UNIQUE 제약 조건 위반으로 에러가 발생한다",
                "기존 행이 새 값으로 자동 덮어써진다",
                "새 행이 조용히 무시된다",
                "id가 자동으로 다른 값으로 바뀐다"
              ],
              answer: 0,
              hint: "PRIMARY KEY는 중복을 허용하지 않으므로 이미 있는 값으로 INSERT하면 오류가 납니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 컬럼명을 생략하고 전체 값을 테이블 정의 순서 그대로 넣는 SQL을 완성하세요:",
              sentenceParts: [
                "INSERT ",
                "employees VALUES (4, '최고수', '기획팀', 4700000);"
              ],
              wordBank: [
                "INTO",
                "IN",
                "ON",
                "AT"
              ],
              answer: [
                "INTO"
              ],
              hint: "컬럼 목록을 생략해도 INSERT INTO 테이블 VALUES (전체 값) 형태는 동일합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] gym_members 중 plan이 '프리미엄'인 회원만 vip_members 테이블에 복사해 넣고, vip_members 전체를 조회하세요.",
              setupSQL: "CREATE TABLE gym_members (id INTEGER PRIMARY KEY, name TEXT, plan TEXT);\nCREATE TABLE vip_members (id INTEGER PRIMARY KEY, name TEXT, plan TEXT);\nINSERT INTO gym_members VALUES (1, '오런닝', '프리미엄');\nINSERT INTO gym_members VALUES (2, '박근력', '일반');\nINSERT INTO gym_members VALUES (3, '최유산소', '프리미엄');",
              initialCode: "\nSELECT * FROM vip_members;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "plan"
                ],
                rows: [
                  [
                    1,
                    "오런닝",
                    "프리미엄"
                  ],
                  [
                    3,
                    "최유산소",
                    "프리미엄"
                  ]
                ],
                ordered: false
              },
              hint: "INSERT INTO vip_members (id, name, plan) SELECT id, name, plan FROM gym_members WHERE plan = '프리미엄';\nSELECT * FROM vip_members;"
            }
          ]
        ]
      },
      {
        id: "node_sql_3_2",
        title: "데이터 고치기 (UPDATE)",
        description: "기존 데이터를 수정하는 UPDATE SET WHERE 구문을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 테이블의 기존 데이터를 수정할 때 사용하는 명령어는?",
              options: [
                "UPDATE",
                "MODIFY",
                "CHANGE",
                "EDIT"
              ],
              answer: 0,
              hint: "'업데이트(update)'하다는 뜻의 SQL 키워드입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] ID=1인 직원의 급여를 6,000,000으로 수정하는 SQL을 완성하세요:",
              sentenceParts: [
                "UPDATE employees ",
                "salary = 6000000 WHERE id = 1;"
              ],
              wordBank: [
                "SET",
                "CHANGE",
                "TO",
                "VALUES"
              ],
              answer: [
                "SET"
              ],
              hint: "UPDATE 테이블 SET 컬럼=값 WHERE 조건"
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees에서 ID=2인 직원의 급여를 5,000,000으로 수정하고 전체 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);",
              initialCode: "\nSELECT * FROM employees;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    2,
                    "이에그",
                    "디자인팀",
                    5000000
                  ],
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ]
                ],
                ordered: false
              },
              hint: "UPDATE employees SET salary = 5000000 WHERE id = 2;\nSELECT * FROM employees;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] UPDATE에서 WHERE 절을 생략하면?",
              options: [
                "테이블의 모든 행이 수정된다",
                "에러가 발생한다",
                "첫 번째 행만 수정된다",
                "아무것도 수정되지 않는다"
              ],
              answer: 0,
              hint: "⚠️ WHERE 없이 UPDATE를 실행하면 전체 데이터가 변경되므로 매우 위험합니다!"
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 이름과 부서를 동시에 수정하는 SQL을 완성하세요:",
              sentenceParts: [
                "UPDATE employees SET name = '김수정'",
                " department = '기획팀' WHERE id = 1;"
              ],
              wordBank: [
                ",",
                ";",
                ".",
                "AND"
              ],
              answer: [
                ","
              ],
              hint: "여러 컬럼을 동시에 SET할 때는 콤마(,)로 구분합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] employees에서 마케팅팀 전체를 '영업팀'으로 변경하고 전체 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '마케팅팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '마케팅팀', 4000000);",
              initialCode: "\nSELECT * FROM employees;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    2,
                    "이에그",
                    "영업팀",
                    4500000
                  ],
                  [
                    3,
                    "박치킨",
                    "영업팀",
                    4000000
                  ]
                ],
                ordered: false
              },
              hint: "UPDATE employees SET department = '영업팀' WHERE department = '마케팅팀';\nSELECT * FROM employees;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] books에서 '리팩터링'의 출간연도를 2018(개정판)로 수정하고 전체 도서를 조회하세요.",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, year INTEGER);\nINSERT INTO books VALUES (1, '이펙티브 자바', 2001);\nINSERT INTO books VALUES (2, '리팩터링', 1999);",
              initialCode: "\nSELECT * FROM books;",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "year"
                ],
                rows: [
                  [
                    1,
                    "이펙티브 자바",
                    2001
                  ],
                  [
                    2,
                    "리팩터링",
                    2018
                  ]
                ],
                ordered: false
              },
              hint: "UPDATE books SET year = 2018 WHERE title = '리팩터링';\nSELECT * FROM books;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] UPDATE employees SET salary = salary * 1.1 WHERE department = '개발팀'; 의 의미는?",
              options: [
                "개발팀 전체 직원의 급여를 10% 인상한다",
                "개발팀 직원의 급여를 1.1원으로 고정한다",
                "salary 컬럼 자체를 삭제한다",
                "문법 오류로 실행되지 않는다"
              ],
              answer: 0,
              hint: "salary * 1.1은 기존 급여에 10%를 더한 값을 의미합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] 한 번에 여러 컬럼을 수정하려면 SET 절을 어떻게 작성하나요?",
              options: [
                "SET col1 = val1, col2 = val2 처럼 콤마로 구분",
                "SET col1 = val1 AND col2 = val2",
                "SET문을 두 번 나눠서 작성해야 한다",
                "여러 컬럼은 한 번에 수정할 수 없다"
              ],
              answer: 0,
              hint: "SET 절에 콤마로 여러 개의 '컬럼 = 값'을 나열하면 동시에 수정됩니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 개발팀 전체 급여를 10% 인상하는 SQL을 완성하세요:",
              sentenceParts: [
                "UPDATE employees SET salary = salary ",
                " 1.1 WHERE department = '개발팀';"
              ],
              wordBank: [
                "*",
                "+",
                "=",
                "/"
              ],
              answer: [
                "*"
              ],
              hint: "10% 인상은 기존 값에 1.1을 곱하는 것과 같습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] menu 테이블에서 '아메리카노' 가격을 5,000으로 수정하는 SQL을 완성하세요:",
              sentenceParts: [
                "UPDATE menu ",
                "price = 5000 WHERE item_name = '아메리카노';"
              ],
              wordBank: [
                "SET",
                "VALUES",
                "WHERE",
                "INTO"
              ],
              answer: [
                "SET"
              ],
              hint: "UPDATE 테이블 SET 컬럼 = 값 WHERE 조건 형태입니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] menu에서 category가 '커피'인 메뉴의 가격을 10% 인상하고 전체 메뉴를 조회하세요.",
              setupSQL: "CREATE TABLE menu (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO menu VALUES (1, '아메리카노', '커피', 4000);\nINSERT INTO menu VALUES (2, '카페라떼', '커피', 4500);\nINSERT INTO menu VALUES (3, '레몬에이드', '에이드', 5000);",
              initialCode: "\nSELECT * FROM menu;",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "category",
                  "price"
                ],
                rows: [
                  [
                    1,
                    "아메리카노",
                    "커피",
                    4400
                  ],
                  [
                    2,
                    "카페라떼",
                    "커피",
                    4950
                  ],
                  [
                    3,
                    "레몬에이드",
                    "에이드",
                    5000
                  ]
                ],
                ordered: false
              },
              hint: "UPDATE menu SET price = price * 1.1 WHERE category = '커피';\nSELECT * FROM menu;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] students에서 ID=2인 학생의 학년(grade)을 4로, 점수(score)를 95로 동시에 수정하고 전체 학생을 조회하세요.",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, grade INTEGER, score INTEGER);\nINSERT INTO students VALUES (1, '한여름', 2, 85);\nINSERT INTO students VALUES (2, '이겨울', 3, 78);\nINSERT INTO students VALUES (3, '정민지', 3, 92);",
              initialCode: "\nSELECT * FROM students;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "grade",
                  "score"
                ],
                rows: [
                  [
                    1,
                    "한여름",
                    2,
                    85
                  ],
                  [
                    2,
                    "이겨울",
                    4,
                    95
                  ],
                  [
                    3,
                    "정민지",
                    3,
                    92
                  ]
                ],
                ordered: false
              },
              hint: "UPDATE students SET grade = 4, score = 95 WHERE id = 2;\nSELECT * FROM students;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] UPDATE employees SET salary = (SELECT AVG(salary) FROM employees) WHERE department = '마케팅팀'; 의 의미는?",
              options: [
                "마케팅팀 직원들의 급여를 전체 평균 급여로 맞춘다",
                "마케팅팀의 평균 급여만 계산해서 보여준다",
                "전체 직원의 급여가 마케팅팀 급여로 바뀐다",
                "문법 오류로 실행되지 않는다"
              ],
              answer: 0,
              hint: "서브쿼리로 구한 전체 평균값을 마케팅팀 직원들의 salary에 그대로 대입합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 마케팅팀 급여를 전체 평균 급여로 맞추는 SQL을 완성하세요:",
              sentenceParts: [
                "UPDATE employees SET salary = (SELECT AVG(salary) FROM employees) ",
                "department = '마케팅팀';"
              ],
              wordBank: [
                "WHERE",
                "SET",
                "FROM",
                "VALUES"
              ],
              answer: [
                "WHERE"
              ],
              hint: "수정할 대상을 좁히려면 WHERE 절로 조건을 지정합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] gym_members에서 월 이용료(fee)가 전체 평균보다 낮은 회원의 fee를 전체 평균값으로 수정하고 전체 회원을 조회하세요.",
              setupSQL: "CREATE TABLE gym_members (id INTEGER PRIMARY KEY, name TEXT, fee INTEGER);\nINSERT INTO gym_members VALUES (1, '오런닝', 50000);\nINSERT INTO gym_members VALUES (2, '박근력', 30000);\nINSERT INTO gym_members VALUES (3, '최유산소', 70000);\nINSERT INTO gym_members VALUES (4, '김스트레칭', 20000);",
              initialCode: "\nSELECT * FROM gym_members;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "fee"
                ],
                rows: [
                  [
                    1,
                    "오런닝",
                    50000
                  ],
                  [
                    2,
                    "박근력",
                    42500
                  ],
                  [
                    3,
                    "최유산소",
                    70000
                  ],
                  [
                    4,
                    "김스트레칭",
                    42500
                  ]
                ],
                ordered: false
              },
              hint: "UPDATE gym_members SET fee = (SELECT AVG(fee) FROM gym_members) WHERE fee < (SELECT AVG(fee) FROM gym_members);\nSELECT * FROM gym_members;"
            }
          ]
        ]
      },
      {
        id: "node_sql_3_3",
        title: "데이터 지우기 (DELETE)",
        description: "조건에 맞는 행을 삭제하는 DELETE FROM WHERE 구문을 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 테이블에서 특정 행을 삭제할 때 사용하는 명령어는?",
              options: [
                "DELETE FROM",
                "REMOVE FROM",
                "DROP FROM",
                "ERASE FROM"
              ],
              answer: 0,
              hint: "'삭제(delete)하되 어디서(from)' 라는 구조입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] ID=3인 직원을 삭제하는 SQL을 완성하세요:",
              sentenceParts: [
                "DELETE ",
                "employees WHERE id = 3;"
              ],
              wordBank: [
                "FROM",
                "IN",
                "AT",
                "INTO"
              ],
              answer: [
                "FROM"
              ],
              hint: "DELETE FROM 테이블명 WHERE 조건"
            },
            {
              type: "quiz_sql",
              content: "[실습 1] employees에서 ID=2인 직원을 삭제하고 남은 직원을 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);",
              initialCode: "\nSELECT * FROM employees;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ]
                ],
                ordered: false
              },
              hint: "DELETE FROM employees WHERE id = 2;\nSELECT * FROM employees;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] DELETE와 DROP TABLE의 차이점은?",
              options: [
                "DELETE는 행 삭제, DROP TABLE은 테이블 자체 삭제",
                "DELETE는 테이블 삭제, DROP TABLE은 행 삭제",
                "둘 다 행을 삭제",
                "둘 다 테이블을 삭제"
              ],
              answer: 0,
              hint: "DELETE는 데이터(행)를 지우고, DROP은 테이블 구조 자체를 삭제합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] products에서 재고가 0인 상품을 삭제하는 SQL을 완성하세요:",
              sentenceParts: [
                "DELETE FROM products ",
                "stock = 0;"
              ],
              wordBank: [
                "WHERE",
                "SET",
                "VALUES",
                "FROM"
              ],
              answer: [
                "WHERE"
              ],
              hint: "삭제할 조건은 WHERE 절로 지정합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] products에서 재고(stock)가 0인 상품을 모두 삭제하고 남은 상품을 조회하세요.",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, price INTEGER, stock INTEGER);\nINSERT INTO products VALUES (1, '노트북', 1200000, 0);\nINSERT INTO products VALUES (2, '마우스', 25000, 100);\nINSERT INTO products VALUES (3, '키보드', 80000, 0);\nINSERT INTO products VALUES (4, '모니터', 350000, 20);",
              initialCode: "\nSELECT * FROM products;",
              expectedResult: {
                columns: [
                  "id",
                  "product_name",
                  "price",
                  "stock"
                ],
                rows: [
                  [
                    2,
                    "마우스",
                    25000,
                    100
                  ],
                  [
                    4,
                    "모니터",
                    350000,
                    20
                  ]
                ],
                ordered: false
              },
              hint: "DELETE FROM products WHERE stock = 0;\nSELECT * FROM products;"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] books에서 출간연도가 2000년 이전인 책을 삭제하고 남은 책을 조회하세요.",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, year INTEGER);\nINSERT INTO books VALUES (1, '객체지향의 사실과 오해', 2015);\nINSERT INTO books VALUES (2, 'UNIX의 탄생', 1994);\nINSERT INTO books VALUES (3, '리팩터링', 1999);",
              initialCode: "\nSELECT * FROM books;",
              expectedResult: {
                columns: [
                  "id",
                  "title",
                  "year"
                ],
                rows: [
                  [
                    1,
                    "객체지향의 사실과 오해",
                    2015
                  ]
                ],
                ordered: false
              },
              hint: "DELETE FROM books WHERE year < 2000;\nSELECT * FROM books;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] DELETE FROM employees; 처럼 WHERE 없이 실행하면 어떻게 되나요?",
              options: [
                "테이블 구조는 남고 모든 행이 삭제된다",
                "테이블 자체가 완전히 사라진다",
                "문법 오류가 발생한다",
                "아무 일도 일어나지 않는다"
              ],
              answer: 0,
              hint: "⚠️ WHERE 없는 DELETE는 테이블의 모든 행을 지우지만, 테이블 구조는 그대로 남습니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] 두 조건을 모두 만족하는 행만 삭제하려면 어떻게 작성하나요?",
              options: [
                "WHERE 절에 AND로 두 조건을 연결",
                "DELETE를 두 번 실행해야 한다",
                "WHERE를 두 번 작성한다",
                "DELETE MULTI 키워드 사용"
              ],
              answer: 0,
              hint: "WHERE 조건1 AND 조건2 형태로 두 조건을 모두 만족하는 행만 골라낼 수 있습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 개발팀이면서 급여가 4,000,000 미만인 직원을 삭제하는 SQL을 완성하세요:",
              sentenceParts: [
                "DELETE FROM employees WHERE department = '개발팀' ",
                "salary < 4000000;"
              ],
              wordBank: [
                "AND",
                "OR",
                "THEN",
                "WITH"
              ],
              answer: [
                "AND"
              ],
              hint: "두 조건을 모두 만족해야 하므로 AND로 연결합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] 출간연도가 2000년 이전인 책을 삭제하는 SQL을 완성하세요:",
              sentenceParts: [
                "DELETE FROM books WHERE year ",
                "2000;"
              ],
              wordBank: [
                "<",
                "=",
                ">",
                "<>"
              ],
              answer: [
                "<"
              ],
              hint: "'이전'은 비교 연산자 <(작다)로 표현합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] menu에서 category가 '디저트'이면서 가격이 3,000 미만인 메뉴를 삭제하고 전체 메뉴를 조회하세요.",
              setupSQL: "CREATE TABLE menu (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO menu VALUES (1, '치즈케이크', '디저트', 6000);\nINSERT INTO menu VALUES (2, '쿠키', '디저트', 2500);\nINSERT INTO menu VALUES (3, '아메리카노', '커피', 4000);",
              initialCode: "\nSELECT * FROM menu;",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "category",
                  "price"
                ],
                rows: [
                  [
                    1,
                    "치즈케이크",
                    "디저트",
                    6000
                  ],
                  [
                    3,
                    "아메리카노",
                    "커피",
                    4000
                  ]
                ],
                ordered: false
              },
              hint: "DELETE FROM menu WHERE category = '디저트' AND price < 3000;\nSELECT * FROM menu;"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] gym_members에서 가입 후 한 번도 출석하지 않은(visits=0) 회원을 삭제하고 남은 회원을 조회하세요.",
              setupSQL: "CREATE TABLE gym_members (id INTEGER PRIMARY KEY, name TEXT, visits INTEGER);\nINSERT INTO gym_members VALUES (1, '오런닝', 12);\nINSERT INTO gym_members VALUES (2, '박근력', 0);\nINSERT INTO gym_members VALUES (3, '최유산소', 5);\nINSERT INTO gym_members VALUES (4, '김스트레칭', 0);",
              initialCode: "\nSELECT * FROM gym_members;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "visits"
                ],
                rows: [
                  [
                    1,
                    "오런닝",
                    12
                  ],
                  [
                    3,
                    "최유산소",
                    5
                  ]
                ],
                ordered: false
              },
              hint: "DELETE FROM gym_members WHERE visits = 0;\nSELECT * FROM gym_members;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] DELETE FROM products WHERE id IN (SELECT id FROM products WHERE stock = 0); 의 의미는?",
              options: [
                "서브쿼리로 조회한 재고 0인 상품들을 삭제한다",
                "재고가 0이 아닌 상품을 삭제한다",
                "id가 0인 상품만 삭제한다",
                "문법 오류로 실행되지 않는다"
              ],
              answer: 0,
              hint: "서브쿼리가 먼저 재고 0인 상품의 id 목록을 구하고, 그 목록에 포함된 행을 DELETE합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 평균 가격보다 비싼 상품을 삭제하는 SQL을 완성하세요:",
              sentenceParts: [
                "DELETE FROM products WHERE price > (",
                "AVG(price) FROM products);"
              ],
              wordBank: [
                "SELECT",
                "DELETE",
                "UPDATE",
                "FROM"
              ],
              answer: [
                "SELECT"
              ],
              hint: "괄호 안에는 평균값을 구하는 SELECT 서브쿼리가 들어갑니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] inventory에서 재고 수량(quantity)이 전체 평균보다 적은 품목을 삭제하고 남은 품목을 조회하세요.",
              setupSQL: "CREATE TABLE inventory (id INTEGER PRIMARY KEY, item_name TEXT, quantity INTEGER);\nINSERT INTO inventory VALUES (1, '볼펜', 200);\nINSERT INTO inventory VALUES (2, 'A4용지', 50);\nINSERT INTO inventory VALUES (3, '클립', 300);\nINSERT INTO inventory VALUES (4, '스테이플러', 10);",
              initialCode: "\nSELECT * FROM inventory;",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "quantity"
                ],
                rows: [
                  [
                    1,
                    "볼펜",
                    200
                  ],
                  [
                    3,
                    "클립",
                    300
                  ]
                ],
                ordered: false
              },
              hint: "DELETE FROM inventory WHERE quantity < (SELECT AVG(quantity) FROM inventory);\nSELECT * FROM inventory;"
            }
          ]
        ]
      },
      {
        id: "node_sql_3_4",
        title: "쿼리 속의 쿼리 (서브쿼리)",
        description: "SELECT 문 안에 또 다른 SELECT를 중첩하여 복잡한 조건을 처리하는 서브쿼리를 배웁니다.",
        lessons: [
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 1] 서브쿼리(Subquery)란 무엇인가요?",
              options: [
                "SQL 문장 안에 포함된 또 다른 SELECT 문",
                "두 테이블을 합치는 JOIN의 다른 이름",
                "여러 SQL을 순서대로 실행하는 기능",
                "HAVING과 동일한 기능"
              ],
              answer: 0,
              hint: "쿼리(Query) 안에 있는 하위(Sub) 쿼리입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 1] 평균 급여보다 높은 직원을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) ",
                "employees);"
              ],
              wordBank: [
                "FROM",
                "WHERE",
                "SELECT",
                "GROUP BY"
              ],
              answer: [
                "FROM"
              ],
              hint: "서브쿼리도 하나의 SELECT문이므로 FROM 절이 필요합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 1] 전체 평균 급여보다 높은 직원을 서브쿼리로 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 4500000);\nINSERT INTO employees VALUES (3, '박치킨', '개발팀', 5500000);\nINSERT INTO employees VALUES (4, '최데이터', '마케팅팀', 4000000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    3,
                    "박치킨",
                    "개발팀",
                    5500000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 2] 서브쿼리는 주로 어디에 위치할 수 있나요?",
              options: [
                "WHERE 절, FROM 절, SELECT 절 모두 가능",
                "WHERE 절에만 가능",
                "FROM 절에만 가능",
                "ORDER BY 절에만 가능"
              ],
              answer: 0,
              hint: "서브쿼리는 괄호 ()로 감싸며 다양한 위치에 사용 가능합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 2] 가장 비싼 상품과 같은 카테고리의 상품을 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM products WHERE category = (SELECT category FROM products ORDER BY price DESC ",
                "1);"
              ],
              wordBank: [
                "LIMIT",
                "TOP",
                "OFFSET",
                "FIRST"
              ],
              answer: [
                "LIMIT"
              ],
              hint: "가장 비싼 한 개의 결과만 가져오려면 LIMIT 1을 사용합니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 2] products에서 가장 비싼 상품과 같은 카테고리의 상품을 모두 조회하세요.",
              setupSQL: "CREATE TABLE products (id INTEGER PRIMARY KEY, product_name TEXT, category TEXT, price INTEGER);\nINSERT INTO products VALUES (1, '게이밍 마우스', '주변기기', 80000);\nINSERT INTO products VALUES (2, '기계식 키보드', '주변기기', 150000);\nINSERT INTO products VALUES (3, '4K 모니터', '디스플레이', 700000);\nINSERT INTO products VALUES (4, '일반 모니터', '디스플레이', 250000);\nINSERT INTO products VALUES (5, '노트북', '컴퓨터', 1500000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "product_name",
                  "category",
                  "price"
                ],
                rows: [
                  [
                    5,
                    "노트북",
                    "컴퓨터",
                    1500000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT * FROM products WHERE category = (SELECT category FROM products ORDER BY price DESC LIMIT 1);"
            },
            {
              type: "quiz_sql",
              content: "[실습 3] loans 테이블에 기록된 book_id에 해당하는 books만 조회하세요 (현재 대출 중인 책).",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT);\nCREATE TABLE loans (id INTEGER PRIMARY KEY, book_id INTEGER);\nINSERT INTO books VALUES (1, '이펙티브 자바');\nINSERT INTO books VALUES (2, '리팩터링');\nINSERT INTO books VALUES (3, '클린 코드');\nINSERT INTO loans VALUES (1, 1);\nINSERT INTO loans VALUES (2, 3);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "title"
                ],
                rows: [
                  [
                    1,
                    "이펙티브 자바"
                  ],
                  [
                    3,
                    "클린 코드"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM books WHERE id IN (SELECT book_id FROM loans);"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 3] IN 연산자와 서브쿼리를 함께 사용하면 어떤 효과가 있나요?",
              options: [
                "서브쿼리 결과 목록에 값이 포함되는지 확인한다",
                "서브쿼리 결과의 개수를 센다",
                "서브쿼리 결과를 정렬한다",
                "서브쿼리를 반복 실행한다"
              ],
              answer: 0,
              hint: "WHERE 컬럼 IN (서브쿼리)는 서브쿼리가 반환한 값들 중 하나와 일치하는지 확인합니다."
            },
            {
              type: "quiz_multiple_choice",
              content: "[이론 4] NOT IN (서브쿼리)는 어떤 경우에 사용하나요?",
              options: [
                "서브쿼리 결과에 포함되지 않는 행을 찾을 때",
                "서브쿼리 결과와 정확히 같은 행을 찾을 때",
                "서브쿼리의 평균을 구할 때",
                "서브쿼리를 정렬할 때"
              ],
              answer: 0,
              hint: "NOT IN은 IN의 반대로, 서브쿼리 목록에 없는 값을 가진 행을 찾습니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 3] 대출 중인(loans 테이블에 기록된) 도서를 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM books WHERE id ",
                "(SELECT book_id FROM loans);"
              ],
              wordBank: [
                "IN",
                "EXISTS",
                "FROM",
                "ANY"
              ],
              answer: [
                "IN"
              ],
              hint: "서브쿼리 목록에 포함되는지 확인할 때는 IN을 사용합니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 4] 대출 기록이 없는 도서를 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM books WHERE id NOT ",
                "(SELECT book_id FROM loans);"
              ],
              wordBank: [
                "IN",
                "EXISTS",
                "FROM",
                "OUT"
              ],
              answer: [
                "IN"
              ],
              hint: "NOT IN (서브쿼리)는 서브쿼리 목록에 없는 값을 찾습니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 4] students 테이블에서 scores 테이블에 점수가 등록되지 않은 학생을 조회하세요.",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE scores (id INTEGER PRIMARY KEY, student_id INTEGER, score INTEGER);\nINSERT INTO students VALUES (1, '한여름');\nINSERT INTO students VALUES (2, '이겨울');\nINSERT INTO students VALUES (3, '정민지');\nINSERT INTO scores VALUES (1, 1, 88);\nINSERT INTO scores VALUES (2, 3, 92);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name"
                ],
                rows: [
                  [
                    2,
                    "이겨울"
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM students WHERE id NOT IN (SELECT student_id FROM scores);"
            },
            {
              type: "quiz_sql",
              content: "[실습 5] inventory에서 category별 평균 수량을 구한 결과(서브쿼리)에서, 평균 수량이 100 이상인 category만 조회하세요.",
              setupSQL: "CREATE TABLE inventory (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, quantity INTEGER);\nINSERT INTO inventory VALUES (1, '볼펜', '문구', 200);\nINSERT INTO inventory VALUES (2, '지우개', '문구', 150);\nINSERT INTO inventory VALUES (3, '키보드', '전자기기', 30);\nINSERT INTO inventory VALUES (4, '마우스', '전자기기', 45);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "category",
                  "avg_qty"
                ],
                rows: [
                  [
                    "문구",
                    175
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM (SELECT category, AVG(quantity) AS avg_qty FROM inventory GROUP BY category) WHERE avg_qty >= 100;"
            }
          ],
          [
            {
              type: "quiz_multiple_choice",
              content: "[이론 5] 서브쿼리가 바깥 쿼리의 컬럼을 참조하여 바깥 쿼리의 행마다 다시 계산되는 것을 무엇이라 부르나요?",
              options: [
                "상관 서브쿼리 (Correlated Subquery)",
                "일반 서브쿼리",
                "조인 서브쿼리",
                "집계 서브쿼리"
              ],
              answer: 0,
              hint: "바깥 쿼리의 값(e1.department 등)을 참조하는 서브쿼리는 행마다 새로 계산되는 상관 서브쿼리입니다."
            },
            {
              type: "quiz_word_bank",
              content: "[개념 확인 5] 각 직원이 자기 부서 평균 급여보다 높은 급여를 받는지 상관 서브쿼리로 조회하는 SQL을 완성하세요:",
              sentenceParts: [
                "SELECT * FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = ",
                "department);"
              ],
              wordBank: [
                "e1.",
                "e2.",
                "employees.",
                "SELECT"
              ],
              answer: [
                "e1."
              ],
              hint: "안쪽 서브쿼리에서 바깥 테이블 e1의 department를 참조해야 상관 서브쿼리가 됩니다."
            },
            {
              type: "quiz_sql",
              content: "[실습 6] 각 직원이 자기 부서의 평균 급여보다 높은 급여를 받는 경우만 상관 서브쿼리로 조회하세요.",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '개발팀', 4000000);\nINSERT INTO employees VALUES (3, '박치킨', '디자인팀', 4500000);\nINSERT INTO employees VALUES (4, '최데이터', '디자인팀', 4700000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5000000
                  ],
                  [
                    4,
                    "최데이터",
                    "디자인팀",
                    4700000
                  ]
                ],
                ordered: false
              },
              hint: "SELECT * FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department);"
            }
          ]
        ]
      },
      {
        id: "node_sql_3_5",
        title: "🏆 SQL 마스터 최종 보스전",
        description: "SELECT, 집계, JOIN, CUD, 서브쿼리를 모두 활용하는 최종 종합 테스트입니다.",
        lessons: [
          [
            {
              type: "quiz_sql",
              content: "[최종 1] books와 loans를 JOIN하여 대출 기록이 있는 책의 제목과 대출 횟수를 내림차순으로 조회하세요.",
              setupSQL: "CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT);\nCREATE TABLE loans (id INTEGER PRIMARY KEY, book_id INTEGER);\nINSERT INTO books VALUES (1, '이펙티브 자바');\nINSERT INTO books VALUES (2, '리팩터링');\nINSERT INTO books VALUES (3, '클린 코드');\nINSERT INTO loans VALUES (1, 1);\nINSERT INTO loans VALUES (2, 1);\nINSERT INTO loans VALUES (3, 2);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "title",
                  "loan_count"
                ],
                rows: [
                  [
                    "이펙티브 자바",
                    2
                  ],
                  [
                    "리팩터링",
                    1
                  ]
                ],
                ordered: true
              },
              hint: "SELECT books.title, COUNT(loans.id) AS loan_count FROM books INNER JOIN loans ON books.id = loans.book_id GROUP BY books.title ORDER BY loan_count DESC;"
            },
            {
              type: "quiz_sql",
              content: "[최종 2] orders와 customers를 JOIN하여 총 주문금액이 100,000 이상인 고객 이름과 총액을 내림차순으로 조회하세요.",
              setupSQL: "CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, amount INTEGER);\nINSERT INTO customers VALUES (1, '김코딩');\nINSERT INTO customers VALUES (2, '이에그');\nINSERT INTO customers VALUES (3, '박치킨');\nINSERT INTO orders VALUES (1, 1, 80000);\nINSERT INTO orders VALUES (2, 1, 150000);\nINSERT INTO orders VALUES (3, 2, 300000);\nINSERT INTO orders VALUES (4, 3, 50000);\nINSERT INTO orders VALUES (5, 2, 20000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "total"
                ],
                rows: [
                  [
                    "이에그",
                    320000
                  ],
                  [
                    "김코딩",
                    230000
                  ]
                ],
                ordered: true
              },
              hint: "SELECT customers.name, SUM(orders.amount) AS total FROM orders INNER JOIN customers ON orders.customer_id = customers.id GROUP BY customers.name HAVING total >= 100000 ORDER BY total DESC;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[최종 3] inventory에서 category별 총 재고 수량을 구하고, 총 수량이 100 이상인 category만 총 수량 내림차순으로 조회하세요.",
              setupSQL: "CREATE TABLE inventory (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, quantity INTEGER);\nINSERT INTO inventory VALUES (1, '볼펜', '문구', 200);\nINSERT INTO inventory VALUES (2, '지우개', '문구', 50);\nINSERT INTO inventory VALUES (3, '키보드', '전자기기', 30);\nINSERT INTO inventory VALUES (4, '마우스', '전자기기', 45);\nINSERT INTO inventory VALUES (5, '노트북', '전자기기', 10);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "category",
                  "total_qty"
                ],
                rows: [
                  [
                    "문구",
                    250
                  ]
                ],
                ordered: true
              },
              hint: "SELECT category, SUM(quantity) AS total_qty FROM inventory GROUP BY category HAVING total_qty >= 100 ORDER BY total_qty DESC;"
            },
            {
              type: "quiz_sql",
              content: "[최종 4] students와 exams를 JOIN하여 학생별 평균 점수를 구하고, 전체 평균 점수보다 낮은 학생의 이름과 평균 점수를 조회하세요.",
              setupSQL: "CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE exams (id INTEGER PRIMARY KEY, student_id INTEGER, score INTEGER);\nINSERT INTO students VALUES (1, '한여름');\nINSERT INTO students VALUES (2, '이겨울');\nINSERT INTO students VALUES (3, '정민지');\nINSERT INTO exams VALUES (1, 1, 90);\nINSERT INTO exams VALUES (2, 1, 80);\nINSERT INTO exams VALUES (3, 2, 60);\nINSERT INTO exams VALUES (4, 2, 50);\nINSERT INTO exams VALUES (5, 3, 100);\nINSERT INTO exams VALUES (6, 3, 95);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "avg_score"
                ],
                rows: [
                  [
                    "이겨울",
                    55
                  ]
                ],
                ordered: false
              },
              hint: "SELECT students.name, AVG(exams.score) AS avg_score FROM students INNER JOIN exams ON students.id = exams.student_id GROUP BY students.name HAVING avg_score < (SELECT AVG(score) FROM exams);"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[최종 5] 순서대로 실행하세요:\n1. menu에 '망고빙수', '빙수', 8000 INSERT\n2. category가 '빙수'인 메뉴 전체 가격을 10% 인상 UPDATE\n3. 전체 메뉴를 가격 내림차순으로 SELECT",
              setupSQL: "CREATE TABLE menu (id INTEGER PRIMARY KEY, item_name TEXT, category TEXT, price INTEGER);\nINSERT INTO menu VALUES (1, '팥빙수', '빙수', 7000);\nINSERT INTO menu VALUES (2, '아메리카노', '커피', 4000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "id",
                  "item_name",
                  "category",
                  "price"
                ],
                rows: [
                  [
                    3,
                    "망고빙수",
                    "빙수",
                    8800
                  ],
                  [
                    1,
                    "팥빙수",
                    "빙수",
                    7700.000000000001
                  ],
                  [
                    2,
                    "아메리카노",
                    "커피",
                    4000
                  ]
                ],
                ordered: true
              },
              hint: "INSERT INTO menu (item_name, category, price) VALUES ('망고빙수', '빙수', 8000);\nUPDATE menu SET price = price * 1.1 WHERE category = '빙수';\nSELECT * FROM menu ORDER BY price DESC;"
            },
            {
              type: "quiz_sql",
              content: "[최종 6] gym_members 중 attendance 기록이 하나도 없는 회원을 삭제한 뒤, 남은 회원의 이름과 출석 횟수를 JOIN으로 조회하세요.",
              setupSQL: "CREATE TABLE gym_members (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE attendance (id INTEGER PRIMARY KEY, member_id INTEGER);\nINSERT INTO gym_members VALUES (1, '오런닝');\nINSERT INTO gym_members VALUES (2, '박근력');\nINSERT INTO gym_members VALUES (3, '최유산소');\nINSERT INTO attendance VALUES (1, 1);\nINSERT INTO attendance VALUES (2, 1);\nINSERT INTO attendance VALUES (3, 3);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "visit_count"
                ],
                rows: [
                  [
                    "오런닝",
                    2
                  ],
                  [
                    "최유산소",
                    1
                  ]
                ],
                ordered: false
              },
              hint: "DELETE FROM gym_members WHERE id NOT IN (SELECT member_id FROM attendance);\nSELECT gym_members.name, COUNT(attendance.id) AS visit_count FROM gym_members INNER JOIN attendance ON gym_members.id = attendance.member_id GROUP BY gym_members.name;"
            }
          ],
          [
            {
              type: "quiz_sql",
              content: "[최종 7] 순서대로 실행하세요:\n1. employees에 '정신입', '개발팀', 5200000 INSERT\n2. ID=1 급여를 5300000으로 UPDATE\n3. 평균 이하 급여 직원 DELETE\n4. 남은 전체 직원 SELECT",
              setupSQL: "CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES (1, '김코딩', '개발팀', 5000000);\nINSERT INTO employees VALUES (2, '이에그', '디자인팀', 3500000);\nINSERT INTO employees VALUES (3, '박치킨', '마케팅팀', 4000000);",
              initialCode: "SELECT * FROM employees;",
              expectedResult: {
                columns: [
                  "id",
                  "name",
                  "department",
                  "salary"
                ],
                rows: [
                  [
                    1,
                    "김코딩",
                    "개발팀",
                    5300000
                  ],
                  [
                    4,
                    "정신입",
                    "개발팀",
                    5200000
                  ]
                ],
                ordered: false
              },
              hint: "INSERT INTO employees (name,department,salary) VALUES ('정신입','개발팀',5200000);\nUPDATE employees SET salary=5300000 WHERE id=1;\nDELETE FROM employees WHERE salary < (SELECT AVG(salary) FROM employees);\nSELECT * FROM employees;"
            },
            {
              type: "quiz_sql",
              content: "[최종 8] 순서대로 실행하세요:\n1. authors에 id=3, name='김작가' INSERT\n2. book_sales에 (id=4, author_id=3, revenue=300000) INSERT\n3. author_id=1(박작가)의 모든 판매 revenue를 10% 인상 UPDATE\n4. 저자별 총 revenue가 200,000 미만인 저자를 authors에서 DELETE\n5. 남은 저자 이름과 총 revenue를 내림차순으로 SELECT",
              setupSQL: "CREATE TABLE authors (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE book_sales (id INTEGER PRIMARY KEY, author_id INTEGER, revenue INTEGER);\nINSERT INTO authors VALUES (1, '박작가');\nINSERT INTO authors VALUES (2, '이작가');\nINSERT INTO book_sales VALUES (1, 1, 150000);\nINSERT INTO book_sales VALUES (2, 1, 100000);\nINSERT INTO book_sales VALUES (3, 2, 80000);",
              initialCode: "",
              expectedResult: {
                columns: [
                  "name",
                  "total_revenue"
                ],
                rows: [
                  [
                    "김작가",
                    300000
                  ],
                  [
                    "박작가",
                    275000
                  ]
                ],
                ordered: true
              },
              hint: "INSERT INTO authors (id, name) VALUES (3, '김작가');\nINSERT INTO book_sales (id, author_id, revenue) VALUES (4, 3, 300000);\nUPDATE book_sales SET revenue = revenue * 1.1 WHERE author_id = 1;\nDELETE FROM authors WHERE id IN (SELECT author_id FROM book_sales GROUP BY author_id HAVING SUM(revenue) < 200000);\nSELECT authors.name, SUM(book_sales.revenue) AS total_revenue FROM authors INNER JOIN book_sales ON authors.id = book_sales.author_id GROUP BY authors.name ORDER BY total_revenue DESC;"
            }
          ]
        ]
      }
    ]
  }
];
