import { Response } from 'express'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'
import { QueryRequest, returnProductModelWithPaginateInfo, baseFilterData } from '../Helper'
import {
   saveRateProductHelper,
   RateQueryRequest,
   RequestQuery,
   getProductRatingSummary,
   LikeQuery,
   likeDislikeCommentHelper
} from '../Ratings/BaseRating'

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
      saveRateProductHelper(req.body._id, VgaProduct, req.body.rating, req.body.comment, req.body.userName, req.user?._id)
      return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getVgaRatingSummaryController = async (req: RequestQuery, res: Response) => {
   try {
      const returnRatingValues = await getProductRatingSummary(req.query._id, VgaProduct)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllVgaComments = async (req: RequestQuery, res: Response) => {
   try {
      const allComments = await VgaProduct.find({ _id: req.query._id }, 'ratingValues')
      return res.status(200).json(allComments[0].ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const likeDislikeVgaCommentController = async (req: LikeQuery, res: Response) => {
   try {
      likeDislikeCommentHelper(req, res, VgaProduct)
   } catch (error) {
      return res.status(500).json(error)
   }
}
