import { Model, Document } from 'mongoose'
import { BaseProductType } from '../../models/Products/BaseTypes'

const canReturnAllProduct = ({ productModel }: StateType) => ({
   getAll: async () => {
      return await productModel.find()
   },
})

const canInsertProduct = ({ productModel }: StateType) => ({
   insert: async (productDetails: any, productBase: BaseProductProperties) => {
      const createdProductToInser = new productModel({
         ...productBase,
         details: productDetails,
      }) as BaseProductType & {
         details: any
      } & Document<any, any>
      return await createdProductToInser.save()
   },
})

export default function baseAdminController(productModel: Model<any>) {
   // Gyakorlatilag ez a construktor
   const state: StateType = {
      productModel,
   }

   return {
      ...state,
      ...canInsertProduct(state),
      ...canReturnAllProduct(state),
   }
}

type StateType = {
   productModel: Model<any>
}

export type BaseProductProperties = {
   itemNumber?: string
   type: string
   typeCode?: string
   manufacturer: string
   price: number
   pictureUrls: string[]
   isHighlighted?: boolean
   inStockQuantity: number
}
