export {};

abstract class Animal {
  constructor(public name: string) {}

  getName(): void {
    console.log(`${this.name}`);
  }

  abstract sayHello(): void;
}

class Dog extends Animal {
  bark() {
    console.log("Mung!");
  }

  sayHello() {
    console.log("Hello");
  }
}

// const animal1 = new Animal("Maltese");
const dog1 = new Dog("ddoddo");
dog1.sayHello();
dog1.getName();
// class Person {
//   static personNum = 0;
//   constructor() {
//     //생성자 호출시 증가
//     Person.personNum++;
//   }
// }

// console.log(Person.personNum);
// const person1 = new Person();
// const person2 = new Person();
// console.log(Person.personNum);
