// ES5
var obj1 = {
    name: 'Lee',
    sayHi: function () {
        console.log('Hi! ' + this.name);
    }
};

obj1.sayHi(); // Hi! Lee

// ES6
const obj2 = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj2.sayHi(); // Hi! Lee


