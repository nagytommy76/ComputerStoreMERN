import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseProductType } from '../../page/ShopPages/BaseTypes'

const initialState: InitialState = {
   products: []
}

const ProductsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<any>) => {
         state.products = action.payload
      }
   }
})

export const { setProducts } = ProductsSlice.actions

export default ProductsSlice.reducer

type InitialState = {
   products: ProductsType[]
}

type ProductsType = BaseProductType & {
   details: any
}
