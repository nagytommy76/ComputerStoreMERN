import React from 'react'
import { useLocation } from 'react-router'
import {
   DetailsPage,
   HeadSection,
   RightHeaderStyle,
   TopHeaderTitle,
   HorizontalLineStyle,
   StyledNumberFormat,
   WarranityStyle,
   PriceAndCartStyle,
   BodySection,
   DescriptionStyle,
   ManufacturerUrlPage
} from './DetailsStyle'
import { useAppSelector } from '../../../../app/hooks'
import { LocationType } from '../../Vga/VgaDetails/VgaDetails'

const AddToCart = React.lazy(() => import('./AddToCart/AddToCart'))
const ImageSlider = React.lazy(() => import('./ImageSlider/ImageSlider'))
const TopNavigation = React.lazy(() => import('./TopNavigation/TopNavigation'))

const ProductDetails: React.FC = ({ children }) => {
   let location = useLocation<LocationType>()

   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const { manufacturer, price, type, typeCode, details } = location.state

   return (
      <DetailsPage>
         <TopNavigation />
         <HeadSection>
            <ImageSlider />
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
               <WarranityStyle>{details.warranity} hónap gyári garanciával</WarranityStyle>
               <ManufacturerUrlPage target='_blank' href={details.manufacturerPageUrl}>
                  Ugrás a gyártói honlapra
               </ManufacturerUrlPage>
            </RightHeaderStyle>
         </HeadSection>
         <BodySection isDarkTheme={isDarkTheme}>
            <DescriptionStyle>
               <p>{details.description}</p>
            </DescriptionStyle>
            {children}
         </BodySection>
      </DetailsPage>
   )
}

export default ProductDetails
