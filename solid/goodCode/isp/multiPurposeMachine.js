import { Printer } from "./printer.js";
import { Scanner } from "./scanner.js";
import { Copier } from "./copier.js";

// MultiPurposeMachine:
// In JavaScript, interfaces are not strictly enforced.
// This class conceptually implements Printer, Scanner, and Copier
// by providing print(), scan(), and copy() methods.
// This follows duck typing — if an object has the required methods,
// it is treated as implementing those interfaces.
export class MultiPurposeMachine extends Printer{

    print(doc){
        console.log("Printing document using multiPurposeMachine: " + doc.getContent());
    }

    scan(doc){
        console.log("Scanning document...")
    }

    copy(doc){
        console.log("Copying document...")
    }
}