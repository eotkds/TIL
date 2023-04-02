function foo (){
    var x = "local";
    console.log(x);
    return x;
}

foo();
console.log(x); // ReferenceError: x is not defined
