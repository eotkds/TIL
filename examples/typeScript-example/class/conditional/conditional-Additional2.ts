export {};

type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;
interface Person {
  name: string;
  age: number;
}
type T1 = Overwrite<Person, { age: string; nation: string }>;
const p: T1 = {
  name: "mike",
  age: "23",
  nation: "korea",
};

type T2 = 1 | 2 | 3;
type T3 = 3 | 4 | 5;
type T4 = T2 & T3;

type T5 = { name: string; age: number };
type T6 = { nation: string };
type T7 = T5 & T6;
const a1: T7 = {
  name: "a",
  age: 5,
  nation: "b",
};
