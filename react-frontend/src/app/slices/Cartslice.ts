import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { axiosInstance as axios, AxiosResponse } from '../../AxiosSetup/AxiosInstance'

import {
   checkProductExistsInTheCart,
   searchForStartingIndexInStateCartItems,
   StateType,
   CartItemsType,
   calculateTotalPriceAndQuantity,
   increaseItemQtyByOne,
} from './helpers/CartSliceHelper'

type IncomingTypes = {
   _id: string
   productType: string
   displayName: string
   displayImage: string
   price: number
   itemQuantity: number
}

const initialState: StateType = {
   isSnackbarOpen: { isOpen: false, text: '' },
   totalQuantity: 0,
   totalPrice: 0,
   cartItems: [],
}

export const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<IncomingTypes>) => {
         let singleCartItem: CartItemsType = {
            itemId: action.payload._id,
            productType: action.payload.productType,
            displayName: action.payload.displayName,
            displayImage: action.payload.displayImage,
            price: action.payload.price,
            quantity: action.payload.itemQuantity,
         }
         const foundElementIndex = searchForStartingIndexInStateCartItems(action.payload._id, state.cartItems)
         let foundCartItemInState = checkProductExistsInTheCart(action.payload._id, state.cartItems)
         if (foundElementIndex >= 0 && foundCartItemInState !== undefined) {
            //  Ha true akkor van ilyen elem és át kell írni a quantity-t
            // Megkeresni az ID alapján és annak a qty-jét módosítani
            singleCartItem.quantity = foundCartItemInState.quantity + action.payload.itemQuantity
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
      removeCartItemsAfterLogout: state => {
         state.cartItems = []
         state.totalPrice = 0
         state.totalQuantity = 0
      },
      increaseItemQty: (state, action: PayloadAction<string>) => {
         increaseItemQtyByOne(state, action.payload)
      },
      decreaseItemQty: (state, action: PayloadAction<string>) => {
         increaseItemQtyByOne(state, action.payload, false)
      },
      handleSnackbarOpen: (state, { payload }: PayloadAction<{ isOpen: boolean; text: string }>) => {
         state.isSnackbarOpen = payload
      },
   },
})

export const {
   addToCart,
   removeAllEntitesFromCart,
   increaseItemQty,
   decreaseItemQty,
   removeCartItemsAfterLogout,
   handleSnackbarOpen,
} = CartSlice.actions

export default CartSlice.reducer

export const sendCartItemToSaveInDB = (payload: IncomingTypes) => (dispatch: Dispatch, getState: any) => {
   dispatch(
      handleSnackbarOpen({
         isOpen: true,
         text: `A(z) ${payload.displayName} termék sikeresen hozááadva a kosárhoz!`,
      })
   )
   dispatch(addToCart(payload))
   const {
      auth: { userLoggedIn },
      cart: { cartItems },
   } = getState() as RootState
   if (userLoggedIn) {
      // Ez már a kosárba helyezés utáni állapot =
      const totalQuantityOfAProduct = checkProductExistsInTheCart(payload._id, cartItems)?.quantity
      axios
         .post('/cart/add-items', {
            _id: payload._id,
            quantity: totalQuantityOfAProduct,
            productType: payload.productType,
            displayImage: payload.displayImage,
            displayName: payload.displayName,
            price: payload.price,
         })
         .catch(error => console.log(error.message))
   }
}

export const fillDBWithCartItemsAfterLogin = () => async (dispatch: Dispatch, getState: any) => {
   const cartItems = getState().cart.cartItems
   try {
      await axios.post('/cart/fill-items', { cartItems })
   } catch (error) {
      console.log(error)
   }
}

export const removeItemsFromCart = (_id: string) => (dispatch: Dispatch, getState: any) => {
   if (getState().auth.userLoggedIn) {
      axios
         .delete('/cart/remove-item', {
            data: {
               _id,
            },
         })
         .then(result => {
            if (result && result.status === 200) dispatch(removeAllEntitesFromCart(_id))
            else console.log('hiba a kosár törlésnél')
         })
         .catch(error => {
            console.log(error.message)
         })
   } else dispatch(removeAllEntitesFromCart(_id))
}

export const fetchCartItemsFromDB = () => (dispatch: Dispatch) => {
   axios
      .get('/cart/fetch-items')
      .then(
         (
            cartItems: AxiosResponse<
               {
                  quantity: number
                  productType: string
                  displayImage: string
                  itemId: string
                  price: number
                  displayName: string
               }[]
            >
         ) => {
            if (cartItems.data.length > 0) {
               cartItems.data.forEach(items => {
                  dispatch(
                     addToCart({
                        _id: items.itemId,
                        productType: items.productType,
                        displayName: items.displayName,
                        displayImage: items.displayImage,
                        itemQuantity: items.quantity,
                        price: items.price,
                     })
                  )
               })
            }
         }
      )
      .catch(cartErrors => console.log(cartErrors))
}

export const increaseOrDecreaseByOne =
   (_id: string, isIncrease: boolean = true) =>
   (dispatch: Dispatch, getState: any) => {
      if (getState().auth.userLoggedIn) {
         axios
            .patch('/cart/quantity', {
               data: {
                  itemId: _id,
                  isIncrease,
               },
            })
            .then(result => {
               console.log(result)
               if (result.status === 200)
                  isIncrease ? dispatch(increaseItemQty(_id)) : dispatch(decreaseItemQty(_id))
            })
            .catch(error => console.log(error))
      } else isIncrease ? dispatch(increaseItemQty(_id)) : dispatch(decreaseItemQty(_id))
   }
