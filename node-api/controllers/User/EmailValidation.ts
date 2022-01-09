import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { EMAIL_SECRET } from '../../config/endpoints.config'

export const ValidateEmailRegistrationController = (req: Request, res: Response) => {
   const { confirmCode } = req.body as { confirmCode: string }
   try {
      jwt.verify(confirmCode, EMAIL_SECRET, (error, decoded) => {
         if (error) return res.status(403).json({ errorMsg: error.message })
         return res.status(200).json({ decoded })
      })
   } catch (error) {
      res.status(500).json({ error })
   }
}

export const ResendEmailController = (req: Request, res: Response) => {}

/**
 * Generálni egy emailToken-t (jwt.sign), ami valid lesz míg rá nem mész az email címeden a linkre ami tartalmazza ezt a tokent
 * a link átirányít egy frontend oldalra, pl confirm-email
 * ott automatikusan be kéne illeszteni az input mezőbe, majd elküldeni a backend felé validálni
 * ha mindez siker, átállítani az isEmailConfirmed mezőt, true ra.
 * a Login page-en egy email újraküldés, ha esetleg nem jött meg a mail
 */
