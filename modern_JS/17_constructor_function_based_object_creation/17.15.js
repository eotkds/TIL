// 일반 함수 정의 : 함수 선언문, 함수 표현식
function foo(){}
const bar = function(){};
// 프로퍼티 x의 값으로 할당된 것은 함수로 정의된 함수도. 이는 메서드로 인정하지 않는다.
const baz = {
    x: function(){}
};

// 일반 함수로 정의된 함수만이 constructor다.
let a1 = new foo(); // foo{}
let a2 = new bar(); // bar{}
let a3 = new baz.x(); // x{}
console.log(a1, a2, a3);

// 화살표 함수 정의
const arrow = () => {};

// new arrow(); // TypeError: arrow is not a constructor

//메서드 정의: ES6의 메서드 축약만 메서드로 인정한다.
const obj = {
    x() {}
};

let a4 = new obj.x(); // TypeError: obj.x is not a constructor
console.log(a4);