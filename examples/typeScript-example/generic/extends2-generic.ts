export {};

interface Animal {
  name: string;
  age: number;
}

interface Cat extends Animal {
  cutable: boolean;
}

function swapProperty<T extends Cat, K extends keyof Animal>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Cat = {
  name: "nyang",
  age: 2,
  cutable: true,
};

const p2: Cat = {
  name: "nyangnyang",
  age: 3,
  cutable: true,
};

console.log(p1, p2);
swapProperty(p1, p1, "name");
console.log(p1, p2);
