import { create } from 'express-handlebars'
import { UnknownObject } from 'express-handlebars/types'
import { URL_PATH } from '../endpoints.config'

export default class Handlebars {
  private expressHbsInstance
  private filePath
  constructor() {
    this.filePath = './views'
    this.expressHbsInstance = create({
      defaultLayout: 'main',
      layoutsDir: 'views/',
      extname: 'hbs',
    })
  }

  async renderAnyHbsToPlainHtmlWithMain(
    moduleToRender: string,
    parametersObject?: UnknownObject | undefined
  ) {
    const renderedModule = await this.expressHbsInstance.render(
      `${this.filePath}/${moduleToRender}.hbs`,
      {
        ...parametersObject,
        URL_PATH,
      }
    )
    return this.#renderMainHandlebarsModule(renderedModule)
  }

  async #renderMainHandlebarsModule(renderedHbsString: string) {
    return await this.expressHbsInstance.render('./views/main.hbs', {
      body: renderedHbsString,
    })
  }
}
