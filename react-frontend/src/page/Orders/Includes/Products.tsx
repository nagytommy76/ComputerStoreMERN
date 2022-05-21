import React from 'react'
import NumberFormat from 'react-number-format'

import { Products as ProductTypes } from '../OrderTypes'
import { StyledProduct, ProductImage, ProductDataStyle } from '../Styles'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'

const Products: React.FC<{ products: ProductTypes[] }> = ({ products }) => {
   return (
      <>
         {products.map(prod => (
            <StyledProduct key={prod._id}>
               <ProductImage src={prod.productImage} alt='' />
               <ProductDataStyle>
                  <Typography color='primary' variant='h6'>
                     <Link to={`../${prod.productType}/${prod.productType}-details/${prod.productID}`}>
                        {prod.productName}
                     </Link>
                  </Typography>
                  <Typography variant='body1' mt={2}>
                     Mennyiség: {prod.productQty} DB
                  </Typography>
                  <Typography color='primary' variant='body1' mt={2}>
                     Egységár:{' '}
                     <NumberFormat
                        value={prod.productPrice}
                        thousandSeparator=' '
                        suffix=' Ft'
                        displayType='text'
                     />
                  </Typography>
               </ProductDataStyle>
            </StyledProduct>
         ))}
      </>
   )
}

// http://localhost:3000/hdd/hdd-details/62210abd07d5ed2968c3b8c7

export default Products
