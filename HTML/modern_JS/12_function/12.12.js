// 함수 참조
console.dir(add); // [Function: add]
console.dir(sub); // undefined - var로 함수 표현식을 정의하면 함수 호이스팅이 발생하지 않는다.

//함수 호출
console.log(add(2, 3)); // 5
console.log(sub(2, 3)); // TypeError: sub is not a function


// 함수 선언문
function add(x, y){
    return x+y;
}

//함수 표현식
var sub = function(x, y){
    return x-y;
};
