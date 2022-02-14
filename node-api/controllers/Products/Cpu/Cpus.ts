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
         const {
            coreCount,
            baseFrequencyRange,
            selectedSocket,
            l3CacheRange,
            tdpRange,
            threadCount,
            turboFrequencyRange,
         } = req.query

         const socket = selectedSocket == 'all' ? '' : selectedSocket
         const coreRange = this.splitStringAndConvertToArray(coreCount)
         const threadRange = this.splitStringAndConvertToArray(threadCount)
         const frequencyRange = this.splitStringAndConvertToArray(baseFrequencyRange)
         const turboRange = this.splitStringAndConvertToArray(turboFrequencyRange)
         const tdp = this.splitStringAndConvertToArray(tdpRange)
         const l3Range = this.splitStringAndConvertToArray(l3CacheRange)

         const extraQueryParams = {
            'details.socket': new RegExp(socket),
            'details.coreCount': { $gte: coreRange[0], $lte: coreRange[1] },
            'details.threadCount': { $gte: threadRange[0], $lte: threadRange[1] },
            'details.baseClock': { $gte: frequencyRange[0], $lte: frequencyRange[1] },
            'details.boostClock': { $gte: turboRange[0], $lte: turboRange[1] },
            'details.l3Cache': { $gte: l3Range[0], $lte: l3Range[1] },
            'details.TDP': { $gte: tdp[0], $lte: tdp[1] },
         }
         const { foundProduct, totalItems, totalPages } = await this.returnProductModelWithPaginateInfo(
            req,
            extraQueryParams
         )
         res.json({
            allProducts: foundProduct,
            totalItems,
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
      baseFrequencyRange: string
      turboFrequencyRange: string
      coreCount: string
      threadCount: string
      tdpRange: string
      l3CacheRange: string
   }
}
