import { Card } from "./Card.js";

export class DebitCard extends Card{

      pay(amount){

        console.log(`${this.userName} Paid ${amount} using Debit:${this.cardNumber}`)
    }



}