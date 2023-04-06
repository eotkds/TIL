// 빈 개체의 생성
const person = new Object();

// 프로퍼티의 추가
person.name = 'Lee';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: "Lee", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee

