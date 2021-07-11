import React from 'react'
import {
   DetailsPage,
   HeadSection,
   RightHeaderStyle,
   TopHeaderTitle,
   HorizontalLineStyle,
   StyledNumberFormat,
   WarranityStyle,
   PriceAndCartStyle
} from './DetailsStyle'
import ImageSlider from './ImageSlider/ImageSlider'
import AddToCart from './AddToCart/AddToCart'
import { useAppSelector } from '../../../../app/hooks'

const ProductDetails: React.FC<DetailsPropTypes> = ({ _id, warranity, pictureUrls, type, manufacturer, price, typeCode }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <DetailsPage>
         <HeadSection>
            <ImageSlider images={pictureUrls} />
            <RightHeaderStyle isDarkTheme={isDarkTheme}>
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
               <WarranityStyle>{warranity} hónap gyári garanciával</WarranityStyle>
            </RightHeaderStyle>
         </HeadSection>
      </DetailsPage>
   )
}

type DetailsPropTypes = {
   _id: string
   warranity: string | number
   pictureUrls: string[]
   type: string
   manufacturer: string
   price: number
   typeCode: string
}

export default ProductDetails
