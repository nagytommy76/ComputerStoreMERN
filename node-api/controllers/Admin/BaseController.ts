import { Model, Document } from 'mongoose'
import { BaseProductType } from '../../models/Products/BaseTypes'

const canReturnProducts = ({ productModel }: StateType) => ({
   getAllProduct: async () => {
      return await productModel.find().lean()
   },
   getProductToModify: async (productID: string) => {
      return (await productModel.findById(productID)) as
         | (BaseProductType & {
              details: any
           } & Document<any, any>)
         | null
   },
   getAllToDeleteProducts: async () => {
      const allProductsToDelete = (await productModel
         .find()
         .select(['manufacturer', 'price', 'type', 'inStockQuantity'])
         .lean()
         .sort({ price: 'asc' })) as ({
         _id: string
         manufacturer: string
         price: number
         type: string
         inStockQuantity: number
      } & {
         details: any
      } & Document<any, any>)[]
      return allProductsToDelete
   },
})

const canInsertDeleteModifyProduct = ({ productModel }: StateType) => ({
   insert: async (productDetails: any, productBase: BaseProductProperties) => {
      const createdProductToInser = new productModel({
         ...productBase,
         details: productDetails,
      }) as BaseProductType & {
         details: any
      } & Document<any, any>
      return await createdProductToInser.save()
   },
   delete: async (productID: string) => {
      return productModel.findByIdAndRemove(productID)
   },
})

export default function baseAdminController(productModel: Model<any>) {
   // Gyakorlatilag ez a construktor
   const state: StateType = {
      productModel,
   }
   return {
      ...state,
      ...canInsertDeleteModifyProduct(state),
      ...canReturnProducts(state),
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
