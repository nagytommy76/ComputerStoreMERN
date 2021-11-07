import { Response } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { QueryRequest, returnProductModelWithPaginateInfo, baseFilterData } from '../Helper'
import {
   getProductRatingSummary,
   saveRateProductHelper,
   likeDislikeCommentHelper,
   RateQueryRequest,
   RequestQuery,
   LikeQuery
} from '../Ratings/BaseRating'
import { RatingValues } from '../../../models/Products/BaseTypes'

export const getCpuFilterData = async (req: QueryRequest, res: Response) => {
   try {
      baseFilterData(CpuProduct, res)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllCpuItemController = async (req: QueryRequest, res: Response) => {
   try {
      returnProductModelWithPaginateInfo(CpuProduct, req, res)
   } catch (error) {
      return res.status(500).json(error)
   }
}

// Ratings

export const rateCpuProductController = async (req: RateQueryRequest, res: Response) => {
   try {
      const modifiedProduct = await saveRateProductHelper(
         req.body._id,
         CpuProduct,
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

export const getCpuRatingSummaryController = async (req: RequestQuery, res: Response) => {
   try {
      const returnRatingValues = await getProductRatingSummary(req.query._id, CpuProduct)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllComments = async (req: RequestQuery, res: Response) => {
   try {
      const allComments = await CpuProduct.find({ _id: req.query._id }, 'ratingValues')
      const userHaveCommentIndex = allComments[0].ratingValues.findIndex(
         (userComment: any) => userComment.userId == req.user?._id
      )

      if (userHaveCommentIndex >= 0) {
         const test = (allComments[0].ratingValues[userHaveCommentIndex].usersFoundCommentToDelete = true)
         console.log(test)
         // const allCommentsWithUser = {
         //    ...allComments[0].ratingValues[userHaveCommentIndex],
         //    userHaveCommentIndex: true
         // }
         // console.log(allCommentsWithUser)
         // allComments[0].ratingValues.splice(userHaveCommentIndex, 1, allCommentsWithUser)
      }
      return res.status(200).json(allComments[0].ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const removeUsersRating = async (req: RequestQuery, res: Response) => {
   try {
      const foundCommentTodelete = CpuProduct.find()
      return res.sendStatus(200)
   } catch (error) {
      return res.status(500).json(error)
   }
}

// Like/Dislike
export const likeDislikeCpuCommentController = async (req: LikeQuery, res: Response) => {
   try {
      likeDislikeCommentHelper(req, res, CpuProduct)
   } catch (error) {
      return res.status(500).json(error)
   }
}
