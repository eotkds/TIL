export {};

//ReturnType
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type T1 = ReturnType<() => string>; // type T1 = string

function f1(s: string): number {
  return s.length;
}

type T2 = ReturnType<typeof f1>; // type T2 = number

declare function f2(): { a: number; b: string };
type T3 = ReturnType<typeof f2>; // type T3 = { a: number; b: string }
type T4 = ReturnType<string>; // type T4 = any
