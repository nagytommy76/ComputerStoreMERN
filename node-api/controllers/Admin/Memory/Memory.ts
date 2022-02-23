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

export const modifyMemoryProductController = async (request: Request, response: Response) => {
   try {
      const {
         _id,
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
      const foundMemoryProduct = await AdminController.getProductToModify(_id)
      if (foundMemoryProduct) {
         foundMemoryProduct.details = details
         foundMemoryProduct.inStockQuantity = inStockQuantity
         foundMemoryProduct.manufacturer = manufacturer
         foundMemoryProduct.pictureUrls = pictureUrls
         foundMemoryProduct.price = price
         foundMemoryProduct.type = type
         foundMemoryProduct.isHighlighted = isHighlighted
         foundMemoryProduct.itemNumber = itemNumber
         foundMemoryProduct.typeCode = typeCode
         foundMemoryProduct.save()
         return response.sendStatus(201)
      }
      response.sendStatus(404)
   } catch (error) {
      response.status(500).json(error)
   }
}

export const getAllMemoryItemsForDeleteController = async (request: Request, response: Response) => {
   try {
      const allMemories = await AdminController.getAllToDeleteProducts()
      return response.status(200).json({ allProducts: allMemories })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const deleteMemoryProductByIdController = async (request: Request, response: Response) => {
   try {
      await AdminController.delete(request.body.productID)
      response.status(200).json({ msg: 'sikeres törlés', deleted: true })
   } catch (error) {
      response.status(500).json(error)
   }
}

type BodyType = BaseProductProperties & {
   _id: string
   details: MemoryDetails
}
