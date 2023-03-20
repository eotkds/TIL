// this 바인등 함수 호출 방식에 따라 결정
const foo = function () {
    console.dir(this);
};

// 일반 함수로서 호출
foo(); // window

// 2. 메서드로서 호출
const obj = { foo };
obj.foo(); // obj

//3. 생성자 함수로서 호출
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드로서 호출
const bar = { name: 'bar' };
foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar