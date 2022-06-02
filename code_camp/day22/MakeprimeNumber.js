/*
소수 만들기
문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 
 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 
 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 
중복된 숫자가 들어있지 않습니다.
입출력 예
nums	result
[1,2,3,4]	1
[1,2,7,6,4]	4
입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.
*/

/*
우선 조합? 을 일으키는 것 부터 알아보자
i = 0이면
처음은 i+1 과 그다음 i+2, i+3 ... 끝나면
i +와 i+2와 i+3 ... 이렇게 ? 끝나면
i+1과 i+2가 맞춰지고 다시 i+3, i+4...
이중 포문을 구상 할 수도 있다.
for(i = 0; i < length-2; i++){
    for(j=i+1, j< length-2, j++){
        [i, j, j+1] // 여기서 두 곳을 고정한채로 움직여야 하기 때문에 for문이 하나 더필요할듯?

    }

}


*/
let nums = [1, 2, 7, 6, 4];

function solution(nums) {
  let temp = 0;
  let count = 0;
  let answer = [];
  for (i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        temp = nums[i] + nums[j] + nums[k];
        answer.push(temp);
      }
    }
  }
  answer.forEach((x) => {
    for (let i = 2; i <= x; i++) {
      if (x === i) count++;
      if (x % i === 0) return;
    }
  });
  return count;
}
console.log(solution(nums));

// 여기서 소수를 구하는 function은 콜백으로 넣는 것이 더 편할 것이다.
// 다음 시간에는 소수만 구하는 콜백 함수를 만들어보자 제곱근을 활용하는 방식이 있었다.
