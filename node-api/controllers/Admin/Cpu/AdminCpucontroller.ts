import { Request, Response } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { CpuProductType } from '../../../models/Products/Cpu/CpuTypes'

type RequestWithBodyType = Request & {
   body: CpuProductType
}

type RequestWithCpuID = Request & {
   body: {
      productID: string
   }
}

export const getAllCpuItemsController = async (req: Request, res: Response) => {
   try {
      const cpuProducts = await CpuProduct.find()
      return res.status(200).json({ allProducts: cpuProducts })
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const insertCpuController = async (req: RequestWithBodyType, res: Response) => {
   try {
      const createdCpu = new CpuProduct({
         itemNumber: req.body.itemNumber,
         type: req.body.type,
         typeCode: req.body.typeCode,
         manufacturer: req.body.manufacturer,
         price: req.body.price,
         pictureUrls: req.body.pictureUrls,
         isHighlighted: req.body.isHighlighted,
         details: {
            coreCount: req.body.details.coreCount,
            threadCount: req.body.details.threadCount,
            baseClock: req.body.details.baseClock,
            boostClock: req.body.details.boostClock,
            TDP: req.body.details.TDP,
            l2Cache: req.body.details.l2Cache,
            l3Cache: req.body.details.l3Cache,
            socket: req.body.details.socket,
            manufacturerUrl: req.body.details.manufacturerUrl,
            description: req.body.details.description,
            integratedGraphicsName: req.body.details.integratedGraphicsName,
            manufacturerPageUrl: req.body.details.manufacturerPageUrl,
            architecture: req.body.details.architecture,
            cpuCodeName: req.body.details.cpuCodeName,
            stockCooler: req.body.details.stockCooler,
            stockCoolerName: req.body.details.stockCoolerName,
            warranity: req.body.warranity
         }
      })
      await createdCpu.save()
      return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const modifyCpuProductController = async (req: Request, res: Response) => {
   try {
      CpuProduct.findById(req.body._id)
         .then((cpu) => {
            if (cpu) {
               cpu.details = req.body.details
               cpu.itemNumber = req.body.itemNumber
               cpu.type = req.body.type
               cpu.typeCode = req.body.typeCode
               cpu.manufacturer = req.body.manufacturer
               cpu.price = req.body.price
               cpu.pictureUrls = req.body.pictureUrls
               cpu.inStockQuantity = req.body.inStockQuantity
               cpu.isHighlighted = req.body.isHighlighted
               cpu.save()
            }
         })
         .catch((errors) => console.log(errors))
      return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}

// DELETE CPU

export const getAllCpuItemsForDeleteController = async (req: Request, res: Response) => {
   try {
      const cpuProducts = await CpuProduct.find()
         .select(['manufacturer', 'price', 'type', 'inStockQuantity'])
         .sort({ price: 'asc' })
      return res.status(200).json({ allProducts: cpuProducts })
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const deleteCpuProductByIdController = (req: RequestWithCpuID, res: Response) => {
   try {
      CpuProduct.findByIdAndRemove(req.body.productID)
         .then(() => {
            return res.status(200).json({ msg: 'sikeres törlés', deleted: true })
         })
         .catch((error) => res.status(500).json(error))
   } catch (error) {
      return res.status(500).json(error)
   }
}
