function outer() {
    var a = 1;
    function inner() {
        var b = 2;
        console.log(a + b);
    }
    inner();
}

outer(); // 3

