import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardGridContainer, PageContainer } from './VgaStyle'

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

export type VgaType = {
   _id?: string
   itemNumber: string
   type: string
   typeCode?: string
   manufacturer: string
   price: number
   pictureUrls: string[]
}

export default Vga
