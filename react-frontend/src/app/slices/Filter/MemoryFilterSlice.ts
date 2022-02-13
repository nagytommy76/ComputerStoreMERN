import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Props = {
   memoryType: 'all',
   frequencyRange: [400, 14000],
   selectedFrequencyRange: [400, 14000],

   allCapacities: [2, 64],
   selectedCapacity: [2, 64],

   allLatencies: [8, 60],
   selectedLatency: [8, 60],
}

const MemoryFilterData = createSlice({
   name: 'memoryFilterData',
   initialState,
   reducers: {
      setMemoryType: (state, { payload }: PayloadAction<string>) => {
         state.memoryType = payload
      },
      setFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.frequencyRange = payload
      },
      setSelectedFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedFrequencyRange = payload
      },
      setAllCapacities: (state, { payload }: PayloadAction<number[]>) => {
         state.allCapacities = payload
      },
      setSelectedCapacity: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedCapacity = payload
      },
      setAllLatencies: (state, { payload }: PayloadAction<number[]>) => {
         state.allLatencies = payload
      },
      setSelectedLatency: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedLatency = payload
      },
   },
})

export const {
   setFrequencyRange,
   setMemoryType,
   setSelectedFrequencyRange,
   setSelectedCapacity,
   setAllCapacities,
   setAllLatencies,
   setSelectedLatency,
} = MemoryFilterData.actions

export default MemoryFilterData.reducer

type Props = {
   memoryType: string
   frequencyRange: number[]
   selectedFrequencyRange: number[]

   allCapacities: number[]
   selectedCapacity: number[]

   allLatencies: number[]
   selectedLatency: number[]
}
