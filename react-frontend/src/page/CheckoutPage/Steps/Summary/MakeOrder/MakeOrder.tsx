import React, { useState } from 'react'
import useError from '../../Hooks/Error'
import useCounter from '../../Hooks/Counter'

import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { handleMakeOrderWithCardOrCash, setPaymentModalOpen } from '../../../../../app/slices/Checkout/PaymentSlice'

import LoadingButton from '@mui/lab/LoadingButton'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const MakeOrder: React.FC = () => {
   const dispatch = useAppDispatch()

   const { hasError, setHasError } = useError()
   const { counter, setStartCounter } = useCounter()
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { isCashPaySuccess, isCardPaySuccess } = useAppSelector((state) => state.payment)
   const selectedPaymentMethod = useAppSelector((state) => state.payment.selectedPaymentMethod)

   const handleMakeOrderWithPayment = async () => {
      if (selectedPaymentMethod === 'stripeCard') {
         dispatch(setPaymentModalOpen(true))
      } else await dispatch(handleMakeOrderWithCardOrCash(setIsLoading, setHasError, setStartCounter, null, 'cash'))
   }

   return (
      <>
         <LoadingButton
            disabled={isCashPaySuccess || isCardPaySuccess}
            loadingPosition='end'
            loading={isLoading}
            variant='contained'
            size='large'
            endIcon={<DoubleArrowIcon />}
            onClick={handleMakeOrderWithPayment}>
            Rendelés Leadása
         </LoadingButton>
         <Fade in={hasError.isError}>
            <Alert severity={hasError.serverity}>
               {hasError.errorMsg} {counter} mp-en belül!
            </Alert>
         </Fade>
      </>
   )
}

export default MakeOrder
