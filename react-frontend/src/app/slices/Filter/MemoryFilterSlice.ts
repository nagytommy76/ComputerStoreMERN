import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Props = {
   memoryType: 'all',
   frequencyRange: [400, 14000],
   selectedFrequencyRange: [400, 14000],
   selectedCapacity: 0,
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
      setMemoryType: (state, { payload }: PayloadAction<string>) => {
         state.memoryType = payload
      },
      setFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.frequencyRange = payload
      },
      setSelectedFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedFrequencyRange = payload
      },
      setSelectedCapacity: (state, { payload }: PayloadAction<number>) => {
         state.selectedCapacity = payload
      },
   },
})

export const { setFrequencyRange, setMemoryType, setSelectedFrequencyRange, setSelectedCapacity } =
   MemoryFilterData.actions

export default MemoryFilterData.reducer

type Props = {
   memoryType: string
   frequencyRange: number[]
   selectedFrequencyRange: number[]
   selectedCapacity: number
}
