const circle = {
    radius: 5,

    getDiameter() {
        // return circle.radius * 2; // 자기 자신을 호출 하는 것은 바람직하지 않다.
        return this.radius * 2; // this를 사용하면 자기 자신을 호출 할 수 있다.
    }

}
console.log(circle.getDiameter());
