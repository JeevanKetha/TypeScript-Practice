let names = ['Jeevan', 'Pavan', 'Madhu', 'Eswar', 'Krishna'];

names.push('Naveen');
names = names.filter(name => name !== 'Krishna');

console.log(names); 
console.log(names[0]);

let numbers = [5,10,15,20,25];

numbers.push(30);
numbers = numbers.filter(number => number !==10);

console.log(numbers);

const mixed = ['age',21,'salary',50000];
mixed.push('exp',2);

console.log(mixed);

console.log("hello");



