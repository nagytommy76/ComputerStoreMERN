import { Model, Document } from 'mongoose'
import { BaseProductType, ChartDataType } from '../../models/Products/BaseTypes'

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
      const newProductDetails = {
         ...productDetails,
         chartData: [
            {
               price: productBase.price,
               timestamp: new Date(),
            },
         ],
      }
      const createdProductToInser = new productModel({
         ...productBase,
         details: newProductDetails,
      }) as BaseProductType & {
         details: any
      } & Document<any, any>
      return await createdProductToInser.save()
   },
   delete: async (productID: string) => {
      return productModel.findByIdAndRemove(productID)
   },
   modifyChartData: (details: any | undefined, price: number) => {
      if (details.chartData === undefined) {
         details.chartData = [
            {
               price,
               timestamp: Date.now(),
            },
         ]
      } else {
         details.chartData.push({
            price,
            timestamp: Date.now(),
         })
      }
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
