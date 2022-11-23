import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
   persistReducer,
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AuthSlice from './slices/AuthSlice'
import ThemeSlice from './slices/ThemeSlice'
import CartSlice from './slices/CartSlice'
import MobileSlice from './slices/MobileSlice'
import PaginateSlice from './slices/PaginateSlice'
import ProductSlice from './slices/ProductsSlice'
import ProductCompareSlice from './slices/ProductCompareSlice'
import ValidationErrorSlice from './slices/ValidationErrorSlice'
import UserDetailsSlice from './slices/Checkout/UserDetailsSlice'
import DeliveryPriceSlice from './slices/Checkout/DeliveryPriceSlice'
import PaymentSlice from './slices/Checkout/PaymentSlice'
import StepsSlice from './slices/Checkout/StepsSlice'

import FilterDataSlice from './slices/Filter/BaseFilterDataSlice'
import MemoryFilterSlice from './slices/Filter/MemoryFilterSlice'
import CpuFilterSlice from './slices/Filter/CpuFilterSlice'
import VgaFilterSlice from './slices/Filter/VgaFilterSlice'
import HddFilterSlice from './slices/Filter/HddFilterSlice'
import SsdFilterSlice from './slices/Filter/SsdFilterSlice'
import TokenSlice from './slices/TokenSlice'

export const store = configureStore({
   reducer: {
      auth: persistReducer({ key: 'AuthUser', storage }, AuthSlice),
      theme: persistReducer({ key: 'Theme', storage }, ThemeSlice),
      cart: persistReducer({ key: 'Cart', storage }, CartSlice),
      paginate: persistReducer({ key: 'Paginate', storage }, PaginateSlice),
      userDetails: persistReducer({ key: 'userDetails', storage }, UserDetailsSlice),
      deliveryPrice: persistReducer({ key: 'deliveryPrice', storage }, DeliveryPriceSlice),
      payment: persistReducer({ key: 'payment', storage }, PaymentSlice),
      // productCompare: persistReducer({ key: 'productCompare', storage }, ProductCompareSlice),
      productCompare: ProductCompareSlice,
      products: ProductSlice,
      token: TokenSlice,
      filter: FilterDataSlice,
      memoryFilter: MemoryFilterSlice,
      cpuFilter: CpuFilterSlice,
      vgaFilter: VgaFilterSlice,
      hddFilter: HddFilterSlice,
      ssdFilter: SsdFilterSlice,
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
