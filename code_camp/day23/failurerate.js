/*
실패율
문제 설명
실패율
failture_rate1.png

슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 
요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 
오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

제한사항
스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
입출력 예
N	stages	result
5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
4	[4,4,4,4,4]	[4,1,2,3]
입출력 예 설명
입출력 예 #1
1번 스테이지에는 총 8명의 사용자가 도전했으며, 
이 중 1명의 사용자가 아직 클리어하지 못했다. 따라서 1번 스테이지의 실패율은 다음과 같다.

1 번 스테이지 실패율 : 1/8
2번 스테이지에는 총 7명의 사용자가 도전했으며, 
이 중 3명의 사용자가 아직 클리어하지 못했다. 따라서 2번 스테이지의 실패율은 다음과 같다.

2 번 스테이지 실패율 : 3/7
마찬가지로 나머지 스테이지의 실패율은 다음과 같다.

3 번 스테이지 실패율 : 2/4
4번 스테이지 실패율 : 1/2
5번 스테이지 실패율 : 0/1
각 스테이지의 번호를 실패율의 내림차순으로 정렬하면 다음과 같다.

[3,4,2,1,5]
입출력 예 #2

모든 사용자가 마지막 스테이지에 있으므로 
4번 스테이지의 실패율은 1이며 나머지 스테이지의 실패율은 0이다.

[4,1,2,3]
*/

/*
N이 주어졌을 때, n스테이지라고 한다면 N+1 이상! 은 클리어한 사람
n >= 에 수는 참가자 이고, 
N=== n 은 실패 한 참가자로 처리 한다. 
실패율은 N===n 수에 / n이라는 참가자 이다.

실패율이 높은 스테이지 번호를 내림차순 하라

--참가자는 n 이상을 가져오면 되고
--실패한 하람은 n값을 가져오면 된다. 그럼 그 스테이지의 실패율을 구할 수 있다. 

실패율은 0=< 실패율 =<1 해당 스테이지별 인텍스로 실패율을 저장하는 것이 좋다고 본다.
실패율을 정렬하는게 고민이당
실패율 순으로 정렬하되 같은 값이면 작은 스테이지 순으로 정렬한다. 
sort 사용시 이전 index +1 값을 가져올 수 있을까? => 그런 기능은 없었다
sort 하고 실패율 값을 index of찾아 주고, -1 나올 때까지 stage를 추가한다.
처음에 0부터 시작하고, 그다음 추가 추가 해준다. 
이런 비슷한 경우가 많았던거 같아서 function으로 만들어 놓는것도 나쁘지 않겠다.

while 문으로 해서 index of -1 되면 멈추도록 ? 재귀함수에 가깝기도 한것 같다. 
let i = 0;
let index = arr.indexOf(x, i) 해당 인덱스 +1 값을 가져오면서 index 를 n 으로 치환한다.
while(i>=0){
    index = arr.indexOf(x, i)
    if(index === -1){
        break
    }
    answer.push(index+1)
    i = index  // 다음 시작
}
// 모든 arr 요소를 다 체크해야 하기 때문에..[1,0,0] 이면
answer 은 [1,2,3,2,3] 이런식으로 나올 것이다. 그렇기 때문에 중복값을 제거해야 할 것이다. 
중복값은 Set으로 없애면 되긴하다. 

arr = [1, 0, 0] 이라는 실패율 이라면 (arrindex +1 은 스테이지일 것이다. )
let i = 0
let answer = [...new Set(arr) = [1, 0]].forEach(x => {
    
    let index = arr.indexOf(x,i)
    if(index !== -1){
        answer.push(index + 1)
        index = i
    }

})
for(key of newarr){
   let n = 0
    while(n >=0){
        let index = arr.indexOf(key, n)
        if(index === -1) break
        answer.push(index + 1)
        index = n 
    }

}


*/
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let N = 5;

function solution(N, stages) {
  let answer = [];
  let arr = [];

  for (let i = 1; i <= N; i++) {
    // 일번 스테이지 참자가
    let participant = stages.filter((x) => x >= i).length;
    let failures = stages.filter((x) => x === i).length;
    if (participant === 0) {
      arr.push(0);
    } else {
      arr.push(failures / participant);
    }
  }
  let newArr = new Set(arr);
  for (key of [...newArr].sort((a, b) => b - a)) {
    let n = 0;
    while (n >= 0) {
      let index = arr.indexOf(key, n);
      console.log(key, index, n);
      if (index === -1) break;
      answer.push(index + 1);
      n = index + 1;
    }
  }

  return answer;
}

console.log(solution(N, stages));

// 정답은 나왔으나, 몇 Case에서는 과부하가 있기도 했다.
/*
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

이중 배열을 만들어서 순번을 만들어 줬다. 
그다음 sort 할 경우 다른 항목으로 기준으로 하였다.

*/

//220615 리팩토링
function solution(N, stages) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    let result = stages.filter((el) => el >= i); // 도달한 플레이수
    let failure = stages.filter((el) => el === i); // 실패한 플레이수
    // console.log(result)
    let frate = 0;
    if (result.length === 0) {
      frate = 0;
    } else {
      frate = failure.length / result.length;
    }
    // console.log(result, failure, frate)
    arr.push([i, frate]);
  }

  let answer = arr
    .sort((a, b) => b[1] - a[1])
    .map((el) => {
      return el[0];
    });

  return answer;
}

//리팩토링 filter가 너무 많이 들어 갔다.
function solution(N, stages) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    let result = 0;
    let failure = 0;
    stages.forEach((el) => {
      if (el >= i) result++;
      if (el === i) failure++;
    });
    let frate = 0;
    if (result === 0) {
      frate = 0;
    } else {
      frate = failure / result;
    }
    // console.log(result, failure, frate)
    arr.push([i, frate]);
  }

  let answer = arr
    .sort((a, b) => b[1] - a[1])
    .map((el) => {
      return el[0];
    });

  return answer;
}

//리팩토링 for문을 안써도 될 거같다.
function solution(N, stages) {
  let arr = [];
  let stage = 1;
  while (stage <= N) {
    let result = 0;
    let failure = 0;
    stages.forEach((el) => {
      if (el >= stage) result++;
      if (el === stage) failure++;
    });
    let frate = 0;
    if (result === 0) {
      frate = 0;
    } else {
      frate = failure / result;
    }
    arr.push([stage, frate]);
    stage++;
  }

  let answer = arr
    .sort((a, b) => b[1] - a[1])
    .map((el) => {
      return el[0];
    });
  return answer;
}
