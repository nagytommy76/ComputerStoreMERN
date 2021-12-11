import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { setUserDetails } from '../../../../../app/slices/Checkout/UserDetailsSlice'

import { Box, TextField } from '@mui/material'
import { FormControlRow } from '../AdressStyle'

import { findValidationErrorByParam } from '../../../../Helpers/SetErrorMsg'

const FormInputs = () => {
   const dispatch = useAppDispatch()
   const userDetails = useAppSelector((state) => state.userDetails.userDetails)
   const validationErrors = useAppSelector((state) => state.validationError.validationErrors)
   return (
      <>
         <FormControlRow>
            <Box m={1} width='80%'>
               <TextField
                  id='firstName'
                  fullWidth
                  error={findValidationErrorByParam(validationErrors, 'userDetails.firstName')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.firstName')?.msg}
                  variant='filled'
                  required
                  label='Vezetéknév'
                  margin='dense'
                  value={userDetails.firstName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(setUserDetails({ ...userDetails, firstName: event.target.value }))
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='lastName'
                  fullWidth
                  error={findValidationErrorByParam(validationErrors, 'userDetails.lastName')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.lastName')?.msg}
                  variant='filled'
                  required
                  label='Keresztnév'
                  margin='dense'
                  value={userDetails.lastName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(setUserDetails({ ...userDetails, lastName: event.target.value }))
                  }
               />
            </Box>
         </FormControlRow>
         <FormControlRow>
            <Box m={1} width='80%'>
               <TextField
                  id='phone'
                  fullWidth
                  type='text'
                  inputProps={{ inputMode: 'tel' }}
                  error={findValidationErrorByParam(validationErrors, 'userDetails.phone')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.phone')?.msg}
                  variant='filled'
                  required
                  label='Telefonszám'
                  margin='dense'
                  value={userDetails.phone}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(setUserDetails({ ...userDetails, phone: event.target.value }))
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='zipCode'
                  fullWidth
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  error={findValidationErrorByParam(validationErrors, 'userDetails.address.zipCode')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.address.zipCode')?.msg}
                  variant='filled'
                  required
                  label='Irányítószám'
                  margin='dense'
                  value={userDetails.address.zipCode}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(
                        setUserDetails({
                           ...userDetails,
                           address: {
                              ...userDetails.address,
                              zipCode: parseInt(event.target.value) || userDetails.address.zipCode
                           }
                        })
                     )
                  }
               />
            </Box>
         </FormControlRow>
         <FormControlRow>
            <Box m={1} width='80%'>
               <TextField
                  id='city'
                  fullWidth
                  error={findValidationErrorByParam(validationErrors, 'userDetails.address.city')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.address.city')?.msg}
                  variant='filled'
                  required
                  label='Város'
                  margin='dense'
                  value={userDetails.address.city}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(
                        setUserDetails({
                           ...userDetails,
                           address: {
                              ...userDetails.address,
                              city: event.target.value || userDetails.address.city
                           }
                        })
                     )
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='street'
                  fullWidth
                  error={findValidationErrorByParam(validationErrors, 'userDetails.address.street')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.address.street')?.msg}
                  variant='filled'
                  required
                  label='Utca'
                  margin='dense'
                  value={userDetails.address.street}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(
                        setUserDetails({
                           ...userDetails,
                           address: {
                              ...userDetails.address,
                              street: event.target.value || userDetails.address.street
                           }
                        })
                     )
                  }
               />
            </Box>
         </FormControlRow>
         <FormControlRow>
            <Box m={1} width='80%'>
               <TextField
                  id='houseNumber'
                  fullWidth
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }}
                  error={findValidationErrorByParam(validationErrors, 'userDetails.address.houseNumber')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.address.houseNumber')?.msg}
                  variant='filled'
                  required
                  label='Házszám'
                  margin='dense'
                  value={userDetails.address.houseNumber}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(
                        setUserDetails({
                           ...userDetails,
                           address: {
                              ...userDetails.address,
                              houseNumber: event.target.value || userDetails.address.houseNumber
                           }
                        })
                     )
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='floor'
                  fullWidth
                  error={findValidationErrorByParam(validationErrors, 'userDetails.address.floor')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.address.floor')?.msg}
                  variant='filled'
                  label='Emelet'
                  margin='dense'
                  value={userDetails.address.floor}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(
                        setUserDetails({
                           ...userDetails,
                           address: {
                              ...userDetails.address,
                              floor: event.target.value || userDetails.address.floor
                           }
                        })
                     )
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='door'
                  fullWidth
                  error={findValidationErrorByParam(validationErrors, 'userDetails.address.door')?.msg !== undefined}
                  helperText={findValidationErrorByParam(validationErrors, 'userDetails.address.door')?.msg}
                  variant='filled'
                  label='Ajtó'
                  margin='dense'
                  value={userDetails.address.door}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     dispatch(
                        setUserDetails({
                           ...userDetails,
                           address: {
                              ...userDetails.address,
                              door: event.target.value || userDetails.address.door
                           }
                        })
                     )
                  }
               />
            </Box>
         </FormControlRow>
      </>
   )
}

export default FormInputs
