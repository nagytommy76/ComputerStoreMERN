import React from 'react'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./CpuDetailTable'))
const Rating = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/AddNew/Rating'))
const Summary = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/Summary/Summary'))

const CpuDetails = () => {
   return (
      <>
         <ProductDetails>
            <DetailsTable />
         </ProductDetails>
         <Rating />
         <Summary />
      </>
   )
}

export default CpuDetails
