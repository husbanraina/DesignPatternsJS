export class EditorMemento{

    #shapeType;
    #x
    #y
    #color
    #size

    constructor( shapeType, x, y, color, size ){
        this.#shapeType = shapeType;
        this.#x = x;
        this.#y = y;
        this.#color = color;
        this.#size = size;
    }

    getShapeType(){
        return this.#shapeType;
    }

    getX(){
        return this.#x ;
    }

    getY(){
       return this.#y;
    }

    getColor(){
        return this.#color;
    }
    
    getSize(){
        return this.#size;
        
    }




}