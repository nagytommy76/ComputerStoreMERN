import { createSlice, PayloadAction, createDraftSafeSelector } from '@reduxjs/toolkit'

const initialState: InitialState = {
   productIdsToComare: [],
   // cpuToCompare: [],
   // hddToCompare: [],
   // memoryToCompare: [],
   // ssdToCompare: [],
   // vgaToCompare: [],
}

export const selectVgaCompareProducts = createDraftSafeSelector(
   [
      (state: InitialState) => state.productIdsToComare,
      (state: ICompare[], productType: string) => productType,
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
         state.productIdsToComare.splice(foundProductIndex, 1)
      },
      resetProductIdsToCompare: state => {
         state.productIdsToComare = []
      },
   },
})

// Kéne egy create selector, amivel kiválasztok a kategóriát, és mehet minden egy array-be? (productIdsToComare)
// https://redux-toolkit.js.org/api/createSelector

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
   // vgaToCompare: ICompare[]
   // cpuToCompare: ICompare[]
   // memoryToCompare: ICompare[]
   // ssdToCompare: ICompare[]
   // hddToCompare: ICompare[]
}
