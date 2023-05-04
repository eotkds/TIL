(function(){
    // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 참조한다.
    const foo = () => console.log(arguments);

    foo(3, 4);
}(1, 2));

// 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 참조한다.
// 하지만 전역에는 arguments가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.
const foo = () => console.log(arguments);
foo(1, 2); // Uncaught ReferenceError: arguments is not defined

// 브라우저 환경에서 에러가 발생한다.