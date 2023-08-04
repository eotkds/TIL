// lib.mjs
// 변수의 공개
const pi = Math.PI;

// 함수의 공개
function square(x) {
    return x * x;
}

// 클래스의 공개
class Person {
    constructor(name) {
        this.name = name;
    }
}


// 한번에 export 할 수 있다.
export { pi, square, Person };