import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseProductType } from '../../page/ShopPages/BaseTypes'

const initialState: InitialState = {
   products: [],
   isFetching: false,
}

const ProductsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<any>) => {
         state.products = action.payload
      },
      setIsFetching: (state, action: PayloadAction<any>) => {
         state.isFetching = action.payload
      },
   },
})

export const { setProducts, setIsFetching } = ProductsSlice.actions

export default ProductsSlice.reducer

type InitialState = {
   products: ProductsType[]
   isFetching: boolean
}

type ProductsType = BaseProductType & {
   details: any
}
