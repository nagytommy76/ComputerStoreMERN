import React, { useEffect, useState } from 'react'
import { axiosInstance, isAxiosError } from '../../../AxiosSetup/AxiosInstance'

import { ContainerStyle } from './Styles'
import Typography from '@mui/material/Typography'

const HighlightSection = () => {
   const [CpuHighlight, setCpuHighlight] = useState<HighlightDataType>([])
   const getHighlights = async () => {
      try {
         const response = await axiosInstance.get('/highlight/get-highlight')
         console.log(response.data)
         setCpuHighlight(response.data.CpuHighlights)
      } catch (error) {
         if (isAxiosError(error)) {
            console.log(error.response?.data)
         }
      }
   }
   useEffect(() => {
      getHighlights()
   }, [])

   return (
      <ContainerStyle id='highlights'>
         <Typography color='secondary' variant='h4'>
            Kiemelt termékek jönnek ide
         </Typography>
      </ContainerStyle>
   )
}

export default HighlightSection

type HighlightDataType = {
   _id: string
   manufacturer: string
   pictureUrls: string[]
   price: number
   type: string
   typeCode: string
   ratingValues: number
}[]
