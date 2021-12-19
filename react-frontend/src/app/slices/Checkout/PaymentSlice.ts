import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Props = {
   isPaymentModalOpen: boolean
   selectedPaymentMethod: string
   isPaymentSuccess: boolean
   payedAt: number
}

const initialState: Props = {
   isPaymentModalOpen: false,
   selectedPaymentMethod: 'cashOnDelivery',
   isPaymentSuccess: false,
   payedAt: 0
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
