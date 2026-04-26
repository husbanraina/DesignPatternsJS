import { NotificationChannel } from "./notificationChannel.js";

export class SmsService extends NotificationChannel {
    notify(message) {
        console.log("Sending SMS: " + message);
    }
}
