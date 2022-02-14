import { Response } from 'express'
import { VgaProduct as VgaProductModel } from '../../../models/Products/Vga/VgaProduct'
import BaseProduct from '../BaseProduct'
import { QueryRequest } from '../Helper'

export default class VgaProduct extends BaseProduct {
   constructor() {
      super(VgaProductModel)
   }

   getAllVgaItemController = async (req: QueryRequest, res: Response) => {
      try {
         const extraQueryParams = {}
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
         return res.status(500).json(error)
      }
   }

   getFilterData = async (req: QueryRequest, res: Response) => {
      try {
         const extraGroup = {}
         const filterData = await this.baseFilterData(extraGroup)
         res.status(200).json(filterData[0])
      } catch (error) {
         return res.status(500).json({ errorMessage: error })
      }
   }
}
