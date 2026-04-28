import { Observer } from "./observer.js";

export class DisplayDevice extends Observer {
    update(temperature) {
        console.log(`Display Device:- Current Temperature updated to: ${temperature}`);
    }

}