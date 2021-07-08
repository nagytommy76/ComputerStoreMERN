import { Request, Response } from 'express'
import { VgaProduct } from '../models/Vga/VgaProduct'

export const getAllVgaItemController = async (req: Request, res: Response) => {
   await VgaProduct.find({})
      .then((allVgaProducts) => {
         if (!allVgaProducts) return res.json({ message: 'Nem található VGA termék!' })
         else return res.json(allVgaProducts)
      })
      .catch((error) => console.log(error))
}

export const getSingleVgaItemByItemNumberController = async (req: Request, res: Response) => {
   const itemNumber = req.params?.itemNumber
   if (itemNumber) {
      await VgaProduct.findOne({ itemNumber })
         .populate('details')
         .then((foundVgaWithDetails) => {
            if (!foundVgaWithDetails) {
               res.json({ hasError: true, errorMsg: 'Vga item not found' })
            } else {
               res.json(foundVgaWithDetails)
            }
         })
         .catch((err) => console.error(err))
   } else {
      res.status(404).json({ hasError: true, errorMsg: 'No parameters has been send' })
   }
}
