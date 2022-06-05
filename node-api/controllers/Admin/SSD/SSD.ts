import { Request, Response } from 'express'
import { SSDDetailsType, SSDProduct } from '../../../models/Products/SSD/SSD'
import baseAdminController, { BaseProductProperties } from '../BaseController'

const AdminController = baseAdminController(SSDProduct)

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

type InsertBodyType = BaseProductProperties & {
   _id: string
   details: SSDDetailsType
}
