import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
   checkProductExistsInTheCart,
   searchForStartingIndexInStateCartItems,
   StateType,
   CartItemsType,
   calculateTotalPrice
} from './helpers/CartSliceHelper'

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
            const foundElementIndex = searchForStartingIndexInStateCartItems(action.payload._id, state.cartItems)
            singleCartItem.quantity = foundCartItemInState.quantity + parseInt(action.payload.itemQuantity)
            state.cartItems.splice(foundElementIndex, 1, singleCartItem)
            state.totalPrice = calculateTotalPrice(state.cartItems)
         } else {
            // Ha false, hozzáadni az objectet, a user által küldött qty-vel
            state.cartItems.push(singleCartItem)
            state.totalPrice = calculateTotalPrice(state.cartItems)
         }
      },
      removeAllEntitesFromCart: (state, action: PayloadAction<string>) => {
         const cartItemToDeleteIndex = searchForStartingIndexInStateCartItems(action.payload, state.cartItems)
         state.cartItems.splice(cartItemToDeleteIndex, 1)
         state.totalPrice = calculateTotalPrice(state.cartItems)
      }
   }
})

export const { addToCart, removeAllEntitesFromCart } = CartSlice.actions
export default CartSlice.reducer
