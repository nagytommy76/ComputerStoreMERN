import React from 'react'
import { useLocation } from 'react-router-dom'
import useGetDetails from '../../Hooks/useGetDetails'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const VgaDetailTable = React.lazy(() => import('./VgaDetailTable'))

const VgaDetails = () => {
   const { state } = useLocation()

   const vgaDetails = useGetDetails('hdd', state._id)
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails
            details={vgaDetails.details}
            _id={vgaDetails._id}
            productType='vga'
            pictureUrls={vgaDetails.pictureUrls}
            manufacturer={vgaDetails.manufacturer}
            price={vgaDetails.price}
            type={vgaDetails.type}
            typeCode={vgaDetails.typeCode}
         >
            <VgaDetailTable />
         </ProductDetails>
      </React.Suspense>
   )
}

export default VgaDetails
