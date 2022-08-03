"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name) {
        this.name = name;
    }
    static staticMethod() {
        return `this is static`;
    }
    generalMethod() {
        return this.name;
    }
}
console.log(Dog.staticMethod());
const dog1 = new Dog("Maltese");
// console.log(dog1.staticMethod());
