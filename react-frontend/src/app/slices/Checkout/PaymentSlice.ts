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
   isCashPaySuccess: false,
}

const PaymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {
      setIsCashPaySuccess: (state, { payload }: PayloadAction<boolean>) => {
         state.isCashPaySuccess = payload
      },
      setIsCardPaySuccess: (state, { payload }: PayloadAction<boolean>) => {
         state.isCardPaySuccess = payload
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
         state.isCashPaySuccess = false
         state.isCardPaySuccess = false
      },
   },
})

export const { setPaymentModalOpen, setSelectedPaymentMethod, setDefaultPaymentOptions, setIsCashPaySuccess, setIsCardPaySuccess } =
   PaymentSlice.actions

export default PaymentSlice.reducer

export const handleMakeOrderWithCardOrCash =
   (
      setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
      setHasError: React.Dispatch<React.SetStateAction<AlertErrorTypes>>,
      setStartCounter: React.Dispatch<React.SetStateAction<boolean>>,
      paymentMethodId: string | null
   ) =>
   async (dispatch: Dispatch, getState: any) => {
      const {
         payment: { selectedPaymentMethod },
         cart: { totalPrice },
         deliveryPrice: { type, deliveryPrice },
      } = getState() as RootState
      setIsLoading(true)
      try {
         const response = await axios.post(`/order/handle-order`, {
            // A Stripe csak 999.999.99 Ft-ig engedi a fizetést, ezért nem szorzom 100-zal.....
            amount: totalPrice,
            paymentMethod: selectedPaymentMethod,
            deliveryType: type,
            deliveryPrice,
            id: paymentMethodId,
         })

         if (response.status === 200) {
            setIsLoading(false)
            paymentMethodId === 'cash' ? dispatch(setIsCashPaySuccess(true)) : dispatch(setIsCardPaySuccess(true))
            setStartCounter(true)
            setHasError({
               errorMsg: 'A Termékek sikeresen megrendelésre kerültek! Hamarosan átirányítunk a főoldalra!',
               isError: true,
               serverity: 'success',
            })
         }
      } catch (error) {
         if (axios.isAxiosError(error)) {
            setHasError({
               errorMsg: error.message,
               isError: true,
               serverity: 'error',
            })
         }
      }
   }
