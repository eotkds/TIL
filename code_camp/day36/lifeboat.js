/*
구명보트
문제 설명
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 
구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 
구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 
1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 
매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 
개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

제한사항
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 
주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
입출력 예
people	limit	return
[70, 50, 80, 50]	100	3
[70, 80, 50]	100	3

*/

/*
출력 예가 부족해서 정확인 방향성이 안잡힌다.
어떤방법으로 최솟값이 유도 되는지 확인해 보자

[50, 40, 40, 30, 70, 60, 20] 100 일 경우를 보자 

50에 대하여 40 만 짝을 지을 수 있다
40에 대해서는 40 30 으로 짝을 지을 수 있다.
70에 대해서는 30으로 짝지을 수 있다.
...
1. 최소값부터 100에 가깝게 만드는 방법
20 -> 30 -> 40 
40 -> 50
60 ->
70 ->

2. 큰 값부터 시작하고, 작은값 부터 채워 나가는 방법
70 -> 20
60 -> 30
50 -> 40
40

보트가 2명씩 밖에 못타기 때문에, 우선은 가장 큰 값부터 짝지어 주는 방식이 좋다고 본다.
우선 Max값을 고른다. 그리고 최소값이 100 <= 이면 idext를 찾아서 없애주고, count를 올린다.
아니면 Max 값만 골라서 지워주고 count를 올린다. 
그다음 arr.length 0일경우 count 값을 return 한다. 재귀함수는 스택이 너무 높을 것으로...

*/

// function solution(people, limit) {
//   let count = 0;
//   let arr = people.sort((a, b) => b - a);
//   let Leng = arr.length;
//   while (Leng > 0) {
//     if (arr[0] + arr[arr.length - 1] <= limit) {
//       arr.splice(0, 1);
//       arr.splice(arr.length - 1, 1);
//       Leng -= 2;
//     } else {
//       arr.splice(0, 1);
//       Leng--;
//     }
//     count++;

//     console.log(arr, count);
//   }
//   return count;
// }

// 테스트는 통과하였지만 효율성 테스트는 탈락

// splice 메소드가 문제일 수도 있어서, index로 준비
function solution(people, limit) {
  let arr = people.sort((a, b) => b - a);

  let i = 0;
  let min = arr.length;
  while (i < min) {
    if (arr[i] + arr[min - 1] <= limit) {
      i++;
      min--;
    } else {
      i++;
    }
  }
  return i;
}

//220714 refactoring
function solution(people, limit) {
  let lastNum = people.length - 1;
  let arr = people.sort((a, b) => b - a);
  console.log(arr, lastNum);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > lastNum) return count;
    if (arr[i] + arr[lastNum] <= limit) {
      lastNum--;
    }
    count++;
  }
  return count;
}

function solution(people, limit) {
  let arr = people.sort((a, b) => b - a);
  let i = 0;
  let last = people.length - 1;
  while (i <= last) {
    if (arr[i] + arr[last] <= limit) {
      i++;
      last--;
    } else {
      i++;
    }
  }

  return i;
}
