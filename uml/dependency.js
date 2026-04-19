// Dependency:
// A temporary relationship where one class uses another only when needed.
// Printer uses Document in the print method but does not store it.
// Represents short-term usage.

class Document{
    constructor(content){
        this.content = content ;
    }

    getContent(){
        return this.content ;
    }
}

class Printer{

    print(doc){
        console.log(`Printing :${doc.getContent()}`)
    }
}


const doc = new Document("Hello");
const printer = new Printer();

printer.print(doc);