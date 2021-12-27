import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Props = {
   isPaymentModalOpen: boolean
   selectedPaymentMethod: string
}

const initialState: Props = {
   isPaymentModalOpen: false,
   selectedPaymentMethod: 'cashOnDelivery'
}

const PaymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {
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

export const { setPaymentModalOpen, setSelectedPaymentMethod, setDefaultPaymentOptions } = PaymentSlice.actions

export default PaymentSlice.reducer
