import { Request, Response } from 'express'
import { createVgaProduct } from './CreateVga'
// import { validationResult } from 'express-validator'

export const insertVgaItemController = async (req: Request, res: Response) => {
   try {
      // const errors = validationResult(req)
      // if (!errors.isEmpty()) res.status(422).json(errors)
      await createVgaProduct(req.body.vgaProduct)
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json(error)
   }
}
