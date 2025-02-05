"use strict";
const sqr = (number) => {
    return number * number;
};
console.log(sqr(9));
const username = "jeevan";
const greet = (name) => {
    console.log('hello ' + name);
};
greet(username);
const introduce = (name, age) => age ? `My name is ${name} and I am ${age} years old.` : `My name is ${name}.`;
console.log(introduce("Jeevan"));
console.log(introduce("Jeevan", 25));
const add = (a, b) => a + b;
console.log("Sum:", add(15, 18));
const mulp = (a, b) => a * b;
console.log("Multiplication", mulp(18, 15));
