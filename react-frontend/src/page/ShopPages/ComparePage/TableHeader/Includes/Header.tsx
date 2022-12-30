import React from 'react'
import NumberFormat from 'react-number-format'
import { useAppSelector } from '../../../../../app/hooks'

import { StyledImage, StyledLink, StyledSpan } from '../../Styles/TableHeaderStyles'
import Typography from '@mui/material/Typography'

const Header: React.FC<{
   pictureUrl: string
   productID: string
   productDisplayName: string
   price: number
}> = ({ pictureUrl, price, productDisplayName, productID }) => {
   const productType = useAppSelector((state) => state.productCompare.selectedProductsByType[0].productType)
   return (
      <StyledSpan>
         <StyledLink
            underline='hover'
            color='secondary'
            href={`${productType}/${productType}-details/${productID}`}>
            <StyledImage src={pictureUrl} alt={productDisplayName} />
            <Typography variant='body1'>{productDisplayName}</Typography>
         </StyledLink>
         <Typography variant='h6' mt={1} mb={1}>
            <NumberFormat value={price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </Typography>
      </StyledSpan>
   )
}

export default Header
