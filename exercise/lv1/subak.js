//220812 solve
function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

//refactoring1
function solution(n) {
  let subak = "수박";
  let num = Math.floor(n / 2);
  //MDN을 보니 repeat 안에 num이 내림차수 정수로 바뀌기 때문에 굳이 안바꿔도 된다고함
  let answer = subak.repeat(num);
  if (n % 2 === 0) {
    return answer;
  } else {
    return answer + "수";
  }
}
