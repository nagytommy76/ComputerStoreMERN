import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   isPaymentModalOpen: false,
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
      }
   }
})

export const { setPaymentModalOpen, setIsPaymentSuccess } = PaymentSlice.actions

export default PaymentSlice.reducer
