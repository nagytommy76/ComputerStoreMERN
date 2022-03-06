import React from 'react'
import { useParams } from 'react-router-dom'

import DetailsContext from '../../Context/DetailsContext'
import useGetDetails from '../../Hooks/useGetDetails'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./CpuDetailTable'))

const CpuDetails = () => {
   const params = useParams() as { productId: string }

   const cpuDetails = useGetDetails('cpu', params.productId)
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <DetailsContext.Provider
            value={{
               details: cpuDetails.details,
               productId: cpuDetails._id,
               manufacturer: cpuDetails.manufacturer,
               pictureUrls: cpuDetails.pictureUrls,
               price: cpuDetails.price,
               productType: 'hdd',
               type: cpuDetails.type,
               typeCode: cpuDetails.typeCode,
            }}
         >
            <ProductDetails>
               <DetailsTable details={cpuDetails.details} />
            </ProductDetails>
         </DetailsContext.Provider>
      </React.Suspense>
   )
}

export default CpuDetails
