export {};

interface Animal {
  name: string;
  age: number;
}

type T1<T> = { [K in keyof T]: boolean };

const animalMap: T1<Animal> = {
  name: true,
  age: false,
};
