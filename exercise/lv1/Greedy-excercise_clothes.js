//테스트 12~14 실패, [4, 2] [3, 5] -> 순서가 맞지 않으면 에러가 나는 케이스가 발생
function solution(n, lost, reserve) {
  let answer = [];

  for (let i = 0; i < lost.length; i++) {
    let v1 = reserve.indexOf(lost[i] - 1),
      v2 = reserve.indexOf(lost[i] + 1),
      v3 = reserve.indexOf(lost[i]);
    if (v3 !== -1) {
      if (!answer.includes(reserve[v3])) {
        answer.push(reserve[v3]);
        continue;
      }
    }

    if (v1 !== -1 && v2 === -1) {
      if (!answer.includes(reserve[v1])) {
        answer.push(reserve[v1]);
        continue;
      }
    }

    if (v1 === -1 && v2 !== -1) {
      if (!answer.includes(reserve[v2])) {
        answer.push(reserve[v2]);
      }
    }
  }
  return n - lost.length + answer.length;
}

//refactoring : 실패 + 런타임 에러
function solution(n, lost, reserve) {
  let answer = [];
  let lost_person = lost.length;
  /*
  모든 케이스를 추가해보자.
  다 빼는 케이스 부터 시작 -> 다 플러스 하는 케이스
  */

  //1. 잃어버렸는데 여벌이 있는 경우 제외
  let lost_arr = lost.filter((v) => {
    let idx = reserve.indexOf(v);
    if (idx !== -1) {
      reserve.splice(idx, 1);
      return false;
    }
    return true;
  });
  //케이스 만들기
  //홀짝
  for (let i = 0; i < 2 ** lost_arr.length; i++) {
    let arr = new Set();
    let s = i.toString(2).padStart(lost_arr.length, "0");

    for (let j = 0; j < s.length; j++) {
      if (s[j] == 0) {
        arr.add(lost[j] - 1);
      }
      if (s[j] == 1) {
        arr.add(lost[j] + 1);
      }
    }
    answer.push([...arr]);
  }

  let result = answer.map((arr) => {
    let score = arr.reduce((acc, cur) => {
      if (reserve.includes(cur)) return acc + 1;
      return acc;
    }, 0);
    return score;
  });
  let reserved_person = Math.max(...result);

  return n - lost_person + reserved_person;
}
/*
00  0
01  1
10  2
11  3
00  4 

000
001
010
011
*/

//220801 refactoring : 2, 10 런타임 에러, 5번 실패
function solution(n, lost, reserve) {
  let answer = [];
  //1. 잃어버렸는데 여벌이 있는 경우 제외
  let lost_arr = lost.filter((v) => {
    let idx = reserve.indexOf(v);
    if (idx === -1) {
      return true;
    }
    if (idx !== -1) {
      reserve.splice(idx, 1);
      return false;
    }
  });
  //케이스 만들기
  for (let i = 0; i < 2 ** lost_arr.length; i++) {
    let arr = new Set();
    let s = i.toString(2).padStart(lost_arr.length, "0");

    for (let j = 0; j < s.length; j++) {
      if (s[j] == 0) {
        arr.add(lost[j] - 1);
      }
      if (s[j] == 1) {
        arr.add(lost[j] + 1);
      }
    }
    answer.push([...arr]);
  }

  let result = answer.map((arr) => {
    let score = arr.reduce((acc, cur) => {
      if (reserve.includes(cur)) return acc + 1;
      return acc;
    }, 0);
    return score;
  });

  let reserved_person = Math.max(...result);

  return n - lost_arr.length + reserved_person;
}

//220802 refactoring : 2, 10 런타임 에러
function solution(n, lost, reserve) {
  let answer = [];
  //1. 잃어버렸는데 여벌이 있는 경우 제외
  let lost_arr = [];
  let reserve_arr = [];
  for (let i = 0; i < lost.length; i++) {
    if (!reserve.includes(lost[i])) lost_arr.push(lost[i]);
  }
  for (let i = 0; i < reserve.length; i++) {
    if (!lost.includes(reserve[i])) reserve_arr.push(reserve[i]);
  }
  // console.log(lost_arr, reserve_arr);
  if (lost_arr.length === 0 || reserve_arr.length === 0)
    return n - lost_arr.length;
  //케이스 만들기
  for (let i = 0; i < 2 ** lost_arr.length; i++) {
    let score = new Set();
    let s = i.toString(2).padStart(lost_arr.length, "0");

    for (let j = 0; j < s.length; j++) {
      if (s[j] == 0) {
        if (reserve_arr.includes(lost_arr[j] - 1)) score.add(lost_arr[j] - 1);
      }
      if (s[j] == 1) {
        if (reserve_arr.includes(lost_arr[j] + 1)) score.add(lost_arr[j] + 1);
      }
    }
    answer.push([...score].length);
  }

  return n - lost_arr.length + Math.max(...answer);
}

//정렬 후 refactoring : 케이스5, 12 실패 -> 질문하기 참고하여 성공 let lost = [ 1, 2], let reserve = [2, 3]
function solution(n, lost, reserve) {
  let answer = [];
  //1. 잃어버렸는데 여벌이 있는 경우 제외
  let lost_arr = [];
  let reserve_arr = [];
  for (let i = 0; i < lost.length; i++) {
    if (!reserve.includes(lost[i])) lost_arr.push(lost[i]);
  }
  for (let i = 0; i < reserve.length; i++) {
    if (!lost.includes(reserve[i])) reserve_arr.push(reserve[i]);
  }
  //2. 정렬
  lost_arr.sort((a, b) => a - b);
  reserve_arr.sort((a, b) => a - b);

  //3. 분배
  for (let i = 0; i < lost_arr.length; i++) {
    let v1 = reserve_arr.indexOf(lost_arr[i] - 1),
      v2 = reserve_arr.indexOf(lost_arr[i] + 1),
      v3 = reserve_arr.indexOf(lost_arr[i]);
    if (v3 !== -1) {
      answer.push(reserve_arr[v3]);
      continue;
    }

    if (v1 !== -1) {
      if (!answer.includes(reserve_arr[v1])) {
        answer.push(reserve_arr[v1]);
        continue;
      }
    }

    if (v2 !== -1) {
      if (!answer.includes(reserve_arr[v2])) {
        answer.push(reserve_arr[v2]);
      }
    }
  }
  return n - lost_arr.length + answer.length;
}
//reference refactoring
