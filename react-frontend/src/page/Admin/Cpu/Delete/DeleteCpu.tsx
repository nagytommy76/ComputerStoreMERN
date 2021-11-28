import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DeleteCpu = () => {
   const [allDetailedProduct, setAllDetaildeProduct] = useState<{
      _id: String
      manufacturer: string
      type: string
      price: number
      inStockQuantity: number
   }>()
   //    https://mui.com/components/data-grid/getting-started/
   useEffect(() => {
      axios.get('admin/cpu/get-to-delete').then((allCpu) => {
         setAllDetaildeProduct(allCpu.data.allProducts)
         console.log(allDetailedProduct)
      })
   }, [])
   return (
      <div>
         <h1>Cpu törlése</h1>
      </div>
   )
}

export default DeleteCpu
