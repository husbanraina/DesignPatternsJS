export class PaymentMethod{
     constructor(userName,methodId) {
        
        this.userName = userName;
        this.methodId = methodId ;
    }
    pay(amount)
    {
        throw new Error("pay() must be implemented");
    }
}