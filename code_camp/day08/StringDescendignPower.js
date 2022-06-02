/*
문자열 내림차순으로 배치하기
문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
입출력 예
s	return
"Zbcdefg"	"gfedcbZ"
*/


s= '123'

function solution(s) {
    let answer = Array(s.length).fill("")
  	
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length-1-i; j++){
          
            if(s[j] >= s[j+1]){
              answer[i] = s[j]
              answer[i+1]=s[j+1]
            }else{
             answer[i] = s[j+1]
            answer[i+1]=s[j]
            }
        }
      
    }
    return answer.join("");
}
solution(s)

// 실행은 되지만 너무 비효율적인 방식이라 채점이 안 되었다.
// sort() 메소드를 구글링 하여 찾아서 적용해 보았다.
// 함수 리턴 값이 음수 이면 a , b 중 가 앞으로 가도록 정렬한다. => 오름차순
// 함수 리턴 값이 양수 이면 a, b 중 b가 앞으로 가도록 정렬한다. => 내림차순 
// 0을 리턴하면 순서를 변경하지 않는다. 


// 해당 솔루션은 내림차순을 해야 했다.

s= '123'
let arr = s.split('').sort((a,b) => {
    if(a<b) return 1   //b 가 앞으로 가야 한다.
    if(a>b) return -1  //a 가 앞으로 가야 하기 때문에 음수를 반환한다.
    if(a === b) return 0
  })
  arr.join('')