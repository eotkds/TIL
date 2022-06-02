function temperature(num){
	if(num > 30 || num < 10) {
        console.log("10~30 까지 입력해 주세요")
    }else if(num >= 24){
    console.log("조금 덥습니다.")
    }else if(num <= 18){
        console.log("조금 춥네요")
    }else if(num >= 19 && num <= 23){
        console.log("날씨가 좋네요")
    }else{
        console.log("숫자를 입력해 주세요")
    }
}

temperature(13)  // "조금 춥네요"
temperature(23)  // "날씨가 좋네요"
temperature(27)  // "조금 덥습니다"


// 이렇게도 간단할 거 같다.
// function temperature(num){
// 	if(num >= 24) {
// 		console.log('조금 덥습니다.')
//     return
// 	}else if(num >= 19){
//     console.log('날씨가 좋네요')
//     return
//   }else if(num >= 10){
//     console.log('조금 춥네요')
//     return
//   }else{
//     console.log('10~30까지를 입력해주세요')
//     return
//   }
// }