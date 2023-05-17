var res = (function (){
    var a = 10;
    var b = 20;
    return a * b;
}());

console.log(res); // 200

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function (a, b){
    return a * b;
}(10, 10));

console.log(res); // 100
