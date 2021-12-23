import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { JWTUserType } from '../Types'

export const handleUserOrderController = async (req: RequestWithUser, res: Response) => {
   try {
      const foundUser = await User.findById(req.user?._id)
      if (foundUser) {
         const currentItemsInCart: { productID: string; productName: string; productQty: number }[] = foundUser.cartItems.map(
            (product) => {
               return {
                  productID: product.itemId,
                  productName: product.displayName,
                  productQty: product.quantity
               }
            }
         )
         const foundCurrentOrder = foundUser.orders.find((order) => order._id == req.body.paymentId)
         // foundUser.orders.push({
         //    ...foundCurrentOrder,
         //    orderedAt: new Date(),
         //    products: currentItemsInCart
         // })
         foundUser.cartItems = []
         // foundUser.save()
         return res.status(200).json({ orderSuccess: true, result: foundUser })
      }
      return res.status(404).json({ msg: 'A felhasználó nem található', orderSuccess: false })
   } catch (error) {
      return res.status(500).json({ error, orderSuccess: false })
   }
}

type RequestWithUser = Request & {
   user?: JWTUserType
   body: {
      paymentId: string | null
   }
}
