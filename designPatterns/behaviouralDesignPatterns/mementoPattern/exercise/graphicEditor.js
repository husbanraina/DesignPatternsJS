import { EditorMemento } from "./editorMemento.js";

export class GraphicEditor{
    #shapeType;
    #x;
    #y;
    #color;
    #size;

    setShape(shapeType, x, y, color, size) {
        this.#shapeType = shapeType;
        this.#x = x;
        this.#y = y;
        this.#color = color;
        this.#size = size;
    }

    save() {
        return new EditorMemento(
        this.#shapeType,
        this.#x,
        this.#y,
        this.#color,
        this.#size
        );
    }

    restore(memento) {
        this.#shapeType = memento.getShapeType();
        this.#x = memento.getX();
        this.#y = memento.getY();
        this.#color = memento.getColor();
        this.#size = memento.getSize();
    }

    getShape() {
        return `Shape: ${this.#shapeType}, Position: (${this.#x}, ${this.#y}), Color: ${this.#color}, Size: ${this.#size}`;
    }


}