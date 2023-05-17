var x = 'global';

function foo() {
    console.log(x);
    var x = 'local';
}


foo(); // undefined
console.log(x); // global