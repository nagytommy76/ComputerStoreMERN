import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { sign } from 'jsonwebtoken'

import { PASSWORD_SECRET, URL_PATH } from '../../config/endpoints.config'
import { ErrorResponse } from './Users'
import NodeMailer from '../../config/Mail/nodemailer'

/**
 * Validálni kell a user email-t, hogy van-e ilyen felhasználó
 * Kell generálnom egy Tokent (úgy mint a regisztrációnál)
 * Utána létre kell hozni egy liknet a frontend-re, ezt küldöm el a usernek ha megadta az email címét
 */

const NodeMailerInstance = new NodeMailer()

export const forgotPasswordController = async (request: ForgotPasswordRequestType, response: Response) => {
   try {
      const { email } = request.body

      const checkUserRegistered = await User.findOne({ email })
      if (checkUserRegistered === null) {
         return response.status(404).json(ErrorResponse(true, 'Az email cím nincs még regisztrálva!'))
      }

      const forgotPassToken = sign({ email, userId: checkUserRegistered._id }, PASSWORD_SECRET, {
         expiresIn: '10m',
      })
      const validationLink = `${URL_PATH}forgot-password/${forgotPassToken}`
   } catch (error) {
      response.status(500).json(error)
   }
}

type ForgotPasswordRequestType = Request & {
   body: {
      email: string
   }
}

// https://www.youtube.com/watch?v=72JYhSoVYPc&ab_channel=yoursTRULY
// https://www.youtube.com/watch?v=kfw61IxDgW8&ab_channel=AwaisMirza
