const obj = {
    x : 1, 
    // foo는 메서드다.
    foo() { return this.x; },
    // bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
    bar : function() { return this.x; }
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

console.log(new obj.bar()); // bar {}
console.log(new obj.foo()); // TypeError: obj.foo is not a constructor

obj.foo.hasOwnProperty('prototype'); // false
obj.bar.hasOwnProperty('prototype'); // true