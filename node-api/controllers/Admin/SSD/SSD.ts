import { Request, Response } from 'express'
import { SSDDetailsType, SSDProduct } from '../../../models/Products/SSD/SSD'
import baseAdminController, { BaseProductProperties } from '../BaseController'

export const insertSSDProductController = async (request: Request, response: Response) => {
   try {
      response.status(200).json({ msg: 'sikeres SSD bevitel!!!' })
   } catch (error) {
      response.status(500).json(error)
   }
}
