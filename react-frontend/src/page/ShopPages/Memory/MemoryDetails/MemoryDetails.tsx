import React from 'react'

import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const MemoryTable = React.lazy(() => import('./MemoryDetailsTable'))

const MemoryDetails = () => {
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails>
            <MemoryTable />
         </ProductDetails>
      </React.Suspense>
   )
}

export default MemoryDetails
