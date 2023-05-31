const user = { firstName: 'John', lastName: 'Doe', age: 18 };

// 프로퍼티 키를 기준으로 destructuring assignment를 수행한다.
const { firstName: fn, lastName: ln, age: a } = user;
console.log(fn); // John
