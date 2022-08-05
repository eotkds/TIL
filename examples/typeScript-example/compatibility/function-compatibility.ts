export {};

type F1 = (a: number, b: string) => string;
type F2 = (a: number, b: string | number) => string;
type F3 = (a: number) => string;

let f1: F1 = (a, b) => `${a} ${b}`;
let f2: F2 = (a, b) => `${a} ${b}`;
let f3: F3 = (a) => `${a}`;

f1 = f2;

// f2 = f1;

f1 = f3;
// f3 = f1
