import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Props = {
   allSocket: ['AM4', 'LGA-1200', 'sWRX8', 'LGA2011-3'],
   selectedSocket: 'all',
   coreCounts: [2, 128],
   selectedCoreCount: 0,
   baseFrequencyRange: [2000, 6000],
   selectedBaseFrequencyRange: [2000, 6000],
}
/**
 * Szűrés
 * - magok száma csúszka
 * - ????szálak száma csúszka????
 * - frekvencia base
 * - ????frekvencia turbo?????
 * - socket. AM4 stb
 */
const CpuFilterData = createSlice({
   name: 'cpuFilterData',
   initialState,
   reducers: {
      setAllSockets: (state, { payload }: PayloadAction<string[]>) => {
         state.allSocket = payload
      },
      setSelectedSocket: (state, { payload }: PayloadAction<string>) => {
         state.selectedSocket = payload
      },
      setCoreCounts: (state, { payload }: PayloadAction<number[]>) => {
         state.coreCounts = payload
      },
      setSelectedCoreCount: (state, { payload }: PayloadAction<number>) => {
         state.selectedCoreCount = payload
      },
      setBaseFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.baseFrequencyRange = payload
      },
      setSelectedBaseFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBaseFrequencyRange = payload
      },
   },
})

export const {
   setAllSockets,
   setBaseFrequencyRange,
   setCoreCounts,
   setSelectedBaseFrequencyRange,
   setSelectedCoreCount,
   setSelectedSocket,
} = CpuFilterData.actions

export default CpuFilterData.reducer

type Props = {
   allSocket: string[]
   selectedSocket: string
   coreCounts: number[]
   selectedCoreCount: number
   baseFrequencyRange: number[]
   selectedBaseFrequencyRange: number[]
}
