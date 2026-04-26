import { Machine } from "./machine.js";

export class SimplePrinter extends Machine{

    print(doc){
        console.log("Printing document using simplePrinter: " + doc.getContent());

    }

     scan(doc) {
        throw new Error("SimplePrinter cannot scan"); //forced
    }

    copy(doc) {
        throw new Error("SimplePrinter cannot copy"); //forced
    }


}