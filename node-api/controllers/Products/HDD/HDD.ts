import { Response } from 'express'
import BaseProduct from '../BaseProduct'
import { HddProduct as HDDModel } from '../../../models/Products/HDD/Hdd'
import { QueryRequest } from '../Helper'

export default class HDDProduct extends BaseProduct {
   constructor() {
      super(HDDModel)
   }
   getAllHDDProductController = async (request: QueryRequest, response: Response) => {
      response.sendStatus(200)
   }

   getHDDFilterData = async (_: any, response: Response) => {
      try {
      } catch (error) {
         response.status(500).json({ errorMessage: error })
      }
   }
}
