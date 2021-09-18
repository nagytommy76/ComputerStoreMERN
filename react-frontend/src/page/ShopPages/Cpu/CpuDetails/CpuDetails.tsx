import React from 'react'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./CpuDetailTable'))

const CpuDetails = () => {
   return (
      <ProductDetails>
         <DetailsTable />
      </ProductDetails>
   )
}

export default CpuDetails
