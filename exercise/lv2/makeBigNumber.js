/**
 * 220828 큰수만들기 시도 / 실패
 * @param {*} number
 * @param {*} k
 * @returns
 */
function solution(number, k) {
  let numArr = number.split("").sort();
  let answer = "";
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    let idx = numArr.indexOf(number[i]);

    if (idx < k) {
      count++;

      if (count <= k) continue;
    }
    answer += number[i];
  }

  return answer;
}
