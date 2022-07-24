import { Request, Response } from 'express'
import { User } from '../../../models/User/User'
import { returnAllUserRatingsByProductType } from './Helper/RatingsHelper'

/**
 * Felhasználók kezelése
 * - Felhasználók listázása,
 * - Rendelések listázása, státusz megváltoztatása pl (feldolgozás alatt, feldolgozva, elküldve stb)
 * - Vissza kéne úgy küldeni a ratingValuest, hogy a key a termék ID legyen (vagy benne legyen a termék ID)
 */

export const getAllUsers = async (request: Request, response: Response) => {
   try {
      const allUsers = await User.find().select({ userName: 1, email: 1, isAdmin: 1, isEmailConfirmed: 1 })
      response.status(200).json(allUsers)
   } catch (error) {
      response.status(500).json(error)
   }
}

export const removeSingleUser = async (request: DeleteRequest, response: Response) => {
   try {
      const user = await User.findByIdAndDelete(request.body.userID)
      response.status(200).json({ msg: 'sikeres törlés', deleted: true })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const getAllRatingValuesByUserID = async (request: Request, response: Response) => {
   try {
      const userId = request.query.userID as string | undefined
      if (!userId) {
         return response.status(404).json({ msg: 'Nincs userID' })
      }

      const allUserRatings = await returnAllUserRatingsByProductType(userId)
      response.status(200).json(allUserRatings)
   } catch (error) {
      response.status(500).json(error)
   }
}

export const removeUserSingleCommentFromProduct = async (
   request: DeleteUserCommentRequest,
   response: Response
) => {
   try {
      /**
       * Kell egy product típus, (cpu/vga/...) hogy el tudjam dönteni hol a komment
       * Illetve egy ProductID, ami alapján keresem a terméket
       * Kell egy kommentID, hogy tudjam törölni a terméken belül
       * UserID elvileg nem kell!?
       */
      // console.log(request.body.commentID)
      // console.log(request.body.productID)
      // console.log(request.body.productType)
      response.status(200).json({ msg: 'sikeres törlés' })
   } catch (error) {
      response.status(500).json(error)
   }
}

interface DeleteUserCommentRequest extends Request {
   body: {
      productID: string
      commentID: string
      productType: string
   }
}

type DeleteRequest = Request & {
   body: {
      userID: string
   }
}

// https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/
// https://stackoverflow.com/questions/3985214/retrieve-only-the-queried-element-in-an-object-array-in-mongodb-collection
