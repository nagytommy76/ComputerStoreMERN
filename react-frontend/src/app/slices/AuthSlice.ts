import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginType = {
   userLoggedIn: boolean
   userName: string
   accessToken: string | null
   refreshToken: string | null
}

const initialState: LoginType = {
   userLoggedIn: false,
   userName: '',
   accessToken: null,
   refreshToken: null
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
      setRefreshToken: (state, action: PayloadAction<string>) => {
         state.refreshToken = action.payload
      },
      logoutUser: (state) => {
         state.accessToken = null
         state.refreshToken = null
         state.userLoggedIn = false
         state.userName = ''
      }
   }
})

export const { setAccessToken, setUserLoggedIn, setUserName, logoutUser } = AuthSlice.actions
export default AuthSlice.reducer
