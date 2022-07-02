import { Request, Response } from 'express'
import { SSDDetailsType, SSDProduct } from '../../../models/Products/SSD/SSD'
import baseAdminController, { BaseProductProperties } from '../BaseController'

const AdminController = baseAdminController(SSDProduct)

export const getAllSSDController = async (request: Request, response: Response) => {
   try {
      const ssdProducts = await AdminController.getAllProduct()
      response.status(200).json({ allProducts: ssdProducts })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const insertSSDProductController = async (request: Request, response: Response) => {
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
      } = request.body as InsertBodyType
      await AdminController.insert(details, {
         inStockQuantity,
         manufacturer,
         pictureUrls,
         price,
         type,
         isHighlighted,
         itemNumber,
         typeCode,
      })

      response.status(201).json({ msg: 'sikeres SSD bevitel!!!' })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const modifySSDProductController = async (request: Request, response: Response) => {
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
      } = request.body as InsertBodyType
      const foundSSDProduct = await AdminController.getProductToModify(_id)
      if (foundSSDProduct) {
         foundSSDProduct.details = details
         AdminController.modifyChartData(foundSSDProduct.details, price)
         foundSSDProduct.inStockQuantity = inStockQuantity
         foundSSDProduct.manufacturer = manufacturer
         foundSSDProduct.pictureUrls = pictureUrls
         foundSSDProduct.price = price
         foundSSDProduct.type = type
         foundSSDProduct.isHighlighted = isHighlighted
         foundSSDProduct.itemNumber = itemNumber
         foundSSDProduct.typeCode = typeCode
         foundSSDProduct.save()
         return response.sendStatus(201)
      }
      response.sendStatus(404)
   } catch (error) {
      response.status(500).json(error)
   }
}

export const getAllSSDItemsForDeleteController = async (request: Request, response: Response) => {
   try {
      const allSSDs = await AdminController.getAllToDeleteProducts()
      return response.status(200).json({ allProducts: allSSDs })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const deleteSSDProductByIdController = async (request: Request, response: Response) => {
   try {
      await AdminController.delete(request.body.productID)
      response.status(200).json({ msg: 'sikeres törlés', deleted: true })
   } catch (error) {
      response.status(500).json(error)
   }
}

type InsertBodyType = BaseProductProperties & {
   _id: string
   details: SSDDetailsType
}
