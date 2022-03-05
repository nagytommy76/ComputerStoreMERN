import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StateType = {
   capacityRange: [128, 6000],
   selectedCapacityRange: [128, 6000],

   cacheRange: [32, 256],
   selectedCacheRange: [32, 256],

   rpmRange: [5400, 7200],
   selectedRpmRange: [5400, 7200],
}

const HddFilterSlice = createSlice({
   name: 'HddFilterSlice',
   initialState,
   reducers: {
      setCapacityRange: (state, { payload }: PayloadAction<number[]>) => {
         state.capacityRange = payload
      },
      setSelectedCapacityRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedCapacityRange = payload
      },
      setCacheRange: (state, { payload }: PayloadAction<number[]>) => {
         state.cacheRange = payload
      },
      setSelectedCacheRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedCacheRange = payload
      },
      setRpmRange: (state, { payload }: PayloadAction<number[]>) => {
         state.rpmRange = payload
      },
      setSelectedRpmRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedRpmRange = payload
      },
   },
})

export const {
   setCacheRange,
   setCapacityRange,
   setRpmRange,
   setSelectedCacheRange,
   setSelectedCapacityRange,
   setSelectedRpmRange,
} = HddFilterSlice.actions

export default HddFilterSlice.reducer

type StateType = {
   capacityRange: number[]
   selectedCapacityRange: number[]

   cacheRange: number[]
   selectedCacheRange: number[]

   rpmRange: number[]
   selectedRpmRange: number[]
}
