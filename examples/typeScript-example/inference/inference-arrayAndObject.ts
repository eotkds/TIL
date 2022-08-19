export {};

const arr1 = [10, 20, 30]; // arr1: number[]

const [n1, n2, n3] = arr1;
arr1.push("a");

const obj1 = { name: "abcd", age: 2, region: "Incheon" };
/*
obj1: {
    name: string,
    age: number,
    region: string
}
*/
const { name, age, region } = obj1;
console.log(name === age);
