import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
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
import { LocationType } from '../../BaseTypes'

import TextField from '@mui/material/TextField'

const AddToCart = React.lazy(() => import('./AddToCart/AddToCart'))
const ImageSlider = React.lazy(() => import('./ImageSlider/ImageSlider'))
const TopNavigation = React.lazy(() => import('./TopNavigation/TopNavigation'))
const Rating = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/AddNew/Rating'))
const CartSnackbar = React.lazy(() => import('../CartSnackbar/CartSnackbar'))

const ProductDetails: React.FC = ({ children }) => {
   useEffect(() => {
      handleAxiosRequest()
   }, [])
   let location = useLocation()
   // const { manufacturer, price, type, typeCode, details } = location.state as LocationType
   const test = {
      manufacturer: 'semmi',
      price: 222,
      type: 'sesfdsfs',
      typeCode: '233223',
      details: {
         warranity: 32,
         manufacturerPageUrl: 'dfsdhl',
         description: 'sddasadsdas',
      },
   }
   const { manufacturer, price, type, typeCode, details } = test

   const handleAxiosRequest = async () => {
      const foundProductDetails = await axios.get(`hdd/details?productId=6221070207d5ed2968c3b8b7`)
      console.log(foundProductDetails)
   }

   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)

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
