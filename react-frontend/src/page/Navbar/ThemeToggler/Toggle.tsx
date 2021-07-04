import React from 'react'
import { StyledToggle } from './ToggleContainer'
import { setTheme } from '../../../app/slices/ThemeSlice'

import { ReactComponent as Moon } from './icons/moon.svg'
import { ReactComponent as Sun } from './icons/sun.svg'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

const Toggle: React.FC = () => {
   const dispatch = useAppDispatch()
   const currentTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const toggleTheme = () => {
      currentTheme ? dispatch(setTheme(false)) : dispatch(setTheme(true))
   }

   return (
      <StyledToggle data-testid='toggler' lightTheme={currentTheme} onClick={toggleTheme}>
         <Sun />
         <Moon />
      </StyledToggle>
   )
}

export default Toggle
