let arr = ["a", "b", "c", "d"];
let arr1 = ["a", "b", "c"];

let answer = arr1.map((x) => (arr1[x] = (arr1[x] | 0) + 1));

console.log(arr1);
