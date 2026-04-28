import { Observer } from "./observer.js";

export class MobileDevice extends Observer{
    update(temperature){
        console.log(`Mobile Device:- Current Temperature updated to: ${temperature}`);

    }
}