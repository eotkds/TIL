const person = {
    name: 'John',
    getName() {
        return this.name;
    }
};

console.log(person.getName()); // John

const anotherPerson = {
    name: 'Bob'
};

anotherPerson.getName = person.getName;
console.log(anotherPerson.getName()); // Bob

const getName = person.getName;

console.log(getName()); // undefined
