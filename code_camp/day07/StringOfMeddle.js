// 짝수를 2로 나눈 것중 가장 마지막 요소와 그다음요소(나눈 것중 첫 번째요소)를 생각했다.

function solution(s) {
    return Math.ceil(s.length/2) === s.length/2 ? s[Math.ceil(s.length/2)-1]+s[Math.ceil(s.length/2)]: s[Math.ceil(s.length/2)-1];
}

//프로그래머스 보고 리팩토링

function solution(s) {
    const leng = Math.ceil(s.length/2)
    return leng === s.length/2 ? s[leng-1]+s[leng]: s[leng-1];
}

//substr 메소드를 알아보고 적용 하려 했으나, 더 이상 사용하지 않는 메소드라고 해서 넘어간다.function solution(s) {
//대신 더 간결한 방법이 있는거 같아 참고삼아 적어 놓는다.    
function solution(s) {
        const leng = Math.ceil(s.length/2)
        return s.length/2 % 2 === 0 ? s[leng-1]+s[leng]: s[leng-1];
    }