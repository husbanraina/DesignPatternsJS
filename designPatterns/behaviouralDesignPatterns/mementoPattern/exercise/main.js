import { GraphicEditor } from "./graphicEditor.js";
import { Caretaker } from "./caretaker.js";

const graphicEditor = new GraphicEditor();
const caretaker = new Caretaker();

graphicEditor.setShape("Circle", 10, 20, "Red", 5);
caretaker.saveState(graphicEditor);

graphicEditor.setShape("Square", 30, 40, "Blue", 10);
caretaker.saveState(graphicEditor);

graphicEditor.setShape("Triangle", 50, 60, "Green", 15);
caretaker.saveState(graphicEditor);


caretaker.undo(graphicEditor);
console.log(graphicEditor.getShape());

caretaker.undo(graphicEditor);
console.log(graphicEditor.getShape());

caretaker.undo(graphicEditor);
console.log(graphicEditor.getShape());