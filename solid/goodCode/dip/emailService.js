import { NotificationChannel } from "./notificationChannel.js";

export class EmailService extends NotificationChannel {
    notify(message){
        console.log("Sending Email: " + message);
    }
}