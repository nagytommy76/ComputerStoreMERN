import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Props = {
   allMemoryTypes: [],
   memoryType: 'all',
   frequencyRange: [400, 14000],
   selectedFrequencyRange: [400, 14000],
   allCapacities: [2, 4, 8, 16, 32, 64],
   selectedCapacity: 8,
}
/**
 * Szűrés
 * - DDR4 pl
 * - MHz range
 * - Kapacitás pl. 16gb, 8gb
 */
const MemoryFilterData = createSlice({
   name: 'filterData',
   initialState,
   reducers: {
      setAllMemoryTypes: (state, { payload }: PayloadAction<string[]>) => {
         state.allMemoryTypes = payload
      },
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
      setSelectedCapacity: (state, { payload }: PayloadAction<number>) => {
         state.selectedCapacity = payload
      },
   },
})

export const {
   setFrequencyRange,
   setMemoryType,
   setAllMemoryTypes,
   setSelectedFrequencyRange,
   setAllCapacities,
   setSelectedCapacity,
} = MemoryFilterData.actions

export default MemoryFilterData.reducer

type Props = {
   allMemoryTypes: string[]
   memoryType: string
   frequencyRange: number[]
   selectedFrequencyRange: number[]
   allCapacities: number[]
   selectedCapacity: number
}
