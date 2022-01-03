import React from 'react'
import { styled } from '@mui/material'

import Skeleton from '@mui/material/Skeleton'

const SummarySuspense = () => {
   return (
      <Container>
         <AddressCards>
            <Skeleton variant='rectangular' width={300} height={140} animation='wave' />
            <Skeleton variant='rectangular' width={300} height={140} animation='wave' />
         </AddressCards>
         <Skeleton variant='text' width={175} height={170} animation='wave' />
         <Skeleton variant='text' width={210} height={70} animation='wave' />
      </Container>
   )
}

const Container = styled('section')({
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center'
})

const AddressCards = styled('section')({
   width: '85%',
   margin: '1.4rem 0',
   display: 'flex',
   justifyContent: 'space-between'
})

export default SummarySuspense
