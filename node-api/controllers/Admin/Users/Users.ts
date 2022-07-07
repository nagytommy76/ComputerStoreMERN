import { Request, Response } from 'express'
import { User } from '../../../models/User/User'

import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'

/**
 * Felhasználók kezelése
 * - Felhasználók listázása,
 * - Rendelések listázása, státusz megváltoztatása pl (feldolgozás alatt, feldolgozva, elküldve stb)
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
      // const user = await User.findByIdAndDelete(request.body.userID)
      response.status(200).json({ msg: 'sikeres törlés', deleted: true })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const getAllRatingValuesByUserID = async (request: Request, response: Response) => {
   try {
      const userId = request.query.userID
      const allFoundUserRatingsInCpu = await CpuProduct.find(
         { 'ratingValues.userId': userId },
         { ratingValues: { $elemMatch: { userId } } }
      )

      response.status(200).json(allFoundUserRatingsInCpu)
   } catch (error) {
      response.status(500).json(error)
   }
}

type DeleteRequest = Request & {
   body: {
      userID: string
   }
}

// https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/
// https://stackoverflow.com/questions/3985214/retrieve-only-the-queried-element-in-an-object-array-in-mongodb-collection
