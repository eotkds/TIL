// 이터러블
const iterable = [1, 2, 3];

// 이터러블 Symbol.iterator 메서드를 호출하여 이터레이터를 생성한다.
const iterator = iterable[Symbol.iterator]();

for(;;){
    // 이터레이터의 next 메서드를 호출하여 이터러블을 순회한다.
    // 이때 next 메서드는 이터레이터 리절트 객체를 반환한다.
    const res = iterator.next();

    // next 메서드가 반환한 iterator result object의 done 프로퍼티 값이 true이면 이터러블의 순회를 중단한다.
    if(res.done) break;

    // iterator result object의 value 프로퍼티 값을 취득하여 출력한다.
    console.log(res.value);
}