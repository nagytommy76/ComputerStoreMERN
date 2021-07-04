import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeType = {
   isDarkTheme: boolean
}

const initialState: ThemeType = {
   isDarkTheme: false
}

export const ThemeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      setTheme: (state, action: PayloadAction<boolean>) => {
         state.isDarkTheme = action.payload
      }
   }
})

export const { setTheme } = ThemeSlice.actions
export default ThemeSlice.reducer
