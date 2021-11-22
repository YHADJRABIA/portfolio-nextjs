const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const incomingEmail = `
    From: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;
  await sendgrid.send({
    to: process.env.RECEIVING_EMAIL,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject: "New portfolio message!",
    text: incomingEmail,
    html: incomingEmail.replace(/\r\n/g, "<br>"),
  });
};

export const acknowledgeReceipt = async (
  name: string,
  email: string,
  lang: string
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
  };

  switch (lang) {
    case "fr":
      outgoingEmail.title = "Accusé de réception";
      outgoingEmail.content = `
      Chère/Cher ${name},\r\n
      \r\n
      Merci pour votre message !\r\n
      Je reviendrai vers vous dès que possible.\r\n
      \r\n
      Bien à vous,\r\n
      \r\n
      Yacine H.R.`;
      break;

    case "sv":
      outgoingEmail.title = "Bekräftelsemail";
      outgoingEmail.content = `
      Hej ${name},\r\n
      \r\n
      Tack för ditt meddelande!\r\n
      Jag återkommer till dig så snart som möjligt.\r\n
      \r\n
      Med vänliga hälsningar,\r\n
      \r\n
      Yacine H.R.`;
      break;

    case "ru":
      outgoingEmail.title = "Подтверждение получения";
      outgoingEmail.content = `
      Уважаемая/Уважаемый ${name},\r\n
      \r\n
      Спасибо за ваше письмо!\r\n
      Напишу вам как можно скорее.\r\n
      \r\n
      С уважением,\r\n
      \r\n
      Ясин Х.Р.`;
      break;

    default:
      break;
  }

  await sendgrid.send({
    to: email,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject: outgoingEmail.title,
    text: outgoingEmail.content,
    html: outgoingEmail.content.replace(/\r\n/g, "<br>"),
  });
};
