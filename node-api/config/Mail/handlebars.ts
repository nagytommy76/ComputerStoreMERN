import { create } from 'express-handlebars'
import { UnknownObject } from 'express-handlebars/types'
import handlebars from 'handlebars'

const expressHbsInstance = create({ defaultLayout: './views/email/main.hbs', layoutsDir: './views/email/', extname: '.hbs' })

export const renderHbsToPlainHtmlForRegister = async (filePath: string, parametersObject?: UnknownObject | undefined) => {
   return await expressHbsInstance.render(filePath, parametersObject)
   // return await handlebars.compile(filePath, {  })
}
