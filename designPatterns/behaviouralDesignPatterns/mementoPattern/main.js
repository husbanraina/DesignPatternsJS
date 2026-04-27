import { Caretaker } from "./caretaker.js";
import { TextEditor } from "./textEditor.js";

const editor = new TextEditor();
const caretaker = new Caretaker();

caretaker.saveState(editor);

editor.write("A");
caretaker.saveState(editor);

editor.write("B");
caretaker.saveState(editor);

editor.write("C");
caretaker.saveState(editor);


caretaker.undo(editor); 
console.log(editor.getContent()); 

caretaker.undo(editor); 
console.log(editor.getContent()); 

caretaker.undo(editor); 
console.log(editor.getContent()); 

caretaker.undo(editor); 
console.log(editor.getContent()); 
