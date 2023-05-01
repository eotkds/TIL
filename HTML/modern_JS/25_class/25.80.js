// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
    // 중복된 배열 요소를 제거하고 반환한다. 
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    // 모든 배열 요소의 평균을 구한다.
    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3, 4, 5, 5, 5);
console.log(myArray); // MyArray(8) [1, 1, 2, 3, 4, 5, 5, 5]
console.log(myArray.uniq()); // MyArray(5) [1, 2, 3, 4, 5]
console.log(myArray.average()); // 3.125
