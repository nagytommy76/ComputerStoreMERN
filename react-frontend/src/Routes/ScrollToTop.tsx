import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTopWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const { pathname } = useLocation()
   useLayoutEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }, [pathname])
   return <>{children}</>
}

export default ScrollToTopWrapper
