import { Response } from 'express'
import { CpuProduct as CpuProductModel } from '../../../models/Products/Cpu/CpuSchema'
import { QueryRequest } from '../Helper'
import BaseProduct from '../BaseProduct'

export default class CpuProduct extends BaseProduct {
   constructor() {
      super(CpuProductModel)
   }
   getAllCpuItemController = async (req: QueryRequest, res: Response) => {
      try {
         this.returnProductModelWithPaginateInfo(req, res)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

   getCpuFilterData = async (req: QueryRequest, res: Response) => {
      try {
         this.baseFilterData(res)
      } catch (error) {
         return res.status(500).json(error)
      }
   }
}

