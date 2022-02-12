import { Response } from 'express'
import { CpuProduct as CpuProductModel } from '../../../models/Products/Cpu/CpuSchema'
import { QueryRequest } from '../Helper'
import BaseProduct from '../BaseProduct'

export default class CpuProduct extends BaseProduct {
   constructor() {
      super(CpuProductModel)
   }
   /**
    * Magok száma slider
    * frekvencia base/turbo slider
    * socket AM4 LGA2011 stb
    *
    */
   getAllCpuItemController = async (req: CpuQueryRequestType, res: Response) => {
      try {
         const { coreCount, selectedBaseFrequencyRange, selectedSocket } = req.query
         const socket = selectedSocket == 'all' ? '' : selectedSocket
         const coreRange = this.splitStringAndConvertToArray(coreCount)
         const frequencyRange = this.splitStringAndConvertToArray(selectedBaseFrequencyRange)
         const extraQueryParams = {
            'details.coreCount': { $gte: coreRange[0], $lte: coreRange[1] },
            'details.baseClock': { $gte: frequencyRange[0], $lte: frequencyRange[1] },
            'details.socket': new RegExp(socket),
         }
         const { foundProduct, perPage, totalItems, totalPages } =
            await this.returnProductModelWithPaginateInfo(req, res, extraQueryParams)
         return res.json({
            allProducts: foundProduct,
            totalItems,
            perPage,
            totalPages,
         })
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

type CpuQueryRequestType = QueryRequest & {
   query: {
      selectedSocket: string
      selectedBaseFrequencyRange: string
      coreCount: string
   }
}
