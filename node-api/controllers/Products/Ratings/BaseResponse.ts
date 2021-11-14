import { Response, Request } from 'express'
import { Model } from 'mongoose'
import { RatingValues } from '../../../models/Products/BaseTypes'

import { UserTypes } from '../../../models/User/UserTypes'

export type SaveRequesType = Request & {
   user?: UserTypes
   body: {
      productId: string
      commentId: string
      answer: string
   }
}

export type RemoveRequesType = Request & {
   user?: UserTypes
   body: {
      productId: string
      commentId: string
      answerId: string
   }
}

export const saveProductAnswerController = async (req: SaveRequesType, res: Response, productModel: Model<any>) => {
   const foundProduct = await productModel.findById(req.body.cpuId, 'ratingValues')
   if (foundProduct) {
      const foundComment = foundProduct.ratingValues.find((comment: RatingValues) => comment._id == req.body.commentId)
      const foundCommentIndex = foundProduct.ratingValues.findIndex((comment: RatingValues) => comment._id == req.body.commentId)
      if (foundComment && req.user) {
         foundComment.commentAnswers.push({
            answer: req.body.answer,
            answeredAt: new Date(),
            userId: req.user._id,
            userName: req.user.userName
         })
      }
      return { foundProduct, modifiedCommentAnswers: foundProduct.ratingValues[foundCommentIndex].commentAnswers }
   }
   //    return null
}
