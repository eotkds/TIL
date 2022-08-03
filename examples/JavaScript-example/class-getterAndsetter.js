//Getter, Setter
class Num {
  constructor(arr = []) {
    this.arr = arr;
  }
  get getLast() {
    return this.arr.length === 0 ? null : this.arr[this.arr.length - 1];
  }

  set getLast(el) {
    this.arr[this.arr.length] = el;
  }
}

const num = new Num(["a", "b", "c"]);
console.log(num.getLast);
num.getLast = "z";
console.log(num.getLast);
