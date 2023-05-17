//var키워드인 경우에만 함수레벨 스코프가 적용된다.
var x = 1;

if (true) {
    var x = 2;
}

console.log("x:", x); // 2


let y = 10;
if (true) {
    let y = 20;
}
console.log("y:", y); // 10;

//for문의 경우에도 함수레벨 스코프가 적용된다.
var i = 10;

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // 5