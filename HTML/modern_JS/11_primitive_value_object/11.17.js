var person = {
    name: 'Lee'
};

var copy = person;
console.log(copy === person); // true

copy.name = 'Kim';

person.address = 'Seoul';

//copy와 person은 같은 객체를 가리키고 있기 때문에
//둘다 변경된다.
console.log(person);
console.log(copy);
