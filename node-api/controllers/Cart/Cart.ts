import { Request, Response } from 'express'
import { User } from '../../models/User/User'

export const addCartItemsToUser = async (req: Request, res: Response) => {
   try {
      const productId = req.body._id
      const productQty = req.body.quantity
      const productType = req.body.productType
      const userName = req.body.userName
      const foundUser = await User.findOne({ userName })
      if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
      foundUser.cartItems = {
         itemId: productId,
         quantity: productQty,
         productType: productType
      }
      foundUser.save()
      return res.status(201).json({ message: 'Termék mentve a kosárba!' })
   } catch (error) {
      res.status(500).json(error)
   }
}
