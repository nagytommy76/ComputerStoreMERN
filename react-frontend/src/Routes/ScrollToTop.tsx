import React, { ReactElement, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC<{ children: ReactElement }> = ({ children }) => {
   const location = useLocation()
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [location])

   return children
}

export default ScrollToTop
