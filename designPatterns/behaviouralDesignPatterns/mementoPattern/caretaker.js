export class Caretaker{
    #history 

    constructor(){
        this.#history = [];
    }
    
    saveState(editor){
        const memento = editor.save();
        this.#history.push(memento);

    }

    undo(editor) {
        if (this.#history.length <= 1) {
            console.log("No more undo operations possible");
            return;
        }

        this.#history.pop();
        editor.restore(this.#history[this.#history.length - 1]);
    }
}