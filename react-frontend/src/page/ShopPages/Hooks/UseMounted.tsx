import { useEffect, useState } from 'react'

const useMounted = () => {
   const [isMounted, setIsMounted] = useState<boolean>(false)
   useEffect(() => {
      setIsMounted(true)
   }, [])
   return isMounted
}

export default useMounted
