// "use strict";

// var NaN = 5;
// var undefined = 4;
// var Infinity = 5;

// console.log(NaN);
// console.log(undefined);
// console.log(Infinity);

// i = 7;
// let a = [1, 2, 3, 4, 5];
// function cc(x) {
//   console.log(this);
//   return x > 3;
// }
// let bb = a.filter(
//   cc,
//   a.map((el) => el * 2)
// );
// console.log(bb);

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

//함수 호출에 따라 다른 결과가 나온다.
// const module = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX1 = module.getX;
// console.log(unboundGetX1()); // undefined

// const unboundGetX2 = module.getX();
// console.log(unboundGetX2); // 42
//return 값까지 불러오냐의 차이라고 생각한다. 런타임이 언제 되는지 고려!

// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX());

// var x = 'global';

// function foo () {
//   var x = 'function scope';
//   console.log(x);
//   console.log(arguments)
// }

// foo(); // ?
// // console.log(x); // ?

// let bb = [].slice.call({'0':1,'1':2})
// let cc = Array.prototype.slice.call({0:1, 1:2,length:2})
// cc
// console.log(Array.prototype)
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkj: while (j > 4) {
    console.log("j: " + j);
    j -= 1;

    if (j % 2 == 0) continue checkj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}

test1: for (let i = 0; i < 3; i++) {
  console.log(`i = ${i} 일 때,`);
  for (let j = 0; j < 2; j++) {
    if (i === 1) {
      console.log(`건너뜁니다.`);
      continue test1;
    }
    console.log(`j가 ${j} 일 때, (i,j) = (${i}, ${j})`);
  }
  console.log("입니다.");
}
