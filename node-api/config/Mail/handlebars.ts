import fs from 'fs'
import { create } from 'express-handlebars'
import { compile } from 'handlebars'
import { UnknownObject } from 'express-handlebars/types'
import { URL_PATH } from '../endpoints.config'

import mjml from 'mjml'

export default abstract class Handlebars {
   private expressHbsInstance
   private filePath
   constructor() {
      this.filePath = './views'
      this.expressHbsInstance = create({
         defaultLayout: 'main',
         layoutsDir: 'views/',
         extname: 'hbs',
         compilerOptions: { strict: true },
      })
   }

   async renderAnyHbsToPlainHtmlWithMain(
      moduleToRender: string,
      parametersObject?: UnknownObject | undefined
   ) {
      const renderedModule = await this.expressHbsInstance.render(`${this.filePath}/${moduleToRender}.hbs`, {
         ...parametersObject,
         URL_PATH,
      })
      return this.#renderMainHandlebarsModule(renderedModule)
   }

   renderAnyMjmlToPlainHtml(renderEmailFolderAndName: string, contextObject: any) {
      const readMjmlAsString = fs.readFileSync(`./views/${renderEmailFolderAndName}.mjml`, 'utf8')

      const renderedText = compile(readMjmlAsString)

      const mjmlText = renderedText(contextObject)
      const html = mjml(mjmlText)
      return html.html
   }

   async #renderMainHandlebarsModule(renderedHbsString: string) {
      return await this.expressHbsInstance.render('./views/main.hbs', {
         body: renderedHbsString,
      })
   }
}

// https://stackoverflow.com/questions/43111628/mjml-template-interpolation-dynamic-data-context
// https://handlebarsjs.com/api-reference/compilation.html#handlebars-compile-template-options
