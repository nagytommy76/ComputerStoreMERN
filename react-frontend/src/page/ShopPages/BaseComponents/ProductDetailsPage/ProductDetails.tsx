import React from 'react'
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
   ManufacturerUrlPage,
   BottomStyle,
} from './DetailsStyle'
import { useAppSelector } from '../../../../app/hooks'

import TextField from '@mui/material/TextField'

const AddToCart = React.lazy(() => import('./AddToCart/AddToCart'))
const ImageSlider = React.lazy(() => import('./ImageSlider/ImageSlider'))
const TopNavigation = React.lazy(() => import('./TopNavigation/TopNavigation'))
const Rating = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/AddNew/Rating'))
const CartSnackbar = React.lazy(() => import('../CartSnackbar/CartSnackbar'))

const ProductDetails: React.FC<{
   details: any
   _id: string
   pictureUrls: string[]
   manufacturer: string
   price: number
   type: string
   typeCode: string
   productType: string
}> = ({ _id, details, pictureUrls, manufacturer, price, type, typeCode, productType, children }) => {
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)

   return (
      <DetailsPage>
         <TopNavigation />
         <HeadSection>
            <ImageSlider pictureUrls={pictureUrls} />
            <RightHeaderStyle isDarkTheme={isDarkTheme}>
               <TopHeaderTitle>
                  {manufacturer} {type} {typeCode}
               </TopHeaderTitle>
               <HorizontalLineStyle />
               <PriceAndCartStyle>
                  <AddToCart
                     _id={_id}
                     manufacturer={manufacturer}
                     pictureUrls={pictureUrls}
                     price={price}
                     productType={productType}
                     type={type}
                     typeCode={typeCode}
                  />
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
               <TextField
                  name='description'
                  fullWidth
                  multiline
                  minRows={18}
                  variant='outlined'
                  value={details.description}
               />
            </DescriptionStyle>
            {children}
         </BodySection>
         <BottomStyle>
            <Rating />
         </BottomStyle>
         <CartSnackbar />
      </DetailsPage>
   )
}

export default ProductDetails
