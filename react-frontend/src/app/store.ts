import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authSlice from './slices/AuthSlice'
import ThemeSlice from './slices/ThemeSlice'
import CartSlice from './slices/CartSlice'
import MobileSlice from './slices/MobileSlice'
import PaginateSlice from './slices/PaginateSlice'
import ProductSlice from './slices/ProductsSlice'
import FilterDataSlice from './slices/FilterDataSlice'
import ValidationErrorSlice from './slices/ValidationErrorSlice'
import UserDetailsSlice from './slices/Checkout/UserDetailsSlice'

export const store = configureStore({
   reducer: {
      auth: persistReducer({ key: 'AuthUser', storage }, authSlice),
      theme: persistReducer({ key: 'Theme', storage }, ThemeSlice),
      cart: persistReducer({ key: 'Cart', storage }, CartSlice),
      products: persistReducer({ key: 'Products', storage }, ProductSlice),
      filter: persistReducer({ key: 'FilterData', storage }, FilterDataSlice),
      paginate: persistReducer({ key: 'Paginate', storage }, PaginateSlice),
      userDetails: persistReducer({ key: 'userDetails', storage }, UserDetailsSlice),
      validationError: ValidationErrorSlice,
      mobile: MobileSlice
   },
   middleware: getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
   })
})

export const presistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
