// 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수.
// 수열의 최대값을 인수로 전달받는다.

const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메서드를 구현한 이터러블을 반환한다.
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return { value: cur, done: cur >= max };
                }
            };
        }
    };
}

// 이터러블을 반환하는 함수에 수열의 최대값을 인수로 전달하면서 호출한다.
// fibonacciFunc(10)은 이터러블을 반환한다.
for (const num of fibonacciFunc(10)) {
    console.log(num); // 1 2 3 5 8
}   


const iterable = fibonacciFunc(5);
// 이터러블의 Symbol.iterator 메서드는 이터레이터를 반환한다.
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 5, done: true }
console.log(iterator.next()); // { value: undefined, done: true }
