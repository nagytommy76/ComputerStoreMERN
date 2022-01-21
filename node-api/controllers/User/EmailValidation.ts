import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../../models/User/User'
import { EMAIL_SECRET } from '../../config/endpoints.config'

import NodeMailer from '../../config/Mail/nodemailer'
const nodemailer = new NodeMailer()

export const ValidateEmailRegistrationController = (req: Request, res: Response) => {
   const { confirmCode } = req.body as { confirmCode: string }
   try {
      jwt.verify(confirmCode, EMAIL_SECRET, (error, decoded) => {
         if (error) return res.status(403).json({ errorMsg: error.message })
         const { email } = decoded as DecodedUserType
         User.findOne({ email }).then((foundUser) => {
            if (foundUser) {
               foundUser.isEmailConfirmed = true
               foundUser.save()
               return res.sendStatus(200)
            } else res.status(404).json({ message: `Nem található ${email} email címmel felhasználó!` })
         })
      })
   } catch (error) {
      res.status(500).json({ error })
   }
}

export const ResendEmailController = async (req: Request, res: Response) => {
   const { confirmCode, userEmailOrUsername } = req.body as { confirmCode: string | null; userEmailOrUsername: string | null }
   try {
      // Ha érvénytelen vagy hibás a valid kód
      if (confirmCode !== null) {
         const { email, userName } = jwt.decode(confirmCode) as { email: string; userName: string; exp: number; iat: number }
         const emailToken = signAnEmailTokenWithUserEmailAndName(userName, email)
         await nodemailer.resendEmailWhenTokenExpiresOrInvalid(email, emailToken)
         return res
            .status(200)
            .json({ message: `Az új regisztrációs kód el lett küldve a korábban megadott email címre: ${email}` })
      } else if (userEmailOrUsername !== null) {
         // A login oldalon, ha még nincs validálva
         const foundUser = await User.findOne({
            $or: [{ email: userEmailOrUsername }, { userName: userEmailOrUsername }]
         }).select('userName email')
         if (foundUser) {
            const emailToken = signAnEmailTokenWithUserEmailAndName(foundUser.userName, foundUser.email)
            await nodemailer.resendEmailWhenTokenExpiresOrInvalid(foundUser.email, emailToken)
            return res.status(200).json({ message: 'Az email sikeresen elküldve az email címedre!' })
         }
      }
   } catch (error) {
      res.status(500).json({ error })
   }
}

const signAnEmailTokenWithUserEmailAndName = (userName: string, email: string) => {
   return jwt.sign({ userName, email }, EMAIL_SECRET, { expiresIn: `${nodemailer.EMAIL_TOKEN_EXPIRESIN}min` })
}

/**
 * Generálni egy emailToken-t (jwt.sign), ami valid lesz míg rá nem mész az email címeden a linkre ami tartalmazza ezt a tokent
 * a link átirányít egy frontend oldalra, pl confirm-email
 * ott automatikusan be kéne illeszteni az input mezőbe, majd elküldeni a backend felé validálni
 * ha mindez siker, átállítani az isEmailConfirmed mezőt, true ra.
 * a Login page-en egy email újraküldés, ha esetleg nem jött meg a mail
 */

type DecodedUserType = jwt.JwtPayload & {
   userName: string
   email: string
}
