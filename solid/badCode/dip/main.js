import { NotificationService } from "./notificationService.js";


const notificationService = new NotificationService();

notificationService.notifyByEmail("Hello World!");
notificationService.notifyBySms("Bye");