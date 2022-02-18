import { Response } from 'express'
import { ObjectId } from 'mongoose'
import { MemoryProduct } from '../../../models/Products/Memory/Memory'
import { RateQueryRequest, saveRateProductHelper, getProductRatingSummary } from '../Ratings/BaseRating'

export const getMemoryRatingSummaryController = async (req: RequestWithQueryId, res: Response) => {
   try {
      const returnRatingValues = await getProductRatingSummary(req.query._id, MemoryProduct)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllMemoryComments = async (req: RequestWithQueryId, res: Response) => {
   try {
      const allComments = await MemoryProduct.find({ _id: req.query._id }, 'ratingValues').lean()
      return res.status(200).json(allComments[0].ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const rateMemoryProductController = async (req: RateQueryRequest, res: Response) => {
   try {
      const modifiedProduct = await saveRateProductHelper(
         req.body._id,
         MemoryProduct,
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

type RequestWithQueryId = {
   query: {
      _id: ObjectId
   }
}
