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
         const selectedFrequencyRange = request.query.selectedFrequencyRange.split(',') || [400, 14000]
         const selectedCapacity =
            request.query.selectedCapacity > 0
               ? { $eq: request.query.selectedCapacity }
               : {
                    $ne: request.query.selectedCapacity,
                 }
         const extraFilterParameters = {
            'details.frequency': { $gte: selectedFrequencyRange[0], $lte: selectedFrequencyRange[1] },
            'details.capacity': selectedCapacity,
            'details.memoryType': new RegExp(memoryType, 'i'),
         }
         this.returnProductModelWithPaginateInfo(request, response, extraFilterParameters)
      } catch (error) {
         console.log(error)
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

type MemoryQueryRequestType = QueryRequest & {
   query: {
      memoryType: string
      selectedFrequencyRange: string
      selectedCapacity: number
   }
}
