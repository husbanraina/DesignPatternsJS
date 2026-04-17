import { PaymentMethod } from "../Interfaces/PaymentMethod.js";


export class Upi extends PaymentMethod{

    constructor(userName,methodId,upiId){
        super(userName,methodId) ;
        this.upiId = upiId ;
    }

    pay(amount)
    {
        console.log(`${this.userName} paid ${amount} using upi: ${this.upiId}`) ;
    }
}