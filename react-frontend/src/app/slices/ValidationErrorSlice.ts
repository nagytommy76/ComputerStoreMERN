import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ValidationError } from '../../page/Admin/AdminTypes'

const initialState: { validationErrors: ValidationError[] } = {
   validationErrors: []
}

export const ValidationErrorSlice = createSlice({
   name: 'validationError',
   initialState,
   reducers: {
      setValidationErrors: (state, { payload }: PayloadAction<ValidationError[]>) => {
         state.validationErrors = payload
      }
   }
})

export const { setValidationErrors } = ValidationErrorSlice.actions

export default ValidationErrorSlice.reducer
