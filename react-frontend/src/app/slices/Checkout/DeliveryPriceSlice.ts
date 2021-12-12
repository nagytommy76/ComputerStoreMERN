import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { deliveryPrice: number; type: string } = {
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
      setDeliveryType: (state, { payload }: PayloadAction<string>) => {
         state.type = payload
      }
   }
})

export const { setDeliveryPrice, setDeliveryType } = DeliveryPriceSlice.actions

export default DeliveryPriceSlice.reducer
