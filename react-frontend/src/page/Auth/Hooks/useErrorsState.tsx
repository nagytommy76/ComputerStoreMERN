import React, { useState } from 'react'

const useErrorsState = () => {
   const [errors, setErrors] = useState<ErrorType>({
      hasError: false,
      messageTitle: '',
      message: '',
      errorType: 'jwt expired',
   })
   return { errors, setErrors }
}

export type ErrorType = {
   hasError: boolean
   messageTitle: string
   message?: string
   errorType?: 'jwt expired' | 'invalid signature'
}

export default useErrorsState
