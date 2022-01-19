import nodemailer from 'nodemailer'
import Handlebars from './handlebars'
export default class NodeMailer extends Handlebars {
   transporter
   mailUser
   mailPass
   EMAIL_TOKEN_EXPIRESIN
   private senderAddress
   constructor() {
      super()
      this.senderAddress = '"Comuter Store 👻" <computer@store.hu>'
      this.EMAIL_TOKEN_EXPIRESIN = '15'
      this.mailUser = process.env.MAILTRAP_USER
      this.mailPass = process.env.MAILTRAP_PASS
      this.transporter = nodemailer.createTransport({
         host: 'smtp.mailtrap.io',
         port: 2525,
         auth: {
            user: this.mailUser,
            pass: this.mailPass
         }
      })
   }
   async sendEmailWhenUserRegisters(to: string, subject: string, userName: string, confirmationCode: string) {
      const renderedHtml = await this.renderHbsToPlainHtmlForRegister({
         confirmationCode,
         userName,
         EMAIL_TOKEN_EXPIRESIN: this.EMAIL_TOKEN_EXPIRESIN
      })
      let info = await this.transporter.sendMail({
         from: this.senderAddress,
         to,
         subject,
         html: renderedHtml
      })
      return info
   }

   async resendEmailWhenTokenExpiresOrInvalid(userEmail: string, newConfirmationCode: string) {
      let emailInformation = await this.transporter.sendMail({
         from: this.senderAddress,
         to: userEmail,
         subject: 'Megerősítő kód újraküldése',
         html: `
            <h1>Megerősítő kód</h1>
            <br>
            <a href="http://localhost:3000/email-confirm/${newConfirmationCode}">Ezen a linken keresztül tudod megtenni</a><br>
            <p>Ha nem működik, másold be a keresősávba: http://localhost:3000/email-confirm/${newConfirmationCode}</p>
            <h5>A kód ${this.EMAIL_TOKEN_EXPIRESIN} percig érvényes!</h5>
         `
      })
      return emailInformation
   }
}
