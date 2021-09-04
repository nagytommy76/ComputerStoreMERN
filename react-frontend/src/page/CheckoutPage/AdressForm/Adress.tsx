import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { AdressFormStyle, FormControlRow, StyledHeading, BackgroundImageStyle, AdressContainer } from './AdressStyle'
import AddressFormBacground from './AdressFormBackgound.jpg'
import { UserDetails } from '../CheckoutTypes'
import axios from 'axios'
import { ValidationError, ValidationErrorWithAxiosError } from '../../Admin/Vga/Types'

const TextOrNumberInput = React.lazy(() => import('../../Admin/Components/InputFields/TextOrNumberInput'))
const AdbancedButton = React.lazy(() => import('../../BaseElements/AdvancedButton/AdvancedButton'))

const Adress = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
   const setErrorMsg = (param: string) => validationErrors.find((x: any) => x.param === param)?.msg

   const submitAdressForm = (event: React.MouseEvent) => {
      event.preventDefault()
      axios
         .post('/auth/insert-details', userDetails)
         .then((result) => console.log(result))
         .catch((errors: ValidationErrorWithAxiosError) => {
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
                  errorMsg={setErrorMsg('firstName')}
               />
               <TextOrNumberInput
                  labelText='Keresztnév *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, lastName: event.target.value })
                  }
                  placeHolder='Keresztnév...'
                  value={userDetails.lastName}
                  errorMsg={setErrorMsg('lastName')}
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
                  errorMsg={setErrorMsg('phone')}
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
                  errorMsg={setErrorMsg('address.zipCode')}
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
                  errorMsg={setErrorMsg('address.city')}
               />
               <TextOrNumberInput
                  labelText='Utca *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, street: event.target.value } })
                  }
                  placeHolder='Utca...'
                  value={userDetails.address.street}
                  errorMsg={setErrorMsg('address.street')}
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
                  errorMsg={setErrorMsg('address.houseNumber')}
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
            <AdbancedButton onClickEvent={submitAdressForm}>Bevitel</AdbancedButton>
         </AdressFormStyle>
      </AdressContainer>
   )
}

export default Adress
