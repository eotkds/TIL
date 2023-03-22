function getThisBinding() {
    return this;
}

const thisArg = { a: 1 };



console.log(getThisBinding.bind(thisArg)); // function getThisBinding() { return this; }
console.log(getThisBinding.bind(thisArg)()); // { a: 1 }
