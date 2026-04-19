// Association:
// A general relationship where one class is connected to another.
// Here, Teacher has a reference to Student.
// There is no "part-of" relationship — both can exist independently.

class Student{
    constructor(name){
        this.name = name ;
    }

    getName()
    {
        return this.name ;
    }
}

class Teacher{

    constructor(name,student)
    {
        this.name = name ;
        this.student= student
    }

    teach(){
        console.log(`${this.name} is teaching ${this.student.getName()}`)
    }
}


const student = new Student("Raina");
const teacher = new Teacher("Mr Husban",student);


teacher.teach();