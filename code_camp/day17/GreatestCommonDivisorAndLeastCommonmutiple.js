/*
최대공약수와 최소공배수
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, 
solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 
그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 
최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10]
입출력 예 설명
입출력 예 #1
위의 설명과 같습니다.

입출력 예 #2
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
*/

/*
최대 공약수와 최대 공배수를 찾아보았다
최대 공약수는 a ,b의 소인수 분해의 같은 값을 찾아보면 되는 것 이었다.
최소 공배수는 a, b의 소인수 분해를 하여 지수의 최대값을 곱해주면 되는 것이다. 
그렇다면 
1. 소인수 분해를 한다.



2. 서로 지수가 같은 값중 최소 값을 곱해주면 최대 공약수

초기값을 1로 하고(최대공약수 어느 공약수가 없으면 1이다.) 
2부터 나누어 떨어지면, 2를 곱해준다. 그다음 다시 2부터 시작하여 증가

3. 서로의 지수가 같은면 최대값을 대표하여 곱해주면 최소 공배수 이다.
공배수를 만들기 위해서는 서로의 소인수 분해하는 것이 편할거 같다. 
배열을 만들어야 할까? 이중배열을 만들까?

첫번째가 같으면 그다음 지수 최대값을 비교
아니면 a,b 나눠서 둘중 하나라도 나눠지면 최대공배수에 곱해줘야 하는 것일가?
소인수 분해는 사람이 보는기편하게? 일단 만들어 보자


그렇다면 소인수 분해는 어떻게 해야 하는 것인가? 소수로 나누어떨어지면 된다. 
그렇다면 소수는 어떻게 구해야 하는 것인가 소수는 1과 자기자신을 나누어서 나오면되는
수이다. 
하지만 2로 나눌 수 있다면 2의 배수는 나누어 질 것이고 알아서 이전 배수들은 이전 소수에 
나누어 질것이다. (소인수 알고리즘을 참고 하였다.)




*/

// let k = 2;

//1 try
// let count = 0;
// while (n !== 1 && m !== 1) {
//   if (n % k === 0 && m % k === 0) {
//     minD *= k;
//     n /= k;
//     m /= k;

//   } else if (n === k || m === k) {
//     // 둘 중 k와 숫자가 같다는 것은 더이상 나눌 수 없다는 뜻!
//     break;
//   } else {
//     k++;
//   }
// }
// maxM = minD * n * m;

//  [minD, maxM]

//2try
// let answer1 = [];
// let answer2 = [];

// let answer = [1, 1];

// while (n !== 1) {
//   if (n % k === 0) {
//     answer1.push(k);
//     n /= k;
//   } else {
//     k++;
//   }
// }
// k = 2;
// while (m !== 1) {
//   if (m % k === 0) {
//     answer2.push(k);
//     m /= k;
//   } else {
//     k++;
//   }
// }

// answer1.forEach((x) => {
//   if (!answer2.includes(x)) {
//     answer[1] *= x;
//   }
//   answer2.forEach((y) => {
//     if (x === y) {
//       answer[0] *= y;
//       answer[1] *= y;
//     } else {
//       answer[1] *= y;
//     }
//   });
// });
// console.log(answer1, answer2);
// console.log(answer);
//채점에 가서는 9, 15번에서 시간초과가 생겼다 리팩토링을 해보자
// 아래에서는 소인수 분해로 하는 것으로 해보자

// 최대 공약수는 나왔다, 최대 공배 수와 어떻게 나와야 할것인가
// 지금 저 while 문은 어느 하나가 false 가 나오면 종료 되기 때문에 최소공배수와는
// 적절하지 못하다.
// 결국 제 2방법인 소인수 분해를 활용하는 것이 가장 좋을 것 같다.
// 아니면 둘중 하나라도 곱해져서 나눠지면 최대공배수에 넣을수 있지 않을까?
// 그렇다면 while 문은 쓰기 어렵지 않을까?

//3try while 문을 다시 변경해보자
// let n = 1112;
// let m = 695;
// let k = 2;
// let minD = 1;
// let maxM = 1;

// while (n !== 1 && m !== 1) {
//   if (n % k === 0 && m % k === 0) {
//     minD *= k;
//     maxM *= k;
//     n /= k;
//     m /= k;
//     console.log(n, m, k);
//   } else {
//     k++;
//   }
//   //
//   if (k > n && k > m) {
//     break;
//   }
// }
// maxM = minD * n * m;
// console.log(minD, maxM);

/* 
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}


유클리드 호재법이라는 것으로 최대공약수를 만들고,
a * b 수에 최대 공약수를나누어서 최대 공배수를만들었다.
유클리드 호재법을 저렇게 나타냈다는 것이 신기했다. 재귀함수라고도 한다.

function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}

다음은 for 함수를 이렇게 표현한 것인데 다음시간에 공부해보자

*/

/*
유클리드 호재법 을 통하여 최대 공약수를 알 수 있었고
두수의 곱한 수 / 최대공약수 = 최소 공배수 라는 것을 알 수 있었다. 
그리고 유클리드 호재법을 이용한 재귀함수를 알 수 있었다. 

function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}

위는 for 문을 이용한 재귀 함수 이다. 


for 문은 시작식(initialization) ; 조건식(condition) ; 반복식(final-expression) 으로 나뉜다
시작을 두수의 곱한 식으로 고정을 해놓고; 조건식을 0이 나올경우 종료하는 식으로 바꾸려고 했다. 
r 이라는 임의 변수를 할 당하여
유클리드 호재법을 실행 하려고 한다. 

 */

//위 유클리드 호재법을 통해서 다시 최대 공약수를 구해보자.

/*
유클리드 호재법은  a % b = c 라면
b % c = a
c % a = b 이런 식으로 재귀함수를 실행하다. 0이 되었을 때, a가 GCD;최대공약수가 된다. 
최대 공배수는 n * m / GCD 가 된다고 한다. 

[3, 12] 라면 

3 % 12 =  3
12 % 3 = 0 ... 최대공약수는 3이 된다. 
최대 공배수는 3 * 12 /3 => 12 가 된다.

지난번 for문으로 재귀함수를 표현했던것으로 알고 있다. 적용해 보자.


*/

// let a = 3;
// let b = 12;

// function solution(a, b) {
//   let c = 0;
//   for (let i = 0; (c = a % b); a = b, b = c) {
//     console.log(a, b, c);
//   } // c가 0이 되는 경우 멈출 것이다.

//   return [b, i];
// }

// console.log(solution(a, b));

//220610 리팩토링
//소인수 분해법 - 배열을 맞추기가 어렵다. 서로 공통 인수중 적은 것으로 들어가야 하는데 따로 배열을 만들면 맞추기 어려움
//공통 나눗셈 방식

function solution(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let gcdArr = [1];

  let i = 2;
  while (i <= min) {
    if (min % i === 0 && max % i === 0) {
      gcdArr.push(i);
      min = min / i;
      max = max / i;
    } else {
      i++;
    }
  }
  let gcd = gcdArr.reduce((acc, cur) => acc * cur);
  let lcm = gcd * min * max;
  console.log(gcd, lcm);
  return [gcd, lcm];
}

// solution(1112, 695);

//유클리드 호제법
function solution(n, m) {
  let a = n;
  let b = m;
  let c = a % b;

  while (c !== 0) {
    a = b;
    b = c;
    c = a % b;
  }
  let gcd = b;
  let lcm = (n * m) / gcd;

  return [gcd, lcm];
}
solution(12, 3);
