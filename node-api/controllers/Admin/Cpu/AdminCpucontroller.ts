import { Request, Response } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { CpuProductType } from '../../../models/Products/Cpu/CpuTypes'

type RequestWithBodyType = Request & {
   body: CpuProductType
}

export const insertCpuController = async (req: RequestWithBodyType, res: Response) => {
   try {
      const createdCpu = new CpuProduct({
         itemNumber: req.body.itemNumber,
         type: req.body.type,
         manufacturer: req.body.manufacturer,
         price: req.body.price,
         pictureUrls: req.body.pictureUrls,
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
            integratedGraphics: req.body.details.integratedGraphics,
            integratedGraphicsName: req.body.details.integratedGraphicsName,
            architecture: req.body.details.architecture,
            cpuCodeName: req.body.details.cpuCodeName,
            stockCooler: req.body.details.stockCooler,
            stockCoolerName: req.body.details.stockCoolerName
         }
      })
      await createdCpu.save()
      return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}
