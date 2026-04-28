import { Observer } from "./observer.js";

export class InvestorA extends Observer{

    update(stockSymbol,newPrice){
        console.log(`Investor A is notified of ${stockSymbol}s new price of ${newPrice}.`)
    }
}