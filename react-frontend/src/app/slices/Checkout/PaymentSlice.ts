import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
   isPaymentModalOpen: false
}

const PaymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {
      setPaymentModalOpen: (state, { payload }: PayloadAction<boolean>) => {
         state.isPaymentModalOpen = payload
      }
   }
})

export const { setPaymentModalOpen } = PaymentSlice.actions

export default PaymentSlice.reducer
