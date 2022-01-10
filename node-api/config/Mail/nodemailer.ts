import nodemailer from 'nodemailer'

const mailUser = process.env.MAILTRAP_USER
const mailPass = process.env.MAILTRAP_PASS
export const EMAIL_TOKEN_EXPIRESIN = '15'

let transport = nodemailer.createTransport({
   host: 'smtp.mailtrap.io',
   port: 2525,
   auth: {
      user: mailUser,
      pass: mailPass
   }
})

export const sendEmailWhenUserRegisters = async (to: string, subject: string, userName: string, confirmationCode: string) => {
   let info = await transport.sendMail({
      from: '"Comuter Store email regisztráció! 👻" <computer@store.hu>', // sender address
      to, // list of receivers
      subject, // Subject line
      html: `
         <h1>Kedves ${userName}! Kérlek aktiváld az email címed</h1>
         <br>
         <a href="http://localhost:3000/email-confirm/${confirmationCode}">Ezen a linken keresztül tudod megtenni</a><br>
         <p>Ha nem működik, másold be a keresősávba: http://localhost:3000/email-confirm/${confirmationCode}</p>
         <h5>A kód ${EMAIL_TOKEN_EXPIRESIN} percig érvényes!</h5>
      ` // html body
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
