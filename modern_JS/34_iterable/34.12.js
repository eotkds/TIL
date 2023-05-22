// 피보나치 수열을 구현한 사용자 정의 이터러블
let fibonacci = {
    // Symbol.iterator 메서드를 구현해 이터러블 프로토콜을 준수한다.
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        let max = 10; // 최대값


        // Symbol.iterator 메서드는 next 메서드를 가진 객체를 반환해야 한다.
        // next 메서드는 이터레이터 리절트 객체를 반환해야 한다.
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { value: cur, done: cur >= max };
            }
        };
    }
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출된다.
for (const num of fibonacci) {
    console.log(num); // 1 2 3 5 8
}   
