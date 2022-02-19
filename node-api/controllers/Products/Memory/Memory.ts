import { Response } from 'express'
import BaseProduct from '../BaseProduct'
import { QueryRequest } from '../Helper'
import { MemoryProduct as MemoryModel } from '../../../models/Products/Memory/Memory'

export default class MemoryProduct extends BaseProduct {
   constructor() {
      super(MemoryModel)
   }

   getAllMemoryProductController = async (request: MemoryQueryRequestType, response: Response) => {
      try {
         const memoryType = request.query.memoryType == 'all' ? '' : request.query.memoryType
         const selectedFrequencyRange = this.splitStringAndConvertToArray(
            request.query.selectedFrequencyRange
         )
         const selectedCapacity = this.splitStringAndConvertToArray(request.query.selectedCapacity)
         const selectedLatencyRange = this.splitStringAndConvertToArray(request.query.latency)

         const extraFilterParameters = {
            'details.frequency': { $gte: selectedFrequencyRange[0], $lte: selectedFrequencyRange[1] },
            'details.capacity': { $gte: selectedCapacity[0], $lte: selectedCapacity[1] },
            'details.latency': { $gte: selectedLatencyRange[0], $lte: selectedLatencyRange[1] },
            'details.memoryType': new RegExp(memoryType, 'i'),
         }
         const { foundProduct, totalItems, totalPages } = await this.returnProductModelWithPaginateInfo(
            request,
            extraFilterParameters
         )
         return response.json({
            allProducts: foundProduct,
            totalItems,
            totalPages,
         })
      } catch (error) {
         console.log(error)
         response.status(500).json(error)
      }
   }

   getMemoryFilterData = async (_: any, response: Response) => {
      try {
         const extraGoupParameters = {
            minFrequency: { $min: '$details.frequency' },
            maxFrequency: { $max: '$details.frequency' },
            minLatency: { $min: '$details.latency' },
            maxLatency: { $max: '$details.latency' },
            capacities: { $addToSet: '$details.capacity' },
         }
         const filters = await this.baseFilterData(extraGoupParameters)
         filters[0].capacities.sort()
         response.status(200).json(filters[0])
      } catch (error) {
         response.status(500).json({ errorMessage: error })
      }
   }
}

type MemoryQueryRequestType = QueryRequest & {
   query: {
      memoryType: string
      selectedFrequencyRange: string
      selectedCapacity: string
      latency: string
   }
}
