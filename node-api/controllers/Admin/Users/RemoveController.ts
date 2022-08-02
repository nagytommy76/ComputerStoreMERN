import { Request, Response } from 'express'
import { ObjectId } from 'mongoose'
import { removeSingleCommentFromRatingValues } from './Helper/CommentHelper'

import { User } from '../../../models/User/User'
import { MemoryProduct } from '../../../models/Products/Memory/Memory'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'

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
   const { commentID, productID, productType } = request.body
   if (productID === undefined || productType === undefined || commentID === undefined) {
      return response.status(404).json({ msg: 'Hiányzik a commentID vagy a productID vagy a productType' })
   }
   try {
      switch (productType) {
         case 'memory':
            await removeSingleCommentFromRatingValues(response, MemoryProduct, productID, commentID)
         case 'cpu':
            await removeSingleCommentFromRatingValues(response, CpuProduct, productID, commentID)
      }
   } catch (error) {
      response.status(500).json(error)
   }
}

interface DeleteUserCommentRequest extends Request {
   body: {
      productID: string | undefined
      commentID: string | ObjectId | undefined
      productType: string | undefined
   }
}
