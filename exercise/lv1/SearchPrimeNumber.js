// 220817 Solve : 효율성 테스트 실패
function PrimeNumber(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  let arr = Array.from({ length: n - 1 }, (v, i) => i + 2);
  let count = 0;
  arr.forEach((el) => {
    if (PrimeNumber(el)) count++;
  });
  return count;
}

//재도전 : 통과 - 테스트 11 : 216
function PrimeNumber(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  let count = 0;
  let num = 2;
  while (num <= n) {
    if (PrimeNumber(num)) count++;
    num++;
  }

  return count;
}
