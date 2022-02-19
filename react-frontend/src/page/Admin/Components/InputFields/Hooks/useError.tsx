import { useEffect, useState } from 'react'
import { findOrFailAndReturnErrorMsg } from '../../../../Helpers/SetErrorMsg'
import { ValidationError } from '../../../AdminTypes'

const useError = (validationErrors: ValidationError[], validationErrorLocation: string) => {
   const [error, setError] = useState({ hasError: false, message: '' })
   useEffect(() => {
      if (validationErrors.length > 0) {
         const foundError = findOrFailAndReturnErrorMsg(validationErrors, validationErrorLocation)
         foundError && setError(foundError)
      }
   }, [validationErrors, validationErrorLocation])
   return error
}

export default useError
