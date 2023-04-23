// 카운트 상태 변경 함수
const increase = (function() {

    // 카운트 상태를 유지하기 위한 자유 변수
    let num = 0;

    // 클로저를 반환
    return function() {
        return ++num;
    };
}());

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
