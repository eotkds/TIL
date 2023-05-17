const o = {x: {y: 1}};

//얕은 복사
const c1 = {...o};
console.log(o);
console.log(c1);
console.log(c1 === o); //false
console.log(c1.x === o.x); //true
//객체중  어느 한쪽이라도 변경되면 둘다 변경된다.
o.x.y = 5;
console.log("o.x.y = 5;");
console.log(o);
console.log(c1);
c1.x.y = 7;
console.log("c1.x.y = 7;");
console.log(o);
console.log(c1);

const _ = require('lodash');
//깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); //false
console.log(c2.x === o.x); //false
o.x.y = 10;
console.log(o);
console.log(c2);