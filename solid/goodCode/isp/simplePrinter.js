import { Printer } from "./printer.js";

export class SimplePrinter extends Printer{

    print(doc){
        console.log("Printing document using simplePrinter: "+ doc.getContent());

    }
}