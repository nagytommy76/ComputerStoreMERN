import React from 'react'
import { useLocation } from 'react-router'
import { VgaDetailType } from '../VgaTypes'
import { VgaDetailsContext } from './VgaDetailsContext/DetailsContext'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const VgaDetailTable = React.lazy(() => import('./VgaDetailTable'))

const VgaDetails = () => {
   const {
      state: { _id, details, pictureUrls, type, manufacturer, price, typeCode }
   } = useLocation<LocationType>()

   return (
      <VgaDetailsContext.Provider
         value={{
            _id,
            details,
            pictureUrls,
            type,
            manufacturer,
            price,
            typeCode
         }}>
         <ProductDetails>
            <VgaDetailTable details={details} />
         </ProductDetails>
      </VgaDetailsContext.Provider>
   )
}

type LocationType = {
   _id: string
   details: VgaDetailType
   pictureUrls: string[]
   type: string
   manufacturer: string
   price: number
   typeCode: string
}

export default VgaDetails
