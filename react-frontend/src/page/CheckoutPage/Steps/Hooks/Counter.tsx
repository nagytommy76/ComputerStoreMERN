import { useState, useEffect } from 'react'

const useCounter = () => {
   const [counter, setCounter] = useState(7)
   const [startCounter, setStartCounter] = useState<boolean>(false)

   useEffect(() => {
      if (startCounter) {
         counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
      }
   }, [counter, startCounter])

   return { counter, setStartCounter }
}

export default useCounter
