/**
 * 220905 타켓 넘버 시도
 * 전체 탐색을 할 것이다.
 * 테스트는 통과하였으나 테스트2 속도가 566.99ms까지감올라감
 * @param {*} numbers
 * @param {*} target
 * @returns
 */
function solution(numbers, target) {
  let leng = numbers.length;
  let count = 0;
  for (let i = 0; i < 2 ** leng; i++) {
    let bin = i.toString(2).padStart(leng, "0");

    let result = numbers.reduce((acc, cur, i) => {
      if (bin[i] === "0") {
        return acc + cur;
      }

      if (bin[i] === "1") {
        return acc - cur;
      }
    }, 0);

    if (result === target) count++;
  }

  return count;
}
