import React, { useRef, useState } from 'react'
import { StyledCard, ImageContainer, Image, CardBody, SubTitleStyle, PriceStyle } from './CardStyle'
import NumberFormat from 'react-number-format'
import { VgaType } from '../../Vga/Vga'

import styles from './CardExpand.module.css'
import { CSSTransition } from 'react-transition-group'
import CardFooter from './CardFooter'

const ProductCard: React.FC<VgaType> = ({ itemNumber, type, typeCode, manufacturer, price, pictureUrls }) => {
   const [isCardExpanded, setIsCardExpanded] = useState<boolean>(false)
   const [quantityToCart, setQuantityToCart] = useState<string>('1')
   const expandRef = useRef(null)
   return (
      <StyledCard
         isCardExpanded={isCardExpanded}
         onMouseEnter={() => setIsCardExpanded(true)}
         onMouseLeave={() => setIsCardExpanded(false)}>
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
         <CSSTransition
            in={isCardExpanded}
            unmountOnExit
            mountOnEnter
            timeout={150}
            nodeRef={expandRef}
            classNames={{
               enter: styles.ExpandEnter,
               enterActive: styles.ExpandEnterActive,
               exit: styles.ExpandExit,
               exitActive: styles.ExpandExitActive
            }}>
            <CardFooter
               quantityValue={quantityToCart}
               changeEvent={(event) => setQuantityToCart(event.target.value)}
               reference={expandRef}
            />
         </CSSTransition>
      </StyledCard>
   )
}

export default ProductCard
