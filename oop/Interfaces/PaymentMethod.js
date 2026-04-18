export class PaymentMethod{
    #userName ;
    #methodId ;
     constructor(userName,methodId) {
        
        this.#userName = userName;
        this.#methodId = methodId ;
    }
    pay(amount)
    {
        throw new Error("pay() must be implemented");
    }

    getUserName()
    {
        return this.#userName ;
    }

    getMethodId()
    {
        return this.#methodId ;
    }
}