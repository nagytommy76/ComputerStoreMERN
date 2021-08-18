import React from 'react'
import { VgaDetailType } from '../VgaTypes'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const VgaDetailTable = React.lazy(() => import('./VgaDetailTable'))

const VgaDetails = () => {
   return (
      <ProductDetails>
         <VgaDetailTable />
      </ProductDetails>
   )
}

export type LocationType = {
   _id: string
   details: VgaDetailType
   pictureUrls: string[]
   type: string
   manufacturer: string
   price: number
   typeCode: string
}

export default VgaDetails
