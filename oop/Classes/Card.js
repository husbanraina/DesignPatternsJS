import { PaymentMethod } from "../Interfaces/PaymentMethod.js";

export class Card extends PaymentMethod{
    #cardNumber ;
    constructor(userName,methodId,cardNumber){
        super(userName,methodId);
        this.#cardNumber = cardNumber ;
    }


    getCardNumber()
    {
        return this.#cardNumber;
    }
}

