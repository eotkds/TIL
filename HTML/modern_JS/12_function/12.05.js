// 함수 선언문
function add(x, y) {
    return x + y;
}

//함수 참조
console.dir(add); // [Function: add]
console.log(add(2, 3)); // ?

// 같은 이름의 함수 선언문이 중복해서 정의되면 에러가 발생할까?
function add(x, y) {
    return x + y + 2;
} // 오버라이드 된다.
console.log(add(2, 3)); // ?


// 함수 선언문은 함수 이름을 생략할 수 없다.
// 함수 선운문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.

var f = function add(x, y) {
    return x + y;
};

console.log(f(1, 2)); //3
