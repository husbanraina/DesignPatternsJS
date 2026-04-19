// Aggregation:
// A special type of association with a "has-a" relationship.
// Department has Professors, but Professors can exist independently.
// Represents weak ownership (part-of but not dependent).

class Professor{
    constructor(name){
        this.name = name ;
    }

    getName(){
        return this.name 
    }
}

class Department{
    constructor(name, professors){
        this.name = name ;
        this.professors = professors ;
    }

    showProfessors(){
        console.log(`Departmen ${this.name}`)
        this.professors.forEach(p => console.log(p.getName()))
    }
}

const p1 = new Professor("Mr Husban");
const p2 = new Professor("Mr Raina");

const dept = new Department("CS", [p1,p2]);
dept.showProfessors()