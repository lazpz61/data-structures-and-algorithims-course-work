// Static Methods

/*
Static Methods are often used to create a utility function for an application. --This is not too common to use--
*/




// Static methods give functionality that is not relevant to an individual instance. 
// But we still want it to be part fot he class because its best to place it into this class category. 
// when you call the method you dont instantiate the method you have to call it on the name of the class. 


class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = []
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >=3){
            return "You are expelled!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }

    static enrollStudents(... students){
        return "ENROLLING STUDENTS!"
    }

}


//The keyword this refers to the object created from the class, also known as an instance. 


let firstStudent = new Student("Lazaro", "Perez")
let secondStudent = new Student("Alberis", "Perez")




class Point {
    constructor(x,y){
        this.x =  x;
        this.y = y;
      }

      static distance(a,b){
          const dx = a.x - b.x;
          const dy = a.y - b.y;

          return Math.hypot(dx, dy)
      }
}
const p1 =  new Point(5,5);
const p2 = new Point(10,10);





