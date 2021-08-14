import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'

const initialState = {
   vgaProducts: []
}

const VgaProductsSlice = createSlice({
   name: 'vga',
   initialState,
   reducers: {}
})
