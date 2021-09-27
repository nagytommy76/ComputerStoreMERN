import { Response, Request } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { UserTypes } from '../../../models/User/UserTypes'
import { QueryRequest, returnProductModelWithPaginateInfo, baseFilterData } from '../Helper'
import { getProductRatingSummary, saveRateProductHelper, RateQueryRequest, RequestQuery } from '../Ratings/BaseRating'

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
      saveRateProductHelper(req.body._id, CpuProduct, req.body.rating, req.body.comment, req.body.userName)
      return res.sendStatus(201)
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
      return res.status(200).json(allComments[0].ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const likeDislikeCommentController = async (req: LikeQuery, res: Response) => {
   try {
      // A request-ben bejön a comment/értékelés id-ja, ez alapján megtalálni
      const foundProduct = await CpuProduct.findById(req.body.productId, 'ratingValues')
      if (foundProduct) {
         const foundComment = foundProduct.ratingValues.filter((comment) => comment._id == req.body.commentId)
         const foundCommentIndex = foundProduct.ratingValues.findIndex((comment) => comment._id == req.body.commentId)

         foundProduct.ratingValues.map((rating) => {
            console.log(rating.responses.length)
            if (rating.responses.length > 0) {
               // Ha van már like
               // A user adott már like/dislike-ot?
               // Ha egy user már likeolta/dislikeolta az adott commentet, nem engedem még 1*
               // Meg kell vizsgálni, hogy a userId benne van a DB-ben
            } else {
               // Ha még nincs
               foundComment[0].responses.push({ isLike: req.body.isLike, userId: req.user?._id })
               foundProduct.ratingValues.splice(foundCommentIndex, 1, foundComment[0])
            }
         })

         foundProduct.save()
         return res.sendStatus(201)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}

type LikeQuery = Request & {
   user?: UserTypes | undefined
   body: {
      isLike: boolean
      productId: string
      commentId: string
   }
}
