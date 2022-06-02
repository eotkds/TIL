function makeNumber(num) {
	let str = '';
    if(num <0){
        console.log('1이상의 숫자만 입력해주세요.')
    }else{
        str = '1'
        for(let i=1; i<num; i++){
            str = str + '-' + (i+1)
        }
        return console.log(str)
    }

}

makeNumber(2)
















