// 함수는 객체다.
function foo() { }

//함수는 객체이므로 프로퍼티를 가질 수 있다.
foo.name = 'foo';

// 함수는 객체이므로 메서드를 가질 수 있다.
foo.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

foo.sayHello(); // Hi! My name is foo


// 일반 함수로서 호출: [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
const inst = new foo();  