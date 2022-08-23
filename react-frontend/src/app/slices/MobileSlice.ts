import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   isMobile: false,
}

export const MobileSlice = createSlice({
   name: 'mobile',
   initialState,
   reducers: {
      setIsMobileSize: (state, action: PayloadAction<boolean>) => {
         state.isMobile = action.payload
      },
   },
})

export const { setIsMobileSize } = MobileSlice.actions

export default MobileSlice.reducer
