// Bad
class Person {
    name = 'Max';
    sayHi = () => console.log(`Hi, ${this.name}!`);
};

const person = new Person();
person.sayHi(); // Hi, Max!