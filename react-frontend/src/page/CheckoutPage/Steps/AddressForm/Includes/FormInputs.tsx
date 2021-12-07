import React from 'react'
import { Box, TextField } from '@mui/material'
import { FormControlRow } from '../AdressStyle'

import { findErrorByFieldType, ValidateErrors } from '../../../../Helpers/SetErrorMsg'
import { UserDetails } from '../../../CheckoutTypes'

const FormInputs: React.FC<{
   userDetails: UserDetails
   setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>
   validateErrors: ValidateErrors[]
}> = ({ setUserDetails, userDetails, validateErrors }) => {
   return (
      <>
         <FormControlRow>
            <Box m={1} width='80%'>
               <TextField
                  id='firstName'
                  fullWidth
                  error={findErrorByFieldType(validateErrors, 'userDetails.firstName')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.firstName')?.errorMsg}
                  variant='filled'
                  required
                  label='Vezetéknév'
                  margin='dense'
                  value={userDetails.firstName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, firstName: event.target.value })
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='lastName'
                  fullWidth
                  error={findErrorByFieldType(validateErrors, 'userDetails.lastName')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.lastName')?.errorMsg}
                  variant='filled'
                  required
                  label='Keresztnév'
                  margin='dense'
                  value={userDetails.lastName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, lastName: event.target.value })
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
                  error={findErrorByFieldType(validateErrors, 'userDetails.phone')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.phone')?.errorMsg}
                  variant='filled'
                  required
                  label='Telefonszám'
                  margin='dense'
                  value={userDetails.phone}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, phone: event.target.value })
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='zipCode'
                  fullWidth
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  error={findErrorByFieldType(validateErrors, 'userDetails.address.zipCode')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.address.zipCode')?.errorMsg}
                  variant='filled'
                  required
                  label='Irányítószám'
                  margin='dense'
                  value={userDetails.address.zipCode}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: {
                           ...userDetails.address,
                           zipCode: parseInt(event.target.value) || userDetails.address.zipCode
                        }
                     })
                  }
               />
            </Box>
         </FormControlRow>
         <FormControlRow>
            <Box m={1} width='80%'>
               <TextField
                  id='city'
                  fullWidth
                  error={findErrorByFieldType(validateErrors, 'userDetails.address.city')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.address.city')?.errorMsg}
                  variant='filled'
                  required
                  label='Város'
                  margin='dense'
                  value={userDetails.address.city}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: {
                           ...userDetails.address,
                           city: event.target.value || userDetails.address.city
                        }
                     })
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='street'
                  fullWidth
                  error={findErrorByFieldType(validateErrors, 'userDetails.address.street')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.address.street')?.errorMsg}
                  variant='filled'
                  required
                  label='Utca'
                  margin='dense'
                  value={userDetails.address.street}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: {
                           ...userDetails.address,
                           street: event.target.value || userDetails.address.street
                        }
                     })
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
                  error={findErrorByFieldType(validateErrors, 'userDetails.address.houseNumber')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.address.houseNumber')?.errorMsg}
                  variant='filled'
                  required
                  label='Házszám'
                  margin='dense'
                  value={userDetails.address.houseNumber}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: {
                           ...userDetails.address,
                           houseNumber: event.target.value || userDetails.address.houseNumber
                        }
                     })
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='floor'
                  fullWidth
                  error={findErrorByFieldType(validateErrors, 'userDetails.address.floor')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.address.floor')?.errorMsg}
                  variant='filled'
                  label='Emelet'
                  margin='dense'
                  value={userDetails.address.floor}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: {
                           ...userDetails.address,
                           floor: event.target.value || userDetails.address.floor
                        }
                     })
                  }
               />
            </Box>
            <Box m={1} width='80%'>
               <TextField
                  id='door'
                  fullWidth
                  error={findErrorByFieldType(validateErrors, 'userDetails.address.door')?.hasError}
                  helperText={findErrorByFieldType(validateErrors, 'userDetails.address.door')?.errorMsg}
                  variant='filled'
                  label='Ajtó'
                  margin='dense'
                  value={userDetails.address.door}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: {
                           ...userDetails.address,
                           door: event.target.value || userDetails.address.door
                        }
                     })
                  }
               />
            </Box>
         </FormControlRow>
      </>
   )
}

export default FormInputs
