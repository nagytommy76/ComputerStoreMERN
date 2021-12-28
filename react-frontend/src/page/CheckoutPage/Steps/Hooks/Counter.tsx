import { useState, useEffect } from 'react'

const useCounter = () => {
   const [counter, setCounter] = useState(5)
   const [startCounter, setStartCounter] = useState<boolean>(false)

   useEffect(() => {
      if (startCounter) {
         counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
      }
      return () => {
         if (counter === 0) setStartCounter(false)
      }
   }, [counter, startCounter])

   return { counter, setStartCounter }
}

export default useCounter
