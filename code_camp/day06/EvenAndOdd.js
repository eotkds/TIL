/*
짝수와 홀수
문제 설명
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.
입출력 예
num	return
3	"Odd"
4	"Even"
*/

function solution(num) {
    if(num % 2 === 0){
        return'Even'
    }
    return'Odd'
   
}

// 삼항 연사자를 통한 풀이
// 주의 : 삼항 연사자는 연속으로 쓸경우 가독성이 떨어지기 때문에 한번만 사용!ㅊㅊ


function solution(num) {
    return num % 2 ? 'Odd' : 'Even'
}

num=4
console.log(solution(num))

// '=== 0' 을 넣을 수도 있는데 0이라는 것은 
// Falsy한 값이기 때문에 생략도 가능할 것같다.
