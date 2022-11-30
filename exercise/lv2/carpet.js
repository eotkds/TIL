function solution(brown, yellow) {
    let answer = [];
    
    let a = 1, b = 1;
    let sum = brown + yellow;
    for(b ;  b < sum ; b++ ){
    
      a = sum / b;
      
      if(!Number.isInteger(a)){
        continue;
      }
      
      if(a < b){
        break;
      }
      if((a - 2) * (b -2) === yellow){
          if( a*2 + (b - 2)*2 === brown){
            return [a, b]
          }
      }
    }
}

/**
 * refactoring
 */
 function solution(brown, yellow) {
    
    let a ; // row
    let sum = brown + yellow;
    for(let i = 1 ;  i <=  sum ; i++ ){
    
      a = sum / i;
      
      if(!Number.isInteger(a)){
        continue;
      }
      
      if(a < i){
        break;
      }
      if((a - 2) * (i -2) === yellow){
          if( a*2 + (i - 2)*2 === brown){
            return [a, i]
          }
      }
    }
}