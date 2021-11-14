import { Response } from 'express'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'
import { QueryRequest, returnProductModelWithPaginateInfo, baseFilterData } from '../Helper'
import { saveRateProductHelper, RateQueryRequest } from '../Ratings/BaseRating'

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
      baseFilterData(VgaProduct, res)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const rateVgaProductController = async (req: RateQueryRequest, res: Response) => {
   try {
      const modifiedProduct = await saveRateProductHelper(
         req.body._id,
         VgaProduct,
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
