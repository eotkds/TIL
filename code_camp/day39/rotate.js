/*
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 
예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 
예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 
이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 
x의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 1,000 이하입니다.
입출력 예
s	result
"[](){}"	3
"}]()[{"	2
"[)(]"	0
"}}}"	0
입출력 예 설명
입출력 예 #1

다음 표는 "[](){}" 를 회전시킨 모습을 나타낸 것입니다.
x	s를 왼쪽으로 x칸만큼 회전	올바른 괄호 문자열?
0	"[](){}"	O
1	"](){}["	X
2	"(){}[]"	O
3	"){}[]("	X
4	"{}[]()"	O
5	"}[](){"	X
올바른 괄호 문자열이 되는 x가 3개이므로, 3을 return 해야 합니다.
입출력 예 #2

다음 표는 "}]()[{" 를 회전시킨 모습을 나타낸 것입니다.
x	s를 왼쪽으로 x칸만큼 회전	올바른 괄호 문자열?
0	"}]()[{"	X
1	"]()[{}"	X
2	"()[{}]"	O
3	")[{}]("	X
4	"[{}]()"	O
5	"{}]()["	X
올바른 괄호 문자열이 되는 x가 2개이므로, 2를 return 해야 합니다.
입출력 예 #3

s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.
입출력 예 #4

s를 어떻게 회전하더라도 올바른 괄호 문자열을 만들 수 없으므로, 0을 return 해야 합니다.

*/

/*
1. 우선 문자열 안에 소,중,대 괄호가 올바른지를 확인하는 함수 / 방법을 정리해야겠다.
지난번 괄호 풀기를 참고하여 함수를 우선 함수를 만들어보자 

s를 왼쪽 방향으로 돌려주면서 true 값을 반환 하는 수를 찾는다.
slice 함수를 활용하여 뒤로 붙여주어야 하나?
돌려주는 함수도 만들어야 겠다

"([)]{}"
와 같은 테스트 케이스는 잡을수 없었다.마지막 열었던 것을 먼저 닫아 한다.
닫는 괄호가 나올 경우 마지막에 같은 여는 괄호가 있어야만 한다. 
마지막 괄호를 스택으로 쌓아야 하는 것이다.
[0, 0, 0] () [] {} 스택을 만들고 열림이었을때

*/

function isRight(arr) {
  let low = 0;
  let middle = 0;
  let high = 0;
  let Open = ["(", "{", "["];
  let Close = [")", "}", "]"];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (Open.includes(arr[i])) {
      stack.push(arr[i]);
    } else {
      //마지막 열림과 맞는지 확인
      if (arr[i] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        //마지막 open과 다르기 때문에 false 반환
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;

  return true;
}

const rotate = (arr) => {
  let answer = arr;
  answer[arr.length] = arr[0];
  answer.shift();
  return answer;
};

function solution(s) {
  let arr = [...s];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (isRight(arr)) count++;
    rotate(arr);
  }

  return count;
}
let s = "([)]{}";

//220721 refactoring : 테스트 14번 실패
function solution(s) {
  //각각 괄호마다 점수 산정 내부 함수를 만들 예정
  function report(s) {
    const score = {
      ")": false,
      "}": false,
      "]": false,
      "(": true,
      "{": true,
      "[": true,
    };

    let small = 0,
      medium = 0,
      large = 0;
    if (!score[s[0]] || score[s[s.length - 1]]) return 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === ")") {
        if (score[s[i]]) {
          small++;
        } else {
          small--;
        }
      }
      if (s[i] === "{" || s[i] === "}") {
        if (score[s[i]]) {
          medium++;
        } else {
          medium--;
        }
      }
      if (s[i] === "[" || s[i] === "]") {
        if (score[s[i]]) {
          large++;
        } else {
          large--;
        }
      }
      if (small < 0 || medium < 0 || large < 0) return 0;
    }

    return small === 0 && medium === 0 && large === 0 ? 1 : 0;
  }
  let answer = 0;
  for (let k = 0; k < s.length; k++) {
    let front = s.substring(0, k);
    let back = s.substring(k);
    let words = back + front;

    answer += report(words);
  }

  return answer;
}

//질문하기게시판을 보니 "([{)}]" 테스트케이스를 통과하지 못 했다.
//마지막 open형 괄호와 닫힘형 괄호가 만나야 했다.
//220725 refactoring
function solution(s) {
  //각각 괄호마다 점수 산정 내부 함수를 만들 예정
  function report(s) {
    const pair = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    const open = ["(", "{", "["];
    const close = [")", "}", "]"];
    let stack = [];

    if (close.includes(s[0]) || open.includes(s[s.length - 1])) return false;
    for (let i = 0; i < s.length; i++) {
      if (open.includes(s[i])) {
        stack[stack.length] = s[i];
      }
      if (close.includes(s[i])) {
        let last = stack[stack.length - 1];
        if (pair[last] === s[i]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  let answer = 0;
  for (let k = 0; k < s.length; k++) {
    let front = s.substring(0, k);
    let back = s.substring(k);
    let words = back + front;

    if (report(words)) answer++;
  }

  return answer;
}

//220728 Reference code
function solution(s) {
  //짝수와 홀수로 괄호를 구분 짓는 것이 좋았다.
  const numbering = {
    "[": 0,
    "]": 1,
    "{": 2,
    "}": 3,
    "(": 4,
    ")": 5,
  };
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    //substring을 사용하여 string을 돌리는 효과도 좋았다.
    s = s.substring(1) + s[0];
    let stack = [];

    for (let l = 0; l < s.length; l++) {
      //짝수일 경우 열림 괄호
      if (numbering[s[l]] % 2 === 0) {
        stack.push(numbering[s[l]]); // 숫자로 stack을 쌓는다.
      }
      //홀수일경우 닫힘괄호
      if (numbering[s[l]] % 2 === 1) {
        let last = stack[stack.length - 1];
        //열림괄호와 같은 유형인지
        if (last === numbering[s[l]] - 1) {
          //맞으면 stack을 없애준다.
          stack.pop();
        } else {
          //열림괄호와 짝이 안맞다면 순회를 멈춘다.
          break;
        }
      }

      if (l === s.length - 1) {
        if (stack.length === 0) {
          //순회가 끝나고, stack에 남아 있는 것이 없을 경우
          answer++;
        }
      }
    }
  }

  return answer;
}
