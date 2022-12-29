import React from 'react'
import { HeaderTypes } from '../CompareTypes'
import { useAppSelector } from '../../../../app/hooks'

import AddToCartBtn from './Includes/AddToCartBtn'
import RemoveProduct from './Includes/RemoveProduct'

import { StyledTableCell } from '../Styles/TableBodyStyle'
import { StyledHeaderBox, StyledImage, StyledSpan } from '../Styles/TableHeaderStyles'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TableHeader: React.FC<{ compareProducts: HeaderTypes[] }> = ({ compareProducts }) => {
   const productType = useAppSelector((state) => state.productCompare.selectedProductsByType[0].productType)
   return (
      <TableHead>
         <TableRow>
            <StyledTableCell>Ide majd kitalálom mi legyen</StyledTableCell>
            {compareProducts.map((product) => (
               <StyledTableCell key={product.productID} align='center'>
                  <StyledHeaderBox>
                     <RemoveProduct productID={product.productID} />
                     <StyledSpan>
                        <StyledImage src={product.pictureUrl} alt={product.productDisplayName} />
                        <span>
                           <p>{product.productDisplayName}</p>
                           <p>{product.price} Ft</p>
                        </span>
                     </StyledSpan>
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
               </StyledTableCell>
            ))}
         </TableRow>
      </TableHead>
   )
}

export default TableHeader
