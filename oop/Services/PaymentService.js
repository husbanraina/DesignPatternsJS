
export class PaymentService{
    #paymentMethods ;
    constructor(){
        
        this.#paymentMethods = new Map();
    }

    addPaymentMethod(userId, paymentMethod)
    {
        if(!this.#paymentMethods.has(userId)){
            this.#paymentMethods.set(userId, new Map()) ;
        }

        const methodsMap  = this.#paymentMethods.get(userId);

        if (methodsMap.has(paymentMethod.getMethodId())) {
            console.log("Replacing existing payment method");
        }

        methodsMap.set(paymentMethod.getMethodId(), paymentMethod) ;

        console.log(`Payment method added: ${paymentMethod.getMethodId()}`);
    }

    makePayment(userId, methodId,amount){
        const methodsMap = this.#paymentMethods.get(userId);
        if(!methodsMap){
            console.log("No payment methods found");
            return ;
        }

        const method = methodsMap.get(methodId);

        if(!method){
            console.log("Invalid payment method") ;
            return  ;
        }

        //Runtime polymorphism 
        method.pay(amount);


    }

}