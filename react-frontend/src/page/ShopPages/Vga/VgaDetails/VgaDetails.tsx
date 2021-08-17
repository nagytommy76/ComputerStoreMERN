import React from 'react'
import { useLocation } from 'react-router'
import { vgaDetailType } from '../VgaTypes'
import ProductDetails from '../../BaseComponents/ProductDetailsPage/ProductDetails'
import { VgaDetailsContext } from './VgaDetailsContext/DetailsContext'

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
         <ProductDetails
            _id={_id}
            manufacturer={manufacturer}
            pictureUrls={pictureUrls}
            price={price}
            type={type}
            typeCode={typeCode}
            warranity={details.warranity}
         />
      </VgaDetailsContext.Provider>
   )
}

type LocationType = {
   _id: string
   details: vgaDetailType
   pictureUrls: string[]
   type: string
   manufacturer: string
   price: number
   typeCode: string
}

export default VgaDetails
