import { PaymentMethod } from "./paymentMethod.js";

export class DebitCard extends PaymentMethod{
    pay(amount){
        console.log(`Paid ${amount} using Debit Card`)

    }
}