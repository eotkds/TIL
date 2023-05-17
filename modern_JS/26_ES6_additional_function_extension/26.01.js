var foo = function () {
    return 1;
};

// 일반적인 함수로서 호출
console.log(foo()); // 1

// 생성자 함수로서 호출
console.log(new foo()); // foo {}

// 메서드로서 호출
const obj = {
    bar : foo
};
console.log(obj.bar()); // 1
