import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginType = {
   userId: string
   isAdmin: boolean
   userLoggedIn: boolean
   userName: string
}

const initialState: LoginType = {
   userId: '',
   isAdmin: false,
   userLoggedIn: false,
   userName: '',
}

export const AuthSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserId: (state, action: PayloadAction<string>) => {
         state.userId = action.payload
      },
      setUserName: (state, action: PayloadAction<string>) => {
         state.userName = action.payload
      },
      setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
         state.userLoggedIn = action.payload
      },
      setAdmin: (state, action: PayloadAction<boolean>) => {
         state.isAdmin = action.payload
      },
      logoutUser: state => {
         state.userId = ''
         state.isAdmin = false
         state.userLoggedIn = false
         state.userName = ''
      },
   },
})

export const { setUserLoggedIn, setUserId, setUserName, logoutUser, setAdmin } = AuthSlice.actions
export default AuthSlice.reducer
