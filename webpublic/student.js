"use strict";
class Student {
    constructor(name, classNumber, city) {
        this.name = name;
        this.classNumber = classNumber;
        this.city = city;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Class: ${this.classNumber}, City: ${this.city}`);
    }
}
// Create an array to store student details
let students = [];
// Add student details to the array
students.push(new Student("Jeevan", 10, "Ongole"));
students.push(new Student("Prashanth", 12, "Ongole"));
students.push(new Student("Jai Ram", 11, "Vijayawada"));
// Display the student details
students.forEach(student => student.displayInfo());
