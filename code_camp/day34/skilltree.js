/*
스킬트리
문제 설명
선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 
썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 
배우려면 먼저 스파크를 배워야 합니다.

위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 
따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 
썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 
매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

제한 조건
스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
스킬 순서와 스킬트리는 문자열로 표기합니다.
예를 들어, C → B → D 라면 "CBD"로 표기합니다
선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
skill_trees는 길이 1 이상 20 이하인 배열입니다.
skill_trees의 원소는 스킬을 나타내는 문자열입니다.
skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
입출력 예
skill	skill_trees	return
"CBD"	["BACDE", "CBADF", "AECB", "BDA"]	2
입출력 예 설명
"BACDE": B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트립니다.
"CBADF": 가능한 스킬트리입니다.
"AECB": 가능한 스킬트리입니다.
"BDA": B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트리입니다.
스킬 트리: 유저가 스킬을 배울 순서 ↩
*/
/*
순서만 맞게 찍었다면 true한 값을 줘야 한다. 
스킬트리에 요소 1첫번째가 현재 skill index 보다 같거나 낮아야 한다. 
없으면 그냥 지나간다. 
*/

let skill = "CBD";

let skill_trees = ["AEF", "ZJW"];

// function solution(skill, skill_trees) {
//   let count = skill_trees.reduce((acc, cur) => {
//     let idx = 0;
//     for (key of cur) {
//       //   if (skill.indexOf(key) === -1) break;
//       //   console.log(skill.indexOf(key), key, idx);
//       if (skill.indexOf(key) > idx) return acc;
//       if (skill.indexOf(key) === idx) idx++;
//     }
//     if (idx < 2) return acc;
//     return acc + 1;
//   }, 0);

//   return count;
// }

// console.log(solution(skill, skill_trees));
// 2, 4, 12 통과

function solution(skill, skill_trees) {
  let count = skill_trees.reduce((acc, cur) => {
    let idx = 0;
    for (key of cur) {
      //   if (skill.indexOf(key) === -1) break;
      console.log(skill.indexOf(key), key, idx);
      if (skill.indexOf(key) > idx) return acc;
      if (key === skill[idx]) idx++;
    }

    return acc + 1;
  }, 0);

  return count;
}

console.log(solution(skill, skill_trees));
//2, 3, 4, 12 통과
// 테스트 케이스 중 스킬트리에 스킬이 없는 케이스를생각하지 못했다.

//220709 리팩토링
function solution(skill, skill_trees) {
  let answer = 0;
  let Rskill = true;
  for (let i = 0, j = 0; i < skill_trees.length; i++) {
    let s_tree = skill_trees[i];
    for (let k = 0; k < s_tree.length; k++) {
      if (skill.includes(s_tree[k])) {
        if (s_tree[k] === skill[j]) {
          j++;
        } else {
          Rskill = false;
          break;
        }
      }
    }
    if (Rskill) answer++;
    j = 0;
    Rskill = true;
  }
  return answer;
}

//리팩토링
