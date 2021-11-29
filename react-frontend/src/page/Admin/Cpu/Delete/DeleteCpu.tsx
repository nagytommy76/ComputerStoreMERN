import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteCpu = () => {
   const [allDetailedProduct, setAllDetaildeProduct] = useState<
      {
         _id: string
         manufacturer: string
         type: string
         price: number
         inStockQuantity: number
      }[]
   >()
   //    https://mui.com/components/data-grid/getting-started/
   useEffect(() => {
      axios.get('admin/cpu/get-to-delete').then((allCpu) => {
         if (allCpu.status === 200) setAllDetaildeProduct(allCpu.data.allProducts)
      })
   }, [])
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 750, minHeight: 130 }} aria-label='simple table'>
            <caption>Processzor termékek törlése</caption>
            <TableHead>
               <TableRow>
                  <TableCell>Termék ID</TableCell>
                  <TableCell align='right'>Gyártó</TableCell>
                  <TableCell align='right'>Típus</TableCell>
                  <TableCell align='right'>Ár</TableCell>
                  <TableCell align='right'>Raktáron</TableCell>
                  <TableCell align='right'>Törlés</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {allDetailedProduct?.map((product) => (
                  <TableRow hover key={product._id}>
                     <TableCell component='th' align='left'>
                        {product._id}
                     </TableCell>
                     <TableCell align='right'>{product.manufacturer}</TableCell>
                     <TableCell align='right'>{product.type}</TableCell>
                     <TableCell align='right'>{product.price} Ft</TableCell>
                     <TableCell align='right'>{product.inStockQuantity}</TableCell>
                     <TableCell>
                        <IconButton color='error'>
                           <DeleteIcon />
                        </IconButton>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}

export default DeleteCpu
