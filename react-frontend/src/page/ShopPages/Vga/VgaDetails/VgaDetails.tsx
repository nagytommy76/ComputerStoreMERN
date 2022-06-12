import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsContext from '../../Context/DetailsContext'
import useGetDetails from '../../Hooks/useGetDetails'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const VgaDetailTable = React.lazy(() => import('./VgaDetailTable'))

const VgaDetails = () => {
   const params = useParams() as { productId: string }

   const vgaDetails = useGetDetails('vga', params.productId)
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <DetailsContext.Provider
            value={{
               details: vgaDetails.details,
               productId: vgaDetails._id,
               manufacturer: vgaDetails.manufacturer,
               pictureUrls: vgaDetails.pictureUrls,
               price: vgaDetails.price,
               productType: 'vga',
               type: vgaDetails.type,
               typeCode: vgaDetails.typeCode,
            }}
         >
            <ProductDetails>
               <VgaDetailTable />
            </ProductDetails>
         </DetailsContext.Provider>
      </React.Suspense>
   )
}

export default VgaDetails
