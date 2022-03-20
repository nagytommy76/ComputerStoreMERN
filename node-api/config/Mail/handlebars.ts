import fs from 'fs'
import { create } from 'express-handlebars'
import { compile } from 'handlebars'
import { UnknownObject } from 'express-handlebars/types'
import { URL_PATH } from '../endpoints.config'

import mjml from 'mjml'
import path from 'path'

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

   testFuntion(confirmationCode: string, userName: string, EMAIL_TOKEN_EXPIRESIN: string) {
      const renderedText = compile(`
      <mjml>
      <mj-head>
         <mj-title>ComputerStore Email validáció</mj-title>
         <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500"></mj-font>
         <mj-attributes>
            <mj-all font-family="Montserrat, Helvetica, Arial, sans-serif"></mj-all>
            <mj-text font-weight="400" font-size="16px" color="#000000" line-height="24px"></mj-text>
            <mj-section padding="0px"></mj-section>
         </mj-attributes>
      </mj-head>
      <mj-body background-color="#F2F2F2">
         <mj-section padding="20px 20px 0 20px" background-color="#FFFFFF">
            <mj-column width="35%">
               <mj-text align="left" font-size="20px" font-weight="500">ComputerStore</mj-text>
            </mj-column>
            <mj-column width="65%">
            <mj-text align="right" font-size="20px" font-weight="500"
            >Kedves: {{userName}}</mj-text></mj-column>
         </mj-section>
         <mj-section padding="20px 20px 0 20px" background-color="#FFFFFF">
            <mj-column>
               <mj-text
                  align="center"
                  font-weight="300"
                  padding="30px 40px 10px 40px"
                  font-size="32px"
                  line-height="40px"
                  color="#5FA91D"
                  >Kérlek aktiváld az email címed a megadott linken keresztül!</mj-text
               >
            </mj-column>
         </mj-section>
         <mj-section padding="10px 20px" background-color="#FFFFFF">
            <mj-column>
               <mj-divider width="300px" border-width="3px" border-color="#9B9B9B"></mj-divider>
               <mj-text align="center"
                  >Ha nem működik a gomb kérlek másold be a linket a böngésződ keresősávjába.</mj-text
               >
            </mj-column>
         </mj-section>
         <mj-section
            background-url="http://nimus.de/share/tpl-card/bg.jpg"
            vertical-align="middle"
            background-size="cover"
            background-repeat="no-repeat"
         >
            <mj-column width="100%">
               <mj-image
                  src="http://nimus.de/share/tpl-card/lineshadow.png"
                  alt=""
                  align="center"
                  border="none"
                  padding="0px"
               ></mj-image>
               <mj-text align="center" padding="50px 40px 0 40px" font-weight="300">{{URL_PATH}}email-confirm/{{confirmationCode}}</mj-text>
               <mj-button
                  align="center"
                  background-color="#5FA91D"
                  color="#FFFFFF"
                  border-radius="2px"
                  href="#"
                  inner-padding="15px 30px"
                  padding-bottom="100px"
                  padding-top="20px"
                  >Aktiválás</mj-button
               >
            </mj-column>
         </mj-section>
         <mj-section padding="50px 0 0 0" background-color="#FFFFFF">
            <mj-column>
               <mj-image
                  src="http://nimus.de/share/tpl-card/bottom.png"
                  alt="bottom border"
                  align="center"
                  border="none"
                  padding="0px"
               ></mj-image>
            </mj-column>
         </mj-section>
         <mj-section padding="10px 0 20px 0">
            <mj-column>
               <mj-text align="center" color="#000" font-size="16px"
                  >Készítette:
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/tam%C3%A1s-nagy-27355116b/"
                     style="color: #000"
                     >Nagy Tamás</a
                  >
               </mj-text>
            </mj-column>
         </mj-section>
      </mj-body>
   </mjml>
      `)

      const context = {
         confirmationCode,
         userName,
         EMAIL_TOKEN_EXPIRESIN,
         URL_PATH,
      }
      const mjmlText = renderedText(context)
      const html = mjml(mjmlText)
      return html.html
      // fs.readFile('./views/main.mjml', (error, data) => {
      //    // console.log(data)
      //    console.log(error?.message)
      //    if (error == null) {
      //    }
      // })
   }

   async #renderMainHandlebarsModule(renderedHbsString: string) {
      return await this.expressHbsInstance.render('./views/main.hbs', {
         body: renderedHbsString,
      })
   }
}

// https://stackoverflow.com/questions/43111628/mjml-template-interpolation-dynamic-data-context
// https://handlebarsjs.com/api-reference/compilation.html#handlebars-compile-template-options
