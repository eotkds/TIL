const person = {
    name: 'Max',
    foo(callback) {
        setTimeout(callback.bind(this), 100);
    }
};

person.foo(function () {
    console.log(`Hi! my name is ${this.name}`); // Hi! my name is Max
});

