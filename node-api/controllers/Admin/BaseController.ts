import { Model, Document } from 'mongoose'
import { BaseProductType } from '../../models/Products/BaseTypes'

const canInsertProduct = ({ productModel }: StateType) => ({
   insert: async (productDetails: any, productBase: BaseProductProperties) => {
      const createdProductToInser = new productModel({
         ...productBase,
         productDetails,
      }) as BaseProductType & {
         details: any
      } & Document<any, any>
      return await createdProductToInser.save()
   }
})

const canReturnAllProduct = ({ productModel }: StateType) => ({
   getAll: async () => {
      return await productModel.find()
   } 
})

export default function baseAdminController (productModel: Model<any>)  {
   // Gyakorlatilag ez a construktor
   const state: StateType = {
      productModel,
   }

   return {
      ...state,
      ...canInsertProduct(state),
      ...canReturnAllProduct(state)
   }
}

type StateType = {
   productModel: Model<any>
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
