//extends
//직사각형
class Rectangle {
  constructor(a, b) {
    //가로, 세로
    this.a = a;
    this.b = b;
  }
  sayHello() {
    console.log("Hello");
  }

  //직사각형의 넓이
  getArea() {
    return this.a * this.b;
  }
}

//직육면체
class Cuboid extends Rectangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    //높이
    this.c = c;
  }

  //직육면체 넓이
  getArea() {
    //직육면체 넓이 = 2(가로*세로 + 가로*높이 + 세로*높이)
    return 2 * (super.getArea() + this.a * this.c + this.b * this.c);
  }

  //직육면체 부피
  getVolume() {
    return super.getArea() * this.c;
  }
}

const cuboid = new Cuboid(1, 1, 1);
// cuboid.sayHello();
// // 직육면체 넓이
// console.log(cuboid.getArea());
// //직육면체 부피
// console.log(cuboid.getVolume());

// console.log(cuboid instanceof Cuboid);
// console.log(cuboid instanceof Rectangle);
