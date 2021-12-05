import { Request, Response } from 'express'
import { returnFilledVgaProductObject } from './CreateVga'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'

export const getAllVgaItemsController = async (req: Request, res: Response) => {
   try {
      const vgaProducts = await VgaProduct.find()
      return res.status(200).json({ allProducts: vgaProducts })
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const insertVgaItemController = async (req: Request, res: Response) => {
   try {
      const vga = new VgaProduct(returnFilledVgaProductObject(req.body))
      await vga.save()
      return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
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
               vga.inStockQuantity = req.body.inStockQuantity
               vga.save()
            }
         })
         .catch((errors) => console.log(errors))
      return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}

// Delete Vga
export const getAllVgaItemsForDeleteController = async (req: Request, res: Response) => {
   try {
      const vgaProducts = await VgaProduct.find()
         .select(['manufacturer', 'price', 'type', 'inStockQuantity'])
         .sort({ price: 'asc' })
      return res.status(200).json({ allProducts: vgaProducts })
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const deleteVgaProductByIdController = (req: RequestWithVgaID, res: Response) => {
   try {
      VgaProduct.findByIdAndRemove(req.body.productID)
         .then(() => {
            return res.status(200).json({ msg: 'sikeres törlés', deleted: true })
         })
         .catch((error) => res.status(500).json(error))
   } catch (error) {
      return res.status(500).json(error)
   }
}
type RequestWithVgaID = Request & {
   body: {
      productID: string
   }
}
