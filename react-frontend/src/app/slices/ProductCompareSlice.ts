import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
   productIdsToComare: [],
}

const ProductCompareSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      addProductIdsToCompare: (state, action: PayloadAction<ICompare>) => {
         state.productIdsToComare.push(action.payload)
      },
      removeSingleItemByID: (state, action: PayloadAction<string>) => {
         const foundProductIndex = state.productIdsToComare.findIndex(
            product => product.productId === action.payload
         )
         state.productIdsToComare.splice(foundProductIndex, 1)
      },
      resetProductIdsToCompare: state => {
         state.productIdsToComare = []
      },
   },
})

export const { addProductIdsToCompare, resetProductIdsToCompare, removeSingleItemByID } =
   ProductCompareSlice.actions

export default ProductCompareSlice.reducer

interface ICompare {
   productId: string
   displayName: string
   displayImage: string
   productType: string
}

type InitialState = {
   productIdsToComare: ICompare[]
}
