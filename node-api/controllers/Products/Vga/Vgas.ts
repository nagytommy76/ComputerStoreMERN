import { Response } from 'express'
import { VgaProduct as VgaProductModel } from '../../../models/Products/Vga/VgaProduct'
import BaseProduct from '../BaseProduct'
import { QueryRequest } from '../Helper'
import { saveRateProductHelper, RateQueryRequest } from '../Ratings/BaseRating'

export default class VgaProduct extends BaseProduct {
   constructor() {
      super(VgaProductModel)
   }

   getAllVgaItemController = async (req: QueryRequest, res: Response) => {
      try {
         const extraFilterParams = {}
         const { foundProduct, perPage, totalItems, totalPages } =
            await this.returnProductModelWithPaginateInfo(req, extraFilterParams)
         res.json({
            allProducts: foundProduct,
            totalItems,
            perPage,
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

export const rateVgaProductController = async (req: RateQueryRequest, res: Response) => {
   try {
      const modifiedProduct = await saveRateProductHelper(
         req.body._id,
         VgaProductModel,
         req.body.rating,
         req.body.comment,
         req.body.userName,
         req.user?._id
      )
      if (modifiedProduct !== undefined) {
         modifiedProduct.save()
         return res.sendStatus(201)
      } else return res.sendStatus(422)
   } catch (error) {
      return res.status(500).json(error)
   }
}
