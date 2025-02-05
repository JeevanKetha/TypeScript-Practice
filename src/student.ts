class Student {
    name: string;
    classNumber: number;
    city: string;
  
    constructor(name: string, classNumber: number, city: string) {
      this.name = name;
      this.classNumber = classNumber;
      this.city = city;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Class: ${this.classNumber}, City: ${this.city}`);
    }
  }
  
  // Create an array to store student details
  let students: Student[] = [];
  
  // Add student details to the array
  students.push(new Student("Jeevan", 10, "Ongole"));
  students.push(new Student("Prashanth", 12, "Ongole"));
  students.push(new Student("Jai Ram", 11, "Vijayawada"));
  
  // Display the student details
  students.forEach(student => student.displayInfo());
