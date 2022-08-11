import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { Card } from '@mui/material'
import { useAppSelector } from '../../app/hooks'

const ProductCard = () => {
   const isMobileView = useAppSelector(state => state.mobile.isMobile)
   return (
      <Card sx={{ width: 250 }}>
         <Skeleton sx={{ height: 175 }} animation='wave' variant='rectangular' />
         <Skeleton sx={{ marginTop: 3, marginLeft: 2.5 }} animation='wave' height={20} width='80%' />
         <Skeleton sx={{ marginLeft: 2.5 }} animation='wave' height={20} width='60%' />
         <Skeleton sx={{ marginLeft: 2.5 }} animation='wave' height={20} width='40%' />
         <Skeleton
            sx={{ marginLeft: 2.5, marginTop: 1.5, marginRight: 1 }}
            animation='wave'
            height={32}
            width='52%'
         />
         {isMobileView && (
            <Skeleton
               sx={{ marginLeft: 2.5, marginTop: 2 }}
               animation='wave'
               variant='rectangular'
               height={42}
               width='55%'
            />
         )}
      </Card>
   )
}

export default ProductCard
