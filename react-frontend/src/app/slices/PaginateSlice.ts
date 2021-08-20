import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: State = {
   currentPage: 1,
   perPage: 10,
   totalPages: 1
}

export const PaginateSlice = createSlice({
   name: 'paginate',
   initialState,
   reducers: {
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.currentPage = action.payload
      },
      setPerPage: (state, action: PayloadAction<number>) => {
         state.perPage = action.payload
      },
      setTotalPages: (state, action: PayloadAction<number>) => {
         state.totalPages = action.payload
      }
   }
})

export const { setCurrentPage, setPerPage, setTotalPages } = PaginateSlice.actions
export default PaginateSlice.reducer

type State = {
   totalPages: number
   currentPage: number
   perPage: number
}
