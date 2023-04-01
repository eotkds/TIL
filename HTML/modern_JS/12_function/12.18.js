function add(x, y){
    console.log(arguments);
    return x+y;
}

console.log(add(2)); // NaN


//인수가 초과되면 초과된 인수는 무시된다.
console.log(add(2, 3, 4)); // 5


//모든 인수는 arguments 객체에 저장된다.
console.log(add(2, 3, 4, 5, 6, 7, 8, 9, 10)); // 5
// arguments [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8, '7': 9, '8': 10 }
// 브라우저 환경에서는 callee 프로퍼티와 symbol.iterator 프로퍼티가 추가로 추가된다.
