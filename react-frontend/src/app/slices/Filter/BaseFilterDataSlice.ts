import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterTypes } from '../../../page/ShopPages/BaseTypes'

const initialState: InitialState = {
   filterData: {
      allManufacturer: [],
      selectedManufacturer: 'all',
      allWarranties: [],
      selectedWarranty: 'all',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      priceRange: [0, 5000000],
      productType: '',
      productName: '',
   },
   isPriceRangeSet: false,
}

const BaseFilterData = createSlice({
   name: 'filterData',
   initialState,
   reducers: {
      setFilterOptions: (
         state,
         action: PayloadAction<{ allManufacturer?: string[]; minPrice?: number; maxPrice?: number }>
      ) => {
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
         state.filterData.priceRange = action.payload || [0, 5000000]
      },
      setProductType: (state, action: PayloadAction<string>) => {
         state.filterData.productType = action.payload
      },
      setProductName: (state, action: PayloadAction<string>) => {
         state.filterData.productName = action.payload
      },
      setIsPriceRangeSet: (state, action: PayloadAction<boolean>) => {
         state.isPriceRangeSet = action.payload
      },
      setAllWarranties: (state, action: PayloadAction<string[]>) => {
         state.filterData.allWarranties = action.payload
      },
      setSelectedWarranty: (state, action: PayloadAction<string>) => {
         state.filterData.selectedWarranty = action.payload
      },
   },
})

export const {
   setFilterOptions,
   setAllManufacturer,
   setSelectedManufacturer,
   setMaxPrice,
   setMinPrice,
   setOrderBy,
   setPriceRange,
   setProductType,
   setIsPriceRangeSet,
   setAllWarranties,
   setSelectedWarranty,
   setProductName,
} = BaseFilterData.actions

export default BaseFilterData.reducer

type InitialState = {
   isPriceRangeSet: boolean
   filterData: FilterTypes
}
