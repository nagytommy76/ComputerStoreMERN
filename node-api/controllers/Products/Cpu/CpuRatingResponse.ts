import { Response, Request } from 'express'
import { UserTypes } from '../../../models/User/UserTypes'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { RatingValues } from '../../../models/Products/BaseTypes'

export const saveCpuAnswerController = async (req: SaveRequesType, res: Response) => {
   try {
      const foundCpuProduct = await CpuProduct.findById(req.body.cpuId, 'ratingValues')
      if (foundCpuProduct) {
         const foundComment = foundCpuProduct.ratingValues.find((comment: RatingValues) => comment._id == req.body.commentId)
         const foundCommentIndex = foundCpuProduct.ratingValues.findIndex(
            (comment: RatingValues) => comment._id == req.body.commentId
         )
         if (foundComment && req.user) {
            foundComment.commentAnswers.push({
               answer: req.body.answer,
               answeredAt: new Date(),
               userId: req.user._id,
               userName: req.user.userName
            })
            foundCpuProduct.save()
            return res.status(201).json(foundCpuProduct.ratingValues[foundCommentIndex].commentAnswers)
         }
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}

type SaveRequesType = Request & {
   user?: UserTypes
   body: {
      cpuId: string
      commentId: string
      answer: string
   }
}
