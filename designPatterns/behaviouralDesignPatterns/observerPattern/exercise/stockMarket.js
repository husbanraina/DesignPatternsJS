import { Subject } from "./subject.js";

export class StockMarket extends Subject{
    #observers ;
    #priceChangeThreshold ;

    constructor(priceChangeThreshold){
        super();
        this.#observers = [];
        this.#priceChangeThreshold = priceChangeThreshold;
    }

    registerObserver(o){
        this.#observers.push(o);
    }

    removeObserver(o){
        this.#observers = this.#observers.filter(obs => obs !== o);
    }

    notifyObservers(stockSymbol,newPrice){

        this.#observers.forEach(observer => observer.update(stockSymbol,newPrice));

    }

    setStockPrice(stockSymbol,newPrice,oldPrice){
        const priceChange = (Math.abs(newPrice - oldPrice)/oldPrice)*100 ;

        if(priceChange>=this.#priceChangeThreshold)
        {
            this.notifyObservers(stockSymbol,newPrice)
        }
    }




}