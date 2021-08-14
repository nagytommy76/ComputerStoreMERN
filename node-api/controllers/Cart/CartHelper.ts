import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { CartItemsType } from '../../models/User/UserTypes'
import { UserTypes } from '../../models/User/UserTypes'
export type GetUserAuthInfoRequest = Request & {
   user?: UserTypes
}

export const findUsersCartItemIndex = (cartItems: CartItemsType[], productId: string) => {
   return cartItems.findIndex((cartItem: CartItemsType) => cartItem.itemId == productId)
}

export const findSingleItemInUsersCartItem = (cartItems: CartItemsType[], productId: string) => {
   return cartItems.find((cartItem: CartItemsType) => cartItem.itemId == productId)
}

export const checkUserExists = async (req: GetUserAuthInfoRequest, res: Response) => {
   const userEmail = req.user?.email
   const foundUser = await User.findOne({ email: userEmail }, 'cartItems')
   return foundUser
}
