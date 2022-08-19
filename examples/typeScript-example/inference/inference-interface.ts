export {};

interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {
  kind?: string;
  liveInIncheon: boolean;
}
interface Cat extends Animal {
  kind?: string;
  liveInSeoul: boolean;
}

const p1: Animal = { name: "ddoddo", age: 10 };
const p2: Dog = { name: "bbobbo", age: 8, liveInIncheon: true, kind: "Shiba" };
const p3: Cat = { name: "bum", age: 7, liveInSeoul: false, kind: "Street" };

const arr1 = [p1, p2, p3];
const arr2 = [p2, p3];
