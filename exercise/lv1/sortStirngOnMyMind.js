//220815 Solve
function solution(strings, n) {
  let answer = [...strings];
  answer.sort().sort((a, b) => {
    if (a[n] === b[n]) return a - b;
    if (a[n] < b[n]) return -1;
  });
  return answer;
}
