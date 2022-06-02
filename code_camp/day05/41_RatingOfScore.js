function grade(score) {
    if(score >=0 && score <= 59){
        console.log('F')
    }else if(score <=69){
        console.log('D')
    }else if(score <= 79){
        console.log('C')
    }else if(score <= 89){
        console.log('B')
    }else if(score <= 100){
        console.log('A')
    }else{
        console.log('잘못된 점수 입니다.')
    }
}


//예외를 먼저 하는 것도 괜찮은 방법 같다
// 그래도 먼저 F 부터 할수 있지 않을까?
function grade(score) {
    if(score >100 || score < 0){
        return '잘못된 점수 입니다.'
    }else if(score <=59){
        return 'F'
    }else if(score <= 69){
        return 'D'
    }else if(score <= 79){
        return 'C'
    }else if(score <= 89){
        return 'B'
    }else{
        return 'A'
    }
}


grade(105)
grade(-10)
grade(50)
grade(80)
grade(89)
grade(90)