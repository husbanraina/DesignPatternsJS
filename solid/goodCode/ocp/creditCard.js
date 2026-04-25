import { PaymentMethod } from "./paymentMethod.js";

export class CreditCard extends PaymentMethod{
    pay(amount){
        console.log(`Paid ${amount} using Credit Card`)

    }
}