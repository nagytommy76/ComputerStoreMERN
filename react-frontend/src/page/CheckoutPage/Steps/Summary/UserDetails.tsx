import React from 'react'
import { useAppSelector } from '../../../../app/hooks'

import { StyledCard, CardContainer } from './Styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

const UserDetails = () => {
   const userDetails = useAppSelector((state) => state.userDetails.userDetails)
   return (
      <CardContainer>
         <StyledCard>
            <CardContent>
               <Typography variant='h5'>Számlázási adatok:</Typography>
               <Divider />
               <Typography mt={1} variant='body1'>
                  {userDetails.firstName} {userDetails.lastName}
               </Typography>
               <Typography variant='body2'>
                  {userDetails.address.zipCode} {userDetails.address.city} {userDetails.address.street}{' '}
                  {userDetails.address.houseNumber}. {userDetails.address.floor} {userDetails.address.door}
               </Typography>
               <Typography variant='caption'>Tel.: {userDetails.phone}</Typography>
            </CardContent>
         </StyledCard>
         <StyledCard>
            <CardContent>
               <Typography variant='h5'>Szállítási adatok:</Typography>
               <Divider />
               <Typography mt={1} variant='body1'>
                  {userDetails.firstName} {userDetails.lastName}
               </Typography>
               <Typography variant='body2'>
                  {userDetails.address.zipCode} {userDetails.address.city} {userDetails.address.street}{' '}
                  {userDetails.address.houseNumber}. {userDetails.address.floor} {userDetails.address.door}
               </Typography>
               <Typography variant='caption'>Tel.: {userDetails.phone}</Typography>
            </CardContent>
         </StyledCard>
      </CardContainer>
   )
}

export default UserDetails
