var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkj: while (j > 4) {
    console.log("j: " + j);
    j -= 1;

    if (j % 2 == 0) continue checkj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}

test1: for (let i = 0; i < 3; i++) {
  console.log(`i = ${i} 일 때,`);
  for (let j = 0; j < 2; j++) {
    if (i === 1) {
      console.log(`건너뜁니다.`);
      continue test1;
    }
    console.log(`j가 ${j} 일 때, (i,j) = (${i}, ${j})`);
  }
  console.log("입니다.");
}
