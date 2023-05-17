function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getDiameter = function(){
    return this.radius * 2;
};


//인스턴스 생성
const circle1 = new Circle(5);
console.log(circle1.getDiameter());