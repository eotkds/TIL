// let arr = ["a", "b", "c", "d"];
// let arr1 = ["a", "b", "c"];

// let answer = arr1.map((x) => (arr1[x] = (arr1[x] | 0) + 1));

// console.log(arr1);

// let name = "Jason";
// function fn1() {
//   console.log(name); //Jason
// }

// function fn2() {
//   let name = "Peter";
//   console.log(name); // Peter
//   fn1();
// }

// fn2();

const Aaa = (x) => {
  console.log(this);
  this.x = x;
  console.log(this);
};

Aaa(20);
