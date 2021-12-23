import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { setDefaultPaymentOptions } from '../../../../../app/slices/Checkout/PaymentSlice'
import { removeCartItemsAfterLogout as resetCartItems } from '../../../../../app/slices/CartSlice'

import LoadingButton from '@mui/lab/LoadingButton'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

const MakeOrder: React.FC<{ setAlertOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setAlertOpen }) => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const selectedPaymentMethod = useAppSelector((state) => state.payment.selectedPaymentMethod)

   const [isOrderLoading, setIsOrderLoading] = useState<boolean>(false)

   const handleNextButton = async () => {
      setIsOrderLoading(true)
      try {
         const orderResult = await axios.post('/order/handle-order', {
            paymentMethod: selectedPaymentMethod
         })
         if (orderResult.data.orderSuccess && orderResult.status === 200) {
            setIsOrderLoading(false)
            setAlertOpen(true)
            setTimeout(() => {
               dispatch(setDefaultPaymentOptions())
               dispatch(resetCartItems())
               setAlertOpen(false)
               navigate('/')
            }, 7000)
         }
      } catch (error) {
         console.log(error)
      }
      setIsOrderLoading(false)
   }

   return (
      <LoadingButton
         loading={isOrderLoading}
         loadingPosition='end'
         variant='contained'
         size='large'
         endIcon={<DoubleArrowIcon />}
         onClick={handleNextButton}>
         Rendelés Leadása
      </LoadingButton>
   )
}

export default MakeOrder
