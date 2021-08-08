import { Request, Response } from 'express'
import { createVgaProduct } from './CreateVga'
import { VgaProduct } from '../../../models/Vga/VgaProduct'
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
      VgaProduct.findById(req.body._id)
         .then((vga) => {
            if (vga) {
               vga.details = req.body.details
               vga.itemNumber = req.body.itemNumber
               vga.type = req.body.type
               vga.typeCode = req.body.typeCode
               vga.manufacturer = req.body.manufacturer
               vga.price = req.body.price
               vga.pictureUrls = req.body.pictureUrls
               vga.save()
            }
         })
         .catch((error) => console.log(error))
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json(error)
   }
}
