// 220812 Solve
function solution(n) {
  // + "" 해서 간단하게 만들 수 있음
  let str = n.toString();
  let arr = str.split("");

  // +사용하여 간단하게 숫자로 바꿀 수 있음
  return Number(arr.sort((a, b) => b - a).join(""));
}
