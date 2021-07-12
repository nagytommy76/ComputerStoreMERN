import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StateType = {
   totalQuantity: 0,
   totalPrice: 0,
   cartItems: []
}

export const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<{ _id: string; productName: string; price: number; itemQuantity: string }>) => {
         let singleCartItem: CartItemsType = {
            _id: action.payload._id,
            productName: action.payload.productName,
            price: action.payload.price,
            quantity: parseInt(action.payload.itemQuantity)
         }
         let foundCartItemInState = checkProductExistsInTheCart(action.payload._id, state.cartItems)
         if (foundCartItemInState !== undefined) {
            //  Ha true akkor van ilyen elem és át kell írni a quantity-t
            // Megkeresni az ID alapján és annak a qty-jét módosítani
            const foundElementIndex = searchForStartingIndexInState(action.payload._id, state.cartItems)
            singleCartItem.quantity = foundCartItemInState.quantity + parseInt(action.payload.itemQuantity)
            state.cartItems.splice(foundElementIndex, 1, singleCartItem)
         } else {
            // Ha false, hozzáadni az objectet, a user által küldött qty-vel
            state.cartItems.push(singleCartItem)
         }
      }
   }
})

const checkProductExistsInTheCart = (productId: string, StateCartItems: CartItemsType[]) => {
   return StateCartItems.find((item: CartItemsType) => item._id === productId)
   //    return foundItemInCart !== undefined ? true : false
}

const searchForStartingIndexInState = (productId: string, StateCartItems: CartItemsType[]) => {
   return StateCartItems.findIndex((item: CartItemsType) => item._id === productId)
}

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer

type StateType = {
   totalQuantity: number
   totalPrice: number
   cartItems: CartItemsType[]
}

type CartItemsType = {
   _id: string
   productName: string
   quantity: number
   price: number
}
