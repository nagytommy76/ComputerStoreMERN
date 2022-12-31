import React from 'react'
import { HeaderTypes } from '../CompareTypes'
import { useAppSelector } from '../../../../app/hooks'

import AddToCartBtn from './Includes/AddToCartBtn'
import RemoveProduct from './Includes/RemoveProduct'
import Header from './Includes/Header'

import { StyledTableCell } from '../Styles/TableBodyStyle'
import { StyledHeaderBox } from '../Styles/TableHeaderStyles'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TableHeader: React.FC<{ compareProducts: HeaderTypes[] }> = ({ compareProducts }) => {
   const productType = useAppSelector((state) => state.productCompare.currentSelectedProductType)
   return (
      <TableHead>
         <TableRow>
            <StyledTableCell>Ide majd kitalálom mi legyen</StyledTableCell>
            {compareProducts.map((product) => (
               <StyledTableCell key={product.productID} align='left'>
                  <RemoveProduct productID={product.productID} />
                  <StyledHeaderBox>
                     <Header
                        pictureUrl={product.pictureUrl}
                        price={product.price}
                        productDisplayName={product.productDisplayName}
                        productID={product.productID}
                     />
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
