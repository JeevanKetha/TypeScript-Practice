/*class Teacher{
    name : string;
    subject : string;
    salary : number;

    constructor (name: string, subject: string, salary: number) {

        this.name= name;
        this.salary = salary;
        this.subject = subject;
    }
    displayinfo(){
        console.log('Name: ${this.name}, Subject: ${this.subject}, Salary: ${this.salary}');
    }
}

let teachers:Teacher[] = [];

teachers.push(new Teacher("GABIREL", "ENGLISH", 30000));
teachers.push(new Teacher("Pavan", "Full Stack", 90000));

teachers.forEach(teacher => teacher.displayinfo());
*/

class Teacher {
    name: string;
    subject: string;
    salary: number;

    constructor(name: string, subject: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.subject = subject;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Subject: ${this.subject}, Salary: ${this.salary}`);
    }
}

// Create an array of teachers
let teachers: Teacher[] = [];

teachers.push(new Teacher("GABIREL", "ENGLISH", 30000));
teachers.push(new Teacher("Pavan", "Full Stack", 90000));

// Display all teacher details
teachers.forEach(teacher => teacher.displayInfo());
