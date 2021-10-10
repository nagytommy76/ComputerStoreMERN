import React from 'react'
import Card from '@mui/material/Card'
import Skeleton from '@mui/material/Skeleton'

const Style = { margin: '2rem auto' }

const FilterSuspense = () => {
   return (
      <Card sx={{ width: 270, minHeight: '100%' }}>
         <Skeleton height={30} width='50%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={50} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={50} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={50} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
      </Card>
   )
}

export default FilterSuspense
