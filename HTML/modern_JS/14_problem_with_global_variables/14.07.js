var Counter =(function(){
    var count = 0;
    return {
        increase(){
            return ++ count;
        },
        decrease(){
            return -- count;
        }
    }
}());

// private 변수는 외부로 노출되지 않는다. 
console.log(Counter.count); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0