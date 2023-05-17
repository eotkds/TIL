// Object.create는 정적 메소드다.
const obj = Object.create({ name: 'Lee' });

// Object.prototype.hasOwnProperty는 프로토타입 메소드다.
console.log(obj.hasOwnProperty('name')); // false


// 작동 여부를 확인하기 위한 것이 아니었다!
console.log(obj.name); // Lee


function Foo() { }

// 프로토타입 메서드
// this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있다.
Foo.prototype.method = function () {
    console.log('method');
};

const foo = new Foo();
foo.method(); // method

// 정적 메서드
Foo.method = function () {
    console.log('method');
};

// 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
Foo.method(); // method
