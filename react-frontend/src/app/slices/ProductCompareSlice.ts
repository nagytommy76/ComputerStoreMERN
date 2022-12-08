import { createSlice, PayloadAction, createDraftSafeSelector } from '@reduxjs/toolkit'

const initialState: InitialState = {
   productIdsToComare: [],
   selectedProductsByType: [],
}

export const selectVgaCompareProducts = createDraftSafeSelector(
   [
      (state: InitialState) => state.productIdsToComare,
      (state: InitialState, productType: string) => productType,
   ],
   (state, productType) => state.filter(product => product.productType === productType)
)

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
         const foundSelectedProductIndex = state.selectedProductsByType.findIndex(
            product => product.productId === action.payload
         )
         state.productIdsToComare.splice(foundProductIndex, 1)
         state.selectedProductsByType.splice(foundSelectedProductIndex, 1)
      },
      resetProductIdsToCompare: state => {
         state.productIdsToComare = []
      },
      selectByProductType: (state, action: PayloadAction<string>) => {
         const selected = selectVgaCompareProducts(state, action.payload)
         state.selectedProductsByType = selected
      },
   },
})

// Kéne egy create selector, amivel kiválasztok a kategóriát, és mehet minden egy array-be? (productIdsToComare)
// https://redux-toolkit.js.org/api/createSelector

export const { addProductIdsToCompare, resetProductIdsToCompare, removeSingleItemByID, selectByProductType } =
   ProductCompareSlice.actions

export default ProductCompareSlice.reducer

export interface ICompare {
   productId: string
   displayName: string
   displayImage: string
   productType: string
}

type InitialState = {
   productIdsToComare: ICompare[]
   selectedProductsByType: ICompare[]
}
