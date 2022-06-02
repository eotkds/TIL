/*
이상한 문자 만들기
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 
구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 
소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 
판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
입출력 예
s	return
"try hello world"	"TrY HeLlO WoRlD"
입출력 예 설명
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 
"TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

 */
function solution(s) {
 
  
	var answer = s.split(' ').map((ele,i) => {
    
    let word = []
    for(let j = 0 ; j < ele.length ; j++){
     
      if(j % 2 === 0){
        word.push(ele[j].toUpperCase())
      }else{
        word.push(ele[j].toLowerCase())
      }
    }
    return word.join('')
  
  })  

    return answer.join(' ');
}

// 다른 방법
function toWeirdCase(s){
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
  
  }

  // 정규식 표현을 확인해 봐야 한다. 
  // 문제를 정확하게 이해하고 적용한 방식일 수 있다. 
  //대문자, 소문자, 대문자 순으로 가기 때문에 짝 홀과 무관하게 적용 시켰다.
  // 그렇기 때문에 마지막 남은 문자가 짝수(인덱스상)라면 대문자가 된다.
//   그래서 모둔 대문자로 바꿔준 후 두글자만 바꿔주었다.

