//220805 solve : 런타임 에러 및 실패 다수
function solution(name) {
  const alphabet_arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  //alphabet만 변환했을 때 count배열
  let name_arr = name.split("").map((el) => {
    let l = alphabet_arr.indexOf(el);
    //alphabet 중간 값이 13을 넘으면 뒤에서부터 가는것이 유리
    if (l > 13) {
      return 26 - l;
    } else {
      return l;
    }
  });
  //alphabet만 조작한 count
  let result1 = name_arr.reduce((acc, cur) => acc + cur);

  //idx만 나오는 배열 만들기
  let idx_arr = name_arr.map((el, i) => {
    return el > 0 ? i : 0;
  });

  //시작점에서 앞으로 갈지 뒤로갈지 유리한 move수만 배열로
  let a = 0,
    b = 0; // 시작점,도작점
  let move = [];
  for (let i = 0; i < idx_arr.length; i++) {
    if (idx_arr[i] > 0) {
      b = i;
      //앞으로 전진했을 때 거리
      let forward = b - a;
      //뒤로 후진했을 때 거리
      let back = name.length - b + a;
      if (forward < back) {
        move.push(forward);
      } else {
        move.push(back);
      }
    }
    a = b;
  }
  let result2 = move.reduce((acc, cur) => acc + cur);
  return result1 + result2;
}

//220806 refactoring : 타임에러는 안뜨지만 실패가 있음
function solution(name) {
  const alphabet_arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let result1 = 0;

  let a = 0,
    b = 0; // 시작점,도작점
  let move = 0;
  for (let i = 0; i < name.length; i++) {
    let l = alphabet_arr.indexOf(name[i]);
    //alphabet 중간 값이 13을 넘으면 뒤에서부터 가는것이 유리
    if (l > 13) {
      result1 += 26 - l;
    } else {
      result1 += l;
    }

    if (l > 0) {
      b = i;
      let forward = b - a;
      let back = name.length - b + a;
      if (forward < back) {
        move += forward;
      } else {
        move += back;
      }
    }
    a = b;
  }

  return result1 + move;
}

//220806 refactoring1 : 실패 이동 횟수에서 문제가 있음 "AAAABZ"
function solution(name) {
  const alphabet_arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let result1 = 0;

  let a = 0,
    b = 0; // 시작점,도작점
  let move = 0;
  for (let i = 0; i < name.length; i++) {
    let l = alphabet_arr.indexOf(name[i]);
    //alphabet 중간 값이 13을 넘으면 뒤에서부터 가는것이 유리
    if (l > 13) {
      result1 += 26 - l;
    } else {
      result1 += l;
    }

    if (l > 0) {
      b = i;
      let forward = b - a;
      let back = name.length - b + a;
      if (forward < back) {
        move += forward;
      } else {
        move += back;
      }
    }
    a = b;
  }
}
//reference 코드1
function solution(name) {
  var answer = 0;
  const length = name.length;
  let upDownCount = 0;
  let leftRightCountList = [length - 1]; //한 방향으로 쭉 갔을 때
  for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i]);
  for (let startOfA = 0; startOfA < name.length; startOfA++) {
    let endOfA = startOfA + 1;
    while (endOfA < length && name[endOfA] === "A") endOfA++;
    const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA];
    leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA); // 0 -> A.., 0 <- A.., ..A <- -1
    leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA); //시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
  }
  answer = upDownCount + Math.min(...leftRightCountList);
  return answer;
}

function minUpOrDownCount(destination) {
  const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const index = Alphabet.indexOf(destination);
  return Math.min(index, Alphabet.length - index); // 이렇게 간단하게도 가능하구나!
}

//reference 코드2
function solution(name) {
  let answer = 0;
  let arr = [0];

  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A") {
      // A가 나오는 경우 연속적으로 나온 A의 갯수를 계산한다.
      if (i === 0) {
        arr.push(calculateRepeatingA(name) - 1);
      } else if (name[i - 1] !== "A") {
        // 연속된 A의 숫자가 현재 index+1보다 큰 경우 차이를 빼서 반대로 돌아간 효과를 준다.
        arr.push(calculateRepeatingA(name.slice(i)) - (i - 1));
      }
      answer++;
    } else {
      answer += calculateCount(name[i]) + 1; // 해당 문자의 자릿수만큼 계산을 하며 오른쪽으로 이동한다.
    }
  }

  return answer - Math.max(...arr) - 1; // 마지막은 오른쪽으로 이동할 필요가 없기에 1을 빼준다.
}

function calculateCount(value) {
  // 현재 문자까지 필요한 조이스틱 이동 횟수를 계산
  return value.charCodeAt() - 65 < 91 - value.charCodeAt()
    ? value.charCodeAt() - 65
    : 91 - value.charCodeAt();
}

function calculateRepeatingA(name) {
  // 연속으로 나오는 A의 갯수를 계산
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") break;
    count++;
  }
  return count;
}
