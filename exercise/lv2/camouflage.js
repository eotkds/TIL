/**
 * 220904 위장 문제 : 실패
 * @param {} clothes
 * @returns
 */
function solution(clothes) {
  const list = {};
  const arrList = [];
  let num = 0;
  for (let i = 0; i < clothes.length; i++) {
    let kind = clothes[i][1];
    let item = clothes[i][0];
    if (kind in list) {
      arrList[list[kind]].push(item);
    } else {
      list[kind] = num;
      arrList[num] = [item];
      num++;
    }
  }
  console.log(list);
  console.log(arrList);

  let sum = 0;

  for (let i = 0; i < arrList.length; i++) {
    let leng1 = arrList[i].length;
    sum += leng1;
    for (let k = i + 1; k < arrList.length; k++) {
      let leng2 = arrList[k].length;

      sum += leng1 * leng2;
      for (let l = k + 1; l < arrList.length; l++) {
        let leng3 = arrList[l].length;
        sum += leng1 * leng2 * leng3;
      }
    }
  }

  return sum;
}

/**
 * recursion 시도
 * @param {*} clothes
 * @returns
 */
function solution(clothes) {
  const list = {};
  const arrList = [];
  let num = 0;
  for (let i = 0; i < clothes.length; i++) {
    let kind = clothes[i][1];
    let item = clothes[i][0];
    if (kind in list) {
      arrList[list[kind]].push(item);
    } else {
      list[kind] = num;
      arrList[num] = [item];
      num++;
    }
  }
  console.log(list);
  console.log(arrList);

  let numArr = arrList.map((x) => x.length);
  console.log(numArr);

  let sum = count(numArr, 0, numArr[0], 0);
  console.log(sum);
}

function count(arr, i, acc, sum) {
  if (i === arr.length) {
    return sum;
  }

  for (let k = i + 1; k < arr.length; k++) {
    sum += acc * arr[k];
  }

  sum += count(arr, i + 1, acc * arr[i + 1], sum);
}

/**
 * reference 참고 하여 리팩토링
 * recursion으로 풀어보려고 했으나 안되어서 reference 참고
 * 일종의 경우의 수 공식이기 때문에...
 * @param {*} clothes
 */
function solution(clothes) {
  const list = {};
  const arrList = [];
  let num = 0;
  for (let i = 0; i < clothes.length; i++) {
    let kind = clothes[i][1];
    let item = clothes[i][0];
    if (kind in list) {
      arrList[list[kind]].push(item);
    } else {
      list[kind] = num;
      arrList[num] = [item];
      num++;
    }
  }
  console.log(list);
  console.log(arrList);

  let numArr = arrList.map((x) => x.length + 1);
  let result = numArr.reduce((acc, cur) => acc * cur);

  return result - 1;
}
