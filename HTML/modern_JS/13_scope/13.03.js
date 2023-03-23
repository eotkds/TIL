var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); // local
}

foo(); // local

console.log(x); // global