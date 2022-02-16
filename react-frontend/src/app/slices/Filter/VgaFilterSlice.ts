import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
   gpuManufacturers: ['AMD', 'NVIDIA'],
   selectedGpuMan: 'all',

   baseClockRange: [500, 2000],
   selectedBaseClockRange: [500, 2000],

   boostClockRange: [500, 2000],
   selectedBoostClockRange: [500, 2000],

   pcieTypes: [],
   selectedPcie: 'all',

   vramCapacitiyRange: [2, 24],
   selectedVramCapRange: [2, 24],

   vramTypes: [],
   selectedVramType: 'all',

   vramBandwidths: [128, 512],
   selectedVramBandwidth: [128, 512],

   powerConsuptions: [50, 400],
   selectedPowerConsuption: [50, 400],

   lengths: [200, 500],
   selectedLength: [200, 500],
}

const VgaFilterSlice = createSlice({
   name: 'vgaFilter',
   initialState,
   reducers: {
      setGpuManufacturers: (state, { payload }: PayloadAction<string[]>) => {
         state.gpuManufacturers = payload
      },
      setSelectedGpuManufacturer: (state, { payload }: PayloadAction<string>) => {
         state.selectedGpuMan = payload
      },

      setBaseClockRange: (state, { payload }: PayloadAction<number[]>) => {
         state.baseClockRange = payload
      },
      setSelectedBaseClockRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBaseClockRange = payload
      },

      setBoostClockRange: (state, { payload }: PayloadAction<number[]>) => {
         state.boostClockRange = payload
      },
      setSelectedBoostClockRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedBoostClockRange = payload
      },

      setPcieTypes: (state, { payload }: PayloadAction<string[]>) => {
         state.pcieTypes = payload
      },
      setSelectedPcie: (state, { payload }: PayloadAction<string>) => {
         state.selectedPcie = payload
      },

      setVramCapacitiyRange: (state, { payload }: PayloadAction<number[]>) => {
         state.vramCapacitiyRange = payload
      },
      setSelectedVramCapRange: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedVramCapRange = payload
      },

      setVramTypes: (state, { payload }: PayloadAction<string[]>) => {
         state.vramTypes = payload
      },
      setSelectedVramType: (state, { payload }: PayloadAction<string>) => {
         state.selectedVramType = payload
      },

      setVramBandwidths: (state, { payload }: PayloadAction<number[]>) => {
         state.vramBandwidths = payload
      },
      setSelectedVramBandwidth: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedVramBandwidth = payload
      },

      setPowerConsuptions: (state, { payload }: PayloadAction<number[]>) => {
         state.powerConsuptions = payload
      },
      setSelectedPowerConsuption: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedPowerConsuption = payload
      },

      setLengths: (state, { payload }: PayloadAction<number[]>) => {
         state.lengths = payload
      },
      setSelectedLength: (state, { payload }: PayloadAction<number[]>) => {
         state.selectedLength = payload
      },
   },
})

export const {
   setBaseClockRange,
   setBoostClockRange,
   setGpuManufacturers,
   setLengths,
   setPcieTypes,
   setPowerConsuptions,
   setSelectedBaseClockRange,
   setSelectedBoostClockRange,
   setSelectedGpuManufacturer,
   setSelectedLength,
   setSelectedPcie,
   setSelectedPowerConsuption,
   setSelectedVramBandwidth,
   setSelectedVramCapRange,
   setSelectedVramType,
   setVramBandwidths,
   setVramCapacitiyRange,
   setVramTypes,
} = VgaFilterSlice.actions

export default VgaFilterSlice.reducer

type InitialState = {
   gpuManufacturers: string[]
   selectedGpuMan: string

   baseClockRange: number[]
   selectedBaseClockRange: number[]

   boostClockRange: number[]
   selectedBoostClockRange: number[]

   pcieTypes: string[]
   selectedPcie: string

   vramCapacitiyRange: number[]
   selectedVramCapRange: number[]

   vramTypes: string[]
   selectedVramType: string

   vramBandwidths: number[]
   selectedVramBandwidth: number[]

   powerConsuptions: number[]
   selectedPowerConsuption: number[]

   lengths: number[]
   selectedLength: number[]
}
