import { Response } from 'express'
import {
   removeProductAnswerController,
   RemoveRequesType,
   saveProductAnswerController,
   SaveRequesType
} from '../Ratings/BaseResponse'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'

export const saveVgaAnswerController = async (req: SaveRequesType, res: Response) => {
   try {
      const foundVgaProduct = await VgaProduct.findById(req.body.productId, 'ratingValues')
      if (foundVgaProduct) {
         const newCommentAnswers = saveProductAnswerController(req, foundVgaProduct)
         foundVgaProduct.save()
         return res.status(201).json(newCommentAnswers)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const removeSingleVgaCommentAnswer = async (req: RemoveRequesType, res: Response) => {
   try {
      const foundVgaProduct = await VgaProduct.findById(req.body.productId, 'ratingValues')
      if (foundVgaProduct) {
         const foundComment = removeProductAnswerController(req, foundVgaProduct)
         return res.status(200).json(foundComment)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}
