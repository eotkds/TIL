/**
 * 220828 큰수만들기 시도 / 실패
 * @param {*} number
 * @param {*} k
 * @returns
 */
function solution(number, k) {
  let numArr = number.split("").sort((a, b) => b - a);
  let answer = "";
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    let idx = numArr.indexOf(number[i]);

    if (idx > k - 1) {
      count++;

      if (count <= k) continue;
    }
    answer += number[i];
  }

  return answer;
}

/**
 * 2회차 : 실패
 */
function solution(number, k) {
  let str = number;
  let count = 0;

  while (count < k) {
    let numArr = str.substring(0, str.length - k + 1).split("");
    let min = Math.min(...numArr);
    let minIdx = numArr.indexOf(min + "");

    numArr.splice(minIdx, 1);

    str = numArr.join("") + str.substring(k + 1, str.length);
    count++;
  }

  return str;
}

/**
 * 3회 실패
 */
function solution(number, k) {
  let numArr = number.split("").sort((a, b) => b - a);
  let arr = number.split("");
  let count = 0;

  console.log(arr);
  while (count < k) {
    for (let i = 0; i < arr.length; i++) {
      let idx = numArr.indexOf(arr[i]);
      if (idx > k - 1) {
        arr.splice(i, 1);
        count++;
        break;
      }
    }
  }

  return arr.join("");
}
