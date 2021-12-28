import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AlertErrorTypes } from '../../../page/CheckoutPage/Steps/Hooks/Error'
import { RootState } from '../../store'

type Props = {
   isPaymentModalOpen: boolean
   selectedPaymentMethod: string
   isCashPaySuccess: boolean
   isCardPaySuccess: boolean
}

const initialState: Props = {
   isPaymentModalOpen: false,
   selectedPaymentMethod: 'cashOnDelivery',
   isCardPaySuccess: false,
   isCashPaySuccess: false
}

const PaymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {
      setIsCashPaySuccess: ({ isCashPaySuccess }, { payload }: PayloadAction<boolean>) => {
         isCashPaySuccess = payload
      },
      setIsCardPaySuccess: ({ isCardPaySuccess }, { payload }: PayloadAction<boolean>) => {
         isCardPaySuccess = payload
      },
      setPaymentModalOpen: (state, { payload }: PayloadAction<boolean>) => {
         state.isPaymentModalOpen = payload
      },
      setSelectedPaymentMethod: (state, { payload }: PayloadAction<string>) => {
         state.selectedPaymentMethod = payload
      },
      setDefaultPaymentOptions: (state) => {
         state.selectedPaymentMethod = 'cashOnDelivery'
         state.isPaymentModalOpen = false
      }
   }
})

export const {
   setPaymentModalOpen,
   setSelectedPaymentMethod,
   setDefaultPaymentOptions,
   setIsCashPaySuccess,
   setIsCardPaySuccess
} = PaymentSlice.actions

export default PaymentSlice.reducer

export const handleMakeOrderWithCash =
   (
      setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
      setHasError: React.Dispatch<React.SetStateAction<AlertErrorTypes>>,
      setStartCounter: React.Dispatch<React.SetStateAction<boolean>>
   ) =>
   async (dispatch: Dispatch, getState: any) => {
      const {
         payment: { selectedPaymentMethod },
         cart: { totalPrice },
         deliveryPrice: { type, deliveryPrice }
      } = getState() as RootState

      try {
         setIsLoading(true)
         const response = await axios.post('/order/handle-order-cash', {
            amount: totalPrice,
            paymentMethod: selectedPaymentMethod,
            deliveryType: type,
            deliveryPrice
         })
         if (response.status === 200) {
            setIsLoading(false)
            setIsCashPaySuccess(true)
            setStartCounter(true)
            setHasError({
               errorMsg: 'A Termékek sikeresen megrendelésre kerültek! Hamarosan átirányítunk a főoldalra!',
               isError: true,
               serverity: 'success'
            })
         }
      } catch (error) {
         if (axios.isAxiosError(error)) {
            setHasError({
               errorMsg: error.message,
               isError: true,
               serverity: 'error'
            })
         }
      }
   }
