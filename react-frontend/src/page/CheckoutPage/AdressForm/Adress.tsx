import React, { useState } from 'react'
import BaseInput from '../../Auth/BaseForm/BaseInput/BaseInput'
import { FormConrolStyle } from '../../Auth/BaseForm/FormStyle'

const Adress = () => {
   const submitAdressForm = (event: React.FormEvent) => {
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
      <form onSubmit={submitAdressForm}>
         <FormConrolStyle>
            <BaseInput
               labelText='Vezetéknév'
               onChangeEvent={(event: any) => setUserDetails(event.target.value)}
               placeHolder='Vezetéknév...'
               value={userDetails.firstName}
            />
         </FormConrolStyle>
      </form>
   )
}

type UserDetails = {
   firstName: string
   lastName: string
   phone: string
   address: {
      zipCode: number
      city: string
      street: string
      houseNumber: string
      floor?: string
      door?: string
   }
}

export default Adress
