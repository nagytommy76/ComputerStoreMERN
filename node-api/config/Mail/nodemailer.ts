import { Resend } from 'resend'
import Handlebars from './handlebars'
import { URL_PATH } from '../endpoints.config'

import { CartItemsType } from '../../models/User/UserTypes'
import { ObjectId } from 'mongoose'
export default class NodeMailer extends Handlebars {
   EMAIL_TOKEN_EXPIRESIN
   private resend
   private senderAddress: string
   constructor() {
      super()
      this.senderAddress = '"Computer Store Hobby Project👻" <onboarding@resend.dev>'
      this.EMAIL_TOKEN_EXPIRESIN = '15'
      this.resend = new Resend(process.env.RESEND_API_KEY)
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
      let info = await this.resend.emails.send({
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
         let emailInformation = await this.resend.emails.send({
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
         let emailInfo = await this.resend.emails.send({
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
