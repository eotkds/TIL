// console.log(this); // window

function square(number) {
    console.log(this); // window
    return number * number;
}
// square(2); // 4



const person = {
    name: 'Lee',
    getName() {
        console.log(this); // person
        return this.name;
    }
};
console.log(person.getName()); // Lee


function Person(name) {
    this.name = name;
    console.log(this); // Person
}

const me = new Person('Lee'); // Person {name: "Lee"}
