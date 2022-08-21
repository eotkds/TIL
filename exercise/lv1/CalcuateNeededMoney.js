/*
220819 Solve : 테스트 22 - 0.86
*/
function solution(price, money, count) {
  let arr = Array.from({ length: count }, (v, i) => price * (i + 1));

  let sum = arr.reduce((acc, cur) => acc + cur);

  return sum < money ? 0 : sum - money;
}

//refactoring : 테스트19 -  0.26
function solution(price, money, count) {
  let i = 1;
  let sum = 0;
  while (i <= count) {
    sum += price * i;
    i++;
  }

  return sum < money ? 0 : sum - money;
}
