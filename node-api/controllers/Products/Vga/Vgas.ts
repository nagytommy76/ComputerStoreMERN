import { Response } from 'express'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'
import { QueryRequest, returnProductModelWithPaginateInfo, baseFilterData } from '../Helper'

export const getAllVgaItemController = async (req: QueryRequest, res: Response) => {
   try {
      returnProductModelWithPaginateInfo(VgaProduct, req, res)
   } catch (error) {
      return res.status(500).json(error)
   }
}

// Min/Max
// https://www.tutorialspoint.com/get-maximum-and-minimum-value-in-mongodb

export const getFilterData = async (req: QueryRequest, res: Response) => {
   try {
      baseFilterData(VgaProduct, req, res)
   } catch (error) {
      return res.status(500).json(error)
   }
}
