import nodemailer, { Transporter } from 'nodemailer'
import { IMailProvider, MailMessage } from '../../IMailProvider'


export class MailtrapProvider implements IMailProvider {
  private transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: parseInt(process.env.MAILTRAP_PORT),
      secure: JSON.parse(process.env.MAILTRAP_SECURE),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });
  }

  async sendEmail(message: MailMessage): Promise<void> {
    await this.transporter.sendMail({
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
