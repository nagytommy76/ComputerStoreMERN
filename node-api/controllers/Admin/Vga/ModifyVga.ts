import { VgaProduct } from '../../../models/Vga/VgaProduct'
import { VgaType } from '../../../models/Vga/VgaTypes'

export const getAllVgaProductToModify = async () => {
   // Meg kell találni a módosítandó vga-t
   return await VgaProduct.find({}).then((result) => {
      return result
   })
}

export const modifyVgaProduct = async (productId: string) => {
   return await VgaProduct.findById(productId).then((result) => {
      return result
   })
}
