const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a',
};

for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    console.log(key + ': ' + obj[key]);
}

const arr = [1, 2, 3];
arr.x = 10; // 배열은 객체이므로 프로퍼티를 동적으로 추가할 수 있다.

for (const i in arr) {
    console.log(arr[i]); // 1, 2, 3, 10
}

// arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1, 2, 3
}

// for...of 는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
    console.log(value); // 1, 2, 3
}

const person = {
    name: 'Max',
    address: 'Seoul',
    __proto__: { age: 20 }
};

console.log(Object.keys(person)); // ['name', 'address']
console.log(Object.values(person)); // ['Max', 'Seoul']

console.log(Object.entries(person)); // [['name', 'Max'], ['address', 'Seoul']]
