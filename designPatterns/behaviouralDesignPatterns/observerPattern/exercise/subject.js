export class Subject{
    registerObserver(o){
        throw new Error("registerObserver() method must be implemented.")

    }

    removeObserver(o){
        throw new Error("removeObserver() method must be implemented.")
    }

    notifyObservers(stockSymbol,newPrice){
        throw new Error("notifyObservers() method must be implemented." )

    }
}