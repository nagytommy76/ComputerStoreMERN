import React from 'react'
import { StyledCard, ImageContainer, Image, CardBody } from './CardStyle'
import { VgaType } from '../../Vga/Vga'

const ProductCard: React.FC<VgaType> = ({ itemNumber, type, typeCode, manufacturer, price, pictureUrls }) => {
   return (
      <StyledCard>
         <ImageContainer>
            <Image src={pictureUrls[0]} alt='' />
         </ImageContainer>
         <CardBody>
            <h5>
               {manufacturer} {type} {typeCode}
            </h5>
            <p>{price} Ft</p>
         </CardBody>
      </StyledCard>
   )
}

export default ProductCard
