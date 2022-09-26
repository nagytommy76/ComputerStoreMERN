import React, { useEffect, useCallback } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setIsMobileSize } from '../app/slices/MobileSlice'
import { Action, NavbarActionTypes } from '../page/Navbar/Reducer/NavbarReducer'

const useWindowSize = (setIsNavbarOpenDispatch: React.Dispatch<Action>) => {
   const dispatch = useAppDispatch()

   const handleWindowSizeChange = useCallback(() => {
      if (window.innerWidth <= 950) {
         dispatch(setIsMobileSize(true))
      } else {
         setIsNavbarOpenDispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: true })
         dispatch(setIsMobileSize(false))
      }
   }, [dispatch, setIsNavbarOpenDispatch])

   useEffect(() => {
      handleWindowSizeChange()
      window.addEventListener('resize', handleWindowSizeChange)
      window.addEventListener('load', handleWindowSizeChange)
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
         window.removeEventListener('load', handleWindowSizeChange)
      }
   }, [handleWindowSizeChange])
}

export default useWindowSize
