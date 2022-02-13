import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Props = {
   allSocket: ['AM4', 'LGA-1200', 'sWRX8', 'LGA2011-3'],
   selectedSocket: 'all',
   threadCounts: [2, 128],
   selectedThreadCountRange: [2, 128],
   coreCounts: [2, 128],
   selectedCoreCountRange: [2, 128],
   turboFrequencyRange: [2000, 6000],
   selectedTurboFrequencyRange: [2000, 6000],
   baseFrequencyRange: [2000, 6000],
   selectedBaseFrequencyRange: [2000, 6000],
   l3CacheRange: [1, 256],
   selectedL3CacheRange: [1, 256],
   tdpRange: [25, 300],
   selectedTDPRange: [25, 300],
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
      setThreadCounts: (state, { payload }: PayloadAction<number[]>) => {
         state.threadCounts = payload
      },
      setSelectedThreadCountRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedThreadCountRange = payload
      },
      setSelectedCoreCountRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedCoreCountRange = payload
      },
      setBaseFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.baseFrequencyRange = payload
      },
      setSelectedBaseFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBaseFrequencyRange = payload
      },
      setTurboFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.turboFrequencyRange = payload
      },
      setSelectedTurboFrequencyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedTurboFrequencyRange = payload
      },
      setL3CacheRange: (state, { payload }: PayloadAction<number[]>) => {
         state.l3CacheRange = payload
      },
      setSelectedL3CacheRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedL3CacheRange = payload
      },
      setTDPRange: (state, { payload }: PayloadAction<number[]>) => {
         state.tdpRange = payload
      },
      setSelectedTDPRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedTDPRange = payload
      },
   },
})

export const {
   setAllSockets,
   setBaseFrequencyRange,
   setCoreCounts,
   setSelectedBaseFrequencyRange,
   setSelectedCoreCountRange,
   setSelectedSocket,
   setL3CacheRange,
   setSelectedL3CacheRange,
   setSelectedTDPRange,
   setSelectedThreadCountRange,
   setSelectedTurboFrequencyRange,
   setTDPRange,
   setThreadCounts,
   setTurboFrequencyRange,
} = CpuFilterData.actions

export default CpuFilterData.reducer

type Props = {
   allSocket: string[]
   selectedSocket: string

   coreCounts: number[]
   selectedCoreCountRange: number[]
   threadCounts: number[]
   selectedThreadCountRange: number[]

   baseFrequencyRange: number[]
   selectedBaseFrequencyRange: number[]
   turboFrequencyRange: number[]
   selectedTurboFrequencyRange: number[]

   l3CacheRange: number[]
   selectedL3CacheRange: number[]

   tdpRange: number[]
   selectedTDPRange: number[]
}
