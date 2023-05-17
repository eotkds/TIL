const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
console.log(Object.getPrototypeOf(obj)); // Object {}

// obj 객체의 프로토타입을 parent 객체로 설정
Object.setPrototypeOf(obj, parent);

console.log(Object.getPrototypeOf(obj)); // { x: 1 }
