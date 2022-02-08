import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authSlice from './slices/AuthSlice'
import ThemeSlice from './slices/ThemeSlice'
import CartSlice from './slices/CartSlice'
import MobileSlice from './slices/MobileSlice'
import PaginateSlice from './slices/PaginateSlice'
import ProductSlice from './slices/ProductsSlice'
import ValidationErrorSlice from './slices/ValidationErrorSlice'
import UserDetailsSlice from './slices/Checkout/UserDetailsSlice'
import DeliveryPriceSlice from './slices/Checkout/DeliveryPriceSlice'
import PaymentSlice from './slices/Checkout/PaymentSlice'
import StepsSlice from './slices/Checkout/StepsSlice'

import FilterDataSlice from './slices/Filter/BaseFilterDataSlice'
import MemoryFilterSlice from './slices/Filter/MemoryFilterSlice'

export const store = configureStore({
   reducer: {
      auth: persistReducer({ key: 'AuthUser', storage }, authSlice),
      theme: persistReducer({ key: 'Theme', storage }, ThemeSlice),
      cart: persistReducer({ key: 'Cart', storage }, CartSlice),
      products: persistReducer({ key: 'Products', storage }, ProductSlice),
      paginate: persistReducer({ key: 'Paginate', storage }, PaginateSlice),
      userDetails: persistReducer({ key: 'userDetails', storage }, UserDetailsSlice),
      deliveryPrice: persistReducer({ key: 'deliveryPrice', storage }, DeliveryPriceSlice),
      payment: persistReducer({ key: 'payment', storage }, PaymentSlice),
      filter: persistReducer({ key: 'FilterData', storage }, FilterDataSlice),
      memoryFilter: persistReducer({ key: 'memoryFilter', storage }, MemoryFilterSlice),
      steps: StepsSlice,
      validationError: ValidationErrorSlice,
      mobile: MobileSlice,
   },
   middleware: getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
})

export const presistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
