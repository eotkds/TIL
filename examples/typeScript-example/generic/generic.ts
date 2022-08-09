export {};

function f1(a: number, size: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(a);
  }
  return arr;
}

function f2(a: string, size: number): string[] {
  const arr: string[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(a);
  }
  return arr;
}
