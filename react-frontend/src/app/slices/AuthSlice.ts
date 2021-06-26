import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginType = {
   userLoggedIn: boolean
   userName: string
}

const initialState: LoginType = {
   userLoggedIn: false,
   userName: ''
}

export const AuthSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserName: (state, action: PayloadAction<string>) => {
         state.userName = action.payload
      },
      setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
         state.userLoggedIn = action.payload
      }
   }
})

export default AuthSlice.reducer
