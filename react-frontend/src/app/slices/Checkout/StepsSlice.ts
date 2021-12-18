import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   isNextBtnDisabled: false
}

const StepsSlice = createSlice({
   name: 'steps',
   initialState,
   reducers: {
      setIsNextBtnDisabled: (state, { payload }: PayloadAction<boolean>) => {
         state.isNextBtnDisabled = payload
      }
   }
})

export const { setIsNextBtnDisabled } = StepsSlice.actions

export default StepsSlice.reducer
