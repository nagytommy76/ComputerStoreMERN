import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardGridContainer, PageContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))

const Vga = () => {
   const [vgaProducts, setVgaProducts] = useState<null | VgaType[]>(null)
   useEffect(() => {
      axios.get(`/vga`).then((vgas) => setVgaProducts(vgas.data))
   }, [])
   return (
      <PageContainer>
         <CardGridContainer>
            {vgaProducts &&
               vgaProducts.map((product) => (
                  <ProductCard
                     key={product._id}
                     itemNumber={product.itemNumber}
                     manufacturer={product.manufacturer}
                     pictureUrls={product.pictureUrls}
                     price={product.price}
                     type={product.type}
                     typeCode={product.typeCode}
                  />
               ))}
         </CardGridContainer>
      </PageContainer>
   )
}

// export type VgaType = {
//    _id?: string
//    itemNumber: string
//    type: string
//    typeCode?: string
//    manufacturer: string
//    price: number
//    pictureUrls: string[]
//    details?: vgaDetailType
// }

// export type vgaDetailType = {
//    _id: string
//    gpuManufacturer: string
//    pcieType: string
//    gpuBaseClock: number
//    gpuPeakClock: number
//    vramCapacity: number
//    vramType: string
//    vramBandwidth: number
//    powerConsuption: number
//    description?: string
//    powerPin?: string
//    warranity?: number
//    displayPort?: number
//    DVI?: number
//    HDMI?: number
//    minPowerSupply?: string
//    length?: number
//    manufacturerPageUrl?: string
//    vramSpeed: number
//    streamProcessors: number
// }

export default Vga
