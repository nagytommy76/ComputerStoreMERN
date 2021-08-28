export type StateType = {
   totalQuantity: number
   totalPrice: number
   cartItems: CartItemsType[]
}

export type CartItemsType = {
   itemId: string
   displayName: string
   quantity: number
   price: number
   displayImage: string
}

export const checkProductExistsInTheCart = (productId: string, StateCartItems: CartItemsType[]) => {
   return StateCartItems.find((item: CartItemsType) => item.itemId === productId)
}

export const searchForStartingIndexInStateCartItems = (productId: string, StateCartItems: CartItemsType[]) => {
   return StateCartItems.findIndex((item: CartItemsType) => item.itemId === productId)
}

// Amikor egy elemet adok a kosárhoz, és még nincs benne vagy már benne van.
// Mindig újraszámolom...
export const calculateTotalPriceAndQuantity = (state: StateType, stateCartItems?: CartItemsType[]) => {
   let result = {
      quantity: 0,
      price: 0
   }
   state.cartItems.forEach((cartItem) => {
      result.price += cartItem.price * cartItem.quantity
      result.quantity += cartItem.quantity
   })
   state.totalQuantity = result.quantity
   state.totalPrice = result.price
}

export const increaseItemQtyByOne = (state: StateType, id: string, isIncrease: boolean = true) => {
   const foundElementIndex = searchForStartingIndexInStateCartItems(id, state.cartItems)
   let foundCartItemInState = checkProductExistsInTheCart(id, state.cartItems)
   if (foundElementIndex >= 0 && foundCartItemInState !== undefined) {
      if (isIncrease) foundCartItemInState.quantity++
      if (!isIncrease && foundCartItemInState.quantity > 1) foundCartItemInState.quantity--

      state.cartItems.splice(foundElementIndex, 1, foundCartItemInState)
      calculateTotalPriceAndQuantity(state)
   }
}
