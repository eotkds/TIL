function sum(){
  let result = 0;

  // arguments 객체는 length프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
  for(let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }

  return result;
}

console.log(sum()); // 0
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
