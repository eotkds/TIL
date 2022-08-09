export {};

function f1(a: number, size: number): number[];
function f1(a: string, size: number): string[];
function f1(a: number | string, size: number): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(a);
  }
  return arr;
}
