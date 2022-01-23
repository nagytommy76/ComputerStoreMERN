import nodemailer from 'nodemailer'
import Handlebars from './handlebars'

import { CartItemsType } from '../../models/User/UserTypes'
export default class NodeMailer extends Handlebars {
   EMAIL_TOKEN_EXPIRESIN
   private transporter
   private mailUser: string | undefined
   private mailPass: string | undefined
   private senderAddress: string
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
      const renderedHtml = await this.renderAnyHbsToPlainHtml('Auth/Register', {
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
      const renderedEmail = await this.renderAnyHbsToPlainHtml('Auth/Resend', {
         confirmationCode: newConfirmationCode,
         EMAIL_TOKEN_EXPIRESIN: this.EMAIL_TOKEN_EXPIRESIN
      })
      let emailInformation = await this.transporter.sendMail({
         from: this.senderAddress,
         to: userEmail,
         subject: 'Megerősítő kód újraküldése',
         html: renderedEmail
      })
      return emailInformation
   }

   async sendEmailAfterUserOrder(userEmail: string, products: CartItemsType[], itemId: string, orderDate: string) {
      try {
         const renderedEmail = await this.renderAnyHbsToPlainHtml('Orders/Orders', {
            EMAIL_TOKEN_EXPIRESIN: this.EMAIL_TOKEN_EXPIRESIN,
            products,
            itemId,
            orderDate
         })
         let emailInformation = await this.transporter.sendMail({
            from: this.senderAddress,
            to: userEmail,
            subject: 'Megerősítő kód újraküldése',
            html: renderedEmail
         })
         return emailInformation
      } catch (error) {
         console.log(error)
      }
   }
}
