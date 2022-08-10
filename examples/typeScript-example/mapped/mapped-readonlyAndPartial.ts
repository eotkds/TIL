export {};

interface Animal {
  name: string;
  age: number;
}

type T1<T> = { readonly [K in keyof T]: T[K] };
type T2<T> = { [K in keyof T]?: T[K] };

// type A1 = T1<Animal>;
// type A2 = T2<Animal>;

type A3 = Readonly<Animal>;
type A4 = Partial<Animal>;
