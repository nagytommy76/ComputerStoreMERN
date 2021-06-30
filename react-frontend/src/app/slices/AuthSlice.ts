import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginType = {
   userLoggedIn: boolean
   userName: string
   accessToken: string | null
}

const initialState: LoginType = {
   userLoggedIn: false,
   userName: '',
   accessToken: null
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
      },
      setAccessToken: (state, action: PayloadAction<string>) => {
         state.accessToken = action.payload
      },
      logoutUser: (state) => {
         state.accessToken = null
         state.userLoggedIn = false
         state.userName = ''
      }
   }
})

export const { setAccessToken, setUserLoggedIn, setUserName, logoutUser } = AuthSlice.actions
export default AuthSlice.reducer
