import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { validationResult } from 'express-validator'

import { sign, verify, VerifyErrors, JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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
      const { userEmailOrUsername } = request.body

      const checkUserRegistered = await User.findOne({
         $or: [{ email: userEmailOrUsername }, { userName: userEmailOrUsername }],
      }).lean()

      if (checkUserRegistered === null) {
         return response.status(404).json(ErrorResponse(true, 'Az email cím nincs még regisztrálva!'))
      }

      const forgotPassToken = sign(
         { email: userEmailOrUsername, userId: checkUserRegistered._id },
         PASSWORD_SECRET + checkUserRegistered.password,
         {
            expiresIn: '10m',
         }
      )
      const validationLink = `${URL_PATH}forgot-password/${checkUserRegistered._id}/${forgotPassToken}`
      await NodeMailerInstance.sendResetPasswordLinkEmail(validationLink, checkUserRegistered.email)
      response.status(200).json({
         message: 'A jelszó emlékeztető email sikeresen elküldve a megadott email címre!',
         validationLink,
      })
   } catch (error) {
      response.status(500).json(error)
   }
}

// A frontendről megkapom a 2 jelszót, meg az előzőleg elküldött tokent -> validálni kell
export const resetPasswordController = async (request: ResetPassRequestType, response: Response) => {
   const { passwordToken, firstPassword, userId } = request.body

   const validationErrors = validationResult(request)
   if (!validationErrors.isEmpty()) return response.status(422).json({ errors: validationErrors.array() })

   const foundUser = await User.findOne({ _id: userId })
   if (foundUser === null) return response.status(404).json(ErrorResponse(true, 'Felhasználó nem található!'))

   try {
      const hashedNewPass = await bcrypt.hash(firstPassword, 10)
      verify(
         passwordToken,
         PASSWORD_SECRET + foundUser.password,
         async (err: VerifyErrors | null, decoded: JwtPayload | undefined) => {
            if (err) return response.status(403).json({ errorMessage: 'refresh token expired' })
            if (decoded) {
               foundUser.password = hashedNewPass
               // foundUser.save()
               return response.status(200).json({ message: 'A jelszó módosítás sikeres volt!' })
            }
         }
      )
   } catch (error) {
      response.status(500).json(error)
   }
}

type ResetPassRequestType = Request & {
   body: {
      userId: string
      passwordToken: string
      firstPassword: string
      secondPassword: string
   }
}

type ForgotPasswordRequestType = Request & {
   body: {
      userEmailOrUsername: string
   }
}

// https://www.youtube.com/watch?v=72JYhSoVYPc&ab_channel=yoursTRULY
// https://www.youtube.com/watch?v=kfw61IxDgW8&ab_channel=AwaisMirza
