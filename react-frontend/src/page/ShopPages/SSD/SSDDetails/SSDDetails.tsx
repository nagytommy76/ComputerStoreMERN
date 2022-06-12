import React from 'react'
import { useParams } from 'react-router-dom'

import DetailsContext from '../../Context/DetailsContext'
import useGetDetails from '../../Hooks/useGetDetails'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./SSDDetailsTable'))

const SSDDetails = () => {
   const params = useParams() as { productId: string }

   const ssdDetails = useGetDetails('ssd', params.productId)

   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <DetailsContext.Provider
            value={{
               details: ssdDetails.details,
               productId: ssdDetails._id,
               manufacturer: ssdDetails.manufacturer,
               pictureUrls: ssdDetails.pictureUrls,
               price: ssdDetails.price,
               productType: 'ssd',
               type: ssdDetails.type,
               typeCode: ssdDetails.typeCode,
            }}
         >
            <ProductDetails>
               <DetailsTable />
            </ProductDetails>
         </DetailsContext.Provider>
      </React.Suspense>
   )
}

export default SSDDetails
