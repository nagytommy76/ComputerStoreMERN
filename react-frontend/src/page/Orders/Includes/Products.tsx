import React from 'react'
import NumberFormat from 'react-number-format'

import { Products as ProductTypes } from '../OrderTypes'
import { StyledProduct, ProductImage, ProductDataStyle } from '../Styles'

import Typography from '@mui/material/Typography'

const Products: React.FC<{ products: ProductTypes[] }> = ({ products }) => {
   return (
      <>
         {products.map((prod) => (
            <StyledProduct key={prod._id}>
               <ProductImage src={prod.productImage} alt='' />
               <ProductDataStyle>
                  <Typography variant='h6'>{prod.productName}</Typography>
                  <Typography variant='body1' mt={2}>
                     Mennyiség: {prod.productQty} DB
                  </Typography>
                  <Typography color='primary' variant='body1' mt={2}>
                     Egységár: <NumberFormat value={prod.productPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
                  </Typography>
               </ProductDataStyle>
            </StyledProduct>
         ))}
      </>
   )
}

export default Products
