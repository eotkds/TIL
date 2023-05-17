// var 키워드로 선언한 변수는 전역 객체의 프로퍼티다.
var value = 1;
// const 키워드로 선언한 변수 value는 전역 객체의 프로퍼티가 아니다.
// const value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this); //obj
        console.log("foo's this.value: ", this.value); //100


        // 매서드 내애에서 정의한 중첩 함수 bar
        function bar() {
            console.log("bar's this: ", this); //window
            console.log("bar's this.value: ", this.value); //1
        }

        // 메서드 내에서 정의한 중첩 함수 bar를 호출되면 전역 객체가 this로 바인딩된다.
        bar();
    }
};

obj.foo();
