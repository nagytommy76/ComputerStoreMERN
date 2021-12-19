import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Props = {
   deliveryPrice: number
   type: 'inStore' | 'toHomeGLS' | 'foxPost'
}

const initialState: Props = {
   deliveryPrice: 0,
   type: 'inStore'
}

const DeliveryPriceSlice = createSlice({
   name: 'deliveryPrice',
   initialState,
   reducers: {
      setDeliveryPrice: (state, { payload }: PayloadAction<number>) => {
         state.deliveryPrice = payload
      },
      setDeliveryType: (state, { payload }: PayloadAction<'inStore' | 'toHomeGLS' | 'foxPost'>) => {
         state.type = payload
      }
   }
})

export const { setDeliveryPrice, setDeliveryType } = DeliveryPriceSlice.actions

export default DeliveryPriceSlice.reducer
