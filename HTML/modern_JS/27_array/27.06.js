const arr = [1, 2, 3];

arr.constructor === Array; // true
Object.getPrototypeOf(arr) === Array.prototype; // true

console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
// {
//   '0': { value: 1, writable: true, enumerable: true, configurable: true },
//   '1': { value: 2, writable: true, enumerable: true, configurable: true },
//   '2': { value: 3, writable: true, enumerable: true, configurable: true },
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }
