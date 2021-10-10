import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { Card } from '@mui/material'

const ProductCard = () => {
   return (
      <Card sx={{ width: 250, m: 2 }}>
         <Skeleton sx={{ height: 175 }} animation='wave' variant='rectangular' />
         <Skeleton sx={{ marginTop: 1, marginLeft: 1 }} animation='wave' height={20} width='80%' />
         <Skeleton sx={{ marginLeft: 1 }} animation='wave' height={20} width='60%' />
         <Skeleton sx={{ marginLeft: 1 }} animation='wave' height={20} width='40%' />
         <Skeleton sx={{ marginLeft: 'auto', marginTop: 3, marginRight: 1 }} animation='wave' height={20} width='50%' />
      </Card>
   )
}

export default ProductCard
