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

//Reference 참고 : 161ms
// 일부 오류코드가 있다고 함.
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);

  for (let j = 3; j <= Math.sqrt(n); j += 2) {
    //등식 수정 < -> <=
    //n이하 수 중에서 소수를 찾는 것인데 범위를 sqrt(n)으로 한것은 조금 이해가 안간다.
    //아래에서 배수를 찾기는 하지만 말이다!
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        console.log(k);
        s.delete(k);
      }
    }
  }
  return s.size;
}

//에라토스테네스의 체로 1,000,000까지 풀어보기
function solution(n) {
  let arr = Array.from({ length: n + 1 }, (x) => (x = true));
  let count = 0;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
      for (let k = 2; k * i < arr.length; k++) {
        arr[i * k] = false;
      }
    }
  }

  return count;
}
