var done = false;
var message = '';

if (done) message = '미완료';

// if문은 단축 평가로 대체 가능하다.
message = done && '미완료';
console.log(message); // 미완료
