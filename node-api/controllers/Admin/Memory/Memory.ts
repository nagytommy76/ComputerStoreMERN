import { Request, Response } from 'express'
import { MemoryProduct } from '../../../models/Products/Memory/Memory'
import baseAdminController from '../BaseController'

const AdminController = baseAdminController(MemoryProduct)

export const getAllMemoryController = async (request: Request, response: Response) => {
   try {
      const memoryProducts = await AdminController.getAll()
      response.status(200).json({ allProducts: memoryProducts })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const insertMemoryProduct = (request: Request, response: Response) => {
   try {
      // AdminController.
   } catch (error) {
      response.status(500).json(error)
   }
}
