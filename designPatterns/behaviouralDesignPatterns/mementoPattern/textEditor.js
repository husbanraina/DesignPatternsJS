import { EditorMemento } from "./editorMemento.js";

export class TextEditor{
    #content ;

    constructor(){
        this.#content = '';

    }

    write(text){
        this.#content+=text ;
    }

    save(){
        return new EditorMemento(this.#content);
    }

    restore(memento){
        this.#content = memento.getContent();
    }

    getContent(){
        return this.#content;

    }
}