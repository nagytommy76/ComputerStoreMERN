import React, { useContext } from 'react'
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
import { VgaDetailsContext } from '../../Vga/VgaDetails/VgaDetailsContext/DetailsContext'

const AddToCart = React.lazy(() => import('./AddToCart/AddToCart'))
const ImageSlider = React.lazy(() => import('./ImageSlider/ImageSlider'))

const ProductDetails: React.FC = ({ children }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const { manufacturer, price, type, typeCode, details } = useContext(VgaDetailsContext)
   return (
      <DetailsPage>
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
