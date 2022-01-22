import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useLocationState = (setValidationError: React.Dispatch<React.SetStateAction<any>>) => {
   const location = useLocation()

   useEffect(() => {
      if (location.state !== null) {
         const { isSuccess, message } = location.state as { isSuccess: boolean; message: string }
         setValidationError({ isSuccess, message })
         setTimeout(() => setValidationError({ isSuccess: false, message: '' }), 8500)
      }
   }, [location.state, setValidationError])
}

export default useLocationState
