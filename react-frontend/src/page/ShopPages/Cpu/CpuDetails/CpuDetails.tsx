import React from 'react'
import useGetDetails from '../../Hooks/useGetDetails'
import { useLocation } from 'react-router-dom'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./CpuDetailTable'))

const CpuDetails = () => {
   const { state } = useLocation()

   const cpuDetails = useGetDetails('hdd', state._id)
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails
            details={cpuDetails.details}
            _id={cpuDetails._id}
            productType='cpu'
            pictureUrls={cpuDetails.pictureUrls}
            manufacturer={cpuDetails.manufacturer}
            price={cpuDetails.price}
            type={cpuDetails.type}
            typeCode={cpuDetails.typeCode}
         >
            <DetailsTable />
         </ProductDetails>
      </React.Suspense>
   )
}

export default CpuDetails
