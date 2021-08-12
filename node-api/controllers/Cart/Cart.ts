import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { CartItemsType } from '../../models/User/UserTypes'
import { findSingleItemInUsersCartItem, findUsersCartItemIndex } from './CartHelper'

export const addCartItemsToUser = async (req: Request, res: Response) => {
   try {
      const productId: string = req.body._id
      const userName = req.body.userName
      let toSaveOrModifyObject = {
         itemId: productId,
         quantity: req.body.quantity,
         productType: req.body.productType
      }
      const foundUser = await User.findOne({ userName }).select('cartItems')
      if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
      // Van ilyen indexes elem a kosarában
      const itemFoundIndex = findUsersCartItemIndex(foundUser.cartItems, productId)
      const foundItem = findSingleItemInUsersCartItem(foundUser.cartItems, productId)
      if (itemFoundIndex !== -1 && foundItem !== undefined) {
         foundUser.cartItems.splice(itemFoundIndex, 1, toSaveOrModifyObject)
      } else {
         foundUser.cartItems.push(toSaveOrModifyObject)
      }
      foundUser.save()
      return res.status(201).json({ message: 'Termék mentve a kosárba!' })
   } catch (error) {
      res.status(500).json(error)
   }
}

export const removeItemController = async (req: Request, res: Response) => {
   // console.log(req.body)
   const userName = req.body.userName
   const foundUser = await User.findOne({ userName }).select('cartItems')
   if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
   const foundIndex = findUsersCartItemIndex(foundUser.cartItems, req.body._id)
   if (foundIndex >= 0) foundUser.cartItems.splice(foundIndex, 1)

   console.log(foundUser)
   foundUser.save()
}
