import { Card } from "./Card.js";

export class DebitCard extends Card{

      pay(amount){

        console.log(`${this.getUserName()} Paid ${amount} using Debit:${this.getCardNumber()}`)
    }



}