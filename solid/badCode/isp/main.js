import { MultiPurposeMachine } from "./multiPurposeMachine.js";
import { SimplePrinter } from "./simplePrinter.js";
import { Document } from "./document.js";

const document = new Document("Hello, World!");
const simplePrinter = new SimplePrinter();
const multiPurposeMachine = new MultiPurposeMachine();

console.log(document.getContent())
simplePrinter.print(document);
multiPurposeMachine.print(document)
