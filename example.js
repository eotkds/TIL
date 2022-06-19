// "use strict";

var NaN = 5;
var undefined = 4;
var Infinity = 5;

console.log(NaN);
console.log(undefined);
console.log(Infinity);

i = 7;
let a = [1, 2, 3, 4, 5];
function cc(x) {
  console.log(this);
  return x > 3;
}
let bb = a.filter(
  cc,
  a.map((el) => el * 2)
);
console.log(bb);

// let a = [1,2,3,4,5]
// let bb = a.filter(function(x){
//   console.log(this)
//   return x>3
// },a.map(x=>x*2))
// function ff(a,b){
//   // 'use strict'
//   a = 42;
//   return [a, arguments];
// }
// var pair = ff(17,22)

// 'use strict'
// this.bb = 3
// console.log(this)

// function fun(a){
// 	console.log(this)
//   return
// }

// fun(3)

// const obj = {
//   name: 'console',
//   sayName(){
//     console.log(this.name)
// 	const inner = () => {
//       console.log(this.name); // console
//     }
//     inner();
//   }
// }

// obj.sayName();
// var obj = {a: 'Custom'};

// // 변수를 선언하고 변수에 프로퍼티로 전역 window를 할당
// var a = 'Global';

// function whatsThis() {
//   return this.a;  // 함수 호출 방식에 따라 값이 달라짐
// }

// whatsThis.apply(obj)
