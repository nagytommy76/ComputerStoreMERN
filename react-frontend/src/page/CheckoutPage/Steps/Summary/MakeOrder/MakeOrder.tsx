import React, { useState } from 'react'
import useError from '../../Hooks/Error'
import useCounter from '../../Hooks/Counter'

import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { handleMakeOrderWithCash } from '../../../../../app/slices/Checkout/PaymentSlice'

import LoadingButton from '@mui/lab/LoadingButton'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const MakeOrder: React.FC = () => {
   const dispatch = useAppDispatch()

   const { hasError, setHasError } = useError()
   const { counter, setStartCounter } = useCounter()
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const isCashPaySuccess = useAppSelector((state) => state.payment.isCashPaySuccess)

   const handleMakeOrderWithPayment = async () => {
      await dispatch(handleMakeOrderWithCash(setIsLoading, setHasError, setStartCounter))
      console.log(isCashPaySuccess)
   }

   return (
      <>
         <LoadingButton
            disabled={isCashPaySuccess}
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
