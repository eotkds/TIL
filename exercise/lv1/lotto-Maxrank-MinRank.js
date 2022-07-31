function solution(lottos, win_nums) {
  const rank = {
    // 맞힌 개수 : 등수
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };

  //맞힌 개수
  let count = 0;
  //zero개수
  let zero = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] !== 0) {
      if (win_nums.includes(lottos[i])) count++;
    }
    if (lottos[i] === 0) zero++;
  }
  //count, zero가 모두 안맞을 경우에 한번 걸렸다.
  return ([max, min] = [rank[count + zero], rank[count]]);
}
