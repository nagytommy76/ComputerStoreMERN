import React from 'react'
import {
   VgaDetailsPage,
   HeadSection,
   LeftHeaderStyle,
   TopHeaderTitle,
   HorizontalLineStyle,
   StyledNumberFormat,
   WarranityStyle,
   PriceAndCartStyle
} from './DetailsStyle'
import { useLocation } from 'react-router'
import { vgaDetailType } from '../VgaTypes'
import ImageSlider from './ImageSlider/ImageSlider'
import { useAppSelector } from '../../../../app/hooks'

import AddToCart from '../../BaseComponents/AddToCart/AddToCart'

const VgaDetails = () => {
   const {
      state: { details, pictureUrls, type, manufacturer, price, typeCode }
   } = useLocation<LocationType>()
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   return (
      <VgaDetailsPage>
         <HeadSection>
            <ImageSlider images={pictureUrls} />
            <LeftHeaderStyle isDarkTheme={isDarkTheme}>
               <TopHeaderTitle>
                  {manufacturer} {type} {typeCode}
               </TopHeaderTitle>
               <HorizontalLineStyle />
               <PriceAndCartStyle>
                  <AddToCart />
                  <StyledNumberFormat
                     renderText={(value: number, props: any) => <h1 {...props}>{value}</h1>}
                     value={price}
                     thousandSeparator=' '
                     suffix=' Ft'
                     displayType='text'
                  />
               </PriceAndCartStyle>
               <HorizontalLineStyle />
               <WarranityStyle>{details.warranity} hónap gyári garanciával</WarranityStyle>
            </LeftHeaderStyle>
         </HeadSection>
      </VgaDetailsPage>
   )
}

type LocationType = {
   details: vgaDetailType
   pictureUrls: string[]
   type: string
   manufacturer: string
   price: number
   typeCode: string
}

export default VgaDetails
