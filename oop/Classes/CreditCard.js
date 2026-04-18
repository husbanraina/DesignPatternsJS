import { Card } from "./Card.js";

export class CreditCard extends Card{

    pay(amount){

        console.log(`${this.getUserName()} Paid ${amount} using Credit Card:${this.getCardNumber()}`)
    }
}
