export {};

function f1<T>(a: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(a);
  }
  return arr;
}

const a1 = f1<number>(1, 5);
const a2 = f1<string>("a", 10);

const a3 = f1("z", 10);
const a4 = f1(5, 10);
