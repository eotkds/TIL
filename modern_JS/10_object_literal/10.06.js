var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';

console.log(obj); // {hello: "world"}


//빈 문자열도 프로퍼티 키로 사용할 수 있다.
var foo = {
    '': 'empty string'
};

console.log(foo); // {"": "empty string"}

