// Composition:
// A strong "has-a" relationship where the parent creates and owns the child.
// House creates Rooms internally, and Rooms cannot exist independently.
// Represents strong ownership and lifecycle dependency.

class Room{
    constructor(name){
        this.name = name ;
    }

    getName(){
        return this.name ;
    }
}


class House{
    constructor(){
        this.rooms = [];
        this.rooms.push( new Room("Bedroom"))
        this.rooms.push( new Room("Bathroom"))
    }

    showRooms(){
     this.rooms.forEach(r=>console.log(r.getName()))
    }
}

const house = new House();
house.showRooms()