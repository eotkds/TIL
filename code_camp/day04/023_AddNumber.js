function sum(num) {
    let sum = 0
	for(let count = 0; count < num; count++){
        sum = sum + num -count
}
    console.log(sum)
}


// function sum(num) {
//     let sum = 0
// 	for(let count = 1; count <= num; count++){
//         sum += count
// }
//     return console.log(sum)
// }



sum(5) // 15
sum(3) // 6