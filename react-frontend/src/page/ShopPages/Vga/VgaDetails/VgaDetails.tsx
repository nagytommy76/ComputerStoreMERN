import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { VgaDetailsPage, HeadSection } from './DetailsStyle'
import { VgaType } from '../VgaTypes'
import ImageSlider from './ImageSlider/ImageSlider'

const VgaDetails = () => {
   const { vgaItemName } = useParams<{ vgaItemName: string }>()
   const [vgaDetails, setVgaDeatils] = useState<VgaType | null>(null)
   useEffect(() => {
      if (vgaItemName !== '') {
         axios.get(`/vga/vga-details/${vgaItemName}`).then((vgaDetail: AxiosResponse<VgaType>) => {
            if (vgaDetail) {
               setVgaDeatils(vgaDetail.data)
            }
         })
      }
   }, [vgaItemName])
   return (
      <VgaDetailsPage>
         <HeadSection>
            <ImageSlider images={vgaDetails?.pictureUrls} />
            <h2>{vgaDetails?.details?.description}</h2>
         </HeadSection>
      </VgaDetailsPage>
   )
}

export default VgaDetails
