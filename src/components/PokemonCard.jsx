import React, { useState, useRef, useCallback } from 'react';
import { CheckCircle2, Lock, Play } from 'lucide-react';
import { playHoverSound } from '../lib/sound';
import MatrixRain from './MatrixRain';
import { getEmojiForTitle } from '../lib/emojiMap';



function getCardContent(title) {
  const contentMap = {
    // UNIT 1
    '파이썬 첫 인사 (print)': { name: "출력 (print)", desc: "화면에 원하는 데이터나 문자를 출력하는 파이썬의 기본 함수를 배웁니다." },
    '데이터의 상자 (변수)': { name: "변수 (Variable)", desc: "데이터를 담아두고 언제든 꺼내 쓸 수 있는 가상의 상자를 만드는 법을 배웁니다." },
    '숫자 다루기 (연산)': { name: "산술 연산자", desc: "파이썬을 계산기처럼 사용하여 더하기, 빼기, 곱하기, 나누기를 수행합니다." },
    '문자열의 세계': { name: "문자열 (String)", desc: "텍스트 데이터를 다루고 문자를 묶거나 형태를 변환하는 방법을 알아봅니다." },
    '글자 뽑아내기 (인덱싱)': { name: "인덱싱/슬라이싱", desc: "문자열 안에서 위치를 찾아 원하는 글자만 쏙쏙 뽑아내는 기술을 마스터합니다." },
    
    // UNIT 2
    '참과 거짓 (Boolean)': { name: "불리언 (Boolean)", desc: "컴퓨터가 생각하는 방식인 참(True)과 거짓(False) 논리 데이터 타입을 배웁니다." },
    '만약에... (if문)': { name: "조건문 (if)", desc: "만약 특정 조건이 맞다면 코드를 실행하게 만드는 제어문의 기초를 다룹니다." },
    '그렇지 않으면 (else)': { name: "예외 분기 (else)", desc: "앞선 조건이 모두 틀렸을 때 실행될 기본 동작을 설정하는 방법을 알아봅니다." },
    '여러 개의 조건 (elif)': { name: "다중 조건 (elif)", desc: "여러 개의 조건을 순차적으로 검사하여 더욱 복잡한 논리 흐름을 구성합니다." },
    '조건문 마스터 보스전': { name: "조건문 마스터", desc: "if, elif, else를 혼합한 복잡한 논리 문제를 풀어 실력을 증명하세요." },
    
    // UNIT 3
    '조건부 반복 (while)': { name: "조건부 루프 (while)", desc: "특정 조건이 참인 동안 코드를 무한히 반복 실행하는 방법을 배웁니다." },
    '탈출구와 건너뛰기 (break / continue)': { name: "제어 흐름", desc: "반복을 강제로 종료하거나(break) 이번 차례만 건너뛰는(continue) 법을 배웁니다." },
    '정해진 만큼 반복 (for)': { name: "순회 루프 (for)", desc: "정해진 횟수나 데이터의 길이만큼 코드를 안전하게 반복하는 for문을 배웁니다." },
    '숫자 공장 (range)': { name: "연속된 숫자 (range)", desc: "for문과 찰떡궁합인 연속된 숫자를 자동으로 만들어내는 range 함수를 다룹니다." },
    '반복문 마스터 보스전': { name: "반복문 마스터", desc: "while과 for, 그리고 흐름 제어를 활용해 반복 패턴 문제를 해결하세요." },

    // UNIT 4
    '리스트(List) 기초': { name: "리스트 기초", desc: "여러 개의 데이터를 하나의 변수에 순서대로 묶어서 관리하는 리스트를 배웁니다." },
    '리스트 안의 보물 찾기': { name: "리스트 인덱싱", desc: "리스트 안의 수많은 데이터 중 내가 원하는 위치의 데이터를 정확히 찾아냅니다." },
    '리스트 메서드 (추가와 삭제)': { name: "리스트 조작", desc: "append, pop 등을 이용해 가방에 물건을 넣고 빼듯 리스트의 데이터를 수정합니다." },
    '리스트와 반복문의 콜라보': { name: "리스트 순회", desc: "for문을 사용해 리스트 안의 모든 데이터를 한 번에 효율적으로 처리합니다." },
    '변경 불가능한 가방 (Tuple)': { name: "튜플 (Tuple)", desc: "리스트와 비슷하지만 한 번 만들어지면 절대 바꿀 수 없는 안전한 튜플을 배웁니다." },

    // UNIT 5
    '비기너 종합 테스트 1': { name: "종합 테스트 1", desc: "변수, 자료형, 출력 등 기초적인 개념들을 다시 한번 점검하는 테스트입니다." },
    '비기너 종합 테스트 2': { name: "종합 테스트 2", desc: "조건문과 논리 연산자를 활용한 심화 문제를 해결해야 합니다." },
    '비기너 종합 테스트 3': { name: "종합 테스트 3", desc: "복잡한 반복문과 리스트를 결합하여 데이터를 처리하는 능력을 평가합니다." },
    '비기너 종합 테스트 4': { name: "종합 테스트 4", desc: "지금까지 배운 모든 파이썬 문법을 총동원하여 마지막 관문을 통과하세요." },
    '🏆 티어 1 클리어 🏆': { name: "수료증 발급", desc: "축하합니다! 파이썬 비기너 과정을 완벽하게 마스터했습니다." },

    // UNIT 6
    '이름표가 달린 가방 (Dict)': { name: "딕셔너리 (Dict)", desc: "키(Key)와 값(Value)의 쌍으로 데이터를 효율적으로 저장하고 찾는 법을 배웁니다." },
    '딕셔너리에서 값 꺼내기': { name: "값 꺼내기", desc: "에러 없이 안전하게 딕셔너리에서 원하는 데이터를 추출하는 방법을 알아봅니다." },
    '딕셔너리 추가/수정/삭제': { name: "딕셔너리 조작", desc: "새로운 데이터를 추가하고, 기존 값을 수정하거나 삭제하는 방법을 배웁니다." },
    '딕셔너리의 열쇠 꾸러미': { name: "키와 값 다루기", desc: "keys, values, items 메서드를 활용해 딕셔너리 데이터를 반복문과 함께 다룹니다." },
    '중복을 허락하지 않는 Set': { name: "집합 (Set)", desc: "중복을 제거하고 교집합, 합집합 등 수학적 집합 연산을 수행하는 Set을 배웁니다." },

    // UNIT 7
    '나만의 마법 주문 만들기 (def)': { name: "함수 선언 (def)", desc: "반복되는 코드를 하나로 묶어 필요할 때마다 호출해서 쓰는 함수를 만듭니다." },
    '재료 넣기 (매개변수)': { name: "매개변수 (Parameter)", desc: "함수가 작동할 때 필요한 외부 데이터(재료)를 넘겨주는 방법을 배웁니다." },
    '결과물 돌려주기 (return)': { name: "반환값 (Return)", desc: "함수의 실행 결과를 바깥으로 돌려주어 다른 코드에서 활용할 수 있게 합니다." },
    'return의 숨겨진 비밀': { name: "Return 심화", desc: "return을 만났을 때 함수가 즉시 종료되는 특징과 다중 반환 기법을 알아봅니다." },
    '내 땅과 남의 땅 (지역/전역 변수)': { name: "변수의 유효 범위", desc: "함수 안에서 만든 지역 변수와 바깥의 전역 변수의 차이를 확실하게 이해합니다." },

    // UNIT 8
    '기본값 (Default Args)': { name: "기본 매개변수", desc: "매개변수를 전달하지 않았을 때 자동으로 사용될 기본값을 설정하는 법을 배웁니다." },
    '무제한 재료 받기 (*args)': { name: "가변 매개변수 (*args)", desc: "개수가 정해지지 않은 여러 개의 데이터를 한 번에 묶어서 받는 방법을 다룹니다." },
    '키워드 무제한 받기 (**kwargs)': { name: "키워드 매개변수", desc: "딕셔너리 형태로 여러 개의 이름표가 달린 데이터를 한 번에 받는 방법을 다룹니다." },
    '이름 없는 마법사 (Lambda)': { name: "람다 함수 (Lambda)", desc: "def 없이 한 줄로 간단하게 만들고 쓰고 버리는 일회용 함수를 배웁니다." },
    '지도 그리기 (map)': { name: "map과 filter", desc: "리스트의 모든 데이터에 한 번에 함수를 적용하거나 원하는 조건만 걸러냅니다." },

    // UNIT 9
    '치명적 오류와 방패 (try-except)': { name: "예외 처리 기초", desc: "프로그램이 멈추는 에러 상황을 미리 방지하고 부드럽게 넘기는 방법을 배웁니다." },
    '특정 에러만 골라 잡기': { name: "다중 예외 처리", desc: "에러의 종류(ValueError, TypeError 등)에 따라 다르게 대처하는 방법을 알아봅니다." },
    '에러 메시지 훔쳐보기 (as e)': { name: "에러 메시지 분석", desc: "파이썬이 알려주는 구체적인 에러 원인을 변수에 담아 분석하는 방법을 다룹니다." },
    '무조건 실행되는 (finally)': { name: "finally 구문", desc: "에러가 발생하든 안 하든 마지막에 반드시 실행되어야 하는 코드를 작성합니다." },
    '에러 강제 소환 (raise)': { name: "에러 발생 (raise)", desc: "특정 상황에서 의도적으로 에러를 발생시켜 프로그램의 규칙을 강제하는 법을 배웁니다." },

    // UNIT 10
    '붕어빵 틀과 붕어빵 (클래스와 객체)': { name: "클래스와 객체", desc: "데이터와 함수를 하나로 묶어 찍어내는 붕어빵 틀(클래스)의 개념을 배웁니다." },
    '나만의 클래스 만들기': { name: "클래스 생성", desc: "파이썬에서 나만의 새로운 데이터 타입을 직접 설계하고 객체를 만들어봅니다." },
    '클래스 안의 변수 (속성)': { name: "인스턴스 속성", desc: "각각의 객체가 가지는 고유한 상태나 데이터를 저장하는 속성을 배웁니다." },
    '클래스 안의 함수 (메서드)': { name: "메서드 (Method)", desc: "클래스 안에서 객체들이 수행할 수 있는 특별한 행동(함수)을 정의합니다." },
    '붕어빵의 첫 탄생 (초기화 __init__)': { name: "초기화 (__init__)", desc: "객체가 처음 생성될 때 자동으로 실행되어 초기 상태를 세팅하는 법을 배웁니다." },

    // UNIT 11
    '유산 물려받기 (상속)': { name: "클래스 상속", desc: "기존 클래스의 모든 기능을 물려받아 새로운 클래스를 쉽게 만드는 법을 배웁니다." },
    '기능 덮어쓰기 (오버라이딩)': { name: "오버라이딩", desc: "부모에게 물려받은 기능을 내 입맛에 맞게 재정의(덮어쓰기)하는 법을 다룹니다." },
    '부모님 소환하기 (super)': { name: "super()", desc: "오버라이딩 중에도 부모 클래스의 원래 기능을 호출하고 싶을 때 사용하는 법을 배웁니다." },
    '마법의 메서드 (Magic Methods)': { name: "매직 메서드", desc: "__str__, __len__ 등 특별한 동작을 정의하는 파이썬의 숨겨진 메서드를 배웁니다." },
    '클래스 변수와 인스턴스 변수': { name: "클래스 변수", desc: "모든 객체가 공유하는 변수와 각자 고유하게 가지는 변수의 차이를 이해합니다." },

    // UNIT 12
    '파일 읽기 (open)': { name: "파일 열기/읽기", desc: "파이썬으로 외부에 있는 텍스트 파일을 열고 그 안의 데이터를 읽어오는 법을 배웁니다." },
    '안전하게 열고 닫기 (with문)': { name: "with 구문", desc: "파일 처리가 끝나면 파이썬이 알아서 안전하게 파일을 닫아주는 문법을 배웁니다." },
    '파일 쓰기와 추가하기': { name: "파일 쓰기 (w, a)", desc: "새로운 파일에 글을 쓰거나(w) 기존 파일의 끝에 내용을 추가하는(a) 법을 다룹니다." },
    '한 줄씩 읽어오기': { name: "readlines()", desc: "용량이 큰 파일도 안전하게 한 줄씩 읽어서 반복문으로 처리하는 기술을 마스터합니다." },
    'CSV 다루기 꿀팁': { name: "CSV 모듈", desc: "엑셀과 같은 콤마로 구분된 표 형식의 데이터(CSV)를 쉽게 읽고 쓰는 방법을 배웁니다." },

    // UNIT 13
    '남의 코드 빌려오기 (import)': { name: "모듈 가져오기", desc: "파이썬이 기본으로 제공하거나 남이 만든 도구 상자(모듈)를 가져오는 법을 배웁니다." },
    '원하는 것만 쏙 빼오기 (from)': { name: "선택적 모듈 (from)", desc: "거대한 도구 상자 안에서 딱 필요한 도구 하나만 쏙 골라오는 최적화 방법을 다룹니다." },
    '난수 발생기 (random)': { name: "random 모듈", desc: "로또 번호 추첨이나 게임처럼 무작위 숫자를 뽑아내는 필수 모듈을 사용해 봅니다." },
    '시간을 다루는 마법사 (datetime)': { name: "datetime 모듈", desc: "현재 날짜와 시간을 구하거나 두 시간 사이의 차이를 계산하는 방법을 배웁니다." },
    '컴퓨터 속 탐험 (os 모듈)': { name: "os / sys 모듈", desc: "파이썬으로 폴더를 만들고 파일을 복사하는 등 운영체제를 제어하는 법을 다룹니다." },

    // UNIT 14
    '정규표현식의 세계 (re)': { name: "정규표현식 (re)", desc: "복잡한 텍스트 속에서 내가 원하는 특정 패턴(예: 전화번호)만 찾아내는 기술입니다." },
    '정규표현식 심화': { name: "re 모듈 심화", desc: "문자열을 패턴으로 나누거나 다른 글자로 치환하는 정규표현식의 고급 기술을 배웁니다." },
    '세상과 소통하기 (requests)': { name: "requests 모듈", desc: "웹 브라우저 없이 코드로 인터넷 페이지의 정보를 요청하고 가져오는 법을 배웁니다." },
    '데이터 교환의 표준 (JSON)': { name: "JSON 모듈", desc: "서버와 데이터를 주고받을 때 전 세계가 공통으로 사용하는 JSON 형식을 다룹니다." },
    'HTTP 상태 코드': { name: "HTTP 통신 기초", desc: "404 Not Found, 200 OK 등 웹이 파이썬에게 던지는 응답 코드의 의미를 완벽히 이해합니다." },

    // UNIT 15
    '데이터 수집가 (가짜 API 연동)': { name: "API 연동 기초", desc: "외부 서비스(API)에서 제공하는 실시간 데이터를 파이썬으로 수집하는 방법을 배웁니다." },
    '데이터 정제소': { name: "데이터 정제", desc: "수집한 날것의 데이터를 분석하기 좋은 형태로 가공하고 불순물을 제거하는 실무 스킬입니다." },
    '딕셔너리 안전 설계': { name: "안전한 데이터 설계", desc: "외부에서 받아온 알 수 없는 데이터를 다룰 때 에러 없이 방어적으로 코딩하는 기술입니다." },
    '종합 실무 미션': { name: "최종 실무 미션", desc: "지금까지 배운 클래스, 예외처리, 파일 I/O, API 통신을 모두 결합한 거대한 프로그램을 만듭니다." },
    '🌟 영광의 파이썬 마스터 🌟': { name: "마스터 수료증", desc: "파이썬의 핵심부터 실무 기술까지 완벽히 정복했습니다. 마스터 달성을 축하합니다!" },

    // UNIT 16
    '현대적인 문자열 조합 (f-string)': { name: "f-string 포매팅", desc: "직관적이고 편리한 최신 문자열 삽입 문법인 f-string의 강력함을 마스터합니다." },
    '빠르고 간결한 리스트 컴프리헨션': { name: "리스트 컴프리헨션", desc: "긴 반복문 코드를 단 한 줄로 압축하는 파이썬 특유의 우아한 문법을 배웁니다." },
    '반복문의 짝꿍 함수 (enumerate & zip)': { name: "enumerate / zip", desc: "순서(인덱스)와 값을 동시에 뽑아내고, 여러 리스트를 지퍼처럼 엮어 다루는 법을 배웁니다." },
    "파이썬 스크립트의 진입점 (if __name__ == '__main__')": { name: "메인 진입점 (main)", desc: "파이썬 모듈이 직접 실행될 때와 불려갈 때를 구분하는 필수 관용구를 배웁니다." },
    '이름 없는 함수와 친구들 (lambda, map, filter)': { name: "람다 / map / filter", desc: "이름 없는 일회용 함수(lambda)와 이를 활용해 데이터를 일괄 가공하는 기술을 익힙니다." },

    // UNIT 17
    '타입 힌팅 (Type Hinting)': { name: "타입 힌팅", desc: "변수나 함수의 반환값 타입을 명시하여 버그를 줄이고 가독성을 높이는 최신 파이썬 문법입니다." },
    '가변 인자의 마법 (*args & **kwargs)': { name: "*args / **kwargs", desc: "인자의 개수를 미리 알 수 없을 때 유연하게 대응하는 가변 인자의 원리를 익힙니다." },
    '함수를 감싸는 마법사 (데코레이터)': { name: "데코레이터 (@)", desc: "기존 코드를 건드리지 않고 함수의 앞뒤에 부가 기능을 덧붙이는 고급 문법을 마스터합니다." },
    '메모리 다이어트 (제너레이터와 yield)': { name: "제너레이터 (yield)", desc: "데이터를 한 번에 올리지 않고 필요할 때마다 생성하여 메모리를 극적으로 절약하는 법을 배웁니다." },
    'VSCode와 실무 환경 세팅 (pip & venv)': { name: "pip / venv", desc: "웹을 벗어나 내 컴퓨터(VSCode)에서 파이썬 가상환경을 구성하고 패키지를 관리하는 실무를 배웁니다." }
  };

  const cleanTitle = title.split('\n').pop().trim();
  return contentMap[cleanTitle] || { name: cleanTitle, desc: "이 레슨에서 해당 주제의 핵심 개념을 학습하게 됩니다." };
}

