import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Props = {
   isPaymentModalOpen: boolean
   selectedPaymentMethod: string
   isPaymentSuccess: boolean
   lastPaymentId: string | null
}

const initialState: Props = {
   isPaymentModalOpen: false,
   selectedPaymentMethod: 'cashOnDelivery',
   isPaymentSuccess: false,
   lastPaymentId: null
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
      },
      setLastPaymentId: (state, { payload }: PayloadAction<string>) => {
         state.lastPaymentId = payload
      },
      setDefaultPaymentOptions: (state) => {
         state.isPaymentSuccess = false
         state.selectedPaymentMethod = ''
      }
   }
})

export const { setPaymentModalOpen, setIsPaymentSuccess, setSelectedPaymentMethod, setDefaultPaymentOptions, setLastPaymentId } =
   PaymentSlice.actions

export default PaymentSlice.reducer
