import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import BaseInput from '../../Auth/BaseForm/BaseInput/BaseInput'
import { AdressFormStyle, FormControlRow, StyledHeading, BackgroundImageStyle, AdressContainer } from './AdressStyle'
import AddressFormBacground from './AdressFormBackgound.jpg'
import { UserDetails } from '../CheckoutTypes'

const AdbancedButton = React.lazy(() => import('../../BaseElements/AdvancedButton/AdvancedButton'))

const Adress = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const submitAdressForm = (event: React.MouseEvent) => {
      event.preventDefault()
      console.log('Adatok elküldve')
   }
   const [userDetails, setUserDetails] = useState<UserDetails>({
      firstName: '',
      lastName: '',
      phone: '',
      address: {
         zipCode: 0,
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
               <BaseInput
                  labelText='Vezetéknév *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, firstName: event.target.value })
                  }
                  placeHolder='Vezetéknév...'
                  value={userDetails.firstName}
               />
               <BaseInput
                  labelText='Keresztnév *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, lastName: event.target.value })
                  }
                  placeHolder='Keresztnév...'
                  value={userDetails.lastName}
               />
            </FormControlRow>
            <FormControlRow>
               <BaseInput
                  labelText='Telefonszám *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, phone: event.target.value })
                  }
                  placeHolder='Telefonszám...'
                  value={userDetails.phone}
               />
               <BaseInput
                  type='number'
                  labelText='Irányítószám *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({
                        ...userDetails,
                        address: { ...userDetails.address, zipCode: parseInt(event.target.value) }
                     })
                  }
                  placeHolder='Irányítószám...'
                  value={userDetails.address.zipCode}
               />
            </FormControlRow>
            <FormControlRow>
               <BaseInput
                  labelText='Város *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, city: event.target.value } })
                  }
                  placeHolder='Város...'
                  value={userDetails.address.city}
               />
               <BaseInput
                  labelText='Utca *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, street: event.target.value } })
                  }
                  placeHolder='Utca...'
                  value={userDetails.address.street}
               />
            </FormControlRow>
            <FormControlRow>
               <BaseInput
                  labelText='Házszám *'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, houseNumber: event.target.value } })
                  }
                  placeHolder='Házszám...'
                  value={userDetails.address.houseNumber}
               />
               <BaseInput
                  labelText='Emelet'
                  onChangeEvent={(event: React.ChangeEvent<HTMLInputElement>) =>
                     setUserDetails({ ...userDetails, address: { ...userDetails.address, floor: event.target.value } })
                  }
                  placeHolder='Emelet...'
                  value={userDetails.address.floor}
               />
               <BaseInput
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
