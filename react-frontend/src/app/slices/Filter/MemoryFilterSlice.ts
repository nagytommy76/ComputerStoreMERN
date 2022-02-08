import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Props = {
   allMemoryTypes: [],
   memoryType: 'all',
   frequencyRange: [400, 14000],
   selectedFrequencyRange: 400,
}
/**
 * Szűrés
 * - DDR4 pl
 * - MHz range
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
      setSelectedFrequencyRange: (state, { payload }: PayloadAction<number>) => {
         state.selectedFrequencyRange = payload
      },
   },
})

export const { setFrequencyRange, setMemoryType, setAllMemoryTypes, setSelectedFrequencyRange } = MemoryFilterData.actions

export default MemoryFilterData.reducer

type Props = {
   allMemoryTypes: string[]
   memoryType: string
   frequencyRange: number[]
   selectedFrequencyRange: number
}
