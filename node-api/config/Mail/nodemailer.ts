import nodemailer from 'nodemailer'
import Handlebars from './handlebars'
import { URL_PATH } from '../endpoints.config'

import { CartItemsType } from '../../models/User/UserTypes'
import { ObjectId } from 'mongoose'
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
      this.mailUser = process.env.MAIL_USERNAME
      this.mailPass = process.env.MAIL_PASSWORD
      this.transporter = nodemailer.createTransport({
         service: 'gmail',
         host: 'smtp.gmail.com',
         port: 587,
         secure: true, // true for 465, false for other ports
         auth: {
            user: this.mailUser,
            pass: this.mailPass,
         },
         tls: {
            rejectUnauthorized: true,
         },
      })
   }
   async sendEmailUserRegistersAndResendEmail(
      to: string,
      subject: string,
      userName: string,
      confirmationCode: string
   ) {
      const renderedHtml = this.renderAnyMjmlToPlainHtml('Auth/Register', {
         userName,
         EMAIL_TOKEN_EXPIRESIN: this.EMAIL_TOKEN_EXPIRESIN,
         confirmationPath: `${URL_PATH}email-confirm/${confirmationCode}`,
      })
      let info = await this.transporter.sendMail({
         from: this.senderAddress,
         to,
         subject,
         html: renderedHtml,
      })
      return info
   }

   async sendEmailAfterUserOrder(
      userEmail: string,
      products: CartItemsType[],
      itemId: string,
      orderDate: string,
      totalPrice: number,
      deliveryPrice: number,
      userName: string,
      orderID?: string | ObjectId
   ) {
      try {
         const renderedEmail = this.renderAnyMjmlToPlainHtml('Orders/Orders', {
            EMAIL_TOKEN_EXPIRESIN: this.EMAIL_TOKEN_EXPIRESIN,
            products,
            itemId,
            orderDate,
            totalPrice,
            deliveryPrice,
            orderID,
            userName,
         })

         let emailInformation = await this.transporter.sendMail({
            from: this.senderAddress,
            to: userEmail,
            subject: 'Rendelésed összegzése',
            html: renderedEmail,
         })
         return emailInformation
      } catch (error) {
         console.log(error)
      }
   }

   async sendResetPasswordLinkEmail(validationLink: string, userEmail: string) {
      try {
         const renderedEmail = this.renderAnyMjmlToPlainHtml('Auth/ForgotPass', { validationLink })
         let emailInfo = await this.transporter.sendMail({
            from: this.senderAddress,
            to: userEmail,
            subject: 'Elfelejtett jelszó',
            html: renderedEmail,
         })
         return emailInfo
      } catch (error) {
         console.log(error)
      }
   }
}
