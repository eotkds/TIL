const set = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5]);

console.log(set);

console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));
// {get: ƒ, set: undefined, enumerable: false, configurable: true}


set.size = 100; // set.size is read-only
console.log(set.size); // 5

set.forEach((v, v2, set) => console.log(v, v2, set));

// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set); // true
