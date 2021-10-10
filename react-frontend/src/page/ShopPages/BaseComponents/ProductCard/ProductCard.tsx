import React, { useRef, useState, useContext, useEffect } from 'react'
import styles from './CardExpand.module.css'
import NumberFormat from 'react-number-format'
import { useHistory } from 'react-router'
import { ProductContext } from '../../Context/ShopContext'
import { useAppSelector } from '../../../../app/hooks'

import { StyledCard, ImageContainer, Image, CardBody, SubTitleStyle, PriceStyle } from './CardStyle'
import { CSSTransition } from 'react-transition-group'

const RatingCount = React.lazy(() => import('./Ratings/RatingCount'))
const CardFooter = React.lazy(() => import('./CardFooter'))

const ProductCard: React.FC<ProductCardType> = ({
   details,
   type,
   typeCode,
   manufacturer,
   pictureUrls,
   pathNameForDetailsURL,
   ratingCount
}) => {
   const [isCardExpanded, setIsCardExpanded] = useState<boolean>(true)
   const [quantityToCart, setQuantityToCart] = useState<string>('1')
   const isMobile = useAppSelector((state) => state.mobile.isMobile)

   const history = useHistory()
   const expandRef = useRef(null)
   const { _id, productName, price } = useContext(ProductContext)

   useEffect(() => {
      if (!isMobile) setIsCardExpanded(false)
   }, [isMobile])

   const routeToDetailsPage = () => {
      history.push({
         pathname: `/${pathNameForDetailsURL}/${pathNameForDetailsURL}-details`,
         state: { _id, details, pictureUrls, type, manufacturer, price, typeCode, productType: pathNameForDetailsURL }
      })
   }

   return (
      <StyledCard
         isCardExpanded={isCardExpanded}
         onMouseEnter={() => setIsCardExpanded(true)}
         onMouseLeave={() => setIsCardExpanded(false)}>
         {ratingCount !== undefined && ratingCount > 0 && <RatingCount ratingCount={ratingCount} />}
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
               productType={pathNameForDetailsURL}
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
   ratingCount?: number
   details: any
   pathNameForDetailsURL: string
}

export default ProductCard
