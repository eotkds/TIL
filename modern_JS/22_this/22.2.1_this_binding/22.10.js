
var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this); //obj
        setTimeout(function () {
            console.log("callback's this: ", this); //window
            console.log("callback's this.value: ", this.value); //1
        }, 100);
    }
};
obj.foo();
