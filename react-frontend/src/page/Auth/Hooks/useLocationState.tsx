import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useLocationState = (setValidationError: React.Dispatch<React.SetStateAction<{ isSuccess: boolean; message: string }>>) => {
   const location = useLocation()

   useEffect(() => {
      if (location.state !== null) {
         const { isSuccess, message } = location.state as { isSuccess: boolean; message: string }
         setValidationError({ isSuccess, message })
         setTimeout(
            () =>
               setValidationError((prevState) => {
                  return { ...prevState, isSuccess: false }
               }),
            8500
         )
      }
   }, [location.state, setValidationError])
}

export default useLocationState
