/*
문자열 내 p와 y의 개수
문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.
입출력 예
s	answer
"pPoooyY"	true
"Pyy"	false
입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다. */

function solution(s){
    const p = /[p]/gi
      const y = /[y]/gi
      if(s.match(p) === null || s.match(y) === null){
    
        return true
  
      }else if(s.match(p).length === s.match(y).length ){
    
        return true
      }
  return false
  }
// 코드는 실행 되었으나 null값이 p, y 둘중 하나라도 나와버리면 오류가 되는거 같다
//null 값을 걸러내는 것을 추가 하였다.

function solution(s){
    const p = /[p]/gi
    const y = /[y]/gi
    if(s.match(p) === null && s.match(y) === null){

      return true

    }else if(s.match(p) === null || s.match(y) === null){
       return false
    }else if(s.match(p).length === s.match(y).length){
      return true
    }
  return false
}

// 프로그래머스 정답
function solution(s){
    //함수를 완성하세요
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }

// 이전에 null값이 문제였기 때문에 null 값을 boolean으로 바꾸는 
// 생각의 전환이 필요 하였다. 
// 또한 split은 해당 조건이 을 만족하면 조건 (여기서는 한글자)을 만족하면
// 쪼개 주기 때문에 length 값은 같았다 
// 없는경우는 같은 배열을 return 하였기때문에 true에 동일하였다.


// 위 match를 이용하여  boolean 으로 넘긴다면 더 간결하게 만들수 있겠다. 

function solution(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
  }


  
  s = 'pPYy'
  
solution(s)