import { Request, Response } from 'express'
import { createVgaProduct } from './CreateVga'
import { getVgaProductToModify } from './ModifyVga'
import { validationResult } from 'express-validator'

export const insertVgaItemController = async (req: Request, res: Response) => {
   try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) res.status(422).json(errors)
      await createVgaProduct(req.body.vgaProduct)
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json(error)
   }
}

export const modifyVgaProductController = async (req: Request, res: Response) => {
   try {
      getVgaProductToModify(req.body._id)
   } catch (error) {
      res.status(500).json(error)
   }
}
