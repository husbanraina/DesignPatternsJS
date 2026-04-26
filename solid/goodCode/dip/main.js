import { NotificationService } from "./notificatonService.js";
import { EmailService } from "./emailService.js";
import { SmsService } from "./smsService.js";

const emailService = new EmailService();
const smsService = new SmsService();

const emailNotifier = new NotificationService(emailService);
const smsNotifier = new NotificationService(smsService);

emailNotifier.send("Hello World!");
smsNotifier.send("Bye");