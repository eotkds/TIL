/**
220824 성격유형검사하기 풀이
 */
//Solve : forEach나 map을 활용한 것이 눈에 띄어 신기!
function solution(survey, choices) {
  const choice = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };
  const personality = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  let answer = "";
  //채점
  for (let i = 0; i < survey.length; i++) {
    let score = choice[choices[i]];
    if (choices[i] < 4) {
      personality[survey[i][0]] += score;
    }
    if (choices[i] > 4) {
      personality[survey[i][1]] += score;
    }
  }

  //진단
  const pType = ["RT", "CF", "JM", "AN"];

  for (let i = 0; i < pType.length; i++) {
    let score1 = personality[pType[i][0]];
    let score2 = personality[pType[i][1]];

    if (score1 < score2) {
      answer += pType[i][1];
    } else {
      answer += pType[i][0];
    }
  }

  return answer;
}
