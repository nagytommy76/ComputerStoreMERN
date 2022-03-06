import React from 'react'
import { useParams } from 'react-router-dom'
import useGetDetails from '../../Hooks/useGetDetails'

import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const HDDDetailsTable = React.lazy(() => import('./HDDTable'))

const HDDDetails = () => {
   const params = useParams() as { productId: string }
   const hddDetails = useGetDetails('hdd', params.productId)

   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails
            productType='hdd'
            details={hddDetails.details}
            _id={hddDetails._id}
            pictureUrls={hddDetails.pictureUrls}
            manufacturer={hddDetails.manufacturer}
            price={hddDetails.price}
            type={hddDetails.type}
            typeCode={hddDetails.typeCode}
         >
            <HDDDetailsTable details={hddDetails.details} />
         </ProductDetails>
      </React.Suspense>
   )
}

export default HDDDetails
