class PaymentProcessor {
  processPayment(paymentMethod, amount) {
    if (paymentMethod === "creditCard") {
      console.log(`Paid ₹${amount} using Credit Card`);
    } else if (paymentMethod === "debitCard") {
      console.log(`Paid ₹${amount} using Debit Card`);
    } else if (paymentMethod === "upi") {
      console.log(`Paid ₹${amount} using UPI`);
    } else {
      throw new Error("Unsupported payment method");
    }
  }
}

// Usage
const processor = new PaymentProcessor();

processor.processPayment("creditCard", 100);
processor.processPayment("upi", 200);