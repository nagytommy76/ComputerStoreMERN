import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   isPaymentModalOpen: false,
   selectedPaymentMethod: 'cashOnDelivery',
   isPaymentSuccess: false
}

const PaymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {
      setPaymentModalOpen: (state, { payload }: PayloadAction<boolean>) => {
         state.isPaymentModalOpen = payload
      },
      setIsPaymentSuccess: (state, { payload }: PayloadAction<boolean>) => {
         state.isPaymentSuccess = payload
      },
      setSelectedPaymentMethod: (state, { payload }: PayloadAction<string>) => {
         state.selectedPaymentMethod = payload
      }
   }
})

export const { setPaymentModalOpen, setIsPaymentSuccess, setSelectedPaymentMethod } = PaymentSlice.actions

export default PaymentSlice.reducer
