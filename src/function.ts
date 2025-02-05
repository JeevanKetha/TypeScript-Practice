const sqr = (number: number) => {
    return number * number;
}
console.log(sqr(9))

const username: string = "jeevan"; 

const greet = (name: string): void => { 
    console.log('hello ' + name);
};

greet(username);

const introduce = (name: string, age?: number): string => 
    age?  `My name is ${name} and I am ${age} years old.` : `My name is ${name}.`;

console.log(introduce("Jeevan"));
console.log(introduce("Jeevan", 25));


const add = (a: number, b: number) => a + b;
console.log("Sum:", add(15, 18));


const mulp = (a:number, b:number) => a * b;
console.log("Multiplication",mulp(18,15));
