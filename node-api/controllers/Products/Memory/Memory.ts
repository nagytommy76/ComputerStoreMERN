import { Response } from 'express'
import BaseProduct from '../BaseProduct'
import { QueryRequest } from '../Helper'
import { MemoryProduct as MemoryModel } from '../../../models/Products/Memory/Memory'

export default class MemoryProduct extends BaseProduct {
   constructor() {
      super(MemoryModel)
   }

   getAllMemoryProductController = async (request: QueryRequest, response: Response) => {
      try {
         this.returnProductModelWithPaginateInfo(request, response)
      } catch (error) {
         response.status(500).json(error)
      }
   }

   getMemoryFilterData = async (request: QueryRequest, response: Response) => {
      try {
         this.baseFilterData(response)
      } catch (error) {
         response.status(500).json(error)
      }
   }
}
