export {};

type T1 = { [K in "p1" | "p2"]: number };

const ti: T1 = {
  p1: 3,
  p2: 10,
  //   p3: true
};
