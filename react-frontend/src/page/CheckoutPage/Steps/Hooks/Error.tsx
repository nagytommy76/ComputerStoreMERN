import { useState } from 'react'

const useError = () => {
   const [hasError, setHasError] = useState<{
      isError: boolean
      errorMsg: string | undefined
      serverity: 'error' | 'success' | 'info' | 'warning'
   }>({ isError: false, errorMsg: '', serverity: 'success' })

   return { hasError, setHasError }
}

export default useError
