import { Subject } from "./subject.js";

export class WeatherStation extends Subject
{
    #observers;
    #temperature ;

    constructor()
    {
        super();
        this.#observers = [];
        this.#temperature = null;
      

    }

    attach(observer){
        this.#observers.push(observer);

    }

    detach(observer)
    {
        this.#observers = this.#observers.filter((obs)=> obs !== observer );

    }

    setTemperature(temperature){
        this.#temperature = temperature;
        this.notifyObservers();
    }

    notifyObservers(){
        this.#observers.forEach
        (observer => observer.update(this.#temperature));

    }
}