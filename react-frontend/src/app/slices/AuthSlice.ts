import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginType = {
   isAdmin: boolean
   userLoggedIn: boolean
   userName: string
   accessToken: string | null
   refreshToken: string | null
}

const initialState: LoginType = {
   isAdmin: false,
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
      setAdmin: (state, action: PayloadAction<boolean>) => {
         state.isAdmin = action.payload
      },
      logoutUser: (state) => {
         state.isAdmin = false
         state.accessToken = null
         state.refreshToken = null
         state.userLoggedIn = false
         state.userName = ''
      }
   }
})

export const { setAccessToken, setUserLoggedIn, setUserName, logoutUser, setRefreshToken, setAdmin } = AuthSlice.actions
export default AuthSlice.reducer
