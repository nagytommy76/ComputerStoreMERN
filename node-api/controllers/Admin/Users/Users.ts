import { Request, Response } from 'express'
import { User } from '../../../models/User/User'

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
      const user = await User.findByIdAndDelete(request.body.userID)
      response.status(200).json(user)
   } catch (error) {
      response.status(500).json(error)
   }
}

type DeleteRequest = Request & {
   body: {
      userID: string
   }
}
