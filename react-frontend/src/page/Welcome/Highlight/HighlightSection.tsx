import React, { useEffect, useState, lazy } from 'react'
import { axiosInstance, isAxiosError } from '../../../AxiosSetup/AxiosInstance'

import { ContainerStyle } from './Styles'

const BaseHighlight = lazy(() => import('./BaseHighlight/BaseHighlight'))

const HighlightSection = () => {
   const [CpuHighlight, setCpuHighlight] = useState<HighlightDataType>([])
   const [VgaHighlight, setVgaHighlight] = useState<HighlightDataType>([])
   const [MemoryHighlight, setMemoryHighlight] = useState<HighlightDataType>([])
   const [HDDHighlight, setHDDHighlight] = useState<HighlightDataType>([])
   const [SSDHighlight, setSSDHighlight] = useState<HighlightDataType>([])
   const getHighlights = async () => {
      try {
         const response = await axiosInstance.get('/highlight/get-highlight')
         setCpuHighlight(response.data.CpuHighlights)
         setVgaHighlight(response.data.VgaHighlights)
         setMemoryHighlight(response.data.MemoryHighlights)
         setHDDHighlight(response.data.HddHighlights)
         setSSDHighlight(response.data.SSDHighlights)
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
         <BaseHighlight highlightData={HDDHighlight} productType='hdd' borderColor='#07b42d ' />
         <BaseHighlight highlightData={SSDHighlight} productType='ssd' borderColor='#c70323 ' />
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
