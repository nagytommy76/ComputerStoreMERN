import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'

import {
   checkProductExistsInTheCart,
   searchForStartingIndexInStateCartItems,
   StateType,
   CartItemsType,
   calculateTotalPriceAndQuantity,
   increaseItemQtyByOne
} from './helpers/CartSliceHelper'

type IncomingTypes = {
   _id: string
   productName: string
   price: number
   itemQuantity: string
   displayImage: string
}

const initialState: StateType = {
   totalQuantity: 0,
   totalPrice: 0,
   cartItems: []
}

export const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<IncomingTypes>) => {
         let singleCartItem: CartItemsType = {
            itemId: action.payload._id,
            productName: action.payload.productName,
            price: action.payload.price,
            quantity: parseInt(action.payload.itemQuantity),
            displayImage: action.payload.displayImage
         }
         const foundElementIndex = searchForStartingIndexInStateCartItems(action.payload._id, state.cartItems)
         let foundCartItemInState = checkProductExistsInTheCart(action.payload._id, state.cartItems)

         if (foundElementIndex >= 0 && foundCartItemInState !== undefined) {
            //  Ha true akkor van ilyen elem és át kell írni a quantity-t
            // Megkeresni az ID alapján és annak a qty-jét módosítani
            singleCartItem.quantity = foundCartItemInState.quantity + parseInt(action.payload.itemQuantity)
            state.cartItems.splice(foundElementIndex, 1, singleCartItem)
            calculateTotalPriceAndQuantity(state)
         } else {
            // Ha false, hozzáadni az objectet, a user által küldött qty-vel
            state.cartItems.push(singleCartItem)
            calculateTotalPriceAndQuantity(state)
         }
      },
      removeAllEntitesFromCart: (state, action: PayloadAction<string>) => {
         const cartItemToDeleteIndex = searchForStartingIndexInStateCartItems(action.payload, state.cartItems)
         if (cartItemToDeleteIndex >= 0) {
            state.cartItems.splice(cartItemToDeleteIndex, 1)
            calculateTotalPriceAndQuantity(state)
         }
      },
      increaseItemQty: (state, action: PayloadAction<string>) => {
         increaseItemQtyByOne(state, action.payload)
      },
      decreaseItemQty: (state, action: PayloadAction<string>) => {
         increaseItemQtyByOne(state, action.payload, false)
      }
   }
})

export const sendCartItemsToSaveInDB =
   (payload: IncomingTypes, productType: string) => async (dispatch: Dispatch, getState: any) => {
      dispatch(addToCart(payload))
      // Ez már a kosárba helyezés utáni állapot =
      const totalQuantityOfAProduct = getState().cart.cartItems.find((item: any) => item.itemId === payload._id)
      await axios
         .post('/cart/add-items', {
            _id: payload._id,
            quantity: totalQuantityOfAProduct.quantity,
            productType: productType,
            displayImage: payload.displayImage,
            displayName: payload.productName,
            price: payload.price
         })
         .then((result) => console.log(result))
         .catch((error) => console.log(error.message))
   }

export const removeItemsFromCart = (_id: string) => async (dispatch: Dispatch) => {
   dispatch(removeAllEntitesFromCart(_id))
   await axios
      .delete('/cart/remove-item', {
         data: {
            _id
         }
      })
      .catch((error) => console.log(error))
}

export const fetchCartItemsFromDB = () => async (dispatch: Dispatch) => {
   await axios
      .get('/cart/fetch-items')
      .then(
         (
            cartItems: AxiosResponse<
               { quantity: string; displayImage: string; itemId: string; price: number; displayName: string }[]
            >
         ) => {
            console.log(cartItems)
            cartItems.data.forEach((items) => {
               dispatch(
                  addToCart({
                     _id: items.itemId,
                     displayImage: items.displayImage,
                     itemQuantity: items.quantity,
                     price: items.price,
                     productName: items.displayName
                  })
               )
            })
         }
      )
      .catch((cartErrors) => console.log(cartErrors))
}

export const { addToCart, removeAllEntitesFromCart, increaseItemQty, decreaseItemQty } = CartSlice.actions

export default CartSlice.reducer
