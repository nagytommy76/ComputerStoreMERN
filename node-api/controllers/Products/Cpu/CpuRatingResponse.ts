import { Response, Request } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { RatingValues } from '../../../models/Products/BaseTypes'

import { SaveRequesType, RemoveRequesType, saveProductAnswerController } from '../Ratings/BaseResponse'

export const saveCpuAnswerController = async (req: SaveRequesType, res: Response) => {
   try {
      // const foundCpuProduct = await CpuProduct.findById(req.body.cpuId, 'ratingValues')
      // if (foundCpuProduct) {
      //    const foundComment = foundCpuProduct.ratingValues.find((comment: RatingValues) => comment._id == req.body.commentId)
      //    const foundCommentIndex = foundCpuProduct.ratingValues.findIndex(
      //       (comment: RatingValues) => comment._id == req.body.commentId
      //    )
      //    if (foundComment && req.user) {
      //       foundComment.commentAnswers.push({
      //          answer: req.body.answer,
      //          answeredAt: new Date(),
      //          userId: req.user._id,
      //          userName: req.user.userName
      //       })
      //       foundCpuProduct.save()
      //       return res.status(201).json(foundCpuProduct.ratingValues[foundCommentIndex].commentAnswers)
      //    }
      // }
      const foundProduct = await saveProductAnswerController(req, res, CpuProduct)
      if (foundProduct && foundProduct.foundProduct) {
         foundProduct.foundProduct.save()
         return res.status(201).json(foundProduct.modifiedCommentAnswers)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const removeSingleCpuCommentAnswer = async (req: RemoveRequesType, res: Response) => {
   try {
      const foundCpuProduct = await CpuProduct.findById(req.body.cpuId, 'ratingValues')
      if (foundCpuProduct) {
         const foundComment = foundCpuProduct.ratingValues.find((comment: RatingValues) => comment._id == req.body.commentId)
         if (foundComment) {
            const filteredAnswers = foundComment?.commentAnswers.filter((answer) => answer._id != req.body.answerId)
            foundComment.commentAnswers = filteredAnswers
            foundCpuProduct.save()
            return res.status(200).json(foundComment.commentAnswers)
         }
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}
