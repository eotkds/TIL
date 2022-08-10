export {};

interface Animal {
  name: string;
  age: number;
  kind: string;
}

type T1<T, K extends keyof T> = { [P in K]: T[P] };

type A1 = T1<Animal, "name" | "kind">;

type A2 = Pick<Animal, "name" | "kind">;
