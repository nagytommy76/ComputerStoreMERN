import { Model } from 'mongoose'

import { CpuProductType } from '../../../../models/Products/Cpu/CpuTypes'
import { VgaType } from '../../../../models/Products/Vga/VgaTypes'
import { MemoryProductType } from '../../../../models/Products/Memory/MemoryTypes'
import { SSDProductType } from '../../../../models/Products/SSD/SSD'
import { HDDProductType } from '../../../../models/Products/HDD/HDD'

import { CpuProduct } from '../../../../models/Products/Cpu/CpuSchema'
import { VgaProduct } from '../../../../models/Products/Vga/VgaProduct'
import { MemoryProduct } from '../../../../models/Products/Memory/Memory'
import { SSDProduct } from '../../../../models/Products/SSD/SSD'
import { HddProduct } from '../../../../models/Products/HDD/HDD'

// Nem túl jó megoldás, utánanézni mi a hiba han nincs any
const getFoundUserRatingsInAnyProduct = async (
   productModel: Model<CpuProductType | VgaType | SSDProductType | HDDProductType | MemoryProductType | any>,
   userId: string
) => {
   return await productModel
      .find(
         { 'ratingValues.userId': userId },
         { ratingValues: { $elemMatch: { userId } }, type: 1, manufacturer: 1 }
      )
      .lean()
}

export const returnAllUserRatingsByProductType = async (userId: string) => {
   const allFoundUserRatingsInCpu = await getFoundUserRatingsInAnyProduct(CpuProduct, userId)
   const allFoundUserRatingsInVga = await getFoundUserRatingsInAnyProduct(VgaProduct, userId)
   const allFoundUserRatingsInMemory = await getFoundUserRatingsInAnyProduct(MemoryProduct, userId)
   const allFoundUserRatingsInSSD = await getFoundUserRatingsInAnyProduct(SSDProduct, userId)
   const allFoundUserRatingsInHDD = await getFoundUserRatingsInAnyProduct(HddProduct, userId)

   return {
      cpu: allFoundUserRatingsInCpu,
      vga: allFoundUserRatingsInVga,
      memory: allFoundUserRatingsInMemory,
      ssd: allFoundUserRatingsInSSD,
      hdd: allFoundUserRatingsInHDD,
   }
}
