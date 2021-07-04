import React from 'react'
import { StyledCard, ImageContainer, Image, CardBody, SubTitleStyle, PriceStyle } from './CardStyle'
import NumberFormat from 'react-number-format'
import { VgaType } from '../../Vga/Vga'

const ProductCard: React.FC<VgaType> = ({ itemNumber, type, typeCode, manufacturer, price, pictureUrls }) => {
   return (
      <StyledCard>
         <ImageContainer>
            <Image src={pictureUrls[0]} alt='' />
         </ImageContainer>
         <CardBody>
            <SubTitleStyle>
               {manufacturer} {type} {typeCode}
            </SubTitleStyle>
            <PriceStyle>
               <NumberFormat value={price} displayType='text' thousandSeparator={true} suffix='Ft' />
            </PriceStyle>
         </CardBody>
      </StyledCard>
   )
}

export default ProductCard
