import React, { useContext, ReactNode } from 'react'
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

import NumberFormat from 'react-number-format'
import TextField from '@mui/material/TextField'
import DetailsContext from '../../Context/DetailsContext'

const AddToCart = React.lazy(() => import('./AddToCart/AddToCart'))
const ImageSlider = React.lazy(() => import('./ImageSlider/ImageSlider'))
const TopNavigation = React.lazy(() => import('./TopNavigation/TopNavigation'))
const Rating = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/AddNew/Rating'))
const CartSnackbar = React.lazy(() => import('../CartSnackbar/CartSnackbar'))
const Chart = React.lazy(() => import('./Charts/Chart'))

const ProductDetails: React.FC<{ children: ReactNode }> = ({ children }) => {
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)
   const { manufacturer, type, typeCode, details, price } = useContext(DetailsContext)
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
                  <NumberFormat
                     value={price}
                     thousandSeparator=' '
                     suffix=' Ft'
                     displayType='text'
                     renderText={(value: string) => (
                        <StyledNumberFormat variant='inherit'>{value}</StyledNumberFormat>
                     )}
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
                  disabled
                  name='description'
                  fullWidth
                  multiline
                  minRows={10}
                  variant='filled'
                  value={details.description}
               />
            </DescriptionStyle>
            {children}
         </BodySection>
         <Chart />
         <BottomStyle>
            <Rating />
         </BottomStyle>
         <CartSnackbar />
      </DetailsPage>
   )
}

export default ProductDetails
