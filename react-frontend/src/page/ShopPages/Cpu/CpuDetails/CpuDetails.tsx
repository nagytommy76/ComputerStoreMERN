import React from 'react'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./CpuDetailTable'))
const Rating = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/Rating'))

const CpuDetails = () => {
   return (
      <>
         <ProductDetails>
            <DetailsTable />
         </ProductDetails>
         <Rating />
      </>
   )
}

export default CpuDetails
