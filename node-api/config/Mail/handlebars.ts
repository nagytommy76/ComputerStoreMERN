import { create } from 'express-handlebars'
import { UnknownObject } from 'express-handlebars/types'

export default class Handlebars {
   private expressHbsInstance
   private filePath
   constructor() {
      this.filePath = './views/email/'
      this.expressHbsInstance = create({ defaultLayout: 'main', layoutsDir: 'views/email', extname: 'hbs' })
   }

   async renderHbsToPlainHtmlForRegister(parametersObject?: UnknownObject | undefined) {
      const renderedRegister = await this.expressHbsInstance.render(`${this.filePath}/Register.hbs`, parametersObject)
      return await this.expressHbsInstance.render('./views/email/main.hbs', {
         body: renderedRegister
      })
   }
}
