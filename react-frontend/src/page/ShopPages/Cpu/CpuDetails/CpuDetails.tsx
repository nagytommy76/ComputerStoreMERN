import React from 'react'

import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./CpuDetailTable'))

const CpuDetails = () => {
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails>
            <DetailsTable />
         </ProductDetails>
      </React.Suspense>
   )
}

export default CpuDetails
