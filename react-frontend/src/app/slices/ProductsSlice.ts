import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseProductType } from '../../page/ShopPages/BaseTypes'

const initialState: InitialState = {
   products: [],
   isFetchingStatus: 'INIT',
   totalProductCount: 0,
}

const ProductsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<any>) => {
         state.products = action.payload
      },
      setIsFetching: (state, action: PayloadAction<'INIT' | 'PENDING' | 'FULFILLED' | 'REJECTED'>) => {
         state.isFetchingStatus = action.payload
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
   isFetchingStatus: 'INIT' | 'PENDING' | 'FULFILLED' | 'REJECTED'
   totalProductCount: number
}

type ProductsType = BaseProductType & {
   details: any
}
