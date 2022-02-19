import { Response } from 'express'
import {
   removeProductAnswerController,
   RemoveRequesType,
   saveProductAnswerController,
   SaveRequesType,
} from '../Ratings/BaseResponse'
import { MemoryProduct } from '../../../models/Products/Memory/Memory'

export const saveMemoryAnswerController = async (req: SaveRequesType, res: Response) => {
   try {
      const foundProduct = await MemoryProduct.findById(req.body.productId, 'ratingValues')
      if (foundProduct) {
         const newCommentAnswers = saveProductAnswerController(req, foundProduct)
         foundProduct.save()
         return res.status(201).json(newCommentAnswers)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const removeSingleMemoryCommentAnswer = async (req: RemoveRequesType, res: Response) => {
   try {
      const foundProduct = await MemoryProduct.findById(req.body.productId, 'ratingValues')
      if (foundProduct) {
         const foundComment = removeProductAnswerController(req, foundProduct)
         foundProduct.save()
         return res.status(200).json(foundComment)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}
