/*
220823 Solove
*/
//테스트 1 - 3.27ms 다른 테스트에 비하여 너무 높게 나옴
function solution(n) {
  let num = 0;
  //짝수일 경우
  if (n % 2 === 0) {
    num = 3;
    while (num < n) {
      if (n % num === 1) return num;
      num += 2;
    }
  }
  //홀수일 경우
  if (n % 2 === 1) {
    num = 2;
    while (num < n) {
      if (n % num === 1) return num;
      num += 2;
    }
  }
}
