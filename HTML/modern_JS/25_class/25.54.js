class Animal {
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }

    eat(){ return 'Eating...'; }

    move(){ return 'Moving...'; }

}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
    fly(){ return 'Flying...'; }
}

const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // Eating...
console.log(bird.move()); // Moving...
console.log(bird.fly()); // Flying...

