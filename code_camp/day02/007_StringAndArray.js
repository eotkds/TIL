const number = "01012345678"


let arr = []
arr[0] = number.slice(0,3)
arr[1] = number.slice(arr[0].length,arr[0].length+4)
arr[2] = number.slice(arr[0].length+arr[1].length,arr[0].length+arr[1].length+4)
console.log(arr)
