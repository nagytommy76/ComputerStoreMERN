import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseProductType } from '../../page/ShopPages/BaseTypes'

const initialState: InitialState = {
   products: [],
   isFetchingStatus: 'INIT',
   totalProductCount: 0,
   productsToComare: [],
}

const ProductsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<ProductsType[]>) => {
         state.products = action.payload
      },
      setIsFetching: (state, action: PayloadAction<'INIT' | 'PENDING' | 'FULFILLED' | 'REJECTED'>) => {
         state.isFetchingStatus = action.payload
      },
      setTotalProductCount: (state, action: PayloadAction<number>) => {
         state.totalProductCount = action.payload
      },
      setProductsToCompare: (state, action: PayloadAction<ProductsType[]>) => {
         state.productsToComare = action.payload
      },
   },
})

export const { setProducts, setIsFetching, setTotalProductCount, setProductsToCompare } =
   ProductsSlice.actions

export default ProductsSlice.reducer

type InitialState = {
   products: ProductsType[]
   isFetchingStatus: 'INIT' | 'PENDING' | 'FULFILLED' | 'REJECTED'
   totalProductCount: number
   productsToComare: ProductsType[]
}

type ProductsType = BaseProductType & {
   details: any
}
