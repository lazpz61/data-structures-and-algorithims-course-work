class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Lazaro", "Perez")
let secondStudent = new Student("Alberis", "Perez")