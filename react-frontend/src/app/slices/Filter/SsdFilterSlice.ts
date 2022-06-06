import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StateType = {
   allConnection: [],
   selectedConnection: '',

   allSizes: [],
   selectedSize: '',

   capacityRange: [],
   selectedCapacityRange: [],

   readSpeedRange: [],
   selectedReadSpeedRange: [],
   writingSpeedRange: [],
   selectedWritingSpeedRange: [],

   allNand: [],
   selectedNand: '',

   allTBW: [],
   selectedTBW: [],
}

const SsdFilterSlice = createSlice({
   name: 'SsdFilterSlice',
   initialState,
   reducers: {
      setAllConnections: (state, action: PayloadAction<string[]>) => {
         state.allConnection = action.payload
      },
      setSelectedAllConnections: (state, action: PayloadAction<string>) => {
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
   setSelectedAllConnections,
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
