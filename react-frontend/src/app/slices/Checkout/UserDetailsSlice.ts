import { createSlice, PayloadAction, createAsyncThunk, Dispatch } from '@reduxjs/toolkit'
import { UserDetails } from '../../../page/CheckoutPage/CheckoutTypes'
import axios from 'axios'
import { RootState } from '../../store'
import { setValidationErrors } from '../ValidationErrorSlice'
import { ValidationError } from '../../../page/Admin/AdminTypes'

const userDetailsropoerties = {
   firstName: '',
   lastName: '',
   phone: '',
   address: {
      zipCode: 1000,
      city: '',
      street: '',
      houseNumber: '',
      floor: '',
      door: '',
   },
}

type InitialStateType = {
   isDetailsFilled: boolean
   userDetails: UserDetails
   isInsertSuccess: boolean
   isModifySuccess: boolean
}

const initialState: InitialStateType = {
   isDetailsFilled: false,
   userDetails: userDetailsropoerties,
   isInsertSuccess: false,
   isModifySuccess: false,
}

export const fetchUsersDetails = createAsyncThunk('checkout/userDetails/fetchUsersDetails', async () => {
   const axiosResponse = await axios.get('/auth/get-details')
   const details = axiosResponse.data as { isDetailsFilled: boolean; userDetails: UserDetails }
   if (!details.isDetailsFilled) details.userDetails = userDetailsropoerties
   return details
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
      },
      restoreUserDetails: state => {
         state.isDetailsFilled = false
         state.userDetails = userDetailsropoerties
      },
      setIsInsertSuccess: (state, action: PayloadAction<boolean>) => {
         state.isInsertSuccess = action.payload
      },
      setIsModifySuccess: (state, action: PayloadAction<boolean>) => {
         state.isModifySuccess = action.payload
      },
   },
   extraReducers: builder => {
      builder.addCase(fetchUsersDetails.fulfilled, (state, { payload }) => {
         state.userDetails = payload.userDetails
         state.isDetailsFilled = payload.isDetailsFilled
      })
   },
})

export const {
   setUserDetails,
   setDetailsFilled,
   restoreUserDetails,
   setIsInsertSuccess,
   setIsModifySuccess,
} = UserDetailsSlice.actions

export default UserDetailsSlice.reducer

export const insertUserDetails =
   (setIsSubmitBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>) =>
   async (dispatch: Dispatch, getState: any) => {
      try {
         const state = getState() as RootState
         const insertResponse = await axios.post('/auth/insert-details', {
            userDetails: state.userDetails.userDetails,
         })
         if (insertResponse.status === 201) {
            dispatch(setDetailsFilled(true))
            dispatch(setIsInsertSuccess(true))
            setIsSubmitBtnDisabled(true)
         }
      } catch (error: any) {
         if (error.response.status === 422) {
            const errorResponse = error.response.data.errors as ValidationError[]
            if (errorResponse?.length > 0) {
               dispatch(setValidationErrors(errorResponse))
            } else setValidationErrors([])
         }
      }
   }
