// Payment Service (LLD Practice)
//
// This is a simple payment system designed to demonstrate OOP concepts,
// especially runtime polymorphism.
//
// Features:
// - Add payment methods for a user
// - Make payments using a selected method
//
// Assumptions:
// - Each user has only ONE payment method per type (creditCard, debitCard, upi)
// - methodId represents the type of payment method
// - Adding the same type replaces the existing method
// - Data is stored in-memory using Map
// - All payment methods implement pay(amount) and are executed via polymorphism

import { CreditCard } from "./Classes/CreditCard.js";
import { DebitCard } from "./Classes/DebitCard.js";
import { Upi } from "./Classes/Upi.js";
import { PaymentService } from "./Services/PaymentService.js";

const service = new PaymentService();

const userId1 = "user1";
const userId2 = "user2";

service.addPaymentMethod(
    userId1,
    new CreditCard("Husban","creditCard","husbansCreditCard")
)

service.addPaymentMethod(
    userId1,
    new DebitCard("Husban","debitCard","husbansDebitCard")
)

service.addPaymentMethod(
    userId1,
    new Upi("Husban","upi","husbansUpi")
)


service.addPaymentMethod(
    userId2,
    new CreditCard("Raina","creditCard","rainasCreditCard")
)

service.addPaymentMethod(
    userId2,
    new DebitCard("Raina","debitCard","rainasDebitCard")
)

service.addPaymentMethod(
    userId2,
    new Upi("Raina","upi","rainasUpi")
)

service.makePayment(userId1, "creditCard", 100);
service.makePayment(userId1, "debitCard", 200);
service.makePayment(userId1, "upi", 50);


service.makePayment(userId2, "creditCard", 300);
service.makePayment(userId2, "debitCard", 150);
service.makePayment(userId2, "upi", 75);