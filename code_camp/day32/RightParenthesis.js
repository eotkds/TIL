/*
올바른 괄호
문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 
문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 
올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 
false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
입출력 예
s	answer
"()()"	true
"(())()"	true
")()("	false
"(()("	false
입출력 예 설명
입출력 예 #1,2,3,4
문제의 예시와 같습니다.

*/
/*


*/

function solution(s) {
  const regexp = RegExp(/\(\)/, "g");
  const IsTrue = (str) => {
    if (regexp.test(str)) return IsTrue(str.replace(regexp, ""));
    // console.log(str);
    if (str === "") {
      return true;
    } else {
      return false;
    }
  };
  return IsTrue(s);
}

//효율성 테스트에서 못 통과 // while 문으로 리팩토링

function solution(s) {
  const regexp = RegExp(/\(\)/, "g");
  while (regexp.test(s)) {
    s = s.replace(regexp, "");
  }

  return s === "" ? true : false;
}

// 효율성 테스트 에서 통과가 안되어 다시 리팩토링

/*

((( 갯수만큼 다음 ))) 이 와야 가능하다. 
처음 ( 개수를 count 다음 )개수 개수를 카운트를 뺀다 마이너스 값이 나오면 false
배열 마지막 다 보면 끝

*/

function solution(s) {
  let arr = s.split("");
  let count = 0;

  arr.forEach((key) => {
    if (key === "(") count++;
    if (key === ")") count--;

    if (count < 0) return false;
  });

  if (count !== 0) return false;
  return true;
}

// 이것도 효율성 테스트에서 떨어진다.
//일반 for문으로 돌려서 통과했다고 해서 리팩토링

function solution(s) {
  let arr = [...s]; // 기존 split을 썼지만 다른 홈피를 참고하여 봐꿨다.
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count++;
    } else {
      count--;
    }

    if (count < 0) return false;
  }
  if (count !== 0) return false;
  return true;
}
