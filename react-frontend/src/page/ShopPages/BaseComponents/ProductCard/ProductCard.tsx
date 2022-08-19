import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../../app/hooks'

import NumberFormat from 'react-number-format'
import { useNavigate } from 'react-router-dom'

import { SubTitleStyle, CustomCard } from './CardStyle'
import Fade from '@mui/material/Fade'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import RatingCount from './Ratings/RatingCount'
import CardFooter from './CardFooter'

const ProductCard: React.FC<ProductCardType> = ({
   _id,
   price,
   type,
   typeCode,
   manufacturer,
   pictureUrls,
   pathNameForDetailsURL,
   ratingCount,
}) => {
   const navigate = useNavigate()
   const [isCardExpanded, setIsCardExpanded] = useState<boolean>(true)
   const isMobile = useAppSelector(state => state.mobile.isMobile)

   useEffect(() => {
      if (!isMobile) setIsCardExpanded(false)
      else setIsCardExpanded(true)
   }, [isMobile])

   const routeToDetailsPage = () => {
      navigate(`/${pathNameForDetailsURL}/${pathNameForDetailsURL}-details/${_id}`)
   }

   const onMouseEnterEvent = () => {
      if (!isMobile) setIsCardExpanded(true)
   }
   const onMouseLeaveEvent = () => {
      if (!isMobile) setIsCardExpanded(false)
   }

   return (
      <CustomCard
         raised={isCardExpanded}
         sx={{ maxWidth: 250, minHeight: 350 }}
         onMouseEnter={onMouseEnterEvent}
         onMouseLeave={onMouseLeaveEvent}
      >
         {ratingCount !== undefined && ratingCount > 0 && <RatingCount ratingCount={ratingCount} />}
         <CardMedia
            sx={{ cursor: 'pointer' }}
            onClick={routeToDetailsPage}
            component='img'
            height='175'
            image={pictureUrls[0]}
            alt='picture'
         />
         <CardContent sx={{ cursor: 'pointer' }} onClick={routeToDetailsPage}>
            <SubTitleStyle>
               {manufacturer} {type} {typeCode}
            </SubTitleStyle>
            <Typography variant='h5' color='primary'>
               <NumberFormat value={price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            </Typography>
         </CardContent>
         <Fade mountOnEnter unmountOnExit timeout={100} appear={isCardExpanded} in={isCardExpanded}>
            <div>
               <CardFooter
                  toSaveCartItems={{
                     _id,
                     displayImage: pictureUrls[0],
                     displayName: `${manufacturer} ${type} ${typeCode}`,
                     itemQuantity: 1,
                     price,
                     productType: pathNameForDetailsURL,
                  }}
               />
            </div>
         </Fade>
      </CustomCard>
   )
}

type ProductCardType = {
   _id: string
   manufacturer: string
   pictureUrls: string[]
   price: number
   type: string
   typeCode?: string
   ratingCount?: number
   pathNameForDetailsURL: string
}

export default ProductCard
