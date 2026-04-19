// Realization:
// A class implements a contract defined by another class/interface.
// Wallet implements the pay() method defined in Payment.
// Ensures that all subclasses follow the same structure.

class Payment{
    pay(amount){
        throw new Error("Must implement pay()")
    }
}

class Wallet extends Payment{


    pay(amount){
        console.log(`Paid ${amount} using wallet`)

    }
}

const payment = new Wallet();
payment.pay(100)