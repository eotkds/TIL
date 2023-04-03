// 이 예제는 브라우저 환경에서 실행해야 한다.

//전역 변수
var x = 1;

// 암묵적 전역 변수
y = 2;

// 전역 함수
function foo() { }

// var키워드로 선언한 전역 변수는 전역객체 window의 프로퍼티다.
console.log(window.x); // 1
// 전역객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x); // 1

// 암묵적 전역 변수는 전역객체 window의 프로퍼티다.
console.log(window.y); // 2
console.log(y); // 2

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.foo); // function foo() {}
console.log(foo); // function foo() {}


let z = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.z); // undefined
console.log(z); // 1