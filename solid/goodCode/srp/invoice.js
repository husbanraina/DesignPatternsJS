export class Invoice{
    #amount

    constructor(amount){
        this.#amount = amount ;
    }

    getInvoice() {
    return `Invoice Amount: ₹${this.#amount}`;
  }
}