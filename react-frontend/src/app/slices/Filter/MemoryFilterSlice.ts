import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {}
/**
 * Szűrés
 * - DDR4 pl
 * - MHz range
 */
const MemoryFilterData = createSlice({
   name: 'filterData',
   initialState,
   reducers: {},
})

export default MemoryFilterData.reducer
