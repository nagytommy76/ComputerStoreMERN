import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../app/hooks'

import { setDefaultPaymentOptions } from '../../../../app/slices/Checkout/PaymentSlice'
import { removeCartItemsAfterLogout as resetCartItems } from '../../../../app/slices/CartSlice'
import { setToDefaultStepsAfterOrder } from '../../../../app/slices/Checkout/StepsSlice'

const useCounter = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const [counter, setCounter] = useState(10)
   const [startCounter, setStartCounter] = useState<boolean>(false)

   useEffect(() => {
      if (startCounter) {
         counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
      }
      return () => {
         if (counter === 1) {
            dispatch(setDefaultPaymentOptions())
            dispatch(resetCartItems())
            dispatch(setToDefaultStepsAfterOrder())
            navigate('/')
            setStartCounter(false)
         }
      }
   }, [counter, startCounter, dispatch, navigate])

   return { counter, setStartCounter }
}

export default useCounter
