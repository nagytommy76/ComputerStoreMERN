import { Response } from 'express'
import BaseProduct from '../BaseProduct'
import { DetailsQueryRequestType, QueryRequest } from '../Helper'

import { SSDProduct as SSDModel } from '../../../models/Products/SSD/SSD'

export default class SSDProduct extends BaseProduct {
   constructor() {
      super(SSDModel)
   }

   getAllSSDProductController = async (request: SSDQueryRequestType, response: Response) => {
      try {
         console.log('MEghívnak????? HE????????')
         response
            .status(200)
            .json({ allProducts: [], totlaPages: 1, message: 'Helló ssd termékek!!!', query: request.query })
      } catch (error) {
         response.status(500).json({ errorMessage: error })
      }
   }

   getSSDFilterDataController = async (request: DetailsQueryRequestType, response: Response) => {
      const foundParams = await this.baseFilterData()
      response.status(200).json(foundParams[0])
   }
}

type SSDQueryRequestType = QueryRequest & {}
