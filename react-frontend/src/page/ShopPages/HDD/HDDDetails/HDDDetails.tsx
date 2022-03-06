import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsContext from '../../Context/DetailsContext'
import useGetDetails from '../../Hooks/useGetDetails'

import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const HDDDetailsTable = React.lazy(() => import('./HDDTable'))

const HDDDetails = () => {
   const params = useParams() as { productId: string }
   const hddDetails = useGetDetails('hdd', params.productId)

   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <DetailsContext.Provider
            value={{
               details: hddDetails.details,
               productId: hddDetails._id,
               manufacturer: hddDetails.manufacturer,
               pictureUrls: hddDetails.pictureUrls,
               price: hddDetails.price,
               productType: 'hdd',
               type: hddDetails.type,
               typeCode: hddDetails.typeCode,
            }}
         >
            <ProductDetails>
               <HDDDetailsTable details={hddDetails.details} />
            </ProductDetails>
         </DetailsContext.Provider>
      </React.Suspense>
   )
}

export default HDDDetails
