import fs from 'fs'
import mjml from 'mjml'
import { compile } from 'handlebars'
import { URL_PATH } from '../endpoints.config'

export default abstract class Handlebars {
   renderAnyMjmlToPlainHtml(renderEmailFolderAndName: string, contextObject: any) {
      const readMjmlAsString = fs.readFileSync(`./views/${renderEmailFolderAndName}.mjml`, 'utf8')

      const renderedText = compile(readMjmlAsString, { strict: true })

      const mjmlText = renderedText({
         URL_PATH,
         ...contextObject,
      })
      const html = mjml(mjmlText)
      return html.html
   }
}

// https://stackoverflow.com/questions/43111628/mjml-template-interpolation-dynamic-data-context
// https://handlebarsjs.com/api-reference/compilation.html#handlebars-compile-template-options
