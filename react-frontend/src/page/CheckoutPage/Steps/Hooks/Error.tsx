import { useState } from 'react'

const useError = () => {
   const [hasError, setHasError] = useState<AlertErrorTypes>({ isError: false, errorMsg: '', serverity: 'success' })

   return { hasError, setHasError }
}

export default useError

export type AlertErrorTypes = {
   isError: boolean
   errorMsg: string | undefined
   serverity: 'error' | 'success' | 'info' | 'warning'
}
