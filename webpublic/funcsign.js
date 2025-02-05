"use strict";
// Function implementation
function createMultiplier(factor) {
    return (value) => value * factor;
}
const double = createMultiplier(2);
console.log(double(5));
const triple = createMultiplier(3);
console.log(triple(5));
//Arrow Function Syntax
const addNum = (a, b) => a + b;
console.log(addNum(7, 13));
console.log("hello world");
