import { Response } from 'express'
import BaseProduct from '../BaseProduct'
import { HddProduct as HDDModel } from '../../../models/Products/HDD/Hdd'
import { QueryRequest } from '../Helper'

export default class HDDProduct extends BaseProduct {
   constructor() {
      super(HDDModel)
   }
   getAllHDDProductController = async (request: QueryRequest, response: Response) => {
      try {
         const extraFilterParams = {}
         const { foundProduct, totalPages } = await this.returnProductModelWithPaginateInfo(
            request,
            extraFilterParams
         )
         response.status(200).json({
            allProducts: foundProduct,
            totalPages,
         })
      } catch (error) {
         response.status(500).json({ errorMessage: error })
      }
   }

   getHDDFilterData = async (_: any, response: Response) => {
      try {
         const extraGroupParams = {
            minCapacity: { $min: '$details.capacity' },
            maxCapacity: { $max: '$details.capacity' },
            minCache: { $min: '$details.cache' },
            maxCache: { $max: '$details.cache' },
            minRpm: { $min: '$details.rpm' },
            maxRpm: { $max: '$details.rpm' },
         }
         const foundParams = await this.baseFilterData(extraGroupParams)
         response.status(200).json(foundParams[0])
      } catch (error) {
         response.status(500).json({ errorMessage: error })
      }
   }
}
