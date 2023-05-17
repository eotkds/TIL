// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true


// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5);

// toFixed는 Number.prototype의 프로토타입 메서드다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed()); // 2

// isInteger는 Number 객체의 정적 메서드다.
// Number.isInteger는 인수로 전달받은 값이 정수인지 확인하여 그 결과를 불리언 값으로 반환한다.
console.log(Number.isInteger(0.5)); // false
