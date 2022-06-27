import React, { useEffect, useState, lazy } from 'react'
import { axiosInstance, isAxiosError } from '../../../AxiosSetup/AxiosInstance'

import { ContainerStyle } from './Styles'

const BaseHighlight = lazy(() => import('./BaseHighlight/BaseHighlight'))

const HighlightSection = () => {
   const [CpuHighlight, setCpuHighlight] = useState<HighlightDataType>([])
   const [VgaHighlight, setVgaHighlight] = useState<HighlightDataType>([])
   const [MemoryHighlight, setMemoryHighlight] = useState<HighlightDataType>([])
   const getHighlights = async () => {
      try {
         const response = await axiosInstance.get('/highlight/get-highlight')
         setCpuHighlight(response.data.CpuHighlights)
         setVgaHighlight(response.data.VgaHighlights)
         setMemoryHighlight(response.data.MemoryHighlights)
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
         <BaseHighlight highlightData={CpuHighlight} productType='cpu' />
         <BaseHighlight highlightData={VgaHighlight} productType='vga' borderColor='#7B241C' />
         <BaseHighlight highlightData={MemoryHighlight} productType='memory' borderColor='#566573 ' />
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
