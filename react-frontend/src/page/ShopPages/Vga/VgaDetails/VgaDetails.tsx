import React from 'react'

import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const VgaDetailTable = React.lazy(() => import('./VgaDetailTable'))

const VgaDetails = () => {
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails>
            <VgaDetailTable />
         </ProductDetails>
      </React.Suspense>
   )
}

export default VgaDetails
