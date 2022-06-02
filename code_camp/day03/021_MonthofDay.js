function days(month) {
	if(month >= 1 && month <= 7) {
        if(month === 2){
            console.log(28)
        }else if(month % 2 === 0){
            console.log(30)
        }else{
            console.log(31)
        }
  }else if(month >= 8 && month <= 12){
        if(month % 2 === 1){
            console.log(30)
        }else{
            console.log(31)
        }
}else{
        console.log("1~12의 숫자를 입력해 주세요.")
    }
}


for(let i =1; i <13; i++){
    days(i)
}


// object에서 key 값을 가져오는 방법
// function days(month) {
// 	const obj ={
//         1 : 31,
//         2 : 28,
//         3: 31,
//         4: 30,
//         5: 31,
//         6: 30,
//         7: 31,
//         8: 31,
//         9: 30,
//         10: 31,
//         11: 30,
//         12: 31

//     }
//     console.log(obj[month])
// }

