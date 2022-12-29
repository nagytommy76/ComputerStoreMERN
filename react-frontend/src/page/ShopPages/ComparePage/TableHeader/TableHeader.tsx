import React from 'react'
import { HeaderTypes } from '../CompareTypes'
import { useAppSelector } from '../../../../app/hooks'

import AddToCartBtn from './Includes/AddToCartBtn'
import RemoveProduct from './Includes/RemoveProduct'

import { styled } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TableHeader: React.FC<{ compareProducts: HeaderTypes[] }> = ({ compareProducts }) => {
   const productType = useAppSelector((state) => state.productCompare.selectedProductsByType[0].productType)
   return (
      <TableHead>
         <TableRow>
            <TableCell>Ide majd kitalálom mi legyen</TableCell>
            {compareProducts.map((product) => (
               <TableCell key={product.productID} align='center'>
                  <StyledHeaderBox>
                     <RemoveProduct productID={product.productID} />
                     <StyledImage src={product.pictureUrl} alt={product.productDisplayName} />
                     <p>{product.productDisplayName}</p>
                     <AddToCartBtn
                        toSaveCartItems={{
                           _id: product.productID,
                           displayImage: product.pictureUrl,
                           displayName: product.productDisplayName,
                           itemQuantity: 1,
                           productType,
                           price: product.price,
                        }}
                     />
                  </StyledHeaderBox>
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   )
}

export default TableHeader

const StyledHeaderBox = styled('div')({})

const StyledImage = styled('img')({
   objectFit: 'contain',
   width: 180,
   height: 120,
})
