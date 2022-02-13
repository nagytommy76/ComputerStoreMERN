import { Response } from 'express'
import { CpuProduct as CpuProductModel } from '../../../models/Products/Cpu/CpuSchema'
import { QueryRequest } from '../Helper'
import BaseProduct from '../BaseProduct'

export default class CpuProduct extends BaseProduct {
   constructor() {
      super(CpuProductModel)
   }

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
            await this.returnProductModelWithPaginateInfo(req, extraQueryParams)
         res.json({
            allProducts: foundProduct,
            totalItems,
            perPage,
            totalPages,
         })
      } catch (error) {
         res.status(500).json(error)
      }
   }

   getCpuFilterData = async (_: any, res: Response) => {
      try {
         const extraGroup = {
            minCoreCount: { $min: '$details.coreCount' },
            maxCoreCount: { $max: '$details.coreCount' },
            minThreadCount: { $min: '$details.threadCount' },
            maxThreadCount: { $max: '$details.threadCount' },
            minBaseFrequency: { $min: '$details.baseClock' },
            maxBaseFrequency: { $max: '$details.baseClock' },
            minTurboFrequency: { $min: '$details.boostClock' },
            maxTurboFrequency: { $max: '$details.boostClock' },
            minL3Cache: { $min: '$details.l3Cache' },
            maxL3Cache: { $max: '$details.l3Cache' },
            minTDP: { $min: '$details.TDP' },
            maxTDP: { $max: '$details.TDP' },
            allSockets: { $addToSet: '$details.socket' },
         }
         const filtererGroups = await this.baseFilterData(extraGroup)
         filtererGroups[0].allSockets.sort()
         res.status(200).json(filtererGroups[0])
      } catch (error) {
         res.status(500).json({ errorMessage: error })
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
