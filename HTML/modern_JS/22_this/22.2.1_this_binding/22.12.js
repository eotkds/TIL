
var value = 1;

const obj = {
    value: 100,
    foo() {
        // 콜백 함수에 명시적으로 this 바인딩   
        setTimeout(function () {
            console.log("callback's this.value: ", this.value); //100
        }.bind(this), 100);
    }
};

obj.foo();
