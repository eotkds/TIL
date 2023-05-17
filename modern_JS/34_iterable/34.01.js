const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

// 배열, 문자열 , Map, Set은 이터러블이다.
console.log(isIterable([])); // true
console.log(isIterable('')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log({}); // false
