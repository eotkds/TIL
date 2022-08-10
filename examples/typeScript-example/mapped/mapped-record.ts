export {};

interface Animal {
  name: string;
  age: number;
  kind: string;
}

type T1<K extends string, T> = { [P in K]: T };

type A1 = T1<"p1" | "p2", Animal>;

type A2 = T1<"p1" | "p2", string>;
