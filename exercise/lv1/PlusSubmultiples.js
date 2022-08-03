//Pass 하였지만 속도가 좀 느린듯 하다.
function solution(left, right) {
  //   const num = {};
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let submultiple = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) submultiple.push(j);
    }
    // num[i] = submultiple;
    if (submultiple.length % 2 === 0) answer += i;
    if (submultiple.length % 2 === 1) answer -= i;
  }

  return answer;
}

//Refactoring1
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    //1과 자기자신이 있기 때문에 기본적으로 2로 출발 => 1만했을때 문제 발생
    let submultiple = 1;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) submultiple++;
    }
    if (submultiple % 2 === 0) answer += i;
    if (submultiple % 2 === 1) answer -= i;
  }

  return answer;
}
//Refactoring2  : 속도가 너 느려짐
function solution(left, right) {
  let answer = 0;
  let arr = Array.from({ length: right - left + 1 }, (v, i) => i + left);

  arr.forEach((el) => {
    let count = 1;
    let i = 1;
    while (i < el) {
      if (el % i === 0) count++;
      i++;
    }
    if (count % 2 === 0) {
      answer += el;
    } else {
      answer -= el;
    }
  });

  return answer;
}
//reference refactoring
