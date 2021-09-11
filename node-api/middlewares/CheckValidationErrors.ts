import { Request, NextFunction, Response } from 'express'
import { validationResult } from 'express-validator'

export const checkErrors = (req: Request, res: Response, next: NextFunction) => {
   const errors = validationResult(req)
   if (!errors.isEmpty()) return res.status(422).json(errors)
   next()
}
