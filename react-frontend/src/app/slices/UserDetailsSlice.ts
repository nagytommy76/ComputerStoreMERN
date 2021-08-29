import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserDetailsType = {
   idDetailsFilled: boolean
   firstName: string
   lastName: string
   phone: string
   address: {
      zipCode: number
      city: string
      street: string
      houseNumber: string
      floor: string
      door: string
   }
}

const initialState: UserDetailsType = {
   idDetailsFilled: false,
   firstName: '',
   lastName: '',
   phone: '',
   address: {
      zipCode: 0,
      city: '',
      street: '',
      houseNumber: '',
      floor: '',
      door: ''
   }
}

export const UserDetailsSlice = createSlice({
   name: 'userDetails',
   initialState,
   reducers: {}
})

export default UserDetailsSlice.reducer
