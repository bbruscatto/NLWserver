import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0c0a1922a95af4",
        pass: "b92a73431f7650"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedgett <oi@feedget.com>',
            to: 'Brunno Bruscatto <bruscatto@gmail.com>',
            subject,
            html: body,
        })
    };
}