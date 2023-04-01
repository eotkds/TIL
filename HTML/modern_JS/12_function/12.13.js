var add = new Function('x', 'y', 'return x+y');

console.log(add(2, 3)); // 5

var add1 = (function(){
    var a = 10;
    return function(x, y){
        return x + y + a;
    };
}());
console.log(add1(2, 3)); // 15

var add2 = (function(){
    var a = 10;
    return new Function('x', 'y', 'return x+y+a;');
}());

console.log(add2(2, 3)); // ReferenceError: a is not defined
