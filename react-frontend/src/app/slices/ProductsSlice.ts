import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseProductType } from '../../page/ShopPages/BaseTypes'

const initialState: InitialState = {
   products: [],
   isFetching: false,
   totalProductCount: 0,
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
      setTotalProductCount: (state, action: PayloadAction<any>) => {
         state.totalProductCount = action.payload
      },
   },
})

export const { setProducts, setIsFetching, setTotalProductCount } = ProductsSlice.actions

export default ProductsSlice.reducer

type InitialState = {
   products: ProductsType[]
   isFetching: boolean
   totalProductCount: number
}

type ProductsType = BaseProductType & {
   details: any
}
