const o = {};

console.log(o.__proto__);

const person = {
    name: 'Lee',
    age: 20,
};

// 프로퍼티 어트리뷰터 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// 모든 프로퍼티의 프로퍼티 어트리뷰터 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptors(person));
