import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   isFirstVisit: true,
}

const FirstVisitSlice = createSlice({
   name: 'firstVisit',
   initialState,
   reducers: {
      setIsFirstVisit: (state, action: PayloadAction<boolean>) => {
         state.isFirstVisit = action.payload
      },
   },
})

export const { setIsFirstVisit } = FirstVisitSlice.actions

export default FirstVisitSlice.reducer
