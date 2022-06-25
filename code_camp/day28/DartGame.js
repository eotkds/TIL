/*
[1차] 다트 게임
문제 설명
다트 게임
카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~

Game Star

카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 
다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로,
 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다.
 다트 게임의 점수 계산 로직은 아래와 같다.

다트 게임은 총 3번의 기회로 구성된다.
각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 
각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 
아차상(#) 당첨 시 해당 점수는 마이너스된다.
스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

입력 형식
"점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
예) 1S2D*3T

점수는 0에서 10 사이의 정수이다.
보너스는 S, D, T 중 하나이다.
옵선은 *이나 # 중 하나이며, 없을 수도 있다.
출력 형식
3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
예) 37

입출력 예제
예제	dartResult	answer	설명
1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
2	1D2S#10S	9	12 + 21 * (-1) + 101
3	1D2S0T	3	12 + 21 + 03
4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
6	1T2D3D#	-4	13 + 22 + 32 * (-1)
7	1D2S3T*	59	12 + 21 * 2 + 33 * 2
*/
/*
숫자 뒤에 S D T는 제곱을 의미한다
S 1제곱
D 2제곱
T 3제곱

그다음 옵션은 #경우 해당 라운드 -1 곱하기
*의 경우 해당 라운드와 이전 라운드 까지 * 2로 구성한다. 
-> 각라운드에서 찾은다음 적용?
-> *인 경우만 찾고 앞에 숫자 2개에 대서 * 2를 적용하면 어떨까?

->*의 위치를 확인하여 1번일 경우 1라운드만 *2
->2번일 경우 1라운드 2라운드 *2
-> 3번일 경우  2,3라운등 *2 로 중첩 시키자


각 라운드는 숫자 앞으로 정의 하려고 한다. 

각라운드 점수 합산

각라운드 * 적용
마지막으로 # 적용
총 합

특수문자를 실행하는 단계를 적용시키기가 어려워 배열로 만들기로


*/

let dartResult = "1D#2S*10S";
// let SDT = dartResult.replace(/\d|\*|\#/g, "");
// let s = dartResult.replace(/\d/g, "");
// let shap = dartResult.replace(/S|D|T|\*/g, "");
// let score = dartResult.match(/\d.?\D/g);
// let temp = dartResult.match(/\*|\#/g, "");
// let answer = [];

// let regExp = /\*|\#/g
// regExp.test(dartResult)

// SDT
// score[2].match(/(\d{1})([SDT])([#*])?/);

// s
// shap
// temp

// let arr = []
// for(let j = 1; j <= 9; j++){
//   if(j % 3 === 0 && regExp.test(dartResult[j-1])){
//     answer.push(dartResult[j-1])
//   }

// }

// dartResult.replace(/(S|D|T)/g,a => {
//   return a === 'S' ? '**1' : a === 'D' ? '**2' : a === 'T' ? '**3' : " "

// })

// for(let i = 0; i < SDT.length; i++){
//   if(SDT[i] === 'S') answer.push(score[i]**1)
//   if(SDT[i] === 'D') answer.push(score[i]**2)
//   if(SDT[i] === 'T') answer.push(score[i]**3)
// console.log(answer)
// }

function solution(dartResult) {
  let SDT = dartResult.replace(/\d|\*|\#/g, "");
  let score = dartResult.match(/\d{1,2}/g); // 10점을 실패하여 match로변경
  let round = dartResult.match(/\d.?\D/g); // 각 라운드 regExp 참고!!
  let answer = [];
  for (let i = 0; i < 3; i++) {
    if (SDT[i] === "S") answer.push(score[i] ** 1);
    if (SDT[i] === "D") answer.push(score[i] ** 2);
    if (SDT[i] === "T") answer.push(score[i] ** 3);
    if (round[i][2] === "#") answer[i] *= -1;
    if (i === 0 && round[i][2] === "*") answer[i] *= 2;
    if (i > 0 && round[i][2] === "*") {
      answer[i] *= 2;
      answer[i - 1] *= 2;
    }
  }
  console.log(round[2].match(/(^\d{1,})(S|D|T)(\*|#)?/));
  return answer.reduce((a, b) => a + b);
}

console.log(solution(dartResult));

/*
 round[0].match(/(^\d{1,})(S|D|T)(\*|#)?/) 다른사람 정규식 표현 중 이게 이해가 안갔다

*/

//220624 리팩토링
function solution(dartResult) {
  let round = dartResult.match(/\d{1,2}[S|D|T][\*|\#]*/g);
  let score = [0, 0, 0];

  for (let i = 0; i < round.length; i++) {
    let temp = round[i].match(/(\d{1,2})([S|D|T])([\*|\#]*)/);

    if (temp[2] === "S") {
      score[i] += temp[1] ** 1;
    }
    if (temp[2] === "D") {
      score[i] += temp[1] ** 2;
    }
    if (temp[2] === "T") {
      score[i] += temp[1] ** 3;
    }
    if (temp[3] === "#") {
      score[i] *= -1;
    }
    if (temp[3] === "*") {
      if (i === 0) {
        score[i] *= 2;
      } else {
        score[i] *= 2;
        score[i - 1] *= 2;
      }
    }
  }

  let result = score.reduce((acc, cur) => acc + cur);

  return result;
}
