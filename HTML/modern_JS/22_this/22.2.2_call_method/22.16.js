function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('John');

//getName 메서드를 호출한 객체는 me이다.
console.log(me.getName()); // John


Person.prototype.name = 'Bob';

console.log(Person.prototype.getName()); // Bob
