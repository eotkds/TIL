/*
문자열 다루기 기본
문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
입출력 예
s	return
"a234"	false
"1234"	true
*/

function solution(s) {
    for(key of s){
        if(!Number.isInteger(key/1)){
            return false
        }
    }
    return true 
}
    

function solution(s) {

    if(s.length === 4 || s.length === 6){
        if(Number(key/1)){
            return true
        }
        return false

        }

    }   


    //여기가 최종 정답 길이를 집어 넣었다.
function solution(s) {

    if(s.length === 4 || s.length === 6){
        for(key of s){
            if(!Number.isInteger(key/1)){
                return false
            }
        }
        return true 
        }
        return false
    }   
// 그러나 문제는 왜 작동되는지 모른다.

//다르사람들의 풀이
//하지만 다시 채점하면 되지 않는다.
function solution(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false
} 



//멘토님이 풀은 방식
//isNaN
//1. 해당 데이터가 NaN 값을 갖는지 판단
//2. 출력 값이 false 일 때는 숫자가 맞다.
//3. true 일 때는 NaN값이 맞다
// Number.isNaN : 해당 데이터가 숫자 이면서 NaN값이 맞는지 확인

function solution(s) {

    if(s.length === 4 || s.length === 6){
      return false
    }
    for(let i = 0; i < s.length; i++){
        if(isNan(s[i]) ===tre){
            return false
        }
    
    }
return true

}
// s = "a123"

// solution(s)