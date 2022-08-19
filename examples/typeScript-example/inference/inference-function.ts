export {};

function f1(a = 1, b = "five") {
  return `${a} : ${b}`;
}

let a1 = f1(3, "three"); // a1: string

// console.log(f1("two", 2)); // Error

function f2(x: number) {
  if (x > 10) {
    return x;
  } else {
    return `${x} is too big`;
  }
}

//??
function f3(x: number) {
  if (x > 10) {
    return x;
  } else {
    return "number is too big";
  }
}
