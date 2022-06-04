/*
완주하지 못한 선수
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 
participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
입출력 예
participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에
 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만,
 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 
완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

*/
/*
1. 등록 명단과 완료한 명단을 비교하려고 했는데 동명 이인이 있기 때문에 고민해봐야 한다.

2. completion 이 하나 적기 때문에, ... 중복된 값을 먼저 처리하는 방법을 먼저 고안해 보자.

3. 찾아보니깐 includes에 from index라는 설정값이 있고, indexOf는 첫번째 인덱스 값을 발견한다.

4. participant 와 completion 을 비교하여 participant 첫번째 값이 completion과 ture 이면,
participant 에서 비교값을 제거, 하면 안됨 같이 지워져야 하는데 누군가는 첫번째 값을 지워줄 수 있다면
비교값은 어떻게 지울지에 대해 

5. index of 값이 -1 나오면 완주 못한 사람

6. 중복 값이면  [1,2,2,3] [1,2,3] => [2,2,3] [2,3] =>
[2,3] [3] 
// indexof 0 아니기 때문에 participant만 앞을 지워 준다. 


*/
function solution(participant, completion) {
  let participant1 = participant.sort();
  let completion1 = completion.sort();
  let answer = "";

  let i = 0;

  while (i <= participant1.length) {
    if (participant1[i] !== completion1[i]) {
      answer += participant1[i];
      break;
    }
    i++;
  }

  return answer;
}

// 정규식 포함 해서 정리 해보자
/*
간단하지만 map과

var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
 */

// 알고보니 정규식 표현도 아니었다.

let aaa = ["a", "b", "b", "d"];
let bbb = ["a", "b", "b"];

let = ccc = bbb.map((name) => {
  bbb[name] = (bbb[name] | 0) + 1;
});
/// (bbb[name] | 0) bbb[name]  이 Undefined 면 0 이고, true 이면 +1

console.log(bbb);

let result = aaa.find((_) => !bbb[_]--);

console.log(result);

//220604
function solution(participant, completion) {
  let pp = participant;

  for (key of completion) {
    let idx = pp.indexOf(key);
    pp.splice(idx, 1);
  }
  return pp[0];
}

//효율성 테스트 실패로 리팩토링
function solution(participant, completion) {
  let pp = participant;

  completion.forEach((x) => {
    pp.splice(pp.indexOf(x), 1);
  });
  return pp[0];
}

//효율성 테스트 리팩토링2 no 메소드
/*
참가자의 completion 횟수를 하려고 한다.
그럼 참가자 1명당 reduce를 메소드 같은 것을 써야 한다.
indexOf와 차이가 없다.

중복값을 어떻게 잡을지가 고민이다.
*/
function solution(participant, completion) {}
