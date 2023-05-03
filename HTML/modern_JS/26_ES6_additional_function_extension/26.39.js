// Bad
const person = {
    name: 'Max',
    sayHi: () => console.log(`Hi, ${this.name}!`)
};

// sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역 객체를 가리킨다.
person.sayHi(); // Hi, undefined!