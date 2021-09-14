import React, { useRef, useState, useContext, useEffect } from 'react'
import styles from './CardExpand.module.css'
import NumberFormat from 'react-number-format'
import { useHistory } from 'react-router'
import { VgaProductContext } from '../../Vga/VgaContext/VgaProductContext'
import { useAppSelector } from '../../../../app/hooks'

import { StyledCard, ImageContainer, Image, CardBody, SubTitleStyle, PriceStyle } from './CardStyle'
import { CSSTransition } from 'react-transition-group'
import CardFooter from './CardFooter'

const ProductCard: React.FC<ProductCardType> = ({ details, type, typeCode, manufacturer, pictureUrls }) => {
   const [isCardExpanded, setIsCardExpanded] = useState<boolean>(false)
   const [quantityToCart, setQuantityToCart] = useState<string>('1')
   const isMobile = useAppSelector((state) => state.mobile.isMobile)

   const history = useHistory()
   const expandRef = useRef(null)
   const { _id, productName, price } = useContext(VgaProductContext)

   useEffect(() => {
      if (isMobile) setIsCardExpanded(true)
   }, [isMobile])

   // Esetleg később ezt átadni mint prop, hogy dinamikus legyen
   const routeToDetailsPage = () => {
      history.push({
         pathname: '/vga/vga-details',
         state: { _id, details, pictureUrls, type, manufacturer, price, typeCode }
      })
   }

   return (
      <StyledCard
         isCardExpanded={isCardExpanded}
         onMouseEnter={() => setIsCardExpanded(true)}
         onMouseLeave={() => setIsCardExpanded(false)}>
         <ImageContainer onClick={() => routeToDetailsPage()}>
            <Image src={pictureUrls[0]} alt='' />
         </ImageContainer>
         <CardBody onClick={() => routeToDetailsPage()}>
            <SubTitleStyle>{productName}</SubTitleStyle>
            <PriceStyle>
               <NumberFormat value={price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
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

type ProductCardType = {
   _id?: string
   itemNumber?: string
   manufacturer: string
   pictureUrls: string[]
   price: number
   type: string
   typeCode?: string
   details: any
}

export default ProductCard
