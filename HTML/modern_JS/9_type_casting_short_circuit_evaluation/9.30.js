
//좌항의 값이 null 또는 undefined이면 우항의 값이 할당된다.
var foo  = null ?? 'default string';

// Falsy한 값이면 우항의 값이 할당된다; ''는 falsy한 값이다.
var foo = '' || 'default string';
console.log(foo); // default string


//falsy한 값이라도 null또는 undefined가 아니면 좌항의 값이 할당된다.
var foo = '' ?? 'default string'; 
console.log(foo); // ''

