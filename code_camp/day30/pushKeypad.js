/*
[카카오 인턴] 키패드 누르기
문제 설명
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

kakao_phone1.png

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 
엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 
왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 
문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 
지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 
R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
입출력 예
numbers	hand	result
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
입출력 예에 대한 설명
입출력 예 #1

순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

왼손 위치	오른손 위치	눌러야 할 숫자	사용한 손	설명
*	#	1	L	1은 왼손으로 누릅니다.
1	#	3	R	3은 오른손으로 누릅니다.
1	3	4	L	4는 왼손으로 누릅니다.
4	3	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
5	3	8	L	왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
8	3	2	R	왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
8	2	1	L	1은 왼손으로 누릅니다.
1	2	4	L	4는 왼손으로 누릅니다.
4	2	5	R	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
4	5	9	R	9는 오른손으로 누릅니다.
4	9	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
5	9	-	-	
따라서 "LRLLLRLLRRL"를 return 합니다.

입출력 예 #2

왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

입출력 예 #3

오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.
*/
/*
우선 1,4,7 L, 3 6 9 R 로 치환 할 수 있다.  -> 객체로 만들어서 L, R로 치환 시킨다.
2 5 8 0 은 상대 거리를 나타내는데, 거리를 어떻게 ?
거리는 인터넷에서 알아보자 이중배열 활용하는 것 같은데 모르겠다.
이중배열을 1,5 를 한다면
출발지를 1 하고 가로 한칸 움직일때마다 count++ 5가 아니면 갱신
세로 한칸 움직이면 count++ 거기서 가로 움직을때 마다 count++ 찾으면 count 저장

우선 dial 이라는 이중 배열을 만든다.
[
[1,2,3],
[4,5,6],
[7,8,9],
['*',0,'#']
]
객체 또한 만들어준다. 1 4 7 이면 
처음에 자기 자신과 같은 index이면 자기 자신에서 상대 거리를 뺀 수의 절대값이 거리이다.
그다음 index 가 다르면 column index 상의 차이의 절대값과, 행의 index 차이의 절대값 차이 이다.// 그러면 인덱스 절대 거리 좌표를 나타낼 수 있을 것이다. 
만약 1:[0,0] 이고 8이 [2,1] 이면 거리는 [0,0] - [2,1] 의 절대값일 것이다.

*/
// L , R 일경우 answer 값에 넣어주고, L, R 넣어주는 call back 함수를 만들어준다?

let arr = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];

function solution(numbers, hand) {
  const number = {
    1: ["L", [0, 0]],
    2: ["M", [0, 1]],
    3: ["R", [0, 2]],
    4: ["L", [1, 0]],
    5: ["M", [1, 1]],
    6: ["R", [1, 2]],
    7: ["L", [2, 0]],
    8: ["M", [2, 1]],
    9: ["R", [2, 2]],
    0: ["M", [3, 1]],
  };
  //초기 위치만 설정
  let L = [3, 0];
  let R = [3, 2];
  let answer = "";

  const LR = (temp, key) => {
    // LR 구분 확인 하여 answer 값에 배정
    if (temp === "L") {
      L = number[key][1]; // 위치 조정
      answer += temp; // 결과값 저장
    }
    if (temp === "R") {
      R = number[key][1];
      answer += temp;
    }
  };

  for (key of numbers) {
    let temp = number[key][0]; // L, R, M 위치 확인
    LR(temp, key); // L, R 둘 중 하나인 경우 answer 값 정의
    if (temp === "M") {
      let M = number[key][1]; // M거리위치 확인
      let ML = Math.abs(M[0] - L[0]) + Math.abs(M[1] - L[1]);
      let MR = Math.abs(M[0] - R[0]) + Math.abs(M[1] - R[1]);
      if (ML === MR) {
        temp = hand[0].toUpperCase(); //같을경우 hand 에 적용
        LR(temp, key); // L, R 둘 중 하나인 경우 answer 값 정의
      }
      if (ML > MR) {
        //R이 더 가까운 경우
        temp = "R";
        LR(temp, key);
      }
      if (ML < MR) {
        //L이 더 가까운 경우
        temp = "L";
        LR(temp, key);
      }
    }
  }

  return answer;
}

//220630 리팩토링
function solution(numbers, hand) {
  const direction = {
    1: ["L"],
    4: ["L"],
    7: ["L"],
    3: ["R"],
    6: ["R"],
    9: ["R"],
    2: ["M"],
    5: ["M"],
    8: ["M"],
    0: ["M"],
  };
  let result = "";
  for (let i = 0; i < 9; i++) {
    direction[i + 1].push([i % 3, Math.floor(i / 3)]);
  }
  //  [3,0]-> '*' / -> '#'
  direction[0].push([1, 3]);

  let left = [0, 3];
  let right = [2, 3];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (direction[num][0] === "L") {
      result += "L";
      left = direction[num][1];
    }
    if (direction[num][0] === "R") {
      result += "R";
      right = direction[num][1];
    }
    if (direction[num][0] === "M") {
      let M = direction[num][1];
      let LM = Math.abs(left[0] - M[0]) + Math.abs(left[1] - M[1]);
      let RM = Math.abs(right[0] - M[0]) + Math.abs(right[1] - M[1]);
      // console.log(M, LM, RM);
      if (LM === RM) {
        if (hand === "right") {
          result += "R";
          right = direction[num][1];
        } else {
          result += "L";
          left = direction[num][1];
        }
      }
      if (RM < LM) {
        result += "R";
        right = direction[num][1];
      }
      if (LM < RM) {
        result += "L";
        left = direction[num][1];
      }
    }
    // console.log(numbers[i], direction[num], result, left, right);
  }
  return result;
}
