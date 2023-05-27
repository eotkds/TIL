const lee = {name : 'Lee'};
const kim = {name : 'Kim'};

const map = new Map([[lee, 'developer'], [kim, 'designer']]);
console.log(map);

map.forEach((v, k, map) => console.log(v, k, map));


// Map 객체는 Map.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in map); // true
