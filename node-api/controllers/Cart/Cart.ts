import { Response } from 'express'
import { findSingleItemInUsersCartItem, findUsersCartItemIndex, GetUserAuthInfoRequest } from './CartHelper'

export const fetchUserCartItemsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      res.status(200).json(req.foundUser.cartItems)
   } catch (error) {
      res.status(500).json(error)
   }
}

// Ha a felhasználó nincs bejelentkezve és tesz valamit a kosarába
export const fillDBWithCartItemsAfterLoginController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const { foundUser } = req
      foundUser.cartItems = req.body.cartItems
      foundUser.save()
      return res.status(200).json({ message: 'Sikeres bevitel az adatbázisba!' })
   } catch (error) {
      res.status(500).json(error)
   }
}

export const addCartItemsToUserController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const { foundUser } = req
      const productId: string = req.body._id
      const ItemQuantity = req.body.quantity
      if (ItemQuantity === null || ItemQuantity <= 0)
         return res.status(404).json({ message: 'Helytelen mennyiség' })

      let toSaveOrModifyObject = {
         itemId: productId,
         quantity: ItemQuantity,
         productType: req.body.productType,
         displayImage: req.body.displayImage,
         displayName: req.body.displayName,
         price: req.body.price,
      }
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
   const { foundUser } = req
   const foundIndex = findUsersCartItemIndex(foundUser.cartItems, req.body._id)
   if (foundIndex >= 0) foundUser.cartItems.splice(foundIndex, 1)

   foundUser.save()
   return res.status(200).json({ message: 'Sikeresen törölve!' })
}

export const increadeDecreaseItemQtyController = async (req: GetUserAuthInfoRequest, res: Response) => {
   const requestData = req.body.data
   const { foundUser } = req
   const itemFoundIndex = findUsersCartItemIndex(foundUser.cartItems, requestData.itemId)
   const foundItem = findSingleItemInUsersCartItem(foundUser.cartItems, requestData.itemId)

   if (itemFoundIndex !== -1 && foundItem !== undefined) {
      if (requestData.isIncrease) foundItem.quantity++
      else foundItem.quantity--
      foundUser.cartItems.splice(itemFoundIndex, 1, foundItem)
   }
   foundUser.save()
   return res.status(200).json({ message: 'mennyiség sikeresen módosítva' })
}
