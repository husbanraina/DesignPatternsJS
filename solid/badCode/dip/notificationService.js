import { EmailService } from "./emailService.js";
import { SmsService } from "./smsService.js";

export class NotificationService{
    #emailService;
    #smsService;

    constructor(){
        this.#emailService = new EmailService();
        this.#smsService = new SmsService();

    }

    notifyByEmail(message){
        this.#emailService.sendEmail(message);

    }

    notifyBySms(message){
        this.#smsService.sendSms(message);
    }
}