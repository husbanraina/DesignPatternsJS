class Invoice {
  #amount 
  #customerEmail
  constructor(amount, customerEmail) {
    this.#amount = amount;
    this.#customerEmail = customerEmail;
  }

  getInvoice() {
    return `Invoice Amount: ₹${this.#amount}`;
  }

  saveToDB() {
    console.log("Saving invoice to database...");
  }

  sendEmailNotification() {
    console.log(`Sending email to ${this.#customerEmail}`);
  }
}

// Usage
const invoice = new Invoice(1000, "husban@email.com");

console.log(invoice.getInvoice());
invoice.saveToDB();
invoice.sendEmailNotification();
