import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   screenWidth: 0,
   isMobile: false
}

export const MobileSlice = createSlice({
   name: 'mobile',
   initialState,
   reducers: {}
})

export default MobileSlice.reducer
