import { Readable } from "./readable.js";

export class ReadableFile extends Readable{

    read(){
        console.log("Reading file");
    }

}