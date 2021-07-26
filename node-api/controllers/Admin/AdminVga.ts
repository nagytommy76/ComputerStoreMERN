import { Request, Response } from 'express'
import { createVgaProduct } from './CreateVga'

export const insertVgaItemController = async (req: Request, res: Response) => {
   try {
      await createVgaProduct(req.body.vgaProduct)
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json({ msg: error })
   }
}
