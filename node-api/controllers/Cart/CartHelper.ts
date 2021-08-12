import { CartItemsType } from '../../models/User/UserTypes'

export const findUsersCartItemIndex = (cartItems: CartItemsType[], productId: string) => {
   return cartItems.findIndex((cartItem: CartItemsType) => cartItem.itemId == productId)
}

export const findSingleItemInUsersCartItem = (cartItems: CartItemsType[], productId: string) => {
   return cartItems.find((cartItem: CartItemsType) => cartItem.itemId == productId)
}
