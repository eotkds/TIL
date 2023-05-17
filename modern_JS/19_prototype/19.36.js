const Person = (function () {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}`);
    };

    return Person;
}());

const me = new Person('Lee');

// 인스턴스 메서드
me.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. You can call me Mr. Lee.`);
};

// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHi(); // Hi! My name is Lee. You can call me Mr. Lee.

// 인스턴스 메서드를 삭제한다.
delete me.sayHi;

// 인스턴스에는 sayHi 메서드가 없으므로 프로토타입 메서드가 호출된다.
me.sayHi(); // Hi! My name is Lee

// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
delete me.sayHi;
// 프로토타입 메서드가 호출된다.
me.sayHi(); // Hi! My name is Lee

// 프로토타입 메서드 변경
Person.prototype.sayHi = function () {
    console.log(`Hey! My name is ${this.name}.`);
};
me.sayHi(); // Hey! My name is Lee

// 프로토타입 메서드 삭제
delete Person.prototype.sayHi;
me.sayHi(); // TypeError: me.sayHi is not a function
