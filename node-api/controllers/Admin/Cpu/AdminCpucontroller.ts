import { Request, Response } from 'express'
import { ChartDataType } from '../../../models/Products/BaseTypes'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { CpuDetailsType, CpuProductType } from '../../../models/Products/Cpu/CpuTypes'
import baseAdminController from '../BaseController'

type RequestWithBodyType = Request & {
   body: CpuProductType
}

type RequestWithCpuID = Request & {
   body: {
      productID: string
   }
}

const AdminController = baseAdminController(CpuProduct)

export const getAllCpuItemsController = async (req: Request, res: Response) => {
   try {
      const cpuProducts = await AdminController.getAllProduct()
      return res.status(200).json({ allProducts: cpuProducts })
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const insertCpuController = async (req: RequestWithBodyType, res: Response) => {
   try {
      const {
         itemNumber,
         type,
         typeCode,
         manufacturer,
         price,
         pictureUrls,
         isHighlighted,
         inStockQuantity,
         details,
      } = req.body as CpuProductType
      const toInsertProperties = {
         itemNumber: itemNumber,
         type: type,
         typeCode: typeCode,
         manufacturer: manufacturer,
         price: price,
         pictureUrls: pictureUrls,
         isHighlighted: isHighlighted,
         ratingValues: [],
         inStockQuantity,
      }
      const createdCpu = await AdminController.insert(details, toInsertProperties)
      const saved = await createdCpu.save()
      if (saved) return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const modifyCpuProductController = async (req: Request, res: Response) => {
   try {
      const toModifyCpuProduct = await AdminController.getProductToModify(req.body._id)
      if (toModifyCpuProduct) {
         toModifyCpuProduct.details = req.body.details

         if (toModifyCpuProduct.details.chartData === undefined) {
            toModifyCpuProduct.details.chartData = [
               {
                  price: req.body.price,
                  timestamp: Date.now(),
               },
            ]
         } else {
            toModifyCpuProduct.details.chartData.push({
               price: req.body.price,
               timestamp: Date.now(),
            })
         }
         toModifyCpuProduct.itemNumber = req.body.itemNumber
         toModifyCpuProduct.type = req.body.type
         toModifyCpuProduct.typeCode = req.body.typeCode
         toModifyCpuProduct.manufacturer = req.body.manufacturer
         toModifyCpuProduct.price = req.body.price
         toModifyCpuProduct.pictureUrls = req.body.pictureUrls
         toModifyCpuProduct.inStockQuantity = req.body.inStockQuantity
         toModifyCpuProduct.isHighlighted = req.body.isHighlighted
         await toModifyCpuProduct.save()
         return res.sendStatus(201)
      } else return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}

// DELETE CPU

export const getAllCpuItemsForDeleteController = async (req: Request, res: Response) => {
   try {
      const cpuProducts = await AdminController.getAllToDeleteProducts()
      res.status(200).json({ allProducts: cpuProducts })
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const deleteCpuProductByIdController = async (req: RequestWithCpuID, res: Response) => {
   try {
      await AdminController.delete(req.body.productID)
      return res.status(200).json({ msg: 'sikeres törlés', deleted: true })
   } catch (error) {
      return res.status(500).json(error)
   }
}
