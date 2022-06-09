import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StateType = {
   allConnection: ['M.2 PCIe 3.0 x 4'],
   selectedConnection: 'all',

   allSizes: ['M.2 2280', 'M.2 22110'],
   selectedSize: 'all',

   capacityRange: [60, 2000],
   selectedCapacityRange: [60, 2000],

   readSpeedRange: [400, 6000],
   selectedReadSpeedRange: [400, 6000],
   writingSpeedRange: [400, 6000],
   selectedWritingSpeedRange: [400, 6000],

   allNand: [''],
   selectedNand: 'all',

   allTBW: [0],
   selectedTBW: [0],
}

const SsdFilterSlice = createSlice({
   name: 'SsdFilterSlice',
   initialState,
   reducers: {
      setAllConnections: (state, action: PayloadAction<string[]>) => {
         state.allConnection = action.payload
      },
      setSelectedConnections: (state, action: PayloadAction<string>) => {
         state.selectedConnection = action.payload
      },
      setAllSizes: (state, action: PayloadAction<string[]>) => {
         state.allSizes = action.payload
      },
      setSelectedSize: (state, action: PayloadAction<string>) => {
         state.selectedSize = action.payload
      },
      setCapacityRange: (state, action: PayloadAction<number[]>) => {
         state.capacityRange = action.payload
      },
      setSelectedCapacityRange: (state, action: PayloadAction<number[]>) => {
         state.selectedCapacityRange = action.payload
      },
      setReadSpeedRange: (state, action: PayloadAction<number[]>) => {
         state.readSpeedRange = action.payload
      },
      setSelectedReadSpeedRange: (state, action: PayloadAction<number[]>) => {
         state.selectedReadSpeedRange = action.payload
      },
      setWritingSpeedRange: (state, action: PayloadAction<number[]>) => {
         state.writingSpeedRange = action.payload
      },
      setSelectedWritingSpeedRange: (state, action: PayloadAction<number[]>) => {
         state.selectedWritingSpeedRange = action.payload
      },
      setAllNand: (state, action: PayloadAction<string[]>) => {
         state.allNand = action.payload
      },
      setSelectedNand: (state, action: PayloadAction<string>) => {
         state.selectedNand = action.payload
      },
      setAllTBW: (state, action: PayloadAction<number[]>) => {
         state.allTBW = action.payload
      },
      setSelectedTBW: (state, action: PayloadAction<number[]>) => {
         state.selectedTBW = action.payload
      },
   },
})

export const {
   setAllConnections,
   setSelectedConnections,
   setAllSizes,
   setSelectedSize,
   setAllNand,
   setAllTBW,
   setCapacityRange,
   setReadSpeedRange,
   setSelectedCapacityRange,
   setSelectedNand,
   setSelectedReadSpeedRange,
   setSelectedTBW,
   setSelectedWritingSpeedRange,
   setWritingSpeedRange,
} = SsdFilterSlice.actions

export default SsdFilterSlice.reducer

type StateType = {
   allConnection: string[]
   selectedConnection: string

   allSizes: string[]
   selectedSize: string

   capacityRange: number[]
   selectedCapacityRange: number[]

   readSpeedRange: number[]
   selectedReadSpeedRange: number[]
   writingSpeedRange: number[]
   selectedWritingSpeedRange: number[]

   allNand: string[]
   selectedNand: string

   allTBW: number[]
   selectedTBW: number[]
}
