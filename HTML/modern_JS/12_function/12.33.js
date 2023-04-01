//매개변수 primitive는 원시 값ㅇ르 전달받고, 매겨변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    return primitive;
}


//외부 상태
var num = 100;
var person = { name: 'Lee' };

console.log(num); // 100
console.log(person); // { name: 'Lee' }

//원시 값은 값 자체가 복사되고, 객체는 참조 값이 복사된다.
var tmp_num = changeVal(num, person);

//원시 값은 원본이 변경되지 않는다.
console.log(num); // 100

//객체는 원본이 변경된다.
console.log(person); // { name: 'Kim' }

console.log(tmp_num); // 200
