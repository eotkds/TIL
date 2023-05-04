class Base {
    constructor() {
        this.name = 'Base';
    }

    sayHi() {
        return `Hi, ${this.name}!`;
    }
}

class Derived extends Base {
    // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
    sayHi = () => `${super.sayHi()}. How are you doing?`;
}

const derived = new Derived();
console.log(derived.sayHi()); // Hi, Base! How are you doing?