import nodemailer from 'nodemailer'

const mailUser = process.env.MAILTRAP_USER
const mailPass = process.env.MAILTRAP_PASS

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
      from: '"Fred Foo 👻" <computer@store.hu>', // sender address
      to, // list of receivers
      subject, // Subject line
      text: 'Hello world?', // plain text body
      html: `<h1>Kedves ${userName}! Kérlek aktiváld az email címed</h1><br><p>Ezen a linken keresztül tudod megtenni: ${confirmationCode}</p>` // html body
   })
   return info
}
