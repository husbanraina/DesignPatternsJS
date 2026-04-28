import { Observer } from "./observer.js";

export class InvestorB extends Observer{

    update(stockSymbol,newPrice){
        console.log( `Investor B is notified of ${stockSymbol}s new price of ${newPrice}.`)
    }

}