const numObj = new Number();

console.log(numObj); // [Number: 0]

let numObj2 = new Number('123');
console.log(numObj2); // [Number: 123]

let numObj3 = new Number('123abc');
console.log(numObj3); // [Number: NaN]


// 문자열 타입 => 숫자 타입
console.log(Number('123')); // 123
console.log(Number('123abc')); // NaN
console.log(Number('')); // 0
console.log(Number('-1')); // -1
console.log(Number('0x11')); // 17

// 불리언 타입 => 숫자 타입
Number(true); // 1
Number(false); // 0


