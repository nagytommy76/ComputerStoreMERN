import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterTypes } from '../../page/ShopPages/BaseTypes'

const initialState: InitialState = {
   filterData: {
      allManufacturer: [],
      selectedManufacturer: '',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      selectedPrice: [0, 5000000]
   }
}

const FilterDataSlice = createSlice({
   name: 'filterData',
   initialState,
   reducers: {
      setFilterOptions: (state, action: PayloadAction<{ allManufacturer?: string[]; minPrice?: number; maxPrice?: number }>) => {
         state.filterData.allManufacturer = action.payload.allManufacturer || []
         state.filterData.minPrice = action.payload.minPrice || 0
         state.filterData.maxPrice = action.payload.maxPrice || 200
      },
      setAllManufacturer: (state, action: PayloadAction<string[]>) => {
         state.filterData.allManufacturer = action.payload
      },
      setSelectedManufacturer: (state, action: PayloadAction<string>) => {
         state.filterData.selectedManufacturer = action.payload
      },
      setMinPrice: (state, action: PayloadAction<number>) => {
         state.filterData.minPrice = action.payload
      },
      setMaxPrice: (state, action: PayloadAction<number>) => {
         state.filterData.maxPrice = action.payload
      },
      setOrderBy: (state, action: PayloadAction<string>) => {
         state.filterData.orderBy = action.payload || 'asc'
      },
      setPriceRange: (state, action: PayloadAction<number[]>) => {
         state.filterData.selectedPrice = action.payload || [0, 5000000]
      }
   }
})

export const {
   setFilterOptions,
   setAllManufacturer,
   setSelectedManufacturer,
   setMaxPrice,
   setMinPrice,
   setOrderBy,
   setPriceRange
} = FilterDataSlice.actions

export default FilterDataSlice.reducer

type InitialState = {
   filterData: FilterTypes
}
