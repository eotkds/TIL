/*
피보나치 수
문제 설명
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 
대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 
나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

제한 사항
n은 2 이상 100,000 이하인 자연수입니다.
입출력 예
n	return
3	2
5	5
입출력 예 설명
피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.
*/

// function solution(n) {
//   let a = 0;
//   let b = 1;
//   let temp = 0;
//   let count = 2;
//   for (let i = 0; i < n - 1; i++) {
//     temp = (a % 1234567) + (b % 1234567);
//     a = b;
//     b = temp;
//   }

//   return temp;
// }
// function solution(n) {
//   let a = 0;
//   let b = 1;
//   let temp = 1;
//   let count = 1;
//   while (count < n) {
//     temp = a + b;
//     a = b;
//     b = temp;
//     count++;
//   }
//   return temp % 1234567;
// }

/// 테스트 7부터 막힌다.
//재귀함수를 적용해 보자
let n = 110;
function solution(n) {
  let a = 0;
  let b = 1;
  let temp = 1;
  let count = 1;
  let arr = [0, 1];
  while (count < n) {
    temp = (a + b) % 1234567; // 이부분을 생각해내지 못했다
    a = b;
    b = temp;
    count++;
    arr.push(temp);
  }
  console.log(arr);
  return temp;
}

solution(n);
// 질문하기에서 힌트를 얻고 리팩토링
// 9, 10, 12 통과 실패
// 생각해보니 나머지가 0 기점으로 반복되고 있었다.
// 나눈수가 0인 지점 전까지 배열을 만들면 그때부터는 찾기만하면될것이다.

// let a = 0;
// let b = 1;
// let temp = 0;
// let n = 5;

// function solution(n) {
//   let a = 0;
//   let b = 1;
//   let temp = 1;
//   let divisor = 3; //  3 이라면
//   let count = 0;
//   let arr = [0, 1];
//   while (temp % divisor !== 0) {
//     arr.push(temp);
//     a = b;
//     b = temp;
//     temp = a + b;
//     count++;
//     console.log(a, b, temp, count, arr);
//   }
//   console.log(count);
//   let aaa = n - (count % arr.length);

//   return arr[n - (count % arr.length)];
// }

// solution(n);
