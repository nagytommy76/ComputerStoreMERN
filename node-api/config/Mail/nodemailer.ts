import nodemailer from 'nodemailer'
import { create } from 'express-handlebars'

const mailUser = process.env.MAILTRAP_USER
const mailPass = process.env.MAILTRAP_PASS
export const EMAIL_TOKEN_EXPIRESIN = '15'

const expressHbsInstance = create()

let transport = nodemailer.createTransport({
   host: 'smtp.mailtrap.io',
   port: 2525,
   auth: {
      user: mailUser,
      pass: mailPass
   }
})

export const sendEmailWhenUserRegisters = async (to: string, subject: string, userName: string, confirmationCode: string) => {
   const renderedHtml = await expressHbsInstance.render('./views/email/Register.hbs', {
      confirmationCode,
      userName,
      EMAIL_TOKEN_EXPIRESIN
   })
   let info = await transport.sendMail({
      from: '"Comuter Store 👻" <computer@store.hu>', // sender address
      to, // list of receivers
      subject, // Subject line
      html: renderedHtml
   })
   return info
}

export const resendEmailWhenTokenExpiresOrInvalid = async (userEmail: string, newConfirmationCode: string) => {
   let emailInformation = await transport.sendMail({
      from: '"Comuter Store 👻" <computer@store.hu>',
      to: userEmail,
      subject: 'Megerősítő kód újraküldése',
      html: `
         <h1>Megerősítő kód</h1>
         <br>
         <a href="http://localhost:3000/email-confirm/${newConfirmationCode}">Ezen a linken keresztül tudod megtenni</a><br>
         <p>Ha nem működik, másold be a keresősávba: http://localhost:3000/email-confirm/${newConfirmationCode}</p>
         <h5>A kód ${EMAIL_TOKEN_EXPIRESIN} percig érvényes!</h5>
      `
   })
   return emailInformation
}
