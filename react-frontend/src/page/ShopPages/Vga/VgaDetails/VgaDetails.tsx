import React from 'react'
import { useLocation } from 'react-router'
import { vgaDetailType } from '../VgaTypes'
import ProductDetails from '../../BaseComponents/ProductDetailsPage/ProductDetails'

const VgaDetails = () => {
   const {
      state: { _id, details, pictureUrls, type, manufacturer, price, typeCode }
   } = useLocation<LocationType>()

   return (
      <ProductDetails
         _id={_id}
         manufacturer={manufacturer}
         pictureUrls={pictureUrls}
         price={price}
         type={type}
         typeCode={typeCode}
         warranity={details.warranity}
      />
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
