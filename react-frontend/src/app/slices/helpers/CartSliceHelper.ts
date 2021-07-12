export type StateType = {
   totalQuantity: number
   totalPrice: number
   cartItems: CartItemsType[]
}

export type CartItemsType = {
   _id: string
   productName: string
   quantity: number
   price: number
}

export const checkProductExistsInTheCart = (productId: string, StateCartItems: CartItemsType[]) => {
   return StateCartItems.find((item: CartItemsType) => item._id === productId)
}

export const searchForStartingIndexInStateCartItems = (productId: string, StateCartItems: CartItemsType[]) => {
   return StateCartItems.findIndex((item: CartItemsType) => item._id === productId)
}

// Amikor egy elemet adok a kosárhoz, és még nincs benne vagy már benne van.
// Mindig újraszámolom...
export const calculateTotalPrice = (stateCartItems: CartItemsType[]) => {
   let price = 0
   stateCartItems.map((cartItem) => (price += cartItem.price * cartItem.quantity))
   return price
}

export const calculateTotalQuantity = () => {}
