/*
3진법 뒤집기
문제 설명
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 
solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.
입출력 예
n	result
45	7
125	229
입출력 예 설명
입출력 예 #1

답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
45	1200	0021	7
따라서 7을 return 해야 합니다.
입출력 예 #2

답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
125	11122	22111	229
따라서 229를 return 해야 합니다.
*/

/*
이진법 만드는 과정으로 3진법을 만들어 보자
10을 예로 들면, 2로 나누고 몫이 0이 될때가지 진행(몫은 버림)
다음 몫을나눠준다.

나머지가 있는 경우에만 남겨놓는다
10/ 2 ... share 5, mod 0
5 / 2 ... share 2, mod 1
2 / 2 ... share 1, mod 0
1 / 2 ... share 0, mod 1
중단
이진법은 역순으로 1010 이다. 
이것을 다시 역순을 해야 하기때문에 array 로 저장 할 예정이고,
십진법은 첫째자리(array 상으로는 마지막 자리에서) 해당 승수를 곱해준다. 후 더해준다.
=> 그러므로 reverse 값을 할 필요 없이 0번째 인덱스부터 익덱스 승수를 곱해주면 될것이다.
*/

let n = 45;
function solution(n) {
  let answer = 0;
  let arr = [];
  let share = Math.floor(n / 3);
  let temp = n;
  if (share === 0) {
    return n;
  }
  while (share !== 0) {
    arr.unshift(temp % 3);
    share = Math.floor(temp / 3);
    temp = share;
  }

  result = arr.reduce((acc, cur, i) => acc + 3 ** i * cur, 0);

  return result;
}

solution(n);

//220621 리팩토링
function ternary(x) {
  let num = x;
  let answer = [];
  while (num !== 0) {
    let divisor = Math.floor(num / 3);
    let reminder = num % 3;

    if (reminder === 0) {
      answer.push(reminder);
    } else {
      answer.push(reminder);
    }

    num = divisor;
  }
  return answer.reverse();
}

function solution(n) {
  let arr = ternary(n);
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) answer += arr[i] * 3 ** i;
  }
  return answer;
}
