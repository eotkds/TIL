//220811 solve

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let str = "".padStart(a, "*");
  let answer = ``;
  for (let i = 0; i < b; i++) {
    answer += `${str}`;
    answer += i == b - 1 ? "" : "\n";
  }
  console.log(answer);

  // console.log(a);
  // console.log(b);
});

/*
process~ 무슨이유인지 몰라서 계속 output size differs가 뜸
구글링을 통해서 블럭안에다가 코드를 적어야 하는 것을 알았다.
또한 입력값이 "5 3"이기 때문에 평소 접했던 n = 5, m = 3 이런 형식이 아니었다.
그렇기 때문에 형식이 들어갔던것 같다.
하지만 여전히 process.stdin~ 은 모르겠다.
후에 알아보니깐 fs모듈이라고 있었다.
*/
