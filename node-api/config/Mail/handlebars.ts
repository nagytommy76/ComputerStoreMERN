import { create } from 'express-handlebars'
import { UnknownObject } from 'express-handlebars/types'

const expressHbsInstance = create({ defaultLayout: 'main', layoutsDir: 'views/email/', extname: 'hbs' })

export const renderHbsToPlainHtmlForRegister = async (filePath: string, parametersObject?: UnknownObject | undefined) => {
   const test = await expressHbsInstance.render(filePath, parametersObject)
   return test
   // return await handlebars.compile(filePath, {  })
}

// https://medium.com/how-tos-for-coders/send-emails-from-nodejs-applications-using-nodemailer-mailgun-handlebars-the-opensource-way-bf5363604f54
