export {};

class Dog {
  constructor(public name: string) {}

  static staticMethod() {
    return `this is static`;
  }

  generalMethod() {
    return this.name;
  }
}

console.log(Dog.staticMethod());

const dog1 = new Dog("Maltese");
// console.log(dog1.staticMethod()); //error

class Person {
  static personNum = 0;
  constructor() {
    //생성자 호출시 증가
    Person.personNum++;
  }
}

console.log(Person.personNum);
const person1 = new Person();
const person2 = new Person();
console.log(Person.personNum);
