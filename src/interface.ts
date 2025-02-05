/*interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  console.log(coloredRectangle.color);
  */

interface Employee {
  name: string;
  age: number;
  position: string;
}

let employee1: Employee = {
  name: "John",
  age: 30,
  position: "Software Engineer"
};

console.log(employee1);
