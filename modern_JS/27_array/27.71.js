const todos = [
    {id: 1, text: 'Take out trash', isCompleted: true},
    {id: 2, text: 'Meeting with boss', isCompleted: true},
    {id: 3, text: 'Dentist appt', isCompleted: false},
];

// shallow copy
const todos2 = todos.slice();
// const todos2 = [...todos];

// todos2와 todos는 참조값이 다른 별개의 객체다.
console.log(todos2 === todos); // false

// 배열 요소의 참조값이 같다. 즉, 얕은 복사되었다.
console.log(todos2[0] === todos[0]); // true
