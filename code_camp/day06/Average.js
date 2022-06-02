/*

평균 구하기
문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
입출력 예
arr	return
[1,2,3,4]	2.5
[5,5]	5

*/

function solution(arr) {
    var answer = 0;
    
    for(let i of arr){
        answer += i/arr.length;
    }
    return answer;
}

//arr 길이를 각 요소를 나눠 더 해줬다.
//reduce라는 함수를 활용하는 것을 배웠다.

function average(array){
    return array.reduce((a, b) => a + b) / array.length;
  }

  //reducde 함수인데 각 가져오는 parameter를 알아야 한다.
  //initialvalue가 주어지지 않은 경우 accumulator가 첫 번째가 값으로 자동으로 들어간다.