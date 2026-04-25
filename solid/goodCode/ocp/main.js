import { PaymentProcessor } from "./paymentProcessor.js";
import { PayPal } from "./paypal.js";
import { Upi } from "./upi.js";
import { CreditCard } from "./creditCard.js";
import { DebitCard } from "./debitCard.js";

const processor = new PaymentProcessor();

const credit = new CreditCard();
const debit = new DebitCard();
const upi = new Upi();
const paypal = new PayPal();

processor.processPayment(credit, 100);
processor.processPayment(debit, 200);
processor.processPayment(upi, 300);
processor.processPayment(paypal, 400)