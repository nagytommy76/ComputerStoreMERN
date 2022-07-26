import { Request, Response } from 'express'
import { ObjectId } from 'mongoose'
import { User } from '../../../models/User/User'
import { MemoryProduct } from '../../../models/Products/Memory/Memory'

import { removeSingleCommentFromRatingValues } from './Helper/CommentHelper'

type DeleteRequest = Request & {
   body: {
      userID: string
   }
}

export const removeSingleUser = async (request: DeleteRequest, response: Response) => {
   try {
      const user = await User.findByIdAndDelete(request.body.userID)
      if (!user) {
         return response.status(404).json({ msg: 'Nincs ilyen felhasználó' })
      }
      response.status(200).json({ msg: 'sikeres törlés', deleted: true })
   } catch (error) {
      response.status(500).json(error)
   }
}

/**
 * Kell egy product típus, (cpu/vga/...) hogy el tudjam dönteni hol a komment
 * Illetve egy ProductID, ami alapján keresem a terméket
 * Kell egy kommentID, hogy tudjam törölni a terméken belül
 * UserID elvileg nem kell!?
 */
export const removeUserSingleCommentFromProduct = async (
   request: DeleteUserCommentRequest,
   response: Response
) => {
   try {
      switch (request.body.productType) {
         case 'memory':
         // const memory = await removeSingleCommentFromRatingValues(MemoryProduct, request.body.productID, request.body.commentID)
         // memory.save()
         // response.status(200).json({ msg: 'sikeres törlés', ratingValues: memory.ratingValues })
      }
   } catch (error) {
      response.status(500).json(error)
   }
}

interface DeleteUserCommentRequest extends Request {
   body: {
      productID: string
      commentID: string | ObjectId
      productType: string
   }
}
