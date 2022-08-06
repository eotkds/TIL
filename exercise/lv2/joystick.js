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

  //220806 refactoring2 
function solution(name) {
  const alphabet_arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let change = 0;
  let move = 0;
  let a = 0,
    b = 0, i = 0; // 시작점,도작점, idx

    while(){
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
      //시작은 0 다음 가까운 후보지를 선택하여 찾아간다? 이것을 처음으로 시작하여도 무방할것이다.
    }
    
   
    

    


  return change + move;
}