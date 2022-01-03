import React from 'react'

import { FormControlRow, AdressFormStyle } from '../../page/CheckoutPage/Steps/AddressForm/AdressStyle'
import Skeleton from '@mui/material/Skeleton'

const AddressFormSuspense = () => {
   return (
      <AdressFormStyle darkTheme={false}>
         <Skeleton sx={{ margin: '2.5rem 0' }} variant='text' width={350} height={75} animation='wave' />
         <FormControlRow>
            <Skeleton variant='text' width={345} height={100} animation='wave' />
            <Skeleton variant='text' width={345} height={100} animation='wave' />
         </FormControlRow>
         <FormControlRow>
            <Skeleton variant='text' width={345} height={100} animation='wave' />
            <Skeleton variant='text' width={345} height={100} animation='wave' />
         </FormControlRow>
         <FormControlRow>
            <Skeleton variant='text' width={345} height={100} animation='wave' />
            <Skeleton variant='text' width={345} height={100} animation='wave' />
         </FormControlRow>
         <FormControlRow>
            <Skeleton variant='text' width={230} height={100} animation='wave' />
            <Skeleton variant='text' width={230} height={100} animation='wave' />
            <Skeleton variant='text' width={230} height={100} animation='wave' />
         </FormControlRow>
         <Skeleton variant='rectangular' width={200} height={60} animation='wave' />
      </AdressFormStyle>
   )
}

export default AddressFormSuspense
