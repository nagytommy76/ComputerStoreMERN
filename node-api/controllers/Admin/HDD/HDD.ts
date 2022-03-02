import { Request, Response } from 'express'
import { HDDDetailsType, HddProduct } from '../../../models/Products/HDD/Hdd'
import baseAdminController, { BaseProductProperties } from '../BaseController'

const AdminController = baseAdminController(HddProduct)

export const getAllHDDToModifyController = async (request: Request, response: Response) => {
   try {
      response.status(200).json({ allProducts: await AdminController.getAllProduct() })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const insertHDDProductController = async (request: Request, response: Response) => {
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
      response.status(201).json({ msg: 'sikeres bevitel' })
   } catch (error) {
      response.status(500).json(error)
   }
}

export const modifyHDDProductController = async (request: Request, response: Response) => {
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
      const foundHDDProduct = await AdminController.getProductToModify(_id)
      if (foundHDDProduct) {
         foundHDDProduct.details = details
         foundHDDProduct.inStockQuantity = inStockQuantity
         foundHDDProduct.manufacturer = manufacturer
         foundHDDProduct.pictureUrls = pictureUrls
         foundHDDProduct.price = price
         foundHDDProduct.isHighlighted = isHighlighted
         foundHDDProduct.itemNumber = itemNumber
         foundHDDProduct.type = type
         foundHDDProduct.typeCode = typeCode
         foundHDDProduct.save()
         return response.sendStatus(201)
      }
   } catch (error) {
      response.status(500).json(error)
   }
}

type InsertBodyType = BaseProductProperties & {
   _id: string
   details: HDDDetailsType
}
