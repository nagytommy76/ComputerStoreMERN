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
// https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/
// https://stackoverflow.com/questions/3985214/retrieve-only-the-queried-element-in-an-object-array-in-mongodb-collection
