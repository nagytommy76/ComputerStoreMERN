import nodemailer from 'nodemailer'
import Handlebars from './handlebars'
import fs from 'fs'
import { URL_PATH } from '../endpoints.config'

import { CartItemsType } from '../../models/User/UserTypes'
import { ObjectId } from 'mongoose'
export default class NodeMailer extends Handlebars {
   EMAIL_TOKEN_EXPIRESIN
   private host
   private port
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
      this.host = process.env.MAIL_HOST
      this.port = process.env.MAIL_PORT as number | undefined
      this.transporter = nodemailer.createTransport({
         host: this.host,
         port: this.port,
         auth: {
            user: this.mailUser,
            pass: this.mailPass,
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
         URL_PATH,
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
            URL_PATH,
            userName,
         })
         // fs.writeFile('emailSent.html', renderedEmail, err => {
         //    if (err) console.log(err)
         // })
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
}
