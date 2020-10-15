import { Queue } from "@quirrel/next";
import { createTransport } from "nodemailer"

const mail = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  }
})

export default Queue(
  "queues/reminder",
  async (recipient) => {
    mail.sendMail({
      to: recipient,
      from: "water-reminder@quirrel.dev",
      subject: "Remember to drink some water!",
      text: `
Drinking water is important, so go drink some.

Powered by Quirrel
`.trim()
    })
  }
);
