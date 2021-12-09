import { createSlice, PayloadAction, Dispatch, createAsyncThunk } from '@reduxjs/toolkit'
import { UserDetails } from '../../../page/CheckoutPage/CheckoutTypes'
import axios from 'axios'

type InitialStateType = {
   isDetailsFilled: boolean
   userDetails: UserDetails
}

const initialState: InitialStateType = {
   isDetailsFilled: false,
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

const fetchUsersDetails1 = createAsyncThunk('checkout/userDetails/fetchUsersDetails1', async (_, thunkAPI) => {
   const state = thunkAPI.getState()
   // const dispatch = thunkAPI.dispatch
   console.log(state)
   axios
      .get('/auth/get-details')
      .then((result) => {
         if (result.data && result.data.userDetails !== null && result.data.isDetailsFilled) {
            return result.data.userDetails as UserDetails
            // dispatch(setUserDetails(result.data.userDetails))
            // dispatch(setDetailsFilled(result.data.isDetailsFilled))
            // setIsSubmitBtnDisabled(true)
         }
      })
      .catch((error) => console.error(error))
   return {} as UserDetails
})

export const UserDetailsSlice = createSlice({
   name: 'userDetails',
   initialState,
   reducers: {
      setUserDetails: (state, action: PayloadAction<UserDetails>) => {
         state.userDetails = action.payload
      },
      setDetailsFilled: (state, action: PayloadAction<boolean>) => {
         state.isDetailsFilled = action.payload
      }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchUsersDetails1.fulfilled, (state, action) => {
         state.userDetails = action.payload
      })
   }
})

export const { setUserDetails, setDetailsFilled } = UserDetailsSlice.actions

export default UserDetailsSlice.reducer

export const fetchUsersDetails =
   (setIsSubmitBtnDisabled: (value: React.SetStateAction<boolean>) => void) => async (dispatch: Dispatch) => {
      axios
         .get('/auth/get-details')
         .then((result) => {
            if (result.data && result.data.userDetails !== null && result.data.isDetailsFilled) {
               dispatch(setUserDetails(result.data.userDetails))
               dispatch(setDetailsFilled(result.data.isDetailsFilled))
               setIsSubmitBtnDisabled(true)
            }
         })
         .catch((error) => console.error(error))
   }
