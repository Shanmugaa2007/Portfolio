import nodemailer from 'nodemailer';

let transporter;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function contactHandler(req, res, next) {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      const error = new Error('Name, email, and message are all required.');
      error.status = 400;
      throw error;
    }
    if (!EMAIL_RE.test(email)) {
      const error = new Error('Please provide a valid email address.');
      error.status = 400;
      throw error;
    }

    await getTransporter().sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    res.status(201).json({ message: 'Message sent successfully.' });
  } catch (err) {
    next(err);
  }
}
