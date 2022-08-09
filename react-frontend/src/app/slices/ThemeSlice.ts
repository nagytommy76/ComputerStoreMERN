import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeType = {
   isDarkTheme: boolean
   isPreferredThemeSetByUser: boolean
}

const initialState: ThemeType = {
   isDarkTheme: false,
   isPreferredThemeSetByUser: false,
}

export const ThemeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      setTheme: (state, action: PayloadAction<boolean>) => {
         state.isDarkTheme = action.payload
      },
      setIsPreferredThemeSetByUser: (state, action: PayloadAction<boolean>) => {
         state.isPreferredThemeSetByUser = action.payload
      },
   },
})

export const { setTheme, setIsPreferredThemeSetByUser } = ThemeSlice.actions
export default ThemeSlice.reducer
