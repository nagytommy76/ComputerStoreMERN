import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { AdressFormStyle, FormControlRow, StyledHeading, AdressContainer } from './AdressStyle'
import { TextField, Box } from '@mui/material'

import { UserDetails } from '../CheckoutTypes'
import axios from 'axios'
import { ValidationErrorWithAxiosError } from '../../Admin/Vga/Types'
import { findErrorByFieldType, ValidateErrors } from '../../Helpers/SetErrorMsg'

const AdvancedButton = React.lazy(() => import('../../BaseElements/AdvancedButton/AdvancedButton'))

const Adress = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState<boolean>(false)
   const [userDetails, setUserDetails] = useState<UserDetails>({
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
   })
   const [validateErrors, setValidateErrors] = useState<ValidateErrors[]>([])

   const submitAdressForm = (event: React.MouseEvent) => {
      event.preventDefault()
      axios.post('/auth/insert-details', { userDetails }).catch((errors: ValidationErrorWithAxiosError) => {
         if (errors.response?.status === 422) {
            const errorResponse = errors.response.data.errors
            if (errorResponse.length > 0) {
               errorResponse.forEach((error: any) => {
                  setValidateErrors((prevErrors) => [...prevErrors, { errorMsg: error.msg, field: error.param, hasError: true }])
               })
            }
         }
      })
   }
   useEffect(() => {
      axios
         .get('/auth/get-details')
         .then((result) => {
            if (result.data.userDetails !== null && result.data.isDetailsFilled) {
               setUserDetails(result.data.userDetails)
               setIsSubmitBtnDisabled(true)
            }
         })
         .catch((error) => console.log(error))
   }, [])
   return (
      <AdressContainer>
         <AdressFormStyle darkTheme={isDarkTheme}>
            <StyledHeading>Szállítási adatok</StyledHeading>
            <FormControlRow>
               <Box m={1} width='80%'>
                  <TextField
                     fullWidth
                     error={findErrorByFieldType(validateErrors, 'userDetails.firstName')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.firstName')?.errorMsg}
                     variant='filled'
                     required
                     label='Vezetéknév'
                     margin='dense'
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserDetails({ ...userDetails, lastName: event.target.value })
                     }
                  />
               </Box>
               <Box m={1} width='80%'>
                  <TextField
                     fullWidth
                     error={findErrorByFieldType(validateErrors, 'userDetails.lastName')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.lastName')?.errorMsg}
                     variant='filled'
                     required
                     label='Keresztnév'
                     margin='dense'
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserDetails({ ...userDetails, lastName: event.target.value })
                     }
                  />
               </Box>
            </FormControlRow>
            <FormControlRow>
               <Box m={1} width='80%'>
                  <TextField
                     fullWidth
                     type='text'
                     inputProps={{ inputMode: 'tel' }}
                     error={findErrorByFieldType(validateErrors, 'userDetails.phone')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.phone')?.errorMsg}
                     variant='filled'
                     required
                     label='Telefonszám'
                     margin='dense'
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserDetails({ ...userDetails, phone: event.target.value })
                     }
                  />
               </Box>
               <Box m={1} width='80%'>
                  <TextField
                     fullWidth
                     inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                     error={findErrorByFieldType(validateErrors, 'userDetails.address.zipCode')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.address.zipCode')?.errorMsg}
                     variant='filled'
                     required
                     label='Irányítószám'
                     margin='dense'
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
                     fullWidth
                     error={findErrorByFieldType(validateErrors, 'userDetails.address.city')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.address.city')?.errorMsg}
                     variant='filled'
                     required
                     label='Város'
                     margin='dense'
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
                     fullWidth
                     error={findErrorByFieldType(validateErrors, 'userDetails.address.street')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.address.street')?.errorMsg}
                     variant='filled'
                     required
                     label='Utca'
                     margin='dense'
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
                     fullWidth
                     type='number'
                     inputProps={{ inputMode: 'numeric', pattern: /[0-9] [0-9] [0-9] [0-9]/ }}
                     error={findErrorByFieldType(validateErrors, 'userDetails.address.houseNumber')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.address.houseNumber')?.errorMsg}
                     variant='filled'
                     required
                     label='Házszám'
                     margin='dense'
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
                     fullWidth
                     error={findErrorByFieldType(validateErrors, 'userDetails.address.floor')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.address.floor')?.errorMsg}
                     variant='filled'
                     label='Emelet'
                     margin='dense'
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
                     fullWidth
                     error={findErrorByFieldType(validateErrors, 'userDetails.address.door')?.hasError}
                     helperText={findErrorByFieldType(validateErrors, 'userDetails.address.door')?.errorMsg}
                     variant='filled'
                     label='Ajtó'
                     margin='dense'
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
            <AdvancedButton isButtonDisabled={isSubmitBtnDisabled} onClickEvent={submitAdressForm}>
               Bevitel
            </AdvancedButton>
         </AdressFormStyle>
      </AdressContainer>
   )
}

export default Adress
