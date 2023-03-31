//변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};

console.log(f(1, 2)); //3
console.log(add(1, 2)); //ReferenceError: add is not defined
