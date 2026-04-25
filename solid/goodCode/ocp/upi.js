import { PaymentMethod } from "./PaymentMethod.js";

export class Upi extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ₹${amount} using UPI`);
  }
}