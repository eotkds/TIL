/*
예산
문제 설명
S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 
그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 
그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 
예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 
1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때,
 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

제한사항
d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
입출력 예
d	budget	result
[1,3,2,5,4]	9	3
[2,2,3,3]	10	4
입출력 예 설명
입출력 예 #1
각 부서에서 [1원, 3원, 2원, 5원, 4원]만큼의 금액을 신청했습니다. 만약에, 1원, 2원, 4원을 신청한 부서의
 물품을 구매해주면 예산 9원에서 7원이 소비되어 2원이 남습니다. 항상 정확히 신청한 금액만큼 지원해 줘야 
 하므로 남은 2원으로 나머지 부서를 지원해 주지 않습니다. 위 방법 외에 3개 부서를 지원해 줄 방법들은 다음과 같습니다.

1원, 2원, 3원을 신청한 부서의 물품을 구매해주려면 6원이 필요합니다.
1원, 2원, 5원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
1원, 3원, 4원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
1원, 3원, 5원을 신청한 부서의 물품을 구매해주려면 9원이 필요합니다.
3개 부서보다 더 많은 부서의 물품을 구매해 줄 수는 없으므로 최대 3개 부서의 물품을 구매해 줄 수 있습니다.

입출력 예 #2
모든 부서의 물품을 구매해주면 10원이 됩니다. 따라서 최대 4개 부서의 물품을 구매해 줄 수 있습니다.
*/
/*
전체 신청금액을 더한 값과 예산과 비교 하여 Sumd <= Budget 이면 length가 답이다.
가장 작은 min 값을 하나 빼고 난 후 sumd 와 Budget을 계속 비교 하면 length를 return 하면 될것이다. 
splice 메소드를 써서 빼보자
splice로 0으로 바꿔주고
나중에 forEach를 통해서 0>것을 count 해줘야 할것이다.



*/

let d = [1, 3, 2, 5, 4];
let budget = 9;

function solution(d, budget) {
  let sumd = d.reduce((acc, cur) => acc + cur);
  // console.log(answer.splice(answer.indexOf(Math.min(...answer)),1))
  if (sumd <= budget) return d.length;
  sumd = 0;
  let answer = [];
  do {
    answer.push(Math.min(...d));
    d.splice(d.indexOf(Math.min(...d)), 1);
    sumd = answer.reduce((acc, cur) => acc + cur);
    console.log(d, sumd, answer, Math.min(...d));
  } while (sumd <= budget);

  return answer.length - 1;
}

// console.log(solution(d, budget));

// answer을 빼고 리팩토링
// answer라는 배열이 결국에는  최대값을 뺀 d의 배열과 같다.
function solution(d, budget) {
  let sumd = d.reduce((acc, cur) => acc + cur); // 처음에만 선언

  while (sumd > budget) {
    // true and false 구문을 많이 헷갈린다.
    // 나같은 경우에는 큰수를 빼야 하나?

    d.splice(d.indexOf(Math.max(...d)), 1);
    sumd = d.reduce((acc, cur) => acc + cur);
    console.log(d, sumd, Math.max(...d));
  }

  return d.length;
}

console.log(solution(d, budget));
// 하지만 이답은 런타임 에러가 떠버렸다.

//다른 사람의 refactoring
/*

function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

작은 수를 빼줘야 했는데, sort를 통해서 간단히 해결했다
정렬이 되니 작은 수를 빼줘야 하는 것을 pop을 통해 간단히 해결 했다.

*/
