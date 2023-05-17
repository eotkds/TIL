// 일반 객체의 __proto__ 는 접근자 프로퍼티다.
let descriptor = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
console.log(descriptor); // {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 함수 객체의 prototype 프로퍼티는 데이터 프로퍼티다.
descriptor = Object.getOwnPropertyDescriptor(function () { }, 'prototype');
console.log(descriptor); // {value: {…}, writable: true, enumerable: false, configurable: false}