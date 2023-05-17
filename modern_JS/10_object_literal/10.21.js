// ES5
var prefix1 = 'prop';
var i1 = 0;
var obj1 = {};

//계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj1[prefix1 + '-' + ++i1] = i1;
obj1[prefix1 + '-' + ++i1] = i1;
obj1[prefix1 + '-' + ++i1] = i1;

console.log(obj1); // {prop-1: 1, prop-2: 2, prop-3: 3}

// ES6
const prefix2 = 'prop';
let i2 = 0;
const obj2 = {};

//계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj2[`${prefix2}-${++i2}`] = i2;
obj2[`${prefix2}-${++i2}`] = i2;
obj2[`${prefix2}-${++i2}`] = i2;

console.log(obj2); // {prop-1: 1, prop-2: 2, prop-3: 3}




