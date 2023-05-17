function Person(name){
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHi = function(){
    console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');
const you = new Person('Kim');

me.sayHi(); // Hi! My name is Lee
you.sayHi(); // Hi! My name is Kim


// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty('name')); // true

console.log(Object.getPrototypeOf(me)) // Person { sayHi: [Function] }
console.log(Object.getPrototypeOf(me) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype === Object.prototype)); // true

