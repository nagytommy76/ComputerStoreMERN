import React, { useEffect, useCallback } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setIsMobileSize } from '../app/slices/MobileSlice'

const useWindowSize = (setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
   const dispatch = useAppDispatch()
   const handleWindowSizeChange = useCallback(() => {
      if (window.innerWidth <= 950) {
         dispatch(setIsMobileSize(true))
      } else {
         setIsNavbarOpen(true)
         dispatch(setIsMobileSize(false))
      }
   }, [dispatch, setIsNavbarOpen])
   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      window.addEventListener('load', handleWindowSizeChange)
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange)
         window.removeEventListener('load', handleWindowSizeChange)
      }
   }, [handleWindowSizeChange])
}

export default useWindowSize
