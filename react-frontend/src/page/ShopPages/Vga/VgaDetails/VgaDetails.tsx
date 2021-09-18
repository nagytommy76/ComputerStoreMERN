import React from 'react'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const VgaDetailTable = React.lazy(() => import('./VgaDetailTable'))

const VgaDetails = () => {
   return (
      <ProductDetails>
         <VgaDetailTable />
      </ProductDetails>
   )
}

export default VgaDetails
