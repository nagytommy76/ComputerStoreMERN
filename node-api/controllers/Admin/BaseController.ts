import { Model, Document } from 'mongoose'
import { BaseProductType } from '../../models/Products/BaseTypes'

export default abstract class BaseAdminController {
   private productModel: Model<any>
   constructor(productModel: Model<any>) {
      this.productModel = productModel
   }

   async insertProducts(productDetails: any, productBase: BaseProductProperties) {
      const createdProductToInser = new this.productModel({
         ...productBase,
         productDetails,
      }) as BaseProductType & {
         details: any
      } & Document<any, any>
      return await createdProductToInser.save()
   }
}

type BaseProductProperties = {
   itemNumber?: string
   type: string
   typeCode?: string
   manufacturer: string
   price: number
   pictureUrls: string[]
   isHighlighted?: boolean
   inStockQuantity: number
}
