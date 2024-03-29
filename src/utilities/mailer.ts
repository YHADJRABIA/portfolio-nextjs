import { Locale } from "@/types/locales"
import nodemailer from "nodemailer"

const sender = process.env.NODEMAILER_SENDER_EMAIL
const pass = process.env.NODEMAILER_SENDER_EMAIL_PASSWORD
const service = process.env.NODEMAILER_SERVICE
const recipient = process.env.RECEIVING_EMAIL

const transporter = nodemailer.createTransport({
  service,
  auth: {
    user: sender,
    pass,
  },
})

interface ISendEmail {
  (name: string, email: string, message: string): Promise<void>
}

interface IAcknowledgeReceipt {
  (name: string, email: string, locale: Locale): Promise<void>
}

export const sendEmail: ISendEmail = async (name, email, message) => {
  const incomingEmail = `
    From: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `
  await transporter.sendMail({
    from: sender,
    to: recipient,
    subject: "New portfolio message!",
    text: incomingEmail,
    html: incomingEmail.replace(/\r\n/g, "<br>"),
  })
}

export const acknowledgeReceipt: IAcknowledgeReceipt = async (
  name,
  email,
  lang
) => {
  const outgoingEmail = {
    title: "Acknowledgement of receipt",
    content: `
    Dear ${name},\r\n
    \r\n
    Thank you for reaching out!\r\n
    I shall get back to you as soon as possible.\r\n
    \r\n
    Best regards,\r\n
    \r\n
    Yacine H.R.`,
  }

  switch (lang) {
    case "fr":
      outgoingEmail.title = "Accusé de réception"
      outgoingEmail.content = `
      Chère/Cher ${name},\r\n
      \r\n
      Merci pour votre message !\r\n
      Je reviendrai vers vous dès que possible.\r\n
      \r\n
      Bien à vous,\r\n
      \r\n
      Yacine H.R.`
      break

    case "sv":
      outgoingEmail.title = "Bekräftelsemail"
      outgoingEmail.content = `
      Hej ${name},\r\n
      \r\n
      Tack för ditt meddelande!\r\n
      Jag återkommer till dig så snart som möjligt.\r\n
      \r\n
      Med vänliga hälsningar,\r\n
      \r\n
      Yacine H.R.`
      break

    case "ru":
      outgoingEmail.title = "Подтверждение получения"
      outgoingEmail.content = `
      Уважаемая/Уважаемый ${name},\r\n
      \r\n
      Спасибо за ваше письмо!\r\n
      Напишу вам как можно скорее.\r\n
      \r\n
      С уважением,\r\n
      \r\n
      Ясин Х.Р.`
      break

    default:
      break
  }

  await transporter.sendMail({
    from: sender,
    to: email,
    subject: outgoingEmail.title,
    text: outgoingEmail.content,
    html: outgoingEmail.content.replace(/\r\n/g, "<br>"),
  })
}
