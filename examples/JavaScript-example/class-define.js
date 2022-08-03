//Define
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`I'm ${this.name}`);
  }
}

const cat = new Animal("nyang");
cat.sayHello();

console.log(cat.constructor === Animal);

const dog = Animal("ddoddo");

//Initialize Instance
class Person {
  constructor(name = "Parker") {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name}`);
  }
}

const p1 = new Person();
console.log(p1);
p1.sayHello();
p1.name = "Mark";
p1.sayHello();
console.log(p1);
const p2 = new Person();
console.log(p2);
