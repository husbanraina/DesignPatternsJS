// Inheritance:
// An "is-a" relationship where a child class extends a parent class.
// Dog inherits properties and methods from Animal.

class Animal{

    eat(){
        console.log("Animal is eating")
    }
}

class Dog extends Animal{

    bark(){
        console.log("Dog is barking")
    }
}

const dog = new Dog();

dog.eat();
dog.bark();