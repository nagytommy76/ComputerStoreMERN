import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'

export const insertCpuController = (req: Request, res: Response) => {
   try {
      // Validáció
   } catch (error) {
      return res.status(500).json(error)
   }
}
