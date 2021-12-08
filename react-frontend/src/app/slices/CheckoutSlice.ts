import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { UserDetails } from '../../page/CheckoutPage/CheckoutTypes'
import axios from 'axios'

type InitialStateType = {
   userDetails: UserDetails
}

const initialState: InitialStateType = {
   userDetails: {
      firstName: '',
      lastName: '',
      phone: '',
      address: {
         zipCode: 1000,
         city: '',
         street: '',
         houseNumber: '',
         floor: '',
         door: ''
      }
   }
}

export const CheckoutSlice = createSlice({
   name: 'checkout',
   initialState,
   reducers: {
      setUserDetails: (state, action: PayloadAction<UserDetails>) => {
         state.userDetails = action.payload
      }
   }
})

export const { setUserDetails } = CheckoutSlice.actions

export default CheckoutSlice.reducer

const fetchUsers = (setIsSubmitBtnDisabled: (_: boolean) => void) => async (dispatch: Dispatch) => {
   axios
      .get('/auth/get-details')
      .then((result) => {
         if (result.data && result.data.userDetails !== null && result.data.isDetailsFilled) {
            dispatch(setUserDetails(result.data.userDetails))
            setIsSubmitBtnDisabled(true)
         }
      })
      .catch((error) => console.error(error))
}
