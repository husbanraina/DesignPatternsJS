import { Document } from "./document.js";
import { SimplePrinter } from "./simplePrinter.js";
import { MultiPurposeMachine } from "./multiPurposeMachine.js";

const doc = new Document("Hello, World!");
const simplePrinter = new SimplePrinter();
const multiPurposeMachine = new MultiPurposeMachine();


simplePrinter.print(doc);
multiPurposeMachine.print(doc);
multiPurposeMachine.copy(doc);
multiPurposeMachine.scan(doc);
