import { Readable } from "./readable.js";
import { ReadableFile } from "./readableFile.js";
import { Writable } from "./writable.js";

// WritableFile:
// Conceptually implements Readable and Writable.
// JS uses duck typing — presence of read() and write() defines behavior.
//If it looks like a duck and behaves like a duck, it is a duck.
export class WriteableFile extends ReadableFile {
    write(){
        console.log("Writing to file");
   }

}
 
