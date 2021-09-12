import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { AdressFormStyle, FormControlRow, StyledHeading, BackgroundImageStyle, AdressContainer } from './AdressStyle'
import AddressFormBacground from './AdressFormBackgound.jpg'
import { UserDetails } from '../CheckoutTypes'
import axios from 'axios'
import { ValidationErrorWithAxiosError } from '../../Admin/Vga/Types'
import { ValidationError } from '../../Admin/AdminTypes'
import { errorMsg } from '../../Helpers/SetErrorMsg'

const TextOrNumberInput = React.lazy(() => import('../../Admin/Components/InputFields/TextOrNumberInput'))
const AdbancedButton = React.lazy(() => import('../../BaseElements/AdvancedButton/AdvancedButton'))

const Adress = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
   const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState<boolean>(false)

   const submitAdressForm = (event: React.MouseEvent) => {
      event.preventDefault()
      axios.post('/auth/insert-details', { userDetails }).catch((errors: ValidationErrorWithAxiosError) => {
         console.log(errors.response?.data.errors)
         if (errors.response?.data) setValidationErrors(errors.response.data.errors)
      })
   }
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
         <BackgroundImageStyle backgroundImage={AddressFormBacground} />
         <AdressFormStyle darkTheme={isDarkTheme}>
            <StyledHeading>Szállítási adatok</StyledHeading>
            <FormControlRow>
               <TextOrNumberInput
                  labelText='Vezetéknév *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, firstName: event.target.value })
                  }
                  placeHolder='Vezetéknév...'
                  value={userDetails.firstName}
                  errorMsg={errorMsg(validationErrors, 'userDetails.firstName')}
               />
               <TextOrNumberInput
                  labelText='Keresztnév *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, lastName: event.target.value })
                  }
                  placeHolder='Keresztnév...'
                  value={userDetails.lastName}
                  errorMsg={errorMsg(validationErrors, 'userDetails.lastName')}
               />
            </FormControlRow>
            <FormControlRow>
               <TextOrNumberInput
                  inputType='tel'
                  labelText='Telefonszám *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, phone: event.target.value })
                  }
                  placeHolder='36701234657'
                  value={userDetails.phone}
                  errorMsg={errorMsg(validationErrors, 'userDetails.phone')}
                  isPhoneField={true}
               />
               <TextOrNumberInput
                  min='1000'
                  max='9999'
                  inputType='number'
                  labelText='Irányítószám *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: { ...userDetails.address, zipCode: parseInt(event.target.value) || userDetails.address.zipCode }
                     })
                  }
                  placeHolder='Irányítószám...'
                  value={userDetails.address.zipCode}
                  errorMsg={errorMsg(validationErrors, 'userDetails.address.zipCode')}
                  isZipCode={true}
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
