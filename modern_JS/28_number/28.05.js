console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

function isEqual(a, b) {
  return console.log(Math.abs(a - b) < Number.EPSILON);
}

isEqual(0.1 + 0.2, 0.3); // true


// MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Infinity > Number.MAX_VALUE); // true


// MIN_VALUE
console.log(Number.MIN_VALUE); // 5e-324
console.log(0 < Number.MIN_VALUE); // true

// MAX_SAFE_INTEGER, MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// POSITIVE_INFINITY, NEGATIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
