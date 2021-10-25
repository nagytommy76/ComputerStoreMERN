import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { AdressFormStyle, FormControlRow, StyledHeading, /*BackgroundImageStyle, */ AdressContainer } from './AdressStyle'
// import AddressFormBacground from './AdressFormBackgound.jpg'
// import AddressFormBacground from './AdressBackG.jpg'
import { UserDetails } from '../CheckoutTypes'
import axios from 'axios'
import { ValidationErrorWithAxiosError } from '../../Admin/Vga/Types'
import { ValidationError } from '../../Admin/AdminTypes'
import { errorMsg, errorMsgTest, ValidateErrors } from '../../Helpers/SetErrorMsg'

import { TextField } from '@mui/material'

const TextOrNumberInput = React.lazy(() => import('../../Admin/Components/InputFields/TextOrNumberInput'))
const AdbancedButton = React.lazy(() => import('../../BaseElements/AdvancedButton/AdvancedButton'))

const Adress = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
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
            setValidationErrors(errors.response.data.errors)
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
               setValidationErrors([])
               setIsSubmitBtnDisabled(true)
            }
         })
         .catch((error) => console.log(error))
   }, [])
   return (
      <AdressContainer>
         {/* <BackgroundImageStyle backgroundImage={AddressFormBacground} /> */}
         <AdressFormStyle darkTheme={isDarkTheme}>
            <StyledHeading>Szállítási adatok</StyledHeading>
            <FormControlRow>
               <TextField
                  error={errorMsgTest(validateErrors, 'userDetails.firstName')?.hasError}
                  helperText={errorMsgTest(validateErrors, 'userDetails.firstName')?.errorMsg}
                  variant='filled'
                  required
                  label='Vezetéknév'
                  margin='dense'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, lastName: event.target.value })
                  }
               />
               <TextField
                  error={errorMsgTest(validateErrors, 'userDetails.lastName')?.hasError}
                  helperText={errorMsgTest(validateErrors, 'userDetails.lastName')?.errorMsg}
                  variant='filled'
                  required
                  label='Keresztnév'
                  margin='dense'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, lastName: event.target.value })
                  }
               />
            </FormControlRow>
            <FormControlRow>
               <TextField
                  type='text'
                  inputProps={{ inputMode: 'tel' }}
                  error={errorMsgTest(validateErrors, 'userDetails.phone')?.hasError}
                  helperText={errorMsgTest(validateErrors, 'userDetails.phone')?.errorMsg}
                  variant='filled'
                  required
                  label='Telefonszám'
                  margin='dense'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, phone: event.target.value })
                  }
               />
               <TextField
                  type='number'
                  inputProps={{ inputMode: 'numeric', pattern: /[0-9] [0-9] [0-9] [0-9]/ }}
                  error={errorMsgTest(validateErrors, 'userDetails.address.zipCode')?.hasError}
                  helperText={errorMsgTest(validateErrors, 'userDetails.address.zipCode')?.errorMsg}
                  variant='filled'
                  required
                  label='Irányítószám'
                  margin='dense'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: { ...userDetails.address, zipCode: parseInt(event.target.value) || userDetails.address.zipCode }
                     })
                  }
               />
            </FormControlRow>
            <FormControlRow>
               <TextOrNumberInput
                  labelText='Város *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, city: event.target.value } })
                  }
                  placeHolder='Város...'
                  value={userDetails.address.city}
                  errorMsg={errorMsg(validationErrors, 'userDetails.address.city')}
               />
               <TextOrNumberInput
                  labelText='Utca *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, street: event.target.value } })
                  }
                  placeHolder='Utca...'
                  value={userDetails.address.street}
                  errorMsg={errorMsg(validationErrors, 'userDetails.address.street')}
               />
            </FormControlRow>
            <FormControlRow>
               <TextOrNumberInput
                  labelText='Házszám *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, houseNumber: event.target.value } })
                  }
                  placeHolder='Házszám...'
                  value={userDetails.address.houseNumber}
                  errorMsg={errorMsg(validationErrors, 'userDetails.address.houseNumber')}
               />
               <TextOrNumberInput
                  labelText='Emelet'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, floor: event.target.value } })
                  }
                  placeHolder='Emelet...'
                  value={userDetails.address.floor}
               />
               <TextOrNumberInput
                  labelText='Ajtó'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, door: event.target.value } })
                  }
                  placeHolder='Ajtó...'
                  value={userDetails.address.door}
               />
            </FormControlRow>
            <AdbancedButton isButtonDisabled={isSubmitBtnDisabled} onClickEvent={submitAdressForm}>
               Bevitel
            </AdbancedButton>
         </AdressFormStyle>
      </AdressContainer>
   )
}

export default Adress
