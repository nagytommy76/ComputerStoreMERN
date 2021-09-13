import { Request, Response } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'

export const getCpuProducts = async (req: Request, res: Response) => {
   try {
      await CpuProduct.find().then((allCpuProducts) => {
         return res.status(200).json(allCpuProducts)
      })
   } catch (error) {
      return res.status(500).json(error)
   }
}
