import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { validationResult } from 'express-validator'

export const InsertUserDetailsController = (req: Request, res: Response) => {
   try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) return res.status(422).json(errors)
      res.sendStatus(200)
   } catch (error) {
      res.status(500).json(error)
   }
}
