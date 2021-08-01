import { VgaProduct } from '../../../models/Vga/VgaProduct'
import { VgaType } from '../../../models/Vga/VgaTypes'

export const getVgaProductToModify = async (productId: string) => {
   // Meg kell találni a módosítandó vga-t
   await VgaProduct.findById(productId).then((result) => {
      console.log(result)
   })
}
