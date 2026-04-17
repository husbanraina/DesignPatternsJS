import { PaymentMethod } from "../Interfaces/PaymentMethod.js";

export class Card extends PaymentMethod{
    constructor(userName,methodId,cardNumber){
        super(userName,methodId);
        this.cardNumber = cardNumber ;
    }
}