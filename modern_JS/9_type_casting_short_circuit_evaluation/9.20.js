var done = true;
var message = '';

if (done) message = '완료';

// if문은 단축 평가로 대체 가능하다.
message = done && '완료';
console.log(message); // 완료
