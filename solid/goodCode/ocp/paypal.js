import { PaymentMethod } from "./PaymentMethod.js";

export class PayPal extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ₹${amount} using PayPal`);
  }
}