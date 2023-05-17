function logName(name = 'Peter') {
    console.log(`Hello ${name}!`);
}

logName(); // Hello Peter!
logName(undefined); // Hello Peter!
logName(''); // Hello !
logName(null); // Hello null!