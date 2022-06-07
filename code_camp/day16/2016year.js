/*
2016년
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 
2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 
토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
입출력 예
a	b	result
5	24	"TUE"
*/

function solution(a, b) {
  let day = new Date(2016, a - 1, b);
  let Wday = day.getDay();
  let answer = "";
  switch (Wday) {
    case 0:
      answer = "SUN";
      break;
    case 1:
      answer = "MON";
      break;
    case 2:
      answer = "TUE";
      break;
    case 3:
      answer = "WED";
      break;
    case 4:
      answer = "THU";
      break;
    case 5:
      answer = "FRI";
      break;
    default:
      answer = "SAT";
  }
  return answer;
}
/*
220607 리팩토링
제한 조건을 참고하여 메소드를 사용하지 않고 만들어보자

각 월에 대해서 일수를 받는 객체를 만들기
요일 객체를 만들기


*/

function solution(a, b) {
  //2016은 윤년이라고 명시되어 있기도 하지만 만약에 다른 연도가 변수로 주어진다면,
  //2016년 기준으로 4년마다 2월에 대해서는 날 수를 추가 해줄 수 있다.
  const Month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  //1월 1일이 금요일 ('FRI')이다. 5를 기준으로 잡아 보장, 만약 a = 1, b = 2라면,
  // 'SAT' 가 나오기 위해서는 1,1 일 때 (1 + 4) % 7 = 5 이기 때문에,
  // (2 + 4) % 7 로 찾을 수 있게 만든다.
  const Day = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };

  let days = 0;
  for (let i = 1; i < a; i++) {
    days += Month[i];
  }
  let dayNum = (b + 4 + days) % 7;

  return Day[dayNum];
}
