import { Response } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'

import {
   SaveRequesType,
   RemoveRequesType,
   saveProductAnswerController,
   removeProductAnswerController
} from '../Ratings/BaseResponse'

export const saveCpuAnswerController = async (req: SaveRequesType, res: Response) => {
   try {
      const foundCpuProduct = await CpuProduct.findById(req.body.productId, 'ratingValues')
      if (foundCpuProduct) {
         const newCommentAnswers = saveProductAnswerController(req, foundCpuProduct)
         foundCpuProduct.save()
         return res.status(201).json(newCommentAnswers)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const removeSingleCpuCommentAnswer = async (req: RemoveRequesType, res: Response) => {
   try {
      const foundCpuProduct = await CpuProduct.findById(req.body.productId, 'ratingValues')
      if (foundCpuProduct) {
         const foundComment = removeProductAnswerController(req, foundCpuProduct)
         return res.status(200).json(foundComment)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}
