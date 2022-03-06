import React from 'react'
import { useParams } from 'react-router-dom'
import useGetDetails from '../../Hooks/useGetDetails'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const MemoryTable = React.lazy(() => import('./MemoryDetailsTable'))

const MemoryDetails = () => {
   const params = useParams() as { productId: string }

   const memoryDetails = useGetDetails('memory', params.productId)
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails
            details={memoryDetails.details}
            _id={memoryDetails._id}
            productType='memory'
            pictureUrls={memoryDetails.pictureUrls}
            manufacturer={memoryDetails.manufacturer}
            price={memoryDetails.price}
            type={memoryDetails.type}
            typeCode={memoryDetails.typeCode}
         >
            <MemoryTable details={memoryDetails.details} />
         </ProductDetails>
      </React.Suspense>
   )
}

export default MemoryDetails
