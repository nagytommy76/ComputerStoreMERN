import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

const DeleteButton = React.lazy(() => import('../../Components/DeleteComponents/DeleteButton'))
const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))

const DeleteCpu = () => {
   const [allDetailedProduct, setAllDetaildeProduct] = useState<
      {
         _id: string
         manufacturer: string
         type: string
         price: number
         inStockQuantity: number
      }[]
   >([])
   //    https://mui.com/components/data-grid/getting-started/
   useEffect(() => {
      axios.get('admin/cpu/get-to-delete').then((allCpu) => {
         if (allCpu.status === 200) setAllDetaildeProduct(allCpu.data.allProducts)
      })
   }, [])

   return (
      <BaseTable>
         {allDetailedProduct.map((product) => (
            <TableRow hover key={product._id}>
               <TableCell component='th'>{product._id}</TableCell>
               <TableCell>{product.manufacturer}</TableCell>
               <TableCell>{product.type}</TableCell>
               <TableCell>
                  <NumberFormat thousandSeparator=' ' value={product.price} suffix=' Ft' displayType='text' />
               </TableCell>
               <TableCell>{product.inStockQuantity} (db)</TableCell>
               <TableCell>
                  <DeleteButton
                     allProducts={allDetailedProduct}
                     setAllProducts={setAllDetaildeProduct}
                     productTypeForURL='cpu'
                     productID={product._id}
                  />
               </TableCell>
            </TableRow>
         ))}
      </BaseTable>
   )
}

export default DeleteCpu
