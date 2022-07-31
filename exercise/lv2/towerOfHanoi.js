/*
하노이의 탑
문제 설명
하노이 탑(Tower of Hanoi)은 퍼즐의 일종입니다. 
세 개의 기둥과 이 기동에 꽂을 수 있는 크기가 다양한 원판들이 있고, 
퍼즐을 시작하기 전에는 한 기둥에 원판들이 작은 것이 위에 있도록 순서대로 쌓여 있습니다. 
게임의 목적은 다음 두 가지 조건을 만족시키면서, 
한 기둥에 꽂힌 원판들을 그 순서 그대로 다른 기둥으로 옮겨서 다시 쌓는 것입니다.

한 번에 하나의 원판만 옮길 수 있습니다.
큰 원판이 작은 원판 위에 있어서는 안됩니다.
하노이 탑의 세 개의 기둥을 왼쪽 부터 1번, 2번, 3번이라고 하겠습니다. 
1번에는 n개의 원판이 있고 이 n개의 원판을 3번 원판으로 최소 횟수로 옮기려고 합니다.

1번 기둥에 있는 원판의 개수 n이 매개변수로 주어질 때, 
n개의 원판을 3번 원판으로 최소로 옮기는 방법을 return하는 solution를 완성해주세요.

제한사항
n은 15이하의 자연수 입니다.
입출력 예
n	result
2	[ [1,2], [1,3], [2,3] ]
입출력 예 설명
입출력 예 #1
다음과 같이 옮길 수 있습니다.
*/

/*
n 1일 때
[1,3]

n 2일 때
[1,2]
[1,3]
[2,3]

n 3일 때

[1,3]
[1,2]
[3,2]

[1,3]
[2,1]
[2,3]
[1,3]


n 4일 때

[1,3]
[1,2]
[3,2]
[1,3]
[2,1]

let n = 3    
let answer = []
    let tower = [[],[],[]]
    for(let i = 0; i<n; i++){
        tower[0].push(i)
    }

tower
if(tower[2][n-1] === n-1){
  consoel.log(answer)
}else{
  
}
for(let i =0; i < n; i++){
  if(tower[1].length === n -1){
    
  }
}



*/
/*
function solution(n) {
  let answer = [[]];
  let tower = [[], [], []];
  for (let i = 0; i < n; i++) {
    tower[0].push(i);
  }

  return answer;
}
*/

/*
유투브 보고 만들기
let tower = [[], [], []];
let tower = [[],[],[]]
    for(let i = 0; i<n; i++){
        tower[0].push(i)
    }
function aaa(n, a, b, c){
  if(n === 1){
    tower[c].unshift(tower[a].shift())
    return
  }
  aaa(n-1, a, c, b)
  tower[c].unshift(tower[a].shift())
  aaa(n-1,b, a, c)
}


배열로 붙였을 경우인데 타입스크립트가 없어서 타입지정이 되지 않는다.
function bbb(n, a:array , b: array, c:array){
  if(n === 1){
    c.unshift(a.shift())
    return
  }
  bbb(n-1, a, c, b)
  c.unshift(a.shift())
  bbb(n-1,b,a,c)
  
}

*/

function solution(n) {
  let answer = [];
  let tower = [[], [], []];

  for (let i = 0; i < n; i++) {
    tower[0].push(i);
  }

  function aaa(n, a, b, c) {
    if (n === 1) {
      tower[c].unshift(tower[a].shift());
      answer.push([a + 1, c + 1]);
      return;
    }
    aaa(n - 1, a, c, b);
    tower[c].unshift(tower[a].shift());
    answer.push([a + 1, c + 1]);
    aaa(n - 1, b, a, c);
  }

  aaa(n, 0, 1, 2);
  return answer;
}
