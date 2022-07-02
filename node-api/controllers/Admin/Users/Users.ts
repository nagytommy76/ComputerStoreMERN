import { Request, Response } from 'express'
import { User } from '../../../models/User/User'

/**
 * Felhasználók kezelése
 * - Felhasználók listázása,
 * - Rendelések listázása, státusz megváltoztatása pl (feldolgozás alatt, feldolgozva, elküldve stb)
 */

export const getAllUsers = async (request: Request, response: Response) => {
   try {
      const allUsers = await User.find({})
      response.status(200).json(allUsers)
   } catch (error) {
      response.status(500).json(error)
   }
}
