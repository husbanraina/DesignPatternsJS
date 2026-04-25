export class PaymentProcessor{

    processPayment(paymentMethod, amount){
        paymentMethod.pay(amount); // runtime polymorphism
    }
}