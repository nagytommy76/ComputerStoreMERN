import { Model, ObjectId } from 'mongoose'

import { MemoryProductType } from '../../../../models/Products/Memory/MemoryTypes'
import { CpuProductType } from '../../../../models/Products/Cpu/CpuTypes'
import { VgaType } from '../../../../models/Products/Vga/VgaTypes'

// Itt szintén nem jó az any, Megoldani!!!
export const removeSingleCommentFromRatingValues = async (
   ProductModel: Model<MemoryProductType | VgaType | CpuProductType>,
   productID: string,
   commentID: string | ObjectId
) => {
   try {
      const product = await ProductModel.findOne({ _id: productID })
      if (product === null) {
         return { msg: 'Nincs ilyen komment' }
      }
      product.ratingValues = product.ratingValues.filter(rating => {
         return rating._id != commentID
      })
      // product.save()
      return { msg: 'sikeres törlés', ratingValues: product.ratingValues }
   } catch (error) {
      throw new Error('Valami gond van a komment törlésekor')
   }
}
