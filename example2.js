function Person(name) {
  this.name = name || "gg";
}
Person.prototype.getName = function () {
  return this.name;
};

function Korean(name) {}

Korean.prototype = new Person();

var kor1 = new Korean();
kor1.getName();

/*
const a = -3
const b = 3
const c = a | b
c.toString(2)
c
// console.log(c)



let ss = '10100000000000000110000000000001'
// parseInt(ss,2)
let num = -(2**31)
num.toString(2)


*/
