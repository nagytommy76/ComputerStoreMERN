import { Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { User } from '../../models/User/User'
import { UserTypes } from '../../models/User/UserTypes'
import { VgaProduct } from '../../models/Vga/VgaProduct'
import { findSingleItemInUsersCartItem, findUsersCartItemIndex } from './CartHelper'
type GetUserAuthInfoRequest = Request & {
   user?: UserTypes
}

export const fetchUserCartItemsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const userEmail = req.user?.email
      const foundUser = await User.findOne({ email: userEmail }, 'cartItems')
      if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
      res.status(200).json(foundUser.cartItems)
   } catch (error) {
      res.status(500).json(error)
   }
}

export const addCartItemsToUserController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const productId: string = req.body._id
      const userEmail = req.user?.email
      let toSaveOrModifyObject = {
         itemId: productId,
         quantity: req.body.quantity,
         productType: req.body.productType,
         displayImage: req.body.displayImage,
         displayName: req.body.displayName,
         price: req.body.price
      }
      const foundUser = await User.findOne({ email: userEmail }, 'cartItems')
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

export const removeItemController = async (req: GetUserAuthInfoRequest, res: Response) => {
   // console.log(req.body)
   const userEmail = req.user?.email
   const foundUser = await User.findOne({ email: userEmail }, 'cartItems')
   if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
   const foundIndex = findUsersCartItemIndex(foundUser.cartItems, req.body._id)
   if (foundIndex >= 0) foundUser.cartItems.splice(foundIndex, 1)

   foundUser.save()
   return res.sendStatus(200)
}

export const addItemsToCartController = (req: Request, res: Response) => {
   // inkább elmentem az egész Redux store adatot az adatbázisba
   // Ha csak a qty-t kell módosítani akkor csak azt módosítom...
}
