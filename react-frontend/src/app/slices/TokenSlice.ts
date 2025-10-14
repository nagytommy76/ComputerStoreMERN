import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { accessToken: null | string } = {
   accessToken: null,
}

const TokenSlice = createSlice({
   name: 'token',
   initialState,
   reducers: {
      setAccessToken: (state, action: PayloadAction<string>) => {
         state.accessToken = action.payload
      },
   },
})

export const { setAccessToken } = TokenSlice.actions
export default TokenSlice.reducer
