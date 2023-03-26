var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 elem.value를 반환한다.
var value = elem?.value; // undefined

console.log(value); // undefined

// 논리연산자 &&는 falsy한 값이 나오면 falsy한 값을 반환한다.
var str = '';
var length = str && str.length; // ''
console.log(length); // ''


//반면 옵셔널 체이닝 연산자 ?.는 null 또는 undefined인 경우에만 우항 프로퍼티참조를 이어간다.
// null 또는 undefined가 아니면 length 프로퍼티를 참조한다.
var length = str?.length; // 0
console.log(length); // 0