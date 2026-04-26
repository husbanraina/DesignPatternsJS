import { Machine } from "./machine.js";

export class MultiPurposeMachine extends Machine {

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