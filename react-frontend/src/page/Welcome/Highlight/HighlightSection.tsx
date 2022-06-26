import React, { useEffect, useState, lazy } from 'react'
import { axiosInstance, isAxiosError } from '../../../AxiosSetup/AxiosInstance'

import { ContainerStyle } from './Styles'

const CpuHighlightComponent = lazy(() => import('./Cpu/CpuHighlight'))

const HighlightSection = () => {
   const [CpuHighlight, setCpuHighlight] = useState<HighlightDataType>([])
   const getHighlights = async () => {
      try {
         const response = await axiosInstance.get('/highlight/get-highlight')
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
         <CpuHighlightComponent cpuHighlights={CpuHighlight} />
      </ContainerStyle>
   )
}

export default HighlightSection

export type HighlightDataType = {
   _id: string
   manufacturer: string
   pictureUrls: string[]
   price: number
   type: string
   typeCode: string
   ratingValues: { _id: string }[]
}[]
