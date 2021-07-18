import { Request, Response } from 'express'
import { VgaProduct } from '../models/Vga/VgaProduct'

export const getAllVgaItemController = async (req: Request, res: Response) => {
   await VgaProduct.find({})
      .sort({ price: 'asc' })
      .then((allVgaProducts) => {
         if (!allVgaProducts) return res.json({ message: 'Nem található VGA termék!' })
         else return res.json(allVgaProducts)
      })
      .catch((error) => console.log({ hasError: true, errorMsg: error }))
}
