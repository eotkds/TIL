/*
시저 암호
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
입출력 예
s	n	result
"AB"	1	"BC"
"z"	1	"a"
"a B z"	4	"e F d"
*/
/*
우선 split 으로 쪼갠다음 
charCodeAt 메소드를 이용해보자 // 숫자가 나오면
65~90은 대문자 
90에서 +1을 한 한경우 65가 나오려면
차이만큼 나눈 수의 나머지가 나오면 될 것이다. 예를 들어
 + 3은 
65 3 % 26
B + 1은  C가 나와야한 한다
66 -65 는 현재 위치 값 = +1, 추가 이동할 값(n + 현재 절대 위치 값) % 26 = +2 // C 가 나온다

97~122는 소문자

숫자가 나오면 String.fromCHarCode() 메소드를 이용하여 단어를 만들어도 좋겠다


3. 그중 숫자에 속하지 않는 값은 그대로 분출한다.
3. 숫자를 n값을 더하여 바꾼다음
4. 숫자 배열을 만들어 주고
5. 그대로 String.fromHarCode() 메서드에 스프레드 연산자를 하는 것이 편리 할 것 같다.

*/

function solution(s, n) {
  let arr = [];
  let N = 0;
  for (i = 0; i < s.length; i++) {
    let word = s.charCodeAt(i);

    console.log(word, N);
    if (word >= 65 && word <= 90) {
      N = (word - 65 + n) % 26;
      arr.push(65 + N);
    } else if (word >= 97 && word <= 122) {
      N = (word - 97 + n) % 26;
      arr.push(97 + N);
    } else {
      arr.push(word);
    }
  }

  let answer = String.fromCharCode(...arr);
  return answer;
}
