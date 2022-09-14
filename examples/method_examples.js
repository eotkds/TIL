//new Array() 예제
let abc1 = new Array(5);
abc1.forEach((x) => console.log(x));
for (let i = 0; i < abc1.length; i++) {
  console.log(abc1[i]);
}

//sort() 예제
const arr1 = ["a", "d", "b", "z", "c"];

arr1.sort(function (a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

arr1.fill();
console.log(arr1);
