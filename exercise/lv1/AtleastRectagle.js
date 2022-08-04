//success : 가장느린 테스트가 2.57
function solution(sizes) {
  let wMax = sizes.reduce((acc, cur) => {
    let max = Math.max(...cur);
    if (max > acc) return max;
    return acc;
  }, 0);

  let hMax = sizes.reduce((acc, cur) => {
    let min = Math.min(...cur);
    if (min > acc) return min;
    return acc;
  }, 0);
  return wMax * hMax;
}

//refactoring : 테스트케이스 17부터 더 느림
function solution(sizes) {
  let tMax = sizes.reduce(
    (acc, cur) => {
      let [max, min] = [Math.max(...cur), Math.min(...cur)];

      if (max > acc[0]) acc[0] = max;
      if (min > acc[1]) acc[1] = min;
      return acc;
    },
    [0, 0]
  );

  return tMax[0] * tMax[1];
}
//refactoring  : 가장 느린 테스트가  2.70
function solution(sizes) {
  let answer = [0, 0];
  for (let i = 0; i < sizes.length; i++) {
    let max, min;
    if (sizes[i][0] > sizes[i][1]) {
      max = sizes[i][0];
      min = sizes[i][1];
    } else {
      max = sizes[i][1];
      min = sizes[i][0];
    }

    if (max > answer[0]) answer[0] = max;
    if (min > answer[1]) answer[1] = min;
  }

  return answer[0] * answer[1];
}
