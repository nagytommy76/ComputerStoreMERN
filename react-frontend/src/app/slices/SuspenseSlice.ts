import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   isFilterLoading: false,
   isProductLoading: false
}

export const SuspenseSlice = createSlice({
   name: 'suspense',
   initialState,
   reducers: {
      setIsFilterLoading: (state, action: PayloadAction<boolean>) => {
         state.isFilterLoading = action.payload
      },
      setIsProductLoading: (state, action: PayloadAction<boolean>) => {
         state.isProductLoading = action.payload
      }
   }
})

export const { setIsFilterLoading, setIsProductLoading } = SuspenseSlice.actions

export default SuspenseSlice.reducer
