export class NotificationService{
    #channel;
    constructor(channel)
    {
        this.#channel = channel ;// dependency injected
    }

    send(message){
        this.#channel.notify(message);
    }
}