const myShopping = [
    { category: "과일", price: 12000},
    { category: "의류", price:10000},
    { category: "의류", price: 20000},
    { category: "장난감", price: 9000},
    { category: "과일", price: 5000},
    { category: "의류", price: 10000},
    { category: "과일", price: 8000},
    { category: "의류", price: 7000},
    { category: "장난감", price: 5000},
    { category: "의류", price: 10000},
]



function myPage(myShopping){
    let count = 0 // 구매횟수
    let amount = 0 // 총 금액
    
    for(let key of myShopping){
      if(key.category ==='의류'){
        amount += key.price
        count++
      }
    }
 
   let grade = count >= 5 ? 'Gold'
   : count >= 3 ? 'Silver'
   : 'Bronze'
   
   return `의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원 등급은 ${grade}입니다.`
 }
 
 console.log(myPage(myShopping))