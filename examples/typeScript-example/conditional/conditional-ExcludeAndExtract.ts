export {};

//Exclude, Extract

type T1 = number | string | never;
//never는 제외 의미
//T가 U에 할당 가능하면 제외
type Exclude<T, U> = T extends U ? never : T;
type T2 = Exclude<1 | 3 | 5 | 7, 1 | 5 | 9>;

const a1: T2 = 3;
// const a2 : T2 = 1 // Error

type T3 = Exclude<string | number | (() => void), Function>;

type Extract<T, U> = T extends U ? T : never;
type T4 = Extract<1 | 3 | 5 | 7, 1 | 5 | 9>;

const b1: T4 = 1;
// const b2: T4 = 3; // Error

type T5 = Exclude<1 | 2 | 3 | 4, 2 | 3> & 1;
