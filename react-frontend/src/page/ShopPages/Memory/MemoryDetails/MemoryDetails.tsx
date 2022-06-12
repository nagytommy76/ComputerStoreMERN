import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsContext from '../../Context/DetailsContext'
import useGetDetails from '../../Hooks/useGetDetails'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const MemoryTable = React.lazy(() => import('./MemoryDetailsTable'))

const MemoryDetails = () => {
   const params = useParams() as { productId: string }

   const memoryDetails = useGetDetails('memory', params.productId)
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <DetailsContext.Provider
            value={{
               details: memoryDetails.details,
               productId: memoryDetails._id,
               manufacturer: memoryDetails.manufacturer,
               pictureUrls: memoryDetails.pictureUrls,
               price: memoryDetails.price,
               productType: 'memory',
               type: memoryDetails.type,
               typeCode: memoryDetails.typeCode,
            }}
         >
            <ProductDetails>
               <MemoryTable />
            </ProductDetails>
         </DetailsContext.Provider>
      </React.Suspense>
   )
}

export default MemoryDetails
