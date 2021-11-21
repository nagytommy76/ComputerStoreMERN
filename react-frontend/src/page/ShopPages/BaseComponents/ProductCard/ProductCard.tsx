import React, { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../../Context/ShopContext'
import { useAppSelector } from '../../../../app/hooks'

import NumberFormat from 'react-number-format'
import { useNavigate } from 'react-router-dom'

import { SubTitleStyle, CustomCard } from './CardStyle'
import Collapse from '@mui/material/Collapse'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

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
   const isMobile = useAppSelector((state) => state.mobile.isMobile)

   const navigate = useNavigate()
   const { _id, productName, price } = useContext(ProductContext)

   useEffect(() => {
      if (!isMobile) setIsCardExpanded(false)
   }, [isMobile])

   const routeToDetailsPage = () => {
      navigate(`/${pathNameForDetailsURL}/${pathNameForDetailsURL}-details`, {
         state: { _id, details, pictureUrls, type, manufacturer, price, typeCode, productType: pathNameForDetailsURL }
      })
   }

   return (
      <CustomCard
         raised={isCardExpanded}
         isCardExpanded={isCardExpanded}
         sx={{ maxWidth: 250, minHeight: 350 }}
         onMouseEnter={() => setIsCardExpanded(true)}
         onMouseLeave={() => setIsCardExpanded(false)}>
         {ratingCount !== undefined && ratingCount > 0 && <RatingCount ratingCount={ratingCount} />}
         <CardMedia
            sx={{ cursor: 'pointer' }}
            onClick={() => routeToDetailsPage()}
            component='img'
            height='175'
            image={pictureUrls[0]}
            alt='green iguana'
         />
         <CardContent sx={{ cursor: 'pointer' }} onClick={() => routeToDetailsPage()}>
            <SubTitleStyle>{productName}</SubTitleStyle>
            <Typography variant='h5' color='primary'>
               <NumberFormat value={price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            </Typography>
         </CardContent>
         <Collapse
            mountOnEnter
            unmountOnExit
            sx={{ transition: 'all .15s' }}
            timeout={{ appear: 100, enter: 100, exit: 100 }}
            in={isCardExpanded}
            orientation='vertical'>
            <CardFooter productType={pathNameForDetailsURL} />
         </Collapse>
      </CustomCard>
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
