export class Subject{

    attach(observer){
        throw new Error("attach() method must be implemented.")

    }

    detach(observer){
        throw new Error("detach() method must be implemented.")

    }

    notifyObservers(){
        throw new Error("notifyObservers() method must be implemented.")
    }
}