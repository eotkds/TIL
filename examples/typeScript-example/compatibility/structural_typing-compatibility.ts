export {};

interface Dog {
  name: string;
  numFeet?: number;
}

interface Bird {
  name: string;
  numFeet: number;
}

let a = { name: "abc" };
let b: Dog = a;

// let d: Bird = a; //Error

interface Pet {
  name: string;
}

interface Cat {
  name: string;
  age: number;
}

let a1 = { name: "a1", age: 3 };
let a2 = { name: "a2", city: "home" };

let b1: Pet = a1;
let b2: Pet = a2;

let b3: Cat = a1;
// let b4: Cat = a2;

// let b5: Pet = { name: "a3", age: 1 };
