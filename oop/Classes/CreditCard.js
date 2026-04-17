import { Card } from "./Card.js";

export class CreditCard extends Card{

    pay(amount){

        console.log(`${this.userName} Paid ${amount} using Credit Card:${this.cardNumber}`)
    }
}
