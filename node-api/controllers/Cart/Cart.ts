import { Response } from 'express'
import { findSingleItemInUsersCartItem, findUsersCartItemIndex, checkUserExists, GetUserAuthInfoRequest } from './CartHelper'

export const fetchUserCartItemsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const foundUser = await checkUserExists(req, res)
      if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
      res.status(200).json(foundUser.cartItems)
   } catch (error) {
      res.status(500).json(error)
   }
}

export const addCartItemsToUserController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const productId: string = req.body._id
      let toSaveOrModifyObject = {
         itemId: productId,
         quantity: req.body.quantity,
         productType: req.body.productType,
         displayImage: req.body.displayImage,
         displayName: req.body.displayName,
         price: req.body.price
      }
      const foundUser = await checkUserExists(req, res)
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
   const foundUser = await checkUserExists(req, res)
   if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
   const foundIndex = findUsersCartItemIndex(foundUser.cartItems, req.body._id)
   if (foundIndex >= 0) foundUser.cartItems.splice(foundIndex, 1)

   foundUser.save()
   return res.sendStatus(200)
}

export const increadeDecreaseItemQtyController = async (req: GetUserAuthInfoRequest, res: Response) => {
   const requestData = req.body.data
   const foundUser = await checkUserExists(req, res)
   if (foundUser === null) return res.status(404).json({ message: 'Nem található ilyen felhasználó' })
   const itemFoundIndex = findUsersCartItemIndex(foundUser.cartItems, requestData.itemId)
   const foundItem = findSingleItemInUsersCartItem(foundUser.cartItems, requestData.itemId)

   if (itemFoundIndex !== -1 && foundItem !== undefined) {
      if (requestData.isIncrease) foundItem.quantity++
      else foundItem.quantity--
      foundUser.cartItems.splice(itemFoundIndex, 1, foundItem)
   }
   foundUser.save()
   return res.status(201).json({ message: 'mennyiség sikeresen módosítva' })
}
