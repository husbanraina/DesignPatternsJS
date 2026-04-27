export class Caretaker {
  #history;

  constructor() {
    this.#history = [];
  }

  saveState(editor) {
    this.#history.push(editor.save());
  }

  undo(editor) {
    if (this.#history.length <= 1) {
      console.log("No more undo possible");
      return;
    }

    this.#history.pop(); // remove current
    editor.restore(this.#history[this.#history.length - 1]); // restore previous
  }
}