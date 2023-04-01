function add(x, y, z){
    x = x || 0;
    y = y || 0;
    z = z || 0;
    return x+y+z;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0


