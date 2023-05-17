var x = 10; // 전역 변수

function foo() {
    // 선언하지 않은 식별자에 값을 할당
    y = 20; // window.y = 20;
    console.log(x + y);
}

foo(); // 30

console.log(x); // 10
console.log(global.y); // 20

delete x; // 전역 변수 x는 삭제되지 않는다.
delete y; // 전역 변수 y는 삭제된다.

console.log(x); // 10
console.log(global.y); // undefined