export default function PokemonCard({ 
  node, 
  index,
  globalIndex,
  totalNodes = 5,
  isLocked, 
  isCompleted, 
  isActive, 
  isFocus,
  isDark, 
  isPerfect,
  xpReward, 
  progress = 0,
  totalLessons = 1,
  onStart,
  onHover,
  onLeave,
  tooltip,
  courseId
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerEnter = (e) => {
    if (e.pointerType === 'touch') return;
    playHoverSound();
    setIsHovered(true);
    if (onHover) onHover();
  };
  
  const handlePointerLeave = (e) => {
    if (e.pointerType === 'touch') return;
    setIsHovered(false);
    if (onLeave) onLeave();
  };

  const monsterEmoji = getEmojiForTitle(node.title, courseId, node.id, index);
  const content = getCardContent(node.title);
  const nodeDesc = node.description || (content ? content.desc : "이 레슨에서 해당 주제의 핵심 개념을 학습하게 됩니다.");
  
  const pastelTypes = [
    { name: 'Water', bg: 'bg-[#93c5fd]', from: 'from-[#bfdbfe]', to: 'to-[#93c5fd]', border: 'border-[#dbeafe]', shadow: 'shadow-blue-300/50' },
    { name: 'Fire', bg: 'bg-[#fca5a5]', from: 'from-[#fecaca]', to: 'to-[#fca5a5]', border: 'border-[#fee2e2]', shadow: 'shadow-red-300/50' },
    { name: 'Grass', bg: 'bg-[#86efac]', from: 'from-[#bbf7d0]', to: 'to-[#86efac]', border: 'border-[#dcfce7]', shadow: 'shadow-green-300/50' },
    { name: 'Psychic', bg: 'bg-[#d8b4fe]', from: 'from-[#e9d5ff]', to: 'to-[#d8b4fe]', border: 'border-[#f3e8ff]', shadow: 'shadow-purple-300/50' }
  ];
  const legendaryGold = { name: 'Gold', bg: 'bg-[#FFD700]', from: 'from-[#FFF8E1]', to: 'to-[#FFC107]', border: 'border-[#FFE082]', shadow: 'shadow-yellow-500/80' };

  const isBoss = index === totalNodes - 1;
  const type = (isPerfect || isBoss) ? legendaryGold : pastelTypes[index % pastelTypes.length];

  // U-Shape Cover Flow Math
  const centerIndex = Math.floor((totalNodes - 1) / 2);
  const offset = index - centerIndex; // e.g. -2, -1, 0, 1, 2
  
  const isSkipTarget = !!tooltip;
  const isPopOut = isHovered || isFocus || isSkipTarget;
  const translateY = isPopOut ? -40 : Math.abs(offset) * -15; // Pop out goes up
  const rotateZ = isPopOut ? 0 : offset * 3; // Pop out straightens
  const scale = isPopOut ? 1.1 : 1.0;
  const zIndex = isHovered ? 50 : (isFocus || isSkipTarget ? 40 : 10 - Math.abs(offset));

  const widthClass = 'w-[220px] md:w-56';
  const heightClass = 'h-[325px] md:h-[340px]';

  const cardStyle = isLocked ? 'from-gray-700 to-gray-900 border-gray-600 shadow-none' : `${type.from} ${type.to} ${type.border} ${type.shadow}`;
  const textStyle = 'text-white drop-shadow-md';

  return (
    <div 
      className={`relative flex-none shrink-0 flex flex-col items-center snap-center ${widthClass} ${heightClass} transition-all duration-500 ease-out mx-[-15px] md:mx-[-20px] ${isFocus ? 'card-focus' : ''}`}
      style={{ zIndex }}
    >
      {tooltip && (
        <div className="absolute -top-16 md:-top-20 z-[60] cursor-pointer hover:scale-105 transition-transform">
          {tooltip}
        </div>
      )}

      <div
        className={`relative group flex-none shrink-0 transition-all duration-500 ease-out w-full h-full`}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={() => {
          if (!isLocked && onStart) onStart();
        }}
        style={{
          transform: `translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
        }}
      >
        <div
          className={`w-full h-full rounded-2xl cursor-pointer
            ${isPopOut ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'shadow-xl'}
            transition-all duration-500 transform-gpu
          `}
        >
          {/* Animated Spinning Border for Skip Target */}
          {isSkipTarget && (
            <div className="absolute -inset-[3px] rounded-[18px] md:-inset-[4px] md:rounded-[20px] overflow-hidden z-[-1]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#ff4b8d_360deg)] animate-[spin_3s_linear_infinite]"></div>
            </div>
          )}
          
          {/* Card Outer Border & Background */}
          <div className={`absolute inset-0 rounded-2xl border-[6px] md:border-[8px] bg-gradient-to-br ${cardStyle} overflow-hidden flex flex-col p-2 md:p-3`}>
            
            {/* TCG Header */}
            <div className="flex justify-between items-start mb-2 px-1 gap-1">
              <h3 className={`font-black text-sm md:text-base tracking-tight leading-tight line-clamp-2 break-keep flex-1 drop-shadow-sm ${textStyle}`}>
                {node.title.split('(')[0].trim() || node.title}
              </h3>
              <div className="flex flex-col items-end gap-1 shrink-0 ml-1">
                <div className="flex items-center gap-1.5">
                  <span className={`font-black text-xs md:text-sm drop-shadow-sm ${isLocked ? 'text-gray-400' : 'text-[#d97706]'}`}>
                    {xpReward} XP
                  </span>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full shadow-inner border-[1.5px] border-white/40 flex items-center justify-center ${isLocked ? 'bg-gray-500' : type.bg}`}>
                    {isCompleted && (
                      <CheckCircle2 size={14} className="text-white drop-shadow-sm" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* TCG Illustration Box */}
            <div className="w-full relative rounded-lg border-2 border-white/40 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] overflow-hidden bg-white/50 flex-1 flex items-center justify-center mb-3">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Cpath d=\\'M0 40L40 0H20L0 20M40 40V20L20 40\\'/ %3E%3C/g%3E%3C/svg%3E')" }} />
              
              {isLocked && <MatrixRain opacity="opacity-60" color="text-gray-800" />}
              {isPerfect && (
                <div className="absolute top-1 right-1 bg-[#FFB300] text-white text-[10px] md:text-xs font-black px-2 py-0.5 rounded shadow-sm z-30 flex items-center gap-1">
                  <CheckCircle2 size={12} /> PERFECT
                </div>
              )}

              <div className={`z-10 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)] transform transition-transform duration-700 ${isPopOut ? 'text-6xl md:text-7xl scale-110' : 'text-5xl md:text-6xl'} ${isLocked ? 'grayscale opacity-50' : 'animate-bounce-slow'}`}>
                {monsterEmoji}
              </div>

              {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] z-20">
                  <Lock size={isPopOut ? 40 : 28} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>
              )}
            </div>

            {/* Info Ribbon */}
            <div className={`w-full py-0.5 px-2 mb-2 bg-black/10 rounded flex justify-between items-center text-[10px] md:text-[11px] font-bold ${textStyle}`}>
              <span>NO. {((globalIndex !== undefined ? globalIndex : index) + 1).toString().padStart(3, '0')}</span>
              <span>LESSON {progress}/{totalLessons}</span>
            </div>

            {/* TCG Content Section */}
            <div className={`w-full bg-white/90 rounded-lg p-2 md:p-3 flex flex-col flex-none min-h-[75px] md:min-h-[85px] border border-white/40 shadow-inner relative`}>
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-gray-300 shadow-inner"></div>
                   <span className={`font-black text-xs md:text-sm text-gray-900`}>{content.name}</span>
                </div>
              </div>
              <p className={`text-[10px] md:text-xs leading-relaxed font-bold line-clamp-2 md:line-clamp-3 ${isDark ? 'text-gray-600' : 'text-gray-600'}`}>
                {nodeDesc}
              </p>
              
              {!isLocked && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-lg overflow-hidden mt-2">
                  <div 
                    className={`h-full ${type.bg} transition-all duration-1000`} 
                    style={{ width: `${(progress / totalLessons) * 100}%` }}
                  />
                </div>
              )}
            </div>

            {/* Permanent Holographic Foil Effect for completed or active cards */}
            {(!isLocked) && (
              <div 
                className="absolute inset-0 pointer-events-none rounded-xl mix-blend-color-dodge opacity-60 animate-holo-foil"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      105deg, 
                      transparent 20%, 
                      rgba(255, 213, 79, 0.4) 25%, 
                      rgba(255, 255, 255, 0.6) 45%, 
                      rgba(239, 68, 68, 0.4) 50%, 
                      transparent 55%
                    )
                  `,
                  backgroundSize: '200% 200%',
                }}
              />
            )}
            
            {isFocus && !isLocked && !isCompleted && (
              <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                 <div className="bg-[#FFB300] text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(255,179,0,0.6)] animate-pulse border-4 border-white/40">
                   <Play size={24} fill="currentColor" className="ml-1" />
                 </div>
              </div>
            )}

            <style dangerouslySetInnerHTML={{__html: `
              @keyframes holo-foil {
                0% { background-position: 200% 0%; }
                100% { background-position: -200% 0%; }
              }
              .animate-holo-foil {
                animation: holo-foil 4s linear infinite;
              }
            `}} />
          </div>
        </div>
      </div>
    </div>
  );
}
