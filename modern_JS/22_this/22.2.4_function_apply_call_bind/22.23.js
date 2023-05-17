const person = {
    name: 'Max',
    foo(callback) {
        console.log(this.name); // Max
        setTimeout(callback, 100);
    }
};

person.foo(function () {
    console.log(this.name); // undefined
});

