 import { Invoice } from "./invoice.js";
 import { NotificationService } from "./notificationService.js";
 import { InvoiceRepository } from "./invoiceRepository.js";

 const invoice = new Invoice(1000);

 const repo = new InvoiceRepository();
 repo.save(invoice);

 const notificationService = new NotificationService();
 notificationService.sendEmail("husban@email.com", invoice.getInvoice());
