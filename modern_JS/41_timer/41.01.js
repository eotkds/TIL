setTimeout(name => console.log(`Hi ${name}.`), 1000, 'John');

const timerId = setTimeout(() => console.log('never happens'), 1000);
// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
// console.log(timerId);

let count = 1;
const timeoutId = setInterval(() => {
    console.log(count);
    if (count++ === 5) clearInterval(timeoutId);
}, 1000);