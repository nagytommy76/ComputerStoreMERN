import { Request, Response } from 'express'
import { MemoryProduct } from '../../../models/Products/Memory/Memory'
import baseAdminController, { BaseProductProperties } from '../BaseController'

import { MemoryDetails } from '../../../models/Products/Memory/MemoryTypes'

const AdminController = baseAdminController(MemoryProduct)

export const getAllMemoryController = async (request: Request, response: Response) => {
   try {
      const memoryProducts = await AdminController.getAllProduct()
      response.status(200).json({ allProducts: memoryProducts })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const insertMemoryProduct = async (request: Request, response: Response) => {
   try {
      const {
         details,
         inStockQuantity,
         manufacturer,
         pictureUrls,
         price,
         type,
         isHighlighted,
         itemNumber,
         typeCode,
      } = request.body as BodyType
      details.voltage = parseFloat(details.voltage as string)
      const result = await AdminController.insert(details, {
         inStockQuantity,
         manufacturer,
         pictureUrls,
         price,
         type,
         isHighlighted,
         itemNumber,
         typeCode,
      })
      response.status(201).json({ msg: 'sikeres bevitel', result })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const modifyMemoryProductController = async (request: Request, response: Response) => {}

export const getAllMemoryItemsForDeleteController = async (request: Request, response: Response) => {}

export const deleteMemoryProductByIdController = async (request: Request, response: Response) => {}

type BodyType = BaseProductProperties & {
   details: MemoryDetails
}
