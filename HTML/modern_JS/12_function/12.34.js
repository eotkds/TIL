// 익명 즉시 실행 함수
// 함수를 정의하고 바로 실행하는 것을 의미한다.
(function () {
    var a = 10;
    var b = 20;
    return a * b;
})(); // 200

// 기명 즉시 실행 함수
// 함수를 정의하고 바로 실행하는 것을 의미한다.
(function foo() {
    var a = 10;
    var b = 20;
    return a * b;
})(); // 200

// foo(); 
// ReferenceError: foo is not defined

// function bar (){

// }(); 
// SyntaxError: Unexpected token ')'
//=> function bar (){};(); 와 같다.