// 수퍼클래스
class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

// 서브클랙스
class Derived extends Base {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}

const derived = new Derived(1, 2, 3);
console.log(derived); // Derived { a: 1, b: 2, c: 3 }