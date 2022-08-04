import { Request, Response } from 'express'
import { Model } from 'mongoose'

import { CpuProduct } from '../../models/Products/Cpu/CpuSchema'
import { VgaProduct } from '../../models/Products/Vga/VgaProduct'
import { HddProduct } from '../../models/Products/HDD/HDD'
import { MemoryProduct } from '../../models/Products/Memory/Memory'
import { SSDProduct } from '../../models/Products/SSD/SSD'

const BaseGetHighlights = async (ProductModel: Model<any>) => {
   return await ProductModel.find({ isHighlighted: true })
      .select('price manufacturer type typeCode pictureUrls ratingValues._id')
      .sort({ price: 1 })
      .lean()
}

export const HighlightController = async (req: Request, res: Response) => {
   const CpuHighlights = await BaseGetHighlights(CpuProduct)
   const VgaHighlights = await BaseGetHighlights(VgaProduct)
   const HddHighlights = await BaseGetHighlights(HddProduct)
   const MemoryHighlights = await BaseGetHighlights(MemoryProduct)
   const SSDHighlights = await BaseGetHighlights(SSDProduct)

   res.status(200).json({
      CpuHighlights,
      VgaHighlights,
      HddHighlights,
      MemoryHighlights,
      SSDHighlights,
   })
}
