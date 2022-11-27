import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
   productIdsToComare: [],
}

const ProductCompareSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      addProductIdsToCompare: (state, action: PayloadAction<string>) => {
         state.productIdsToComare.push(action.payload)
      },
      resetProductIdsToCompare: state => {
         state.productIdsToComare = []
      },
   },
})

export const { addProductIdsToCompare, resetProductIdsToCompare } = ProductCompareSlice.actions

export default ProductCompareSlice.reducer

type InitialState = {
   productIdsToComare: string[]
}