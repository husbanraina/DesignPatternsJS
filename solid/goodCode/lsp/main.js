import { ReadableFile } from "./readableFile.js";
import { WriteableFile } from "./writableFile.js";


function readAnyFile(file){
    file.read(); // works for all readable files 
}

const readOnly = new ReadableFile();
const writeable = new WriteableFile();


readAnyFile(readOnly);
readAnyFile(writeable);