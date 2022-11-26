/*
1. length작은 것부터 정령
2. 큰수정렬
3. 문자로 만들기
*/
function solution(numbers) {
    let answer = '';
    let arr = [];
  	let max = 0
    
  for(let i = 0 ; i < numbers.length ; i++){
        let a = numbers[i] + ""
        arr.push([numbers[i] + "", a.length])
      	if(max < a.length){
          max = a.length
        }
    }

    for(let i = 0 ; i < arr.length ; i++){
        arr[i][0] = arr[i][0].padEnd(max, arr[i][0][arr[i][0].length - 1] )
    }

    arr.sort((a,b)=> {
      if(a[0] < b[0]){
        return 1
      }
      if(a[0] > b[0]){
        return - 1
      }
      if(a[0] === b[0]){
        if(a[1] < b[1]){
          return 1
        }
        if(a[1] > b[1]){
          return -1
        }
        return 0
      }
      
    })

	for(let i = 0 ; i < arr.length ; i++){
        let digit = arr[i][1];
        for(let j = 0 ; j < digit ; j++){
            answer += arr[i][0][j]
        }
    }
	
  
  while(answer.length > 1 && answer[0] === '0'){
        answer = answer.substring(1)
    }
    

    return answer;
}

/*
풀이
*/
function solution(numbers) {
    let answer = numbers.map(x=> x + '');

    answer = answer.sort((a,b) => (b+a) - (a+b)).join('');

    return answer[0]==='0'? '0' : answer;
}