import { Response } from 'express'
import BaseProduct from '../BaseProduct'
import { HddProduct as HDDModel } from '../../../models/Products/HDD/Hdd'
import { QueryRequest } from '../Helper'

export default class HDDProduct extends BaseProduct {
   constructor() {
      super(HDDModel)
   }
   getAllHDDProductController = async (request: HDDQueryRequestType, response: Response) => {
      try {
         const cacheRange = this.splitStringAndConvertToArray(request.query.cacheRange)
         const capacityRange = this.splitStringAndConvertToArray(request.query.capacityRange)
         const rpmRange = this.splitStringAndConvertToArray(request.query.rpmRange)

         const extraFilterParams = {
            'details.cache': { $gte: cacheRange[0], $lte: cacheRange[1] },
            'details.capacity': { $gte: capacityRange[0], $lte: capacityRange[1] },
            'details.rpm': { $gte: rpmRange[0], $lte: rpmRange[1] },
         }
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

type HDDQueryRequestType = QueryRequest & {
   query: {
      cacheRange: string
      capacityRange: string
      rpmRange: string
   }
}
