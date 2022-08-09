export {};

function f1<T extends number | string>(a: T): T {
  return a;
}

console.log(f1(1));
console.log(f1("a"));
// console.log(f1(true));
