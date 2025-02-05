const area = (length:number, breadth:number) =>{
    return length * breadth
}

console.log(area(7,8));

const tag = "Jai";
const sal = 20000;
const grant = (tag: string, sal:  number) =>{
    return ('hi '+ tag + ' your salary is ' + sal);
}
console.log(grant(tag,sal));

type StringArrays = string[];
const cars:StringArrays = ['audi', 'bmw', 'cheverolet'];
console.log(cars);

const nums = [5,10,15,20,25];

nums.push(30);

console.log(nums);

const perimeter =(surface:number, radius:number) =>{
    return surface + radius;
}

console.log(perimeter(4,6));

