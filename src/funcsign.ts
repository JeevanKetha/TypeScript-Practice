// Function signature
function createMultiplier(factor: number): (value: number) => number;

// Function implementation
function createMultiplier(factor: number): (value: number) => number {
    return (value: number) => value * factor;
}

const double = createMultiplier(2);
console.log(double(5));   

const triple = createMultiplier(3);
console.log(triple(5));   

//Arrow Function Syntax

const addNum: (a: number, b: number) => number = (a, b) => a + b;

console.log(addNum(7, 13)); 

console.log("hello world");
