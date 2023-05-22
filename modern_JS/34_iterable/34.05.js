// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const arr = [10, 20, 30];

// Symbol.iterator 메서드는 이터레이터를 반환한다.
const iterator = arr[Symbol.iterator]();

// Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
console.log('next' in iterator); // true

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
// iterator result object는 value와 done 프로퍼티를 갖는 객체다.
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
