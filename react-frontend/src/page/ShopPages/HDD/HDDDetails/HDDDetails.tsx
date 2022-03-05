import React from 'react'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const HDDDetailsTable = React.lazy(() => import('./HDDTable'))

const HDDDetails = () => {
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails>
            <HDDDetailsTable />
         </ProductDetails>
      </React.Suspense>
   )
}

export default HDDDetails
